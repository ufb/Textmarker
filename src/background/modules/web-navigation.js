import { _MODULE } from './../utils'

export default function() {
  return new _MODULE({
    autoinit() {
      browser.webNavigation.onDOMContentLoaded.addListener(infos => this.emit('dom:loaded', infos));
    }
  });
}
