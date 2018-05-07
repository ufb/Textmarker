import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'toggled:addon': 'toggle',
        'updated:ctm-settings': 'update'
      }
    },

    items: {
      m: { contexts: ['selection'] },
      w: { contexts: ['selection'] },
      d: { contexts: ['page'] },
      b: { contexts: ['page'] },
      '-b': { contexts: ['page'] },
      n: { contexts: ['page'] }
    },
    created: [],

    autoinit() {
      let item;
      for (let i in this.items) {
        item = this.items[i];
        item.id = i;
        item.title = browser.i18n.getMessage('ctx_' + (i === '-b' ? 'db' : i));
        item.onclick = (infos, tab) => this.onClick(infos, tab);
      }
      this.update();
    },

    create(id) {
      if (!this.created.includes(id)) {
        browser.menus.create(this.items[id]);
        this.created.push(id);
      }
    },
    remove(id) {
      if (this.created.includes(id)) {
        browser.menus.remove(id);
        this.created.splice(this.created.indexOf(id), 1);
      }
    },
    removeAll() {
      if (this.created.length) {
        browser.menus.removeAll();
        this.created = [];
      }
    },
    toggle(on) {
      if (on) this.update();
      else this.removeAll();
    },
    update() {
      const created = this.created;
      _STORAGE.get('shortcuts').then(shortcuts => {
        for (let i in this.items) {
          if (shortcuts[i][2]) this.create(i);
          else this.remove(i);
        }
      });
    },
    onClick(infos, tab) {
      const id = infos.menuItemId;
      if (id === 'w') this.emit('lookup:word', infos.selectionText);
      else this.emit('ctx:' + id, null, null, { tab: tab.id });
    }
  });
}
