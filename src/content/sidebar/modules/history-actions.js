import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('history-actions'),
  events: {
    ENV: {
      'started:app': 'toggleSave',
      'updated:settings': 'toggleSave',
      'toggled:sync-settings': 'toggleSave',
      'updated:entry-on-save': 'deactivateSave',
      'saved:entry': 'deactivateSave',
      'unsaved-changes': 'activateSave',
      'finished:restoration': 'activateRetry',
      'update:entry?': 'deactivateRetry',
      'stored:entry': 'updateImmut',
      'page-state': 'onPageState',
      'initially-stored:entry': 'updateImmut'
    },
    DOM: {
      click: {
        '#page-action--retry': 'retryRestoration',
        '#page-action--save': 'save',
        '.switch': 'toggleImmut'
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
  toggleImmut(e, el) {
    el = el.classList.contains('switch--immut') ? el : el.parentNode;
    el.classList.toggle('active');
    this.emit('sidebar:immut', el.classList.contains('active'), { tab: 'active' });
  },
  updateImmut(entry) {
    if (entry) {
      const meth = entry.immut ? 'add' : 'remove';
      document.getElementById('page-action--immut').classList[meth]('active');
      document.getElementById('switch-box').classList.remove('u-display--none');
    } else {
      document.getElementById('switch-box').classList.add('u-display--none');
    }
  },
  onPageState(state) {
    if (state.retryActive) this.activateRetry();
  }
});
