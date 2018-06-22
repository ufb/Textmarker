import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _TOGGLER from './toggler'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('paginator'),
    events: {
      ENV: {
        'saved:entry': 'add',
        'deleted:entries': 'updateFromStorage',
        'filtered:history': 'reset',
        'imported:history': 'updateFromStorage',
        'changed:per-page-count': 'changeCountPerPage'
      },
      DOM: {
        click: {
          '.page': 'goto',
          '.prev': 'prev',
          '.next': 'next'
        }
      }
    },
    numberPages: 1,
    numberEntries: 0,
    currentPage: 1,
    perPage: 10,

    autoinit() {
      this.updateFromStorage();
    },
    goto(e, el) {
      const newPage = el.getAttribute('data-page') * 1;
      if (this.currentPage !== newPage) {
        this.emit('paginate:history', newPage);
        this.currentPage = newPage;
        this.render();
      }
    },
    prev() {
      if (this.currentPage === 1) return;
      this.emit('paginate:history', --this.currentPage);
      this.render();
    },
    next() {
      if (this.currentPage === this.numberPages) return;
      this.emit('paginate:history', ++this.currentPage);
      this.render();
    },
    add() {
      this.update(++this.numberEntries);
    },
    remove() {
      this.update(--this.numberEntries);
    },
    updateFromStorage() {
      _STORE.get('settings').then(settings => this.perPage = settings.history.pp || 10)
        .then(() => _STORE.get('history').then(history => this.update(history.order.length)));
    },
    update(l, silent) {
      this.numberEntries = l;
      this.numberPages = l ? Math.ceil(l / this.perPage) : 1;
      if (this.currentPage > this.numberPages) {
        this.currentPage = this.numberPages;
        if (!silent) this.emit('paginate:history', this.currentPage);
      }
      this.render();
    },
    reset(l) {
      this.currentPage = 1;
      this.update(l);
    },
    render() {
      const ul = document.getElementById('paginator-list');
      const l = this.numberEntries;
      Array.from(ul.getElementsByClassName('page')).forEach(li => li.remove());

      if (l < this.perPage + 1) {
        this.el.classList.add('u-display--none');
        return;
      } else {
        this.el.classList.remove('u-display--none');
      }
      const p = this.currentPage;

      const pages = this.numberPages;
      const r = 7 - (pages - 1 - p);
      const frag = document.createDocumentFragment();
      const next = ul.getElementsByClassName('next')[0];
      let i = Math.max(2, p - 7);
      if (r > 0) i = Math.max(2, Math.min(i, i - r));
      const j = Math.min(pages, i + 14) + 1;

      this.appendButton(frag, 1);
      for (; i < j; i++) this.appendButton(frag, i);
      if (pages > j - 1) this.appendButton(frag, pages);

      ul.insertBefore(frag, next);
    },
    appendButton(frag, b) {
      const btn = document.createElement('li');
      btn.setAttribute('data-page', b);
      btn.appendChild(document.createTextNode(b));
      btn.classList.add('page');
      if (b === this.currentPage) btn.classList.add('active');
      frag.appendChild(btn);
    },
    changeCountPerPage(p) {
      this.perPage = p;
      this.update(this.numberEntries, true);
    }
  });
}
