import _STORAGE from './../storage'
import { _MODULE } from './../utils'
import _LOG_KEYS from './../../data/log-keys'

new _MODULE({
  events: {
    ENV: {
      'error': 'log',
      'warning': 'log',
      'failed:save-entry': 'log',
      'failed:update-entry': 'log',
      'failed:delete-entry': 'log',
      'failed:restoration': 'onFailedRestoration',
      'warn:mixed-entry-types': 'onMixedEntryTypes',
      'warn:multiple-unlocked-entries': 'onMultipleUnlockedEntries',
      'failed:pbm': 'onFailedPBM',
      'failed:open-tab': 'onOpenTabFailure',
      'error:import': 'log',
      'error:browser-console': 'log',
      'clear:logs': 'clear',
      'failed:restore-range': 'log',
      'failed:inject-content-script': 'onScriptInjectionFailure',
      'failed:inject-stylesheet': 'onCSSInjectionFailure'
    }
  },

  log(error, info) {
    let log, msg;
    if (error.time) {
      log = [error.time, error.message + ' [' + error.location + ']'];
    } else {
      log = [(new Date().getTime()), _LOG_KEYS[error] || error];
      if (info && info.report && typeof info.report === 'string') {
        log.push(info.report);
        if (info.attempt) log.push(info.attempt);
      }
    }
    _STORAGE.set('log', log).then(() => this.emit('updated:logs logged:error', log));
  },
  clear() {
    _STORAGE.set('log', { clear: true }).then(() => this.emit('updated:logs'));
  },
  onMixedEntryTypes() {
    this.log('note_restoration_warning_1');
  },
  onMultipleUnlockedEntries() {
    this.log('note_restoration_warning_2');
  },
  onFailedRestoration(info) {
    this.log('note_restoration_failure', info);
  },
  onOpenTabFailure() {
    this.log('note_url');
  },
  onFailedPBM() {
    this.log('note_pbm');
  },
  onScriptInjectionFailure() {
    this.log('js_injection_failure');
  },
  onCSSInjectionFailure() {
    this.log('css_injection_failure');
  }
});
