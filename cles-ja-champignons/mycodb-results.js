/* Le lien MycoDB apparaît uniquement à l'aboutissement d'une clé d'espèces. */
const renderBeforeMycoDbLinks = render;
const mycoDbSpeciesUrl = query => `https://www.mycodb.fr/quicksearch.php?action=search&query=${encodeURIComponent(query.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}&source=popup`;
render = function () {
  renderBeforeMycoDbLinks();
  if (nodes[phase]) el('status').textContent = '';
  const values = candidates();
  const cards = el('results').querySelectorAll('.result-card');

  values.forEach((result, index) => {
    if (!result.mycodb) return;
    const card = cards[index];
    if (result.species) card.querySelector('.next-pending')?.remove();
    const link = document.createElement('a');
    link.className = 'mycodb-mini-link';
    link.href = mycoDbSpeciesUrl(result.scientific || result.mycodb);
    link.target = '_blank';
    link.rel = 'noopener';
    link.title = `Voir ${result.name} sur MycoDB`;
    link.setAttribute('aria-label', `Voir ${result.name} sur MycoDB`);
    link.textContent = 'M ↗';
    card.querySelector('.result-name').before(link);
    if (result.scientific) {
      const scientific = document.createElement('em');
      scientific.className = 'scientific-name';
      scientific.textContent = result.scientific;
      card.querySelector('.result-name').after(scientific);
    }
  });
};

render();
