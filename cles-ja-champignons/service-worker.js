const CACHE_NAME = 'cles-ja-champignons-v21';
const APP_FILES = ['./', './index.html', './styles.css', './overrides.css', './app.js', './couleur.js', './noir.js', './terrain.js', './terrain-agarics.js', './chanterelles.js', './amanites.js', './lepiotes.js', './species-notes.js', './mycodb-results.js', './manifest.webmanifest', './assets/logo-ja-champignons.svg'];

self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting())
));
self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
