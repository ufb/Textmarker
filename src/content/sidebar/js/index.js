import './../sass/main.scss'

import _ERRORTRACKER from './../../utils'
import { _MODULE } from './../../utils'
import { _L10N } from './../../utils'
import _PORT from './port'
import _STORE from './_store'
import './modules/markers'
import './modules/mark-actions'
import './modules/page-actions'
import './modules/links'

_L10N();

new _MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power'
    }
  },

  power(on) {
    const placeholder = document.getElementById('textmarker-sidebar--paused');
    const content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('none');
      content.classList.remove('none');
    } else {
      placeholder.classList.remove('none');
      content.classList.add('none');
    }
  },
  onStart() {
    _STORE.get('mode').then(mode => this.power(mode));
  }
})
