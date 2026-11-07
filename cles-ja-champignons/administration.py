#!/usr/bin/env python3
"""Serveur local réservé à l'administration des fiches JA-Champignons."""

from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import base64
import binascii
import hashlib
import json
from pathlib import Path
import re
import threading
import webbrowser

ROOT = Path(__file__).resolve().parent
DATA_FILE = ROOT / 'group-guides-data.js'
PHOTOS_DIR = ROOT / 'PHOTOS'
PREFIX = 'window.GROUP_GUIDES = '
IMAGE_SUFFIXES = {'.jpg', '.jpeg', '.png', '.webp'}


def read_guides():
    content = DATA_FILE.read_text(encoding='utf-8')
    start = content.index(PREFIX) + len(PREFIX)
    end = content.rindex(';')
    return json.loads(content[start:end])


def write_guides(guides):
    payload = '/* Fichier maître des fiches de groupes. Modifié localement par l’administration. */\n'
    payload += PREFIX + json.dumps(guides, ensure_ascii=False, indent=2) + ';\n'
    temporary = DATA_FILE.with_suffix('.tmp')
    temporary.write_text(payload, encoding='utf-8')
    temporary.replace(DATA_FILE)


class AdminHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        if self.path.endswith(('group-guides-data.js', 'group-guides.js', 'service-worker.js')):
            self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def send_json(self, status, body):
        encoded = json.dumps(body, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def request_body(self, maximum=12 * 1024 * 1024):
        length = int(self.headers.get('Content-Length', '0'))
        if length <= 0 or length > maximum:
            raise ValueError('Le fichier est absent ou trop volumineux (maximum : 12 Mo).')
        return json.loads(self.rfile.read(length).decode('utf-8'))

    def do_POST(self):
        try:
            if self.path == '/api/admin/save-guide':
                data = self.request_body()
                self.save_guide(data)
            elif self.path == '/api/admin/import-photo':
                data = self.request_body(17 * 1024 * 1024)
                self.import_photo(data)
            else:
                self.send_json(HTTPStatus.NOT_FOUND, {'error': 'Adresse inconnue.'})
        except (ValueError, KeyError, json.JSONDecodeError) as error:
            self.send_json(HTTPStatus.BAD_REQUEST, {'error': str(error)})
        except Exception:
            self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {'error': 'Enregistrement local impossible.'})

    def do_GET(self):
        if self.path == '/api/admin/photos':
            PHOTOS_DIR.mkdir(exist_ok=True)
            photos = [
                {'name': file.name, 'src': f'PHOTOS/{file.name}'}
                for file in sorted(PHOTOS_DIR.iterdir(), key=lambda item: item.name.casefold())
                if file.is_file() and file.suffix.casefold() in IMAGE_SUFFIXES
            ]
            self.send_json(HTTPStatus.OK, {'photos': photos})
            return
        super().do_GET()

    def save_guide(self, data):
        identifier = data.get('id', '')
        guide = data.get('guide')
        if not isinstance(guide, dict) or not isinstance(guide.get('paragraphs'), list):
            raise ValueError('Fiche invalide.')
        guides = read_guides()
        if identifier not in guides:
            raise ValueError('Fiche inconnue.')
        clean = {
            'title': str(guide.get('title', '')).strip(),
            'paragraphs': [str(text).strip() for text in guide['paragraphs'] if str(text).strip()]
        }
        if not clean['title'] or not clean['paragraphs']:
            raise ValueError('Le titre et le texte de la fiche sont obligatoires.')
        photos = guide.get('photos')
        if not isinstance(photos, list):
            photos = [guide['photo']] if isinstance(guide.get('photo'), dict) else []
        clean['photos'] = []
        for photo in photos:
            if not isinstance(photo, dict) or not photo.get('src'):
                continue
            src = str(photo['src'])
            if not src.startswith('PHOTOS/'):
                raise ValueError('La photo doit être enregistrée dans le dossier PHOTOS.')
            saved_photo = {
                'src': src,
                'alt': str(photo.get('alt', '')).strip(),
                'caption': str(photo.get('caption', '')).strip()
            }
            width = photo.get('width')
            if isinstance(width, (int, float)) and 180 <= width <= 2400:
                saved_photo['width'] = round(width)
            clean['photos'].append(saved_photo)
        guides[identifier] = clean
        write_guides(guides)
        self.send_json(HTTPStatus.OK, {'guide': clean})

    def import_photo(self, data):
        """Copie une image choisie par l'administrateur dans PHOTOS, sans rien supprimer."""
        filename = Path(str(data.get('filename', ''))).name
        encoded = str(data.get('data', ''))
        suffix = Path(filename).suffix.casefold()
        if suffix not in IMAGE_SUFFIXES:
            raise ValueError('Choisissez une image JPEG, PNG ou WebP.')
        if not encoded.startswith('data:image/') or ',' not in encoded:
            raise ValueError('Le fichier choisi n’est pas une image valide.')
        try:
            image = base64.b64decode(encoded.split(',', 1)[1], validate=True)
        except (ValueError, binascii.Error) as error:
            raise ValueError('Lecture de l’image impossible.') from error
        if not image or len(image) > 12 * 1024 * 1024:
            raise ValueError('La photo est absente ou trop volumineuse (maximum : 12 Mo).')

        PHOTOS_DIR.mkdir(exist_ok=True)
        digest = hashlib.sha256(image).digest()
        for existing in PHOTOS_DIR.iterdir():
            if existing.is_file() and existing.suffix.casefold() in IMAGE_SUFFIXES:
                if hashlib.sha256(existing.read_bytes()).digest() == digest:
                    self.send_json(HTTPStatus.OK, {'photo': {'name': existing.name, 'src': f'PHOTOS/{existing.name}'}})
                    return

        stem = re.sub(r'[^\w .-]+', '-', Path(filename).stem, flags=re.UNICODE).strip(' .-') or 'photo'
        candidate = PHOTOS_DIR / f'{stem}{suffix}'
        number = 2
        while candidate.exists():
            candidate = PHOTOS_DIR / f'{stem}-{number}{suffix}'
            number += 1
        candidate.write_bytes(image)
        self.send_json(HTTPStatus.OK, {'photo': {'name': candidate.name, 'src': f'PHOTOS/{candidate.name}'}})

def main():
    server = ThreadingHTTPServer(('127.0.0.1', 4184), AdminHandler)
    address = 'http://127.0.0.1:4184/?admin=1'
    print(f'Administration locale : {address}')
    threading.Timer(0.4, lambda: webbrowser.open(address)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nAdministration arrêtée.')
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
