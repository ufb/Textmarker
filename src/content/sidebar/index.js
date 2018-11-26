import './sass/index.scss'

import _ERRORTRACKER from './../_shared/utils'
import { _MODULE } from './../_shared/utils'
import { _L10N } from './../_shared/utils'
import _PORT from './port'
import _STORE from './_store'

import './modules/tabs'
import './modules/header'
import './modules/meta-infos'
import './modules/tags'
import './modules/page-notes'
import './modules/markers'
import './modules/history-actions'
import './modules/mark-actions'
import './modules/page-actions'
import './modules/marks'
import './modules/links'

_L10N();

new _MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power',
      'saved:entry': 'toggle',
      'entry:found': 'toggle',
      'entry:found-for-tab': 'toggle'
    }
  },

  autoinit() {
    this.emit('opened:sidebar', { tab: 'active' });
  },

  power(on) {
    const placeholder = document.getElementById('textmarker-sidebar--paused');
    const content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('u-display--none');
      content.classList.remove('u-display--none');
    } else {
      placeholder.classList.remove('u-display--none');
      content.classList.add('u-display--none');
    }
  },
  onStart() {
    _STORE.get('mode').then(mode => this.power(mode));
  },
  toggle(entry) {
    const sidebar = document.getElementById('textmarker-sidebar');
    if (entry && (entry === 'locked' || entry.locked)) {
      sidebar.classList.add('textmarker-sidebar--locked');
    } else {
      sidebar.classList.remove('textmarker-sidebar--locked');
    }
  }
})
