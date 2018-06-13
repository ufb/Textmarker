import _STORAGE from './../storage'
import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'view:entry': 'openEntryDetailPage'
      }
    },

    openEntryDetailPage(name) {
      const popupURL = browser.extension.getURL('content/detail-view/detail-view.html');

      browser.windows.getCurrent().then(currentWindow => {

        browser.windows.create({
          url: popupURL + '#' + name,
          type: 'panel',
          height: currentWindow.height - 22,
          width: Math.min(currentWindow.width, 980),
          incognito: currentWindow.incognito
        });
      });
    }
  });
}
