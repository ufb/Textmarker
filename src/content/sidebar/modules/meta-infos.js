import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--meta'),
  events: {
    ENV: {
      'stored:entry': 'render'
    }
  },

  render(entry) {
    if (entry) {
      document.getElementById('meta__number-marks').innerText = entry.marks.length;
      document.getElementById('meta__synced').innerText = entry.synced ? browser.i18n.getMessage('yes') : browser.i18n.getMessage('no');
      document.getElementById('meta__created').innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
      document.getElementById('meta__last-modified').innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
    }
  },
  optimizeDateString(date) {
    return (date
      .replace(/^(\d{1})(\D{1})/, (m, p, q)=> '0' + p + q)
      .replace(/(\D{1})(\d{1}\D{1})/g, (m, p, q) => p + '0' + q));
  }
});
