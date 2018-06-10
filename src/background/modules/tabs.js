import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        //'started:app': 'openInitPage',
        'open:addon-page': 'openAddonPage',
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
      logs: 'content/addon-page/addon-page.html#page=logs',
      data: 'content/addon-page/addon-page.html#page=data'
    },

    open(urls) {
      urls = typeof urls === 'string' ? [urls] : urls;
      let l = urls.length,
          securityWarning = false;
      while (l--) browser.tabs.create({ url: urls[l] }).catch(() => {
        if (!securityWarning) this.emit('failed:open-tab');
        securityWarning = true;
      });
    },
    openAddonPage(id) {
      this.open(this.urls[id]);
    },
    openInitPage(version, loadReason) {
      if (version && version < '3') this.openAddonPage('help');
      else if (loadReason && loadReason === 'install') this.openAddonPage('help');
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
