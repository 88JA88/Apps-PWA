/*
 * Second parcours : Détermination sur le terrain.
 * Les questions seront ajoutées exclusivement à partir des planches fournies.
 * La sporée sera un caractère tardif, seulement lorsqu'elle départage encore
 * les possibilités restantes.
 */
const terrainKey = {
  id: 'terrain',
  title: 'Détermination sur le terrain',
  description: 'Sans demander la sporée dès le départ.',
  status: 'préparation',
  start: null,
  questions: {},
  /* Les familles et clés d’espèces seront partagées avec le parcours sporée. */
  sharedResults: terminals
};
