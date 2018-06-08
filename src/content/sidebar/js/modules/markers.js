import { _DOMMODULE } from './../../../utils'
import { _GET_ACTIVE_TAB } from './../../../utils'

new _DOMMODULE({
  el: document.getElementById('markers'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render',
      'changed:selection': 'toggleMarkerButtons'
    },
    DOM: {
      change: {
        '.marker__color': 'change'
      },
      click: {
        '.marker__apply': 'applyColor'
      }
    }
  },

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
      const inputs = document.getElementById('markers-container');
      let frag = document.createDocumentFragment(),
          m, box, label, input, button, color;

      inputs.innerText = '';

      for (m in markers) {
        box = document.createElement('div');
        label = document.createElement('label');
        input = document.createElement('input');
        button = document.createElement('button');
        color = this.extractBgColor(markers[m]);

        box.className = 'marker';
        label.setAttribute('for', 'marker-' + m);
        label.className = 'marker__label';
        input.className = 'marker__color';
        input.id = 'marker-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;
        button.className = 'marker__apply disabled';
        button.setAttribute('data-key', m);

        box.appendChild(label);
        box.appendChild(input);
        box.appendChild(button);
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
    this.emit('change:bg-setting', el.name, el.value);
  },
  applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    _GET_ACTIVE_TAB().then(tab => this.emit('sidebar:highlight', el.getAttribute('data-key'), { tab: tab.id }));
  },
  toggleMarkerButtons(show) {
    const meth = show ? 'remove' : 'add';
    Array.from(document.getElementsByClassName('marker__apply')).forEach(btn => btn.classList[meth]('disabled'));
  }
});
