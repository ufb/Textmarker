import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('sync'),
    events: {
      ENV: {
        'failed:toggle-sync': 'undo'
      },
      DOM: {
        click: {
          '.switch': 'toggleSwitch'
        }
      }
    },

    autoinit() {
      document.getElementById('sync-switch--settings').classList.toggle('active', _STORE.area_settings === 'sync');
      document.getElementById('sync-switch--history').classList.toggle('active', _STORE.area_history === 'sync');
      document.getElementById('sync-switch--pagenotes').classList.toggle('active', _STORE.area_pagenotes === 'sync');
    },

    toggleSwitch(e, el) {
      el = el.classList.contains('switch--sync') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },

    undo(field) {
      document.getElementById('sync-switch--' + field).classList.toggle('active');
    }
  });
}
