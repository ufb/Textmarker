import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {

  const DOC = window.document;

  return new _DOMMODULE({
		events: {
      ENV: {
        'updated:mark-method-settings': 'update',
        'changed:selection': 'onSelectionChange'
      }
		},

    handler: null,
    appended: false,

    autoinit() {
      this.update().then(() => this.create());
    },

    update() {
      return _STORE.get('settings').then(settings => {
        this.active = settings.misc.markmethod === 'popup';
        this.markers = settings.markers;
      });
    },
    create() {
      const popup = this.el = DOC.createElement('tmpopup');
      const bgColorRegExp = /background-color:(#[a-f0-9]{6})/;
      let bgColor, colorBtn;
      for (let m in this.markers) {
        bgColor = this.markers[m].style.match(bgColorRegExp);
        if (bgColor) {
          colorBtn = DOC.createElement('tmpopupcolor');
          popup.appendChild(colorBtn);
          colorBtn.style.background = bgColor.pop();
          colorBtn.id = 'tmpopupcolor--' + m;
        }
      }
    },
    remove() {
      if (this.appended) {
        DOC.body.removeChild(this.el);
        this.el.removeEventListener('click', this.handler, false);
        this.appended = false;
      }
    },
    show() {
      if (!this.appended) {
        DOC.body.appendChild(this.el);
        const handler = this.handler = this.onClick.bind(this);
        this.el.addEventListener('mousedown', handler, false);
        this.appended = true;
      }
      const selectionPosition = window.getSelection().getRangeAt(0).getBoundingClientRect();
      this.el.style.top = selectionPosition.top - selectionPosition.height - 10 + window.scrollY + 'px';
      this.el.style.left = selectionPosition.left + window.scrollX + 'px';
    },
    onSelectionChange(selected) {
      if (this.active) {
        if (!selected) this.remove();
        else this.show();
      }
      else if (this.appended) {
        this.remove();
      }
    },
    onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      const el = e.target;
      if (el.nodeName === 'TMPOPUPCOLOR') {
        this.emit('clicked:popup-marker', el.id.split('--').pop());
      }
    }
	});
}
