import './sass/index.scss'

import { _L10N } from './../_shared/utils'

_L10N();

Array.from(document.getElementsByTagName('button')).forEach(button => {
  button.addEventListener('click', e => {
    browser.runtime.sendMessage({
      ev: 'open:addon-page(am)',
      args: [e.target.getAttribute('data-id')]
    });
  }, false);
});
