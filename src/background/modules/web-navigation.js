import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    autoinit() {
      browser.permissions.contains({ permissions: ['webNavigation'] }).then(granted => {
        if (granted) {
          browser.webNavigation.onDOMContentLoaded.addListener(infos => this.emit('dom:loaded', infos));
        } else {
          this.emit('missing-permission:webNavigation');
        }
      });
    }
  });
}
