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

    let dataTarget = this.getAttribute('data-target'),
        targets = dataTarget ? dataTarget.split(' ') : null,
        dataToggle = this.getAttribute('data-toggle'),
        roles = dataToggle ? dataToggle.split(' ') : null;

    if (roles) {
      roles.forEach((role, i) => document.getElementById(targets[i]).classList[role]('open'));
    }
    else document.getElementById(targets[0]).disabled = !this.checked;
  }
}
