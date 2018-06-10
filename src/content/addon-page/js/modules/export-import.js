import { _DOMMODULE } from './../../../utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('export'),
    events: {
      ENV: {
        'updated:settings': 'updateExportLinks',
        'updated:history': 'updateExportLinks',
        'toggled:sync': 'updateExportLinks',
        'synced:entry': 'updateExportLinks'
      },
      DOM: {
        click: {
          '.import-button': 'triggerFileInput'
        },
        change: {
          '.import-file': 'handleFile'
        },
        mousedown: {
          '.export-button': 'updateExportName'
        }
      }
    },

    autoinit() {
      this.updateExportLinks();
    },

    import: function(storeString, type) {
      var parsedString;

      try {
        parsedString = JSON.parse(storeString);
      } catch(e) {
        return this.displayFailure(browser.i18n.getMessage('error_file_parse'));
      }

      if (parsedString) {
        this.emit('import:storage', parsedString, type);
        this.displayFailure('');
      }
    },

    triggerFileInput: function(e, el) {
      document.getElementById('import--' + el.getAttribute('data-type')).click();
    },
    handleFile(e, el) {
      let reader = new FileReader(),
          file = el.files[0],
          size = file.size / 1000000,
          type = el.getAttribute('data-type'),
          mod = this;

      if (size > 50)
          return this.displayFailure(browser.i18n.getMessage('error_file_size'));

      if (type === 'sync' && size > 0.099)
          return this.displayFailure(browser.i18n.getMessage('error_file_size_sync'));

      if (file.name.split('.').pop() !== 'json')
          return this.displayFailure(browser.i18n.getMessage('error_file_format'));

      reader.onload = (function(file) {
        return function(e) {
          mod.import(e.target.result, type);
        };
      })(file);

      reader.readAsText(file);
    },
    displayFailure(reason) {
      document.getElementById('import-error').innerText = reason;
    },

    updateExportLinks() {
      const localDataLink = document.getElementById('export-local');
      const syncedDataLink = document.getElementById('export-synced');

      _STORE.get('local_storage').then(storage => {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      })
      .then(() => _STORE.get('synced_storage').then(storage => {
        syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }));
    },
    updateExportName(e, el) {
      el.parentNode.setAttribute('download',
        'Textmarker-data-' +
        el.getAttribute('data-type') + '-' +
        (new Date().toLocaleString().replace(/\D/g, '_')) +
        '.json'
      );
    }
  });
}
