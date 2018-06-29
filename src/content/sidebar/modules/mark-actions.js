import { _DOMMODULE } from './../../_shared/utils'
import { _GET_ACTIVE_TAB } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('mark-actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate'
    },
    DOM: {
      click: {
        '.action-box__action--mark': 'markAction'
      }
    }
  },
  buttons: [],

  autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    _GET_ACTIVE_TAB().then(tab => this.emit('sidebar:' + el.getAttribute('data-action'), null, null, { tab: tab.id }));
    this.deactivate();
  },
  activate(markInfos) {
    this.buttons.forEach(btn => {
      let type = btn.getAttribute('data-action');
      if (
        type === 'delete-highlight' ||
        (typeof markInfos[type] === 'boolean' && !markInfos[type]) ||
        (type === 'delete-bookmark' && markInfos.bookmark)
      ) {
        btn.removeAttribute('disabled');
        btn.parentNode.classList.remove('disabled');
      }
    });
  },
  deactivate() {
    this.buttons.forEach(btn => {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    });
  }
});
