export default class _TOGGLER {

  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.el.addEventListener('click', this.toggle, false);
  }
  toggle(e) {
    e.stopPropagation();

    let target = document.getElementById(this.getAttribute('data-target')),
        role = this.getAttribute('data-toggle');

    if (role) target.classList[role]('open');
    else target.disabled = !this.checked;
  }
}
