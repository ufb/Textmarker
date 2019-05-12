/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/sidebar/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/_shared/utils.js":
/*!**********************************!*\
  !*** ./content/_shared/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "_COPY", {
  enumerable: true,
  get: function get() {
    return _copy._COPY;
  }
});
Object.defineProperty(exports, "_GET_ACTIVE_TAB", {
  enumerable: true,
  get: function get() {
    return _getActiveTab._GET_ACTIVE_TAB;
  }
});
Object.defineProperty(exports, "_EXTEND", {
  enumerable: true,
  get: function get() {
    return _extend.default;
  }
});
Object.defineProperty(exports, "_MODULE", {
  enumerable: true,
  get: function get() {
    return _module._MODULE;
  }
});
Object.defineProperty(exports, "_DOMMODULE", {
  enumerable: true,
  get: function get() {
    return _dommodule._DOMMODULE;
  }
});
Object.defineProperty(exports, "_PORT", {
  enumerable: true,
  get: function get() {
    return _port._PORT;
  }
});
Object.defineProperty(exports, "_HASHLESS", {
  enumerable: true,
  get: function get() {
    return _hashless._HASHLESS;
  }
});
Object.defineProperty(exports, "_L10N", {
  enumerable: true,
  get: function get() {
    return _l10n.default;
  }
});
Object.defineProperty(exports, "_ERRORTRACKER", {
  enumerable: true,
  get: function get() {
    return _errorTracker.default;
  }
});

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = _interopRequireDefault(__webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js"));

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = _interopRequireDefault(__webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js"));

var _errorTracker = _interopRequireDefault(__webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/sidebar/_store.js":
/*!***********************************!*\
  !*** ./content/sidebar/_store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'entry:deleted-for-tab': 'resume'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_pagenotes: 'sync',
  entry: null,
  locked: false,
  updateEntry: function updateEntry(entry) {
    if (entry) {
      var isArr = Array.isArray(entry);
      var currentEntry = !!this.entry;
      this.locked = this.locked || isArr || entry.locked;

      if (!this.locked || isArr) {
        this.entry = entry;
      } else if (this.locked && !isArr) {
        if (this.entry && Array.isArray(this.entry)) this.entry.push(entry);else this.entry = [entry];
      }

      if (currentEntry) this.emit('updated:stored-entry', this.entry);else this.emit('stored:entry', this.entry);
    }
  },
  updateEntryOnFound: function updateEntryOnFound(entry) {
    if (entry) {
      this.updateEntry(entry);

      if (!Array.isArray(entry)) {
        this.emit('initially-stored:entry', entry);
      }
    }
  },
  resume: function resume() {
    this.entry = null;
    this.locked = false;
    this.emit('removed:entry');
  },
  setAreas: function setAreas() {
    var _this = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this.area_history = storage.sync.history ? 'sync' : 'local';
        _this.area_pagenotes = storage.sync.pagenotes ? 'sync' : 'local';
      }
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    if (this.initializing) {
      return new Promise(function (r) {
        return window.setTimeout(function () {
          return r(_this2.get(field));
        }, 10);
      });
    }

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initializing = true;
      this.initialized = true;
      return this.setAreas().then(function () {
        _this2.initializing = false;
        return _this2['_get_' + field]();
      });
    }

    return this['_get_' + field]();
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
    });
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_pagenotes: function _get_pagenotes() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.pagenotes || null;
    });
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/sidebar/index.js":
/*!**********************************!*\
  !*** ./content/sidebar/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/sidebar/sass/index.scss");

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js"));

var _port = _interopRequireDefault(__webpack_require__(/*! ./port */ "./content/sidebar/port.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./_store */ "./content/sidebar/_store.js"));

__webpack_require__(/*! ./modules/tabs */ "./content/sidebar/modules/tabs.js");

__webpack_require__(/*! ./modules/header */ "./content/sidebar/modules/header.js");

__webpack_require__(/*! ./modules/meta-infos */ "./content/sidebar/modules/meta-infos.js");

__webpack_require__(/*! ./modules/tags */ "./content/sidebar/modules/tags.js");

__webpack_require__(/*! ./modules/page-notes */ "./content/sidebar/modules/page-notes.js");

__webpack_require__(/*! ./modules/markers */ "./content/sidebar/modules/markers.js");

__webpack_require__(/*! ./modules/history-actions */ "./content/sidebar/modules/history-actions.js");

__webpack_require__(/*! ./modules/mark-actions */ "./content/sidebar/modules/mark-actions.js");

__webpack_require__(/*! ./modules/page-actions */ "./content/sidebar/modules/page-actions.js");

__webpack_require__(/*! ./modules/marks */ "./content/sidebar/modules/marks.js");

__webpack_require__(/*! ./modules/links */ "./content/sidebar/modules/links.js");

__webpack_require__(/*! ./modules/themes */ "./content/sidebar/modules/themes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils._L10N)();
new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'onStart',
      'toggled:addon': 'power',
      'stored:entry': 'toggle',
      'updated:stored-entry': 'toggle',
      'initially-stored:entry': 'toggle'
    }
  },
  autoinit: function autoinit() {
    this.emit('opened:sidebar', {
      tab: 'active'
    });
  },
  power: function power(on) {
    var placeholder = document.getElementById('textmarker-sidebar--paused');
    var content = document.getElementById('textmarker-sidebar');

    if (on) {
      placeholder.classList.add('u-display--none');
      content.classList.remove('u-display--none');
    } else {
      placeholder.classList.remove('u-display--none');
      content.classList.add('u-display--none');
    }
  },
  onStart: function onStart() {
    var _this = this;

    _store.default.get('mode').then(function (mode) {
      return _this.power(mode);
    });
  },
  toggle: function toggle(entry) {
    var sidebar = document.getElementById('textmarker-sidebar');

    if (entry && _store.default.locked) {
      sidebar.classList.add('textmarker-sidebar--locked');
    } else {
      sidebar.classList.remove('textmarker-sidebar--locked');
    }
  }
});

/***/ }),

/***/ "./content/sidebar/modules/header.js":
/*!*******************************************!*\
  !*** ./content/sidebar/modules/header.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('header'),
  events: {
    ENV: {
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    }
  },
  render: function render(entry) {
    var header = this.el;
    if (!entry) header.classList.add('u-display--none');else if (Array.isArray(entry)) return;
    header.classList.remove('u-display--none');
    this.updateName(entry.name);
  },
  updateName: function updateName(name) {
    var el = this.el.getElementsByClassName('header__name')[0];
    el.innerText = name;
    el.title = name;
  }
});

/***/ }),

/***/ "./content/sidebar/modules/history-actions.js":
/*!****************************************************!*\
  !*** ./content/sidebar/modules/history-actions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('history-actions'),
  events: {
    ENV: {
      'started:app': 'toggleSave',
      'updated:settings': 'toggleSave',
      'toggled:sync-settings': 'toggleSave',
      'updated:entry-on-save': 'deactivateSave',
      'saved:entry': 'deactivateSave',
      'unsaved-changes': 'activateSave',
      'finished:restoration': 'activateRetry',
      'update:entry?': 'deactivateRetry',
      'stored:entry': 'updateImmut',
      'page-state': 'onPageState',
      'initially-stored:entry': 'updateImmut'
    },
    DOM: {
      click: {
        '#page-action--retry': 'retryRestoration',
        '#page-action--save': 'save',
        '.switch': 'toggleImmut'
      }
    }
  },
  retryBtnShown: false,
  saveBtn: document.getElementById('page-action--save'),
  retryBtn: document.getElementById('page-action--retry'),
  autoinit: function autoinit() {
    this.toggleSave();
  },
  save: function save() {
    this.emit('sidebar:save-changes', {
      tab: 'active'
    });
  },
  retryRestoration: function retryRestoration() {
    this.emit('sidebar:retry-restoration', {
      tab: 'active'
    });
    this.deactivateRetry();
  },
  toggleSave: function toggleSave() {
    var _this = this;

    _store.default.get('autosave').then(function (autosave) {
      var meth = autosave ? 'add' : 'remove';

      _this.saveBtn.classList[meth]('u-display--none');
    });
  },
  activateSave: function activateSave() {
    var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (on) this.saveBtn.removeAttribute('disabled');else this.saveBtn.setAttribute('disabled', true);
  },
  deactivateSave: function deactivateSave() {
    this.activateSave(false);
  },
  activateRetry: function activateRetry() {
    if (!this.retryBtnShown) {
      this.retryBtn.classList.remove('u-display--none');
      this.retryBtnShown = true;
    }
  },
  deactivateRetry: function deactivateRetry() {
    if (this.retryBtnShown) {
      this.retryBtn.classList.add('u-display--none');
      this.retryBtnShown = false;
    }
  },
  toggleImmut: function toggleImmut(e, el) {
    el = el.classList.contains('switch--immut') ? el : el.parentNode;
    el.classList.toggle('active');
    this.emit('sidebar:immut', el.classList.contains('active'), {
      tab: 'active'
    });
  },
  updateImmut: function updateImmut(entry) {
    if (entry) {
      var meth = entry.immut ? 'add' : 'remove';
      document.getElementById('page-action--immut').classList[meth]('active');
      document.getElementById('switch-box').classList.remove('u-display--none');
    } else {
      document.getElementById('switch-box').classList.add('u-display--none');
    }
  },
  onPageState: function onPageState(state) {
    if (state.retryActive) this.activateRetry();
  }
});

/***/ }),

/***/ "./content/sidebar/modules/links.js":
/*!******************************************!*\
  !*** ./content/sidebar/modules/links.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--links'),
  events: {
    DOM: {
      click: {
        '.link': 'link',
        '.link__icon': 'link',
        '.link__text': 'link'
      }
    }
  },
  link: function link(e, el) {
    el = el.classList.contains('link') ? el : el.parentNode;
    this.emit('open:addon-page(sb)', el.getAttribute('data-id'));
  }
});

/***/ }),

/***/ "./content/sidebar/modules/mark-actions.js":
/*!*************************************************!*\
  !*** ./content/sidebar/modules/mark-actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--actions'),
  events: {
    ENV: {
      'clicked:mark': 'activate',
      'activated:mark': 'activate'
    },
    DOM: {
      click: {
        '.action-button--mark': 'markAction'
      }
    }
  },
  buttons: [],
  autoinit: function autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction: function markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
      tab: 'active'
    });
  },
  activate: function activate(markInfos) {
    this.buttons.forEach(function (btn) {
      var type = btn.getAttribute('data-action');

      if (type === 'delete-highlight' || typeof markInfos[type] === 'boolean' && !markInfos[type] || type === 'delete-bookmark' && markInfos.bookmark) {
        btn.removeAttribute('disabled');
        btn.parentNode.classList.remove('disabled');
      }
    });
  },
  deactivate: function deactivate() {
    this.buttons.forEach(function (btn) {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/markers.js":
/*!********************************************!*\
  !*** ./content/sidebar/modules/markers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

new _utils._DOMMODULE({
  el: document.getElementById('tab--markers'),
  events: {
    ENV: {
      'started:app': 'render',
      'updated:settings': 'render',
      'toggled:sync-settings': 'render',
      'changed:selection': 'toggleMarkerButtons',
      'page-state': 'onPageState'
    },
    DOM: {
      change: {
        '.marker__color': 'change',
        '.marker__cb': 'select'
      },
      click: {
        '.marker__apply': 'applyColor'
      }
    }
  },
  automarkEnabled: false,
  autoinit: function autoinit() {
    this.render();
  },
  render: function render() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && (!storage.sync || storage.sync.settings)) {
        _this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
        return storage.settings.markers;
      }

      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.settings && storage.sync && !storage.sync.settings) {
          _this.automarkEnabled = storage.settings.misc.markmethod === 'auto';
          return storage.settings.markers;
        }

        return null;
      });
    }).then(function (markers) {
      if (!markers) return _this;
      var leftContainer = document.getElementById('markers-container--left');
      var rightContainer = document.getElementById('markers-container--right');
      var fragRight = document.createDocumentFragment();
      var fragLeft = document.createDocumentFragment();
      var s = Math.ceil(Object.keys(markers).length / 2);
      var count = 0,
          m,
          box,
          input,
          exampleText,
          button,
          color,
          cbBox,
          cb,
          cbLabel,
          cbSpan;
      leftContainer.innerText = '';
      rightContainer.innerText = '';

      for (m in markers) {
        count++;
        box = document.createElement('div');
        input = document.createElement('input');
        exampleText = document.createElement('label');
        button = document.createElement('button');
        cbBox = document.createElement('div');
        cb = document.createElement('input');
        cbLabel = document.createElement('label');
        cbSpan = document.createElement('span');
        color = _this.extractBgColor(markers[m].style);
        box.className = 'marker u-cf';
        input.className = 'marker__color';
        input.id = 'marker-' + m;
        input.name = m;
        input.type = 'color';
        input.value = color;
        exampleText.className = 'marker__text';
        exampleText.setAttribute('style', markers[m].style);
        exampleText.setAttribute('for', 'marker-' + m);
        button.className = 'marker__apply';
        button.setAttribute('disabled', true);
        button.setAttribute('data-key', m);
        cbBox.className = 'marker__cb-box';
        cb.className = 'marker__cb';
        cb.setAttribute('data-key', m);
        cb.type = 'radio';
        cb.id = 'marker__cb--' + m;
        cb.name = 'marker-cb';
        cbLabel.className = 'fake-rb';
        cbLabel.setAttribute('for', 'marker__cb--' + m);
        cbSpan.textContent = String.fromCharCode(0x229a);
        cbLabel.appendChild(cbSpan);
        cbBox.appendChild(cb);
        cbBox.appendChild(cbLabel);
        box.appendChild(button);
        box.appendChild(cbBox);
        box.appendChild(input);
        box.appendChild(exampleText);

        if (count > 3 && count > s) {
          fragLeft.appendChild(box);
        } else {
          fragRight.appendChild(box);
        }

        m = m.toUpperCase();
        m = m === 'ENTER' ? String.fromCharCode(0x21B5) : m;
        exampleText.innerText = m;
        if (!color) input.setAttribute('disabled', true);
      }

      rightContainer.appendChild(fragRight);
      leftContainer.appendChild(fragLeft);

      if (_this.automarkEnabled) {
        _this.el.classList.add('auto');

        document.getElementById('marker__cb--m').checked = true;
      } else {
        _this.el.classList.remove('auto');
      }
    });
  },
  extractBgColor: function extractBgColor(styles) {
    var split = styles.split(';'),
        l = split.length,
        color = '',
        i = 0,
        style;

    for (; i < l; i++) {
      style = split[i];

      if (style.includes('background-color')) {
        color = style.split(':')[1];
        break;
      }
    }

    return color;
  },
  change: function change(e, el) {
    this.emit('change:bg-setting', el.name, el.value);
  },
  select: function select(e, el) {
    this.emit('sidebar:selected-marker', el.getAttribute('data-key'), {
      tab: 'active'
    });
  },
  applyColor: function applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    this.emit('sidebar:highlight', el.getAttribute('data-key'), {
      tab: 'active'
    });
  },
  toggleMarkerButtons: function toggleMarkerButtons(show) {
    if (this.automarkEnabled) return;
    var meth = show ? 'removeAttribute' : 'setAttribute';
    Array.from(document.getElementsByClassName('marker__apply')).forEach(function (btn) {
      return btn[meth]('disabled', true);
    });
  },
  onPageState: function onPageState(state) {
    this.toggleMarkerButtons(state.selection);
  }
});

/***/ }),

/***/ "./content/sidebar/modules/marks.js":
/*!******************************************!*\
  !*** ./content/sidebar/modules/marks.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

var _globalSettings = _interopRequireDefault(__webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--marks'),
  events: {
    ENV: {
      'entry:ordered-marks': 'setMarkIDs',
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    },
    DOM: {
      click: {
        '.mark__text': 'activate',
        '.mark__note-btn': 'toggleNote',
        '.action-button--nav': 'nav'
      },
      change: {
        '#fold-marks': 'foldList'
      }
    }
  },
  marks: [],
  markIDs: null,
  length: 0,
  current: -1,
  setFilters: false,
  toggleMap: {
    '1': [false, false],
    '2': [true, false],
    '3': [false, true],
    '4': [true, true]
  },
  render: function render() {
    var entry = this.entry = _store.default.entry;

    if (entry) {
      this.setMarks();
      if (!this.setFilters) this.renderSVGFilters();
      this.renderList();
    }
  },
  setMarks: function setMarks() {
    var entry = this.entry;
    var marks = [];

    if (Array.isArray(entry)) {
      entry.forEach(function (e) {
        return marks = marks.concat(e.marks);
      });
    } else {
      marks = entry.marks;
    }

    var markIDs = this.markIDs; //this.length = marks.length;
    //this.marks = markIDs ? marks.sort((m1, m2) => markIDs.indexOf(m1.id) < markIDs.indexOf(m2.id)) : marks;

    this.marks = markIDs ? markIDs.map(function (id) {
      return marks.find(function (mark) {
        return mark.id == id;
      });
    }) : marks;
    this.length = this.marks.length;
  },
  setMarkIDs: function setMarkIDs(ids) {
    this.markIDs = ids;
    this.render();
  },
  renderSVGFilters: function renderSVGFilters() {
    var body = document.body;
    var tmpl = document.getElementById('filter-template');
    var colors = {};
    var i, c;

    for (i in _globalSettings.default.NOTE_COLORS) {
      c = _globalSettings.default.NOTE_COLORS[i];
      colors[i.toLowerCase()] = '0 0 0 0 ' + this.convertHex(c.substr(1, 2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(3, 2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(5, 2)) + ' 0 0 0 1 0';
    }

    var filter;

    for (i in colors) {
      filter = tmpl.cloneNode(true);
      filter.getElementsByTagName('filter')[0].id = 'filter--' + i;
      filter.getElementsByTagName('feColorMatrix')[0].setAttribute('values', colors[i]);
      body.appendChild(filter);
    }

    this.setFilters = true;
  },
  convertHex: function convertHex(hex) {
    return (16 * Number('0x' + hex[0]) + Number('0x' + hex[1])) / 255;
  },
  renderList: function renderList() {
    var markTmpl = document.getElementById('mark-template');
    var fragment = document.createDocumentFragment();
    var marksContainer = document.getElementById('marks');
    var markContainer;
    marksContainer.innerText = '';
    this.marks.forEach(function (mark, i) {
      if (mark) {
        markContainer = markTmpl.cloneNode(true);
        markContainer.id = '';
        markContainer.classList.remove('u-display--none');
        markContainer.setAttribute('data-id', i);
        var textNode = markContainer.getElementsByClassName('mark__text')[0];
        var textContent = document.createTextNode(mark.text);
        var color = mark.style.indexOf('background-color');
        var hasNote = mark.note && (typeof mark.note === 'string' || mark.note.text);
        color = color === -1 ? 'transparent' : mark.style.substr(color + 17, 7);
        var note, noteColor, noteText, noteBtn, noteNode;
        textNode.style.borderColor = color;
        textNode.appendChild(textContent);

        if (hasNote) {
          note = mark.note;
          noteColor = note.color || 'yellow';
          noteText = note.text || note;
          markContainer.classList.add('mark--note');
          noteBtn = markContainer.getElementsByClassName('mark__note-btn')[0];
          noteBtn.classList.remove('u-display--none');
          noteBtn.classList.add('mark__note-btn--' + noteColor);
          noteNode = markContainer.getElementsByClassName('mark__note')[0];
          noteNode.appendChild(document.createTextNode(noteText));
          noteNode.classList.remove('u-display--none');
          noteNode.classList.add('mark__note--' + noteColor);
        }

        fragment.appendChild(markContainer);
      }
    });
    marksContainer.appendChild(fragment);
  },
  nav: function nav(e, el) {
    var dir = 1 * el.getAttribute('data-value');
    this.current += dir;
    if (this.current >= this.length) this.current = 0;else if (this.current < 0) this.current = this.length - 1;
    this.activateListItem();
  },
  activateListItem: function activateListItem(id) {
    if (typeof id === 'number') this.current = id;
    var currentItem = this.el.getElementsByClassName('mark--active')[0];
    if (currentItem) currentItem.classList.remove('mark--active');
    document.querySelector('div[data-id="' + [this.current] + '"]').classList.add('mark--active');
    this.emit('sidebar:next-mark', this.current, {
      tab: 'active'
    });
  },
  activate: function activate(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.classList.toggle('unfolded');
    this.activateListItem(1 * el.parentNode.parentNode.getAttribute('data-id'));
  },
  foldList: function foldList(e, el) {
    var val = el.value;

    if (val != 0) {
      var marks = document.getElementById('marks');
      var toggleSettings = this.toggleMap[val];
      this.toggle('text', toggleSettings[0]);
      this.toggle('note', toggleSettings[1]);
    }
  },
  toggleNote: function toggleNote(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.parentNode.getElementsByClassName('mark__note')[0].classList.toggle('unfolded');
  },
  toggle: function toggle(type, show) {
    var meth = show ? 'add' : 'remove';
    Array.from(this.el.getElementsByClassName('mark__' + type)).forEach(function (el) {
      return el.classList[meth]('unfolded');
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/meta-infos.js":
/*!***********************************************!*\
  !*** ./content/sidebar/modules/meta-infos.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--meta'),
  events: {
    ENV: {
      'stored:entry': 'render',
      'updated:stored-entry': 'render'
    }
  },
  render: function render(entry) {
    if (entry && !Array.isArray(entry)) {
      var yes = browser.i18n.getMessage('yes');
      var no = browser.i18n.getMessage('no');
      document.getElementById('meta__number-marks').innerText = entry.marks.length;
      document.getElementById('meta__created').innerText = this.optimizeDateString(new Date(entry.first).toLocaleString());
      document.getElementById('meta__last-modified').innerText = this.optimizeDateString(new Date(entry.last).toLocaleString());
      ['synced', 'immut'].forEach(function (field) {
        return document.getElementById('meta__' + field).innerText = entry[field] ? yes : no;
      });
    }
  },
  optimizeDateString: function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/page-actions.js":
/*!*************************************************!*\
  !*** ./content/sidebar/modules/page-actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--actions'),
  events: {
    ENV: {
      'added:bookmark': 'activateBookmark',
      'removed:bookmark': 'deactivateBookmark',
      'added:note': 'activateNotes',
      'removed:last-note': 'deactivateNotes',
      'page-state': 'onPageState',
      'notes-state': 'onNotesState'
    },
    DOM: {
      click: {
        '.action-button--page': 'pageAction'
      }
    }
  },
  activateBookmark: function activateBookmark() {
    this.activate('scroll', true);
  },
  deactivateBookmark: function deactivateBookmark() {
    this.activate('scroll', false);
  },
  activateNotes: function activateNotes() {
    this.activate('notes', true);
  },
  deactivateNotes: function deactivateNotes() {
    this.activate('notes', false);
  },
  activate: function activate(type, on) {
    var btn = document.getElementById('page-action--' + type);

    if (on) {
      btn.removeAttribute('disabled');
      btn.parentNode.classList.remove('disabled');
    } else {
      btn.setAttribute('disabled', true);
      btn.parentNode.classList.add('disabled');
    }
  },
  pageAction: function pageAction(e, el) {
    this.emit('sidebar:' + el.getAttribute('data-action'), {
      tab: 'active'
    });
  },
  onPageState: function onPageState(state) {
    if (state.bookmark) this.activateBookmark();
  },
  onNotesState: function onNotesState(notes) {
    if (notes) this.activateNotes();
  }
});

/***/ }),

