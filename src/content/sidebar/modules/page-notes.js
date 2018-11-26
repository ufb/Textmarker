import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--page-notes'),
  events: {
    ENV: {
      //'stored:entry': 'render'
    },
    DOM: {
      click: {
        '#add-note': 'addNote',
        'tmnotecolor': 'changeColor',
        'tmnotecustomize': 'togglePalette',
        'tmnotedelete': 'removeNote',
        'tmnoteminimize': 'minimizeNote'
      }
    }
  },

  addNote() {
    const note = document.getElementById('page-note-template').cloneNode(true);
    note.id = '';
    note.classList.remove('u-display--none');
    document.getElementById('page-notes').appendChild(note);
  },
  changeColor(e, el) {
    el.parentNode.parentNode.parentNode.classList.add('tmnote--' + el.getAttribute('data-color'));
  },
  togglePalette(e, el) {
    el.parentNode.getElementsByTagName('tmnotepalette')[0].classList.toggle('u-display--none');
  },
  removeNote(e, el) {
    el.parentNode.parentNode.removeChild(el.parentNode);
    this.emit('remove:page-note');
  },
  minimizeNote(e, el) {
    el.parentNode.classList.add('tmnote--min');
  }
});
