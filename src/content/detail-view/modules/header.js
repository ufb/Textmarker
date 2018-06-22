import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'entry': 'render'
    }
  },
  entry: null,

  setTitle(entry) {
    this.el.innerText = entry.name;
  },
  setTag(entry) {
    const tag = entry.tag || browser.i18n.getMessage('detail_notag');
    document.getElementById('tag').innerText = tag;
  },
  render(entry) {
    this.entry = entry;
    this.setTitle(entry);
    this.setTag(entry);
  }
});
