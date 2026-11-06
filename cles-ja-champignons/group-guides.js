/*
 * Fichier maître des fiches de groupes.
 * Les textes sont fournis et validés par l’administrateur, puis embarqués dans
 * l’application afin d’être consultables sans connexion.
 */
const groupGuides = {
  CORTINAIRE: {
    title: 'Cortinaires — à rejeter',
    paragraphs: [
      'Rejeter les cortinaires à chapeau roux, brun orangé ou fauve, souvent velouté ou fibrilleux, avec des lames espacées devenant rouille : ces caractères évoquent notamment le Cortinaire couleur de rocou (Cortinarius orellanus) ou le Cortinaire très joli (C. rubellus/speciosissimus), responsables du syndrome orellanien. Celui-ci peut provoquer une grave atteinte rénale, parfois plusieurs jours après l’ingestion.',
      'D’autres cortinaires sont également toxiques. <strong>Tout cortinaire non identifié avec certitude est donc à écarter.</strong>',
      'Le Muséum national d’Histoire naturelle décrit les deux espèces dangereuses comme brun-roux, à chapeau d’apparence feutrée. MycoDB donne pour C. orellanus des lames espacées, orangées puis rouille, et signale les cortinaires de couleurs proches comme risque de confusion. L’Anses indique que le syndrome orellanien peut entraîner une atteinte rénale apparaissant jusqu’à 20 jours après l’ingestion.',
      '<strong>Je retiendrais dans mon panier :</strong><br>Cortinarius violaceus Lin. ex Fr.<br>Nom vulgaire : <strong>Cortinaire violet</strong>',
      'Cet Inoloma, assez isolé dans la classification, se rencontre assez rarement dans les forêts feuillues, surtout sous bouleaux, et aussi sous conifères (sapins), sur des sols plus ou moins calcaires, en terrain pas trop sec, à la fin de l’été et en automne. Il paraît manquer dans certaines régions.',
      'Il est uniformément coloré d’un magnifique violet intense et sombre, qui tire dans la vieillesse sur le noirâtre. Seules les lamelles, en se couvrant de spores, perdent ces teintes pour devenir brun ferrugineux ou rouillées à maturité.',
      'Le chapeau (6–15 cm) est convexe, parfois plus ou moins mamelonné, très opaque, très sec, intensément velouté par de petites masses pelucheuses, déjà distinctes à l’œil nu. Le pied est volumineux et très élevé (8–10 × 1–3 cm), si bien que, comme il se renfle progressivement de haut en bas en un gros bulbe en massue, sa base, sur les jeunes exemplaires, est plus large que le chapeau encore hémisphérique. La surface est d’abord finement veloutée, puis très fibrilleuse ; la cortine est violette.',
      'La chair est tendre, puis molle, assez flasque, violette, marbrée et blanchissante, sans odeur nette. Les lamelles sont peu serrées, épaisses, adnées-uncinées, un peu veinées sur les faces.',
      'Spores : brun ferrugineux, 11–14 × 7–9 µ, ovoïdes, un peu en amande, verruqueuses. Cystides en fuseau, couvrant toute l’arête, éparses sur les faces. Cuticule filamenteuse, à hyphes remplies d’un suc violet.',
      'Cette belle espèce, impossible à méconnaître à cause de sa couleur et du magnifique velouté du chapeau, est comestible, mais malheureusement peu savoureuse.'
    ]
  }
};

Object.entries(groupGuides).forEach(([id, guide]) => {
  if (!terminals[id]) return;
  Object.assign(terminals[id], {
    next: `fiche-${id.toLowerCase()}`,
    nextLabel: `Ouvrir la fiche ${terminals[id].name.toLowerCase()}`,
    guide: true
  });
  nodes[`fiche-${id.toLowerCase()}`] = { guide, answers: [] };
});

const renderBeforeGroupGuides = render;
render = function () {
  renderBeforeGroupGuides();
  const guide = nodes[phase]?.guide;
  const resultPanel = document.querySelector('.result-panel');
  if (!guide) {
    resultPanel.hidden = false;
    return;
  }

  resultPanel.hidden = true;
  el('step').textContent = 'Fiche de groupe';
  el('question').textContent = guide.title;
  el('help').textContent = 'Texte consultable hors connexion.';
  el('unknown').hidden = true;
  el('status').textContent = '';
  el('answers').innerHTML = `<article class="group-guide"><h3>${guide.title}</h3>${guide.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}${guide.source ? `<p class="guide-source">${guide.source}</p>` : ''}</article>`;
};

renderTable();
render();
