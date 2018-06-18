import { _DOMMODULE } from './../../utils'

export default function(el) {

  return new _DOMMODULE({
    el,
		events: {
      DOM: {
        click: {
          'li': 'toggle'
        }
      }
		},
    pageNav: null,
    current: null,

    autoinit() {
      this.pageNav = el.hasAttribute('data-page-nav');
      let current = this.current = el.getElementsByClassName('active')[0];
      this.open(current);
    },

    toggle(e, el) {
      if (el.classList.contains('disabled') || this.current == el) return false;

      if (this.current) this.close(this.current);

      this.open(el);
    },
    open(el) {
      const targetId = el.getAttribute('data-target');
      el.classList.add('active');
      document.getElementById(targetId).classList.remove('none');
      this.emit('opened:tab', targetId);
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    },
    close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('none');
    }
  });
}
