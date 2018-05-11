export default class _NAV {

  constructor(el) {
    this.el = el;
    this.pageNav = el.hasAttribute('data-page-nav');
    let current = this.current = el.getElementsByClassName('active')[0];
    this.init().open(current);

  }

  init() {
    this.el.addEventListener('click', e => {
      let clicked = e.target;
      if (clicked.nodeName !== 'LI' || clicked.classList.contains('disabled')) return false;
      this.toggle(clicked);
    }, false);
    return this;
  }
  toggle(el) {
    if (this.current == el) return;

    if (this.current) this.close(this.current);

    this.open(el);
  }
  open(el) {
    const targetId = el.getAttribute('data-target');
    el.classList.add('active');
    document.getElementById(targetId).classList.remove('none');
    this.current = el;
    if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
  }
  close(el) {
    el.classList.remove('active');
    document.getElementById(el.getAttribute('data-target')).classList.add('none');
  }
}
