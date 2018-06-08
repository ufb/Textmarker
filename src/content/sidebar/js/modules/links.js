import { _DOMMODULE } from './../../../utils'

new _DOMMODULE({
  el: document.getElementById('markers'),
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
