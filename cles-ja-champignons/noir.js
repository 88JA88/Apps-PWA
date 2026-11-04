/* Clé III : transcription de la planche fournie, sans les renvois de pages. */
Object.assign(terminals['AGARICS-SOMBRES'], {
  name:'AGARICS À SPORÉE NOIRE, NOIRÂTRE OU BRUN POURPRE',
  next:'noir-depart',
  nextLabel:'Ouvrir la clé des Agarics à sporée noire, noirâtre ou brun pourpre'
});
Object.assign(terminals, {
  PSALLIOTE:{name:'PSALLIOTE',mycodb:'Agaricus'}, STROPHAIRE:{name:'STROPHAIRE',mycodb:'Stropharia'},
  PANÉOLE:{name:'PANÉOLE',mycodb:'Panaeolus'}, HYPHOLOME:{name:'HYPHOLOME',mycodb:'Hypholoma'},
  GOMPHIDE:{name:'GOMPHIDE',mycodb:'Gomphidius'}, COPRIN:{name:'COPRIN',mycodb:'Coprinus'}
});
Object.assign(nodes, {
  'noir-depart':{title:'Genres d’Agarics à sporée noire, noirâtre ou brun pourpre',help:'Choisissez le caractère observé.',answers:[['noir-seches','Lamelles sèches, non déliquescentes'],['COPRIN','Lamelles déliquescentes et se transformant en une encre noire']]},
  'noir-seches':{title:'Présence d’un anneau',help:'Observez le pied.',answers:[['noir-anneau','Pied avec anneau'],['noir-sans-anneau','Pied sans anneau véritable (le voile persiste parfois sur la marge du chapeau)']]},
  'noir-anneau':{title:'Lamelles, chapeau et pied',help:'Choisissez l’ensemble de caractères observé.',answers:[['PSALLIOTE','Lamelles libres ; chapeau et pied séparables'],['STROPHAIRE','Lamelles adnées ; chapeau et pied non séparables']]},
  'noir-sans-anneau':{title:'Aspect des lamelles',help:'Observez les lamelles.',answers:[['noir-minces','Lamelles minces et adnées'],['GOMPHIDE','Lamelles épaisses et décurrentes']]},
  'noir-minces':{title:'Taille, fragilité et habitat',help:'Choisissez l’ensemble de caractères observé.',answers:[['PANÉOLE','Petites espèces fragiles croissant sur le fumier ; sporée noire'],['HYPHOLOME','Espèces plus robustes croissant sur le bois ; sporée brun pourpre']]}
});
renderTable();
render();
