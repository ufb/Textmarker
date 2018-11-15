import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'saved:entry': 'render',
      'entry:found': 'render',
      'entry:found-for-tab': 'render'
    }
  },

  render(entry) {
    if (!entry || entry === 'locked') {
      this.el.classList.add('u-display--none');
    }
    else if (!entry.locked) {
      this.el.classList.remove('u-display--none');
      document.getElementById('header__name').innerText = entry.name;
    }
  }
});
