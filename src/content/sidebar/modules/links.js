import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('links'),
  events: {
    DOM: {
      click: {
        '.link': 'link'
      }
    }
  },

  link(e, el) {
    this.emit('open:addon-page', el.getAttribute('data-id'));
  }
});
