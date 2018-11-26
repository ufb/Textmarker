import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'stored:entry': 'render'
    }
  },

  render(entry) {
    const header = this.el;

    if (!entry || entry === 'locked') {
      header.classList.add('u-display--none');
    }
    else if (!entry.locked) {
      header.classList.remove('u-display--none');
      header.getElementsByClassName('header__name')[0].innerText = entry.name;
    }
  }
});