/***/ "./content/sidebar/modules/page-notes.js":
/*!***********************************************!*\
  !*** ./content/sidebar/modules/page-notes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--notes'),
  events: {
    ENV: {
      'updated:pagenotes': 'render'
    },
    DOM: {
      click: {
        '#add-note': 'addNote',
        'tmnotecolor': 'changeColor',
        'tmnotecustomize': 'togglePalette',
        'tmnotedelete': 'removeNote',
        'tmnoteminimize': 'toggleNote',
        'tmnotesave': 'save'
      },
      change: {
        '#fold-page-notes': 'toggleNotes'
      }
    }
  },
  notes: [],
  noteEls: {},
  id: 0,
  currentColor: 'yellow',
  autoinit: function autoinit() {
    this.render();
  },
  render: function render() {
    var _this = this;

    this.resume();
    (0, _utils._GET_ACTIVE_TAB)().then(function (tab) {
      var url = _this.url = tab.url;

      _store.default.get('pagenotes').then(function (pagenotes) {
        pagenotes = pagenotes && pagenotes[url] ? pagenotes[url] : null;
        var l, id;

        if (pagenotes && (l = pagenotes.length)) {
          _this.notes = pagenotes;

          while (l--) {
            id = _this.addNote(pagenotes[l]);
            _this.id = Math.max(_this.id, id);
          }
        }
      }).then(function () {
        _this.toggleSelect(!!_this.notes.length);

        _this.toggleNotes(null, document.getElementById('fold-page-notes'));
      });
    });
  },
  save: function save(e, el) {
    if (el) {
      var note = this.getById(el.getAttribute('data-id'));
      note.text = el.previousSibling.value;
      note.name = el.parentNode.getElementsByClassName('tmnote__header')[0].value;
    }

    this.emit('updated:page-note', this.url, this.notes);
  },
  resume: function resume() {
    this.notes = [];
    this.noteEls = {};
    this.id = 0;
    document.getElementById('page-notes').textContent = '';
  },
  addNote: function addNote(note) {
    note = note.type ? null : note;
    var container = document.getElementById('page-notes');
    var noteEl = document.getElementById('page-note-template').cloneNode(true);
    var textarea = noteEl.getElementsByTagName('textarea')[0];
    var header = noteEl.getElementsByClassName('tmnote__header')[0];
    noteEl.classList.remove('u-display--none');
    var id;

    if (note) {
      id = noteEl.id = note.id;
      textarea.textContent = note.text || '';
      header.value = note.name || '';
      noteEl.classList.add('tmnote--' + note.color);
      container.appendChild(noteEl);
    } else {
      id = noteEl.id = ++this.id;
      this.notes.push({
        id: id,
        text: '',
        color: this.currentColor
      });
      noteEl.classList.remove('tmnote--min');
      noteEl.classList.add('tmnote--' + this.currentColor);
      container.insertBefore(noteEl, container.firstChild);
    }

    Array.from(noteEl.getElementsByTagName('*')).forEach(function (el) {
      return el.setAttribute('data-id', id);
    });
    this.noteEls[id] = noteEl;
    this.toggleSelect(true);
    return id;
  },
  changeColor: function changeColor(e, el) {
    var id = el.getAttribute('data-id');
    var color = this.currentColor = el.getAttribute('data-color');
    this.noteEls[id].className = this.noteEls[id].className.replace(/--\w+/, '--' + color);
    this.getById(id).color = color;
    el.parentNode.classList.add('u-display--none');
  },
  removeNote: function removeNote(e, el) {
    var id = el.getAttribute('data-id');
    var note = this.noteEls[id];
    note.parentNode.removeChild(note);
    delete this.noteEls[id];
    this.notes.splice(this.notes.indexOf(this.getById(id)), 1);
    this.save();

    if (!this.notes.length) {
      this.toggleSelect(false);
    }
  },
  toggleSelect: function toggleSelect(show) {
    var meth = show ? 'remove' : 'add';
    document.getElementById('fold-page-notes').classList[meth]('u-display--none');
  },
  togglePalette: function togglePalette(e, el) {
    var note = this.noteEls[el.getAttribute('data-id')];
    var palette = note.getElementsByTagName('tmnotepalette')[0];
    palette.classList.toggle('u-display--none');

    if (!palette.classList.contains('u-display--none')) {
      note.classList.remove('tmnote--min');
    }
  },
  toggleNote: function toggleNote(e, el) {
    var note = this.noteEls[el.getAttribute('data-id')];
    note.classList.toggle('tmnote--min');

    if (!note.classList.contains('tmnote--min')) {
      this.adjustTextareaHeight(note);
    }

    document.getElementById('fold-page-notes').value = 0;
  },
  toggleNotes: function toggleNotes(e, el) {
    if (el.value == 1) {
      for (var id in this.noteEls) {
        this.noteEls[id].classList.add('tmnote--min');
      }
    } else {
      var note, textarea;

      for (var _id in this.noteEls) {
        note = this.noteEls[_id];
        note.classList.remove('tmnote--min');
        this.adjustTextareaHeight(note);
      }
    }
  },
  getById: function getById(id) {
    return this.notes.find(function (note) {
      return note.id == id;
    });
  },
  adjustTextareaHeight: function adjustTextareaHeight(note) {
    var textarea = note.getElementsByTagName('textarea')[0];
    textarea.style.height = textarea.scrollHeight + 10 + 'px';
  }
});

/***/ }),

/***/ "./content/sidebar/modules/tabs.js":
/*!*****************************************!*\
  !*** ./content/sidebar/modules/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('textmarker-sidebar'),
  events: {
    ENV: {
      'stored:entry': 'showEntrySpecificTabs'
    },
    DOM: {
      click: {
        '.tab__title': 'toggle',
        '.tab__name': 'toggle',
        '.tab__toggle': 'toggle'
      }
    }
  },
  tabs: {},
  autoinit: function autoinit() {
    var _this = this;

    _store.default.get('settings').then(function (settings) {
      if (!settings.sb) return;
      var tabSettings = settings.sb.tabs;

      for (var tab in tabSettings) {
        _this.tabs[tab] = document.getElementById('tab--' + tab);
        if (tabSettings[tab].unfolded) _this.open(tab);else _this.close(tab);
      }
    });
  },
  open: function open(tab) {
    this.tabs[tab].classList.remove('tab--folded');
  },
  close: function close(tab) {
    this.tabs[tab].classList.add('tab--folded');
  },
  toggle: function toggle(e, el) {
    el = el.nodeName === 'H2' ? el : el.parentNode;
    var id = el.getAttribute('data-target');
    var tab = id.split('--').pop();
    var tabEl = document.getElementById(id);
    tabEl.classList.toggle('tab--folded');
    this.emit('toggled:sidebar-tab', tab, !tabEl.classList.contains('tab--folded'));
  },
  showEntrySpecificTabs: function showEntrySpecificTabs() {
    Array.from(document.getElementsByClassName('tab--entry')).forEach(function (tab) {
      return tab.classList.remove('u-display--none');
    });
  }
});

/***/ }),

/***/ "./content/sidebar/modules/tags.js":
/*!*****************************************!*\
  !*** ./content/sidebar/modules/tags.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--tags'),
  events: {
    ENV: {
      'stored:entry': 'render'
    },
    DOM: {
      click: {
        '.tags__remove': 'removeTag',
        '#add-tag': 'addTag'
      }
    }
  },
  render: function render(entry) {
    var _this = this;

    if (entry && !Array.isArray(entry)) {
      var tags = entry.tag ? entry.tag.split(' ') : [];
      document.getElementById('tags').innerText = '';
      tags.forEach(function (tag) {
        return _this.renderTag(tag);
      });
    }
  },
  renderTag: function renderTag(tag) {
    var container = document.getElementById('tags');
    var el = document.createElement('div');
    var del = document.createElement('span');
    var x = document.createTextNode(String.fromCharCode(10005));
    el.className = 'tags__item u-overflow--ellipsis';
    del.className = 'tags__remove';
    del.setAttribute('data-tag', tag);
    el.innerText = tag;
    del.appendChild(x);
    el.appendChild(del);
    container.appendChild(el);
  },
  addTag: function addTag() {
    var _this2 = this;

    var inp = document.getElementById('new-tag');
    var tag = inp.value.trim();
    if (!tag) return;
    this.emit('add:tag', tag, _store.default.entry);
    inp.value = '';
    tag.split(' ').forEach(function (tag) {
      return _this2.renderTag(tag);
    });
  },
  removeTag: function removeTag(e, el) {
    this.emit('remove:tag', el.getAttribute('data-tag'), _store.default.entry);
    el.parentNode.parentNode.removeChild(el.parentNode);
  }
});

/***/ }),

/***/ "./content/sidebar/modules/themes.js":
/*!*******************************************!*\
  !*** ./content/sidebar/modules/themes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--themes'),
  events: {
    DOM: {
      change: {
        '.theme-opt': 'onChange'
      }
    }
  },
  theme: 'default',
  autoinit: function autoinit() {
    var _this = this;

    _store.default.get('settings').then(function (settings) {
      var theme = settings && settings.sb && settings.sb.theme ? settings.sb.theme : 'default';
      document.getElementById("theme--".concat(theme)).checked = true;

      _this.update(theme);
    });
  },
  onChange: function onChange(e, el) {
    var theme = el.getAttribute('data-value');
    this.emit('changed:sidebar-theme', theme);
    this.update(theme);
  },
  update: function update(theme) {
    this.theme = theme;
    if (theme === 'default') return;
    var className = "textmarker-sidebar--".concat(theme);
    var sidebar = document.getElementById('textmarker-sidebar');

    if (!sidebar.classList.contains(className)) {
      sidebar.classList.add(className);
    }
  }
});

/***/ }),

/***/ "./content/sidebar/port.js":
/*!*********************************!*\
  !*** ./content/sidebar/port.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:retry-restoration', 'sidebar:undo', 'sidebar:redo', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'remove:tag', 'add:tag', 'open:addon-page(sb)', 'opened:sidebar', 'updated:page-note', 'toggled:sidebar-tab', 'sidebar:selected-marker', 'changed:sidebar-theme']
  }
});

exports.default = _default;

/***/ }),

/***/ "./content/sidebar/sass/index.scss":
/*!*****************************************!*\
  !*** ./content/sidebar/sass/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/global-settings.js":
/*!*********************************!*\
  !*** ./data/global-settings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  MAX_ENTRY_NAME_CHARS: 70,
  MAX_LOG_ENTRIES: 20,
  NOTE_COLORS: {
    TURQUOISE: '#b9e4ec',
    GREEN: '#ccffcc',
    YELLOW: '#ffffcc',
    ORANGE: '#ffeebb',
    RED: '#ffcccc',
    PURPLE: '#eeccff',
    BLUE: '#bbeeff',
    WHITE: '#eeeeee'
  }
};
exports.default = _default;

/***/ }),

/***/ "./utils/copy.js":
/*!***********************!*\
  !*** ./utils/copy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._COPY = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _COPY = function _COPY(src) {
  var target = Array.isArray(src) ? [] : {};
  var val;

  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      val = src[prop];

      if (val !== null && _typeof(val) === 'object') {
        target[prop] = _COPY(val);
      } else target[prop] = val;
    }
  }

  return target;
};

exports._COPY = _COPY;

/***/ }),

/***/ "./utils/dommodule.js":
/*!****************************!*\
  !*** ./utils/dommodule.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _DOMMODULE =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_DOMMODULE).call(this, obj));
    _this.addListenersManually || _this.addListeners();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: "generalHandler",
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector,
          _sel,
          meth,
          f,
          isId,
          isClass,
          isDoc;

      for (selector in subMap) {
        f = selector[0];
        _sel = selector;
        isId = f === '#';
        isClass = f === '.';
        isDoc = f === '*';
        if (isId || isClass) selector = selector.substr(1);

        if (isDoc || isClass && el.classList.contains(selector) || isId && el.id === selector || el.nodeName.toLowerCase() === selector) {
          meth = subMap[_sel];
          if (typeof meth === 'function') meth(e, el);else if (this[meth]) this[meth](e, el);
          break;
        }
      }
    }
  }, {
    key: "addListener",
    value: function addListener(type, meth, el) {
      el = el || this.el;
      var handler = typeof meth === 'function' ? meth : this[meth];
      el.addEventListener(type, handler, false);

      if (el === this.el) {
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      } else {
        this._extraBound.push([el, type, handler]);
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var events = this.events,
          domEvents,
          el,
          subMap,
          type,
          handler;
      if (!events || !(domEvents = events.DOM) || !(el = this.el)) return false;

      for (type in domEvents) {
        subMap = domEvents[type];
        handler = this.proxy(this, this.generalHandler, subMap, type);
        el.addEventListener(type, handler, false);
        if (!this._bound[type]) this._bound[type] = [];

        this._bound[type].push(handler);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var type, _bound, l;

      for (type in this._bound) {
        _bound = this._bound[type];
        l = _bound.length;

        while (l--) {
          this.el.removeEventListener(type, _bound[l], false);

          _bound.splice(l, 1);
        }
      }

      var _extra = this._extraBound,
          i = 0,
          set;
      l = _extra.length;

      for (; i < l; i++) {
        set = _extra[i];
        set[0].removeEventListener(set[1], set[2], false);
      }
    }
  }]);

  return _DOMMODULE;
}(_module._MODULE);

exports._DOMMODULE = _DOMMODULE;

/***/ }),

/***/ "./utils/error-tracker.js":
/*!********************************!*\
  !*** ./utils/error-tracker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _ERRORTRACKER = new _module._MODULE({
  autoinit: function autoinit() {
    var _this = this;

    window.addEventListener('error', function (error) {
      var file = error.filename.split('/').pop();

      if (['sidebar.wp.js', 'tbb-menu.wp.js', 'options.wp.js', 'addon-page.wp.js'].includes(file)) {
        _this.emit('error:browser-console', {
          message: error.message,
          location: error.filename.split('/').pop().split('.').shift() + ':' + error.lineno + ':' + error.colno,
          time: new Date().getTime()
        });
      }
    }, false);
  }
});

var _default = _ERRORTRACKER;
exports.default = _default;

/***/ }),

/***/ "./utils/extend.js":
/*!*************************!*\
  !*** ./utils/extend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
}

/***/ }),

/***/ "./utils/getActiveTab.js":
/*!*******************************!*\
  !*** ./utils/getActiveTab.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._GET_ACTIVE_TAB = void 0;

var _GET_ACTIVE_TAB = function _GET_ACTIVE_TAB() {
  return browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

/***/ }),

/***/ "./utils/hashless.js":
/*!***************************!*\
  !*** ./utils/hashless.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._HASHLESS = void 0;

var _HASHLESS = function _HASHLESS(url) {
  var h = url.lastIndexOf('#');
  if (h === -1) return url;else return url.substr(0, h);
};

exports._HASHLESS = _HASHLESS;

/***/ }),

/***/ "./utils/l10n.js":
/*!***********************!*\
  !*** ./utils/l10n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/*
* Translates a HTMl page in the web l10n style from the Add-on SDK with WebExtensions strings.
* Modified by underflyingbirches
*
* @author Martin Giger
* @see {@link https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953}
* @license MPL-2.0
*/
function translateDocument() {
  var el, data, dataset; // Set the language attribute of the document.

  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-')); // Get all elements that are marked as being translateable.

  var textElements = document.querySelectorAll('*[data-l10n-id]');
  var attrElements = document.querySelectorAll('*[data-l10n-attr]');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      el = _step.value;
      dataset = el.dataset;
      var l10nId = dataset.l10nId;

      if (l10nId) {
        data = browser.i18n.getMessage(l10nId);

        if (data && data != '??') {
          el.textContent = data;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = attrElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      el = _step2.value;
      dataset = el.dataset;
      ['Title', 'Placeholder'].forEach(function (attr) {
        var l10nAttr = dataset['l10n' + attr];

        if (l10nAttr) {
          data = browser.i18n.getMessage(l10nAttr);

          if (data && data != '??') {
            el.setAttribute(attr.toLowerCase(), data);
          }
        }
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function _default() {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
}

/***/ }),

/***/ "./utils/mediator.js":
/*!***************************!*\
  !*** ./utils/mediator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var topics = {};

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "on",
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];
      topics[event].push(handler);
    }
  }, {
    key: "emit",
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');
      var i = 0,
          l = events.length,
          topic;

      for (; i < l; i++) {
        topic = topics[events[i]];
        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: "request",
    value: function request(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({
        ev: event,
        args: args,
        wait: true
      }).catch(function () {});
    }
  }, {
    key: "proxy",
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _default;
}();

exports.default = _default;

/***/ }),

/***/ "./utils/module.js":
/*!*************************!*\
  !*** ./utils/module.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = void 0;

var _mediator = _interopRequireDefault(__webpack_require__(/*! ./mediator */ "./utils/mediator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _MODULE =
/*#__PURE__*/
function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    var _this;

    _classCallCheck(this, _MODULE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_MODULE).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }

    var events = _this.events,
        envEvents,
        o,
        e,
        handler;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator.default);

exports._MODULE = _MODULE;

/***/ }),

/***/ "./utils/port.js":
/*!***********************!*\
  !*** ./utils/port.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = void 0;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _PORT =
/*#__PURE__*/
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.passMessage));
    if (type === 'privileged' || type === 'background') _this.initPorting();
    var events = _this.events,
        oneOffEvents,
        connectionBasedEvents;

    if (events) {
      oneOffEvents = events.ONEOFF;

      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      connectionBasedEvents = events.CONNECTION;

      if (connectionBasedEvents) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = connectionBasedEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var f = _step2.value;

            _this.on(f, _this.proxy(_assertThisInitialized(_assertThisInitialized(_this)), _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }

    return _this;
  }

  _createClass(_PORT, [{
    key: "passMessage",
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called

      return false;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        var tab;

        if (lastArg !== undefined && (tab = lastArg.tab)) {
          if (tab === 'active') {
            browser.tabs.query({
              active: true
            }).then(function (tabs) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _tab = _step3.value;
                  browser.tabs.sendMessage(_tab.id, msg).catch(function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
          }
        } else {
          browser.tabs.query({
            /* currentWindow: false, active: false */
          }).then(function (tabs) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = tabs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _tab2 = _step4.value;
                browser.tabs.sendMessage(_tab2.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          });
        }
      }
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: "initPorting",
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({
        name: this.name
      });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: "addConnectionListeners",
    value: function addConnectionListeners(cb) {
      var _this3 = this;

      browser.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(_this3.proxy(_this3, _this3.passMessage));
        !cb || cb();
      });
    }
  }]);

  return _PORT;
}(_module._MODULE);

