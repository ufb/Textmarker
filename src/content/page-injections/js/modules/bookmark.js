import _STORE from './../_store'

export default class _BOOKMARK {

  constructor() {
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

    return this;
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
  }
  scrollIntoView(bm) {
    if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor')))
      bm.scrollIntoView();
  }
}
