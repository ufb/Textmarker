import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('textmarker-sidebar'),
  events: {
    ENV: {
      'stored:entry': 'showEntrySpecificTabs'
    },
    DOM: {
      click: {
        '.tab__name': 'toggle',
        '.tab__toggle': 'toggle'
      }
    }
  },

  toggle(e, el) {
    document.getElementById(el.getAttribute('data-target')).classList.toggle('tab--folded');
  },
  showEntrySpecificTabs() {
    Array.from(document.getElementsByClassName('tab--entry'))
      .forEach(tab => tab.classList.remove('u-display--none'));
  }
});
