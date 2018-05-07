import { _DOMMODULE } from './../../../utils'
import _STORE from './../_store'

export default function(mark) {

  return new _DOMMODULE({
		events: {
      DOM: {
        click: {
          'tmnote-delete': 'remove',
          'tmnote-minimize': 'hide',
          'tmnote-content': 'bringUpFront'
        },
        keyup: {
          'tmnote-content': 'update'
        }
      }
		},
    addListenersManually: true,
    el: null,
    mark: mark,
    markClickHandler: null,
    text: '',
    visible: false,

    autoinit() {
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },

    createNoteElement() {
      const note = this.el = document.createElement('tmnote');
      const del = this.del = document.createElement('tmnote-delete');
      const min = this.min = document.createElement('tmnote-minimize');
      const p = this.textElement = document.createElement('tmnote-content');
      const text = this.mark.keyData.note || '';
      const delText = document.createTextNode(String.fromCharCode(10005));
      const minText = document.createTextNode(String.fromCharCode(0x2013));

      if (text) {
        p.appendChild(document.createTextNode(text));
      }
      p.setAttribute('contenteditable', true);
      del.appendChild(delText);
      min.appendChild(minText);
      note.appendChild(del);
      note.appendChild(min);
      note.appendChild(p);
    },
    remove(e, el) {
      this.hide();
      this.mark.keyData.note = '';
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    update(e, el) {
      this.mark.keyData.note = el.textContent;
      this.emit('updated:note');
    },
    show() {
      const el = this.el;
      const pos = this.getPosition();
      let left = pos.left;
      const innerWindowWidth = window.innerWidth;
      if (left + 360 > innerWindowWidth) {
        left = innerWindowWidth - 360;
      }
      window.document.body.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + (pos.top + pos.offset) + 'px;left:' + left + 'px;');
      this.visible = true;
    },
    bringUpFront() {
      Array.from(window.document.body.getElementsByTagName('tmnote')).forEach(note => {
        if (note === this.el) note.style.zIndex = 2147483647;
        else note.style.zIndex = 2147483646;
      });
    },
    hide() {
      window.document.body.removeChild(this.el);
      this.visible = false;
    },
    addMarkListeners() {
      _STORE.get('noteonclick').then(noteonclick => {
        if (noteonclick) {
          const handler = this.markClickHandler = () => this.show();

          for (let w of this.mark.wrappers) {
            w.addEventListener('click', handler, false);
            w.setAttribute('title', browser.i18n.getMessage('toggle_note'));
          }
        }
      });
    },
    removeMarkListeners() {
      if (!this.markClickHandler) return;
      for (let w of this.mark.wrappers) {
        w.removeEventListener('click', this.markClickHandler, false);
        w.removeAttribute('title');
      }
    },
    getPosition() {
      const rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset - window.document.body.clientTop,
        left: rect.left + window.pageXOffset - window.document.body.clientLeft,
        offset: rect.height
      };
    }
	});
}
