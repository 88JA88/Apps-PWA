/* Clé des Bolets : transcription de la planche fournie, sans renvois de pages. */
Object.assign(terminals.BOLETS, {
  next: 'bolets-tubes',
  nextLabel: 'Ouvrir la clé des Bolets'
});

Object.assign(terminals, {
  'BOLET-POMME-DE-PIN': {
    name: 'STROBILOMYCES (Bolet Pomme de Pin)',
    species: true,
    mycodb: 'Strobilomyces strobilaceus'
  },
  'BOLETIN-VEINE': { name: 'BOLETIN VEINÉ', species: true, mycodb: 'Boletinus porosus' },
  'BOLETIN-PEINT': { name: 'BOLETIN PEINT', species: true },
  'BOLETIN-REMARQUABLE': { name: 'BOLETIN REMARQUABLE', species: true },
  'BOLETIN-PIED-CREUX': { name: 'BOLETIN À PIED CREUX', species: true, mycodb: 'Boletus cavipes' },
  'BOLET-BLEUISSANT': { name: 'BOLET BLEUISSANT', species: true, mycodb: 'Boletus cyanescens' },
  'BOLET-JAUNE': { name: 'BOLET JAUNE', species: true, mycodb: 'Boletus luteus' },
  'BOLET-PIED-POINTILLE': { name: 'BOLET À PIED POINTILLÉ', species: true },
  'BOLET-AMERICAIN': { name: 'BOLET AMÉRICAIN', species: true },
  'BOLET-BAI': { name: 'BOLET BAI', species: true },
  'BOLET-GRANULE': { name: 'BOLET GRANULÉ', species: true, mycodb: 'Boletus granulatus' },
  'BOLET-ROUX': { name: 'BOLET ROUX', species: true, mycodb: 'Boletus versipellis' },
  'BOLET-PIED-JAUNE': { name: 'BOLET À PIED JAUNE', species: true },
  'BOLET-COMESTIBLE': { name: 'CÈPE DE BORDEAUX', species: true },
  'BOLET-AMER': { name: 'BOLET AMER', species: true, mycodb: 'Boletus felleus' },
  'BOLET-INDECIS': { name: 'BOLET INDÉCIS', species: true, mycodb: 'Boletus indecisus' },
  'BOLET-RUGUEUX': { name: 'BOLET RUGUEUX', species: true, mycodb: 'Boletus scaber' },
  'BOLET-PIED-LISSE': { name: 'BOLET À PIED LISSE', species: true, mycodb: 'Boletus subglabripes' }
});

