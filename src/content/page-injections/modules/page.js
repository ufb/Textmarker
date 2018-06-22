import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'deleted:entry': 'unset',
        'saved:entry': 'update'
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

    url: '',
    active: true,
    set: false,
    initialized: false,

    autoinit() {

      //_READER = this.readerMode = this.isReaderMode();
      this.setup();
    },

    power(on) {
      if (on) this.addListeners();

      else this.removeListeners();

      this.active = on;
      this.setup();
    },
    setup() {
      _STORE.get('mode').then(active => {
        this.active = active;

        if (this.set || !active) return false;

        let pdf = _STORE.pdf = this.isPdf();

        if (!pdf && window.document.readyState !== 'complete')
          return this.addListener('load', () => this.setup(), window);

        _STORE.iframe = this.isIFrame();

        this.setURL();
        this.checkURL();
        this.removeListeners();

        if (active) this.addListeners();

        this.set = true;
      });
    },
    setURL() {
      const url = window.document.URL,
            hash = window.document.location.hash,
            hashIdx = url.indexOf(hash) || url.length;

      this.url = url.substr(0, hashIdx);
    },
    isPdf() {
      return window.location.pathname.split('.').pop().substr(0, 3) === 'pdf';
    },
    isIFrame() {
      return window !== window.parent.window;
    },
    /*isReaderMode() {
      return this.url.split('?')[0] === 'about:reader';
    },*/
    isEditable(el) {
      const name = el.tagName;

      return (name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true');
    },
    delegate(e) {
      const key = e.key.toLowerCase(),
          modKey = (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey),
          functionKeys = ['b', 's', 'y', 'z'],
          defaultMarkers = ['m', '2', '3'];

      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;

      if (this.isEditable(e.target)) return true;

      _STORE.get('settings').then(settings => {

        if (!settings) return true;

        if (!modKey) {
          if (key === 'w' && !settings.shortcuts.w[0] && settings.shortcuts.w[1]) this.lookup();
          else if (
            settings.markers[key] &&
            (
              !defaultMarkers.includes(key) ||
              (
                !settings.shortcuts[key] ||
                (
                  !settings.shortcuts[key][0] &&
                  settings.shortcuts[key][1]
                )
              )
            )
          ) {
            this.emit('pressed:marker-key', e, key);
          }
        } else {
          let setting = settings.shortcuts[key];

          if (!setting || !setting[1]) return true;

          let shortcut = setting[0].split('-'),
              s1, s2;

          s1 = shortcut[0];
          s2 = shortcut[1];

          if (!e[s1] || (s2 && !e[s2])) return true;

          if (key === 'w') this.lookup();

          else if (defaultMarkers.includes(key) && settings.markers[key]) {
            this.emit('pressed:marker-key', e, key);
          }
          else this.emit('pressed:hotkey', key)
        }
      });
    },
    lookup() {
      const selectedText = window.getSelection().toString();

      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL() {
      this.request('check:url', this.url)
        .then(entry => { if (entry) this.onUrlFound(entry); });
    },
    unset(name) {
      if (_STORE.name && _STORE.name === name) {
        _STORE.name = undefined;
        _STORE.entry = null;
        this.emit('unset:entry');
      }
    },
    update(entry, force) {
      if (force || entry.url.split('#')[0] === this.url) {
        _STORE.name = entry.name;
        _STORE.isNew = false;
        _STORE.entry = entry;
        this.emit('set:entry');
      }
    },
    onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound(entry) {
      this.update(entry, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;
        /*if (_READER)
          window.setTimeout(() => this.emit('restore:marks', name), 500);*/
        //else
          this.emit('restore:marks', entry);
      }
    },
    onSelectionChange() {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    }
  });
}
