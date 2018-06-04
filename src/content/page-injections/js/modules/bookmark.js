import _STORE from './../_store'

export default class _BOOKMARK {

  constructor() {
    this.icon = null;
    this.iconShown = false;
    this.mark = null;
    this.anchor = null;
  }

  set(mark) {
    mark = mark || this.mark;

    let wrappers = mark.wrappers,
        w = wrappers.length,
        anchor = wrappers[0];

    mark.keyData.bookmark = true;
    anchor.id = 'textmarker-bookmark-anchor';

    while (w--)
      wrappers[w].classList.add('textmarker-bookmark');

    this.mark = mark;
    this.anchor = anchor;

    return _STORE.get('bmicon').then(bmicon => {
      if (bmicon) this.insertIcon();
      return this;
    });
  }
  remove() {
    let mark = this.mark,
        anchor = this.anchor,
        wrappers = mark.wrappers,
        w = wrappers.length;

    anchor.id = '';
    mark.keyData.bookmark = false;

    while (w--)
      wrappers[w].classList.remove('textmarker-bookmark');

    if (this.iconShown) this.removeIcon();
  }
  insertIcon() {
    const tmui = window.document.getElementsByTagName('tmui')[0];

    let bm = this.icon ||
          (() => {
            var bm = window.document.createElement('tmbm');
            if (_STORE.pdf) bm.className = 'textmarker-bookmark-control';

            bm.addEventListener('click', () => this.scrollIntoView(), false);

            this.icon = bm;

            return bm;
          })();

    tmui.appendChild(bm);
    tmui.classList.add('active');
    bm.title = browser.i18n.getMessage('bm_scroll');
    this.iconShown = true;
  }
  removeIcon() {
    const icon = this.icon;

    if (!icon) return;

    const tmui = window.document.getElementsByTagName('tmui')[0];
    tmui.removeChild(icon);
    this.iconShown = false;

    if (!tmui.children.length) tmui.classList.remove('active');
  }
  scrollIntoView(bm) {
    if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor')))
      bm.scrollIntoView();
  }
}
