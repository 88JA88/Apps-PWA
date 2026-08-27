# JA — Réseau PERT

## Notice utilisateur

JA — Réseau PERT est une application de création et de suivi de plannings en réseau PERT. Elle peut être installée comme une application sur l’appareil et, après son premier chargement, utilisée sans connexion à Internet.

Le planning en cours est conservé automatiquement sur l’appareil. Cette conservation automatique facilite la reprise du travail, mais elle ne remplace pas une sauvegarde régulière du projet dans un fichier JSON.

## Premier démarrage

Lors du premier démarrage, une connexion à Internet est nécessaire pour installer complètement l’application. Elle pourra ensuite être rouverte hors connexion.

- Si un projet a déjà été utilisé sur cet appareil, l’application le reprend automatiquement.
- Sinon, le planning est vide.
- Le bouton **Nouveau projet** prépare un planning vide. Si un planning est déjà affiché, son remplacement doit être confirmé.
- Le bouton **Ouvrir** permet de charger un projet existant au format JSON.

## Navigateurs recommandés

- **Chrome** est recommandé sur Windows et Android.
- **Safari** est recommandé sur Mac et iPad.
- **Opera** est compatible, mais n’a pas encore été testé réellement avec cette application.
- D’autres navigateurs peuvent être utilisés, avec une méthode d’installation ou de sauvegarde parfois différente.

## Installation

### Sur Mac

1. Ouvrez dans Safari l’adresse de l’application qui vous a été communiquée.
2. Attendez que l’application soit entièrement affichée.
3. Dans le menu **Fichier** de Safari, choisissez **Ajouter au Dock…**.
4. Conservez le nom **Réseau PERT**, puis cliquez sur **Ajouter**.
5. L’application est désormais accessible depuis le Dock et le dossier Applications.

### Sur iPad

1. Ouvrez dans Safari l’adresse de l’application qui vous a été communiquée.
2. Attendez que l’application soit entièrement affichée.
3. Touchez le bouton **Partager** de Safari.
4. Choisissez **Sur l’écran d’accueil**, puis **Ajouter**.
5. Lancez ensuite l’application depuis son icône **Réseau PERT**.

## Sauvegarde et restauration du projet

### Sauvegarder

1. Cliquez ou touchez **Enregistrer**.
2. Selon l’appareil et le navigateur, choisissez l’emplacement du fichier ou confirmez son téléchargement.
3. La sauvegarde porte un nom de la forme `planning-JJ-MM-HHhMM.json`.
4. Conservez ce fichier dans un emplacement sûr et identifiable.

Sur certains appareils, la sauvegarde est placée automatiquement dans le dossier de téléchargement configuré. Le nom du fichier actif apparaît en haut de l’application.

### Restaurer

1. Cliquez ou touchez **Ouvrir**.
2. Choisissez le fichier JSON précédemment sauvegardé.
3. Si un autre planning est déjà affiché, vérifiez qu’il a été enregistré, puis confirmez son remplacement.
4. Contrôlez le nom du fichier affiché et les totaux du projet.

N’ouvrez pas et ne modifiez pas directement le contenu du fichier JSON avec un traitement de texte. Pour transférer un projet vers un autre appareil, copiez simplement sa sauvegarde JSON, puis utilisez **Ouvrir** sur le nouvel appareil.

## Conservation automatique

L’application mémorise automatiquement le planning en cours sur l’appareil utilisé. Après une fermeture ou un redémarrage, elle reprend normalement le dernier projet mémorisé.

Cette copie locale peut toutefois disparaître si l’application est désinstallée, si les données de Safari sont effacées ou si l’appareil est réinitialisé. Il est donc recommandé d’utiliser régulièrement **Enregistrer** et de conserver au moins une sauvegarde JSON indépendante.

## Utilisation hors connexion

Après l’installation et un premier chargement complet en ligne :

