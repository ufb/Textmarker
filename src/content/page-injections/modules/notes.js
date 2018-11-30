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
        'updated:misc-settings': 'updateTransp',
        'start:drag': 'startDraggingNote',
        'opened:sidebar': 'sendNotesState'
      }
    },

    notes: {},
    toggle: null,
    dragHandler: null,
    dragStopHandler: null,

    autoinit() {
        this.updateTransp();
    },
    add(mark, color) {
      const note = this.notes[mark.id];
      if (note) return note;
      this.emit('added:note');
      return this.notes[mark.id] = new _NOTE(mark, color);
    },
    restore(marks) {
      for (let mark of marks) {
        if (mark.keyData.note) {
          this.add(mark);
        }
      }
    },
    addAndShow(mark, color) {
      this.add(mark, color).show();
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
    },
    startDraggingNote(note) {
      const dragHandler = this.dragHandler = (e) => this.emitDragEvent(note, e);
      const dragStopHandler = this.dragStopHandler = (e) => this.stopDraggingNote(note, e);
      DOC.addEventListener('mousemove', dragHandler, false);
      DOC.addEventListener('mouseup', dragStopHandler, false);
      DOC.addEventListener('touchmove', dragHandler, false);
      DOC.addEventListener('touchend', dragStopHandler, false);
    },
    stopDraggingNote(note, e) {
      DOC.removeEventListener('mousemove', this.dragHandler, false);
      DOC.removeEventListener('mouseup', this.dragStopHandler, false);
      DOC.removeEventListener('touchmove', this.dragHandler, false);
      DOC.removeEventListener('touchend', this.dragStopHandler, false);

      this.emit('dragstop:note', note, e);
    },
    emitDragEvent(note, e) {
      e.preventDefault();
      this.emit('drag:note', note, e);
    },
    sendNotesState(info) {
      this.emit('notes-state', !this.isEmpty(this.notes), info);
    }
  });
}
