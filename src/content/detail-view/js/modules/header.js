import { _DOMMODULE } from './../../../utils'

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
    const tag = entry.tag || 'Kein Tag zugeordnet';
    document.getElementById('tag').innerText = tag;
  },
  render(entry) {
    this.entry = entry;
    this.setTitle(entry);
    this.setTag(entry);
  }
});
