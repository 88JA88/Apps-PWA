const CACHE_NAME = 'cles-ja-champignons-v63';
const APP_FILES = ['./', './index.html', './styles.css', './overrides.css', './app.js?v=20261107-grisette', './couleur.js?v=20261107-paxille', './noir.js?v=20261107-psalliota', './terrain.js', './terrain-agarics.js', './bolets.js?v=20261107-bolets-16', './group-guides-data.js?v=20261107-photos', './group-guides.js?v=20261107-admin-fiches', './PHOTOS/Cortinaire%20violet.jpg', './PHOTOS/Cortinaire%20Orellanus.jpg', './PHOTOS/Cortinaires%20(BON).jpg', './PHOTOS/cortinaire.jpg', './manifest.webmanifest', './assets/logo-ja-champignons.svg'];

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
