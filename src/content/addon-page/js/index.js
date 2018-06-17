import './../sass/main.scss'

import _ERRORTRACKER from './../../utils'
import { _L10N } from './../../utils'
import _NAV from './modules/nav'
import _TOGGLER from './modules/toggler'
import './port'
import './_store'
import './bootstrap'

_L10N();

/* auto-insert current version number */
document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */
const subnavs = document.getElementsByClassName('subnav');
let n = subnavs.length;

while(n--) new _NAV(subnavs[n]);
/* end: configure navs */

/* configure toggle elements */
let toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while(t--) new _TOGGLER(toggleButtons[t]);
/* end: configure toggle elements */
