import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--notes'),
  events: {
    ENV: {
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    },
    DOM: {
      click: {
        '#add-note': 'addNote',
        'tmnotecolor': 'changeColor',
        'tmnotecustomize': 'togglePalette',
        'tmnotedelete': 'removeNote',
        'tmnoteminimize': 'toggleNote',
        'tmnotesave': 'save'
      },
      change: {
        '#fold-page-notes': 'toggleNotes'
      }
    }
  },
  notes: [],
  noteEls: {},
  id: 0,
  currentColor: 'yellow',

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
  save(e, el) {
    if (el) {
      const note = this.getById(el.getAttribute('data-id'));
      note.text = el.previousSibling.value;
      note.name = el.parentNode.getElementsByClassName('tmnote__header')[0].value;
    }
    this.emit('updated:page-note', this.notes);
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
    const header = noteEl.getElementsByClassName('tmnote__header')[0];
    noteEl.classList.remove('u-display--none');

    let id;
    if (note) {
      id = noteEl.id = note.id;
      textarea.textContent = note.text || '';
      header.value = note.name || '';
      noteEl.classList.add('tmnote--' + note.color);
      container.appendChild(noteEl);
    } else {
      id = noteEl.id = ++this.id;
      this.notes.push({ id, text: '', color: this.currentColor });
      noteEl.classList.remove('tmnote--min');
      noteEl.classList.add('tmnote--' + this.currentColor);
      container.insertBefore(noteEl, container.firstChild);
    }

    Array.from(noteEl.getElementsByTagName('*'))
      .forEach(el => el.setAttribute('data-id', id));

    this.noteEls[id] = noteEl;
    return id;
  },
  changeColor(e, el) {
    const id = el.getAttribute('data-id');
    const color = this.currentColor = el.getAttribute('data-color');
    this.noteEls[id].className = this.noteEls[id].className.replace(/--\w+/, '--' + color);
    this.getById(id).color = color;
    el.parentNode.classList.add('u-display--none');
  },
  removeNote(e, el) {
    const id = el.getAttribute('data-id');
    const note = this.noteEls[id];
    note.parentNode.removeChild(note);
    delete this.noteEls[id];
    this.notes.splice(this.notes.indexOf(this.getById(id)), 1);
    this.save();
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
    const note = this.noteEls[el.getAttribute('data-id')];
    note.classList.toggle('tmnote--min');
    if (!note.classList.contains('tmnote--min')) {
      this.adjustTextareaHeight(note);
    }
  },
  toggleNotes(e, el) {
    if (el.value == 1) {
      for (let id in this.noteEls) {
        this.noteEls[id].classList.add('tmnote--min');
      }
    } else {
      let note, textarea;
      for (let id in this.noteEls) {
        note = this.noteEls[id];
        note.classList.remove('tmnote--min');
        this.adjustTextareaHeight(note);
      }
    }
  },
  getById(id) {
    return this.notes.find(note => note.id == id);
  },
  adjustTextareaHeight(note) {
    const textarea = note.getElementsByTagName('textarea')[0];
    textarea.style.height = textarea.scrollHeight + 10 + 'px';
  }
});
