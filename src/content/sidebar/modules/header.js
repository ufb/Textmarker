import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'saved:entry': 'render'
    }
  },

  render(entry) {
    if (!entry.locked) {
      this.el.classList.remove('u-display--none');
      document.getElementById('header__name').innerText = entry.name;
    }
  }
});
