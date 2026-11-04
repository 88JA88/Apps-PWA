/* Clé des Lépiotes : transcription de la planche fournie, sans pages ni texte de consommation. */
Object.assign(terminals['LÉPIOTE'], {
  next: 'lepiotes-depart',
  nextLabel: 'Ouvrir la clé des Lépiotes'
});

Object.assign(terminals, {
  'L-LISSE': {name: 'L. LISSE', species:true, mycodb:'Lepiota naucina'},
  'L-EN-BOUCLIER': {name: 'L. EN BOUCLIER', species:true, mycodb:'Lepiote en bouclier'},
  'L-ELEVEE': {name: 'L. ÉLEVÉE', species:true, mycodb:'Lepiote elevee'},
  'L-AMERICAINE': {name: 'L. AMÉRICAINE', species:true, mycodb:'Lepiote americaine'},
  'L-BRUNE': {name: 'L. BRUNE', species:true, mycodb:'Lepiote brune'},
  'L-DE-MORGAN': {name: 'L. DE MORGAN', species:true, mycodb:'Lepiote de Morgan'}
});

Object.assign(nodes, {
  'lepiotes-depart': {
    title: 'Clé des Lépiotes',
    help: 'Observez la couleur et l’aspect du chapeau, ainsi que les lamelles et le pied.',
    answers: [
      ['L-LISSE', 'Chapeau blanc non écailleux ; lamelles et pied blancs'],
      ['lepiotes-chapeau-ecailleux', 'Chapeau écailleux et coloré']
    ]
  },
  'lepiotes-chapeau-ecailleux': {
    title: 'Anneau',
    help: 'Observez si l’anneau est fixe ou mobile.',
    answers: [
      ['L-EN-BOUCLIER', 'Anneau fixe, déchiqueté'],
      ['lepiotes-anneau-mobile', 'Anneau mobile']
    ]
  },
  'lepiotes-anneau-mobile': {
    title: 'Aspect du pied',
    help: 'Observez la longueur et l’aspect du pied.',
    answers: [
      ['L-ELEVEE', 'Pied très long, écailleux'],
      ['lepiotes-pied-court', 'Pied plus court et lisse']
    ]
  },
  'lepiotes-pied-court': {
    title: 'Forme du pied',
    help: 'Observez la forme du pied.',
    answers: [
      ['L-AMERICAINE', 'Pied fusiforme'],
      ['lepiotes-pied-trapu', 'Pied trapu et bulbeux']
    ]
  },
  'lepiotes-pied-trapu': {
    title: 'Sporée',
    help: 'La sporée intervient ici pour distinguer les possibilités restantes.',
    answers: [
      ['L-BRUNE', 'Sporée blanche'],
      ['L-DE-MORGAN', 'Sporée verdâtre']
    ]
  }
});

renderTable();
render();
