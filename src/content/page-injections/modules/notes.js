import { _MODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _NOTE from './note'

export default function() {

  const DOC = window.document;

  return new _MODULE({
    events: {
      ENV: {
        'add:note': 'addAndShow',
        'removed:note': 'removeNoteStorage',
        'restore:notes': 'restore',
        'removed:mark': 'removeNote',
        'toggle:notes': 'toggleAll',
        'sidebar:toggle-notes': 'toggleAll',
        'updated:misc-settings': 'updateTransp'
      }
    },
    notes: {},
    toggle: null,
    autoinit() {
        this.updateTransp();
    },
    add(mark) {
      return this.notes[mark.id] = new _NOTE(mark);
    },
    restore(marks) {
      for (let mark of marks) {
        if (mark.keyData.note) {
          this.add(mark);
          this.emit('added:note');
        }
      }
    },
    addAndShow(mark) {
      this.add(mark).show();
      this.emit('added:note');
    },
    removeNoteStorage(id) {
      delete this.notes[id];
      if (this.isEmpty(this.notes)) this.emit('removed:last-note');
    },
    removeNote(id) {
      if (this.notes[id]) this.notes[id].remove();
    },
    toggleAll() {
      if (!this.notes) return;
      const notes = this.notes;
      let meth = DOC.getElementsByTagName('tmnote').length ? 'hide' : 'show',
          condition = meth === 'hide' ? true : false,
          note;
      for (let n in notes) {
        note = notes[n];
        if (note.visible === condition) {
          note[meth]();
        }
      }
    },
    updateTransp() {
      const bodyClasses = DOC.body.classList;
      _STORE.get('notetransp').then(transp => {
        if (transp) bodyClasses.add('tmnotes--0_8');
        else bodyClasses.remove('tmnotes--0_8');
      });
    },
    isEmpty(obj) {
      return !Object.keys(obj).length;
    }
  });
}
