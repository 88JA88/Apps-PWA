# État de l’application « JA — Réseau PERT »

## Règles de travail

- Les règles permanentes du dépôt sont définies dans `../AGENTS.md`.
- Ne jamais réécrire l’application ni modifier une fonction validée sans l’accord explicite de l’utilisateur.
- Ne traiter qu’une modification à la fois et tester chaque changement avant validation.
- Ne rien publier sans l’accord explicite de l’utilisateur.

## Emplacement et fichiers

- Dossier : `/Users/ja/NOUVELLE STRUCTURE/JEUX/Apps-PWA/JA-Reseau-PERT/`.
- `index.html` : application complète « JA — Réseau PERT », avec CSS et JavaScript intégrés.
- `manifest.webmanifest` : manifeste PWA limité au dossier de l’application.
- `service-worker.js` : installation et fonctionnement hors connexion.
- `assets/icons/` : image maître et icônes PNG de 180, 192, 512 et 1 024 px.
- `NOTICE_UTILISATEUR.md` : notice utilisateur validée.

## Principes conservés

- La PWA reprend le programme stable de JA Project sans réécriture.
- Son titre de page et son titre visible sont « JA — Réseau PERT ».
- Le planning en cours est conservé automatiquement dans le stockage local de l’appareil.
- Les clés de stockage sont propres à cette PWA :
  - `ja-reseau-pert-pwa-sauvegarde-automatique-v1` ;
  - `ja-reseau-pert-pwa-catalogue-ressources-v1` ;
  - `ja-reseau-pert-pwa-nom-fichier-actif-v1`.
- Le cache hors connexion est propre à l’application : `ja-reseau-pert-coquille-v1`.
- Le cache contient uniquement l’application, son manifeste et ses quatre icônes finales ; aucun planning ni fichier JSON personnel n’est mis en cache.
- L’importation et l’exportation des projets restent au format JSON `planning-reseau`, version 1.

## Vérifications validées

- Manifeste JSON valide et chemins relatifs cohérents.
- Syntaxe du service worker contrôlée.
- Dimensions des quatre icônes finales contrôlées.
- Installation réelle réussie avec Safari sur Mac.
- Importation d’un planning comportant 9 activités et 13 liaisons réussie.
- Conservation automatique et restauration après rechargement réussies.
- Redémarrage et utilisation hors connexion réussis sur Mac.
- Exportation hors connexion réussie vers un fichier JSON valide.
- Notice utilisateur validée, avec Safari recommandé sur Mac et iPad, Chrome sur Windows et Android, et Opera signalé comme compatible mais non encore testé réellement.

## État de publication

- L’application n’est pas publiée depuis le dépôt autonome `Apps-PWA`.
- Aucun dépôt GitHub distant n’est encore configuré.
- Aucune adresse HTTPS définitive n’est encore validée.

## Prochaine étape proposée

- Après la préparation et la validation du dépôt GitHub général `Apps-PWA`, publier cette application en HTTPS uniquement avec l’accord explicite de l’utilisateur.

## Reste à faire

- Valider l’adresse HTTPS définitive.
- Publier après accord explicite.
- Installer ensuite l’application depuis cette adresse dans Safari sur iPad.
- Contrôler réellement sur iPad l’ouverture, la conservation automatique, le fonctionnement hors connexion, l’importation et l’exportation JSON.
