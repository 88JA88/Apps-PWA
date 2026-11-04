/* Clé des Chanterelles : transcription de la planche fournie, sans renvois au livre. */
Object.assign(terminals.CHANTERELLE, {
  next: 'chanterelles-depart',
  nextLabel: 'Ouvrir la clé des Chanterelles'
});

Object.assign(terminals, {
  'C-ORANGEE': {name: 'C. ORANGÉE', species:true, mycodb:'Chanterelle orangée'},
  'C-CIBOIRE': {name: 'C. CIBOIRE', species:true, mycodb:'Chanterelle ciboire'},
  'C-A-FLOCONS': {name: 'C. À FLOCONS', species:true, mycodb:'Chanterelle à flocons'},
  'C-JAUNATRE': {name: 'C. JAUNÂTRE', species:true, mycodb:'Chanterelle jaunâtre'},
  'C-EN-ENTONNOIR': {name: 'C. EN ENTONNOIR', species:true, mycodb:'Chanterelle en entonnoir'},
  'C-CLAVIFORME': {name: 'C. CLAVIFORME', species:true, mycodb:'Chanterelle claviforme'},
  'C-OMBONEE': {name: 'C. OMBONÉE', species:true, mycodb:'Chanterelle ombonée'}
});

Object.assign(nodes, {
  'chanterelles-depart': {
    title: 'Clé des Chanterelles',
    help: 'Observez la couleur du chapeau et des lamelles.',
    answers: [
      ['chanterelles-jaunes-orangees', 'Chapeau et lamelles jaunes ou orangés'],
      ['chanterelles-autres-couleurs', 'Chapeau et lamelles d’une couleur autre que ci-dessus']
    ]
  },
  'chanterelles-jaunes-orangees': {
    title: 'Aspect des lamelles',
    help: 'Observez si les lamelles sont nettement individualisées ou peu saillantes.',
    answers: [
      ['C-ORANGEE', 'Lamelles bien distinctes, à tranche aiguë'],
      ['chanterelles-peu-saillantes', 'Lamelles peu saillantes']
    ]
  },
  'chanterelles-peu-saillantes': {
    title: 'Forme du chapeau',
    help: 'Choisissez la forme observée.',
    answers: [
      ['C-CIBOIRE', 'Chapeau plat ou déprimé à marge enroulée'],
      ['chanterelles-entonnoir', 'Chapeau en entonnoir']
    ]
  },
  'chanterelles-entonnoir': {
    title: 'Taille et écailles',
    help: 'Observez l’ampleur de l’entonnoir et la présence d’écailles à l’intérieur.',
    answers: [
      ['C-A-FLOCONS', 'Espèce formant un gros entonnoir jaune avec des écailles à l’intérieur'],
      ['chanterelles-petites-non-ecailleuses', 'Espèces plus petites et non écailleuses']
    ]
  },
  'chanterelles-petites-non-ecailleuses': {
    title: 'Couleur générale',
    help: 'Choisissez la couleur générale observée.',
    answers: [
      ['C-JAUNATRE', 'Couleur générale : jaune ou orangé'],
      ['C-EN-ENTONNOIR', 'Couleur générale : plutôt jaune sale ou brun']
    ]
  },
  'chanterelles-autres-couleurs': {
    title: 'Chapeau et lamelles',
    help: 'Choisissez l’ensemble de caractères observé.',
    answers: [
      ['C-CLAVIFORME', 'Chapeau plat ou concave, grisâtre ou pourpre ; lamelles à peine marquées'],
      ['C-OMBONEE', 'Chapeau petit, grisâtre, avec une saillie aiguë au centre ; lamelles blanches bien distinctes, à tranche aiguë']
    ]
  }
});

renderTable();
render();
