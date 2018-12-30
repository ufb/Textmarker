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

    if (!entry) header.classList.add('u-display--none');
    else if (Array.isArray(entry)) return;

    header.classList.remove('u-display--none');
    header.getElementsByClassName('header__name')[0].innerText = entry.name;
  }
});
