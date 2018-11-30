import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--notes'),
  events: {
    ENV: {
      'stored:entry': 'render'
    },
    DOM: {
      click: {
        '#add-note': 'addNote',
        'tmnotecolor': 'changeColor',
        'tmnotecustomize': 'togglePalette',
        'tmnotedelete': 'removeNote',
        'tmnoteminimize': 'toggleNote'
      },
      change: {
        '#fold-page-notes': 'toggleNotes'
      },
      keyup: {
        'textarea': 'attemptUpdate'
      }
    }
  },
  notes: [],
  noteEls: {},
  id: 0,
  recentlyUpdated: false,

  render(entry) {
    this.resume();
    if (entry && entry.notes) {
      this.notes = entry.notes;
      let l = entry.notes.length, id;
      while (l--) {
        id = this.addNote(entry.notes[l]);
        this.id = Math.max(this.id, id);
      }
    }
  },
  update() {
    this.emit('updated:page-note', _STORE.entry, this.notes);
  },
  resume() {
    this.notes = [];
    this.noteEls = {};
    this.id = 0;
    document.getElementById('page-notes').textContent = '';
  },

  addNote(note) {
    note = note.type ? null : note;
    const container = document.getElementById('page-notes');
    const noteEl = document.getElementById('page-note-template').cloneNode(true);
    const textarea = noteEl.getElementsByTagName('textarea')[0];
    noteEl.classList.remove('u-display--none');
    textarea.addEventListener('blur', e => this.attemptUpdate(e, e.target, true), false);
    let id;
    if (note) {
      id = noteEl.id = note.id;
      textarea.textContent = note.text;
      noteEl.classList.add('tmnote--' + note.color);
      container.appendChild(noteEl);
    } else {
      id = noteEl.id = ++this.id;
      this.notes.push({ id, text: '', color: 'yellow' });
      noteEl.classList.remove('tmnote--min');
      noteEl.getElementsByTagName('tmnotepalette')[0].classList.remove('u-display--none');
      container.insertBefore(noteEl, container.firstChild);
      this.update();
    }
    Array.from(noteEl.getElementsByTagName('*'))
      .forEach(el => el.setAttribute('data-id', id));

    this.noteEls[id] = noteEl;
    return id;
  },
  attemptUpdate(e, el, force) {
    if (force) {
      this.updateText(el);
    }
    else if (!this.recentlyUpdated) {
      this.recentlyUpdated = true;
      window.setTimeout(() => this.updateText(el), 3000);
    }
  },
  updateText(el) {
    this.getById(el.getAttribute('data-id')).text = el.value;
    this.recentlyUpdated = false;
    this.update();
  },
  changeColor(e, el) {
    const id = el.getAttribute('data-id');
    const color = el.getAttribute('data-color');
    this.noteEls[id].classList.add('tmnote--' + color);
    this.getById(id).color = color;
    this.update();
  },
  removeNote(e, el) {
    const id = el.getAttribute('data-id');
    const note = this.noteEls[id];
    note.parentNode.removeChild(note);
    delete this.noteEls[id];
    this.notes.splice(this.notes.indexOf(this.getById(id)), 1);
    this.update();
  },
  togglePalette(e, el) {
    const note = this.noteEls[el.getAttribute('data-id')];
    const palette = note.getElementsByTagName('tmnotepalette')[0];
    palette.classList.toggle('u-display--none');
    if (!palette.classList.contains('u-display--none')) {
      note.classList.remove('tmnote--min');
    }
  },
  toggleNote(e, el) {
    this.noteEls[el.getAttribute('data-id')].classList.toggle('tmnote--min');
  },
  toggleNotes(e, el) {
    const meth = el.value == 1 ? 'add' : 'remove';
    for (let id in this.noteEls) {
      this.noteEls[id].classList[meth]('tmnote--min');
    }
  },
  getById(id) {
    return this.notes.find(note => note.id == id);
  }
});
