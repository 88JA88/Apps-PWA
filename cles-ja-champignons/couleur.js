/* Clé II : transcription de la planche fournie, sans les renvois de pages. */
Object.assign(terminals['AGARICS-COULEUR'], {
  name: 'AGARICS À SPORÉE ROSÉE, OCRACÉE, BRUNE OU ROUILLE',
  next: 'couleur-depart',
  nextLabel: 'Ouvrir la clé des Agarics à sporée rosée, ocracée, brune ou rouille'
});
Object.assign(terminals, {
  VOLVAIRE:{name:'VOLVAIRE',mycodb:'Volvariella'}, PHOLIOTE:{name:'PHOLIOTE',mycodb:'Pholiota'},
  PLUTÉE:{name:'PLUTÉE',mycodb:'Pluteus'}, PAXILLE:{name:'PAXILLE',mycodb:'Paxille'},
  CORTINAIRE:{name:'CORTINAIRE',mycodb:'Cortinarius'}, FLAMMULE:{name:'FLAMMULE',mycodb:'Pholiota'},
  HÉBÉLOME:{name:'HÉBÉLOME',mycodb:'Hebeloma'}, CLITOPILE:{name:'CLITOPILE',mycodb:'Clitopilus'},
  INOCYBE:{name:'INOCYBE',mycodb:'Inocybe'}, ENTOLOME:{name:'ENTOLOME',mycodb:'Entoloma'}
});
Object.assign(nodes, {
  'couleur-depart':{title:'Genres d’Agarics à sporée rosée, ocracée, brune ou rouille',help:'Choisissez le caractère observé.',answers:[['VOLVAIRE','Pied avec volve ; sporée rosée'],['PHOLIOTE','Pied avec anneau, sans volve ; sporée ocracée ou rouille'],['couleur-separable','Pied sans anneau ni volve ; chapeau et pied séparables'],['couleur-nonseparable','Pied sans anneau ni volve ; chapeau et pied non séparables']]},
  'couleur-separable':{title:'Lamelles et sporée',help:'Choisissez l’ensemble de caractères observé.',answers:[['PLUTÉE','Lamelles libres ; sporée rosée'],['PAXILLE','Lamelles facilement détachables du chapeau ; sporée ocracée']]},
  'couleur-nonseparable':{title:'Cortine ou voile arachnoïdien',help:'Observez sa présence entre le chapeau et le pied dans le jeune âge.',answers:[['couleur-cortine','Cortine ou voile arachnoïdien entre le chapeau et le pied dans le jeune âge'],['couleur-sans-cortine','Cortine absente ou fugace']]},
  'couleur-cortine':{title:'Insertion des lamelles ou habitat',help:'Choisissez le caractère observé.',answers:[['CORTINAIRE','Lamelles adnées ; sporée ferrugineuse'],['couleur-sinuees','Lamelles sinuées ; sporée jaunâtre']]},
  'couleur-sinuees':{title:'Habitat',help:'Observez le support de croissance.',answers:[['FLAMMULE','Croissant sur le bois'],['HÉBÉLOME','Croissant sur le sol']]},
  'couleur-sans-cortine':{title:'Jus laiteux et texture',help:'Observez les lamelles, puis la consistance du chapeau et des lamelles.',answers:[['LACTAIRE','Lamelles exsudant un jus laiteux'],['RUSSULE','Chapeau et lamelles très friables'],['CLITOPILE','Lamelles décurrentes ; sporée rosée'],['couleur-elastique','Lamelles sans jus laiteux ; chapeau et lamelles plus élastiques']]},
  'couleur-elastique':{title:'Forme du chapeau et des lamelles',help:'Choisissez l’ensemble de caractères observé.',answers:[['INOCYBE','Chapeau conique et fibrilleux ; sporée ocracée'],['FLAMMULE','Chapeau convexe ; espèces lignicoles ; sporée ocracée'],['ENTOLOME','Chapeau campanulé ; sporée rosée']]}
});
function renderTable(){
  el('key-table').innerHTML=Object.values(terminals).map(g=>`<article class="key-row"><div><strong>${g.name}</strong>${g.note?`<small>${g.note}</small>`:''}</div>${g.mycodb?`<a href="${mycodbUrl(g.mycodb)}" target="_blank" rel="noopener">MycoDB ↗</a>`:''}</article>`).join('')}
renderTable();
render();

/* Une observation inconnue ne doit jamais remettre la clé à zéro. */
document.addEventListener('click', event => {
  const button = event.target.closest('#unknown');
  if (!button || phase !== 'agarics') return;
  event.preventDefault();
  event.stopImmediatePropagation();
  route.push({phase, title:nodes[phase].title, value:'Sporée non observée'});
  render();
  el('step').textContent='OBSERVATION INCONNUE';
  el('question').textContent='La sporée reste inconnue';
  el('help').textContent='Si vous ne savez pas, explorez les sporées dans l’ordre le plus probable.';
  el('unknown').hidden=true;
  document.querySelector('.hint')?.remove();
  el('status').textContent='Résultat provisoire : ouvrez une clé disponible dans les résultats possibles ou revenez modifier une réponse.';
}, true);
