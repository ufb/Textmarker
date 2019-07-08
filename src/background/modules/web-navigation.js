import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    events: {
      ENV: {
        'granted-permission:webNavigation': 'addListener'
      }
    },
    autoinit() {
      const permission = { permissions: ['webNavigation'] };

      browser.permissions.contains(permission).then(granted => {
        if (granted) {
          this.addListener();
        } else {
          this.emit('missing-permission:webNavigation');
        }
      });
    },
    addListener() {
      browser.webNavigation.onDOMContentLoaded.addListener(infos => this.emit('dom:loaded', infos));
    }
  });
}
