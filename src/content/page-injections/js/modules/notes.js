import { _MODULE } from './../../../utils'
import _STORE from './../_store'
import _NOTE from './note'

export default function() {

  const DOC = window.document;

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
      if (!this.isEmpty(this.notes)) this.toggleToggler(true);
    },
    addAndShow(mark) {
      if (this.isEmpty(this.notes)) this.toggleToggler(true);
      this.add(mark).show();
    },
    remove(id) {
      delete this.notes[id];
      if (this.isEmpty(this.notes)) this.toggleToggler(false);
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
    toggleToggler(show) {
      const tmui = DOC.getElementsByTagName('tmui')[0];
      if (show) {
        _STORE.get('noteicon').then(noteicon => {
          if (noteicon) {
            const toggle = this.toggle = DOC.createElement('tmnotestoggle');
            toggle.title = browser.i18n.getMessage('toggle_notes');
            tmui.appendChild(toggle);
            tmui.classList.add('active');
            toggle.onclick = () => this.toggleAll();
          }
        });
      } else {
        if (!this.toggle) return;
        tmui.removeChild(this.toggle);
        if (!tmui.children.length) tmui.classList.remove('active');
        this.toggle = null;
      }
    },
    isEmpty(obj) {
      return !Object.keys(obj).length;
    }
  });
}
