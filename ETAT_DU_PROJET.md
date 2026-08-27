# État du projet PWA

## Objet du dépôt

- Emplacement local : `/Users/ja/NOUVELLE STRUCTURE/JEUX/Apps-PWA/`.
- Ce dépôt autonome est destiné à regrouper « JA — Réseau PERT » et les futures applications web installables de la gamme JA.
- Chaque application occupe son propre sous-dossier afin de préserver son fonctionnement et ses données.

## État Git

- Dépôt Git local indépendant initialisé le 27 août 2026.
- Branche actuelle : `main`.
- Le premier commit local regroupe les 12 fichiers contrôlés du dépôt et de « JA — Réseau PERT ».
- Aucun dépôt GitHub distant n’est configuré.
- Rien n’est publié depuis ce dépôt.

## Application présente

### `JA-Reseau-PERT/`

- `index.html` : application « JA — Réseau PERT », issue de la version stable de JA Project sans réécriture du programme.
- `manifest.webmanifest` : manifeste installable utilisant le nom « JA — Réseau PERT », le nom court « Réseau PERT », une portée limitée au dossier de l’application et l’affichage autonome.
- `service-worker.js` : fonctionnement hors connexion avec cache propre `ja-reseau-pert-coquille-v1`.
- `assets/icons/` : image maître et icônes PNG de 180, 192, 512 et 1 024 px.
- `NOTICE_UTILISATEUR.md` : notice validée couvrant le premier démarrage, les navigateurs recommandés, l’installation, la sauvegarde, la restauration et le fonctionnement hors connexion.
- Les clés de stockage local de cette PWA sont distinctes de celles de la version stable de JA Project.
- Aucun fichier JSON personnel n’est inclus dans le cache hors connexion.

## Vérifications déjà validées

- Manifeste JSON valide, chemins relatifs cohérents et icônes aux dimensions attendues.
- Installation réelle réussie avec Safari sur Mac.
- Importation d’un planning JSON, conservation automatique et restauration après rechargement réussies.
- Redémarrage hors connexion réussi avec restauration du planning en cours.
- Exportation hors connexion réussie sur Mac vers un fichier JSON valide.
- L’installation et les mêmes contrôles réels sur iPad restent à effectuer après publication HTTPS.

## Historique de cette préparation

- Le dossier PWA a été déplacé le 27 août 2026 depuis `JA Project/PWA/` vers `/Users/ja/NOUVELLE STRUCTURE/JEUX/PWA/`, sans modification de l’application.
- Le dépôt Git local autonome a été initialisé sur `main`, sans commit ni publication.
- `AGENTS.md` et `ETAT_DU_PROJET.md` ont été créés pour assurer le suivi autonome du dépôt.
- Le dossier autonome a ensuite été renommé `/Users/ja/NOUVELLE STRUCTURE/JEUX/Apps-PWA/` pour rendre sa fonction plus explicite. Le dépôt Git et l’application sont restés inchangés.
- Un fichier `.gitignore` limité à `.DS_Store` a été ajouté le 27 août 2026. Il ignore ces fichiers système macOS à la racine et dans tous les sous-dossiers, sans exclure aucun fichier nécessaire aux applications.
- Le contenu du premier commit local a été préparé et contrôlé le 27 août 2026 : 12 fichiers utiles sont sélectionnés, comprenant les documents du dépôt, la notice, l’application, le manifeste, le service worker et les cinq images. Aucun `.DS_Store` ni fichier JSON personnel n’est sélectionné. Le manifeste, la syntaxe du service worker et les dimensions des quatre icônes finales ont été contrôlés. Aucun commit n’a encore été créé et rien n’a été publié.
- Le premier commit local a été créé le 27 août 2026 sous le titre « Initialiser le dépôt des applications PWA ». Aucun dépôt distant n’a été configuré et rien n’a été publié.

## Prochaine étape proposée

- Après autorisation explicite, préparer la création et la configuration du dépôt GitHub distant, sans publier tant que l’adresse et les réglages n’ont pas été validés.

## Reste à faire

- Configurer le futur dépôt GitHub uniquement après accord explicite.
- Publier ensuite en HTTPS après accord explicite.
- Effectuer l’installation et les contrôles réels sur iPad.
