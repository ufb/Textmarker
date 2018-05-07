import { _MODULE } from './../../../utils'
import _STORE from './../_store'
import _NOTE from './note'

export default function() {

  return new _MODULE({
    events: {
      ENV: {
        'add:note': 'addAndShow',
        'removed:note': 'remove',
        'restore:notes': 'restore'
      }
    },
    notes: {},
    toggle: null,
    add(mark) {
      return this.notes[mark.id] = new _NOTE(mark);
    },
    restore(marks) {
      for (let mark of marks) {
        if (mark.keyData.note) this.add(mark);
      }
      if (Object.keys(this.notes).length) this.toggleToggler(true);
    },
    addAndShow(mark) {
      if (!Object.keys(this.notes).length) this.toggleToggler(true);
      this.add(mark).show();
    },
    remove(id) {
      delete this.notes[id];
      if (!Object.keys(this.notes).length) this.toggleToggler(false);
    },
    toggleAll() {
      if (!this.notes) return;
      const notes = this.notes;
      let meth = window.document.getElementsByTagName('tmnote').length ? 'hide' : 'show',
          condition = meth === 'hide' ? true : false,
          note;
      for (let n in notes) {
        note = notes[n];
        if (note.visible === condition) {
          note[meth]();
        }
      }
    },
    toggleToggler(show) {
      const tmui = window.document.getElementsByTagName('tm-ui')[0];
      if (show) {
        _STORE.get('noteicon').then(noteicon => {
          if (noteicon) {
            const toggle = this.toggle = window.document.createElement('tm-notes-toggle');
            toggle.title = browser.i18n.getMessage('toggle_notes');
            tmui.appendChild(toggle);
            toggle.onclick = () => this.toggleAll();
          }
        });
      } else {
        if (!this.toggle) return;
        tmui.removeChild(this.toggle);
        this.toggle = null;
      }
    }
  });
}
