import { _DOMMODULE } from './../../utils'
import { _L10N } from './../../utils'
import _PORT from './port'
_L10N();
window.addEventListener('error', function (error) {
  console.log('message', error.message);
  console.log('file', error.filename);
  console.log('line', error.lineno);
  console.log('row', error.colno);
  console.log('time', error.timeStamp);
  console.log('target', error.target);
  console.log('target', error.target.nodeName);
  console.log('target', error.AT_TARGET);
}, false);
new _DOMMODULE({
  el: document.getElementById('menu'),
  events: {
    DOM: {
      click: {
        '#activate': 'toggle',
        '.send': 'open'
      }
    }
  },
  port: null,
  disabled: false,

  autoinit() {bla.blubb();
    browser.storage.sync.get().then(storage => {
      if (storage.settings) {
        if (!storage || !storage.sync || storage.sync.settings) return storage.settings.addon.active;
        return browser.storage.local.get().then(storage => storage.settings.addon.active);
      }
      return true;
    })
    .then(active => this.setActivateText(active));
  },
  toggle() {
    this.emit('toggle:addon');
    window.close();
  },
  open(e, el) {
    this.emit('open:addon-page', el.id);
    window.close();
  },
  setActivateText(active) {
    document.getElementById('activate').innerText = browser.i18n.getMessage('tbb_mitem_1_' + active);
  }
});
