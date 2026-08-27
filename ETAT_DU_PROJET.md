# État du projet PWA

## Objet du dépôt

- Emplacement local : `/Users/ja/NOUVELLE STRUCTURE/JEUX/Apps-PWA/`.
- Ce dépôt autonome est destiné à regrouper « JA — Réseau PERT » et les futures applications web installables de la gamme JA.
- Chaque application occupe son propre sous-dossier afin de préserver son fonctionnement et ses données.

## État Git

- Dépôt Git local indépendant initialisé le 27 août 2026.
- Branche actuelle : `main`.
- Le premier commit local regroupe les 12 fichiers contrôlés du dépôt et de « JA — Réseau PERT ».
- Le second commit local enregistre l’organisation du suivi général et du suivi propre à chaque application.
- Le troisième commit local consigne la création du dépôt GitHub vide et sa configuration comme destination `origin`.
- GitHub CLI est authentifié localement avec le compte `88JA88`.
- Le dépôt GitHub public vide `88JA88/Apps-PWA` est configuré comme destination locale `origin`.
- Aucun commit local n’a encore été envoyé et GitHub Pages n’est pas activé.

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
- Un état propre à « JA — Réseau PERT » a été créé le 27 août 2026 dans `JA-Reseau-PERT/ETAT_DU_PROJET.md`. L’état général reste à la racine du dépôt ; le nouveau fichier regroupe uniquement les caractéristiques, vérifications et étapes restantes de cette application. Aucun fichier du programme n’a été modifié et rien n’a été publié.
- Le second commit local a été créé le 27 août 2026 sous le titre « Organiser le suivi par application ». Il contient uniquement l’actualisation de l’état général et le nouvel état propre à « JA — Réseau PERT ». Rien n’a été publié.
- La connexion GitHub locale du compte `88JA88` a été renouvelée le 27 août 2026. Le contrôle avec GitHub CLI confirme l’authentification et l’utilisation du protocole HTTPS. Aucun dépôt distant n’a été créé, aucun lien `origin` n’a été ajouté et rien n’a été publié.
- Le dépôt GitHub public vide `88JA88/Apps-PWA` a été créé le 27 août 2026 et ajouté localement comme destination `origin` à l’adresse `https://github.com/88JA88/Apps-PWA.git`. Aucun commit n’a été envoyé et GitHub Pages n’a pas été activé.
- Le troisième commit local a été créé le 27 août 2026 sous le titre « Consigner la configuration GitHub ». Il contient uniquement les actualisations de l’état général et de l’état propre à « JA — Réseau PERT ». Aucun commit n’a été envoyé sur GitHub.

## Prochaine étape proposée

- Après autorisation explicite, envoyer les trois commits locaux vers `origin/main`, sans encore activer GitHub Pages.

## Reste à faire

- Envoyer les commits vers GitHub uniquement après accord explicite.
- Activer ensuite la publication HTTPS GitHub Pages après accord explicite.
- Effectuer l’installation et les contrôles réels sur iPad.
