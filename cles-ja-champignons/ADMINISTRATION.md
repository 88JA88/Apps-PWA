# Administration locale des fiches

Double-cliquez sur `Lancer administration.command`. L’application s’ouvre alors en mode administration sur votre iMac : vous pouvez modifier le texte d’une fiche, choisir ses photos et renseigner leurs légendes.

Le mode d’administration est limité à `127.0.0.1` : il n’existe pas dans la PWA publique. Les modifications sont enregistrées dans `group-guides-data.js` et les images restent dans `PHOTOS/`. Elles restent locales jusqu’à une publication volontaire.

## Photos des fiches

1. Ouvrez la fiche concernée en mode administration. Sous son texte, les photos déjà retenues pour cette fiche restent affichées.
2. Cliquez sur « Choisir une photo… », puis allez chercher l’image dans le dossier de votre choix, notamment `PHOTOS`.
3. L’application copie l’image choisie dans le dossier `PHOTOS` du projet et l’ajoute aussitôt à la fiche. Si cette image y est déjà présente, elle ne sera pas dupliquée.
4. Écrivez sa légende et son texte alternatif, puis cliquez sur « Enregistrer la fiche » si vous les avez modifiés.
5. « Enlever cette photo de la fiche » retire seulement son affichage de cette fiche : **le fichier n’est jamais supprimé du dossier `PHOTOS`**, ni dans le dossier où vous l’avez choisi.

Pour arrêter le serveur d’administration, fermez sa fenêtre Terminal ou pressez `Ctrl + C` dans celle-ci.

## Fiches de groupes

Le fichier maître est `group-guides-data.js`. Il contient le titre, le texte et les photos de chaque groupe. Les utilisateurs de la PWA publique ne peuvent pas les modifier ; seul le mode d’administration local permet leur mise à jour avant une publication volontaire.
