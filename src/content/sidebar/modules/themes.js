import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--themes'),
  events: {
    DOM: {
      change: {
        '.theme-opt': 'onChange'
      }
    }
  },

  theme: 'default',

  autoinit() {
    _STORE.get('settings').then(settings => {
      const theme = settings && settings.sb && settings.sb.theme ? settings.sb.theme : 'default';
      document.getElementById(`theme--${theme}`).checked = true;
      this.update(theme);
    });
  },

  onChange(e, el) {
    const theme = el.getAttribute('data-value');
    this.emit('changed:sidebar-theme', theme);
    this.update(theme);
  },
  update(theme) {
    this.theme = theme;
    document.getElementById('textmarker-sidebar').className = `textmarker-sidebar--${theme}`;
  }
});
