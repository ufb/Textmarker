import { _MODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _NOTE from './note'

new _MODULE({
  events: {
    ENV: {
      'add:note': 'addAndShow',
      'removed:note': 'removeNoteStorage',
      'restore:notes': 'restore',
      'removed:mark': 'removeNote',
      'toggle:notes': 'toggleAll',
      'sidebar:toggle-notes': 'toggleAll',
      'updated:misc-settings': 'updateStyle',
      'start:drag': 'startDraggingNote',
      'opened:sidebar': 'sendNotesState',
      'finished:all-restorations': 'report'
    }
  },

  notes: {},
  toggle: null,
  dragHandler: null,
  dragStopHandler: null,

  autoinit() {
      this.updateStyle();
  },
  add(mark, color) {
    const note = this.notes[mark.id];
    if (note) return note;
    if (!_STORE.restoring) this.emit('added:note');
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
  updateStyle() {
    const bodyClasses = window.document.body.classList;
    _STORE.get('settings').then(settings => {
      if (settings && settings.misc) {
        if (settings.misc.notetransp) bodyClasses.add('tmnotes--0_8');
        else bodyClasses.remove('tmnotes--0_8');
        if (settings.misc.noteplainview) bodyClasses.add('tmnotes--plain-view');
        else bodyClasses.remove('tmnotes--plain-view');
        _STORE.noteFontSize = settings.misc.notefontsize || 12;
      }
    });
  },
  isEmpty(obj) {
    return !Object.keys(obj).length;
  },
  startDraggingNote(note) {
    const dragHandler = this.dragHandler = (e) => this.emitDragEvent(note, e);
    const dragStopHandler = this.dragStopHandler = (e) => this.stopDraggingNote(note, e);
    const doc = window.document;
    doc.addEventListener('mousemove', dragHandler, false);
    doc.addEventListener('mouseup', dragStopHandler, false);
    doc.addEventListener('touchmove', dragHandler, false);
    doc.addEventListener('touchend', dragStopHandler, false);
  },
  stopDraggingNote(note, e) {
    const doc = window.document;
    doc.removeEventListener('mousemove', this.dragHandler, false);
    doc.removeEventListener('mouseup', this.dragStopHandler, false);
    doc.removeEventListener('touchmove', this.dragHandler, false);
    doc.removeEventListener('touchend', this.dragStopHandler, false);

    this.emit('dragstop:note', note, e);
  },
  emitDragEvent(note, e) {
    e.preventDefault();
    this.emit('drag:note', note, e);
  },
  sendNotesState(info) {
    this.emit('notes-state', !this.isEmpty(this.notes), info);
  },
  report() {
    this.isEmpty(this.notes) || this.emit('added:note');
  }
});
