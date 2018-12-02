import { _DOMMODULE } from './../../_shared/utils'
import _SETTINGS from './../../../data/global-settings'

new _DOMMODULE({
  el: document.getElementById('marks'),
  events: {
    ENV: {
      'entry': 'render'
    },
    DOM: {
      click: {
        '.col-toggle': 'toggleNotes',
        '.table-toggle': 'toggleTable'
      }
    }
  },
  entry: null,
  tmpl: null,
  tbody: null,
  marks: [],
  notes: false,
  notesShown: true,

  render(entry) {
    this.entry = entry;
    const tmpl = this.tmpl = document.getElementById('mark-template');
    const tbody = this.tbody = document.getElementById('marks-content');
    const marks = this.marks = this.sortById(entry.marks);

    if (!marks.length) this.el.classList.add('disabled');

    this.renderCount(entry);
    marks.forEach(mark => this.renderMark(mark));
    tbody.removeChild(tmpl);
    if (!this.notes) this.el.classList.add('no-notes');
  },
  renderCount(entry) {
    document.getElementById('marks-count').innerText = '(' + entry.marks.length + ')';
  },
  renderMark(mark) {
    const markEl = this.tmpl.cloneNode(true);
    const td_text = markEl.getElementsByClassName('mark-text')[0];
    const td_note = markEl.getElementsByClassName('mark-note')[0];
    const text = document.createElement('p');
    let noteText, noteColor;
    td_text.innerText = mark.text;
    td_text.setAttribute('style', mark.style);
    if (mark.note) {
      if (typeof mark.note === 'string') {
        noteText = mark.note;
        noteColor = _SETTINGS.NOTE_COLORS.YELLOW;
      } else {
        noteText = mark.note.text || '';
        noteColor = _SETTINGS.NOTE_COLORS[mark.note.color.toUpperCase()];
      }
      if (noteText) {
        td_note.innerText = noteText;
        td_note.parentNode.style.backgroundColor = noteColor;
        this.notes = true;
      }
    }
    markEl.id = 'mark-' + mark.id;
    this.tbody.appendChild(markEl);
  },
  sortById(marks) {
    return marks.sort((mark1, mark2) => {
      const id1 = mark1.id;
      const id2 = mark2.id;
      if (id1 === id2) return 0;
      return id1 < id2 ? -1 : 1;
    });
  },
  toggleNotes() {
    if (this.notesShown) {
      this.el.classList.add('hide-notes');
    } else {
      this.el.classList.remove('hide-notes');
    }
    this.notesShown = !this.notesShown;
  },
  toggleTable() {
    this.el.classList.toggle('folded');
  }
});
