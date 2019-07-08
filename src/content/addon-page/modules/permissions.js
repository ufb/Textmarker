import { _DOMMODULE } from './../../_shared/utils'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('permission-alert'),
    events: {
      DOM: {
        click: {
          '.permission': 'askPermission'
        }
      }
    },

    autoinit() {
      browser.permissions.contains({ permissions: ['webNavigation'] })
        .then(granted => {
          if (!granted) {
            this.el.classList.remove('u-display--none');
          }
        });
    },

    askPermission() {
      browser.permissions.request({ permissions: ['webNavigation'] }).then(granted => {
        if (granted) {
          this.emit('granted-permission:webNavigation');
          Array.from(document.getElementsByClassName('permission-alert'))
            .forEach(alert => alert.classList.add('u-display--none'));
        }
      });
    }
  });
}
