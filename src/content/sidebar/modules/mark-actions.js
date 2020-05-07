import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('mark-actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate',
      'activated:mark': 'activate'
    },
    DOM: {
      click: {
        '.action-button--mark': 'markAction'
      }
    }
  },
  frame: 0,
  buttons: [],

  autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    const action = el.getAttribute('data-action');
    if (action === 'copy') {
      browser.permissions.contains({ permissions: ['clipboardWrite'] }).then(granted => {
        this.emit('sidebar:' + el.getAttribute('data-action'), granted, null, { tab: 'active', frameId: this.frame });
      });
    } else {
      this.emit('sidebar:' + el.getAttribute('data-action'), null, null, { tab: 'active', frameId: this.frame });
    }
  },
  activate(markInfos, sender) {
    this.frame = sender && sender.frameId ? sender.frameId : 0;

    this.buttons.forEach(btn => {
      let type = btn.getAttribute('data-action');
      if (
        type === 'copy' ||
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
