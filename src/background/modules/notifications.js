import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'saved:entry': 'onSavedEntry',
        'failed:save-entry': 'onSaveError',
        'failed:update-entry': 'onSaveError',
        'failed:save-entry-double-locked': 'onSaveLockedDoubleNameError',
        'failed:delete-entries': 'onDeleteError',
        'failed:open-tab': 'onOpenTabFailure',
        'failed:restoration': 'onFailedRestoration',
        'succeeded:restoration': 'onSuccessfulRestoration',
        'failed:pbm': 'onFailedPBM',
        'failed:import': 'onFailedImport',
        'error:import': 'onImportError',
        'imported:storage': 'onImportSuccess',
        'error': 'onError',
        'warn:mixed-entry-types': 'onMixedEntryTypes',
        'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries',
        'failed:inject-content-script': 'onScriptInjectionFailure',
        'failed:inject-stylesheet': 'onCSSInjectionFailure'
      }
    },

    notify(condition, message, type) {
      _STORAGE.get('settings').then(settings => {
        if (condition(settings)) {
          browser.notifications.create({
            type: 'basic',
            title: 'Textmarker: ' + browser.i18n.getMessage(type),
            message,
            iconUrl: browser.runtime.getURL('icons/tm48.png')
          });
        }
      });
    },

    onSavedEntry() {
      this.notify(
        settings => settings.history.saveNote,
        browser.i18n.getMessage('note_saved_entry'),
        'success'
      );
    },

    onFailedPBM() {
      this.notify(
        settings => settings.misc.pbmNote,
        browser.i18n.getMessage('note_pbm'),
        'error'
      );
    },

    onOpenTabFailure() {
      this.notify(
        settings => settings.misc.vipNote,
        browser.i18n.getMessage('note_url'),
        'error'
      );
    },

    onFailedImport(error1, error2) {
      const errMessage1 = browser.i18n.getMessage(error1);
      const errMessage2 = error2 ? '\n\n' + browser.i18n.getMessage(error2) : '';
      this.notify(
        settings => settings.misc.vipNote,
        browser.i18n.getMessage('note_import_failure', errMessage1 + errMessage2),
        'error'
      );
    },

    onImportError(error) {
      this.notify(
        settings => settings.misc.vipNote,
        browser.i18n.getMessage('note_import_warning', browser.i18n.getMessage(error)),
        'warning'
      );
    },

    onImportSuccess() {
      this.notify(
        settings => settings.misc.vipNote,
        browser.i18n.getMessage('note_import_success'),
        'success'
      );
    },

    onMixedEntryTypes() {
      this.notify(
        settings => settings.misc.failureNote,
        browser.i18n.getMessage('note_restoration_warning_1'),
        'warning'
      );
    },

    onMultipleUnlockedEntries() {
      this.notify(
        settings => settings.misc.failureNote,
        browser.i18n.getMessage('note_restoration_warning_2'),
        'warning'
      );
    },

    onSuccessfulRestoration() {
      this.notify(
        settings => settings.misc.successNote,
        browser.i18n.getMessage('note_restoration_success'),
        'success'
      );
    },

    onFailedRestoration(info) {
      let msg = browser.i18n.getMessage('note_restoration_failure');
      if (info && info.autoRetry) msg += browser.i18n.getMessage('auto_retry');

      this.notify(
        settings => settings.misc.failureNote,
        msg,
        'error'
      );
    },

    onSaveError(error) {
      this.notify(
        settings => settings.history.saveNote,
        browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error)),
        'error'
      );
    },

    onSaveLockedDoubleNameError(error, name) {
      this.notify(
        settings => settings.history.saveNote,
        browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error, name)),
        'error'
      );
    },

    onDeleteError(error) {
      this.notify(
        settings => settings.misc.errorNote,
        browser.i18n.getMessage('note_error', browser.i18n.getMessage(error)),
        'error'
      );
    },

    onScriptInjectionFailure(err) {
      let msg = browser.i18n.getMessage('js_injection_failure');
      if (err) msg += `\n\n${err}\n\n`;

      this.notify(
        settings => settings.misc.vipNote,
        msg,
        'error'
      );
    },

    onCSSInjectionFailure() {
      this.notify(
        settings => settings.misc.vipNote,
        browser.i18n.getMessage('css_injection_failure'),
        'error'
      );
    },

    onError(error) {
      this.notify(
        settings => settings.misc.errorNote,
        browser.i18n.getMessage('note_error', browser.i18n.getMessage(error)),
        'error'
      );
    }
  });
}
