import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function(mark) {

  return new _DOMMODULE({
		events: {
      ENV: {
        'updated:misc-settings': 'updateState',
        'added:note': 'onNoteAdded',
        'added:bookmark': 'onBookmarkAdded',
        'removed:last-note': 'onLastNoteRemoved',
        'removed:bookmark': 'onBookmarkRemoved'
      }
		},
    addListenersManually: true,
    el: null,

    attached: false,

    buttons: {
      notes: {
        el: null,
        show: false,
        shown: false
      },
      bookmark: {
        el: null,
        show: false,
        shown: false
      }
    },

    bookmark: false,
    notes: false,

    autoinit() {
      this.createButtons();
      this.updateState();
    },
    updateState() {
      _STORE.get('bmicon').then(bmicon => {
        this.buttons.bookmark.show = bmicon;
        return _STORE.get('noteicon').then(noteicon => this.buttons.notes.show = noteicon);
      })
        .then(() => this.update());
    },
    update() {
      const shouldAttach =
        (this.buttons.bookmark.show && this.bookmark) ||
        (this.buttons.notes.show && this.notes);

      if (shouldAttach) {
        this.render();
      }
      else if (this.attached && !shouldAttach) {
        this.remove();
      }
    },
    render() {
      let buttons = this.buttons, btn;

      if (!this.attached) {
        const el = this.el = window.document.createElement('tmui');
        window.document.body.appendChild(el);
      }
      for (let b in buttons) {
        btn = buttons[b];
        if (btn.show && !btn.shown && this[b]) this.addButton(b);
        else if (btn.shown && (!this[b] || !btn.show)) this.removeButton(b);
      }
      if (!buttons.notes.shown && !buttons.bookmark.shown) {
        this.remove();
      } else {
        this.updatePosition();
        this.addListeners();
      }

      this.attached = true;
    },
    remove() {
      if (this.attached) {
        const tmui = this.el;
        const buttons = this.buttons;

        for (let b in buttons) {
          if (buttons[b].shown) {
            this.removeButton(b);
          }
        }

        window.document.body.removeChild(tmui);
        this.attached = false;
      }
    },
    createButtons() {
      const notesButton = this.buttons.notes.el = window.document.createElement('tmnotestoggle');
      const bookmarkButton = this.buttons.bookmark.el = window.document.createElement('tmbm');
      notesButton.title = browser.i18n.getMessage('toggle_notes');
      bookmarkButton.title = browser.i18n.getMessage('bm_scroll');
    },
    addButton(type) {
      const tmui = this.el;
      const btn = this.buttons[type];
      const self = this;
      const handler = btn.handler = type === 'notes' ?
        this.toggleNotes.bind(this) :
        this.scrollToBookmark.bind(this);

      tmui.appendChild(btn.el);
      btn.shown = true;

      btn.el.addEventListener('click', handler, false);
    },
    removeButton(type) {
      const tmui = this.el;
      const btn = this.buttons[type];

      tmui.removeChild(btn.el);
      btn.shown = false;

      btn.el.removeEventListener('click', btn.handler, false);
    },
    updatePosition() {
      _STORE.get('tmuipos')
        .then(pos => this.el.setAttribute('style', pos.split('-').map(p => p + ':1px;').join(' ')));
    },
    onNoteAdded() {
      this.notes = true;
      this.update();
    },
    onLastNoteRemoved() {
      this.notes = false;
      this.update();
    },
    onBookmarkAdded() {
      this.bookmark = true;
      this.update();
    },
    onBookmarkRemoved() {
      this.bookmark = false;
      this.update();
    },
    toggleNotes() {
      this.emit('toggle:notes');
    },
    scrollToBookmark() {
      this.emit('scroll-to-bookmark');
    }
	});
}
