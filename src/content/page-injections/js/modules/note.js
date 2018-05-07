import { _DOMMODULE } from './../../../utils'
import _STORE from './../_store'

export default function(mark) {

  const BODY = window.document.body;

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
      const innerWindowWidth = window.innerWidth;
      let left = pos.left;
      if (left + 360 > innerWindowWidth) {
        left = innerWindowWidth - 360;
      }
      BODY.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + (pos.top + pos.offset) + 'px;left:' + left + 'px;');
      this.visible = true;
    },
    bringUpFront() {
      Array.from(BODY.getElementsByTagName('tmnote')).forEach(note => {
        if (note === this.el) note.style.zIndex = 2147483647;
        else note.style.zIndex = 2147483646;
      });
    },
    hide() {
      BODY.removeChild(this.el);
      this.visible = false;
    },
    addMarkListeners() {
      _STORE.get('noteonclick').then(noteonclick => {
        if (noteonclick) {
          const handler = this.markClickHandler = () => this.show();

          for (let wrapper of this.mark.wrappers) {
            wrapper.addEventListener('click', handler, false);
            wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
          }
        }
      });
    },
    removeMarkListeners() {
      if (!this.markClickHandler) return;
      for (let wrapper of this.mark.wrappers) {
        wrapper.removeEventListener('click', this.markClickHandler, false);
        wrapper.removeAttribute('title');
      }
    },
    getPosition() {
      const rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset - BODY.clientTop,
        left: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    }
	});
}
