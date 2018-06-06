import { _DOMMODULE } from './../../../utils'
import { _GET_ACTIVE_TAB } from './../../../utils'

new _DOMMODULE({
  el: document.getElementById('mark-actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate'
    },
    DOM: {
      click: {
        '.mark-action': 'markAction'
      }
    }
  },
  buttons: [],

  autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    _GET_ACTIVE_TAB().then(tab => this.emit('sidebar:' + el.getAttribute('data-action'), { tab: tab.id }));
    this.deactivate();
  },
  activate() {
    this.buttons.forEach(btn => btn.removeAttribute('disabled'));
  },
  deactivate() {
    this.buttons.forEach(btn => btn.setAttribute('disabled', true));
  }
});
