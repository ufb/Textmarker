import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('mark-actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate'
    },
    DOM: {
      click: {
        '.action-box__action--mark': 'markAction',
        '.action-box__action--nav': 'nav',
        '.i': 'toggleInfo'
      }
    }
  },
  buttons: [],

  autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    this.emit('sidebar:' + el.getAttribute('data-action'), null, null, { tab: 'active' });
    //this.deactivate();
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
  },
  nav(e, el) {
    this.emit('sidebar:' + el.getAttribute('data-action'), 1*el.getAttribute('data-value'), null, { tab: 'active' });
  },
  toggleInfo(e, el) {
    el.classList.toggle('active');
  }
});
