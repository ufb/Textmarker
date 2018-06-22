import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function(mark) {

  const DOC = window.document;

  return new _DOMMODULE({
		events: {
      ENV: {
        'updated:misc-settings': 'updatePosition',
        'added:note': 'onNoteAdded',
        'added:bookmark': 'onBookmarkAdded',
        'removed:last-note': 'onLastNoteRemoved',
        'removed:bookmark': 'onBookmarkRemoved'
      },
      DOM: {
        click: {
          'tmnotestoggle': 'toggleNotes',
          'tmbm': 'scrollToBookmark'
        }
      }
		},
    addListenersManually: true,
    el: null,
    notesBtn: null,
    bmBtn: null,
    notesBtnActive: false,
    bmBtnActive: false,
    bookmark: false,
    notes: false,

    autoinit() {
      this.createEl();
      this.createBtns();
      this.addListeners();
    },

    createEl() {
      const el = this.el = DOC.createElement('tmui');
      DOC.body.appendChild(el);
      this.updatePosition();
    },
    createBtns() {
      const notesBtn = this.notesBtn = DOC.createElement('tmnotestoggle');
      const bmBtn = this.bmBtn = DOC.createElement('tmbm');
      notesBtn.title = browser.i18n.getMessage('toggle_notes');
      bmBtn.title = browser.i18n.getMessage('bm_scroll');
      if (_STORE.pdf) bm.className = 'textmarker-bookmark-control';
    },
    addBtn(btn) {
      this.el.appendChild(btn);
      this.el.classList.add('active');
    },
    removeBtn(btn) {
      this.el.removeChild(btn);
      if (!this.el.children.length) {
        this.el.classList.remove('active');
      }
    },
    updatePosition() {
      _STORE.get('tmuipos').then(pos => this.el.setAttribute('style', pos.split('-').map(p => p + ':1px;').join(' ')));
    },
    onNoteAdded() {
      this.notes = true;
      if (!this.notesBtnActive) {
        _STORE.get('noteicon').then(noteicon => {
          if (noteicon) {
            this.addBtn(this.notesBtn);
            this.notesBtnActive = true;
          }
        });
      }
    },
    onLastNoteRemoved() {
      this.notes = false;
      if (this.notesBtnActive) {
        this.removeBtn(this.notesBtn);
        this.notesBtnActive = false;
      }
    },
    onBookmarkAdded() {
      this.bookmark = true;
      if (!this.bmBtnActive) {
        _STORE.get('bmicon').then(bmicon => {
          if (bmicon) {
            this.addBtn(this.bmBtn);
            this.bmBtnActive = true;
          }
        });
      }
    },
    onBookmarkRemoved() {
      this.bookmark = false;
      if (this.bmBtnActive) {
        this.removeBtn(this.bmBtn);
        this.bmBtnActive = false;
      }
    },
    toggleNotes() {
      this.emit('toggle:notes');
    },
    scrollToBookmark() {
      this.emit('scroll-to-bookmark');
    }
	});
}