exports._PORT = _PORT;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiXSwibmFtZXMiOlsiX01PRFVMRSIsImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6aW5nIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwiZW50cnkiLCJsb2NrZWQiLCJ1cGRhdGVFbnRyeSIsImlzQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiY3VycmVudEVudHJ5IiwicHVzaCIsImVtaXQiLCJ1cGRhdGVFbnRyeU9uRm91bmQiLCJyZXN1bWUiLCJzZXRBcmVhcyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJwYWdlbm90ZXMiLCJmaWVsZCIsIlByb21pc2UiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiciIsIm1ldGgiLCJfZ2V0X21vZGUiLCJhZGRvbiIsImFjdGl2ZSIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfc2V0dGluZ3MiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9wYWdlbm90ZXMiLCJhdXRvaW5pdCIsInRhYiIsInBvd2VyIiwib24iLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25TdGFydCIsIl9TVE9SRSIsIm1vZGUiLCJ0b2dnbGUiLCJzaWRlYmFyIiwiX0RPTU1PRFVMRSIsImVsIiwicmVuZGVyIiwiaGVhZGVyIiwidXBkYXRlTmFtZSIsIm5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwidGl0bGUiLCJET00iLCJjbGljayIsInJldHJ5QnRuU2hvd24iLCJzYXZlQnRuIiwicmV0cnlCdG4iLCJ0b2dnbGVTYXZlIiwic2F2ZSIsInJldHJ5UmVzdG9yYXRpb24iLCJkZWFjdGl2YXRlUmV0cnkiLCJhY3RpdmF0ZVNhdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJkZWFjdGl2YXRlU2F2ZSIsImFjdGl2YXRlUmV0cnkiLCJ0b2dnbGVJbW11dCIsImUiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJ1cGRhdGVJbW11dCIsImltbXV0Iiwib25QYWdlU3RhdGUiLCJzdGF0ZSIsInJldHJ5QWN0aXZlIiwibGluayIsImdldEF0dHJpYnV0ZSIsImJ1dHRvbnMiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtYXJrQWN0aW9uIiwiaGFzQXR0cmlidXRlIiwiYWN0aXZhdGUiLCJtYXJrSW5mb3MiLCJmb3JFYWNoIiwidHlwZSIsImJ0biIsImJvb2ttYXJrIiwiZGVhY3RpdmF0ZSIsImNoYW5nZSIsImF1dG9tYXJrRW5hYmxlZCIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJjIiwiX1NFVFRJTkdTIiwiTk9URV9DT0xPUlMiLCJ0b0xvd2VyQ2FzZSIsImNvbnZlcnRIZXgiLCJzdWJzdHIiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJoZXgiLCJOdW1iZXIiLCJtYXJrVG1wbCIsImZyYWdtZW50IiwibWFya3NDb250YWluZXIiLCJtYXJrQ29udGFpbmVyIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJpbmRleE9mIiwiaGFzTm90ZSIsIm5vdGUiLCJub3RlQ29sb3IiLCJub3RlVGV4dCIsIm5vdGVCdG4iLCJub3RlTm9kZSIsImJvcmRlckNvbG9yIiwibmF2IiwiZGlyIiwiYWN0aXZhdGVMaXN0SXRlbSIsImN1cnJlbnRJdGVtIiwicXVlcnlTZWxlY3RvciIsImZvbGRMaXN0IiwidmFsIiwidG9nZ2xlU2V0dGluZ3MiLCJ0b2dnbGVOb3RlIiwieWVzIiwiaTE4biIsImdldE1lc3NhZ2UiLCJubyIsIm9wdGltaXplRGF0ZVN0cmluZyIsIkRhdGUiLCJmaXJzdCIsInRvTG9jYWxlU3RyaW5nIiwibGFzdCIsImRhdGUiLCJyZXBsYWNlIiwicCIsInEiLCJhY3RpdmF0ZUJvb2ttYXJrIiwiZGVhY3RpdmF0ZUJvb2ttYXJrIiwiYWN0aXZhdGVOb3RlcyIsImRlYWN0aXZhdGVOb3RlcyIsInBhZ2VBY3Rpb24iLCJvbk5vdGVzU3RhdGUiLCJub3RlcyIsIm5vdGVFbHMiLCJjdXJyZW50Q29sb3IiLCJ1cmwiLCJhZGROb3RlIiwibWF4IiwidG9nZ2xlU2VsZWN0IiwidG9nZ2xlTm90ZXMiLCJnZXRCeUlkIiwicHJldmlvdXNTaWJsaW5nIiwiY29udGFpbmVyIiwibm90ZUVsIiwidGV4dGFyZWEiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiY2hhbmdlQ29sb3IiLCJyZW1vdmVOb3RlIiwicmVtb3ZlQ2hpbGQiLCJzcGxpY2UiLCJ0b2dnbGVQYWxldHRlIiwicGFsZXR0ZSIsImFkanVzdFRleHRhcmVhSGVpZ2h0IiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidGFicyIsInNiIiwidGFiU2V0dGluZ3MiLCJ1bmZvbGRlZCIsIm9wZW4iLCJjbG9zZSIsIm5vZGVOYW1lIiwicG9wIiwidGFiRWwiLCJzaG93RW50cnlTcGVjaWZpY1RhYnMiLCJ0YWdzIiwidGFnIiwicmVuZGVyVGFnIiwiZGVsIiwieCIsImFkZFRhZyIsImlucCIsInRyaW0iLCJyZW1vdmVUYWciLCJ0aGVtZSIsInVwZGF0ZSIsIm9uQ2hhbmdlIiwiX1BPUlQiLCJDT05ORUNUSU9OIiwiTUFYX0VOVFJZX05BTUVfQ0hBUlMiLCJNQVhfTE9HX0VOVFJJRVMiLCJUVVJRVU9JU0UiLCJHUkVFTiIsIllFTExPVyIsIk9SQU5HRSIsIlJFRCIsIlBVUlBMRSIsIkJMVUUiLCJXSElURSIsIl9DT1BZIiwic3JjIiwidGFyZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9leHRyYSIsInNldCIsIl9FUlJPUlRSQUNLRVIiLCJmaWxlIiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJsb2NhdGlvbiIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJ0aW1lIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiX0hBU0hMRVNTIiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJkYXRhIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwibDEwbkF0dHIiLCJhdHRyIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNhdGNoIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwibyIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJPTkVPRkYiLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1zZyIsImxhc3RBcmciLCJ1bmRlZmluZWQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O2VBRWUsSUFBSUEsY0FBSixDQUFZO0FBQ3pCQyxVQUFRO0FBQ05DLFNBQUs7QUFDSCxzQkFBZ0IsVUFEYjtBQUVILHFCQUFlLGFBRlo7QUFHSCxxQkFBZSxvQkFIWjtBQUlILDZCQUF1QixhQUpwQjtBQUtILCtCQUF5QjtBQUx0QjtBQURDLEdBRGlCO0FBVXpCQyxlQUFhLEtBVlk7QUFXekJDLGdCQUFjLEtBWFc7QUFZekJDLGlCQUFlLE1BWlU7QUFhekJDLGdCQUFjLE1BYlc7QUFjekJDLGtCQUFnQixNQWRTO0FBZXpCQyxTQUFPLElBZmtCO0FBZ0J6QkMsVUFBUSxLQWhCaUI7QUFrQnpCQyxhQWxCeUIsdUJBa0JiRixLQWxCYSxFQWtCTjtBQUNqQixRQUFJQSxLQUFKLEVBQVc7QUFDVCxVQUFNRyxRQUFRQyxNQUFNQyxPQUFOLENBQWNMLEtBQWQsQ0FBZDtBQUNBLFVBQU1NLGVBQWUsQ0FBQyxDQUFDLEtBQUtOLEtBQTVCO0FBRUEsV0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsSUFBZUUsS0FBZixJQUF3QkgsTUFBTUMsTUFBNUM7O0FBRUEsVUFBSSxDQUFDLEtBQUtBLE1BQU4sSUFBZ0JFLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNELE9BRkQsTUFHSyxJQUFJLEtBQUtDLE1BQUwsSUFBZSxDQUFDRSxLQUFwQixFQUEyQjtBQUM5QixZQUFJLEtBQUtILEtBQUwsSUFBY0ksTUFBTUMsT0FBTixDQUFjLEtBQUtMLEtBQW5CLENBQWxCLEVBQTZDLEtBQUtBLEtBQUwsQ0FBV08sSUFBWCxDQUFnQlAsS0FBaEIsRUFBN0MsS0FDSyxLQUFLQSxLQUFMLEdBQWEsQ0FBQ0EsS0FBRCxDQUFiO0FBQ047O0FBRUQsVUFBSU0sWUFBSixFQUFrQixLQUFLRSxJQUFMLENBQVUsc0JBQVYsRUFBa0MsS0FBS1IsS0FBdkMsRUFBbEIsS0FDSyxLQUFLUSxJQUFMLENBQVUsY0FBVixFQUEwQixLQUFLUixLQUEvQjtBQUNOO0FBQ0YsR0FwQ3dCO0FBcUN6QlMsb0JBckN5Qiw4QkFxQ05ULEtBckNNLEVBcUNDO0FBQ3hCLFFBQUlBLEtBQUosRUFBVztBQUNULFdBQUtFLFdBQUwsQ0FBaUJGLEtBQWpCOztBQUNBLFVBQUksQ0FBQ0ksTUFBTUMsT0FBTixDQUFjTCxLQUFkLENBQUwsRUFBMkI7QUFDekIsYUFBS1EsSUFBTCxDQUFVLHdCQUFWLEVBQW9DUixLQUFwQztBQUNEO0FBQ0Y7QUFDRixHQTVDd0I7QUE4Q3pCVSxRQTlDeUIsb0JBOENoQjtBQUNQLFNBQUtWLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLTyxJQUFMLENBQVUsZUFBVjtBQUNELEdBbER3QjtBQW9EekJHLFVBcER5QixzQkFvRGQ7QUFBQTs7QUFDVCxXQUFPQyxRQUFRQyxPQUFSLENBQWdCQyxJQUFoQixDQUFxQkMsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLG1CQUFXO0FBQ2hELFVBQUlILFdBQVdBLFFBQVFDLElBQXZCLEVBQTZCO0FBQzNCLGNBQUtqQixhQUFMLEdBQXFCZ0IsUUFBUUMsSUFBUixDQUFhRyxRQUFiLEdBQXdCLE1BQXhCLEdBQWlDLE9BQXREO0FBQ0EsY0FBS25CLFlBQUwsR0FBb0JlLFFBQVFDLElBQVIsQ0FBYUksT0FBYixHQUF1QixNQUF2QixHQUFnQyxPQUFwRDtBQUNBLGNBQUtuQixjQUFMLEdBQXNCYyxRQUFRQyxJQUFSLENBQWFLLFNBQWIsR0FBeUIsTUFBekIsR0FBa0MsT0FBeEQ7QUFDRDtBQUNGLEtBTk0sQ0FBUDtBQU9ELEdBNUR3QjtBQThEekJKLEtBOUR5QixpQkE4REY7QUFBQTs7QUFBQSxRQUFuQkssS0FBbUIsdUVBQVgsU0FBVzs7QUFDckIsUUFBSSxLQUFLeEIsWUFBVCxFQUF1QjtBQUNyQixhQUFRLElBQUl5QixPQUFKLENBQVk7QUFBQSxlQUFLQyxPQUFPQyxVQUFQLENBQWtCO0FBQUEsaUJBQU1DLEVBQUUsT0FBS1QsR0FBTCxDQUFTSyxLQUFULENBQUYsQ0FBTjtBQUFBLFNBQWxCLEVBQTRDLEVBQTVDLENBQUw7QUFBQSxPQUFaLENBQVI7QUFDRDs7QUFDRCxRQUFNSyxPQUFPLEtBQUssVUFBVUwsS0FBZixDQUFiO0FBQ0EsUUFBSSxDQUFDSyxJQUFMLEVBQVcsTUFBTSxXQUFXTCxLQUFYLEdBQW1CLGlCQUF6Qjs7QUFFWCxRQUFJLENBQUMsS0FBS3pCLFdBQVYsRUFBdUI7QUFDckIsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFdBQUtELFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFPLEtBQUtnQixRQUFMLEdBQWdCSyxJQUFoQixDQUFxQixZQUFNO0FBQ2hDLGVBQUtwQixZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsZUFBTyxPQUFLLFVBQVV3QixLQUFmLEdBQVA7QUFDRCxPQUhNLENBQVA7QUFJRDs7QUFDRCxXQUFPLEtBQUssVUFBVUEsS0FBZixHQUFQO0FBQ0QsR0E5RXdCO0FBK0V6Qk0sV0EvRXlCLHVCQStFYjtBQUNWLFdBQU9kLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBS2hCLGFBQXJCLEVBQW9Da0IsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLG1CQUFXO0FBQy9ELFVBQUksQ0FBQ0gsT0FBRCxJQUFZLENBQUNBLFFBQVFJLFFBQXJCLElBQWlDSixRQUFRSSxRQUFSLENBQWlCVSxLQUFqQixDQUF1QkMsTUFBNUQsRUFBb0UsT0FBTyxJQUFQO0FBQ3BFLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBcEZ3QjtBQXFGekJDLGVBckZ5QiwyQkFxRlQ7QUFDZCxXQUFPakIsUUFBUUMsT0FBUixDQUFnQixLQUFLaEIsYUFBckIsRUFBb0NrQixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsbUJBQVc7QUFDL0QsVUFBSSxDQUFDSCxPQUFELElBQVksQ0FBQ0EsUUFBUUksUUFBekIsRUFBbUMsT0FBTyxLQUFQO0FBQ25DLGFBQU9KLFFBQVFJLFFBQVIsQ0FBaUJDLE9BQWpCLENBQXlCWSxRQUFoQztBQUNELEtBSE0sQ0FBUDtBQUlELEdBMUZ3QjtBQTJGekJDLGVBM0Z5QiwyQkEyRlQ7QUFDZCxXQUFPbkIsUUFBUUMsT0FBUixDQUFnQixLQUFLaEIsYUFBckIsRUFBb0NrQixHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0M7QUFBQSxhQUFXSCxRQUFRSSxRQUFuQjtBQUFBLEtBQS9DLENBQVA7QUFDRCxHQTdGd0I7QUE4RnpCZSxjQTlGeUIsMEJBOEZWO0FBQ2IsV0FBT3BCLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBS2hCLGFBQXJCLEVBQW9Da0IsR0FBcEMsR0FBMENDLElBQTFDLENBQStDO0FBQUEsYUFBV0gsUUFBUUksUUFBUixDQUFpQmdCLE9BQTVCO0FBQUEsS0FBL0MsQ0FBUDtBQUNELEdBaEd3QjtBQWlHekJDLGdCQWpHeUIsNEJBaUdSO0FBQ2YsV0FBT3RCLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBS2hCLGFBQXJCLEVBQW9Da0IsR0FBcEMsR0FBMENDLElBQTFDLENBQStDO0FBQUEsYUFBV0gsUUFBUU0sU0FBUixJQUFxQixJQUFoQztBQUFBLEtBQS9DLENBQVA7QUFDRDtBQW5Hd0IsQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBRUEsSUFBSTNCLGNBQUosQ0FBWTtBQUNWQyxVQUFRO0FBQ05DLFNBQUs7QUFDSCxxQkFBZSxTQURaO0FBRUgsdUJBQWlCLE9BRmQ7QUFHSCxzQkFBZ0IsUUFIYjtBQUlILDhCQUF3QixRQUpyQjtBQUtILGdDQUEwQjtBQUx2QjtBQURDLEdBREU7QUFXVnlDLFVBWFUsc0JBV0M7QUFDVCxTQUFLM0IsSUFBTCxDQUFVLGdCQUFWLEVBQTRCO0FBQUU0QixXQUFLO0FBQVAsS0FBNUI7QUFDRCxHQWJTO0FBZVZDLE9BZlUsaUJBZUpDLEVBZkksRUFlQTtBQUNSLFFBQU1DLGNBQWNDLFNBQVNDLGNBQVQsQ0FBd0IsNEJBQXhCLENBQXBCO0FBQ0EsUUFBTUMsVUFBVUYsU0FBU0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBaEI7O0FBRUEsUUFBSUgsRUFBSixFQUFRO0FBQ05DLGtCQUFZSSxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixpQkFBMUI7QUFDQUYsY0FBUUMsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xOLGtCQUFZSSxTQUFaLENBQXNCRSxNQUF0QixDQUE2QixpQkFBN0I7QUFDQUgsY0FBUUMsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXRCO0FBQ0Q7QUFDRixHQTFCUztBQTJCVkUsU0EzQlUscUJBMkJBO0FBQUE7O0FBQ1JDLG1CQUFPaEMsR0FBUCxDQUFXLE1BQVgsRUFBbUJDLElBQW5CLENBQXdCO0FBQUEsYUFBUSxNQUFLcUIsS0FBTCxDQUFXVyxJQUFYLENBQVI7QUFBQSxLQUF4QjtBQUNELEdBN0JTO0FBOEJWQyxRQTlCVSxrQkE4QkhqRCxLQTlCRyxFQThCSTtBQUNaLFFBQU1rRCxVQUFVVixTQUFTQyxjQUFULENBQXdCLG9CQUF4QixDQUFoQjs7QUFDQSxRQUFJekMsU0FBUytDLGVBQU85QyxNQUFwQixFQUE0QjtBQUMxQmlELGNBQVFQLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLDRCQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMTSxjQUFRUCxTQUFSLENBQWtCRSxNQUFsQixDQUF5Qiw0QkFBekI7QUFDRDtBQUNGO0FBckNTLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBQ0E7Ozs7QUFFQSxJQUFJTSxpQkFBSixDQUFlO0FBQ2JDLE1BQUlaLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FEUztBQUViaEQsVUFBUTtBQUNOQyxTQUFLO0FBQ0gsc0JBQWdCLFFBRGI7QUFFSCw4QkFBd0I7QUFGckI7QUFEQyxHQUZLO0FBU2IyRCxRQVRhLGtCQVNOckQsS0FUTSxFQVNDO0FBQ1osUUFBTXNELFNBQVMsS0FBS0YsRUFBcEI7QUFFQSxRQUFJLENBQUNwRCxLQUFMLEVBQVlzRCxPQUFPWCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixpQkFBckIsRUFBWixLQUNLLElBQUl4QyxNQUFNQyxPQUFOLENBQWNMLEtBQWQsQ0FBSixFQUEwQjtBQUUvQnNELFdBQU9YLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGlCQUF4QjtBQUNBLFNBQUtVLFVBQUwsQ0FBZ0J2RCxNQUFNd0QsSUFBdEI7QUFDRCxHQWpCWTtBQW1CYkQsWUFuQmEsc0JBbUJGQyxJQW5CRSxFQW1CSTtBQUNmLFFBQU1KLEtBQUssS0FBS0EsRUFBTCxDQUFRSyxzQkFBUixDQUErQixjQUEvQixFQUErQyxDQUEvQyxDQUFYO0FBQ0FMLE9BQUdNLFNBQUgsR0FBZUYsSUFBZjtBQUNBSixPQUFHTyxLQUFILEdBQVdILElBQVg7QUFDRDtBQXZCWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBQ0E7Ozs7QUFFQSxJQUFJTCxpQkFBSixDQUFlO0FBQ2JDLE1BQUlaLFNBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBRFM7QUFFYmhELFVBQVE7QUFDTkMsU0FBSztBQUNILHFCQUFlLFlBRFo7QUFFSCwwQkFBb0IsWUFGakI7QUFHSCwrQkFBeUIsWUFIdEI7QUFJSCwrQkFBeUIsZ0JBSnRCO0FBS0gscUJBQWUsZ0JBTFo7QUFNSCx5QkFBbUIsY0FOaEI7QUFPSCw4QkFBd0IsZUFQckI7QUFRSCx1QkFBaUIsaUJBUmQ7QUFTSCxzQkFBZ0IsYUFUYjtBQVVILG9CQUFjLGFBVlg7QUFXSCxnQ0FBMEI7QUFYdkIsS0FEQztBQWNOa0UsU0FBSztBQUNIQyxhQUFPO0FBQ0wsK0JBQXVCLGtCQURsQjtBQUVMLDhCQUFzQixNQUZqQjtBQUdMLG1CQUFXO0FBSE47QUFESjtBQWRDLEdBRks7QUF5QmJDLGlCQUFlLEtBekJGO0FBMEJiQyxXQUFTdkIsU0FBU0MsY0FBVCxDQUF3QixtQkFBeEIsQ0ExQkk7QUEyQmJ1QixZQUFVeEIsU0FBU0MsY0FBVCxDQUF3QixvQkFBeEIsQ0EzQkc7QUE2QmJOLFVBN0JhLHNCQTZCRjtBQUNULFNBQUs4QixVQUFMO0FBQ0QsR0EvQlk7QUFpQ2JDLE1BakNhLGtCQWlDTjtBQUNMLFNBQUsxRCxJQUFMLENBQVUsc0JBQVYsRUFBa0M7QUFBRTRCLFdBQUs7QUFBUCxLQUFsQztBQUNELEdBbkNZO0FBb0NiK0Isa0JBcENhLDhCQW9DTTtBQUNqQixTQUFLM0QsSUFBTCxDQUFVLDJCQUFWLEVBQXVDO0FBQUU0QixXQUFLO0FBQVAsS0FBdkM7QUFDQSxTQUFLZ0MsZUFBTDtBQUNELEdBdkNZO0FBd0NiSCxZQXhDYSx3QkF3Q0E7QUFBQTs7QUFDWGxCLG1CQUFPaEMsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDLFVBQU1TLE9BQU9LLFdBQVcsS0FBWCxHQUFtQixRQUFoQzs7QUFDQSxZQUFLaUMsT0FBTCxDQUFhcEIsU0FBYixDQUF1QmxCLElBQXZCLEVBQTZCLGlCQUE3QjtBQUNELEtBSEQ7QUFJRCxHQTdDWTtBQThDYjRDLGNBOUNhLDBCQThDVztBQUFBLFFBQVgvQixFQUFXLHVFQUFOLElBQU07QUFDdEIsUUFBSUEsRUFBSixFQUFRLEtBQUt5QixPQUFMLENBQWFPLGVBQWIsQ0FBNkIsVUFBN0IsRUFBUixLQUNLLEtBQUtQLE9BQUwsQ0FBYVEsWUFBYixDQUEwQixVQUExQixFQUFzQyxJQUF0QztBQUNOLEdBakRZO0FBa0RiQyxnQkFsRGEsNEJBa0RJO0FBQ2YsU0FBS0gsWUFBTCxDQUFrQixLQUFsQjtBQUNELEdBcERZO0FBcURiSSxlQXJEYSwyQkFxREc7QUFDZCxRQUFJLENBQUMsS0FBS1gsYUFBVixFQUF5QjtBQUN2QixXQUFLRSxRQUFMLENBQWNyQixTQUFkLENBQXdCRSxNQUF4QixDQUErQixpQkFBL0I7QUFDQSxXQUFLaUIsYUFBTCxHQUFxQixJQUFyQjtBQUNEO0FBQ0YsR0ExRFk7QUEyRGJNLGlCQTNEYSw2QkEyREs7QUFDaEIsUUFBSSxLQUFLTixhQUFULEVBQXdCO0FBQ3RCLFdBQUtFLFFBQUwsQ0FBY3JCLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGlCQUE1QjtBQUNBLFdBQUtrQixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRixHQWhFWTtBQWlFYlksYUFqRWEsdUJBaUVEQyxDQWpFQyxFQWlFRXZCLEVBakVGLEVBaUVNO0FBQ2pCQSxTQUFLQSxHQUFHVCxTQUFILENBQWFpQyxRQUFiLENBQXNCLGVBQXRCLElBQXlDeEIsRUFBekMsR0FBOENBLEdBQUd5QixVQUF0RDtBQUNBekIsT0FBR1QsU0FBSCxDQUFhTSxNQUFiLENBQW9CLFFBQXBCO0FBQ0EsU0FBS3pDLElBQUwsQ0FBVSxlQUFWLEVBQTJCNEMsR0FBR1QsU0FBSCxDQUFhaUMsUUFBYixDQUFzQixRQUF0QixDQUEzQixFQUE0RDtBQUFFeEMsV0FBSztBQUFQLEtBQTVEO0FBQ0QsR0FyRVk7QUFzRWIwQyxhQXRFYSx1QkFzRUQ5RSxLQXRFQyxFQXNFTTtBQUNqQixRQUFJQSxLQUFKLEVBQVc7QUFDVCxVQUFNeUIsT0FBT3pCLE1BQU0rRSxLQUFOLEdBQWMsS0FBZCxHQUFzQixRQUFuQztBQUNBdkMsZUFBU0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENFLFNBQTlDLENBQXdEbEIsSUFBeEQsRUFBOEQsUUFBOUQ7QUFDQWUsZUFBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsU0FBdEMsQ0FBZ0RFLE1BQWhELENBQXVELGlCQUF2RDtBQUNELEtBSkQsTUFJTztBQUNMTCxlQUFTQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsaUJBQXBEO0FBQ0Q7QUFDRixHQTlFWTtBQStFYm9DLGFBL0VhLHVCQStFREMsS0EvRUMsRUErRU07QUFDakIsUUFBSUEsTUFBTUMsV0FBVixFQUF1QixLQUFLVCxhQUFMO0FBQ3hCO0FBakZZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQSxJQUFJdEIsaUJBQUosQ0FBZTtBQUNiQyxNQUFJWixTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYmhELFVBQVE7QUFDTm1FLFNBQUs7QUFDSEMsYUFBTztBQUNMLGlCQUFTLE1BREo7QUFFTCx1QkFBZSxNQUZWO0FBR0wsdUJBQWU7QUFIVjtBQURKO0FBREMsR0FGSztBQVlic0IsTUFaYSxnQkFZUlIsQ0FaUSxFQVlMdkIsRUFaSyxFQVlEO0FBQ1ZBLFNBQUtBLEdBQUdULFNBQUgsQ0FBYWlDLFFBQWIsQ0FBc0IsTUFBdEIsSUFBZ0N4QixFQUFoQyxHQUFxQ0EsR0FBR3lCLFVBQTdDO0FBQ0EsU0FBS3JFLElBQUwsQ0FBVSxxQkFBVixFQUFpQzRDLEdBQUdnQyxZQUFILENBQWdCLFNBQWhCLENBQWpDO0FBQ0Q7QUFmWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUEsSUFBSWpDLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCxzQkFBZ0IsVUFEYjtBQUVILHdCQUFrQjtBQUZmLEtBREM7QUFLTmtFLFNBQUs7QUFDSEMsYUFBTztBQUNMLGdDQUF3QjtBQURuQjtBQURKO0FBTEMsR0FGSztBQWFid0IsV0FBUyxFQWJJO0FBZWJsRCxVQWZhLHNCQWVGO0FBQ1QsU0FBS2tELE9BQUwsR0FBZWpGLE1BQU1rRixJQUFOLENBQVcsS0FBS2xDLEVBQUwsQ0FBUW1DLG9CQUFSLENBQTZCLFFBQTdCLENBQVgsQ0FBZjtBQUNELEdBakJZO0FBa0JiQyxZQWxCYSxzQkFrQkZiLENBbEJFLEVBa0JDdkIsRUFsQkQsRUFrQks7QUFDaEIsUUFBSUEsR0FBR3FDLFlBQUgsQ0FBZ0IsVUFBaEIsQ0FBSixFQUFpQztBQUNqQyxTQUFLakYsSUFBTCxDQUFVLGFBQWE0QyxHQUFHZ0MsWUFBSCxDQUFnQixhQUFoQixDQUF2QixFQUF1RCxJQUF2RCxFQUE2RCxJQUE3RCxFQUFtRTtBQUFFaEQsV0FBSztBQUFQLEtBQW5FO0FBQ0QsR0FyQlk7QUFzQmJzRCxVQXRCYSxvQkFzQkpDLFNBdEJJLEVBc0JPO0FBQ2xCLFNBQUtOLE9BQUwsQ0FBYU8sT0FBYixDQUFxQixlQUFPO0FBQzFCLFVBQUlDLE9BQU9DLElBQUlWLFlBQUosQ0FBaUIsYUFBakIsQ0FBWDs7QUFDQSxVQUNFUyxTQUFTLGtCQUFULElBQ0MsT0FBT0YsVUFBVUUsSUFBVixDQUFQLEtBQTJCLFNBQTNCLElBQXdDLENBQUNGLFVBQVVFLElBQVYsQ0FEMUMsSUFFQ0EsU0FBUyxpQkFBVCxJQUE4QkYsVUFBVUksUUFIM0MsRUFJRTtBQUNBRCxZQUFJeEIsZUFBSixDQUFvQixVQUFwQjtBQUNBd0IsWUFBSWpCLFVBQUosQ0FBZWxDLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLFVBQWhDO0FBQ0Q7QUFDRixLQVZEO0FBV0QsR0FsQ1k7QUFtQ2JtRCxZQW5DYSx3QkFtQ0E7QUFDWCxTQUFLWCxPQUFMLENBQWFPLE9BQWIsQ0FBcUIsZUFBTztBQUMxQkUsVUFBSXZCLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsSUFBN0I7QUFDQXVCLFVBQUlqQixVQUFKLENBQWVsQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixVQUE3QjtBQUNELEtBSEQ7QUFJRDtBQXhDWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUEsSUFBSU8saUJBQUosQ0FBZTtBQUNiQyxNQUFJWixTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBRFM7QUFFYmhELFVBQVE7QUFDTkMsU0FBSztBQUNILHFCQUFlLFFBRFo7QUFFSCwwQkFBb0IsUUFGakI7QUFHSCwrQkFBeUIsUUFIdEI7QUFJSCwyQkFBcUIscUJBSmxCO0FBS0gsb0JBQWM7QUFMWCxLQURDO0FBUU5rRSxTQUFLO0FBQ0hxQyxjQUFRO0FBQ04sMEJBQWtCLFFBRFo7QUFFTix1QkFBZTtBQUZULE9BREw7QUFLSHBDLGFBQU87QUFDTCwwQkFBa0I7QUFEYjtBQUxKO0FBUkMsR0FGSztBQXFCYnFDLG1CQUFpQixLQXJCSjtBQXVCYi9ELFVBdkJhLHNCQXVCRjtBQUNULFNBQUtrQixNQUFMO0FBQ0QsR0F6Qlk7QUEwQmJBLFFBMUJhLG9CQTBCSjtBQUFBOztBQUNQekMsWUFBUUMsT0FBUixDQUFnQkMsSUFBaEIsQ0FBcUJDLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxtQkFBVztBQUN6QyxVQUFJSCxXQUFXQSxRQUFRSSxRQUFuQixLQUFnQyxDQUFDSixRQUFRQyxJQUFULElBQWlCRCxRQUFRQyxJQUFSLENBQWFHLFFBQTlELENBQUosRUFBNkU7QUFDM0UsY0FBS2lGLGVBQUwsR0FBdUJyRixRQUFRSSxRQUFSLENBQWlCa0YsSUFBakIsQ0FBc0JDLFVBQXRCLEtBQXFDLE1BQTVEO0FBQ0EsZUFBT3ZGLFFBQVFJLFFBQVIsQ0FBaUJnQixPQUF4QjtBQUNEOztBQUNELGFBQU9yQixRQUFRQyxPQUFSLENBQWdCd0YsS0FBaEIsQ0FBc0J0RixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsbUJBQVc7QUFDakQsWUFBSUgsV0FBV0EsUUFBUUksUUFBbkIsSUFBK0JKLFFBQVFDLElBQXZDLElBQStDLENBQUNELFFBQVFDLElBQVIsQ0FBYUcsUUFBakUsRUFBMkU7QUFDekUsZ0JBQUtpRixlQUFMLEdBQXVCckYsUUFBUUksUUFBUixDQUFpQmtGLElBQWpCLENBQXNCQyxVQUF0QixLQUFxQyxNQUE1RDtBQUNBLGlCQUFPdkYsUUFBUUksUUFBUixDQUFpQmdCLE9BQXhCO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0QsS0FaRCxFQWFDakIsSUFiRCxDQWFNLG1CQUFXO0FBQ2YsVUFBSSxDQUFDaUIsT0FBTCxFQUFjLE9BQU8sS0FBUDtBQUNkLFVBQU1xRSxnQkFBZ0I5RCxTQUFTQyxjQUFULENBQXdCLHlCQUF4QixDQUF0QjtBQUNBLFVBQU04RCxpQkFBaUIvRCxTQUFTQyxjQUFULENBQXdCLDBCQUF4QixDQUF2QjtBQUNBLFVBQU0rRCxZQUFZaEUsU0FBU2lFLHNCQUFULEVBQWxCO0FBQ0EsVUFBTUMsV0FBV2xFLFNBQVNpRSxzQkFBVCxFQUFqQjtBQUNBLFVBQU1FLElBQUlDLEtBQUtDLElBQUwsQ0FBVUMsT0FBT0MsSUFBUCxDQUFZOUUsT0FBWixFQUFxQitFLE1BQXJCLEdBQThCLENBQXhDLENBQVY7QUFDQSxVQUFJQyxRQUFRLENBQVo7QUFBQSxVQUFlQyxDQUFmO0FBQUEsVUFBa0JDLEdBQWxCO0FBQUEsVUFBdUJDLEtBQXZCO0FBQUEsVUFBOEJDLFdBQTlCO0FBQUEsVUFBMkNDLE1BQTNDO0FBQUEsVUFBbURDLEtBQW5EO0FBQUEsVUFBMERDLEtBQTFEO0FBQUEsVUFBaUVDLEVBQWpFO0FBQUEsVUFBcUVDLE9BQXJFO0FBQUEsVUFBOEVDLE1BQTlFO0FBRUFyQixvQkFBYzVDLFNBQWQsR0FBMEIsRUFBMUI7QUFDQTZDLHFCQUFlN0MsU0FBZixHQUEyQixFQUEzQjs7QUFFQSxXQUFLd0QsQ0FBTCxJQUFVakYsT0FBVixFQUFtQjtBQUNqQmdGO0FBRUFFLGNBQU0zRSxTQUFTb0YsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ0FSLGdCQUFRNUUsU0FBU29GLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBUCxzQkFBYzdFLFNBQVNvRixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQU4saUJBQVM5RSxTQUFTb0YsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FKLGdCQUFRaEYsU0FBU29GLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUjtBQUNBSCxhQUFLakYsU0FBU29GLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBTDtBQUNBRixrQkFBVWxGLFNBQVNvRixhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQUQsaUJBQVNuRixTQUFTb0YsYUFBVCxDQUF1QixNQUF2QixDQUFUO0FBQ0FMLGdCQUFRLE1BQUtNLGNBQUwsQ0FBb0I1RixRQUFRaUYsQ0FBUixFQUFXWSxLQUEvQixDQUFSO0FBRUFYLFlBQUlZLFNBQUosR0FBZ0IsYUFBaEI7QUFDQVgsY0FBTVcsU0FBTixHQUFrQixlQUFsQjtBQUNBWCxjQUFNWSxFQUFOLEdBQVcsWUFBWWQsQ0FBdkI7QUFDQUUsY0FBTTVELElBQU4sR0FBYTBELENBQWI7QUFDQUUsY0FBTXZCLElBQU4sR0FBYSxPQUFiO0FBQ0F1QixjQUFNYSxLQUFOLEdBQWNWLEtBQWQ7QUFDQUYsb0JBQVlVLFNBQVosR0FBd0IsY0FBeEI7QUFDQVYsb0JBQVk5QyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDdEMsUUFBUWlGLENBQVIsRUFBV1ksS0FBN0M7QUFDQVQsb0JBQVk5QyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLFlBQVkyQyxDQUE1QztBQUNBSSxlQUFPUyxTQUFQLEdBQW1CLGVBQW5CO0FBQ0FULGVBQU8vQyxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0ErQyxlQUFPL0MsWUFBUCxDQUFvQixVQUFwQixFQUFnQzJDLENBQWhDO0FBQ0FNLGNBQU1PLFNBQU4sR0FBa0IsZ0JBQWxCO0FBQ0FOLFdBQUdNLFNBQUgsR0FBZSxZQUFmO0FBQ0FOLFdBQUdsRCxZQUFILENBQWdCLFVBQWhCLEVBQTRCMkMsQ0FBNUI7QUFDQU8sV0FBRzVCLElBQUgsR0FBVSxPQUFWO0FBQ0E0QixXQUFHTyxFQUFILEdBQVEsaUJBQWlCZCxDQUF6QjtBQUNBTyxXQUFHakUsSUFBSCxHQUFVLFdBQVY7QUFDQWtFLGdCQUFRSyxTQUFSLEdBQW9CLFNBQXBCO0FBQ0FMLGdCQUFRbkQsWUFBUixDQUFxQixLQUFyQixFQUE0QixpQkFBaUIyQyxDQUE3QztBQUNBUyxlQUFPTyxXQUFQLEdBQXFCQyxPQUFPQyxZQUFQLENBQW9CLE1BQXBCLENBQXJCO0FBRUFWLGdCQUFRVyxXQUFSLENBQW9CVixNQUFwQjtBQUNBSCxjQUFNYSxXQUFOLENBQWtCWixFQUFsQjtBQUNBRCxjQUFNYSxXQUFOLENBQWtCWCxPQUFsQjtBQUVBUCxZQUFJa0IsV0FBSixDQUFnQmYsTUFBaEI7QUFDQUgsWUFBSWtCLFdBQUosQ0FBZ0JiLEtBQWhCO0FBQ0FMLFlBQUlrQixXQUFKLENBQWdCakIsS0FBaEI7QUFDQUQsWUFBSWtCLFdBQUosQ0FBZ0JoQixXQUFoQjs7QUFFQSxZQUFJSixRQUFRLENBQVIsSUFBYUEsUUFBUU4sQ0FBekIsRUFBNEI7QUFDMUJELG1CQUFTMkIsV0FBVCxDQUFxQmxCLEdBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xYLG9CQUFVNkIsV0FBVixDQUFzQmxCLEdBQXRCO0FBQ0Q7O0FBRURELFlBQUlBLEVBQUVvQixXQUFGLEVBQUo7QUFDQXBCLFlBQUlBLE1BQU0sT0FBTixHQUFnQmlCLE9BQU9DLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBaEIsR0FBOENsQixDQUFsRDtBQUNBRyxvQkFBWTNELFNBQVosR0FBd0J3RCxDQUF4QjtBQUNBLFlBQUksQ0FBQ0ssS0FBTCxFQUFZSCxNQUFNN0MsWUFBTixDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUNiOztBQUNEZ0MscUJBQWU4QixXQUFmLENBQTJCN0IsU0FBM0I7QUFDQUYsb0JBQWMrQixXQUFkLENBQTBCM0IsUUFBMUI7O0FBRUEsVUFBSSxNQUFLUixlQUFULEVBQTBCO0FBQ3hCLGNBQUs5QyxFQUFMLENBQVFULFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCOztBQUNBSixpQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5QzhGLE9BQXpDLEdBQW1ELElBQW5EO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsY0FBS25GLEVBQUwsQ0FBUVQsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsTUFBekI7QUFDRDtBQUNGLEtBekZEO0FBMEZELEdBckhZO0FBc0hiZ0YsZ0JBdEhhLDBCQXNIRVcsTUF0SEYsRUFzSFU7QUFDckIsUUFBSUMsUUFBUUQsT0FBT0MsS0FBUCxDQUFhLEdBQWIsQ0FBWjtBQUFBLFFBQ0lDLElBQUlELE1BQU16QixNQURkO0FBQUEsUUFFSU8sUUFBUSxFQUZaO0FBQUEsUUFHSW9CLElBQUksQ0FIUjtBQUFBLFFBSUliLEtBSko7O0FBTUEsV0FBT2EsSUFBSUQsQ0FBWCxFQUFjQyxHQUFkLEVBQW1CO0FBQ2pCYixjQUFRVyxNQUFNRSxDQUFOLENBQVI7O0FBQ0EsVUFBSWIsTUFBTWMsUUFBTixDQUFlLGtCQUFmLENBQUosRUFBd0M7QUFDdENyQixnQkFBUU8sTUFBTVcsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBUjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPbEIsS0FBUDtBQUNELEdBcklZO0FBc0lidEIsUUF0SWEsa0JBc0lOdEIsQ0F0SU0sRUFzSUh2QixFQXRJRyxFQXNJQztBQUNaLFNBQUs1QyxJQUFMLENBQVUsbUJBQVYsRUFBK0I0QyxHQUFHSSxJQUFsQyxFQUF3Q0osR0FBRzZFLEtBQTNDO0FBQ0QsR0F4SVk7QUF5SWJZLFFBeklhLGtCQXlJTmxFLENBeklNLEVBeUlIdkIsRUF6SUcsRUF5SUM7QUFDWixTQUFLNUMsSUFBTCxDQUFVLHlCQUFWLEVBQXFDNEMsR0FBR2dDLFlBQUgsQ0FBZ0IsVUFBaEIsQ0FBckMsRUFBa0U7QUFBRWhELFdBQUs7QUFBUCxLQUFsRTtBQUNELEdBM0lZO0FBNEliMEcsWUE1SWEsc0JBNElGbkUsQ0E1SUUsRUE0SUN2QixFQTVJRCxFQTRJSztBQUNoQixRQUFJQSxHQUFHVCxTQUFILENBQWFpQyxRQUFiLENBQXNCLFVBQXRCLENBQUosRUFBdUM7QUFDdkMsU0FBS3BFLElBQUwsQ0FBVSxtQkFBVixFQUErQjRDLEdBQUdnQyxZQUFILENBQWdCLFVBQWhCLENBQS9CLEVBQTREO0FBQUVoRCxXQUFLO0FBQVAsS0FBNUQ7QUFDRCxHQS9JWTtBQWdKYjJHLHFCQWhKYSwrQkFnSk9DLElBaEpQLEVBZ0phO0FBQ3hCLFFBQUksS0FBSzlDLGVBQVQsRUFBMEI7QUFDMUIsUUFBTXpFLE9BQU91SCxPQUFPLGlCQUFQLEdBQTJCLGNBQXhDO0FBQ0E1SSxVQUFNa0YsSUFBTixDQUFXOUMsU0FBU2lCLHNCQUFULENBQWdDLGVBQWhDLENBQVgsRUFBNkRtQyxPQUE3RCxDQUFxRTtBQUFBLGFBQU9FLElBQUlyRSxJQUFKLEVBQVUsVUFBVixFQUFzQixJQUF0QixDQUFQO0FBQUEsS0FBckU7QUFDRCxHQXBKWTtBQXFKYnVELGFBckphLHVCQXFKREMsS0FySkMsRUFxSk07QUFDakIsU0FBSzhELG1CQUFMLENBQXlCOUQsTUFBTWdFLFNBQS9CO0FBQ0Q7QUF2SlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBSTlGLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCw2QkFBdUIsWUFEcEI7QUFFSCxzQkFBZ0IsUUFGYjtBQUdILDhCQUF5QjtBQUh0QixLQURDO0FBTU5rRSxTQUFLO0FBQ0hDLGFBQU87QUFDTCx1QkFBZSxVQURWO0FBRUwsMkJBQW1CLFlBRmQ7QUFHTCwrQkFBdUI7QUFIbEIsT0FESjtBQU1Ib0MsY0FBUTtBQUNOLHVCQUFlO0FBRFQ7QUFOTDtBQU5DLEdBRks7QUFvQmJpRCxTQUFPLEVBcEJNO0FBcUJiQyxXQUFTLElBckJJO0FBc0JibkMsVUFBUSxDQXRCSztBQXVCYm9DLFdBQVMsQ0FBQyxDQXZCRztBQXdCYkMsY0FBWSxLQXhCQztBQXlCYkMsYUFBVztBQUFFLFNBQUssQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFQO0FBQXVCLFNBQUssQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUE1QjtBQUEyQyxTQUFLLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBaEQ7QUFBK0QsU0FBSyxDQUFDLElBQUQsRUFBTyxJQUFQO0FBQXBFLEdBekJFO0FBMkJiakcsUUEzQmEsb0JBMkJKO0FBQ1AsUUFBTXJELFFBQVEsS0FBS0EsS0FBTCxHQUFhK0MsZUFBTy9DLEtBQWxDOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUNULFdBQUt1SixRQUFMO0FBQ0EsVUFBSSxDQUFDLEtBQUtGLFVBQVYsRUFBc0IsS0FBS0csZ0JBQUw7QUFDdEIsV0FBS0MsVUFBTDtBQUNEO0FBQ0YsR0FsQ1k7QUFtQ2JGLFVBbkNhLHNCQW1DRjtBQUNULFFBQU12SixRQUFRLEtBQUtBLEtBQW5CO0FBQ0EsUUFBSWtKLFFBQVEsRUFBWjs7QUFDQSxRQUFJOUksTUFBTUMsT0FBTixDQUFjTCxLQUFkLENBQUosRUFBMEI7QUFDeEJBLFlBQU00RixPQUFOLENBQWM7QUFBQSxlQUFLc0QsUUFBUUEsTUFBTVEsTUFBTixDQUFhL0UsRUFBRXVFLEtBQWYsQ0FBYjtBQUFBLE9BQWQ7QUFDRCxLQUZELE1BRU87QUFDTEEsY0FBUWxKLE1BQU1rSixLQUFkO0FBQ0Q7O0FBQ0QsUUFBTUMsVUFBVSxLQUFLQSxPQUFyQixDQVJTLENBU1Q7QUFDQTs7QUFDQSxTQUFLRCxLQUFMLEdBQWFDLFVBQ1hBLFFBQVFRLEdBQVIsQ0FBWTtBQUFBLGFBQU1ULE1BQU1VLElBQU4sQ0FBVztBQUFBLGVBQVFDLEtBQUs3QixFQUFMLElBQVdBLEVBQW5CO0FBQUEsT0FBWCxDQUFOO0FBQUEsS0FBWixDQURXLEdBRVhrQixLQUZGO0FBR0EsU0FBS2xDLE1BQUwsR0FBYyxLQUFLa0MsS0FBTCxDQUFXbEMsTUFBekI7QUFDRCxHQWxEWTtBQW1EYjhDLFlBbkRhLHNCQW1ERkMsR0FuREUsRUFtREc7QUFDZCxTQUFLWixPQUFMLEdBQWVZLEdBQWY7QUFDQSxTQUFLMUcsTUFBTDtBQUNELEdBdERZO0FBdURibUcsa0JBdkRhLDhCQXVETTtBQUNqQixRQUFNUSxPQUFPeEgsU0FBU3dILElBQXRCO0FBQ0EsUUFBTUMsT0FBT3pILFNBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWI7QUFDQSxRQUFNeUgsU0FBUyxFQUFmO0FBQ0EsUUFBSXZCLENBQUosRUFBT3dCLENBQVA7O0FBQ0EsU0FBS3hCLENBQUwsSUFBVXlCLHdCQUFVQyxXQUFwQixFQUFpQztBQUM5QkYsVUFBSUMsd0JBQVVDLFdBQVYsQ0FBc0IxQixDQUF0QixDQUFKO0FBQ0R1QixhQUFPdkIsRUFBRTJCLFdBQUYsRUFBUCxJQUEwQixhQUFhLEtBQUtDLFVBQUwsQ0FBZ0JKLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFoQixDQUFiLEdBQThDLFdBQTlDLEdBQTRELEtBQUtELFVBQUwsQ0FBZ0JKLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFoQixDQUE1RCxHQUE2RixXQUE3RixHQUEyRyxLQUFLRCxVQUFMLENBQWdCSixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBaEIsQ0FBM0csR0FBNEksWUFBdEs7QUFDRDs7QUFDRCxRQUFJQyxNQUFKOztBQUNBLFNBQUs5QixDQUFMLElBQVV1QixNQUFWLEVBQWtCO0FBQ2hCTyxlQUFTUixLQUFLUyxTQUFMLENBQWUsSUFBZixDQUFUO0FBQ0FELGFBQU9sRixvQkFBUCxDQUE0QixRQUE1QixFQUFzQyxDQUF0QyxFQUF5Q3lDLEVBQXpDLEdBQThDLGFBQWFXLENBQTNEO0FBQ0E4QixhQUFPbEYsb0JBQVAsQ0FBNEIsZUFBNUIsRUFBNkMsQ0FBN0MsRUFBZ0RoQixZQUFoRCxDQUE2RCxRQUE3RCxFQUF1RTJGLE9BQU92QixDQUFQLENBQXZFO0FBQ0FxQixXQUFLM0IsV0FBTCxDQUFpQm9DLE1BQWpCO0FBQ0Q7O0FBQ0QsU0FBS3BCLFVBQUwsR0FBa0IsSUFBbEI7QUFDRCxHQXhFWTtBQXlFYmtCLFlBekVhLHNCQXlFRkksR0F6RUUsRUF5RUc7QUFDZCxXQUFPLENBQUUsS0FBS0MsT0FBTyxPQUFPRCxJQUFJLENBQUosQ0FBZCxDQUFOLEdBQStCQyxPQUFPLE9BQU9ELElBQUksQ0FBSixDQUFkLENBQWhDLElBQXlELEdBQWhFO0FBQ0QsR0EzRVk7QUE0RWJsQixZQTVFYSx3QkE0RUE7QUFDWCxRQUFNb0IsV0FBV3JJLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBakI7QUFDQSxRQUFNcUksV0FBV3RJLFNBQVNpRSxzQkFBVCxFQUFqQjtBQUNBLFFBQU1zRSxpQkFBaUJ2SSxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQXZCO0FBQ0EsUUFBSXVJLGFBQUo7QUFFQUQsbUJBQWVySCxTQUFmLEdBQTJCLEVBQTNCO0FBRUEsU0FBS3dGLEtBQUwsQ0FBV3RELE9BQVgsQ0FBbUIsVUFBQ2lFLElBQUQsRUFBT2xCLENBQVAsRUFBYTtBQUM5QixVQUFJa0IsSUFBSixFQUFVO0FBQ1JtQix3QkFBZ0JILFNBQVNILFNBQVQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQU0sc0JBQWNoRCxFQUFkLEdBQW1CLEVBQW5CO0FBQ0FnRCxzQkFBY3JJLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBbUksc0JBQWN6RyxZQUFkLENBQTJCLFNBQTNCLEVBQXNDb0UsQ0FBdEM7QUFFQSxZQUFNc0MsV0FBV0QsY0FBY3ZILHNCQUFkLENBQXFDLFlBQXJDLEVBQW1ELENBQW5ELENBQWpCO0FBQ0EsWUFBTXlFLGNBQWMxRixTQUFTMEksY0FBVCxDQUF3QnJCLEtBQUtzQixJQUE3QixDQUFwQjtBQUNBLFlBQUk1RCxRQUFRc0MsS0FBSy9CLEtBQUwsQ0FBV3NELE9BQVgsQ0FBbUIsa0JBQW5CLENBQVo7QUFDQSxZQUFJQyxVQUFVeEIsS0FBS3lCLElBQUwsS0FBYyxPQUFPekIsS0FBS3lCLElBQVosS0FBcUIsUUFBckIsSUFBaUN6QixLQUFLeUIsSUFBTCxDQUFVSCxJQUF6RCxDQUFkO0FBQ0E1RCxnQkFBUUEsVUFBVSxDQUFDLENBQVgsR0FBZSxhQUFmLEdBQStCc0MsS0FBSy9CLEtBQUwsQ0FBVzBDLE1BQVgsQ0FBa0JqRCxRQUFRLEVBQTFCLEVBQThCLENBQTlCLENBQXZDO0FBQ0EsWUFBSStELElBQUosRUFBVUMsU0FBVixFQUFxQkMsUUFBckIsRUFBK0JDLE9BQS9CLEVBQXdDQyxRQUF4QztBQUVBVCxpQkFBU25ELEtBQVQsQ0FBZTZELFdBQWYsR0FBNkJwRSxLQUE3QjtBQUNBMEQsaUJBQVM1QyxXQUFULENBQXFCSCxXQUFyQjs7QUFFQSxZQUFJbUQsT0FBSixFQUFhO0FBQ1hDLGlCQUFPekIsS0FBS3lCLElBQVo7QUFDQUMsc0JBQVlELEtBQUsvRCxLQUFMLElBQWMsUUFBMUI7QUFDQWlFLHFCQUFXRixLQUFLSCxJQUFMLElBQWFHLElBQXhCO0FBQ0FOLHdCQUFjckksU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsWUFBNUI7QUFDQTZJLG9CQUFVVCxjQUFjdkgsc0JBQWQsQ0FBcUMsZ0JBQXJDLEVBQXVELENBQXZELENBQVY7QUFDQWdJLGtCQUFROUksU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0E0SSxrQkFBUTlJLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHFCQUFxQjJJLFNBQTNDO0FBQ0FHLHFCQUFXVixjQUFjdkgsc0JBQWQsQ0FBcUMsWUFBckMsRUFBbUQsQ0FBbkQsQ0FBWDtBQUNBaUksbUJBQVNyRCxXQUFULENBQXFCN0YsU0FBUzBJLGNBQVQsQ0FBd0JNLFFBQXhCLENBQXJCO0FBQ0FFLG1CQUFTL0ksU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsaUJBQTFCO0FBQ0E2SSxtQkFBUy9JLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGlCQUFpQjJJLFNBQXhDO0FBQ0Q7O0FBQ0RULGlCQUFTekMsV0FBVCxDQUFxQjJDLGFBQXJCO0FBQ0Q7QUFDRixLQWhDRDtBQWlDQUQsbUJBQWUxQyxXQUFmLENBQTJCeUMsUUFBM0I7QUFDRCxHQXRIWTtBQXVIYmMsS0F2SGEsZUF1SFRqSCxDQXZIUyxFQXVITnZCLEVBdkhNLEVBdUhGO0FBQ1QsUUFBTXlJLE1BQU0sSUFBSXpJLEdBQUdnQyxZQUFILENBQWdCLFlBQWhCLENBQWhCO0FBQ0EsU0FBS2dFLE9BQUwsSUFBZ0J5QyxHQUFoQjtBQUNBLFFBQUksS0FBS3pDLE9BQUwsSUFBZ0IsS0FBS3BDLE1BQXpCLEVBQWlDLEtBQUtvQyxPQUFMLEdBQWUsQ0FBZixDQUFqQyxLQUNLLElBQUksS0FBS0EsT0FBTCxHQUFlLENBQW5CLEVBQXNCLEtBQUtBLE9BQUwsR0FBZSxLQUFLcEMsTUFBTCxHQUFjLENBQTdCO0FBQzNCLFNBQUs4RSxnQkFBTDtBQUNELEdBN0hZO0FBOEhiQSxrQkE5SGEsNEJBOEhJOUQsRUE5SEosRUE4SFE7QUFDbkIsUUFBSSxPQUFPQSxFQUFQLEtBQWMsUUFBbEIsRUFBNEIsS0FBS29CLE9BQUwsR0FBZXBCLEVBQWY7QUFDNUIsUUFBTStELGNBQWMsS0FBSzNJLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsY0FBL0IsRUFBK0MsQ0FBL0MsQ0FBcEI7QUFDQSxRQUFJc0ksV0FBSixFQUFpQkEsWUFBWXBKLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLGNBQTdCO0FBQ2pCTCxhQUFTd0osYUFBVCxDQUF1QixrQkFBa0IsQ0FBQyxLQUFLNUMsT0FBTixDQUFsQixHQUFtQyxJQUExRCxFQUFnRXpHLFNBQWhFLENBQTBFQyxHQUExRSxDQUE4RSxjQUE5RTtBQUNBLFNBQUtwQyxJQUFMLENBQVUsbUJBQVYsRUFBK0IsS0FBSzRJLE9BQXBDLEVBQTZDO0FBQUVoSCxXQUFLO0FBQVAsS0FBN0M7QUFDRCxHQXBJWTtBQXFJYnNELFVBcklhLG9CQXFJSmYsQ0FySUksRUFxSUR2QixFQXJJQyxFQXFJRztBQUNkWixhQUFTQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDd0YsS0FBdEMsR0FBOEMsQ0FBOUM7QUFDQTdFLE9BQUdULFNBQUgsQ0FBYU0sTUFBYixDQUFvQixVQUFwQjtBQUNBLFNBQUs2SSxnQkFBTCxDQUFzQixJQUFFMUksR0FBR3lCLFVBQUgsQ0FBY0EsVUFBZCxDQUF5Qk8sWUFBekIsQ0FBc0MsU0FBdEMsQ0FBeEI7QUFDRCxHQXpJWTtBQTBJYjZHLFVBMUlhLG9CQTBJSnRILENBMUlJLEVBMElEdkIsRUExSUMsRUEwSUc7QUFDZCxRQUFNOEksTUFBTTlJLEdBQUc2RSxLQUFmOztBQUNBLFFBQUlpRSxPQUFPLENBQVgsRUFBYztBQUNaLFVBQU1oRCxRQUFRMUcsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsVUFBTTBKLGlCQUFpQixLQUFLN0MsU0FBTCxDQUFlNEMsR0FBZixDQUF2QjtBQUVBLFdBQUtqSixNQUFMLENBQVksTUFBWixFQUFvQmtKLGVBQWUsQ0FBZixDQUFwQjtBQUNBLFdBQUtsSixNQUFMLENBQVksTUFBWixFQUFvQmtKLGVBQWUsQ0FBZixDQUFwQjtBQUNEO0FBQ0YsR0FuSlk7QUFvSmJDLFlBcEphLHNCQW9KRnpILENBcEpFLEVBb0pDdkIsRUFwSkQsRUFvSks7QUFDaEJaLGFBQVNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0N3RixLQUF0QyxHQUE4QyxDQUE5QztBQUNBN0UsT0FBR3lCLFVBQUgsQ0FBY3BCLHNCQUFkLENBQXFDLFlBQXJDLEVBQW1ELENBQW5ELEVBQXNEZCxTQUF0RCxDQUFnRU0sTUFBaEUsQ0FBdUUsVUFBdkU7QUFDRCxHQXZKWTtBQXdKYkEsUUF4SmEsa0JBd0pONEMsSUF4Sk0sRUF3SkFtRCxJQXhKQSxFQXdKTTtBQUNqQixRQUFNdkgsT0FBT3VILE9BQU8sS0FBUCxHQUFlLFFBQTVCO0FBQ0E1SSxVQUFNa0YsSUFBTixDQUFXLEtBQUtsQyxFQUFMLENBQVFLLHNCQUFSLENBQStCLFdBQVdvQyxJQUExQyxDQUFYLEVBQ0dELE9BREgsQ0FDVztBQUFBLGFBQU14QyxHQUFHVCxTQUFILENBQWFsQixJQUFiLEVBQW1CLFVBQW5CLENBQU47QUFBQSxLQURYO0FBRUQ7QUE1SlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUNBOzs7O0FBRUEsSUFBSTBCLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCxzQkFBZ0IsUUFEYjtBQUVILDhCQUF3QjtBQUZyQjtBQURDLEdBRks7QUFTYjJELFFBVGEsa0JBU05yRCxLQVRNLEVBU0M7QUFDWixRQUFJQSxTQUFTLENBQUNJLE1BQU1DLE9BQU4sQ0FBY0wsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDLFVBQU1xTSxNQUFNekwsUUFBUTBMLElBQVIsQ0FBYUMsVUFBYixDQUF3QixLQUF4QixDQUFaO0FBQ0EsVUFBTUMsS0FBSzVMLFFBQVEwTCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsSUFBeEIsQ0FBWDtBQUVBL0osZUFBU0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENpQixTQUE5QyxHQUEwRDFELE1BQU1rSixLQUFOLENBQVlsQyxNQUF0RTtBQUNBeEUsZUFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q2lCLFNBQXpDLEdBQXFELEtBQUsrSSxrQkFBTCxDQUF3QixJQUFJQyxJQUFKLENBQVMxTSxNQUFNMk0sS0FBZixFQUFzQkMsY0FBdEIsRUFBeEIsQ0FBckQ7QUFDQXBLLGVBQVNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDaUIsU0FBL0MsR0FBMkQsS0FBSytJLGtCQUFMLENBQXdCLElBQUlDLElBQUosQ0FBUzFNLE1BQU02TSxJQUFmLEVBQXFCRCxjQUFyQixFQUF4QixDQUEzRDtBQUVBLE9BQUMsUUFBRCxFQUFXLE9BQVgsRUFDR2hILE9BREgsQ0FDVztBQUFBLGVBQVNwRCxTQUFTQyxjQUFULENBQXdCLFdBQVdyQixLQUFuQyxFQUEwQ3NDLFNBQTFDLEdBQXNEMUQsTUFBTW9CLEtBQU4sSUFBZWlMLEdBQWYsR0FBcUJHLEVBQXBGO0FBQUEsT0FEWDtBQUVEO0FBQ0YsR0FyQlk7QUF1QmJDLG9CQXZCYSw4QkF1Qk1LLElBdkJOLEVBdUJZO0FBQ3ZCLFdBQVFBLEtBQ0xDLE9BREssQ0FDRyxpQkFESCxFQUNzQixVQUFDN0YsQ0FBRCxFQUFJOEYsQ0FBSixFQUFPQyxDQUFQO0FBQUEsYUFBWSxNQUFNRCxDQUFOLEdBQVVDLENBQXRCO0FBQUEsS0FEdEIsRUFFTEYsT0FGSyxDQUVHLHNCQUZILEVBRTJCLFVBQUM3RixDQUFELEVBQUk4RixDQUFKLEVBQU9DLENBQVA7QUFBQSxhQUFhRCxJQUFJLEdBQUosR0FBVUMsQ0FBdkI7QUFBQSxLQUYzQixDQUFSO0FBR0Q7QUEzQlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7O0FBRUEsSUFBSTlKLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixjQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCx3QkFBa0Isa0JBRGY7QUFFSCwwQkFBb0Isb0JBRmpCO0FBR0gsb0JBQWMsZUFIWDtBQUlILDJCQUFxQixpQkFKbEI7QUFLSCxvQkFBYyxhQUxYO0FBTUgscUJBQWU7QUFOWixLQURDO0FBU05rRSxTQUFLO0FBQ0hDLGFBQU87QUFDTCxnQ0FBd0I7QUFEbkI7QUFESjtBQVRDLEdBRks7QUFrQmJxSixrQkFsQmEsOEJBa0JNO0FBQ2pCLFNBQUt4SCxRQUFMLENBQWMsUUFBZCxFQUF3QixJQUF4QjtBQUNELEdBcEJZO0FBcUJieUgsb0JBckJhLGdDQXFCUTtBQUNuQixTQUFLekgsUUFBTCxDQUFjLFFBQWQsRUFBd0IsS0FBeEI7QUFDRCxHQXZCWTtBQXdCYjBILGVBeEJhLDJCQXdCRztBQUNkLFNBQUsxSCxRQUFMLENBQWMsT0FBZCxFQUF1QixJQUF2QjtBQUNELEdBMUJZO0FBMkJiMkgsaUJBM0JhLDZCQTJCSztBQUNoQixTQUFLM0gsUUFBTCxDQUFjLE9BQWQsRUFBdUIsS0FBdkI7QUFDRCxHQTdCWTtBQThCYkEsVUE5QmEsb0JBOEJKRyxJQTlCSSxFQThCRXZELEVBOUJGLEVBOEJNO0FBQ2pCLFFBQU13RCxNQUFNdEQsU0FBU0MsY0FBVCxDQUF3QixrQkFBa0JvRCxJQUExQyxDQUFaOztBQUNBLFFBQUl2RCxFQUFKLEVBQVE7QUFDTndELFVBQUl4QixlQUFKLENBQW9CLFVBQXBCO0FBQ0F3QixVQUFJakIsVUFBSixDQUFlbEMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDRCxLQUhELE1BSUs7QUFDSGlELFVBQUl2QixZQUFKLENBQWlCLFVBQWpCLEVBQTZCLElBQTdCO0FBQ0F1QixVQUFJakIsVUFBSixDQUFlbEMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBN0I7QUFDRDtBQUNGLEdBeENZO0FBeUNiMEssWUF6Q2Esc0JBeUNGM0ksQ0F6Q0UsRUF5Q0N2QixFQXpDRCxFQXlDSztBQUNoQixTQUFLNUMsSUFBTCxDQUFVLGFBQWE0QyxHQUFHZ0MsWUFBSCxDQUFnQixhQUFoQixDQUF2QixFQUF1RDtBQUFFaEQsV0FBSztBQUFQLEtBQXZEO0FBQ0QsR0EzQ1k7QUE0Q2I0QyxhQTVDYSx1QkE0Q0RDLEtBNUNDLEVBNENNO0FBQ2pCLFFBQUlBLE1BQU1jLFFBQVYsRUFBb0IsS0FBS21ILGdCQUFMO0FBQ3JCLEdBOUNZO0FBK0NiSyxjQS9DYSx3QkErQ0FDLEtBL0NBLEVBK0NPO0FBQ2xCLFFBQUlBLEtBQUosRUFBVyxLQUFLSixhQUFMO0FBQ1o7QUFqRFksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBOzs7O0FBRUEsSUFBSWpLLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCwyQkFBcUI7QUFEbEIsS0FEQztBQUlOa0UsU0FBSztBQUNIQyxhQUFPO0FBQ0wscUJBQWEsU0FEUjtBQUVMLHVCQUFlLGFBRlY7QUFHTCwyQkFBbUIsZUFIZDtBQUlMLHdCQUFnQixZQUpYO0FBS0wsMEJBQWtCLFlBTGI7QUFNTCxzQkFBYztBQU5ULE9BREo7QUFTSG9DLGNBQVE7QUFDTiw0QkFBb0I7QUFEZDtBQVRMO0FBSkMsR0FGSztBQW9CYnVILFNBQU8sRUFwQk07QUFxQmJDLFdBQVMsRUFyQkk7QUFzQmJ6RixNQUFJLENBdEJTO0FBdUJiMEYsZ0JBQWMsUUF2QkQ7QUF5QmJ2TCxVQXpCYSxzQkF5QkY7QUFDVCxTQUFLa0IsTUFBTDtBQUNELEdBM0JZO0FBNkJiQSxRQTdCYSxvQkE2Qko7QUFBQTs7QUFDUCxTQUFLM0MsTUFBTDtBQUNBLGtDQUFrQk0sSUFBbEIsQ0FBdUIsZUFBTztBQUM1QixVQUFNMk0sTUFBTSxNQUFLQSxHQUFMLEdBQVd2TCxJQUFJdUwsR0FBM0I7O0FBQ0E1SyxxQkFBT2hDLEdBQVAsQ0FBVyxXQUFYLEVBQXdCQyxJQUF4QixDQUE2QixxQkFBYTtBQUN4Q0csb0JBQVlBLGFBQWFBLFVBQVV3TSxHQUFWLENBQWIsR0FBOEJ4TSxVQUFVd00sR0FBVixDQUE5QixHQUErQyxJQUEzRDtBQUNBLFlBQUlqRixDQUFKLEVBQU9WLEVBQVA7O0FBQ0EsWUFBSTdHLGNBQWN1SCxJQUFJdkgsVUFBVTZGLE1BQTVCLENBQUosRUFBeUM7QUFDdkMsZ0JBQUt3RyxLQUFMLEdBQWFyTSxTQUFiOztBQUNBLGlCQUFPdUgsR0FBUCxFQUFZO0FBQ1ZWLGlCQUFLLE1BQUs0RixPQUFMLENBQWF6TSxVQUFVdUgsQ0FBVixDQUFiLENBQUw7QUFDQSxrQkFBS1YsRUFBTCxHQUFVcEIsS0FBS2lILEdBQUwsQ0FBUyxNQUFLN0YsRUFBZCxFQUFrQkEsRUFBbEIsQ0FBVjtBQUNEO0FBQ0Y7QUFDRixPQVZELEVBV0doSCxJQVhILENBV1EsWUFBTTtBQUNWLGNBQUs4TSxZQUFMLENBQWtCLENBQUMsQ0FBQyxNQUFLTixLQUFMLENBQVd4RyxNQUEvQjs7QUFDQSxjQUFLK0csV0FBTCxDQUFpQixJQUFqQixFQUF1QnZMLFNBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBQ0QsT0FkSDtBQWVELEtBakJEO0FBa0JELEdBakRZO0FBa0RieUIsTUFsRGEsZ0JBa0RSUyxDQWxEUSxFQWtETHZCLEVBbERLLEVBa0REO0FBQ1YsUUFBSUEsRUFBSixFQUFRO0FBQ04sVUFBTWtJLE9BQU8sS0FBSzBDLE9BQUwsQ0FBYTVLLEdBQUdnQyxZQUFILENBQWdCLFNBQWhCLENBQWIsQ0FBYjtBQUNBa0csV0FBS0gsSUFBTCxHQUFZL0gsR0FBRzZLLGVBQUgsQ0FBbUJoRyxLQUEvQjtBQUNBcUQsV0FBSzlILElBQUwsR0FBWUosR0FBR3lCLFVBQUgsQ0FBY3BCLHNCQUFkLENBQXFDLGdCQUFyQyxFQUF1RCxDQUF2RCxFQUEwRHdFLEtBQXRFO0FBQ0Q7O0FBQ0QsU0FBS3pILElBQUwsQ0FBVSxtQkFBVixFQUErQixLQUFLbU4sR0FBcEMsRUFBeUMsS0FBS0gsS0FBOUM7QUFDRCxHQXpEWTtBQTBEYjlNLFFBMURhLG9CQTBESjtBQUNQLFNBQUs4TSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS3pGLEVBQUwsR0FBVSxDQUFWO0FBQ0F4RixhQUFTQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDeUYsV0FBdEMsR0FBb0QsRUFBcEQ7QUFDRCxHQS9EWTtBQWlFYjBGLFNBakVhLG1CQWlFTHRDLElBakVLLEVBaUVDO0FBQ1pBLFdBQU9BLEtBQUt6RixJQUFMLEdBQVksSUFBWixHQUFtQnlGLElBQTFCO0FBQ0EsUUFBTTRDLFlBQVkxTCxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0EsUUFBTTBMLFNBQVMzTCxTQUFTQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q2lJLFNBQTlDLENBQXdELElBQXhELENBQWY7QUFDQSxRQUFNMEQsV0FBV0QsT0FBTzVJLG9CQUFQLENBQTRCLFVBQTVCLEVBQXdDLENBQXhDLENBQWpCO0FBQ0EsUUFBTWpDLFNBQVM2SyxPQUFPMUssc0JBQVAsQ0FBOEIsZ0JBQTlCLEVBQWdELENBQWhELENBQWY7QUFDQTBLLFdBQU94TCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixpQkFBeEI7QUFFQSxRQUFJbUYsRUFBSjs7QUFDQSxRQUFJc0QsSUFBSixFQUFVO0FBQ1J0RCxXQUFLbUcsT0FBT25HLEVBQVAsR0FBWXNELEtBQUt0RCxFQUF0QjtBQUNBb0csZUFBU2xHLFdBQVQsR0FBdUJvRCxLQUFLSCxJQUFMLElBQWEsRUFBcEM7QUFDQTdILGFBQU8yRSxLQUFQLEdBQWVxRCxLQUFLOUgsSUFBTCxJQUFhLEVBQTVCO0FBQ0EySyxhQUFPeEwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBYTBJLEtBQUsvRCxLQUF2QztBQUNBMkcsZ0JBQVU3RixXQUFWLENBQXNCOEYsTUFBdEI7QUFDRCxLQU5ELE1BTU87QUFDTG5HLFdBQUttRyxPQUFPbkcsRUFBUCxHQUFZLEVBQUUsS0FBS0EsRUFBeEI7QUFDQSxXQUFLd0YsS0FBTCxDQUFXak4sSUFBWCxDQUFnQjtBQUFFeUgsY0FBRjtBQUFNbUQsY0FBTSxFQUFaO0FBQWdCNUQsZUFBTyxLQUFLbUc7QUFBNUIsT0FBaEI7QUFDQVMsYUFBT3hMLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGFBQXhCO0FBQ0FzTCxhQUFPeEwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBYSxLQUFLOEssWUFBdkM7QUFDQVEsZ0JBQVVHLFlBQVYsQ0FBdUJGLE1BQXZCLEVBQStCRCxVQUFVSSxVQUF6QztBQUNEOztBQUVEbE8sVUFBTWtGLElBQU4sQ0FBVzZJLE9BQU81SSxvQkFBUCxDQUE0QixHQUE1QixDQUFYLEVBQ0dLLE9BREgsQ0FDVztBQUFBLGFBQU14QyxHQUFHbUIsWUFBSCxDQUFnQixTQUFoQixFQUEyQnlELEVBQTNCLENBQU47QUFBQSxLQURYO0FBR0EsU0FBS3lGLE9BQUwsQ0FBYXpGLEVBQWIsSUFBbUJtRyxNQUFuQjtBQUVBLFNBQUtMLFlBQUwsQ0FBa0IsSUFBbEI7QUFFQSxXQUFPOUYsRUFBUDtBQUNELEdBaEdZO0FBaUdidUcsYUFqR2EsdUJBaUdENUosQ0FqR0MsRUFpR0V2QixFQWpHRixFQWlHTTtBQUNqQixRQUFNNEUsS0FBSzVFLEdBQUdnQyxZQUFILENBQWdCLFNBQWhCLENBQVg7QUFDQSxRQUFNbUMsUUFBUSxLQUFLbUcsWUFBTCxHQUFvQnRLLEdBQUdnQyxZQUFILENBQWdCLFlBQWhCLENBQWxDO0FBQ0EsU0FBS3FJLE9BQUwsQ0FBYXpGLEVBQWIsRUFBaUJELFNBQWpCLEdBQTZCLEtBQUswRixPQUFMLENBQWF6RixFQUFiLEVBQWlCRCxTQUFqQixDQUEyQmdGLE9BQTNCLENBQW1DLE9BQW5DLEVBQTRDLE9BQU94RixLQUFuRCxDQUE3QjtBQUNBLFNBQUt5RyxPQUFMLENBQWFoRyxFQUFiLEVBQWlCVCxLQUFqQixHQUF5QkEsS0FBekI7QUFDQW5FLE9BQUd5QixVQUFILENBQWNsQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDRCxHQXZHWTtBQXdHYjRMLFlBeEdhLHNCQXdHRjdKLENBeEdFLEVBd0dDdkIsRUF4R0QsRUF3R0s7QUFDaEIsUUFBTTRFLEtBQUs1RSxHQUFHZ0MsWUFBSCxDQUFnQixTQUFoQixDQUFYO0FBQ0EsUUFBTWtHLE9BQU8sS0FBS21DLE9BQUwsQ0FBYXpGLEVBQWIsQ0FBYjtBQUNBc0QsU0FBS3pHLFVBQUwsQ0FBZ0I0SixXQUFoQixDQUE0Qm5ELElBQTVCO0FBQ0EsV0FBTyxLQUFLbUMsT0FBTCxDQUFhekYsRUFBYixDQUFQO0FBQ0EsU0FBS3dGLEtBQUwsQ0FBV2tCLE1BQVgsQ0FBa0IsS0FBS2xCLEtBQUwsQ0FBV3BDLE9BQVgsQ0FBbUIsS0FBSzRDLE9BQUwsQ0FBYWhHLEVBQWIsQ0FBbkIsQ0FBbEIsRUFBd0QsQ0FBeEQ7QUFDQSxTQUFLOUQsSUFBTDs7QUFDQSxRQUFJLENBQUMsS0FBS3NKLEtBQUwsQ0FBV3hHLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQUs4RyxZQUFMLENBQWtCLEtBQWxCO0FBQ0Q7QUFDRixHQWxIWTtBQW1IYkEsY0FuSGEsd0JBbUhBOUUsSUFuSEEsRUFtSE07QUFDakIsUUFBTXZILE9BQU91SCxPQUFPLFFBQVAsR0FBa0IsS0FBL0I7QUFDQXhHLGFBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDRSxTQUEzQyxDQUFxRGxCLElBQXJELEVBQTJELGlCQUEzRDtBQUNELEdBdEhZO0FBdUhia04sZUF2SGEseUJBdUhDaEssQ0F2SEQsRUF1SEl2QixFQXZISixFQXVIUTtBQUNuQixRQUFNa0ksT0FBTyxLQUFLbUMsT0FBTCxDQUFhckssR0FBR2dDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYixDQUFiO0FBQ0EsUUFBTXdKLFVBQVV0RCxLQUFLL0Ysb0JBQUwsQ0FBMEIsZUFBMUIsRUFBMkMsQ0FBM0MsQ0FBaEI7QUFDQXFKLFlBQVFqTSxTQUFSLENBQWtCTSxNQUFsQixDQUF5QixpQkFBekI7O0FBQ0EsUUFBSSxDQUFDMkwsUUFBUWpNLFNBQVIsQ0FBa0JpQyxRQUFsQixDQUEyQixpQkFBM0IsQ0FBTCxFQUFvRDtBQUNsRDBHLFdBQUszSSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsYUFBdEI7QUFDRDtBQUNGLEdBOUhZO0FBK0hidUosWUEvSGEsc0JBK0hGekgsQ0EvSEUsRUErSEN2QixFQS9IRCxFQStISztBQUNoQixRQUFNa0ksT0FBTyxLQUFLbUMsT0FBTCxDQUFhckssR0FBR2dDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYixDQUFiO0FBQ0FrRyxTQUFLM0ksU0FBTCxDQUFlTSxNQUFmLENBQXNCLGFBQXRCOztBQUNBLFFBQUksQ0FBQ3FJLEtBQUszSSxTQUFMLENBQWVpQyxRQUFmLENBQXdCLGFBQXhCLENBQUwsRUFBNkM7QUFDM0MsV0FBS2lLLG9CQUFMLENBQTBCdkQsSUFBMUI7QUFDRDs7QUFDRDlJLGFBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDd0YsS0FBM0MsR0FBbUQsQ0FBbkQ7QUFDRCxHQXRJWTtBQXVJYjhGLGFBdklhLHVCQXVJRHBKLENBdklDLEVBdUlFdkIsRUF2SUYsRUF1SU07QUFDakIsUUFBSUEsR0FBRzZFLEtBQUgsSUFBWSxDQUFoQixFQUFtQjtBQUNqQixXQUFLLElBQUlELEVBQVQsSUFBZSxLQUFLeUYsT0FBcEIsRUFBNkI7QUFDM0IsYUFBS0EsT0FBTCxDQUFhekYsRUFBYixFQUFpQnJGLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixhQUEvQjtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0wsVUFBSTBJLElBQUosRUFBVThDLFFBQVY7O0FBQ0EsV0FBSyxJQUFJcEcsR0FBVCxJQUFlLEtBQUt5RixPQUFwQixFQUE2QjtBQUMzQm5DLGVBQU8sS0FBS21DLE9BQUwsQ0FBYXpGLEdBQWIsQ0FBUDtBQUNBc0QsYUFBSzNJLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixhQUF0QjtBQUNBLGFBQUtnTSxvQkFBTCxDQUEwQnZELElBQTFCO0FBQ0Q7QUFDRjtBQUNGLEdBcEpZO0FBcUpiMEMsU0FySmEsbUJBcUpMaEcsRUFySkssRUFxSkQ7QUFDVixXQUFPLEtBQUt3RixLQUFMLENBQVc1RCxJQUFYLENBQWdCO0FBQUEsYUFBUTBCLEtBQUt0RCxFQUFMLElBQVdBLEVBQW5CO0FBQUEsS0FBaEIsQ0FBUDtBQUNELEdBdkpZO0FBd0piNkcsc0JBeEphLGdDQXdKUXZELElBeEpSLEVBd0pjO0FBQ3pCLFFBQU04QyxXQUFXOUMsS0FBSy9GLG9CQUFMLENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLENBQWpCO0FBQ0E2SSxhQUFTdEcsS0FBVCxDQUFlZ0gsTUFBZixHQUF3QlYsU0FBU1csWUFBVCxHQUF3QixFQUF4QixHQUE2QixJQUFyRDtBQUNEO0FBM0pZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7OztBQUVBLElBQUk1TCxpQkFBSixDQUFlO0FBQ2JDLE1BQUlaLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBRFM7QUFFYmhELFVBQVE7QUFDTkMsU0FBSztBQUNILHNCQUFnQjtBQURiLEtBREM7QUFJTmtFLFNBQUs7QUFDSEMsYUFBTztBQUNMLHVCQUFlLFFBRFY7QUFFTCxzQkFBYyxRQUZUO0FBR0wsd0JBQWdCO0FBSFg7QUFESjtBQUpDLEdBRks7QUFlYm1MLFFBQU0sRUFmTztBQWlCYjdNLFVBakJhLHNCQWlCRjtBQUFBOztBQUNUWSxtQkFBT2hDLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixvQkFBWTtBQUN0QyxVQUFJLENBQUNDLFNBQVNnTyxFQUFkLEVBQWtCO0FBQ2xCLFVBQU1DLGNBQWNqTyxTQUFTZ08sRUFBVCxDQUFZRCxJQUFoQzs7QUFDQSxXQUFLLElBQUk1TSxHQUFULElBQWdCOE0sV0FBaEIsRUFBNkI7QUFDM0IsY0FBS0YsSUFBTCxDQUFVNU0sR0FBVixJQUFpQkksU0FBU0MsY0FBVCxDQUF3QixVQUFVTCxHQUFsQyxDQUFqQjtBQUNBLFlBQUk4TSxZQUFZOU0sR0FBWixFQUFpQitNLFFBQXJCLEVBQStCLE1BQUtDLElBQUwsQ0FBVWhOLEdBQVYsRUFBL0IsS0FDSyxNQUFLaU4sS0FBTCxDQUFXak4sR0FBWDtBQUNOO0FBQ0YsS0FSRDtBQVNELEdBM0JZO0FBNkJiZ04sTUE3QmEsZ0JBNkJSaE4sR0E3QlEsRUE2Qkg7QUFDUixTQUFLNE0sSUFBTCxDQUFVNU0sR0FBVixFQUFlTyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxhQUFoQztBQUNELEdBL0JZO0FBZ0Nid00sT0FoQ2EsaUJBZ0NQak4sR0FoQ08sRUFnQ0Y7QUFDVCxTQUFLNE0sSUFBTCxDQUFVNU0sR0FBVixFQUFlTyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNELEdBbENZO0FBbUNiSyxRQW5DYSxrQkFtQ04wQixDQW5DTSxFQW1DSHZCLEVBbkNHLEVBbUNDO0FBQ1pBLFNBQUtBLEdBQUdrTSxRQUFILEtBQWdCLElBQWhCLEdBQXVCbE0sRUFBdkIsR0FBNEJBLEdBQUd5QixVQUFwQztBQUNBLFFBQU1tRCxLQUFLNUUsR0FBR2dDLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBWDtBQUNBLFFBQU1oRCxNQUFNNEYsR0FBR1MsS0FBSCxDQUFTLElBQVQsRUFBZThHLEdBQWYsRUFBWjtBQUNBLFFBQU1DLFFBQVFoTixTQUFTQyxjQUFULENBQXdCdUYsRUFBeEIsQ0FBZDtBQUNBd0gsVUFBTTdNLFNBQU4sQ0FBZ0JNLE1BQWhCLENBQXVCLGFBQXZCO0FBQ0EsU0FBS3pDLElBQUwsQ0FBVSxxQkFBVixFQUFpQzRCLEdBQWpDLEVBQXNDLENBQUNvTixNQUFNN00sU0FBTixDQUFnQmlDLFFBQWhCLENBQXlCLGFBQXpCLENBQXZDO0FBQ0QsR0ExQ1k7QUEyQ2I2Syx1QkEzQ2EsbUNBMkNXO0FBQ3RCclAsVUFBTWtGLElBQU4sQ0FBVzlDLFNBQVNpQixzQkFBVCxDQUFnQyxZQUFoQyxDQUFYLEVBQ0dtQyxPQURILENBQ1c7QUFBQSxhQUFPeEQsSUFBSU8sU0FBSixDQUFjRSxNQUFkLENBQXFCLGlCQUFyQixDQUFQO0FBQUEsS0FEWDtBQUVEO0FBOUNZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7OztBQUVBLElBQUlNLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05DLFNBQUs7QUFDSCxzQkFBZ0I7QUFEYixLQURDO0FBSU5rRSxTQUFLO0FBQ0hDLGFBQU87QUFDTCx5QkFBaUIsV0FEWjtBQUVMLG9CQUFZO0FBRlA7QUFESjtBQUpDLEdBRks7QUFjYlIsUUFkYSxrQkFjTnJELEtBZE0sRUFjQztBQUFBOztBQUNaLFFBQUlBLFNBQVMsQ0FBQ0ksTUFBTUMsT0FBTixDQUFjTCxLQUFkLENBQWQsRUFBb0M7QUFDbEMsVUFBTTBQLE9BQU8xUCxNQUFNMlAsR0FBTixHQUFZM1AsTUFBTTJQLEdBQU4sQ0FBVWxILEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBWixHQUFtQyxFQUFoRDtBQUNBakcsZUFBU0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ2lCLFNBQWhDLEdBQTRDLEVBQTVDO0FBQ0FnTSxXQUFLOUosT0FBTCxDQUFhO0FBQUEsZUFBTyxNQUFLZ0ssU0FBTCxDQUFlRCxHQUFmLENBQVA7QUFBQSxPQUFiO0FBQ0Q7QUFDRixHQXBCWTtBQXFCYkMsV0FyQmEscUJBcUJIRCxHQXJCRyxFQXFCRTtBQUNiLFFBQU16QixZQUFZMUwsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUNBLFFBQU1XLEtBQUtaLFNBQVNvRixhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxRQUFNaUksTUFBTXJOLFNBQVNvRixhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxRQUFNa0ksSUFBSXROLFNBQVMwSSxjQUFULENBQXdCL0MsT0FBT0MsWUFBUCxDQUFvQixLQUFwQixDQUF4QixDQUFWO0FBQ0FoRixPQUFHMkUsU0FBSCxHQUFlLGlDQUFmO0FBQ0E4SCxRQUFJOUgsU0FBSixHQUFnQixjQUFoQjtBQUNBOEgsUUFBSXRMLFlBQUosQ0FBaUIsVUFBakIsRUFBNkJvTCxHQUE3QjtBQUNBdk0sT0FBR00sU0FBSCxHQUFlaU0sR0FBZjtBQUNBRSxRQUFJeEgsV0FBSixDQUFnQnlILENBQWhCO0FBQ0ExTSxPQUFHaUYsV0FBSCxDQUFld0gsR0FBZjtBQUNBM0IsY0FBVTdGLFdBQVYsQ0FBc0JqRixFQUF0QjtBQUNELEdBakNZO0FBa0NiMk0sUUFsQ2Esb0JBa0NKO0FBQUE7O0FBQ1AsUUFBTUMsTUFBTXhOLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBWjtBQUNBLFFBQUlrTixNQUFNSyxJQUFJL0gsS0FBSixDQUFVZ0ksSUFBVixFQUFWO0FBQ0EsUUFBSSxDQUFDTixHQUFMLEVBQVU7QUFDVixTQUFLblAsSUFBTCxDQUFVLFNBQVYsRUFBcUJtUCxHQUFyQixFQUEwQjVNLGVBQU8vQyxLQUFqQztBQUNBZ1EsUUFBSS9ILEtBQUosR0FBWSxFQUFaO0FBQ0EwSCxRQUFJbEgsS0FBSixDQUFVLEdBQVYsRUFBZTdDLE9BQWYsQ0FBdUI7QUFBQSxhQUFPLE9BQUtnSyxTQUFMLENBQWVELEdBQWYsQ0FBUDtBQUFBLEtBQXZCO0FBQ0QsR0F6Q1k7QUEwQ2JPLFdBMUNhLHFCQTBDSHZMLENBMUNHLEVBMENBdkIsRUExQ0EsRUEwQ0k7QUFDZixTQUFLNUMsSUFBTCxDQUFVLFlBQVYsRUFBd0I0QyxHQUFHZ0MsWUFBSCxDQUFnQixVQUFoQixDQUF4QixFQUFxRHJDLGVBQU8vQyxLQUE1RDtBQUNBb0QsT0FBR3lCLFVBQUgsQ0FBY0EsVUFBZCxDQUF5QjRKLFdBQXpCLENBQXFDckwsR0FBR3lCLFVBQXhDO0FBQ0Q7QUE3Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7O0FBRUEsSUFBSTFCLGlCQUFKLENBQWU7QUFDYkMsTUFBSVosU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQURTO0FBRWJoRCxVQUFRO0FBQ05tRSxTQUFLO0FBQ0hxQyxjQUFRO0FBQ04sc0JBQWM7QUFEUjtBQURMO0FBREMsR0FGSztBQVVia0ssU0FBTyxTQVZNO0FBWWJoTyxVQVphLHNCQVlGO0FBQUE7O0FBQ1RZLG1CQUFPaEMsR0FBUCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDLFVBQU1tUCxRQUFRbFAsWUFBWUEsU0FBU2dPLEVBQXJCLElBQTJCaE8sU0FBU2dPLEVBQVQsQ0FBWWtCLEtBQXZDLEdBQStDbFAsU0FBU2dPLEVBQVQsQ0FBWWtCLEtBQTNELEdBQW1FLFNBQWpGO0FBQ0EzTixlQUFTQyxjQUFULGtCQUFrQzBOLEtBQWxDLEdBQTJDNUgsT0FBM0MsR0FBcUQsSUFBckQ7O0FBQ0EsWUFBSzZILE1BQUwsQ0FBWUQsS0FBWjtBQUNELEtBSkQ7QUFLRCxHQWxCWTtBQW9CYkUsVUFwQmEsb0JBb0JKMUwsQ0FwQkksRUFvQkR2QixFQXBCQyxFQW9CRztBQUNkLFFBQU0rTSxRQUFRL00sR0FBR2dDLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBZDtBQUNBLFNBQUs1RSxJQUFMLENBQVUsdUJBQVYsRUFBbUMyUCxLQUFuQztBQUNBLFNBQUtDLE1BQUwsQ0FBWUQsS0FBWjtBQUNELEdBeEJZO0FBeUJiQyxRQXpCYSxrQkF5Qk5ELEtBekJNLEVBeUJDO0FBQ1osU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsUUFBSUEsVUFBVSxTQUFkLEVBQXlCO0FBQ3pCLFFBQU1wSSwwQ0FBbUNvSSxLQUFuQyxDQUFOO0FBQ0EsUUFBTWpOLFVBQVVWLFNBQVNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQWhCOztBQUVBLFFBQUksQ0FBQ1MsUUFBUVAsU0FBUixDQUFrQmlDLFFBQWxCLENBQTJCbUQsU0FBM0IsQ0FBTCxFQUE0QztBQUMxQzdFLGNBQVFQLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCbUYsU0FBdEI7QUFDRDtBQUNGO0FBbENZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztlQUVlLElBQUl1SSxZQUFKLENBQVU7QUFDdkI5TSxRQUFNLFNBRGlCO0FBRXZCcUMsUUFBTSxZQUZpQjtBQUd2QnBHLFVBQVE7QUFDTjhRLGdCQUFZLENBQ1YsbUJBRFUsRUFFVix1QkFGVSxFQUdWLG1CQUhVLEVBSVYsMEJBSlUsRUFLVixrQkFMVSxFQU1WLHlCQU5VLEVBT1YsY0FQVSxFQVFWLGVBUlUsRUFTVixzQkFUVSxFQVVWLDJCQVZVLEVBV1YsY0FYVSxFQVlWLGNBWlUsRUFhViw0QkFiVSxFQWNWLHNCQWRVLEVBZVYsbUJBZlUsRUFnQlYsWUFoQlUsRUFpQlYsU0FqQlUsRUFrQlYscUJBbEJVLEVBbUJWLGdCQW5CVSxFQW9CVixtQkFwQlUsRUFxQlYscUJBckJVLEVBc0JWLHlCQXRCVSxFQXVCVix1QkF2QlU7QUFETjtBQUhlLENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0ZmLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNBZTtBQUViQyx3QkFBc0IsRUFGVDtBQUliQyxtQkFBaUIsRUFKSjtBQU1icEcsZUFBYTtBQUNYcUcsZUFBVyxTQURBO0FBRVhDLFdBQU8sU0FGSTtBQUdYQyxZQUFRLFNBSEc7QUFJWEMsWUFBUSxTQUpHO0FBS1hDLFNBQUssU0FMTTtBQU1YQyxZQUFRLFNBTkc7QUFPWEMsVUFBTSxTQVBLO0FBUVhDLFdBQU87QUFSSTtBQU5BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFNQyxRQUFRLFNBQVJBLEtBQVEsQ0FBU0MsR0FBVCxFQUFjO0FBQzFCLE1BQU1DLFNBQVNoUixNQUFNQyxPQUFOLENBQWM4USxHQUFkLElBQXFCLEVBQXJCLEdBQTBCLEVBQXpDO0FBQ0EsTUFBSWpGLEdBQUo7O0FBQ0EsT0FBSyxJQUFJbUYsSUFBVCxJQUFpQkYsR0FBakIsRUFBc0I7QUFDcEIsUUFBSUEsSUFBSUcsY0FBSixDQUFtQkQsSUFBbkIsQ0FBSixFQUE4QjtBQUM1Qm5GLFlBQU1pRixJQUFJRSxJQUFKLENBQU47O0FBQ0EsVUFBSW5GLFFBQVEsSUFBUixJQUFnQixRQUFPQSxHQUFQLE1BQWUsUUFBbkMsRUFBNkM7QUFDM0NrRixlQUFPQyxJQUFQLElBQWVILE1BQU1oRixHQUFOLENBQWY7QUFDRCxPQUZELE1BR0VrRixPQUFPQyxJQUFQLElBQWVuRixHQUFmO0FBQ0g7QUFDRjs7QUFDRCxTQUFPa0YsTUFBUDtBQUNELENBYkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhak8sVTs7Ozs7QUFFWCxzQkFBWW9PLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZkEsUUFBSUMsTUFBSixHQUFhLEVBQWI7QUFDQUQsUUFBSUUsV0FBSixHQUFrQixFQUFsQjtBQUVBLG9GQUFNRixHQUFOO0FBRUEsVUFBS0csb0JBQUwsSUFBNkIsTUFBS0MsWUFBTCxFQUE3QjtBQU5lO0FBT2hCOzs7O21DQUNjQyxNLEVBQVEvTCxJLEVBQU1sQixDLEVBQUc7QUFDOUIsVUFBSXZCLEtBQUt1QixFQUFFeU0sTUFBWDtBQUFBLFVBQ0lTLFFBREo7QUFBQSxVQUNjQyxJQURkO0FBQUEsVUFDb0JyUSxJQURwQjtBQUFBLFVBQzBCc1EsQ0FEMUI7QUFBQSxVQUM2QkMsSUFEN0I7QUFBQSxVQUNtQ0MsT0FEbkM7QUFBQSxVQUM0Q0MsS0FENUM7O0FBR0EsV0FBS0wsUUFBTCxJQUFpQkQsTUFBakIsRUFBeUI7QUFDdkJHLFlBQUlGLFNBQVMsQ0FBVCxDQUFKO0FBQ0FDLGVBQU9ELFFBQVA7QUFDQUcsZUFBT0QsTUFBTSxHQUFiO0FBQ0FFLGtCQUFVRixNQUFNLEdBQWhCO0FBQ0FHLGdCQUFRSCxNQUFNLEdBQWQ7QUFFQSxZQUFJQyxRQUFRQyxPQUFaLEVBQXFCSixXQUFXQSxTQUFTckgsTUFBVCxDQUFnQixDQUFoQixDQUFYOztBQUVyQixZQUFJMEgsU0FDQUQsV0FBVzdPLEdBQUdULFNBQUgsQ0FBYWlDLFFBQWIsQ0FBc0JpTixRQUF0QixDQURYLElBRUFHLFFBQVE1TyxHQUFHNEUsRUFBSCxLQUFVNkosUUFGbEIsSUFHQXpPLEdBQUdrTSxRQUFILENBQVloRixXQUFaLE9BQThCdUgsUUFIbEMsRUFJRTtBQUVBcFEsaUJBQU9tUSxPQUFPRSxJQUFQLENBQVA7QUFFQSxjQUFJLE9BQU9yUSxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxLQUFLa0QsQ0FBTCxFQUFRdkIsRUFBUixFQUFoQyxLQUNLLElBQUksS0FBSzNCLElBQUwsQ0FBSixFQUFnQixLQUFLQSxJQUFMLEVBQVdrRCxDQUFYLEVBQWN2QixFQUFkO0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBQ1d5QyxJLEVBQU1wRSxJLEVBQU0yQixFLEVBQUk7QUFDMUJBLFdBQUtBLE1BQU0sS0FBS0EsRUFBaEI7QUFDQSxVQUFNK08sVUFBVSxPQUFPMVEsSUFBUCxLQUFnQixVQUFoQixHQUE2QkEsSUFBN0IsR0FBb0MsS0FBS0EsSUFBTCxDQUFwRDtBQUVBMkIsU0FBR2dQLGdCQUFILENBQW9Cdk0sSUFBcEIsRUFBMEJzTSxPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJL08sT0FBTyxLQUFLQSxFQUFoQixFQUFvQjtBQUNsQixZQUFJLENBQUMsS0FBS29PLE1BQUwsQ0FBWTNMLElBQVosQ0FBTCxFQUF3QixLQUFLMkwsTUFBTCxDQUFZM0wsSUFBWixJQUFvQixFQUFwQjs7QUFDeEIsYUFBSzJMLE1BQUwsQ0FBWTNMLElBQVosRUFBa0J0RixJQUFsQixDQUF1QjRSLE9BQXZCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS1YsV0FBTCxDQUFpQmxSLElBQWpCLENBQXNCLENBQUM2QyxFQUFELEVBQUt5QyxJQUFMLEVBQVdzTSxPQUFYLENBQXRCO0FBQ0Q7QUFDRjs7O21DQUNjO0FBQ2IsVUFBSTFTLFNBQVMsS0FBS0EsTUFBbEI7QUFBQSxVQUNJNFMsU0FESjtBQUFBLFVBQ2VqUCxFQURmO0FBQUEsVUFDbUJ3TyxNQURuQjtBQUFBLFVBQzJCL0wsSUFEM0I7QUFBQSxVQUNpQ3NNLE9BRGpDO0FBR0EsVUFBSSxDQUFDMVMsTUFBRCxJQUFXLEVBQUU0UyxZQUFZNVMsT0FBT21FLEdBQXJCLENBQVgsSUFBd0MsRUFBRVIsS0FBSyxLQUFLQSxFQUFaLENBQTVDLEVBQTZELE9BQU8sS0FBUDs7QUFFN0QsV0FBS3lDLElBQUwsSUFBYXdNLFNBQWIsRUFBd0I7QUFDdEJULGlCQUFTUyxVQUFVeE0sSUFBVixDQUFUO0FBQ0FzTSxrQkFBVSxLQUFLRyxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLQyxjQUF0QixFQUFzQ1gsTUFBdEMsRUFBOEMvTCxJQUE5QyxDQUFWO0FBQ0F6QyxXQUFHZ1AsZ0JBQUgsQ0FBb0J2TSxJQUFwQixFQUEwQnNNLE9BQTFCLEVBQW1DLEtBQW5DO0FBQ0EsWUFBSSxDQUFDLEtBQUtYLE1BQUwsQ0FBWTNMLElBQVosQ0FBTCxFQUF3QixLQUFLMkwsTUFBTCxDQUFZM0wsSUFBWixJQUFvQixFQUFwQjs7QUFDeEIsYUFBSzJMLE1BQUwsQ0FBWTNMLElBQVosRUFBa0J0RixJQUFsQixDQUF1QjRSLE9BQXZCO0FBQ0Q7QUFDRjs7O3NDQUNpQjtBQUNoQixVQUFJdE0sSUFBSixFQUFVMkwsTUFBVixFQUFrQjlJLENBQWxCOztBQUVBLFdBQUs3QyxJQUFMLElBQWEsS0FBSzJMLE1BQWxCLEVBQTBCO0FBQ3hCQSxpQkFBUyxLQUFLQSxNQUFMLENBQVkzTCxJQUFaLENBQVQ7QUFDQTZDLFlBQUk4SSxPQUFPeEssTUFBWDs7QUFDQSxlQUFPMEIsR0FBUCxFQUFZO0FBQ1YsZUFBS3RGLEVBQUwsQ0FBUW9QLG1CQUFSLENBQTRCM00sSUFBNUIsRUFBa0MyTCxPQUFPOUksQ0FBUCxDQUFsQyxFQUE2QyxLQUE3Qzs7QUFDQThJLGlCQUFPOUMsTUFBUCxDQUFjaEcsQ0FBZCxFQUFpQixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSStKLFNBQVMsS0FBS2hCLFdBQWxCO0FBQUEsVUFBK0I5SSxJQUFJLENBQW5DO0FBQUEsVUFBc0MrSixHQUF0QztBQUNBaEssVUFBSStKLE9BQU96TCxNQUFYOztBQUVBLGFBQU8yQixJQUFJRCxDQUFYLEVBQWNDLEdBQWQsRUFBbUI7QUFDakIrSixjQUFNRCxPQUFPOUosQ0FBUCxDQUFOO0FBQ0ErSixZQUFJLENBQUosRUFBT0YsbUJBQVAsQ0FBMkJFLElBQUksQ0FBSixDQUEzQixFQUFtQ0EsSUFBSSxDQUFKLENBQW5DLEVBQTJDLEtBQTNDO0FBQ0Q7QUFDRjs7OztFQXBGNkJsVCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaEM7O0FBRUEsSUFBTW1ULGdCQUFnQixJQUFJblQsZUFBSixDQUFZO0FBQ2hDMkMsVUFEZ0Msc0JBQ3JCO0FBQUE7O0FBQ1RiLFdBQU84USxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxpQkFBUztBQUN4QyxVQUFNUSxPQUFPQyxNQUFNQyxRQUFOLENBQWVySyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCOEcsR0FBMUIsRUFBYjs7QUFDQSxVQUFJLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsRUFBb0MsZUFBcEMsRUFBcUQsa0JBQXJELEVBQXlFM0csUUFBekUsQ0FBa0ZnSyxJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGNBQUtwUyxJQUFMLENBQVUsdUJBQVYsRUFBbUM7QUFDakN1UyxtQkFBU0YsTUFBTUUsT0FEa0I7QUFFakNDLG9CQUFVSCxNQUFNQyxRQUFOLENBQWVySyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCOEcsR0FBMUIsR0FBZ0M5RyxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQ3dLLEtBQTNDLEtBQXFELEdBQXJELEdBQTJESixNQUFNSyxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRkwsTUFBTU0sS0FGL0Q7QUFHakNDLGdCQUFPLElBQUkxRyxJQUFKLEVBQUQsQ0FBYTJHLE9BQWI7QUFIMkIsU0FBbkM7QUFLRDtBQUNGLEtBVEQsRUFTRyxLQVRIO0FBVUQ7QUFaK0IsQ0FBWixDQUF0Qjs7ZUFlZVYsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsa0JBQVNXLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUNsQyxPQUFLLElBQUk1SyxDQUFULElBQWM0SyxJQUFkO0FBQ0UsUUFBSSxDQUFDRCxLQUFLM0ssQ0FBTCxDQUFMLEVBQWMySyxLQUFLM0ssQ0FBTCxJQUFVNEssS0FBSzVLLENBQUwsQ0FBVjtBQURoQjs7QUFHQSxTQUFPMkssSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRCxJQUFNRSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7QUFFakMsU0FBTzVTLFFBQVFvTyxJQUFSLENBQWF5RSxLQUFiLENBQW1CO0FBQUVDLG1CQUFlLElBQWpCO0FBQXVCOVIsWUFBUTtBQUEvQixHQUFuQixFQUEwRFosSUFBMUQsQ0FBK0Q7QUFBQSxXQUFRZ08sS0FBSyxDQUFMLENBQVI7QUFBQSxHQUEvRCxDQUFQO0FBQ0QsQ0FIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTTJFLFlBQVksU0FBWkEsU0FBWSxDQUFTaEcsR0FBVCxFQUFjO0FBQzlCLE1BQU1pRyxJQUFJakcsSUFBSWtHLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlELE1BQU0sQ0FBQyxDQUFYLEVBQWMsT0FBT2pHLEdBQVAsQ0FBZCxLQUNLLE9BQU9BLElBQUluRCxNQUFKLENBQVcsQ0FBWCxFQUFjb0osQ0FBZCxDQUFQO0FBQ04sQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBUUEsU0FBU0UsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSTFRLEVBQUosRUFBUTJRLElBQVIsRUFBY0MsT0FBZCxDQUQyQixDQUUzQjs7QUFDQXhSLFdBQVN5UixlQUFULENBQXlCMVAsWUFBekIsQ0FBc0MsTUFBdEMsRUFBOEMzRCxRQUFRMEwsSUFBUixDQUFhNEgsYUFBYixHQUE2Qm5ILE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQTlDLEVBSDJCLENBSTNCOztBQUNBLE1BQU1vSCxlQUFlM1IsU0FBUzRSLGdCQUFULENBQTBCLGlCQUExQixDQUFyQjtBQUNBLE1BQU1DLGVBQWU3UixTQUFTNFIsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCO0FBTjJCO0FBQUE7QUFBQTs7QUFBQTtBQVEzQix5QkFBVUQsWUFBViw4SEFBd0I7QUFBcEIvUSxRQUFvQjtBQUN0QjRRLGdCQUFVNVEsR0FBRzRRLE9BQWI7QUFDQSxVQUFNTSxTQUFTTixRQUFRTSxNQUF2Qjs7QUFFQSxVQUFJQSxNQUFKLEVBQVk7QUFDVlAsZUFBT25ULFFBQVEwTCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IrSCxNQUF4QixDQUFQOztBQUVBLFlBQUdQLFFBQVFBLFFBQVEsSUFBbkIsRUFBeUI7QUFDdkIzUSxhQUFHOEUsV0FBSCxHQUFpQjZMLElBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBbkIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0IsMEJBQVVNLFlBQVYsbUlBQXdCO0FBQXBCalIsUUFBb0I7QUFDdEI0USxnQkFBVTVRLEdBQUc0USxPQUFiO0FBRUEsT0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QnBPLE9BQXpCLENBQWlDLGdCQUFRO0FBQ3ZDLFlBQU0yTyxXQUFXUCxRQUFRLFNBQVNRLElBQWpCLENBQWpCOztBQUVBLFlBQUlELFFBQUosRUFBYztBQUNaUixpQkFBT25ULFFBQVEwTCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JnSSxRQUF4QixDQUFQOztBQUVBLGNBQUlSLFFBQVFBLFFBQVEsSUFBcEIsRUFBMEI7QUFDeEIzUSxlQUFHbUIsWUFBSCxDQUFnQmlRLEtBQUtsSyxXQUFMLEVBQWhCLEVBQW9DeUosSUFBcEM7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdEO0FBbEMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUM1Qjs7QUFFYyxvQkFBVztBQUN4QnZSLFdBQVM0UCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEM7QUFBQSxXQUFNMEIsbUJBQU47QUFBQSxHQUE5QyxFQUF5RTtBQUN2RVcsYUFBUyxLQUQ4RDtBQUV2RUMsYUFBUyxJQUY4RDtBQUd2RUMsVUFBTTtBQUhpRSxHQUF6RTtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQsSUFBSUMsU0FBUyxFQUFiOzs7Ozs7Ozs7Ozt1QkFJS0MsSyxFQUFPMUMsTyxFQUFTO0FBQ2pCLFVBQUksQ0FBQ3lDLE9BQU9DLEtBQVAsQ0FBTCxFQUFvQkQsT0FBT0MsS0FBUCxJQUFnQixFQUFoQjtBQUVwQkQsYUFBT0MsS0FBUCxFQUFjdFUsSUFBZCxDQUFtQjRSLE9BQW5CO0FBQ0Q7Ozt5QkFDSTFTLE0sRUFBaUI7QUFBQTs7QUFBQSx3Q0FBTnFWLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQnJWLGVBQVNBLE9BQU9nSixLQUFQLENBQWEsR0FBYixDQUFUO0FBRUEsVUFBSUUsSUFBSSxDQUFSO0FBQUEsVUFBV0QsSUFBSWpKLE9BQU91SCxNQUF0QjtBQUFBLFVBQThCK04sS0FBOUI7O0FBRUEsYUFBT3BNLElBQUlELENBQVgsRUFBY0MsR0FBZCxFQUFtQjtBQUNqQm9NLGdCQUFRSCxPQUFPblYsT0FBT2tKLENBQVAsQ0FBUCxDQUFSO0FBRUEsWUFBSW9NLEtBQUosRUFDRUEsTUFBTW5QLE9BQU4sQ0FBYztBQUFBLGlCQUFXdU0sUUFBUTZDLEtBQVIsQ0FBYyxLQUFkLEVBQW9CRixJQUFwQixDQUFYO0FBQUEsU0FBZDtBQUNIO0FBQ0Y7Ozs0QkFDT0QsSyxFQUFnQjtBQUFBLHlDQUFOQyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDdEIsYUFBT2xVLFFBQVFxVSxPQUFSLENBQWdCQyxXQUFoQixDQUE0QjtBQUFFQyxZQUFJTixLQUFOO0FBQWFDLGNBQU1BLElBQW5CO0FBQXlCTSxjQUFNO0FBQS9CLE9BQTVCLEVBQW1FQyxLQUFuRSxDQUF5RSxZQUFNLENBQUUsQ0FBakYsQ0FBUDtBQUNEOzs7MEJBQ0tDLE8sRUFBU0MsSSxFQUFnQjtBQUFBLHlDQUFQQyxLQUFPO0FBQVBBLGFBQU87QUFBQTs7QUFDN0IsYUFBTyxZQUFtQjtBQUFBLDJDQUFQQyxLQUFPO0FBQVBBLGVBQU87QUFBQTs7QUFDeEIsZUFBT0YsS0FBS1AsS0FBTCxDQUFXTSxPQUFYLEVBQW9CRSxNQUFNOUwsTUFBTixDQUFhK0wsS0FBYixDQUFwQixDQUFQO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYWpXLE87Ozs7O0FBRVgsbUJBQVkrUixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2Y7O0FBRUEsU0FBS21FLENBQUwsSUFBVW5FLEdBQVY7QUFBZSxZQUFLbUUsQ0FBTCxJQUFVbkUsSUFBSW1FLENBQUosQ0FBVjtBQUFmOztBQUVBLFFBQUlqVyxTQUFTLE1BQUtBLE1BQWxCO0FBQUEsUUFDSWtXLFNBREo7QUFBQSxRQUNlRCxDQURmO0FBQUEsUUFDa0IvUSxDQURsQjtBQUFBLFFBQ3FCd04sT0FEckI7O0FBR0EsUUFBSTFTLFdBQVdrVyxZQUFZbFcsT0FBT0MsR0FBOUIsQ0FBSixFQUF3QztBQUN0QyxXQUFLaUYsQ0FBTCxJQUFVZ1IsU0FBVixFQUFxQjtBQUNuQnhELGtCQUFVd0QsVUFBVWhSLENBQVYsQ0FBVjtBQUNBLFlBQUksTUFBS3dOLE9BQUwsQ0FBSixFQUNFLE1BQUs3UCxFQUFMLENBQVFxQyxDQUFSLEVBQVcsTUFBSzJOLEtBQUwsd0RBQWlCLE1BQUtILE9BQUwsQ0FBakIsQ0FBWDtBQUNIO0FBQ0Y7O0FBQ0QsS0FBQyxNQUFLaFEsUUFBTixJQUFrQixNQUFLQSxRQUFMLEVBQWxCO0FBZmU7QUFnQmhCOzs7RUFsQjBCeVQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYXRGLEs7Ozs7O0FBRVgsaUJBQVlpQixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFFQSxVQUFLc0UsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNaFEsT0FBTyxNQUFLQSxJQUFsQjtBQUVBakYsWUFBUXFVLE9BQVIsQ0FBZ0JhLFNBQWhCLENBQTBCQyxXQUExQixDQUFzQyxNQUFLekQsS0FBTCx3REFBaUIsTUFBSzBELFdBQXRCLENBQXRDO0FBRUEsUUFBSW5RLFNBQVMsWUFBVCxJQUF5QkEsU0FBUyxZQUF0QyxFQUFvRCxNQUFLb1EsV0FBTDtBQUVwRCxRQUFJeFcsU0FBUyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0l5VyxZQURKO0FBQUEsUUFDa0JDLHFCQURsQjs7QUFHQSxRQUFJMVcsTUFBSixFQUFZO0FBQ1Z5VyxxQkFBZXpXLE9BQU8yVyxNQUF0Qjs7QUFDQSxVQUFJRixZQUFKLEVBQWtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hCLCtCQUFjQSxZQUFkO0FBQUEsZ0JBQVN2UixDQUFUOztBQUNFLGtCQUFLckMsRUFBTCxDQUFRcUMsQ0FBUixFQUFXLE1BQUsyTixLQUFMLHdEQUFpQixNQUFLNEMsV0FBdEIsRUFBbUN2USxDQUFuQyxDQUFYO0FBREY7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqQjs7QUFDRHdSLDhCQUF3QjFXLE9BQU84USxVQUEvQjs7QUFDQSxVQUFJNEYscUJBQUosRUFBMkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsZ0NBQWNBLHFCQUFkO0FBQUEsZ0JBQVNwRSxDQUFUOztBQUNFLGtCQUFLelAsRUFBTCxDQUFReVAsQ0FBUixFQUFXLE1BQUtPLEtBQUwsd0RBQWlCLE1BQUsrRCxXQUF0QixFQUFtQ3RFLENBQW5DLENBQVg7QUFERjtBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzFCO0FBQ0Y7O0FBekJjO0FBMEJoQjs7OztnQ0FDV3VFLEcsRUFBS0MsTSxFQUFRQyxZLEVBQWM7QUFDckNGLFVBQUl4QixJQUFKLEdBQVd3QixJQUFJeEIsSUFBSixJQUFZLEVBQXZCO0FBQ0EsVUFBSUEsT0FBTyxHQUFHcEwsTUFBSCxDQUFVNE0sSUFBSW5CLEVBQWQsRUFBa0JtQixJQUFJeEIsSUFBdEIsQ0FBWDtBQUNBLFVBQUksQ0FBQ3lCLE1BQUQsSUFBVyxDQUFDQSxPQUFPL1MsSUFBdkIsRUFBNkJzUixPQUFPQSxLQUFLcEwsTUFBTCxDQUFZNk0sTUFBWixFQUFvQkMsWUFBcEIsQ0FBUDtBQUM3QixXQUFLaFcsSUFBTCxDQUFVd1UsS0FBVixDQUFnQixJQUFoQixFQUFzQkYsSUFBdEI7QUFDQSxVQUFJd0IsSUFBSWxCLElBQVIsRUFBYyxPQUFPLElBQVAsQ0FMdUIsQ0FLVjs7QUFDM0IsYUFBTyxLQUFQO0FBQ0Q7OztnQ0FDV3pRLEMsRUFBWTtBQUFBLHdDQUFObVEsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQU1qUCxPQUFPLEtBQUtBLElBQWxCO0FBQ0EsVUFBSTRRLE1BQU07QUFBRXRCLFlBQUl4USxDQUFOO0FBQVNtUSxjQUFNQTtBQUFmLE9BQVY7QUFDQSxVQUFJalAsU0FBUyxTQUFiLEVBQXdCakYsUUFBUXFVLE9BQVIsQ0FBZ0JDLFdBQWhCLENBQTRCdUIsR0FBNUIsRUFBaUNwQixLQUFqQyxDQUF1QyxZQUFNLENBQUUsQ0FBL0MsRUFBeEIsS0FDSyxJQUFJeFAsU0FBUyxZQUFiLEVBQTJCO0FBQzlCLFlBQU02USxVQUFVNUIsS0FBS0EsS0FBSzlOLE1BQUwsR0FBYyxDQUFuQixDQUFoQjtBQUNBLFlBQUk1RSxHQUFKOztBQUNBLFlBQUlzVSxZQUFZQyxTQUFaLEtBQTBCdlUsTUFBTXNVLFFBQVF0VSxHQUF4QyxDQUFKLEVBQWtEO0FBQ2hELGNBQUlBLFFBQVEsUUFBWixFQUFzQjtBQUNwQnhCLG9CQUFRb08sSUFBUixDQUFheUUsS0FBYixDQUFtQjtBQUFFN1Isc0JBQVE7QUFBVixhQUFuQixFQUFxQ1osSUFBckMsQ0FBMEMsZ0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDaEQsc0NBQWdCZ08sSUFBaEI7QUFBQSxzQkFBUzVNLElBQVQ7QUFDRXhCLDBCQUFRb08sSUFBUixDQUFha0csV0FBYixDQUF5QjlTLEtBQUk0RixFQUE3QixFQUFpQ3lPLEdBQWpDLEVBQXNDcEIsS0FBdEMsQ0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqRCxhQUhEO0FBSUQsV0FMRCxNQUtPO0FBQ0x6VSxvQkFBUW9PLElBQVIsQ0FBYWtHLFdBQWIsQ0FBeUJ3QixRQUFRdFUsR0FBakMsRUFBc0NxVSxHQUF0QyxFQUEyQ3BCLEtBQTNDLENBQWlELFlBQU0sQ0FBRSxDQUF6RDtBQUNEO0FBQ0YsU0FURCxNQVNPO0FBQ0x6VSxrQkFBUW9PLElBQVIsQ0FBYXlFLEtBQWIsQ0FBbUI7QUFBQztBQUFELFdBQW5CLEVBQWdFelMsSUFBaEUsQ0FBcUUsZ0JBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDM0Usb0NBQWdCZ08sSUFBaEI7QUFBQSxvQkFBUzVNLEtBQVQ7QUFDRXhCLHdCQUFRb08sSUFBUixDQUFha0csV0FBYixDQUF5QjlTLE1BQUk0RixFQUE3QixFQUFpQ3lPLEdBQWpDLEVBQXNDcEIsS0FBdEMsQ0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1cxUSxDLEVBQVk7QUFBQSx5Q0FBTm1RLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNMkIsTUFBTTtBQUFFdEIsWUFBSXhRLENBQU47QUFBU21RLGNBQU1BO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2UsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVEsV0FBVixDQUFzQkksR0FBdEI7QUFDaEI7OztrQ0FDYTtBQUNaLFVBQUksQ0FBQyxLQUFLRyxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLeEUsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS3VFLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWhCLE9BQU8sS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYWpWLFFBQVFxVSxPQUFSLENBQWdCNEIsT0FBaEIsQ0FBd0I7QUFBRXJULGNBQU0sS0FBS0E7QUFBYixPQUF4QixDQUF0QztBQUNBcVMsV0FBS2tCLFlBQUwsQ0FBa0JoQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBS0YsSUFBTCxHQUFZLElBQWxCO0FBQUEsT0FBOUI7QUFDRDs7OzJDQUNzQnBPLEUsRUFBSTtBQUFBOztBQUN6QjdHLGNBQVFxVSxPQUFSLENBQWdCK0IsU0FBaEIsQ0FBMEJqQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q0YsYUFBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUt6RCxLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLMEQsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDdk8sRUFBRCxJQUFPQSxJQUFQO0FBQ0QsT0FIRDtBQUlEOzs7O0VBbEZ3QmpJLGUiLCJmaWxlIjoiY29udGVudC9zaWRlYmFyL3NpZGViYXIud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvc2lkZWJhci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6Zm91bmQnOiAndXBkYXRlRW50cnlPbkZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6ICdzeW5jJyxcclxuICBhcmVhX2hpc3Rvcnk6ICdzeW5jJyxcclxuICBhcmVhX3BhZ2Vub3RlczogJ3N5bmMnLFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcblxyXG4gIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KGVudHJ5KTtcclxuICAgICAgY29uc3QgY3VycmVudEVudHJ5ID0gISF0aGlzLmVudHJ5O1xyXG5cclxuICAgICAgdGhpcy5sb2NrZWQgPSB0aGlzLmxvY2tlZCB8fCBpc0FyciB8fCBlbnRyeS5sb2NrZWQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubG9ja2VkIHx8IGlzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubG9ja2VkICYmICFpc0Fycikge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJ5ICYmIEFycmF5LmlzQXJyYXkodGhpcy5lbnRyeSkpIHRoaXMuZW50cnkucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudHJ5ID0gW2VudHJ5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRFbnRyeSkgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlZC1lbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnc3RvcmVkOmVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uRm91bmQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUVudHJ5KGVudHJ5KTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGx5LXN0b3JlZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cnkgPSBudWxsO1xyXG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDplbnRyeScpO1xyXG4gIH0sXHJcblxyXG4gIHNldEFyZWFzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBzdG9yYWdlLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IHN0b3JhZ2Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRBcmVhcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG4gIF9nZXRfbW9kZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MgfHwgc3RvcmFnZS5zZXR0aW5ncy5hZGRvbi5hY3RpdmUpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfYXV0b3NhdmUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuYXV0b3NhdmU7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9wYWdlbm90ZXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2UucGFnZW5vdGVzIHx8IG51bGwpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1BPUlQgZnJvbSAnLi9wb3J0J1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5cclxuaW1wb3J0ICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhLWluZm9zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWdzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLW5vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmstYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbGlua3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcydcclxuXHJcbl9MMTBOKCk7XHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ29uU3RhcnQnLFxyXG4gICAgICAndG9nZ2xlZDphZGRvbic6ICdwb3dlcicsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuZW1pdCgnb3BlbmVkOnNpZGViYXInLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhci0tcGF1c2VkJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG5cclxuICAgIGlmIChvbikge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TdGFydCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ21vZGUnKS50aGVuKG1vZGUgPT4gdGhpcy5wb3dlcihtb2RlKSk7XHJcbiAgfSxcclxuICB0b2dnbGUoZW50cnkpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBpZiAoZW50cnkgJiYgX1NUT1JFLmxvY2tlZCkge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRtYXJrZXItc2lkZWJhci0tbG9ja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbDtcclxuXHJcbiAgICBpZiAoIWVudHJ5KSBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkgcmV0dXJuO1xyXG5cclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIHRoaXMudXBkYXRlTmFtZShlbnRyeS5uYW1lKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVOYW1lKG5hbWUpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXJfX25hbWUnKVswXTtcclxuICAgIGVsLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBlbC50aXRsZSA9IG5hbWU7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd0b2dnbGVkOnN5bmMtc2V0dGluZ3MnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOmVudHJ5LW9uLXNhdmUnOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAnZGVhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJzogJ2FjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3VwZGF0ZTplbnRyeT8nOiAnZGVhY3RpdmF0ZVJldHJ5JyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCcsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tcmV0cnknOiAncmV0cnlSZXN0b3JhdGlvbicsXHJcbiAgICAgICAgJyNwYWdlLWFjdGlvbi0tc2F2ZSc6ICdzYXZlJyxcclxuICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVJbW11dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJldHJ5QnRuU2hvd246IGZhbHNlLFxyXG4gIHNhdmVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tc2F2ZScpLFxyXG4gIHJldHJ5QnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXJldHJ5JyksXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy50b2dnbGVTYXZlKCk7XHJcbiAgfSxcclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICByZXRyeVJlc3RvcmF0aW9uKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gICAgdGhpcy5kZWFjdGl2YXRlUmV0cnkoKTtcclxuICB9LFxyXG4gIHRvZ2dsZVNhdmUoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdhdXRvc2F2ZScpLnRoZW4oYXV0b3NhdmUgPT4ge1xyXG4gICAgICBjb25zdCBtZXRoID0gYXV0b3NhdmUgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVTYXZlKG9uID0gdHJ1ZSkge1xyXG4gICAgaWYgKG9uKSB0aGlzLnNhdmVCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgZWxzZSB0aGlzLnNhdmVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVNhdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlU2F2ZShmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKCF0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICh0aGlzLnJldHJ5QnRuU2hvd24pIHtcclxuICAgICAgdGhpcy5yZXRyeUJ0bi5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5yZXRyeUJ0blNob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVJbW11dChlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0taW1tdXQnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmltbXV0JywgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlSW1tdXQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICBjb25zdCBtZXRoID0gZW50cnkuaW1tdXQgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLWltbXV0JykuY2xhc3NMaXN0W21ldGhdKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLnJldHJ5QWN0aXZlKSB0aGlzLmFjdGl2YXRlUmV0cnkoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1saW5rcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5saW5rJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19faWNvbic6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX3RleHQnOiAnbGluaydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxpbmsoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW46YWRkb24tcGFnZShzYiknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdjbGlja2VkOm1hcmsnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAnYWN0aXZhdGVkOm1hcmsnOiAnYWN0aXZhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1tYXJrJzogJ21hcmtBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGJ1dHRvbnM6IFtdLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpO1xyXG4gIH0sXHJcbiAgbWFya0FjdGlvbihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIG51bGwsIG51bGwsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKG1hcmtJbmZvcykge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgbGV0IHR5cGUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZSA9PT0gJ2RlbGV0ZS1oaWdobGlnaHQnIHx8XHJcbiAgICAgICAgKHR5cGVvZiBtYXJrSW5mb3NbdHlwZV0gPT09ICdib29sZWFuJyAmJiAhbWFya0luZm9zW3R5cGVdKSB8fFxyXG4gICAgICAgICh0eXBlID09PSAnZGVsZXRlLWJvb2ttYXJrJyAmJiBtYXJrSW5mb3MuYm9va21hcmspXHJcbiAgICAgICkge1xyXG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtlcnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncyc6ICdyZW5kZXInLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAndG9nZ2xlTWFya2VyQnV0dG9ucycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLm1hcmtlcl9fY29sb3InOiAnY2hhbmdlJyxcclxuICAgICAgICAnLm1hcmtlcl9fY2InOiAnc2VsZWN0J1xyXG4gICAgICB9LFxyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya2VyX19hcHBseSc6ICdhcHBseUNvbG9yJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b21hcmtFbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiAoIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5zeW5jICYmICFzdG9yYWdlLnN5bmMuc2V0dGluZ3MpIHtcclxuICAgICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgaWYgKCFtYXJrZXJzKSByZXR1cm4gdGhpcztcclxuICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tbGVmdCcpO1xyXG4gICAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tcmlnaHQnKTtcclxuICAgICAgY29uc3QgZnJhZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBmcmFnTGVmdCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgcyA9IE1hdGguY2VpbChPYmplY3Qua2V5cyhtYXJrZXJzKS5sZW5ndGggLyAyKTtcclxuICAgICAgbGV0IGNvdW50ID0gMCwgbSwgYm94LCBpbnB1dCwgZXhhbXBsZVRleHQsIGJ1dHRvbiwgY29sb3IsIGNiQm94LCBjYiwgY2JMYWJlbCwgY2JTcGFuO1xyXG5cclxuICAgICAgbGVmdENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgcmlnaHRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBleGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5leHRyYWN0QmdDb2xvcihtYXJrZXJzW21dLnN0eWxlKTtcclxuXHJcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdtYXJrZXIgdS1jZic7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ21hcmtlcl9fY29sb3InO1xyXG4gICAgICAgIGlucHV0LmlkID0gJ21hcmtlci0nICsgbTtcclxuICAgICAgICBpbnB1dC5uYW1lID0gbTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbG9yO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX3RleHQnO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXJrZXJzW21dLnN0eWxlKTtcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXItJyArIG0pO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWFya2VyX19hcHBseSc7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiQm94LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiLWJveCc7XHJcbiAgICAgICAgY2IuY2xhc3NOYW1lID0gJ21hcmtlcl9fY2InO1xyXG4gICAgICAgIGNiLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYi50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICBjYi5pZCA9ICdtYXJrZXJfX2NiLS0nICsgbTtcclxuICAgICAgICBjYi5uYW1lID0gJ21hcmtlci1jYic7XHJcbiAgICAgICAgY2JMYWJlbC5jbGFzc05hbWUgPSAnZmFrZS1yYic7XHJcbiAgICAgICAgY2JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXJfX2NiLS0nICsgbSk7XHJcbiAgICAgICAgY2JTcGFuLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIyOWEpO1xyXG5cclxuICAgICAgICBjYkxhYmVsLmFwcGVuZENoaWxkKGNiU3Bhbik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2IpO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiTGFiZWwpO1xyXG5cclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY2JCb3gpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ID4gMyAmJiBjb3VudCA+IHMpIHtcclxuICAgICAgICAgIGZyYWdMZWZ0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZyYWdSaWdodC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbSA9IG0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBtID0gbSA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IG07XHJcbiAgICAgICAgZXhhbXBsZVRleHQuaW5uZXJUZXh0ID0gbTtcclxuICAgICAgICBpZiAoIWNvbG9yKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ1JpZ2h0KTtcclxuICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnTGVmdCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2F1dG8nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2VyX19jYi0tbScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYXV0bycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGV4dHJhY3RCZ0NvbG9yKHN0eWxlcykge1xyXG4gICAgbGV0IHNwbGl0ID0gc3R5bGVzLnNwbGl0KCc7JyksXHJcbiAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcclxuICAgICAgICBjb2xvciA9ICcnLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHN0eWxlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHN0eWxlID0gc3BsaXRbaV07XHJcbiAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgY29sb3IgPSBzdHlsZS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfSxcclxuICBjaGFuZ2UoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlOmJnLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgfSxcclxuICBzZWxlY3QoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFwcGx5Q29sb3IoZSwgZWwpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpoaWdobGlnaHQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZU1hcmtlckJ1dHRvbnMoc2hvdykge1xyXG4gICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSByZXR1cm47XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ3NldEF0dHJpYnV0ZSc7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlcl9fYXBwbHknKSkuZm9yRWFjaChidG4gPT4gYnRuW21ldGhdKCdkaXNhYmxlZCcsIHRydWUpKTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmtlckJ1dHRvbnMoc3RhdGUuc2VsZWN0aW9uKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnOiAnc2V0TWFya0lEcycsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JyA6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrX190ZXh0JzogJ2FjdGl2YXRlJyxcclxuICAgICAgICAnLm1hcmtfX25vdGUtYnRuJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbmF2JzogJ25hdicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1tYXJrcyc6ICdmb2xkTGlzdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1hcmtzOiBbXSxcclxuICBtYXJrSURzOiBudWxsLFxyXG4gIGxlbmd0aDogMCxcclxuICBjdXJyZW50OiAtMSxcclxuICBzZXRGaWx0ZXJzOiBmYWxzZSxcclxuICB0b2dnbGVNYXA6IHsgJzEnOiBbZmFsc2UsIGZhbHNlXSwgJzInOiBbdHJ1ZSwgZmFsc2VdLCAnMyc6IFtmYWxzZSwgdHJ1ZV0sICc0JzogW3RydWUsIHRydWVdIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeSA9IF9TVE9SRS5lbnRyeTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnNldE1hcmtzKCk7XHJcbiAgICAgIGlmICghdGhpcy5zZXRGaWx0ZXJzKSB0aGlzLnJlbmRlclNWR0ZpbHRlcnMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXRNYXJrcygpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeTtcclxuICAgIGxldCBtYXJrcyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGVudHJ5LmZvckVhY2goZSA9PiBtYXJrcyA9IG1hcmtzLmNvbmNhdChlLm1hcmtzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya0lEcyA9IHRoaXMubWFya0lEcztcclxuICAgIC8vdGhpcy5sZW5ndGggPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAvL3RoaXMubWFya3MgPSBtYXJrSURzID8gbWFya3Muc29ydCgobTEsIG0yKSA9PiBtYXJrSURzLmluZGV4T2YobTEuaWQpIDwgbWFya0lEcy5pbmRleE9mKG0yLmlkKSkgOiBtYXJrcztcclxuICAgIHRoaXMubWFya3MgPSBtYXJrSURzID9cclxuICAgICAgbWFya0lEcy5tYXAoaWQgPT4gbWFya3MuZmluZChtYXJrID0+IG1hcmsuaWQgPT0gaWQpKSA6XHJcbiAgICAgIG1hcmtzO1xyXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLm1hcmtzLmxlbmd0aDtcclxuICB9LFxyXG4gIHNldE1hcmtJRHMoaWRzKSB7XHJcbiAgICB0aGlzLm1hcmtJRHMgPSBpZHM7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyU1ZHRmlsdGVycygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgdG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHt9O1xyXG4gICAgbGV0IGksIGM7XHJcbiAgICBmb3IgKGkgaW4gX1NFVFRJTkdTLk5PVEVfQ09MT1JTKSB7XHJcbiAgICAgICBjID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTW2ldO1xyXG4gICAgICBjb2xvcnNbaS50b0xvd2VyQ2FzZSgpXSA9ICcwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMSwyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigzLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDUsMikpICsgJyAwIDAgMCAxIDAnO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcjtcclxuICAgIGZvciAoaSBpbiBjb2xvcnMpIHtcclxuICAgICAgZmlsdGVyID0gdG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsdGVyJylbMF0uaWQgPSAnZmlsdGVyLS0nICsgaTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmZUNvbG9yTWF0cml4JylbMF0uc2V0QXR0cmlidXRlKCd2YWx1ZXMnLCBjb2xvcnNbaV0pO1xyXG4gICAgICBib2R5LmFwcGVuZENoaWxkKGZpbHRlcilcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RmlsdGVycyA9IHRydWU7XHJcbiAgfSxcclxuICBjb252ZXJ0SGV4KGhleCkge1xyXG4gICAgcmV0dXJuICgoMTYgKiBOdW1iZXIoJzB4JyArIGhleFswXSkpICsgTnVtYmVyKCcweCcgKyBoZXhbMV0pKSAvIDI1NTtcclxuICB9LFxyXG4gIHJlbmRlckxpc3QoKSB7XHJcbiAgICBjb25zdCBtYXJrVG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IG1hcmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICBsZXQgbWFya0NvbnRhaW5lcjtcclxuXHJcbiAgICBtYXJrc0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICB0aGlzLm1hcmtzLmZvckVhY2goKG1hcmssIGkpID0+IHtcclxuICAgICAgaWYgKG1hcmspIHtcclxuICAgICAgICBtYXJrQ29udGFpbmVyID0gbWFya1RtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuaWQgPSAnJztcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX190ZXh0JylbMF07XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXJrLnRleHQpO1xyXG4gICAgICAgIGxldCBjb2xvciA9IG1hcmsuc3R5bGUuaW5kZXhPZignYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGxldCBoYXNOb3RlID0gbWFyay5ub3RlICYmICh0eXBlb2YgbWFyay5ub3RlID09PSAnc3RyaW5nJyB8fCBtYXJrLm5vdGUudGV4dCk7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvciA9PT0gLTEgPyAndHJhbnNwYXJlbnQnIDogbWFyay5zdHlsZS5zdWJzdHIoY29sb3IgKyAxNywgNyk7XHJcbiAgICAgICAgbGV0IG5vdGUsIG5vdGVDb2xvciwgbm90ZVRleHQsIG5vdGVCdG4sIG5vdGVOb2RlO1xyXG5cclxuICAgICAgICB0ZXh0Tm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRleHROb2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGhhc05vdGUpIHtcclxuICAgICAgICAgIG5vdGUgPSBtYXJrLm5vdGU7XHJcbiAgICAgICAgICBub3RlQ29sb3IgPSBub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgbm90ZVRleHQgPSBub3RlLnRleHQgfHwgbm90ZTtcclxuICAgICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFyay0tbm90ZScpO1xyXG4gICAgICAgICAgbm90ZUJ0biA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZS1idG4nKVswXTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtYnRuLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICAgIG5vdGVOb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF07XHJcbiAgICAgICAgICBub3RlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub3RlVGV4dCkpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWFya0NvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFya3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH0sXHJcbiAgbmF2KGUsIGVsKSB7XHJcbiAgICBjb25zdCBkaXIgPSAxICogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICB0aGlzLmN1cnJlbnQgKz0gZGlyO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoIC0gMTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVMaXN0SXRlbShpZCkge1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHRoaXMuY3VycmVudCA9IGlkO1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstLWFjdGl2ZScpWzBdO1xyXG4gICAgaWYgKGN1cnJlbnRJdGVtKSBjdXJyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWlkPVwiJyArIFt0aGlzLmN1cnJlbnRdICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOm5leHQtbWFyaycsIHRoaXMuY3VycmVudCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgxKmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfSxcclxuICBmb2xkTGlzdChlLCBlbCkge1xyXG4gICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICBpZiAodmFsICE9IDApIHtcclxuICAgICAgY29uc3QgbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgICAgY29uc3QgdG9nZ2xlU2V0dGluZ3MgPSB0aGlzLnRvZ2dsZU1hcFt2YWxdO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGUoJ3RleHQnLCB0b2dnbGVTZXR0aW5nc1swXSk7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCdub3RlJywgdG9nZ2xlU2V0dGluZ3NbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKHR5cGUsIHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX18nICsgdHlwZSkpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdFttZXRoXSgndW5mb2xkZWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWV0YScpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgeWVzID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3llcycpO1xyXG4gICAgICBjb25zdCBubyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX251bWJlci1tYXJrcycpLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19sYXN0LW1vZGlmaWVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcblxyXG4gICAgICBbJ3N5bmNlZCcsICdpbW11dCddXHJcbiAgICAgICAgLmZvckVhY2goZmllbGQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfXycgKyBmaWVsZCkuaW5uZXJUZXh0ID0gZW50cnlbZmllbGRdID8geWVzIDogbm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ2RlYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ2FjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnZGVhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnOiAnb25Ob3Rlc1N0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tcGFnZSc6ICdwYWdlQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKHR5cGUsIG9uKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLScgKyB0eXBlKTtcclxuICAgIGlmIChvbikge1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5ib29rbWFyaykgdGhpcy5hY3RpdmF0ZUJvb2ttYXJrKCk7XHJcbiAgfSxcclxuICBvbk5vdGVzU3RhdGUobm90ZXMpIHtcclxuICAgIGlmIChub3RlcykgdGhpcy5hY3RpdmF0ZU5vdGVzKCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1ub3RlcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3Rlcyc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJyNhZGQtbm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgICAndG1ub3RlbWluaW1pemUnOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZXNhdmUnOiAnc2F2ZSdcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLXBhZ2Utbm90ZXMnOiAndG9nZ2xlTm90ZXMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGVzOiBbXSxcclxuICBub3RlRWxzOiB7fSxcclxuICBpZDogMCxcclxuICBjdXJyZW50Q29sb3I6ICd5ZWxsb3cnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgPSB0YWIudXJsO1xyXG4gICAgICBfU1RPUkUuZ2V0KCdwYWdlbm90ZXMnKS50aGVuKHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgICAgcGFnZW5vdGVzID0gcGFnZW5vdGVzICYmIHBhZ2Vub3Rlc1t1cmxdID8gcGFnZW5vdGVzW3VybF0gOiBudWxsO1xyXG4gICAgICAgIGxldCBsLCBpZDtcclxuICAgICAgICBpZiAocGFnZW5vdGVzICYmIChsID0gcGFnZW5vdGVzLmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubm90ZXMgPSBwYWdlbm90ZXM7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gdGhpcy5hZGROb3RlKHBhZ2Vub3Rlc1tsXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBNYXRoLm1heCh0aGlzLmlkLCBpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KCEhdGhpcy5ub3Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVOb3RlcyhudWxsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzYXZlKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZ2V0QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgIG5vdGUudGV4dCA9IGVsLnByZXZpb3VzU2libGluZy52YWx1ZTtcclxuICAgICAgbm90ZS5uYW1lID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Utbm90ZScsIHRoaXMudXJsLCB0aGlzLm5vdGVzKTtcclxuICB9LFxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBbXTtcclxuICAgIHRoaXMubm90ZUVscyA9IHt9O1xyXG4gICAgdGhpcy5pZCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3RlID0gbm90ZS50eXBlID8gbnVsbCA6IG5vdGU7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpO1xyXG4gICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZS10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gbm90ZUVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF07XHJcbiAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgbGV0IGlkO1xyXG4gICAgaWYgKG5vdGUpIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSBub3RlLmlkO1xyXG4gICAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IG5vdGUudGV4dCB8fCAnJztcclxuICAgICAgaGVhZGVyLnZhbHVlID0gbm90ZS5uYW1lIHx8ICcnO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgbm90ZS5jb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSArK3RoaXMuaWQ7XHJcbiAgICAgIHRoaXMubm90ZXMucHVzaCh7IGlkLCB0ZXh0OiAnJywgY29sb3I6IHRoaXMuY3VycmVudENvbG9yIH0pO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub3RlRWwsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBBcnJheS5mcm9tKG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCkpO1xyXG5cclxuICAgIHRoaXMubm90ZUVsc1tpZF0gPSBub3RlRWw7XHJcblxyXG4gICAgdGhpcy50b2dnbGVTZWxlY3QodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY3VycmVudENvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZSA9IHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lLnJlcGxhY2UoLy0tXFx3Ky8sICctLScgKyBjb2xvcik7XHJcbiAgICB0aGlzLmdldEJ5SWQoaWQpLmNvbG9yID0gY29sb3I7XHJcbiAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgbm90ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGUpO1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICB0aGlzLm5vdGVzLnNwbGljZSh0aGlzLm5vdGVzLmluZGV4T2YodGhpcy5nZXRCeUlkKGlkKSksIDEpO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KGZhbHNlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZVNlbGVjdChzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykuY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHRvZ2dsZVBhbGV0dGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZXBhbGV0dGUnKVswXTtcclxuICAgIHBhbGV0dGUuY2xhc3NMaXN0LnRvZ2dsZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBpZiAoIXBhbGV0dGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRpc3BsYXktLW5vbmUnKSkge1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIG5vdGUuY2xhc3NMaXN0LnRvZ2dsZSgndG1ub3RlLS1taW4nKTtcclxuICAgIGlmICghbm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rtbm90ZS0tbWluJykpIHtcclxuICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS52YWx1ZSA9IDA7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgaWYgKGVsLnZhbHVlID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbm90ZSwgdGV4dGFyZWE7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZCA9PSBpZCk7XHJcbiAgfSxcclxuICBhZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKSB7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAnc2hvd0VudHJ5U3BlY2lmaWNUYWJzJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFiX190aXRsZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX19uYW1lJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX3RvZ2dsZSc6ICd0b2dnbGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0YWJzOiB7fSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoIXNldHRpbmdzLnNiKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRhYlNldHRpbmdzID0gc2V0dGluZ3Muc2IudGFicztcclxuICAgICAgZm9yIChsZXQgdGFiIGluIHRhYlNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS0nICsgdGFiKTtcclxuICAgICAgICBpZiAodGFiU2V0dGluZ3NbdGFiXS51bmZvbGRlZCkgdGhpcy5vcGVuKHRhYik7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNsb3NlKHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9wZW4odGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgY2xvc2UodGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QuYWRkKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLm5vZGVOYW1lID09PSAnSDInID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICBjb25zdCB0YWIgPSBpZC5zcGxpdCgnLS0nKS5wb3AoKTtcclxuICAgIGNvbnN0IHRhYkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiRWwuY2xhc3NMaXN0LnRvZ2dsZSgndGFiLS1mb2xkZWQnKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDpzaWRlYmFyLXRhYicsIHRhYiwgIXRhYkVsLmNsYXNzTGlzdC5jb250YWlucygndGFiLS1mb2xkZWQnKSk7XHJcbiAgfSxcclxuICBzaG93RW50cnlTcGVjaWZpY1RhYnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi0tZW50cnknKSlcclxuICAgICAgLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGFncycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFnc19fcmVtb3ZlJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICAgJyNhZGQtdGFnJzogJ2FkZFRhZydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclRhZyh0YWcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJyk7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtIHUtb3ZlcmZsb3ctLWVsbGlwc2lzJztcclxuICAgIGRlbC5jbGFzc05hbWUgPSAndGFnc19fcmVtb3ZlJztcclxuICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGFnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHRhZztcclxuICAgIGRlbC5hcHBlbmRDaGlsZCh4KTtcclxuICAgIGVsLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKCkge1xyXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YWcnKTtcclxuICAgIGxldCB0YWcgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCF0YWcpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnYWRkOnRhZycsIHRhZywgX1NUT1JFLmVudHJ5KTtcclxuICAgIGlucC52YWx1ZSA9ICcnO1xyXG4gICAgdGFnLnNwbGl0KCcgJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlOnRhZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSwgX1NUT1JFLmVudHJ5KTtcclxuICAgIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5wYXJlbnROb2RlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10aGVtZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLnRoZW1lLW9wdCc6ICdvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRoZW1lOiAnZGVmYXVsdCcsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgdGhlbWUgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5zYiAmJiBzZXR0aW5ncy5zYi50aGVtZSA/IHNldHRpbmdzLnNiLnRoZW1lIDogJ2RlZmF1bHQnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGhlbWUtLSR7dGhlbWV9YCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2hhbmdlKGUsIGVsKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNpZGViYXItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgfSxcclxuICB1cGRhdGUodGhlbWUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIGlmICh0aGVtZSA9PT0gJ2RlZmF1bHQnKSByZXR1cm47XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgdGV4dG1hcmtlci1zaWRlYmFyLS0ke3RoZW1lfWA7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG5cclxuICAgIGlmICghc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ3NpZGViYXInLFxyXG4gIHR5cGU6ICdwcml2aWxlZ2VkJyxcclxuICBldmVudHM6IHtcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpzY3JvbGwtdG8tYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjp0b2dnbGUtbm90ZXMnLFxyXG4gICAgICAnc2lkZWJhcjpuZXh0LW1hcmsnLFxyXG4gICAgICAncmVtb3ZlOnRhZycsXHJcbiAgICAgICdhZGQ6dGFnJyxcclxuICAgICAgJ29wZW46YWRkb24tcGFnZShzYiknLFxyXG4gICAgICAnb3BlbmVkOnNpZGViYXInLFxyXG4gICAgICAndXBkYXRlZDpwYWdlLW5vdGUnLFxyXG4gICAgICAndG9nZ2xlZDpzaWRlYmFyLXRhYicsXHJcbiAgICAgICdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNpZGViYXItdGhlbWUnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=