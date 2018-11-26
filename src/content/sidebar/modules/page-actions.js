import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--actions'),
  events: {
    ENV: {
      'added:bookmark': 'activateBookmark',
      'removed:bookmark': 'deactivateBookmark',
      'added:note': 'activateNotes',
      'removed:last-note': 'deactivateNotes',
      'page-state': 'onPageState',
      'notes-state': 'onNotesState'
    },
    DOM: {
      click: {
        '.action-button--page': 'pageAction'
      }
    }
  },

  activateBookmark() {
    this.activate('scroll', true);
  },
  deactivateBookmark() {
    this.activate('scroll', false);
  },
  activateNotes() {
    this.activate('notes', true);
  },
  deactivateNotes() {
    this.activate('notes', false);
  },
  activate(type, on) {
    const btn = document.getElementById('page-action--' + type);
    if (on) {
      btn.removeAttribute('disabled');
      btn.parentNode.classList.remove('disabled');
    }
    else {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    }
  },
  pageAction(e, el) {
    this.emit('sidebar:' + el.getAttribute('data-action'), { tab: 'active' });
  },
  onPageState(state) {
    if (state.bookmark) this.activateBookmark();
  },
  onNotesState(notes) {
    if (notes) this.activateNotes();
  }
});
