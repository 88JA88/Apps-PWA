(() => {
  'use strict';
  const STORAGE_KEY = 'mon-congelateur-data-v1';
  const PORTION_OPTIONS = ['0,5', '1', '1,5', '2', '2,5', '3', '3,5', '4', '>4'];
  const SHELF_OPTIONS = ['0', '1', '2', '3', '4', '5'];
  const defaults = { entries: [] };
  const $ = (id) => document.getElementById(id);
  let state = load();
  let pendingDeleteId = null;
  let addingEntry = false;

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return normalise(saved || defaults);
    } catch { return structuredClone(defaults); }
  }
  function normalise(data) {
    return {
      entries: Array.isArray(data?.entries) ? data.entries.filter(e => e && e.id && e.food && e.portions && e.shelf && /^\d{4}-\d{2}-\d{2}$/.test(e.date)).map(e => ({ id:String(e.id), food:String(e.food), portions:e.portions === '>3' ? '>4' : String(e.portions), shelf:String(e.shelf), date:e.date, container:String(e.container || '') })) : []
    };
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function escape(value) { const el = document.createElement('span'); el.textContent = value; return el.innerHTML; }
  function toast(message) { const el = $('toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2800); }
  function options(values, selected) { return values.map(v => `<option value="${escape(v)}"${v === selected ? ' selected' : ''}>${escape(v)}</option>`).join(''); }
  function newEntryRow() {
    return `<tr class="draft-row"><td data-label="Denrée"><input class="draft-food" aria-label="Denrée" type="text" placeholder="Ex. ratatouille" required /></td><td data-label="Portions"><select class="draft-portions" aria-label="Nombre de portions">${options(PORTION_OPTIONS, PORTION_OPTIONS[0])}</select></td><td data-label="Étagère"><select class="draft-shelf" aria-label="Étagère">${options(SHELF_OPTIONS, SHELF_OPTIONS[0])}</select></td><td data-label="Date"><input class="draft-date" aria-label="Date" type="date" value="${new Date().toISOString().slice(0,10)}" /></td><td data-label="Contenant"><input class="draft-container" aria-label="Contenant" type="text" placeholder="Sac, boîte…" /></td><td class="row-action-cell"><div class="row-actions"><button class="small-button" type="button" data-create="true">Enregistrer</button><button class="small-button delete" type="button" data-cancel-new="true">Annuler</button></div></td></tr>`;
  }
  function entryRow(entry) {
    return `<tr data-entry-id="${escape(entry.id)}"><td data-label="Denrée"><input class="entry-food" aria-label="Denrée" type="text" value="${escape(entry.food)}" required /></td><td data-label="Portions"><select class="entry-portions" aria-label="Nombre de portions">${options(PORTION_OPTIONS, entry.portions)}</select></td><td data-label="Étagère"><select class="entry-shelf" aria-label="Étagère">${options(SHELF_OPTIONS, entry.shelf)}</select></td><td data-label="Date"><input class="entry-date" aria-label="Date" type="date" value="${escape(entry.date)}" /></td><td data-label="Contenant"><input class="entry-container" aria-label="Contenant" type="text" value="${escape(entry.container)}" placeholder="Sac, boîte…" /></td><td class="row-action-cell"><div class="row-actions"><button class="small-button delete" type="button" data-delete="${escape(entry.id)}">Supprimer</button></div></td></tr>`;
  }
  function render() {
    const term = $('search').value.trim().toLocaleLowerCase('fr');
    const entries = state.entries.filter(e => e.food.toLocaleLowerCase('fr').includes(term)).sort((a,b) => b.date.localeCompare(a.date));
    $('entries').innerHTML = `${addingEntry ? newEntryRow() : ''}${entries.map(entryRow).join('')}`;
    $('empty-state').hidden = entries.length !== 0 || addingEntry;
    $('inventory-count').textContent = `${state.entries.length} ${state.entries.length === 1 ? 'denrée enregistrée' : 'denrées enregistrées'}`;
  }
  $('new-entry-button').addEventListener('click', () => {
    addingEntry = true; render();
    requestAnimationFrame(() => document.querySelector('.draft-food')?.focus());
  });
  $('search').addEventListener('input', render);
  $('entries').addEventListener('change', (event) => {
    const row = event.target.closest('[data-entry-id]');
    if (!row) return;
    const entry = state.entries.find(item => item.id === row.dataset.entryId);
    if (!entry) return;
    const food = row.querySelector('.entry-food').value.trim();
    if (!food) { render(); toast('La denrée est obligatoire.'); return; }
    entry.food = food;
    entry.portions = row.querySelector('.entry-portions').value;
    entry.shelf = row.querySelector('.entry-shelf').value;
    entry.date = row.querySelector('.entry-date').value;
    entry.container = row.querySelector('.entry-container').value.trim();
    save(); toast('Modification enregistrée.');
  });
  $('entries').addEventListener('click', (event) => {
    if (event.target.dataset.cancelNew) { addingEntry = false; render(); return; }
    if (event.target.dataset.create) {
      const row = event.target.closest('tr');
      const food = row.querySelector('.draft-food').value.trim();
      if (!food) { row.querySelector('.draft-food').focus(); toast('Veuillez saisir une denrée.'); return; }
      state.entries.push({ id: crypto.randomUUID(), food, portions: row.querySelector('.draft-portions').value, shelf: row.querySelector('.draft-shelf').value, date: row.querySelector('.draft-date').value, container: row.querySelector('.draft-container').value.trim() });
      addingEntry = false; save(); render(); toast('Denrée ajoutée.'); return;
    }
    const id = event.target.dataset.delete;
    if (!id) return;
    pendingDeleteId = id; $('confirm-dialog').showModal();
  });
  $('confirm-cancel').addEventListener('click', () => $('confirm-dialog').close());
  $('confirm-delete').addEventListener('click', () => { state.entries = state.entries.filter(e => e.id !== pendingDeleteId); save(); render(); $('confirm-dialog').close(); toast('Entrée supprimée.'); });
  $('export-button').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ version:1, exportedAt:new Date().toISOString(), ...state }, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob), link = Object.assign(document.createElement('a'), { href:url, download:`mon-congelateur-${new Date().toISOString().slice(0,10)}.json` }); link.click(); URL.revokeObjectURL(url); toast('Sauvegarde téléchargée.');
  });
  $('import-input').addEventListener('change', async (event) => {
    const file = event.target.files[0]; if (!file) return;
    try { const data = normalise(JSON.parse(await file.text())); if (!confirm('Restaurer cette sauvegarde remplacera le contenu actuellement enregistré sur cet appareil. Continuer ?')) return; state = data; save(); render(); toast('Sauvegarde restaurée.'); }
    catch { alert('Ce fichier ne semble pas être une sauvegarde JSON valide.'); }
    finally { event.target.value = ''; }
  });
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
  }
  render();
})();
