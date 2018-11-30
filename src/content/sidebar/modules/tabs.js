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

  tabs: {},

  autoinit() {
    _STORE.get('settings').then(settings => {
      if (!settings.sb) return;
      const tabSettings = settings.sb.tabs;
      for (let tab in tabSettings) {
        this.tabs[tab] = document.getElementById('tab--' + tab);
        if (tabSettings[tab].unfolded) this.open(tab);
        else this.close(tab);
      }
    });
  },

  open(tab) {
    this.tabs[tab].classList.remove('tab--folded');
  },
  close(tab) {
    this.tabs[tab].classList.add('tab--folded');
  },
  toggle(e, el) {
    const id = el.getAttribute('data-target');
    const tab = id.split('--').pop();
    const tabEl = document.getElementById(id);
    tabEl.classList.toggle('tab--folded');
    this.emit('toggled:sidebar-tab', tab, !tabEl.classList.contains('tab--folded'));
  },
  showEntrySpecificTabs() {
    Array.from(document.getElementsByClassName('tab--entry'))
      .forEach(tab => tab.classList.remove('u-display--none'));
  }
});
