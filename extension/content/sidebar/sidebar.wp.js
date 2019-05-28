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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

var _store = __webpack_require__(/*! ./../../utils/store */ "./utils/store.js");

var _port = __webpack_require__(/*! ./../../utils/port */ "./utils/port.js");

var _hashless = __webpack_require__(/*! ./../../utils/hashless */ "./utils/hashless.js");

var _l10n = __webpack_require__(/*! ./../../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports._COPY = _copy._COPY;
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._EXTEND = _extend2["default"];
exports._MODULE = _module._MODULE;
exports._DOMMODULE = _dommodule._DOMMODULE;
exports._STORE = _store._STORE;
exports._PORT = _port._PORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync',
      'saved:entry': 'updateEntry',
      'entry:found': 'updateEntryOnFound',
      'entry:found-for-tab': 'updateEntry',
      'entry:deleted-for-tab': 'resume'
    }
  },
  env: 'sidebar',
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

/***/ }),

/***/ "./content/sidebar/index.js":
/*!**********************************!*\
  !*** ./content/sidebar/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/sidebar/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _port = __webpack_require__(/*! ./port */ "./content/sidebar/port.js");

var _port2 = _interopRequireDefault(_port);

var _store = __webpack_require__(/*! ./_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./modules/themes */ "./content/sidebar/modules/themes.js");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('mode').then(function (mode) {
      return _this.power(mode);
    });
  },
  toggle: function toggle(entry) {
    var sidebar = document.getElementById('textmarker-sidebar');

    if (entry && _store2["default"].locked) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('history-actions'),
  events: {
    ENV: {
      'started:app': 'toggleSave',
      'updated:settings': 'toggleSave',
      'set-areas-after-sync-change': 'toggleSave',
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

    _store2["default"].get('autosave').then(function (autosave) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  frame: 0,
  buttons: [],
  autoinit: function autoinit() {
    this.buttons = Array.from(this.el.getElementsByTagName('button'));
  },
  markAction: function markAction(e, el) {
    if (el.hasAttribute('disabled')) return;
    this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
      tab: 'active',
      frameId: this.frame
    });
  },
  activate: function activate(markInfos, sender) {
    this.frame = sender && sender.frameId ? sender.frameId : 0;
    this.buttons.forEach(function (btn) {
      var type = btn.getAttribute('data-action');

      if (type === 'copy' || type === 'delete-highlight' || typeof markInfos[type] === 'boolean' && !markInfos[type] || type === 'delete-bookmark' && markInfos.bookmark) {
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
      'set-areas-after-sync-change': 'render',
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
  frame: 0,
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
      tab: 'active',
      frameId: this.frame
    });
  },
  applyColor: function applyColor(e, el) {
    if (el.classList.contains('disabled')) return;
    this.emit('sidebar:highlight', el.getAttribute('data-key'), {
      tab: 'active',
      frameId: this.frame
    });
  },
  toggleMarkerButtons: function toggleMarkerButtons(show, sender) {
    if (this.automarkEnabled) return;
    this.frame = sender && sender.frameId ? sender.frameId : 0;
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

var _globalSettings = __webpack_require__(/*! ./../../../data/global-settings */ "./data/global-settings.js");

var _globalSettings2 = _interopRequireDefault(_globalSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  render: function render(a, b, c) {
    var entry = this.entry = _store2["default"].entry;

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
  setMarkIDs: function setMarkIDs(ids, b, c) {
    this.markIDs = ids;
    this.render();
  },
  renderSVGFilters: function renderSVGFilters() {
    var body = document.body;
    var tmpl = document.getElementById('filter-template');
    var colors = {};
    var i, c;

    for (i in _globalSettings2["default"].NOTE_COLORS) {
      c = _globalSettings2["default"].NOTE_COLORS[i];
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--notes'),
  events: {
    ENV: {
      'updated:pagenotes': 'render'
    },
    DOM: {
      click: {
        '.add-note': 'addNote',
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

      _store2["default"].get('pagenotes').then(function (pagenotes) {
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('settings').then(function (settings) {
      if (!settings || !settings.sb) return;
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._DOMMODULE({
  el: document.getElementById('tab--tags'),
  events: {
    ENV: {
      'stored:entry': 'render'
    },
    DOM: {
      click: {
        '.tags__remove': 'removeTag',
        '.add-tag': 'addTag'
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
    this.emit('add:tag', tag, _store2["default"].entry);
    inp.value = '';
    tag.split(' ').forEach(function (tag) {
      return _this2.renderTag(tag);
    });
  },
  removeTag: function removeTag(e, el) {
    this.emit('remove:tag', el.getAttribute('data-tag'), _store2["default"].entry);
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

var _store = __webpack_require__(/*! ./../_store */ "./content/sidebar/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _store2["default"].get('settings').then(function (settings) {
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
    var sidebar = document.getElementById('textmarker-sidebar');
    var className = 'textmarker-sidebar--dark';

    if (theme === 'default') {
      sidebar.classList.remove(className);
    } else {
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

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: ['change:bg-setting', 'error:browser-console', 'sidebar:highlight', 'sidebar:delete-highlight', 'sidebar:bookmark', 'sidebar:delete-bookmark', 'sidebar:note', 'sidebar:immut', 'sidebar:save-changes', 'sidebar:retry-restoration', 'sidebar:undo', 'sidebar:redo', 'sidebar:copy', 'sidebar:scroll-to-bookmark', 'sidebar:toggle-notes', 'sidebar:next-mark', 'remove:tag', 'add:tag', 'open:addon-page(sb)', 'opened:sidebar', 'updated:page-note', 'toggled:sidebar-tab', 'sidebar:selected-marker', 'changed:sidebar-theme']
  }
});

/***/ }),

/***/ "./content/sidebar/sass/index.scss":
/*!*****************************************!*\
  !*** ./content/sidebar/sass/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/default-storage.js":
/*!*********************************!*\
  !*** ./data/default-storage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  version: browser.runtime.getManifest().version,
  settings: {
    shortcuts: {
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false, true],
      b: ['ctrlKey-altKey', true, true],
      d: ['shiftKey', false, true],
      '-b': ['', '', true],
      m: ['', true, true],
      w: ['', true, true],
      n: ['', '', true],
      '2': ['', true],
      '3': ['', true],
      arrowup: ['altKey', false, false],
      arrowdown: ['altKey', false, false],
      sb: ['', '', true],
      cm: ['', true]
    },
    markers: {
      '1': {
        style: 'background-color:#dd99ff;'
      },
      '2': {
        style: 'background-color:#66bbff;'
      },
      '3': {
        style: 'background-color:#55ff55;'
      },
      '4': {
        style: 'background-color:#ff6666;color:#ffffff;'
      },
      '5': {
        style: 'background-color:#ffcc00;'
      },
      m: {
        style: 'background-color:#ffee00;'
      }
    },
    history: {
      autosave: true,
      saveInPriv: false,
      dropLosses: true,
      immut: false,
      naming: 'title',
      download: 'json',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      view: 'list',
      pp: 10,
      ignoreHash: true
    },
    addon: {
      active: true,
      autocs: true,
      iframes: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      noteplainview: false,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      vipNote: true,
      customSearch: false,
      tmuipos: 'top-right',
      markmethod: 'popup',
      progressbar: true,
      tbbpower: false
    },
    sb: {
      tabs: {
        meta: {
          unfolded: false
        },
        tags: {
          unfolded: false
        },
        notes: {
          unfolded: false
        },
        markers: {
          unfolded: true
        },
        actions: {
          unfolded: true
        },
        marks: {
          unfolded: false
        },
        links: {
          unfolded: false
        },
        themes: {
          unfolded: false
        }
      },
      theme: 'default'
    }
  },
  history: {
    entries: {}
  },
  pagenotes: {},
  sync: {
    settings: false,
    history: false,
    pagenotes: false
  }
};

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
exports["default"] = {
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
exports._DOMMODULE = undefined;

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
exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    var _this;

    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_DOMMODULE).call(this, obj));
    _this.addListenersManually || _this.addListeners();
    !_this.autoPause || _this.setAutoPause();
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
    key: "setAutoPause",
    value: function setAutoPause() {
      var _this2 = this;

      this.on('toggled:addon', function (on) {
        if (on) _this2.addListeners();else _this2.removeListeners();
      });
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

exports["default"] = _ERRORTRACKER;

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

exports["default"] = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }

  return obj1;
};

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

exports["default"] = function () {
  document.addEventListener('DOMContentLoaded', function () {
    return translateDocument();
  }, {
    capture: false,
    passive: true,
    once: true
  });
};

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
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
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
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
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
      })["catch"](function () {});
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

exports["default"] = _default;

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
exports._MODULE = undefined;

var _mediator = __webpack_require__(/*! ./mediator */ "./utils/mediator.js");

var _mediator2 = _interopRequireDefault(_mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _MODULE =
/*#__PURE__*/
exports._MODULE = function (_MEDIATOR2) {
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
        if (_this[handler]) _this.on(e, _this.proxy(_assertThisInitialized(_this), _this[handler]));
      }
    }

    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2["default"]);

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
exports._PORT = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _PORT =
/*#__PURE__*/
exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    _this.port = null;
    var type = _this.type;
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));
    if (type === 'privileged' || type === 'background') _this.initPorting();

    _this.registerPortEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerPortEvents(events);
    }
  }, {
    key: "registerPortEvents",
    value: function registerPortEvents(events) {
      events = events || this.events;
      var oneOffEvents, connectionBasedEvents;

      if (events) {
        oneOffEvents = events.ONEOFF;

        if (oneOffEvents) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var e = _step.value;
              this.on(e, this.proxy(this, this.sendMessage, e));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
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
              this.on(f, this.proxy(this, this.postMessage, f));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }
  }, {
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
      var type = this.type;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var msg = {
        ev: e,
        args: args
      };
      if (type === 'content') browser.runtime.sendMessage(msg)["catch"](function () {});else if (type === 'background') {
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
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            });
          } else {
            browser.tabs.sendMessage(lastArg.tab, msg, {
              frameId: lastArg.frameId || 0
            })["catch"](function () {});
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
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
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

/***/ }),

/***/ "./utils/store.js":
/*!************************!*\
  !*** ./utils/store.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._STORE = undefined;

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

var _defaultStorage = __webpack_require__(/*! ../data/default-storage */ "./data/default-storage.js");

var _defaultStorage2 = _interopRequireDefault(_defaultStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _STORE =
/*#__PURE__*/
exports._STORE = function (_MODULE2) {
  _inherits(_STORE, _MODULE2);

  function _STORE(obj) {
    var _this;

    _classCallCheck(this, _STORE);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_STORE).call(this, obj));
    _this.initialized = false;
    _this.initializing = false;
    _this.area_settings = _defaultStorage2["default"].sync.settings ? 'sync' : 'local';
    _this.area_history = _defaultStorage2["default"].sync.history ? 'sync' : 'local';
    _this.area_pagenotes = _defaultStorage2["default"].sync.pagenotes ? 'sync' : 'local';
    return _this;
  }

  _createClass(_STORE, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      return browser.storage.local.get().then(function (storage) {
        if (storage && storage.sync) {
          _this2.setAreas(storage.sync);
        }
      });
    }
  }, {
    key: "setAreas",
    value: function setAreas(sync) {
      for (var area in sync) {
        this['area_' + area] = sync[area] ? 'sync' : 'local';
      }
    }
  }, {
    key: "onToggledSync",
    value: function onToggledSync() {
      var _this3 = this;

      this.init().then(function () {
        return _this3.emit('set-areas-after-sync-change');
      });
    }
  }, {
    key: "get",
    value: function get() {
      var _this4 = this;

      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

      if (this.initializing) {
        return new Promise(function (r) {
          return window.setTimeout(function () {
            return r(_this4.get(field));
          }, 10);
        });
      }

      var meth = this['_get_' + field];
      if (!meth) throw 'field ' + field + ' doesn\'t exist';

      if (!this.initialized) {
        this.initializing = true;
        this.initialized = true;
        return this.init().then(function () {
          _this4.initializing = false;
          return _this4['_get_' + field]();
        });
      }

      return this['_get_' + field]();
    }
  }, {
    key: "_get_storage",
    value: function _get_storage() {
      var _this5 = this;

      return browser.storage.local.get().then(function (localStorage) {
        return browser.storage.sync.get().then(function (syncedStorage) {
          ['version', 'logs'].forEach(function (field) {
            localStorage[field] = localStorage[field] || syncedStorage[field];
          });
          if (_this5.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
          return _this5._get_history().then(function (history) {
            localStorage.history = history;
            return localStorage;
          });
        });
      });
    }
  }, {
    key: "_get_local_storage",
    value: function _get_local_storage() {
      return browser.storage.local.get();
    }
  }, {
    key: "_get_synced_storage",
    value: function _get_synced_storage() {
      return browser.storage.sync.get();
    }
  }, {
    key: "_get_history",
    value: function _get_history() {
      return browser.storage.sync.get().then(function (syncedStorage) {
        var syncedHistory = syncedStorage.history;
        return browser.storage.local.get().then(function (localStorage) {
          var localHistory = localStorage.history;
          if (!syncedHistory) return localHistory;
          if (!localHistory) return syncedHistory; //syncedHistory.order = syncedHistory.order.concat(localHistory.order);

          for (var e in localHistory.entries) {
            syncedHistory.entries[e] = localHistory.entries[e];
          }

          return syncedHistory;
        });
      });
    }
  }, {
    key: "_get_settings",
    value: function _get_settings() {
      return browser.storage[this.area_settings].get().then(function (storage) {
        return storage.settings || _defaultStorage2["default"].settings;
      });
    }
  }, {
    key: "_get_logs",
    value: function _get_logs() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.logs) return [];
        return localStorage.logs;
      });
    }
  }, {
    key: "_get_version",
    value: function _get_version() {
      return browser.storage.local.get().then(function (localStorage) {
        if (!localStorage || !localStorage.version) {
          return browser.storage.sync.get().then(function (syncedStorage) {
            return syncedStorage.version || '';
          });
        }

        return localStorage.version;
      });
    }
  }]);

  return _STORE;
}(_module._MODULE);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiZnJhbWUiLCJidXR0b25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFya0FjdGlvbiIsImhhc0F0dHJpYnV0ZSIsImZyYW1lSWQiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsInNlbmRlciIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJhIiwiYiIsImMiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsInRvTG93ZXJDYXNlIiwiY29udmVydEhleCIsInN1YnN0ciIsImZpbHRlciIsImNsb25lTm9kZSIsImhleCIsIk51bWJlciIsIm1hcmtUbXBsIiwiZnJhZ21lbnQiLCJtYXJrc0NvbnRhaW5lciIsIm1hcmtDb250YWluZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImluZGV4T2YiLCJoYXNOb3RlIiwibm90ZSIsIm5vdGVDb2xvciIsIm5vdGVUZXh0Iiwibm90ZUJ0biIsIm5vdGVOb2RlIiwiYm9yZGVyQ29sb3IiLCJuYXYiLCJkaXIiLCJhY3RpdmF0ZUxpc3RJdGVtIiwiY3VycmVudEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiZm9sZExpc3QiLCJ2YWwiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZU5vdGUiLCJ5ZXMiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZmllbGQiLCJkYXRlIiwicmVwbGFjZSIsInAiLCJxIiwiYWN0aXZhdGVCb29rbWFyayIsImRlYWN0aXZhdGVCb29rbWFyayIsImFjdGl2YXRlTm90ZXMiLCJkZWFjdGl2YXRlTm90ZXMiLCJwYWdlQWN0aW9uIiwib25Ob3Rlc1N0YXRlIiwibm90ZXMiLCJub3RlRWxzIiwiY3VycmVudENvbG9yIiwidXJsIiwiYWRkTm90ZSIsIm1heCIsInRvZ2dsZVNlbGVjdCIsInRvZ2dsZU5vdGVzIiwiZ2V0QnlJZCIsInByZXZpb3VzU2libGluZyIsImNvbnRhaW5lciIsIm5vdGVFbCIsInRleHRhcmVhIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNoYW5nZUNvbG9yIiwicmVtb3ZlTm90ZSIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwidG9nZ2xlUGFsZXR0ZSIsInBhbGV0dGUiLCJhZGp1c3RUZXh0YXJlYUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJzYiIsInRhYlNldHRpbmdzIiwidW5mb2xkZWQiLCJvcGVuIiwiY2xvc2UiLCJub2RlTmFtZSIsInBvcCIsInRhYkVsIiwic2hvd0VudHJ5U3BlY2lmaWNUYWJzIiwidGFncyIsInRhZyIsInJlbmRlclRhZyIsImRlbCIsIngiLCJhZGRUYWciLCJpbnAiLCJ0cmltIiwicmVtb3ZlVGFnIiwidGhlbWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIkNPTk5FQ1RJT04iLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0Iiwic2hvcnRjdXRzIiwieiIsInkiLCJkIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsIm5hbWluZyIsImRvd25sb2FkIiwiY29weSIsInNhdmVOb3RlIiwic29ydGVkIiwidmlldyIsInBwIiwiaWdub3JlSGFzaCIsImF1dG9jcyIsImlmcmFtZXMiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJvdmVyd3JpdGUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImNoYW5nZWROb3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsImN1c3RvbVNlYXJjaCIsInRtdWlwb3MiLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwibWV0YSIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsImVudHJpZXMiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsIk1BWF9MT0dfRU5UUklFUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidGFyZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9leHRyYSIsInNldCIsIndpbmRvdyIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIk9ORU9GRiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZFJlc3BvbnNlIiwibXNnIiwibGFzdEFyZyIsInVuZGVmaW5lZCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJfREVGQVVMVF9TVE9SQUdFIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJzZXRBcmVhcyIsImFyZWEiLCJpbml0IiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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QUFNRDs7OztFQXRHeUJoUixlIiwiZmlsZSI6ImNvbnRlbnQvc2lkZWJhci9zaWRlYmFyLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L3NpZGViYXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnLFxyXG4gICAgICAnc2F2ZWQ6ZW50cnknOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6Zm91bmQnOiAndXBkYXRlRW50cnlPbkZvdW5kJyxcclxuICAgICAgJ2VudHJ5OmZvdW5kLWZvci10YWInOiAndXBkYXRlRW50cnknLFxyXG4gICAgICAnZW50cnk6ZGVsZXRlZC1mb3ItdGFiJzogJ3Jlc3VtZSdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBlbnY6ICdzaWRlYmFyJyxcclxuICBlbnRyeTogbnVsbCxcclxuICBsb2NrZWQ6IGZhbHNlLFxyXG5cclxuICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheShlbnRyeSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbnRyeSA9ICEhdGhpcy5lbnRyeTtcclxuXHJcbiAgICAgIHRoaXMubG9ja2VkID0gdGhpcy5sb2NrZWQgfHwgaXNBcnIgfHwgZW50cnkubG9ja2VkO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCB8fCBpc0Fycikge1xyXG4gICAgICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmxvY2tlZCAmJiAhaXNBcnIpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyeSAmJiBBcnJheS5pc0FycmF5KHRoaXMuZW50cnkpKSB0aGlzLmVudHJ5LnB1c2goZW50cnkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnRyeSA9IFtlbnRyeV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RW50cnkpIHRoaXMuZW1pdCgndXBkYXRlZDpzdG9yZWQtZW50cnknLCB0aGlzLmVudHJ5KTtcclxuICAgICAgZWxzZSB0aGlzLmVtaXQoJ3N0b3JlZDplbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlRW50cnlPbkZvdW5kKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy51cGRhdGVFbnRyeShlbnRyeSk7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmVudHJ5ID0gbnVsbDtcclxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6ZW50cnknKTtcclxuICB9LFxyXG5cclxuXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9hdXRvc2F2ZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5hdXRvc2F2ZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3BhZ2Vub3RlcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5wYWdlbm90ZXMgfHwgbnVsbCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfUE9SVCBmcm9tICcuL3BvcnQnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgJy4vbW9kdWxlcy90aGVtZXMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RhYnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2hlYWRlcidcclxuaW1wb3J0ICcuL21vZHVsZXMvbWV0YS1pbmZvcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFncydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1ub3RlcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya2VycydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGlzdG9yeS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrLWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL3BhZ2UtYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvbWFya3MnXHJcbmltcG9ydCAnLi9tb2R1bGVzL2xpbmtzJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnb25TdGFydCcsXHJcbiAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAndG9nZ2xlJyxcclxuICAgICAgJ2luaXRpYWxseS1zdG9yZWQ6ZW50cnknOiAndG9nZ2xlJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuZWQ6c2lkZWJhcicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG5cclxuICBwb3dlcihvbikge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyLS1wYXVzZWQnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcblxyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblN0YXJ0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnbW9kZScpLnRoZW4obW9kZSA9PiB0aGlzLnBvd2VyKG1vZGUpKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlbnRyeSkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuICAgIGlmIChlbnRyeSAmJiBfU1RPUkUubG9ja2VkKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndGV4dG1hcmtlci1zaWRlYmFyLS1sb2NrZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmVsO1xyXG5cclxuICAgIGlmICghZW50cnkpIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSByZXR1cm47XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgdGhpcy51cGRhdGVOYW1lKGVudHJ5Lm5hbWUpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZU5hbWUobmFtZSkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbmFtZScpWzBdO1xyXG4gICAgZWwuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGVsLnRpdGxlID0gbmFtZTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd0b2dnbGVTYXZlJyxcclxuICAgICAgJ3VwZGF0ZWQ6ZW50cnktb24tc2F2ZSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICdkZWFjdGl2YXRlU2F2ZScsXHJcbiAgICAgICd1bnNhdmVkLWNoYW5nZXMnOiAnYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ2ZpbmlzaGVkOnJlc3RvcmF0aW9uJzogJ2FjdGl2YXRlUmV0cnknLFxyXG4gICAgICAndXBkYXRlOmVudHJ5Pyc6ICdkZWFjdGl2YXRlUmV0cnknLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0JyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd1cGRhdGVJbW11dCdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1yZXRyeSc6ICdyZXRyeVJlc3RvcmF0aW9uJyxcclxuICAgICAgICAnI3BhZ2UtYWN0aW9uLS1zYXZlJzogJ3NhdmUnLFxyXG4gICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZUltbXV0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmV0cnlCdG5TaG93bjogZmFsc2UsXHJcbiAgc2F2ZUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1zYXZlJyksXHJcbiAgcmV0cnlCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tcmV0cnknKSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZVNhdmUoKTtcclxuICB9LFxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNhdmUtY2hhbmdlcycsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHJldHJ5UmVzdG9yYXRpb24oKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6cmV0cnktcmVzdG9yYXRpb24nLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgICB0aGlzLmRlYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlU2F2ZSgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ2F1dG9zYXZlJykudGhlbihhdXRvc2F2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBhdXRvc2F2ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIHRoaXMuc2F2ZUJ0bi5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZVNhdmUob24gPSB0cnVlKSB7XHJcbiAgICBpZiAob24pIHRoaXMuc2F2ZUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBlbHNlIHRoaXMuc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlU2F2ZSgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVTYXZlKGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAoIXRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZVJldHJ5KCkge1xyXG4gICAgaWYgKHRoaXMucmV0cnlCdG5TaG93bikge1xyXG4gICAgICB0aGlzLnJldHJ5QnRuLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLnJldHJ5QnRuU2hvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZUltbXV0KGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1pbW11dCcpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aW1tdXQnLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICB1cGRhdGVJbW11dChlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IG1ldGggPSBlbnRyeS5pbW11dCA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0taW1tdXQnKS5jbGFzc0xpc3RbbWV0aF0oJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1ib3gnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUucmV0cnlBY3RpdmUpIHRoaXMuYWN0aXZhdGVSZXRyeSgpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWxpbmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmxpbmsnOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX19pY29uJzogJ2xpbmsnLFxyXG4gICAgICAgICcubGlua19fdGV4dCc6ICdsaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbGluayhlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIHRoaXMuZW1pdCgnb3BlbjphZGRvbi1wYWdlKHNiKScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2NsaWNrZWQ6bWFyayc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICdhY3RpdmF0ZWQ6bWFyayc6ICdhY3RpdmF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW1hcmsnOiAnbWFya0FjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZnJhbWU6IDAsXHJcbiAgYnV0dG9uczogW10sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5idXR0b25zID0gQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSk7XHJcbiAgfSxcclxuICBtYXJrQWN0aW9uKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgbnVsbCwgbnVsbCwgeyB0YWI6ICdhY3RpdmUnLCBmcmFtZUlkOiB0aGlzLmZyYW1lIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUobWFya0luZm9zLCBzZW5kZXIpIHtcclxuICAgIHRoaXMuZnJhbWUgPSBzZW5kZXIgJiYgc2VuZGVyLmZyYW1lSWQgPyBzZW5kZXIuZnJhbWVJZCA6IDA7XHJcblxyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgbGV0IHR5cGUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZSA9PT0gJ2NvcHknIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gJ2RlbGV0ZS1oaWdobGlnaHQnIHx8XHJcbiAgICAgICAgKHR5cGVvZiBtYXJrSW5mb3NbdHlwZV0gPT09ICdib29sZWFuJyAmJiAhbWFya0luZm9zW3R5cGVdKSB8fFxyXG4gICAgICAgICh0eXBlID09PSAnZGVsZXRlLWJvb2ttYXJrJyAmJiBtYXJrSW5mb3MuYm9va21hcmspXHJcbiAgICAgICkge1xyXG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtlcnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAncmVuZGVyJyxcclxuICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICdyZW5kZXInLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nOiAndG9nZ2xlTWFya2VyQnV0dG9ucycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLm1hcmtlcl9fY29sb3InOiAnY2hhbmdlJyxcclxuICAgICAgICAnLm1hcmtlcl9fY2InOiAnc2VsZWN0J1xyXG4gICAgICB9LFxyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya2VyX19hcHBseSc6ICdhcHBseUNvbG9yJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZnJhbWU6IDAsXHJcbiAgYXV0b21hcmtFbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiAoIXN0b3JhZ2Uuc3luYyB8fCBzdG9yYWdlLnN5bmMuc2V0dGluZ3MpKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5zeW5jICYmICFzdG9yYWdlLnN5bmMuc2V0dGluZ3MpIHtcclxuICAgICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgaWYgKCFtYXJrZXJzKSByZXR1cm4gdGhpcztcclxuICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tbGVmdCcpO1xyXG4gICAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJzLWNvbnRhaW5lci0tcmlnaHQnKTtcclxuICAgICAgY29uc3QgZnJhZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBmcmFnTGVmdCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgcyA9IE1hdGguY2VpbChPYmplY3Qua2V5cyhtYXJrZXJzKS5sZW5ndGggLyAyKTtcclxuICAgICAgbGV0IGNvdW50ID0gMCwgbSwgYm94LCBpbnB1dCwgZXhhbXBsZVRleHQsIGJ1dHRvbiwgY29sb3IsIGNiQm94LCBjYiwgY2JMYWJlbCwgY2JTcGFuO1xyXG5cclxuICAgICAgbGVmdENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuICAgICAgcmlnaHRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKG0gaW4gbWFya2Vycykge1xyXG4gICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgIGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBleGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2JCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbG9yID0gdGhpcy5leHRyYWN0QmdDb2xvcihtYXJrZXJzW21dLnN0eWxlKTtcclxuXHJcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdtYXJrZXIgdS1jZic7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ21hcmtlcl9fY29sb3InO1xyXG4gICAgICAgIGlucHV0LmlkID0gJ21hcmtlci0nICsgbTtcclxuICAgICAgICBpbnB1dC5uYW1lID0gbTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbG9yO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX3RleHQnO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXJrZXJzW21dLnN0eWxlKTtcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXItJyArIG0pO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWFya2VyX19hcHBseSc7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiQm94LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiLWJveCc7XHJcbiAgICAgICAgY2IuY2xhc3NOYW1lID0gJ21hcmtlcl9fY2InO1xyXG4gICAgICAgIGNiLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYi50eXBlID0gJ3JhZGlvJztcclxuICAgICAgICBjYi5pZCA9ICdtYXJrZXJfX2NiLS0nICsgbTtcclxuICAgICAgICBjYi5uYW1lID0gJ21hcmtlci1jYic7XHJcbiAgICAgICAgY2JMYWJlbC5jbGFzc05hbWUgPSAnZmFrZS1yYic7XHJcbiAgICAgICAgY2JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtYXJrZXJfX2NiLS0nICsgbSk7XHJcbiAgICAgICAgY2JTcGFuLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIyOWEpO1xyXG5cclxuICAgICAgICBjYkxhYmVsLmFwcGVuZENoaWxkKGNiU3Bhbik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2IpO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiTGFiZWwpO1xyXG5cclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY2JCb3gpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ID4gMyAmJiBjb3VudCA+IHMpIHtcclxuICAgICAgICAgIGZyYWdMZWZ0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZyYWdSaWdodC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbSA9IG0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBtID0gbSA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IG07XHJcbiAgICAgICAgZXhhbXBsZVRleHQuaW5uZXJUZXh0ID0gbTtcclxuICAgICAgICBpZiAoIWNvbG9yKSBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ1JpZ2h0KTtcclxuICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnTGVmdCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2F1dG8nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2VyX19jYi0tbScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYXV0bycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGV4dHJhY3RCZ0NvbG9yKHN0eWxlcykge1xyXG4gICAgbGV0IHNwbGl0ID0gc3R5bGVzLnNwbGl0KCc7JyksXHJcbiAgICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcclxuICAgICAgICBjb2xvciA9ICcnLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHN0eWxlO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHN0eWxlID0gc3BsaXRbaV07XHJcbiAgICAgIGlmIChzdHlsZS5pbmNsdWRlcygnYmFja2dyb3VuZC1jb2xvcicpKSB7XHJcbiAgICAgICAgY29sb3IgPSBzdHlsZS5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfSxcclxuICBjaGFuZ2UoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlOmJnLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgfSxcclxuICBzZWxlY3QoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICB9LFxyXG4gIGFwcGx5Q29sb3IoZSwgZWwpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpoaWdobGlnaHQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JyksIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICB9LFxyXG4gIHRvZ2dsZU1hcmtlckJ1dHRvbnMoc2hvdywgc2VuZGVyKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvbWFya0VuYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuZnJhbWUgPSBzZW5kZXIgJiYgc2VuZGVyLmZyYW1lSWQgPyBzZW5kZXIuZnJhbWVJZCA6IDA7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ3NldEF0dHJpYnV0ZSc7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtlcl9fYXBwbHknKSkuZm9yRWFjaChidG4gPT4gYnRuW21ldGhdKCdkaXNhYmxlZCcsIHRydWUpKTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmtlckJ1dHRvbnMoc3RhdGUuc2VsZWN0aW9uKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vLi4vLi4vLi4vZGF0YS9nbG9iYWwtc2V0dGluZ3MnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1hcmtzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2VudHJ5Om9yZGVyZWQtbWFya3MnOiAnc2V0TWFya0lEcycsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JyA6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrX190ZXh0JzogJ2FjdGl2YXRlJyxcclxuICAgICAgICAnLm1hcmtfX25vdGUtYnRuJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbmF2JzogJ25hdidcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLW1hcmtzJzogJ2ZvbGRMaXN0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWFya3M6IFtdLFxyXG4gIG1hcmtJRHM6IG51bGwsXHJcbiAgbGVuZ3RoOiAwLFxyXG4gIGN1cnJlbnQ6IC0xLFxyXG4gIHNldEZpbHRlcnM6IGZhbHNlLFxyXG4gIHRvZ2dsZU1hcDogeyAnMSc6IFtmYWxzZSwgZmFsc2VdLCAnMic6IFt0cnVlLCBmYWxzZV0sICczJzogW2ZhbHNlLCB0cnVlXSwgJzQnOiBbdHJ1ZSwgdHJ1ZV0gfSxcclxuXHJcbiAgcmVuZGVyKGEsYixjKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnkgPSBfU1RPUkUuZW50cnk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgdGhpcy5zZXRNYXJrcygpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0RmlsdGVycykgdGhpcy5yZW5kZXJTVkdGaWx0ZXJzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0TWFya3MoKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnk7XHJcbiAgICBsZXQgbWFya3MgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBlbnRyeS5mb3JFYWNoKGUgPT4gbWFya3MgPSBtYXJrcy5jb25jYXQoZS5tYXJrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtJRHMgPSB0aGlzLm1hcmtJRHM7XHJcbiAgICAvL3RoaXMubGVuZ3RoID0gbWFya3MubGVuZ3RoO1xyXG4gICAgLy90aGlzLm1hcmtzID0gbWFya0lEcyA/IG1hcmtzLnNvcnQoKG0xLCBtMikgPT4gbWFya0lEcy5pbmRleE9mKG0xLmlkKSA8IG1hcmtJRHMuaW5kZXhPZihtMi5pZCkpIDogbWFya3M7XHJcbiAgICB0aGlzLm1hcmtzID0gbWFya0lEcyA/XHJcbiAgICAgIG1hcmtJRHMubWFwKGlkID0+IG1hcmtzLmZpbmQobWFyayA9PiBtYXJrLmlkID09IGlkKSkgOlxyXG4gICAgICBtYXJrcztcclxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tYXJrcy5sZW5ndGg7XHJcbiAgfSxcclxuICBzZXRNYXJrSURzKGlkcyxiLGMpIHtcclxuICAgIHRoaXMubWFya0lEcyA9IGlkcztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXJTVkdGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0bXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgY29sb3JzID0ge307XHJcbiAgICBsZXQgaSwgYztcclxuICAgIGZvciAoaSBpbiBfU0VUVElOR1MuTk9URV9DT0xPUlMpIHtcclxuICAgICAgIGMgPSBfU0VUVElOR1MuTk9URV9DT0xPUlNbaV07XHJcbiAgICAgIGNvbG9yc1tpLnRvTG93ZXJDYXNlKCldID0gJzAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigxLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDMsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoNSwyKSkgKyAnIDAgMCAwIDEgMCc7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyO1xyXG4gICAgZm9yIChpIGluIGNvbG9ycykge1xyXG4gICAgICBmaWx0ZXIgPSB0bXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWx0ZXInKVswXS5pZCA9ICdmaWx0ZXItLScgKyBpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZlQ29sb3JNYXRyaXgnKVswXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlcycsIGNvbG9yc1tpXSk7XHJcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRGaWx0ZXJzID0gdHJ1ZTtcclxuICB9LFxyXG4gIGNvbnZlcnRIZXgoaGV4KSB7XHJcbiAgICByZXR1cm4gKCgxNiAqIE51bWJlcignMHgnICsgaGV4WzBdKSkgKyBOdW1iZXIoJzB4JyArIGhleFsxXSkpIC8gMjU1O1xyXG4gIH0sXHJcbiAgcmVuZGVyTGlzdCgpIHtcclxuICAgIGNvbnN0IG1hcmtUbXBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgbWFya3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgIGxldCBtYXJrQ29udGFpbmVyO1xyXG5cclxuICAgIG1hcmtzQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgIHRoaXMubWFya3MuZm9yRWFjaCgobWFyaywgaSkgPT4ge1xyXG4gICAgICBpZiAobWFyaykge1xyXG4gICAgICAgIG1hcmtDb250YWluZXIgPSBtYXJrVG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5pZCA9ICcnO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX3RleHQnKVswXTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1hcmsudGV4dCk7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gbWFyay5zdHlsZS5pbmRleE9mKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgbGV0IGhhc05vdGUgPSBtYXJrLm5vdGUgJiYgKHR5cGVvZiBtYXJrLm5vdGUgPT09ICdzdHJpbmcnIHx8IG1hcmsubm90ZS50ZXh0KTtcclxuICAgICAgICBjb2xvciA9IGNvbG9yID09PSAtMSA/ICd0cmFuc3BhcmVudCcgOiBtYXJrLnN0eWxlLnN1YnN0cihjb2xvciArIDE3LCA3KTtcclxuICAgICAgICBsZXQgbm90ZSwgbm90ZUNvbG9yLCBub3RlVGV4dCwgbm90ZUJ0biwgbm90ZU5vZGU7XHJcblxyXG4gICAgICAgIHRleHROb2RlLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGV4dE5vZGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoaGFzTm90ZSkge1xyXG4gICAgICAgICAgbm90ZSA9IG1hcmsubm90ZTtcclxuICAgICAgICAgIG5vdGVDb2xvciA9IG5vdGUuY29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICAgICAgICBub3RlVGV4dCA9IG5vdGUudGV4dCB8fCBub3RlO1xyXG4gICAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYXJrLS1ub3RlJyk7XHJcbiAgICAgICAgICBub3RlQnRuID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlLWJ0bicpWzBdO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS1idG4tLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgICAgbm90ZU5vZGUgPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXTtcclxuICAgICAgICAgIG5vdGVOb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vdGVUZXh0KSk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtLScgKyBub3RlQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChtYXJrQ29udGFpbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtYXJrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfSxcclxuICBuYXYoZSwgZWwpIHtcclxuICAgIGNvbnN0IGRpciA9IDEgKiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuY3VycmVudCArPSBkaXI7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID49IHRoaXMubGVuZ3RoKSB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgZWxzZSBpZiAodGhpcy5jdXJyZW50IDwgMCkgdGhpcy5jdXJyZW50ID0gdGhpcy5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKCk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZUxpc3RJdGVtKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykgdGhpcy5jdXJyZW50ID0gaWQ7XHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFyay0tYWN0aXZlJylbMF07XHJcbiAgICBpZiAoY3VycmVudEl0ZW0pIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtaWQ9XCInICsgW3RoaXMuY3VycmVudF0gKyAnXCJdJykuY2xhc3NMaXN0LmFkZCgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6bmV4dC1tYXJrJywgdGhpcy5jdXJyZW50LCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gICAgdGhpcy5hY3RpdmF0ZUxpc3RJdGVtKDEqZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICB9LFxyXG4gIGZvbGRMaXN0KGUsIGVsKSB7XHJcbiAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgIGlmICh2YWwgIT0gMCkge1xyXG4gICAgICBjb25zdCBtYXJrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgICBjb25zdCB0b2dnbGVTZXR0aW5ncyA9IHRoaXMudG9nZ2xlTWFwW3ZhbF07XHJcblxyXG4gICAgICB0aGlzLnRvZ2dsZSgndGV4dCcsIHRvZ2dsZVNldHRpbmdzWzBdKTtcclxuICAgICAgdGhpcy50b2dnbGUoJ25vdGUnLCB0b2dnbGVTZXR0aW5nc1sxXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgfSxcclxuICB0b2dnbGUodHlwZSwgc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfXycgKyB0eXBlKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0W21ldGhdKCd1bmZvbGRlZCcpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tZXRhJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB5ZXMgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneWVzJyk7XHJcbiAgICAgIGNvbnN0IG5vID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbnVtYmVyLW1hcmtzJykuaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fY3JlYXRlZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2xhc3QtbW9kaWZpZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuXHJcbiAgICAgIFsnc3luY2VkJywgJ2ltbXV0J11cclxuICAgICAgICAuZm9yRWFjaChmaWVsZCA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fJyArIGZpZWxkKS5pbm5lclRleHQgPSBlbnRyeVtmaWVsZF0gPyB5ZXMgOiBubyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tYWN0aW9ucycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdhZGRlZDpib29rbWFyayc6ICdhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ3JlbW92ZWQ6Ym9va21hcmsnOiAnZGVhY3RpdmF0ZUJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnOiAnYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdyZW1vdmVkOmxhc3Qtbm90ZSc6ICdkZWFjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdub3Rlcy1zdGF0ZSc6ICdvbk5vdGVzU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1wYWdlJzogJ3BhZ2VBY3Rpb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUodHlwZSwgb24pIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbi0tJyArIHR5cGUpO1xyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCB7IHRhYjogJ2FjdGl2ZScgfSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLmJvb2ttYXJrKSB0aGlzLmFjdGl2YXRlQm9va21hcmsoKTtcclxuICB9LFxyXG4gIG9uTm90ZXNTdGF0ZShub3Rlcykge1xyXG4gICAgaWYgKG5vdGVzKSB0aGlzLmFjdGl2YXRlTm90ZXMoKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW5vdGVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZW5vdGVzJzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFkZC1ub3RlJzogJ2FkZE5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVjb2xvcic6ICdjaGFuZ2VDb2xvcicsXHJcbiAgICAgICAgJ3Rtbm90ZWN1c3RvbWl6ZSc6ICd0b2dnbGVQYWxldHRlJyxcclxuICAgICAgICAndG1ub3RlZGVsZXRlJzogJ3JlbW92ZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVtaW5pbWl6ZSc6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAndG1ub3Rlc2F2ZSc6ICdzYXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtcGFnZS1ub3Rlcyc6ICd0b2dnbGVOb3RlcydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbm90ZXM6IFtdLFxyXG4gIG5vdGVFbHM6IHt9LFxyXG4gIGlkOiAwLFxyXG4gIGN1cnJlbnRDb2xvcjogJ3llbGxvdycsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgX0dFVF9BQ1RJVkVfVEFCKCkudGhlbih0YWIgPT4ge1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnVybCA9IHRhYi51cmw7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3BhZ2Vub3RlcycpLnRoZW4ocGFnZW5vdGVzID0+IHtcclxuICAgICAgICBwYWdlbm90ZXMgPSBwYWdlbm90ZXMgJiYgcGFnZW5vdGVzW3VybF0gPyBwYWdlbm90ZXNbdXJsXSA6IG51bGw7XHJcbiAgICAgICAgbGV0IGwsIGlkO1xyXG4gICAgICAgIGlmIChwYWdlbm90ZXMgJiYgKGwgPSBwYWdlbm90ZXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgdGhpcy5ub3RlcyA9IHBhZ2Vub3RlcztcclxuICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgaWQgPSB0aGlzLmFkZE5vdGUocGFnZW5vdGVzW2xdKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGgubWF4KHRoaXMuaWQsIGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QoISF0aGlzLm5vdGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZU5vdGVzKG51bGwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHNhdmUoZSwgZWwpIHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBjb25zdCBub3RlID0gdGhpcy5nZXRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgbm90ZS50ZXh0ID0gZWwucHJldmlvdXNTaWJsaW5nLnZhbHVlO1xyXG4gICAgICBub3RlLm5hbWUgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF0udmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQ6cGFnZS1ub3RlJywgdGhpcy51cmwsIHRoaXMubm90ZXMpO1xyXG4gIH0sXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5ub3RlcyA9IFtdO1xyXG4gICAgdGhpcy5ub3RlRWxzID0ge307XHJcbiAgICB0aGlzLmlkID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJykudGV4dENvbnRlbnQgPSAnJztcclxuICB9LFxyXG5cclxuICBhZGROb3RlKG5vdGUpIHtcclxuICAgIG5vdGUgPSBub3RlLnR5cGUgPyBudWxsIDogbm90ZTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGVzJyk7XHJcbiAgICBjb25zdCBub3RlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlLXRlbXBsYXRlJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICBjb25zdCBoZWFkZXIgPSBub3RlRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXTtcclxuICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICBsZXQgaWQ7XHJcbiAgICBpZiAobm90ZSkge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9IG5vdGUuaWQ7XHJcbiAgICAgIHRleHRhcmVhLnRleHRDb250ZW50ID0gbm90ZS50ZXh0IHx8ICcnO1xyXG4gICAgICBoZWFkZXIudmFsdWUgPSBub3RlLm5hbWUgfHwgJyc7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyBub3RlLmNvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZCA9IG5vdGVFbC5pZCA9ICsrdGhpcy5pZDtcclxuICAgICAgdGhpcy5ub3Rlcy5wdXNoKHsgaWQsIHRleHQ6ICcnLCBjb2xvcjogdGhpcy5jdXJyZW50Q29sb3IgfSk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgdGhpcy5jdXJyZW50Q29sb3IpO1xyXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vdGVFbCwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIEFycmF5LmZyb20obm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKSk7XHJcblxyXG4gICAgdGhpcy5ub3RlRWxzW2lkXSA9IG5vdGVFbDtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdCh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfSxcclxuICBjaGFuZ2VDb2xvcihlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdXJyZW50Q29sb3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lID0gdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUucmVwbGFjZSgvLS1cXHcrLywgJy0tJyArIGNvbG9yKTtcclxuICAgIHRoaXMuZ2V0QnlJZChpZCkuY29sb3IgPSBjb2xvcjtcclxuICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICByZW1vdmVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICBub3RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm90ZSk7XHJcbiAgICBkZWxldGUgdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIHRoaXMubm90ZXMuc3BsaWNlKHRoaXMubm90ZXMuaW5kZXhPZih0aGlzLmdldEJ5SWQoaWQpKSwgMSk7XHJcbiAgICB0aGlzLnNhdmUoKTtcclxuICAgIGlmICghdGhpcy5ub3Rlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy50b2dnbGVTZWxlY3QoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlU2VsZWN0KHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS5jbGFzc0xpc3RbbWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlUGFsZXR0ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBjb25zdCBwYWxldHRlID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlcGFsZXR0ZScpWzBdO1xyXG4gICAgcGFsZXR0ZS5jbGFzc0xpc3QudG9nZ2xlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIGlmICghcGFsZXR0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3UtZGlzcGxheS0tbm9uZScpKSB7XHJcbiAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgbm90ZS5jbGFzc0xpc3QudG9nZ2xlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgaWYgKCFub3RlLmNsYXNzTGlzdC5jb250YWlucygndG1ub3RlLS1taW4nKSkge1xyXG4gICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLnZhbHVlID0gMDtcclxuICB9LFxyXG4gIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwudmFsdWUgPT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBub3RlLCB0ZXh0YXJlYTtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgbm90ZSA9IHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGdldEJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdGVzLmZpbmQobm90ZSA9PiBub3RlLmlkID09IGlkKTtcclxuICB9LFxyXG4gIGFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpIHtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRleHRhcmVhLnNjcm9sbEhlaWdodCArIDEwICsgJ3B4JztcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdzaG93RW50cnlTcGVjaWZpY1RhYnMnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy50YWJfX3RpdGxlJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX25hbWUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fdG9nZ2xlJzogJ3RvZ2dsZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRhYnM6IHt9LFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGlmICghc2V0dGluZ3MgfHwgIXNldHRpbmdzLnNiKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHRhYlNldHRpbmdzID0gc2V0dGluZ3Muc2IudGFicztcclxuICAgICAgZm9yIChsZXQgdGFiIGluIHRhYlNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS0nICsgdGFiKTtcclxuICAgICAgICBpZiAodGFiU2V0dGluZ3NbdGFiXS51bmZvbGRlZCkgdGhpcy5vcGVuKHRhYik7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNsb3NlKHRhYik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9wZW4odGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgY2xvc2UodGFiKSB7XHJcbiAgICB0aGlzLnRhYnNbdGFiXS5jbGFzc0xpc3QuYWRkKCd0YWItLWZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLm5vZGVOYW1lID09PSAnSDInID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICBjb25zdCB0YWIgPSBpZC5zcGxpdCgnLS0nKS5wb3AoKTtcclxuICAgIGNvbnN0IHRhYkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiRWwuY2xhc3NMaXN0LnRvZ2dsZSgndGFiLS1mb2xkZWQnKTtcclxuICAgIHRoaXMuZW1pdCgndG9nZ2xlZDpzaWRlYmFyLXRhYicsIHRhYiwgIXRhYkVsLmNsYXNzTGlzdC5jb250YWlucygndGFiLS1mb2xkZWQnKSk7XHJcbiAgfSxcclxuICBzaG93RW50cnlTcGVjaWZpY1RhYnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYi0tZW50cnknKSlcclxuICAgICAgLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGFncycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFnc19fcmVtb3ZlJzogJ3JlbW92ZVRhZycsXHJcbiAgICAgICAgJy5hZGQtdGFnJzogJ2FkZFRhZydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcihlbnRyeSkge1xyXG4gICAgaWYgKGVudHJ5ICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICBjb25zdCB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlclRhZyh0YWcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJyk7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtIHUtb3ZlcmZsb3ctLWVsbGlwc2lzJztcclxuICAgIGRlbC5jbGFzc05hbWUgPSAndGFnc19fcmVtb3ZlJztcclxuICAgIGRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJywgdGFnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHRhZztcclxuICAgIGRlbC5hcHBlbmRDaGlsZCh4KTtcclxuICAgIGVsLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gIH0sXHJcbiAgYWRkVGFnKCkge1xyXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YWcnKTtcclxuICAgIGxldCB0YWcgPSBpbnAudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCF0YWcpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnYWRkOnRhZycsIHRhZywgX1NUT1JFLmVudHJ5KTtcclxuICAgIGlucC52YWx1ZSA9ICcnO1xyXG4gICAgdGFnLnNwbGl0KCcgJykuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgfSxcclxuICByZW1vdmVUYWcoZSwgZWwpIHtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlOnRhZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YWcnKSwgX1NUT1JFLmVudHJ5KTtcclxuICAgIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5wYXJlbnROb2RlKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10aGVtZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnLnRoZW1lLW9wdCc6ICdvbkNoYW5nZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHRoZW1lOiAnZGVmYXVsdCcsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgY29uc3QgdGhlbWUgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5zYiAmJiBzZXR0aW5ncy5zYi50aGVtZSA/IHNldHRpbmdzLnNiLnRoZW1lIDogJ2RlZmF1bHQnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGhlbWUtLSR7dGhlbWV9YCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2hhbmdlKGUsIGVsKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNpZGViYXItdGhlbWUnLCB0aGVtZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgfSxcclxuICB1cGRhdGUodGhlbWUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJyk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSAndGV4dG1hcmtlci1zaWRlYmFyLS1kYXJrJztcclxuICAgIGlmICh0aGVtZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdyZW1vdmU6dGFnJyxcclxuICAgICAgJ2FkZDp0YWcnLFxyXG4gICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZScsXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSdcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZSxcclxuICAgICAgaWZyYW1lczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=