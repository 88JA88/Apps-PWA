# Textes d’espèces

Le fichier maître est `species-notes.js`.

Pour ajouter un texte sous une espèce, remplacez la chaîne vide correspondant à son identifiant. Tant que la chaîne est vide, l’application affiche « Texte à compléter par l’administrateur. ». Exemple :

```js
'C-CIBOIRE': 'Texte validé par l’administrateur.',
```

Le texte s’affiche dans les résultats et dans la clé consultable. Les utilisateurs ne disposent d’aucune commande pour le modifier : seul le fichier maître local peut être changé avant un redéploiement.

## Noms scientifiques

Le fichier maître est `scientific-names.js`. Pour renseigner un nom manquant, remplacez la chaîne vide correspondante. Exemple :

```js
'L-PUDIQUE': 'Nom scientifique validé',
```

Le nom apparaît en petit italique à côté du libellé d’espèce et devient la recherche utilisée par le lien MycoDB.
