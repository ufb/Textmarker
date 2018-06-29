import { _DOMMODULE } from './../../_shared/utils'
import { _GET_ACTIVE_TAB } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('mark-nav'),
  events: {
    DOM: {
      click: {
        '.action-box__action--nav': 'nav',
        '.i': 'toggleInfo'
      }
    }
  },
  buttons: [],

  autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  nav(e, el) {
    _GET_ACTIVE_TAB().then(tab => this.emit('sidebar:' + el.getAttribute('data-action'), 1*el.getAttribute('data-value'), null, { tab: tab.id }));
  },
  toggleInfo(e, el) {
    el.classList.toggle('active');
  }
});
