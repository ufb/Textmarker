import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('history-actions'),
  events: {
    ENV: {
      'started:app': 'toggleSave',
      'updated:settings': 'toggleSave',
      'toggled:sync-settings': 'toggleSave',
      'updated:entry': 'deactivateSave',
      'saved:entry': 'deactivateSave',
      'unsaved-changes': 'activateSave',
      'failed:restoration': 'activateRetry',
      'update:entry?': 'deactivateRetry',
      'page-state': 'onPageState'
    },
    DOM: {
      click: {
        '#page-action--retry': 'retryRestoration',
        '#page-action--save': 'save'
      }
    }
  },

  retryBtnShown: false,
  saveBtn: document.getElementById('page-action--save'),
  retryBtn: document.getElementById('page-action--retry'),

  autoinit() {
    this.toggleSave();
  },

  save() {
    this.emit('sidebar:save-changes', { tab: 'active' });
  },
  retryRestoration() {
    this.emit('sidebar:retry-restoration', { tab: 'active' });
    this.deactivateRetry();
  },
  toggleSave() {
    _STORE.get('autosave').then(autosave => {
      const meth = autosave ? 'add' : 'remove';
      this.saveBtn.classList[meth]('u-display--none');
    });
  },
  activateSave(on = true) {
    if (on) this.saveBtn.removeAttribute('disabled');
    else this.saveBtn.setAttribute('disabled', true);
  },
  deactivateSave() {
    this.activateSave(false);
  },
  activateRetry() {
    if (!this.retryBtnShown) {
      this.retryBtn.classList.remove('u-display--none');
      this.retryBtnShown = true;
    }
  },
  deactivateRetry() {
    if (this.retryBtnShown) {
      this.retryBtn.classList.add('u-display--none');
      this.retryBtnShown = false;
    }
  },
  onPageState(state) {
    if (state.retryActive) this.activateRetry();
  }
});
