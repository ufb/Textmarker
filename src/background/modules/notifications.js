import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'saved:entry': 'onSavedEntry',
        'failed:save-entry': 'onSaveError',
        'failed:update-entry': 'onSaveError',
        'failed:delete-entries': 'onDeleteError',
        'failed:open-tab': 'onOpenTabFailure',
        'updated:entry': 'onUpdatedEntry',
        'failed:restoration': 'onFailedRestoration',
        'succeeded:restoration': 'onSuccessfulRestoration',
        'canceled:save-after-canceled-restoration': 'onCanceledSave',
        'failed:pbm': 'onFailedPBM',
        'failed:import': 'onFailedImport',
        'error:import': 'onImportError',
        'imported:storage': 'onImportSuccess',
        'error': 'onError',
        'warn:mixed-entry-types': 'onMixedEntryTypes',
        'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries'
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
        settings => true,
        browser.i18n.getMessage('note_url'),
        'error'
      );
    },

    onFailedImport(error1, error2) {
      const errMessage1 = browser.i18n.getMessage(error1);
      const errMessage2 = error2 ? '\n\n' + browser.i18n.getMessage(error2) : '';
      this.notify(
        settings => true,
        browser.i18n.getMessage('note_import_failure', errMessage1 + errMessage2),
        'error'
      );
    },

    onImportError(error) {
      this.notify(
        settings => true,
        browser.i18n.getMessage('note_import_warning', browser.i18n.getMessage(error)),
        'warning'
      );
    },

    onImportSuccess() {
      this.notify(
        settings => true,
        browser.i18n.getMessage('note_import_success'),
        'success'
      );
    },

    onUpdatedEntry() {
      this.notify(
        settings => settings.misc.changedNote,
        browser.i18n.getMessage('note_updated_entry'),
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

    onFailedRestoration() {
      this.notify(
        settings => settings.misc.failureNote,
        browser.i18n.getMessage('note_restoration_failure'),
        'error'
      );
    },

    onCanceledSave() {
      this.notify(
        settings => settings.history.saveNote,
        browser.i18n.getMessage('canceled_save_warning'),
        'warning'
      );
    },

    onSaveError(error) {
      this.notify(
        settings => settings.history.saveNote,
        browser.i18n.getMessage('note_save_failure', browser.i18n.getMessage(error)),
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

    onError(error) {
      this.notify(
        settings => settings.misc.errorNote,
        browser.i18n.getMessage('note_error', browser.i18n.getMessage(error)),
        'error'
      );
    }
  });
}
