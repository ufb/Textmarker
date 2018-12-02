import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {

  const DOC = window.document;

  return new _DOMMODULE({
		events: {
      ENV: {
        'updated:mark-method-settings': 'update',
        'changed:selection': 'onSelectionChange',
        'sidebar:selected-marker': 'setMarker'
      }
		},

    handler: null,
    marker: 'm',

    autoinit() {
      this.update();
    },

    update() {
      _STORE.get('settings').then(settings => {
        this.active = settings.misc.markmethod === 'auto';
      });
    },
    setMarker(key) {
      this.marker = key;
    },
    onSelectionChange(selected) {
      if (this.active) {
        if (selected && !this.listening) {
          this.startListening();
        }
        else if (!selected && this.listening) {
          this.stopListening();
        }
      }
      else if (this.listening) {
        this.stopListening();
      }
    },
    startListening() {
      if (!this.listening) {
        const handler = this.handler = this.onMouseup.bind(this);
        DOC.body.addEventListener('mouseup', handler, false);
        this.listening = true;
      }
    },
    stopListening() {
      if (this.listening) {
        DOC.body.removeEventListener('mouseup', this.handler, false);
        this.listening = false;
      }
    },
    onMouseup() {
      this.stopListening();
      const selection = window.getSelection().toString();
      if (selection) this.emit('selection-end', this.marker);
    }
	});
}
