/*
 * Fichier maître des noms scientifiques.
 * Laissez une chaîne vide lorsqu’un nom doit encore être vérifié.
 */
const scientificNames = {
  'C-ORANGEE': 'Hygrophoropsis aurantiaca',
  'C-CIBOIRE': 'Cantharellus cibarius',
  'C-A-FLOCONS': '',
  'C-JAUNATRE': '',
  'C-EN-ENTONNOIR': 'Craterellus tubaeformis',
  'C-CLAVIFORME': 'Gomphus clavatus',
  'C-OMBONEE': '',
  'A-DES-CESARS': 'Amanita caesarea',
  'A-CITRINE': 'Amanita citrina',
  'A-PULVERULENTE': '',
  'A-PRINTANIERE': 'Amanita verna',
  'A-PHALLOIDE': 'Amanita phalloides',
  'A-BRUNISSANTE': '',
  'A-TUE-MOUCHES': 'Amanita muscaria',
  'A-A-VERRUES-JAUNES': 'Amanita gemmata',
  'A-ROUGISSANTE': 'Amanita rubescens',
  'L-PUDIQUE': 'Agaricus naucinus',
  'L-EN-BOUCLIER': 'Agaricus clypeolarius',
  'L-ELEVEE': 'Macrolepiota procera',
  'L-AMERICAINE': 'Leucoagaricus americanus',
  'L-BRUNE': 'Lepiota brunnea',
  'L-DE-MORGAN': 'Chlorophyllum molybdites'
};

Object.entries(scientificNames).forEach(([id, name]) => {
  if (terminals[id] && name) terminals[id].scientific = name;
});

renderTable();
render();
