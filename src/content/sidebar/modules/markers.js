import { _DOMMODULE } from './../../_shared/utils'

new _DOMMODULE({
  el: document.getElementById('tab--markers'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render',
      'changed:selection': 'toggleMarkerButtons',
      'page-state': 'onPageState'
    },
    DOM: {
      change: {
        '.marker__color': 'change',
        '.marker__cb': 'select'
      },
      click: {
        '.marker__apply': 'applyColor'
      }
    }
  },

  automarkEnabled: false,

  autoinit() {
    this.render();
  },
  render() {
    browser.storage.sync.get().then(storage => {
      if (storage && storage.settings && (!storage.sync || storage.sync.settings)) {
        this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
        return storage.settings.markers;
      }
      return browser.storage.local.get().then(storage => {
        if (storage && storage.settings && storage.sync && !storage.sync.settings) {
          this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
          return storage.settings.markers;
        }
        return null;
      });
    })
    .then(markers => {
      if (!markers) return this;
      const leftContainer = document.getElementById('markers-container--left');
      const rightContainer = document.getElementById('markers-container--right');
      const fragRight = document.createDocumentFragment();
      const fragLeft = document.createDocumentFragment();
      const s = Math.ceil(Object.keys(markers).length / 2);
      let count = 0, m, box, input, exampleText, button, color, cbBox, cb, cbLabel, cbSpan;

      leftContainer.innerText = '';
      rightContainer.innerText = '';

      for (m in markers) {
        count++;

        box = document.createElement('div');
        input = document.createElement('input');
        exampleText = document.createElement('label');
        button = document.createElement('button');
        cbBox = document.createElement('div');
        cb = document.createElement('input');
        cbLabel = document.createElement('label');
        cbSpan = document.createElement('span');
        color = this.extractBgColor(markers[m].style);

        box.className = 'marker u-cf';
        input.className = 'marker__color';
        input.id = 'marker-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;
        exampleText.className = 'marker__text';
        exampleText.setAttribute('style', markers[m].style);
        exampleText.setAttribute('for', 'marker-' + m);
        button.className = 'marker__apply';
        button.setAttribute('disabled', true);
        button.setAttribute('data-key', m);
        cbBox.className = 'marker__cb-box';
        cb.className = 'marker__cb';
        cb.setAttribute('data-key', m);
        cb.type = 'radio';
        cb.id = 'marker__cb--' + m;
        cb.name = 'marker-cb';
        cbLabel.className = 'fake-rb';
        cbLabel.setAttribute('for', 'marker__cb--' + m);
        cbSpan.textContent = String.fromCharCode(0x229a);

        cbLabel.appendChild(cbSpan);
        cbBox.appendChild(cb);
        cbBox.appendChild(cbLabel);

        box.appendChild(button);
        box.appendChild(cbBox);
        box.appendChild(input);
        box.appendChild(exampleText);

        if (count > 3 && count > s) {
          fragLeft.appendChild(box);
        } else {
          fragRight.appendChild(box);
        }

        m = m.toUpperCase();
        m = m === 'ENTER' ? String.fromCharCode(0x21B5) : m;
        exampleText.innerText = m;
        if (!color) input.setAttribute('disabled', true);
      }
      rightContainer.appendChild(fragRight);
      leftContainer.appendChild(fragLeft);

      if (this.automarkEnabled) {
        this.el.classList.add('auto');
        document.getElementById('marker__cb--m').checked = true;
      } else {
        this.el.classList.remove('auto');
      }
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
  select(e, el) {
    this.emit('sidebar:selected-marker', el.getAttribute('data-key'), { tab: 'active' });
  },
  applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    this.emit('sidebar:highlight', el.getAttribute('data-key'), { tab: 'active' });
  },
  toggleMarkerButtons(show) {
    const meth = show ? 'removeAttribute' : 'setAttribute';
    Array.from(document.getElementsByClassName('marker__apply')).forEach(btn => btn[meth]('disabled', true));
  },
  onPageState(state) {
    this.toggleMarkerButtons(state.selection);
  }
});
