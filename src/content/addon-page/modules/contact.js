import { _MODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit() {
      this.setLogLink();
    },
    setLogLink() {
      const logLink = document.getElementById('log-mail');

      _STORE.get('logs').then(logs => {
        let l = logs ? logs.length : 0,
            href =
              'mailto:undflybir@gmx.de?subject=Textmarker' +
              encodeURIComponent(' : Error Logs') +
              '&body='+
              encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log;

        while(l--) {
          log = logs[l];
          href += log[1] + (log[2] ? ' (' + log[2] + ')' : '') + ' - ' + encodeURIComponent((new Date(log[0]).toUTCString()) + '\n');
        }
        logLink.href = href;
      });
    }
  });
}
