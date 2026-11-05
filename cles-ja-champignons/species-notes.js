/*
 * Fichier maître des textes d'espèces.
 * L'administrateur modifie uniquement les chaînes ci-dessous, puis redéploie l'application.
 * Aucun écran public ne permet de les modifier.
 */
const speciesNotes = {
  'C-ORANGEE': '',
  'C-CIBOIRE': '',
  'C-A-FLOCONS': '',
  'C-JAUNATRE': '',
  'C-EN-ENTONNOIR': '',
  'C-CLAVIFORME': '',
  'C-OMBONEE': '',
  'A-DES-CESARS': 'Excellent comestible (Oronge vraie)',
  'A-CITRINE': 'Vénéneuse / Douteuse',
  'A-PULVERULENTE': 'Dangereuse',
  'A-PRINTANIERE': 'Mortelle !!! (Oronge cigüe blanche)',
  'A-PHALLOIDE': 'Mortelle !!! (Oronge cigüe verte)',
  'A-BRUNISSANTE': 'Mortelle !!!',
  'A-TUE-MOUCHES': 'Vénéneuse ! ',
  'A-A-VERRUES-JAUNES': 'Douteuse',
  'A-ROUGISSANTE': 'Excellent comestible (Golmotte, Oronge vineuse)',
  'L-PUDIQUE': 'Bon comestible',
  'L-EN-BOUCLIER': 'Dangereuse !',
  'L-ELEVEE': 'Excellent comestible (coulemelle)',
  'L-AMERICAINE': 'Bon comestible',
  'L-BRUNE': 'toxique',
  'L-DE-MORGAN': 'Vénéneuse !'
};

const notePlaceholder = 'Texte à compléter par l’administrateur.';
Object.entries(speciesNotes).forEach(([id, text]) => {
  if (terminals[id]) terminals[id].note = text || notePlaceholder;
});

renderTable();
render();
