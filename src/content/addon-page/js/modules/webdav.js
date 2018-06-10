import { _DOMMODULE } from './../../../utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('webdav'),
    events: {
      ENV: {

      },
      DOM: {
        click: {
          '.submit': 'submit',
          '#test-webdav-set': '_set',
          '#test-webdav-get': '_get'
        },
        change: {
          '.sync-opt': 'changeSyncType'
        },
        keyup: {
          '.inp-db': 'setDB',
          '.inp-name': 'setName',
          '.inp-pw': 'setPW'
        }
      }
    },
    type: 'default',
    database: '',
    username: '',
    password: '',
_set() {
  this.emit('set-webdav');

},
_get() {
this.emit('get-webdav');
},
    autoinit() {

    },
    setDB(e, el) {
      this.database = el.value;
    },
    setName(e, el) {
      this.username = el.value;
    },
    setPW(e, el) {
      this.password = el.value;
    },
    changeSyncType(e, el) {
      const type = this.type = el.getAttribute('data-type');
      this.emit('change:sync-type', type);
    },
    submit() {
      this.emit('change:webdav-credentials', this.database, this.username, this.password);
    }
  });
}
