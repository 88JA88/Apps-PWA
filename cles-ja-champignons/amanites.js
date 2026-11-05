/* Clé des Amanites : transcription de la planche fournie, sans renvois au livre. */
Object.assign(terminals.AMANITE, {
  next: 'amanites-depart',
  nextLabel: 'Ouvrir la clé des Amanites'
});

Object.assign(terminals, {
  'A-DES-CESARS': {name: 'A. DES CÉSARS', species:true, mycodb:'Amanita caesarea', scientific:'Amanita caesarea'},
  'A-CITRINE': {name: 'A. CITRINE', species:true, mycodb:'Amanite citrine', scientific:'Amanita citrina'},
  'A-PULVERULENTE': {name: 'A. PULVÉRULENTE', species:true, mycodb:'Amanite pulvérulente'},
  'A-PRINTANIERE': {name: 'A. PRINTANIÈRE', species:true, mycodb:'Amanite printanière', scientific:'Amanita verna'},
  'A-PHALLOIDE': {name: 'A. PHALLOÏDE', species:true, mycodb:'Amanite phalloïde', scientific:'Amanita phalloides'},
  'A-BRUNISSANTE': {name: 'A. BRUNISSANTE', species:true, mycodb:'Amanite brunissante'},
  'A-TUE-MOUCHES': {name: 'A. TUE-MOUCHES', species:true, mycodb:'Amanite tue-mouches', scientific:'Amanita muscaria'},
  'A-A-VERRUES-JAUNES': {name: 'A. À VERRUES JAUNES', species:true, mycodb:'Amanite à verrues jaunes', scientific:'Amanita gemmata'},
  'A-ROUGISSANTE': {name: 'A. ROUGISSANTE', species:true, mycodb:'Amanite rougissante', scientific:'Amanita rubescens'}
});

Object.assign(nodes, {
  'amanites-depart': {
    title: 'Clé des Amanites',
    help: 'Observez la volve autour du bulbe.',
    answers: [
      ['amanites-volve-sac', 'Volve en sac membraneux autour du bulbe'],
      ['amanites-volve-floconneuse', 'Volve floconneuse autour du bulbe']
    ]
  },
  'amanites-volve-sac': {
    title: 'Lamelles, pied et chapeau',
    help: 'Choisissez l’ensemble de caractères observé.',
    answers: [
      ['A-DES-CESARS', 'Lamelles et pied jaunes ; chapeau orange, sans verrues'],
      ['amanites-colorees-bulbe-margine', 'Lamelles blanches ; pied et chapeau colorés et bulbe marginé'],
      ['amanites-pied-blanc-grisatre', 'Lamelles blanches ; pied blanc ou grisâtre']
    ]
  },
  'amanites-colorees-bulbe-margine': {
    title: 'Couleur du chapeau',
    help: 'Observez la couleur du chapeau.',
    answers: [
      ['A-CITRINE', 'Chapeau jaune pâle'],
      ['A-PULVERULENTE', 'Chapeau brun grisâtre']
    ]
  },
  'amanites-pied-blanc-grisatre': {
    title: 'Chapeau et bulbe',
    help: 'Choisissez l’ensemble de caractères observé.',
    answers: [
      ['A-PRINTANIERE', 'Chapeau blanc, convexe'],
      ['A-PHALLOIDE', 'Chapeau vert, jaunâtre ou brunâtre ; à bulbe rond'],
      ['A-BRUNISSANTE', 'Chapeau brunâtre ou blanchâtre ; à bulbe marginé et fendu longitudinalement']
    ]
  },
  'amanites-volve-floconneuse': {
    title: 'Taille, couleur et réaction au toucher',
    help: 'Choisissez l’ensemble de caractères observé.',
    answers: [
      ['A-TUE-MOUCHES', 'Grande espèce à chapeau rouge orangé, parsemé de verrues blanches'],
      ['A-A-VERRUES-JAUNES', 'Petite espèce à chapeau orange, couvert de verrues jaunes'],
      ['A-ROUGISSANTE', 'Espèce de bonne taille, dont le chapeau et le pied se teintent de rouge vineux au toucher']
    ]
  }
});

renderTable();
render();
