import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'toggled:addon': 'toggleTabEventHandlers',
        'started:app': 'openInitPage',
        'open:addon-page(sb)': 'openAddonPage',
        'open:addon-page(tbb)': 'openAddonPage',
        'open:addon-page(am)': 'openAddonPage',
        'lookup:word': 'openSearch',
        'open:entries': 'open'
      }
    },
    urls: {
      news: 'content/addon-page/addon-page.html#page=news',
      settings: 'content/addon-page/addon-page.html#page=settings',
      history: 'content/addon-page/addon-page.html#page=history',
      info: 'content/addon-page/addon-page.html#page=new',
      help: 'content/addon-page/addon-page.html#page=manual',
      contact: 'content/addon-page/addon-page.html#page=contact',
      troubleshooting: 'content/addon-page/addon-page.html#page=troubleshooting',
      logs: 'content/addon-page/addon-page.html#page=logs',
      export: 'content/addon-page/addon-page.html#page=export',
      sync: 'content/addon-page/addon-page.html#page=sync'
    },
    tabEventHandlers: {
      onActivated: null,
      onUpdated: null
    },

    autoinit() {
      _STORAGE.get('mode').then(mode => this.toggleTabEventHandlers(mode));
    },

    addTabEventHandlers() {
      if (!this.tabEventHandlers.onActivated) {
        const onActivated = this.tabEventHandlers.onActivated = this.onActivated.bind(this);
        browser.tabs.onActivated.addListener(onActivated);
      }

      if (!this.tabEventHandlers.onUpdated) {
        const onUpdated = this.tabEventHandlers.onUpdated = this.onUpdated.bind(this);
        browser.tabs.onUpdated.addListener(onUpdated, { properties: ['status'] });
      }
    },
    removeTabEventHandlers() {
      ['onActivated', 'onUpdated'].forEach(ev => {
        if (this.tabEventHandlers[ev]) {
          browser.tabs[ev].removeListener(this.tabEventHandlers[ev]);
        }
      });
      this.tabEventHandlers = {};
    },
    toggleTabEventHandlers(on) {
      if (on) this.addTabEventHandlers();
      else this.removeTabEventHandlers();
    },
    onActivated(tab) {
      this.emit('activated:tab', tab.tabId, (tab.url || ''));
    },
    onUpdated(tabId, changed) {
      if (changed.url) {
        this.emit('changed:url', tabId, changed);
      }
      else if (changed.status && changed.status === 'complete') {
        this.emit('completed:tab', tabId);
      }
    },

    open(urls, names) {
      urls = typeof urls === 'string' ? [urls] : urls;
      names = typeof names === 'string' ? [names] : names;
      let l = urls.length,
          securityWarning = false,
          url;
      while (l--) {
        (function(self, l) {
          url = urls[l];
          browser.tabs.create({ url: urls[l] })
            .catch(() => {
              if (!securityWarning) self.emit('failed:open-tab');
              securityWarning = true;
            })
            .then(() => {
              if (names) self.emit('opened:entry', { url: url, name: names[l] });
            });
        })(this, l);
      }
    },
    openAddonPage(id) {
      this.open(this.urls[id]);
    },
    openInitPage(version, loadReason) {
      if (loadReason) {
        if (loadReason === 'install') this.openAddonPage('help');
        else if (loadReason === 'update') this.openAddonPage('news');
      }
    },
    openSearch(word) {
      _STORAGE.get('settings').then(settings => {
        let custom = settings.misc.customSearch, url;
        if (custom) url = 'https://' + custom[0] + word + custom[1];
        else url = 'https://' + browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/' + word;
        this.open(url);
      });
    }
  });
}
