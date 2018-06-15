import { _DOMMODULE } from './../../../utils'

new _DOMMODULE({
  el: document.getElementById('meta'),
  events: {
    ENV: {
      'entry': 'render'
    }
  },
  entry: null,

  setDates(entry) {
    document.getElementById('created').innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
    document.getElementById('last_modified').innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
  },
  setTitle(entry) {
    document.getElementById('title').innerText = entry.title;
  },
  setLink(entry) {
    const link = document.getElementById('url');
    const url = entry.url;
    link.href = url;
    link.innerText = url;
  },
  setSyncMode(entry) {
    const val = entry.synced ? browser.i18n.getMessage('yes') : browser.i18n.getMessage('no');
    document.getElementById('synced').innerText = val;
  },
  adjustWidths() {
    const widths = [];
    let maxWidth;
    const fields = Array.from(document.getElementsByClassName('meta__field'));
    fields.forEach(field => widths.push(field.offsetWidth));
    maxWidth = Math.max.apply(null, widths) + 'px';
    fields.forEach(field => field.style.width = maxWidth);
  },
  render(entry) {
    this.entry = entry;
    this.setDates(entry);
    this.setTitle(entry);
    this.setLink(entry);
    this.setSyncMode(entry);
    this.adjustWidths();
  },
  optimizeDateString(date) {
    return (date
      .replace(/^(\d{1})(\D{1})/, (m, p, q)=> '0' + p + q)
      .replace(/(\D{1})(\d{1}\D{1})/g, (m, p, q) => p + '0' + q));
  }
});
