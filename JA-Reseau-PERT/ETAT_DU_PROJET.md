# État de l’application « JA — Réseau PERT »

## Règles de travail

- Les règles permanentes du dépôt sont définies dans `../AGENTS.md`.
- Ne jamais réécrire l’application ni modifier une fonction validée sans l’accord explicite de l’utilisateur.
- Ne traiter qu’une modification à la fois et tester chaque changement avant validation.
- Ne rien publier sans l’accord explicite de l’utilisateur.

## Emplacement et fichiers

- Dossier : `/Users/ja/NOUVELLE STRUCTURE/JEUX/Apps-PWA/JA-Reseau-PERT/`.
- `index.html` : application complète « JA — Réseau PERT », avec CSS et JavaScript intégrés.
- `accueil.html` : page locale de distribution avec installation assistée, ouverture de l’application et ouverture de la notice PDF dans un nouvel onglet.
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
- Le cache hors connexion est propre à l’application : `ja-reseau-pert-coquille-v2`.
- Le cache contient l’application, la page d’accueil, la notice PDF, le manifeste et les quatre icônes finales ; aucun planning ni fichier JSON personnel n’est mis en cache.
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
- Déploiement GitHub Pages terminé avec le statut `built` ; page HTML, manifeste, service worker et icône servis en HTTPS avec les statuts et types de contenu attendus.
- Contrôle dans le navigateur réussi à l’adresse publique : titre et en-tête « JA — Réseau PERT », commandes « Ouvrir » et « Enregistrer » visibles, aucune erreur ni aucun avertissement de console.
- Notice utilisateur complétée localement par les méthodes d’installation propres à Safari, Chrome, Edge et Opera, ainsi que par l’avertissement qu’un fichier `.html` enregistré n’est pas une application installée. Cette actualisation n’est pas encore publiée.
- Notice PDF A4 créée localement dans `../output/pdf/NOTICE_UTILISATEUR_JA_RESEAU_PERT.pdf`. Les quatre pages ont été contrôlées visuellement une à une ; aucun texte tronqué, débordement ou symbole manquant ne subsiste. Le Markdown source et l’application sont inchangés, et le PDF n’est pas publié.
- Page de distribution `accueil.html` créée et testée localement sur ordinateur et à 390 px de largeur. Les commandes d’installation, d’ouverture de l’application et d’ouverture du PDF sont présentes, les chemins répondent correctement, et aucune erreur de console n’a été relevée. Le PDF s’ouvre dans un nouvel onglet afin d’éviter le téléchargement forcé, moins fiable dans Safari. Le service worker met en cache cette page et le PDF sans remplacer l’entrée hors connexion de l’application. Rien n’est publié.
- Le message de repli de la page d’accueil a été simplifié en « L’application reste accessible en ligne tant qu’elle n’est pas installée. », notamment pour l’ouverture directe du fichier local. Rien n’est publié.
- Le sous-titre de la page d’accueil a été supprimé et le message visible dès l’ouverture précise maintenant que l’application reste accessible en ligne en cliquant sur « Ouvrir Réseau PERT » tant qu’elle n’est pas installée. Cette formulation a été publiée par le commit `0214240` et contrôlée sur la page HTTPS.
- La page d’accueil, la notice PDF et le cache `ja-reseau-pert-coquille-v2` ont été publiés par le commit `b01cf3a`. Le déploiement GitHub Pages est terminé avec l’état `built`. Les adresses HTTPS de la page d’accueil et du PDF répondent avec le statut 200 et le PDF est servi en `application/pdf`.

## État de publication

- L’application est publiée en HTTPS depuis la racine de la branche `main` du dépôt public `88JA88/Apps-PWA`.
- Adresse validée : `https://88ja88.github.io/Apps-PWA/JA-Reseau-PERT/`.
- Adresse de distribution à communiquer : `https://88ja88.github.io/Apps-PWA/JA-Reseau-PERT/accueil.html`.
- GitHub Pages utilise HTTPS forcé.

## Prochaine étape proposée

- Effectuer un essai utilisateur réel depuis la page d’accueil HTTPS publiée.

## Reste à faire

- Installer ensuite l’application depuis cette adresse dans Safari sur iPad.
- Contrôler réellement sur iPad l’ouverture, la conservation automatique, le fonctionnement hors connexion, l’importation et l’exportation JSON.
