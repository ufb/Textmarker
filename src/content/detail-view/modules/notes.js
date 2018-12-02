import { _DOMMODULE } from './../../_shared/utils'
import _SETTINGS from './../../../data/global-settings'

new _DOMMODULE({
  el: document.getElementById('notes'),
  events: {
    ENV: {
      'entry': 'render'
    },
    DOM: {
      click: {
        '.table-toggle': 'toggleTable'
      }
    }
  },
  entry: null,
  tmpl: null,
  tbody: null,
  notes: [],
  names: false,

  render(entry) {
    this.entry = entry;
    const notes = this.notes = entry.notes || [];
    this.renderCount();
    if (!notes.length) this.el.classList.add('disabled');
    else {
      const tmpl = this.tmpl = document.getElementById('notes-template');
      const tbody = this.tbody = document.getElementById('notes-content');

      notes.forEach(note => this.renderNote(note));
      tbody.removeChild(tmpl);
      if (!this.names) this.removeNameFields();
    }
  },
  renderCount() {
    document.getElementById('notes-count').innerText = '(' + this.notes.length + ')';
  },
  renderNote(note) {
    const noteEl = this.tmpl.cloneNode(true);
    const td_name = noteEl.getElementsByClassName('note-name')[0];
    const td_txt = noteEl.getElementsByClassName('note-text')[0];

    this.tbody.appendChild(noteEl);

    if (note.name) {
      td_name.textContent = note.name;
      this.names = true;
    }

    td_txt.textContent = note.text;

    noteEl.style.background = _SETTINGS.NOTE_COLORS[note.color.toUpperCase()];
  },
  removeNameFields() {
    Array.from(this.el.getElementsByClassName('note-name'))
      .forEach(td => td.parentNode.removeChild(td));
  },
  toggleTable() {
    this.el.classList.toggle('folded');
  }
});
