const NOM_CACHE = "ja-reseau-pert-coquille-v1";
const PREFIXE_CACHE = "ja-reseau-pert-coquille-";
const ENTREE_APPLICATION = new URL("./index.html", self.registration.scope).href;
const FICHIERS_APPLICATION = [
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icons/ja-reseau-pert-180.png",
  "./assets/icons/ja-reseau-pert-192.png",
  "./assets/icons/ja-reseau-pert-512.png",
  "./assets/icons/ja-reseau-pert-1024.png"
].map((chemin) => new URL(chemin, self.registration.scope).href);

self.addEventListener("install", (evenement) => {
  evenement.waitUntil(
    caches.open(NOM_CACHE)
      .then((cache) => cache.addAll(FICHIERS_APPLICATION))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (evenement) => {
  evenement.waitUntil(
    caches.keys()
      .then((noms) => Promise.all(
        noms
          .filter((nom) => nom.startsWith(PREFIXE_CACHE) && nom !== NOM_CACHE)
          .map((nom) => caches.delete(nom))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (evenement) => {
  const requete = evenement.request;
  if (requete.method !== "GET") return;

  const adresse = new URL(requete.url);
  if (adresse.origin !== self.location.origin) return;

  if (requete.mode === "navigate") {
    evenement.respondWith(
      fetch(requete)
        .then(async (reponse) => {
          if (!reponse.ok) {
            return (await caches.match(ENTREE_APPLICATION)) || reponse;
          }

          const cache = await caches.open(NOM_CACHE);
          await cache.put(ENTREE_APPLICATION, reponse.clone());
          return reponse;
        })
        .catch(() => caches.match(ENTREE_APPLICATION))
    );
    return;
  }

  evenement.respondWith(
    caches.match(requete).then((reponseEnCache) => reponseEnCache || fetch(requete))
  );
});