Object.assign(nodes, {
  'bolets-tubes': {
    title: 'Clé des Bolets — tubes',
    help: 'Observez si les tubes adhèrent à la chair ou s’en séparent facilement.',
    answers: [
      ['bolets-adherents', 'Tubes difficilement séparables du chapeau'],
      ['bolets-separables', 'Tubes séparables de la chair (Bolets véritables)']
    ]
  },
  'bolets-adherents': {
    title: 'Chapeau et pied',
    help: 'Observez l’aspect général du chapeau et du pied.',
    answers: [
      ['BOLET-POMME-DE-PIN', 'Chapeau et pied couverts de grosses écailles brunes ou noires'],
      ['bolets-rayonnants', 'Chapeau lisse, poilu ou écailleux ; tubes en rangées rayonnantes']
    ]
  },
  'bolets-rayonnants': {
    title: 'Chapeau et pied',
    help: 'Observez le chapeau, le pied et les écailles.',
    answers: [
      ['BOLETIN-VEINE', 'Chapeau brun, lisse ; pied latéral ou excentrique'],
      ['bolets-ecailleux-annele', 'Chapeau écailleux ; pied annelé']
    ]
  },
  'bolets-ecailleux-annele': {
    title: 'Écailles et pied',
    help: 'Comparez la couleur et la densité des écailles, ainsi que le pied.',
    answers: [
      ['BOLETIN-PEINT', 'Écailles rouges, fibrilleuses et serrées ; pied plein'],
      ['BOLETIN-REMARQUABLE', 'Écailles grisâtres sur fond rouge, dispersées ; pied plein'],
      ['BOLETIN-PIED-CREUX', 'Écailles brunes, denses ; pied creux']
    ]
  },
  'bolets-separables': {
    title: 'Couleur du chapeau',
    help: 'Observez la couleur principale du chapeau.',
    answers: [
      ['BOLET-BLEUISSANT', 'Chapeau blanc et écailleux ; chair bleue à la cassure'],
      ['bolets-jaunes-orange', 'Chapeau jaune ou orangé'],
      ['bolets-roses-rouges', 'Chapeau rosé, rouge, brunâtre ou olivâtre'],
      ['bolets-brun-fonce', 'Chapeau brun foncé ou noirâtre']
    ]
  },
  'bolets-jaunes-orange': {
    title: 'Anneau et tubes',
    help: 'Observez le pied, puis les tubes.',
    answers: [
      ['BOLET-JAUNE', 'Pied muni d’un anneau'],
      ['bolets-jaunes-sans-anneau', 'Pied sans anneau véritable']
    ]
  },
  'bolets-jaunes-sans-anneau': {
    title: 'Aspect des tubes',
    help: 'Observez leur couleur, les glandes et leur viscosité.',
    answers: [
      ['BOLET-PIED-POINTILLE', 'Tubes brunâtres, non glandulaires, visqueux'],
      ['BOLET-AMERICAIN', 'Tubes jaunes, glandulaires, visqueux']
    ]
  },
  'bolets-roses-rouges': {
    title: 'Texture du chapeau',
    help: 'Le chapeau est-il visqueux ou sec ?',
    answers: [
      ['bolets-chapeau-visqueux', 'Chapeau visqueux ; pores pâles, puis jaunes ou ocracés'],
      ['bolets-chapeau-sec', 'Chapeau sec']
    ]
  },
  'bolets-chapeau-visqueux': {
    title: 'Pied',
    help: 'Observez l’aspect du pied.',
    answers: [
      ['BOLET-BAI', 'Pied lisse, jaune brunâtre'],
      ['BOLET-GRANULE', 'Pied granulé au sommet, jaune pâle']
    ]
  },
  'bolets-chapeau-sec': {
    title: 'Pores et pied',
    help: 'Observez l’évolution de la couleur des pores et le pied.',
    answers: [
      ['BOLET-ROUX', 'Pores blancs, puis grisâtres ; pied marqué de points noirs'],
      ['bolets-pores-jaunes-olive', 'Pores blancs devenant jaunes ou olive'],
      ['bolets-pores-roses', 'Pores blancs devenant rosés']
    ]
  },
  'bolets-pores-jaunes-olive': {
    title: 'Couleur du pied',
    help: 'Observez la couleur du pied.',
    answers: [
      ['BOLET-PIED-JAUNE', 'Pied jaune brillant vers la base'],
      ['BOLET-COMESTIBLE', 'Pied blanc ou brunâtre']
    ]
  },
  'bolets-pores-roses': {
    title: 'Saveur et pied',
    help: 'Caractères de la planche : ne goûtez jamais un spécimen pour l’identifier.',
    answers: [
      ['BOLET-AMER', 'Saveur amère'],
      ['BOLET-INDECIS', 'Saveur douce ; pied réticulé']
    ]
  },
  'bolets-brun-fonce': {
    title: 'Pied',
    help: 'Observez si le pied est réticulé.',
    answers: [
      ['bolets-brun-pied-reticule', 'Pied réticulé'],
      ['bolets-brun-pied-autrement', 'Pied autrement']
    ]
  },
  'bolets-brun-pied-reticule': {
    title: 'Tubes et saveur',
    help: 'Caractères de la planche : ne goûtez jamais un spécimen pour l’identifier.',
    answers: [
      ['BOLET-COMESTIBLE', 'Tubes blancs, puis verdâtres ; saveur douce'],
      ['bolets-tubes-roses-bruns', 'Tubes rosés, puis bruns']
    ]
  },
  'bolets-tubes-roses-bruns': {
    title: 'Saveur',
    help: 'Caractère de la planche : ne goûtez jamais un spécimen pour l’identifier.',
    answers: [
      ['BOLET-INDECIS', 'Saveur douce'],
      ['BOLET-AMER', 'Saveur amère']
    ]
  },
  'bolets-brun-pied-autrement': {
    title: 'Aspect du pied',
    help: 'Observez la couleur et les marques du pied.',
    answers: [
      ['BOLET-RUGUEUX', 'Pied blanchâtre, marqué de points noirs disposés en lignes'],
      ['BOLET-PIED-LISSE', 'Pied jaune pâle, strié et peu écailleux'],
      ['BOLET-BAI', 'Pied brunâtre, avec des lignes imprécises plus foncées']
    ]
  }
});

renderTable();
render();
