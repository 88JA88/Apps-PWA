/* Parcours terrain des Agarics : transcription des planches 42-43, sans pages. */
Object.assign(terminals.AGARICS,{next:'agarics-parcours',nextLabel:'Choisir un parcours de détermination'});
Object.assign(terminals,{AUTRES_PETITS_AGARICS:{name:'AUTRES PETITS AGARICS À DÉTERMINER'}});
Object.assign(nodes,{
  'agarics-parcours':{title:'Agarics : choisissez un parcours',help:'Le parcours terrain évite de demander la sporée dès le départ.',answers:[['terrain-depart','Détermination sur le terrain'],['agarics','Détermination par la sporée']]},
  'terrain-depart':{title:'Anneau et volve',help:'Observez le pied et sa base.',answers:[['terrain-anneau-volve','Pied avec anneau et volve ou l’un des deux'],['terrain-sans-anneau-volve','Pied sans anneau membraneux ni volve']]},
  'terrain-anneau-volve':{title:'Volver et anneau membraneux',help:'Choisissez l’ensemble de caractères observé.',answers:[['AMANITE','Pied avec volve et anneau membraneux'],['terrain-volve','Pied avec volve, sans anneau membraneux'],['terrain-anneau','Pied avec anneau membraneux, sans volve']]},
  'terrain-volve':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['AMANITOPSIS','Sporée blanche'],['VOLVAIRE','Sporée rosée']]},
  'terrain-anneau':{title:'Lamelles, chapeau et pied',help:'Choisissez l’ensemble de caractères observé.',answers:[['terrain-libres','Lamelles libres ; chapeau et pied séparables'],['terrain-non-separables-anneau','Lamelles autrement ; chapeau et pied non séparables']]},
  'terrain-libres':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['LÉPIOTE','Sporée blanche'],['PSALLIOTE','Sporée brun pourpre'],['terrain-libres-noire','Sporée noire']]},
  'terrain-libres-noire':{title:'Transformation des lamelles',help:'Observez si les lamelles se déliquescent.',answers:[['COPRIN','Lamelles déliquescentes (parfois un anneau)'],['PANÉOLE','Lamelles sèches, ponctuées de noir']]},
  'terrain-non-separables-anneau':{title:'Insertion des lamelles',help:'Observez l’insertion des lamelles.',answers:[['ARMILLAIRE','Lamelles décurrentes'],['terrain-adnees-anneau','Lamelles adnées ou sinuées']]},
  'terrain-adnees-anneau':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['PHOLIOTE','Sporée ocracée'],['STROPHAIRE','Sporée brun pourpre']]},
  'terrain-sans-anneau-volve':{title:'Position du pied',help:'Observez la position du pied.',answers:[['PLEUROTE','Pied excentrique ou nul'],['terrain-central','Pied central']]},
  'terrain-central':{title:'Rapport chapeau–pied',help:'Observez si le chapeau et le pied sont séparables.',answers:[['terrain-separables','Chapeau et pied séparables'],['terrain-non-separables','Chapeau et pied non séparables']]},
  'terrain-separables':{title:'Lamelles et sporée',help:'Choisissez le caractère observé.',answers:[['PLUTÉE','Sporée rosée'],['terrain-separables-noire','Sporée noire'],['PAXILLE','Lamelles facilement détachables du chapeau']]},
  'terrain-separables-noire':{title:'Transformation des lamelles',help:'Observez si les lamelles se déliquescent.',answers:[['COPRIN','Lamelles déliquescentes'],['PANÉOLE','Lamelles sèches, ponctuées de noir']]},
  'terrain-non-separables':{title:'Épaisseur des lamelles',help:'Observez l’épaisseur et l’aspect des lamelles.',answers:[['terrain-epaisses','Lamelles épaisses'],['terrain-minces','Lamelles minces']]},
  'terrain-epaisses':{title:'Aspect des lamelles',help:'Choisissez le caractère observé.',answers:[['CHANTERELLE','Lamelles ramifiées, peu saillantes ordinairement'],['terrain-epaisses-non-ramifiees','Lamelles non ramifiées, saillantes']]},
  'terrain-epaisses-non-ramifiees':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['HYGROPHORE','Sporée blanche'],['GOMPHIDE','Sporée noirâtre']]},
  'terrain-minces':{title:'Texture du chapeau et des lamelles',help:'Choisissez le caractère observé.',answers:[['RUSSULE','Chapeau et lamelles friables'],['terrain-elastiques','Chapeau et lamelles élastiques']]},
  'terrain-elastiques':{title:'Jus laiteux',help:'Observez les lamelles à la cassure.',answers:[['LACTAIRE','Jus laiteux à la cassure des lamelles'],['terrain-pied','Sans jus laiteux']]},
  'terrain-pied':{title:'Consistance du pied',help:'Observez la consistance du pied.',answers:[['terrain-elastique-charnu','Pied élastique et charnu'],['terrain-coriace','Pied coriace ou cartilagineux']]},
  'terrain-elastique-charnu':{title:'Forme du chapeau',help:'Choisissez le caractère observé.',answers:[['INOCYBE','Chapeau conique, fibrilleux ; sporée ocracée'],['terrain-convexe','Chapeau convexe']]},
  'terrain-convexe':{title:'Cortine',help:'Observez la présence d’une cortine.',answers:[['terrain-cortine','Cortine visible (parfois fugace)'],['terrain-sans-cortine','Cortine nulle']]},
  'terrain-cortine':{title:'Habitat',help:'Observez le support de croissance.',answers:[['terrain-lignicoles','Espèces lignicoles'],['terrain-terrestres','Espèces terrestres']]},
  'terrain-lignicoles':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['FLAMMULE','Sporée ocracée'],['HYPHOLOME','Sporée brun pourpre']]},
  'terrain-terrestres':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['CORTINAIRE','Sporée ferrugineuse'],['HÉBÉLOME','Sporée ocracée']]},
  'terrain-sans-cortine':{title:'Insertion des lamelles',help:'Observez l’insertion des lamelles.',answers:[['terrain-sinuees','Lamelles sinuées'],['terrain-decurrentes','Lamelles décurrentes']]},
  'terrain-sinuees':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['TRICHOLOME','Sporée blanche'],['ENTOLOME','Sporée rosée']]},
  'terrain-decurrentes':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['CLITOCYBE','Sporée blanche'],['CLITOPILE','Sporée rosée']]},
  'terrain-coriace':{title:'Sporée',help:'La sporée intervient ici pour distinguer les possibilités restantes.',answers:[['terrain-coriace-blanche','Sporée blanche'],['AUTRES_PETITS_AGARICS','Sporée autrement']]},
  'terrain-coriace-blanche':{title:'Port de l’espèce',help:'Choisissez l’ensemble de caractères observé.',answers:[['terrain-coriace-charnues','Espèces charnues'],['LIGNICOLES','Espèces ligneuses']]},
  'terrain-coriace-charnues':{title:'Taille et consistance',help:'Choisissez l’ensemble de caractères observé.',answers:[['COLLYBIE','Espèces de bonne taille ; pied cartilagineux ; lamelles adnées'],['terrain-coriace-petites','Espèces petites ou grêles']]},
  'terrain-coriace-petites':{title:'Évolution de la chair',help:'Choisissez le caractère observé.',answers:[['MARASME','Chair imputrescible ; pied coriace'],['terrain-putrescible','Chair putrescible et fragile ; pied grêle']]},
  'terrain-putrescible':{title:'Lamelles et chapeau',help:'Choisissez l’ensemble de caractères observé.',answers:[['OMPHALE','Lamelles décurrentes ; chapeau ombiliqué'],['MYCÈNE','Lamelles adnées ; chapeau campanulé']]}
});
renderTable();render();
