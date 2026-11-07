/* Affichage des fiches de groupes et de leur administration locale. */
const groupGuides = window.GROUP_GUIDES || {};
const isLocalHost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
const isAdminMode = isLocalHost && new URLSearchParams(window.location.search).get('admin') === '1';
let adminMessage = '';
let availablePhotos = [];

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

Object.entries(groupGuides).forEach(([id, guide]) => {
  if (!terminals[id]) return;
  Object.assign(terminals[id], {
    next: `fiche-${id.toLowerCase()}`,
    nextLabel: `Ouvrir la fiche ${terminals[id].name.toLowerCase()}`,
    guide: true
  });
  nodes[`fiche-${id.toLowerCase()}`] = { guide, answers: [] };
});

function guidePhotos(guide) {
  if (Array.isArray(guide.photos)) return guide.photos;
  return guide.photo?.src ? [guide.photo] : [];
}

function imageBlock(guide) {
  const photos = guidePhotos(guide);
  if (!photos.length) return isAdminMode
    ? `<figure class="group-photo group-photo-empty"><div class="photo-placeholder">Aucune photo n’est encore choisie pour cette fiche.</div></figure>`
    : '';
  return `<div class="group-photo-gallery">${photos.map((photo, index) => {
  const savedWidth = Number(photo?.width);
  const widthStyle = Number.isFinite(savedWidth) && savedWidth >= 180 ? ` style="--photo-width: ${Math.round(savedWidth)}px"` : '';
  const content = photo?.src
    ? `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || '')}">`
    : `<div class="photo-placeholder">Photo à ajouter</div>`;
  const dropZone = isAdminMode
    ? `<div class="photo-dropzone" data-photo-index="${index}"${widthStyle}>${content}<span class="photo-resize-handle" data-photo-resize title="Redimensionner la photo" aria-label="Redimensionner la photo">↗↙</span></div>`
    : content;
  return `<figure class="group-photo${photo?.src ? '' : ' group-photo-empty'}"${widthStyle}>${dropZone}<figcaption>${escapeHtml(photo?.caption || 'Légende de la photo à renseigner.')}</figcaption></figure>`;
  }).join('')}</div>`;
}

function adminBlock(id, guide) {
  if (isAdminMode) {
    return `<section class="admin-editor" aria-label="Administration de cette fiche">
      <h4>Modifier cette fiche</h4>
      <p class="admin-explanation">Ces modifications sont enregistrées seulement dans le fichier maître local. Elles ne seront visibles publiquement qu’après votre publication.</p>
      <form id="guide-editor" data-guide-id="${escapeHtml(id)}">
        <label>Titre de la fiche<input id="guide-title" type="text" value="${escapeHtml(guide.title)}"></label>
        <label>Texte de la fiche<textarea id="guide-paragraphs" rows="18">${escapeHtml(guide.paragraphs.join('\n\n'))}</textarea></label>
        <div class="photo-fields">${guidePhotos(guide).map((photo, index) => `<section data-photo-fields data-photo-index="${index}">
          <strong>Photo ${index + 1}</strong>
          <label>Texte alternatif<input data-photo-alt type="text" value="${escapeHtml(photo.alt || '')}" placeholder="Description de l’image"></label>
          <label>Légende de la photo<input data-photo-caption type="text" value="${escapeHtml(photo.caption || '')}" placeholder="Légende affichée sous l’image"></label>
          <input data-photo-width type="hidden" value="${escapeHtml(photo.width || '')}">
          <button class="remove-photo" data-remove-photo data-photo-index="${index}" type="button">Enlever cette photo de la fiche</button>
        </section>`).join('')}</div>
        <section class="photo-library" aria-label="Photos du dossier PHOTOS">
          <h5>Photos du dossier PHOTOS</h5>
          <p>Choisissez une photo à ajouter à cette fiche. Les photos déjà choisies restent visibles au-dessus.</p>
          <div id="available-photos" class="available-photos"><p class="muted">Chargement des photos…</p></div>
        </section>
        <div class="admin-actions"><button class="secondary" type="submit">Enregistrer la fiche</button></div>
        <p id="admin-feedback" class="admin-feedback" aria-live="polite">${escapeHtml(adminMessage)}</p>
      </form>
    </section>`;
  }
  if (isLocalHost) return `<button class="add-photo" data-enter-admin type="button">Modifier cette fiche</button>`;
  return '';
}

const renderBeforeGroupGuides = render;
render = function () {
  renderBeforeGroupGuides();
  const guide = nodes[phase]?.guide;
  const resultPanel = document.querySelector('.result-panel');
  if (!guide) {
    resultPanel.hidden = false;
    return;
  }

  resultPanel.hidden = true;
  el('step').textContent = 'Fiche de groupe';
  el('question').textContent = guide.title;
  el('help').textContent = 'Texte consultable hors connexion.';
  el('unknown').hidden = true;
  el('status').textContent = '';
  const id = Object.entries(groupGuides).find(([, value]) => value === guide)?.[0] || '';
  el('answers').innerHTML = `<article class="group-guide"><h3>${guide.title}</h3>${guide.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}${imageBlock(guide)}${adminBlock(id, guide)}${guide.source ? `<p class="guide-source">${guide.source}</p>` : ''}</article>`;
  if (isAdminMode && id) renderAvailablePhotos(id);
};

async function postAdmin(path, payload) {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || 'Enregistrement impossible.');
  return body;
}

function feedback(message) {
  adminMessage = message;
  const node = document.querySelector('#admin-feedback');
  if (node) node.textContent = message;
}

function photoTitle(photo) {
  return String(photo.name || '').replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
}

async function renderAvailablePhotos(id) {
  const container = document.querySelector('#available-photos');
  if (!container) return;
  try {
    if (!availablePhotos.length) {
      const response = await fetch('./api/admin/photos', { cache: 'no-store' });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Lecture du dossier PHOTOS impossible.');
      availablePhotos = Array.isArray(body.photos) ? body.photos : [];
    }
    const selected = new Set(guidePhotos(groupGuides[id]).map(photo => photo.src));
    container.innerHTML = availablePhotos.length
      ? availablePhotos.map(photo => {
        const selectedHere = selected.has(photo.src);
        return `<article class="available-photo"><img src="${escapeHtml(photo.src)}" alt=""><span>${escapeHtml(photoTitle(photo))}</span><button type="button" data-select-photo data-photo-src="${escapeHtml(photo.src)}" data-photo-name="${escapeHtml(photo.name)}"${selectedHere ? ' disabled' : ''}>${selectedHere ? 'Déjà dans la fiche' : 'Ajouter à la fiche'}</button></article>`;
      }).join('')
      : '<p class="muted">Le dossier PHOTOS ne contient encore aucune image.</p>';
  } catch (error) {
    container.innerHTML = `<p class="muted">${escapeHtml(error.message)}</p>`;
  }
}

document.addEventListener('click', event => {
  if (event.target.closest('[data-enter-admin]')) {
    const url = new URL(window.location.href);
    url.searchParams.set('admin', '1');
    window.location.href = url.toString();
  }
  const removeButton = event.target.closest('[data-remove-photo]');
  if (isAdminMode && removeButton) {
    const id = document.querySelector('#guide-editor')?.dataset.guideId;
    const index = Number(removeButton.dataset.photoIndex);
    if (!id || !Number.isInteger(index)) return;
    const guide = guideFromEditor(id);
    guide.photos.splice(index, 1);
    feedback('Retrait de la photo…');
    postAdmin('./api/admin/save-guide', { id, guide }).then(result => {
      Object.assign(groupGuides[id], result.guide);
      adminMessage = 'Photo retirée de la fiche. Le fichier d’origine reste conservé localement.';
      render();
    }).catch(error => feedback(error.message));
    return;
  }
  const selectButton = event.target.closest('[data-select-photo]');
  if (!isAdminMode || !selectButton || selectButton.disabled) return;
  const id = document.querySelector('#guide-editor')?.dataset.guideId;
  if (!id) return;
  const guide = guideFromEditor(id);
  const src = selectButton.dataset.photoSrc;
  if (guide.photos.some(photo => photo.src === src)) return;
  guide.photos.push({ src, alt: photoTitle({ name: selectButton.dataset.photoName }), caption: '' });
  feedback('Ajout de la photo à la fiche…');
  postAdmin('./api/admin/save-guide', { id, guide }).then(result => {
    Object.assign(groupGuides[id], result.guide);
    adminMessage = 'Photo ajoutée à la fiche. Le fichier reste dans le dossier PHOTOS.';
    render();
  }).catch(error => feedback(error.message));
});

document.addEventListener('pointerdown', event => {
  const handle = event.target.closest?.('[data-photo-resize]');
  if (!isAdminMode || !handle) return;
  event.preventDefault();
  event.stopPropagation();
  const zone = handle.closest('[data-photo-dropzone]');
  const article = zone?.closest('.group-guide');
  if (!zone || !article) return;
  const startX = event.clientX;
  const startWidth = zone.getBoundingClientRect().width;
  const maxWidth = article.getBoundingClientRect().width;
  const resize = move => {
    const width = Math.round(Math.min(maxWidth, Math.max(180, startWidth + move.clientX - startX)));
    zone.style.setProperty('--photo-width', `${width}px`);
    const index = zone.dataset.photoIndex;
    document.querySelector(`[data-photo-fields][data-photo-index="${index}"] [data-photo-width]`)?.setAttribute('value', width);
  };
  const stop = () => {
    window.removeEventListener('pointermove', resize);
    window.removeEventListener('pointerup', stop);
    feedback('Taille modifiée : cliquez sur « Enregistrer la fiche » pour la conserver.');
  };
  window.addEventListener('pointermove', resize);
  window.addEventListener('pointerup', stop, { once: true });
});

function guideFromEditor(id) {
  const current = groupGuides[id];
  const paragraphs = el('guide-paragraphs').value.split(/\n\s*\n/).map(value => value.trim()).filter(Boolean);
  const photos = guidePhotos(current).map((photo, index) => {
    const fields = document.querySelector(`[data-photo-fields][data-photo-index="${index}"]`);
    return {
      ...photo,
      alt: fields?.querySelector('[data-photo-alt]')?.value.trim() || '',
      caption: fields?.querySelector('[data-photo-caption]')?.value.trim() || '',
      width: Number(fields?.querySelector('[data-photo-width]')?.value) || undefined
    };
  });
  const guide = { ...current, title: el('guide-title').value.trim() || current.title, paragraphs, photos };
  delete guide.photo;
  return guide;
}

document.addEventListener('submit', async event => {
  if (!isAdminMode || event.target.id !== 'guide-editor') return;
  event.preventDefault();
  const id = event.target.dataset.guideId;
  const guide = guideFromEditor(id);
  if (!guide.paragraphs.length) {
    feedback('Le texte de la fiche ne peut pas être vide.');
    return;
  }
  feedback('Enregistrement de la fiche…');
  try {
    const result = await postAdmin('./api/admin/save-guide', { id, guide });
    Object.assign(groupGuides[id], result.guide);
    adminMessage = 'Fiche enregistrée dans le fichier maître local.';
    render();
  } catch (error) {
    feedback(error.message);
  }
});

renderTable();
render();
