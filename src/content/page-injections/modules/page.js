import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: window.document,
  autoPause: true,
  events: {
    ENV: {
      'started:restorations': 'removeListeners',
      'completed:restoration-process': 'addListeners'
    },
    DOM: {
      keydown: {
        '*': 'delegate'
      },
      selectionchange: {
        '*': 'onSelectionChange'
      }
    }
  },

  selectionCollapsed: true,
  shiftSensitiveKeys: [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 171, 173],
  keyCodeMap: {
    '13': 'Enter',
    '48': '0', '49': '1', '50': '2', '51': '3', '52': '4',
    '53': '5', '54': '6', '55': '7', '56': '8', '57': '9',
    '171': '+', '173': '-'
  },

  isEditable(el) {
    const name = el.tagName;

    return (name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true');
  },
  delegate(e) {
    let key = e.key.toLowerCase();
    const keyCode = e.keyCode,
        modKey = (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey),
        arrowKeys = ['arrowdown', 'arrowup'],
        lockedActions = ['b', 's', 'y', 'z', 'd'],
        functionKeys = lockedActions.concat(arrowKeys).concat(['c', 'n']),
        defaultMarkers = ['m', '2', '3'];

    if (_STORE.locked && lockedActions.includes(key)) return true;

    if (this.shiftSensitiveKeys.includes(keyCode)) key = this.keyCodeMap[keyCode];

    if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;

    if (this.isEditable(e.target)) return true;

    _STORE.get('settings').then(settings => {

      if (!settings) return true;

      const origKey = key;
      const markers = settings.markers;
      const shortcuts = settings.shortcuts;
      const isMarkerKey = markers[key];
      const isCustomMarkerKey = isMarkerKey && !defaultMarkers.includes(key);
      if (isCustomMarkerKey) key = 'cm';
      const setting = shortcuts[key];

      if (!setting) return true;

      if (!modKey) {
        if (key === 'w' && !setting[0] && setting[1]) {
          this.emit('lookup:word', window.getSelection().toString());
        }
        else if (isMarkerKey && !setting[0] && setting[1]) {
          this.emit('pressed:marker-key', e, origKey);
        }
      } else {
        if (!setting[1]) return true;

        const shortcut = setting[0].split('-');
        const s1 = shortcut[0];
        const s2 = shortcut[1];

        if (!e[s1] || (s2 && !e[s2])) return true;

        if (key === 'w') this.emit('lookup:word', window.getSelection().toString());

        else if (isMarkerKey) {
          this.emit('pressed:marker-key', e, origKey);
        }
        else this.emit('pressed:hotkey', key)
      }
    });
  },
  onSelectionChange(e) {
    const selectionCollapsed = window.getSelection().isCollapsed;
    if (this.selectionCollapsed !== selectionCollapsed) {
      this.emit('changed:selection', !selectionCollapsed);
      this.selectionCollapsed = selectionCollapsed;
    }
  }
});