- l’application peut être ouverte sans connexion à Internet ;
- le dernier planning mémorisé reste disponible ;
- un projet JSON présent sur l’appareil peut être ouvert ;
- une sauvegarde JSON peut être exportée.

Si l’application ne s’ouvre pas hors connexion, reconnectez temporairement l’appareil, ouvrez-la une fois complètement, puis réessayez.

## Créer et organiser un planning

- **Créer une activité sur Mac :** double-cliquez dans une zone vide du planning.
- **Sélectionner une activité :** cliquez dessus ; sur iPad, touchez-la brièvement.
- **Déplacer une activité :** faites-la glisser.
- **Modifier une activité :** double-cliquez dessus.
- **Ouvrir sa fiche détaillée sur Mac :** faites un clic droit sur l’activité.
- **Ouvrir sa fiche détaillée sur iPad :** maintenez le doigt sur l’activité.
- **Supprimer une activité :** sélectionnez-la, choisissez **Supprimer l’activité**, puis confirmez.

Le menu **Unité** permet de travailler en jours, en heures ou en semaines. Une semaine représente cinq jours ouvrés ou sept jours calendaires selon le calendrier choisi.

## Liaisons entre les activités

- Pour créer une liaison, faites glisser le rond bleu de l’activité précédente jusqu’au rond bleu de l’activité suivante.
- Sur Mac, sélectionnez une flèche puis utilisez **Suppr**, **Retour arrière** ou **Supprimer la liaison**. Une confirmation est toujours demandée.
- Sur iPad, touchez la flèche, choisissez **Supprimer la liaison**, puis confirmez.
- Les touches de suppression restent sans effet sur les liaisons pendant la saisie dans un champ.

## Ressources, calendrier et coûts

- **Ressources** permet de créer et modifier le catalogue des ressources et leurs coûts unitaires.
- La fiche détaillée d’une activité permet de lui affecter une ressource et une charge.
- Une ressource déjà affectée ne peut pas être supprimée du catalogue.
- **Calendrier** définit les jours ouvrés ou calendaires et les dates non travaillées.
- **Vérifier le projet** recherche les erreurs bloquantes et analyse les charges de ressources.
- **Budget mensuel** compare les coûts prévus au budget renseigné.

## Tableaux, diagramme et impression

- **Tableau des affectations** récapitule les activités, les ressources et leurs coûts.
- **Tableau des activités** présente les dates, les marges et les dépendances.
- **Diagramme de Gantt** affiche une vue chronologique consultative du projet.
- **Imprimer** prépare le planning pour l’impression ou l’enregistrement en PDF selon les possibilités de l’appareil.

## Précautions importantes

- Enregistrez le projet avant de choisir **Nouveau projet** ou d’ouvrir un autre fichier.
- Effectuez une sauvegarde JSON après toute modification importante.
- Conservez une copie de sauvegarde en dehors de l’application et, si possible, sur un second support.
- Ne renommez pas l’extension `.json` et ne modifiez pas manuellement le contenu du fichier.
- Avant de supprimer une activité, une liaison ou une ressource, lisez attentivement la demande de confirmation.

## Désinstallation

Avant toute désinstallation, exportez le projet avec **Enregistrer** et vérifiez que le fichier JSON est bien présent.

- Sur Mac, retirez l’application **Réseau PERT** comme une application web Safari.
- Sur iPad, maintenez le doigt sur son icône, puis choisissez **Supprimer l’app**.

La désinstallation peut supprimer la copie locale automatiquement mémorisée. Elle ne supprime pas les sauvegardes JSON déjà exportées et conservées séparément.

## En cas de difficulté

1. Fermez puis rouvrez l’application.
2. Si nécessaire, reconnectez temporairement l’appareil à Internet et rechargez l’application.
3. Utilisez **Ouvrir** pour restaurer la dernière sauvegarde JSON valide.
4. Notez l’appareil utilisé, l’action effectuée et le message affiché avant de demander de l’aide.
