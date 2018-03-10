import { _DOMMODULE } from './../../utils'
import { _L10N } from './../../utils'
import _PORT from './port'
_L10N();

new _DOMMODULE({
  el: document.getElementById('textmarker-sidebar'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render'
    },
    DOM: {
      change: {
        '.css': 'change'
      },
      click: {
        '.send': 'open'
      }
    }
  },
  disabled: false,

  autoinit() {
    this.render();
  },
  render() {
    browser.storage.sync.get().then(storage => {
      if (storage && storage.settings && (!storage.sync || storage.sync.settings)) {
        return storage.settings.markers;
      }
      return browser.storage.local.get().then(storage => {
        if (storage && storage.settings && storage.sync && !storage.sync.settings) {
          return storage.settings.markers;
        }
        return null;
      });
    })
    .then(markers => {
      if (!markers) return this;
      const inputs = document.getElementById('bg-inputs');
      let frag = document.createDocumentFragment(),
          m, box, label, input, color;

      inputs.innerText = '';

      for (m in markers) {
        box = document.createElement('div');
        label = document.createElement('label');
        input = document.createElement('input');
        color = this.extractBgColor(markers[m]);

        box.className = 'bg-color-box';
        label.setAttribute('for', 'bg-color-' + m);
        label.className = 'column-left';
        input.className = 'css';
        input.id = 'bg-color-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;

        box.appendChild(label);
        box.appendChild(input);
        frag.appendChild(box);

        label.innerText = m.toUpperCase();
        if (!color) input.setAttribute('disabled', 'disabled');
      }
      inputs.appendChild(frag);
    });
  },
  extractBgColor(styles) {
    let split = styles.split(';'),
        l = split.length,
        color = '',
        i = 0,
        style;

    for (; i < l; i++) {
      style = split[i];
      if (style.includes('background-color')) {
        color = style.split(':')[1];
        break;
      }
    }
    return color;
  },
  change(e, el) {
    if (!this.disabled) this.emit('change:bg-setting', el.name, el.value);
  },
  open(e, el) {
    this.emit('open:addon-page', el.getAttribute('data-id'));
  }
});
