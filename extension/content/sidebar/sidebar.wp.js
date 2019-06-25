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
        cbSpan.textContent = String.fromCharCode(0x25CF);
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
    var markEl = el.parentNode;
    markEl.classList.toggle('open-note');
    markEl.getElementsByClassName('mark__note')[0].classList.toggle('unfolded');
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
    document.getElementById('textmarker-sidebar').className = "textmarker-sidebar--".concat(theme);
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
      notefontsize: 12,
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
      theme: 'tm'
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
        data = browser.i18n.getMessage(l10nId, '');

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
      ['Title', 'Placeholder', 'Href'].forEach(function (attr) {
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

        if (lastArg && (tab = lastArg.tab)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiZnJhbWUiLCJidXR0b25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFya0FjdGlvbiIsImhhc0F0dHJpYnV0ZSIsImZyYW1lSWQiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsInNlbmRlciIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJhIiwiYiIsImMiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsInRvTG93ZXJDYXNlIiwiY29udmVydEhleCIsInN1YnN0ciIsImZpbHRlciIsImNsb25lTm9kZSIsImhleCIsIk51bWJlciIsIm1hcmtUbXBsIiwiZnJhZ21lbnQiLCJtYXJrc0NvbnRhaW5lciIsIm1hcmtDb250YWluZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImluZGV4T2YiLCJoYXNOb3RlIiwibm90ZSIsIm5vdGVDb2xvciIsIm5vdGVUZXh0Iiwibm90ZUJ0biIsIm5vdGVOb2RlIiwiYm9yZGVyQ29sb3IiLCJuYXYiLCJkaXIiLCJhY3RpdmF0ZUxpc3RJdGVtIiwiY3VycmVudEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiZm9sZExpc3QiLCJ2YWwiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZU5vdGUiLCJtYXJrRWwiLCJ5ZXMiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZmllbGQiLCJkYXRlIiwicmVwbGFjZSIsInAiLCJxIiwiYWN0aXZhdGVCb29rbWFyayIsImRlYWN0aXZhdGVCb29rbWFyayIsImFjdGl2YXRlTm90ZXMiLCJkZWFjdGl2YXRlTm90ZXMiLCJwYWdlQWN0aW9uIiwib25Ob3Rlc1N0YXRlIiwibm90ZXMiLCJub3RlRWxzIiwiY3VycmVudENvbG9yIiwidXJsIiwiYWRkTm90ZSIsIm1heCIsInRvZ2dsZVNlbGVjdCIsInRvZ2dsZU5vdGVzIiwiZ2V0QnlJZCIsInByZXZpb3VzU2libGluZyIsImNvbnRhaW5lciIsIm5vdGVFbCIsInRleHRhcmVhIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNoYW5nZUNvbG9yIiwicmVtb3ZlTm90ZSIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwidG9nZ2xlUGFsZXR0ZSIsInBhbGV0dGUiLCJhZGp1c3RUZXh0YXJlYUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJzYiIsInRhYlNldHRpbmdzIiwidW5mb2xkZWQiLCJvcGVuIiwiY2xvc2UiLCJub2RlTmFtZSIsInBvcCIsInRhYkVsIiwic2hvd0VudHJ5U3BlY2lmaWNUYWJzIiwidGFncyIsInRhZyIsInJlbmRlclRhZyIsImRlbCIsIngiLCJhZGRUYWciLCJpbnAiLCJ0cmltIiwicmVtb3ZlVGFnIiwidGhlbWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIkNPTk5FQ1RJT04iLCJ2ZXJzaW9uIiwicnVudGltZSIsImdldE1hbmlmZXN0Iiwic2hvcnRjdXRzIiwieiIsInkiLCJkIiwidyIsIm4iLCJhcnJvd3VwIiwiYXJyb3dkb3duIiwiY20iLCJzYXZlSW5Qcml2IiwiZHJvcExvc3NlcyIsIm5hbWluZyIsImRvd25sb2FkIiwiY29weSIsInNhdmVOb3RlIiwic29ydGVkIiwidmlldyIsInBwIiwiaWdub3JlSGFzaCIsImF1dG9jcyIsImlmcmFtZXMiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJub3RlZm9udHNpemUiLCJvdmVyd3JpdGUiLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImNoYW5nZWROb3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsImN1c3RvbVNlYXJjaCIsInRtdWlwb3MiLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwibWV0YSIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsImVudHJpZXMiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsIk1BWF9MT0dfRU5UUklFUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidGFyZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9leHRyYSIsInNldCIsIndpbmRvdyIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJvIiwiZW52RXZlbnRzIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsInJlZ2lzdGVyUG9ydEV2ZW50cyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIk9ORU9GRiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZFJlc3BvbnNlIiwibXNnIiwibGFzdEFyZyIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXppbmciLCJfREVGQVVMVF9TVE9SQUdFIiwiYXJlYV9oaXN0b3J5IiwiYXJlYV9wYWdlbm90ZXMiLCJzZXRBcmVhcyIsImFyZWEiLCJpbml0IiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiLCJsb2dzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVTQSxLLEdBQUFBLFc7UUFBT0MsZSxHQUFBQSw2QjtRQUFpQkMsTyxHQUFBQSxtQjtRQUFTQyxPLEdBQUFBLGU7UUFBU0MsVSxHQUFBQSxxQjtRQUFZQyxNLEdBQUFBLGE7UUFBUUMsSyxHQUFBQSxXO1FBQU9DLEssR0FBQUEsaUI7UUFBT0MsYSxHQUFBQSx5QjtRQUFlQyxTLEdBQUFBLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcEc7O3FCQUVlLElBQUlKLGFBQUosQ0FBVztBQUN4QkssUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixlQURiO0FBRUgscUJBQWUsYUFGWjtBQUdILHFCQUFlLG9CQUhaO0FBSUgsNkJBQXVCLGFBSnBCO0FBS0gsK0JBQXlCO0FBTHRCO0FBREMsR0FEZ0I7QUFXeEJDLEtBQUcsRUFBRSxTQVhtQjtBQVl4QkMsT0FBSyxFQUFFLElBWmlCO0FBYXhCQyxRQUFNLEVBQUUsS0FiZ0I7QUFleEJDLGFBZndCLHVCQWVaRixLQWZZLEVBZUw7QUFDakIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTUcsS0FBSyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkO0FBQ0EsVUFBTU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLTixLQUE1QjtBQUVBLFdBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLElBQWVFLEtBQWYsSUFBd0JILEtBQUssQ0FBQ0MsTUFBNUM7O0FBRUEsVUFBSSxDQUFDLEtBQUtBLE1BQU4sSUFBZ0JFLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNELE9BRkQsTUFHSyxJQUFJLEtBQUtDLE1BQUwsSUFBZSxDQUFDRSxLQUFwQixFQUEyQjtBQUM5QixZQUFJLEtBQUtILEtBQUwsSUFBY0ksS0FBSyxDQUFDQyxPQUFOLENBQWMsS0FBS0wsS0FBbkIsQ0FBbEIsRUFBNkMsS0FBS0EsS0FBTCxDQUFXTyxJQUFYLENBQWdCUCxLQUFoQixFQUE3QyxLQUNLLEtBQUtBLEtBQUwsR0FBYSxDQUFDQSxLQUFELENBQWI7QUFDTjs7QUFFRCxVQUFJTSxZQUFKLEVBQWtCLEtBQUtFLElBQUwsQ0FBVSxzQkFBVixFQUFrQyxLQUFLUixLQUF2QyxFQUFsQixLQUNLLEtBQUtRLElBQUwsQ0FBVSxjQUFWLEVBQTBCLEtBQUtSLEtBQS9CO0FBQ047QUFDRixHQWpDdUI7QUFrQ3hCUyxvQkFsQ3dCLDhCQWtDTFQsS0FsQ0ssRUFrQ0U7QUFDeEIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBS0UsV0FBTCxDQUFpQkYsS0FBakI7O0FBQ0EsVUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFMLEVBQTJCO0FBQ3pCLGFBQUtRLElBQUwsQ0FBVSx3QkFBVixFQUFvQ1IsS0FBcEM7QUFDRDtBQUNGO0FBQ0YsR0F6Q3VCO0FBMkN4QlUsUUEzQ3dCLG9CQTJDZjtBQUNQLFNBQUtWLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLTyxJQUFMLENBQVUsZUFBVjtBQUNELEdBL0N1QjtBQWtEeEJHLFdBbER3Qix1QkFrRFo7QUFDVixXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDSSxRQUFyQixJQUFpQ0osT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxLQUFqQixDQUF1QkMsTUFBNUQsRUFBb0UsT0FBTyxJQUFQO0FBQ3BFLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBdkR1QjtBQXdEeEJDLGVBeER3QiwyQkF3RFI7QUFDZCxXQUFPUixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDSSxRQUF6QixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsYUFBT0osT0FBTyxDQUFDSSxRQUFSLENBQWlCSSxPQUFqQixDQUF5QkMsUUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQTdEdUI7QUE4RHhCQyxlQTlEd0IsMkJBOERSO0FBQ2QsV0FBT1gsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0ksUUFBWjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQWhFdUI7QUFpRXhCTyxjQWpFd0IsMEJBaUVUO0FBQ2IsV0FBT1osT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQlEsT0FBckI7QUFBQSxLQUF0RCxDQUFQO0FBQ0QsR0FuRXVCO0FBb0V4QkMsZ0JBcEV3Qiw0QkFvRVA7QUFDZixXQUFPZCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDYyxTQUFSLElBQXFCLElBQXpCO0FBQUEsS0FBdEQsQ0FBUDtBQUNEO0FBdEV1QixDQUFYLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUVBLElBQUlyQyxjQUFKLENBQVk7QUFDVk8sUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLFNBRFo7QUFFSCx1QkFBaUIsT0FGZDtBQUdILHNCQUFnQixRQUhiO0FBSUgsOEJBQXdCLFFBSnJCO0FBS0gsZ0NBQTBCO0FBTHZCO0FBREMsR0FERTtBQVdWOEIsVUFYVSxzQkFXQztBQUNULFNBQUtwQixJQUFMLENBQVUsZ0JBQVYsRUFBNEI7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQTVCO0FBQ0QsR0FiUztBQWVWQyxPQWZVLGlCQWVKQyxFQWZJLEVBZUE7QUFDUixRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBcEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBaEI7O0FBRUEsUUFBSUgsRUFBSixFQUFRO0FBQ05DLGlCQUFXLENBQUNJLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGlCQUExQjtBQUNBRixhQUFPLENBQUNDLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGlCQUF6QjtBQUNELEtBSEQsTUFHTztBQUNMTixpQkFBVyxDQUFDSSxTQUFaLENBQXNCRSxNQUF0QixDQUE2QixpQkFBN0I7QUFDQUgsYUFBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBdEI7QUFDRDtBQUNGLEdBMUJTO0FBMkJWRSxTQTNCVSxxQkEyQkE7QUFBQTs7QUFDUi9DLHVCQUFPdUIsR0FBUCxDQUFXLE1BQVgsRUFBbUJDLElBQW5CLENBQXdCLFVBQUF3QixJQUFJO0FBQUEsYUFBSSxLQUFJLENBQUNWLEtBQUwsQ0FBV1UsSUFBWCxDQUFKO0FBQUEsS0FBNUI7QUFDRCxHQTdCUztBQThCVkMsUUE5QlUsa0JBOEJIekMsS0E5QkcsRUE4Qkk7QUFDWixRQUFNMEMsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQWhCOztBQUNBLFFBQUlsQyxLQUFLLElBQUlSLG1CQUFPUyxNQUFwQixFQUE0QjtBQUMxQnlDLGFBQU8sQ0FBQ04sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsNEJBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xLLGFBQU8sQ0FBQ04sU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsNEJBQXpCO0FBQ0Q7QUFDRjtBQXJDUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUNBOzs7Ozs7QUFFQSxJQUFJL0MsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixRQURiO0FBRUgsOEJBQXdCO0FBRnJCO0FBREMsR0FGSztBQVNiOEMsUUFUYSxrQkFTTjVDLEtBVE0sRUFTQztBQUNaLFFBQU02QyxNQUFNLEdBQUcsS0FBS0YsRUFBcEI7QUFFQSxRQUFJLENBQUMzQyxLQUFMLEVBQVk2QyxNQUFNLENBQUNULFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGlCQUFyQixFQUFaLEtBQ0ssSUFBSWpDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQUosRUFBMEI7QUFFL0I2QyxVQUFNLENBQUNULFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGlCQUF4QjtBQUNBLFNBQUtRLFVBQUwsQ0FBZ0I5QyxLQUFLLENBQUMrQyxJQUF0QjtBQUNELEdBakJZO0FBbUJiRCxZQW5CYSxzQkFtQkZDLElBbkJFLEVBbUJJO0FBQ2YsUUFBTUosRUFBRSxHQUFHLEtBQUtBLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsY0FBL0IsRUFBK0MsQ0FBL0MsQ0FBWDtBQUNBTCxNQUFFLENBQUNNLFNBQUgsR0FBZUYsSUFBZjtBQUNBSixNQUFFLENBQUNPLEtBQUgsR0FBV0gsSUFBWDtBQUNEO0FBdkJZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXhELGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gscUJBQWUsWUFEWjtBQUVILDBCQUFvQixZQUZqQjtBQUdILHFDQUErQixZQUg1QjtBQUlILCtCQUF5QixnQkFKdEI7QUFLSCxxQkFBZSxnQkFMWjtBQU1ILHlCQUFtQixjQU5oQjtBQU9ILDhCQUF3QixlQVByQjtBQVFILHVCQUFpQixpQkFSZDtBQVNILHNCQUFnQixhQVRiO0FBVUgsb0JBQWMsYUFWWDtBQVdILGdDQUEwQjtBQVh2QixLQURDO0FBY05xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsK0JBQXVCLGtCQURsQjtBQUVMLDhCQUFzQixNQUZqQjtBQUdMLG1CQUFXO0FBSE47QUFESjtBQWRDLEdBRks7QUF5QmJDLGVBQWEsRUFBRSxLQXpCRjtBQTBCYkMsU0FBTyxFQUFFckIsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQTFCSTtBQTJCYnFCLFVBQVEsRUFBRXRCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0EzQkc7QUE2QmJOLFVBN0JhLHNCQTZCRjtBQUNULFNBQUs0QixVQUFMO0FBQ0QsR0EvQlk7QUFpQ2JDLE1BakNhLGtCQWlDTjtBQUNMLFNBQUtqRCxJQUFMLENBQVUsc0JBQVYsRUFBa0M7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQWxDO0FBQ0QsR0FuQ1k7QUFvQ2I2QixrQkFwQ2EsOEJBb0NNO0FBQ2pCLFNBQUtsRCxJQUFMLENBQVUsMkJBQVYsRUFBdUM7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQXZDO0FBQ0EsU0FBSzhCLGVBQUw7QUFDRCxHQXZDWTtBQXdDYkgsWUF4Q2Esd0JBd0NBO0FBQUE7O0FBQ1hoRSx1QkFBT3VCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBTSxRQUFRLEVBQUk7QUFDdEMsVUFBTXNDLElBQUksR0FBR3RDLFFBQVEsR0FBRyxLQUFILEdBQVcsUUFBaEM7O0FBQ0EsV0FBSSxDQUFDZ0MsT0FBTCxDQUFhbEIsU0FBYixDQUF1QndCLElBQXZCLEVBQTZCLGlCQUE3QjtBQUNELEtBSEQ7QUFJRCxHQTdDWTtBQThDYkMsY0E5Q2EsMEJBOENXO0FBQUEsUUFBWDlCLEVBQVcsdUVBQU4sSUFBTTtBQUN0QixRQUFJQSxFQUFKLEVBQVEsS0FBS3VCLE9BQUwsQ0FBYVEsZUFBYixDQUE2QixVQUE3QixFQUFSLEtBQ0ssS0FBS1IsT0FBTCxDQUFhUyxZQUFiLENBQTBCLFVBQTFCLEVBQXNDLElBQXRDO0FBQ04sR0FqRFk7QUFrRGJDLGdCQWxEYSw0QkFrREk7QUFDZixTQUFLSCxZQUFMLENBQWtCLEtBQWxCO0FBQ0QsR0FwRFk7QUFxRGJJLGVBckRhLDJCQXFERztBQUNkLFFBQUksQ0FBQyxLQUFLWixhQUFWLEVBQXlCO0FBQ3ZCLFdBQUtFLFFBQUwsQ0FBY25CLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBLFdBQUtlLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGLEdBMURZO0FBMkRiTSxpQkEzRGEsNkJBMkRLO0FBQ2hCLFFBQUksS0FBS04sYUFBVCxFQUF3QjtBQUN0QixXQUFLRSxRQUFMLENBQWNuQixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDQSxXQUFLZ0IsYUFBTCxHQUFxQixLQUFyQjtBQUNEO0FBQ0YsR0FoRVk7QUFpRWJhLGFBakVhLHVCQWlFREMsQ0FqRUMsRUFpRUV4QixFQWpFRixFQWlFTTtBQUNqQkEsTUFBRSxHQUFHQSxFQUFFLENBQUNQLFNBQUgsQ0FBYWdDLFFBQWIsQ0FBc0IsZUFBdEIsSUFBeUN6QixFQUF6QyxHQUE4Q0EsRUFBRSxDQUFDMEIsVUFBdEQ7QUFDQTFCLE1BQUUsQ0FBQ1AsU0FBSCxDQUFhSyxNQUFiLENBQW9CLFFBQXBCO0FBQ0EsU0FBS2pDLElBQUwsQ0FBVSxlQUFWLEVBQTJCbUMsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCLFFBQXRCLENBQTNCLEVBQTREO0FBQUV2QyxTQUFHLEVBQUU7QUFBUCxLQUE1RDtBQUNELEdBckVZO0FBc0VieUMsYUF0RWEsdUJBc0VEdEUsS0F0RUMsRUFzRU07QUFDakIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTTRELElBQUksR0FBRzVELEtBQUssQ0FBQ3VFLEtBQU4sR0FBYyxLQUFkLEdBQXNCLFFBQW5DO0FBQ0F0QyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDRSxTQUE5QyxDQUF3RHdCLElBQXhELEVBQThELFFBQTlEO0FBQ0EzQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLFNBQXRDLENBQWdERSxNQUFoRCxDQUF1RCxpQkFBdkQ7QUFDRCxLQUpELE1BSU87QUFDTEwsY0FBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsaUJBQXBEO0FBQ0Q7QUFDRixHQTlFWTtBQStFYm1DLGFBL0VhLHVCQStFREMsS0EvRUMsRUErRU07QUFDakIsUUFBSUEsS0FBSyxDQUFDQyxXQUFWLEVBQXVCLEtBQUtULGFBQUw7QUFDeEI7QUFqRlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBLElBQUkxRSxpQkFBSixDQUFlO0FBQ2JvRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTnNELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxpQkFBUyxNQURKO0FBRUwsdUJBQWUsTUFGVjtBQUdMLHVCQUFlO0FBSFY7QUFESjtBQURDLEdBRks7QUFZYnVCLE1BWmEsZ0JBWVJSLENBWlEsRUFZTHhCLEVBWkssRUFZRDtBQUNWQSxNQUFFLEdBQUdBLEVBQUUsQ0FBQ1AsU0FBSCxDQUFhZ0MsUUFBYixDQUFzQixNQUF0QixJQUFnQ3pCLEVBQWhDLEdBQXFDQSxFQUFFLENBQUMwQixVQUE3QztBQUNBLFNBQUs3RCxJQUFMLENBQVUscUJBQVYsRUFBaUNtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQWpDO0FBQ0Q7QUFmWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7Ozs7OztBQUVBLElBQUlyRixpQkFBSixDQUFlO0FBQ2JvRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCLFVBRGI7QUFFSCx3QkFBa0I7QUFGZixLQURDO0FBS05xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsZ0NBQXdCO0FBRG5CO0FBREo7QUFMQyxHQUZLO0FBYWJ5QixPQUFLLEVBQUUsQ0FiTTtBQWNiQyxTQUFPLEVBQUUsRUFkSTtBQWdCYmxELFVBaEJhLHNCQWdCRjtBQUNULFNBQUtrRCxPQUFMLEdBQWUxRSxLQUFLLENBQUMyRSxJQUFOLENBQVcsS0FBS3BDLEVBQUwsQ0FBUXFDLG9CQUFSLENBQTZCLFFBQTdCLENBQVgsQ0FBZjtBQUNELEdBbEJZO0FBbUJiQyxZQW5CYSxzQkFtQkZkLENBbkJFLEVBbUJDeEIsRUFuQkQsRUFtQks7QUFDaEIsUUFBSUEsRUFBRSxDQUFDdUMsWUFBSCxDQUFnQixVQUFoQixDQUFKLEVBQWlDO0FBQ2pDLFNBQUsxRSxJQUFMLENBQVUsYUFBYW1DLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBdkIsRUFBdUQsSUFBdkQsRUFBNkQsSUFBN0QsRUFBbUU7QUFBRS9DLFNBQUcsRUFBRSxRQUFQO0FBQWlCc0QsYUFBTyxFQUFFLEtBQUtOO0FBQS9CLEtBQW5FO0FBQ0QsR0F0Qlk7QUF1QmJPLFVBdkJhLG9CQXVCSkMsU0F2QkksRUF1Qk9DLE1BdkJQLEVBdUJlO0FBQzFCLFNBQUtULEtBQUwsR0FBYVMsTUFBTSxJQUFJQSxNQUFNLENBQUNILE9BQWpCLEdBQTJCRyxNQUFNLENBQUNILE9BQWxDLEdBQTRDLENBQXpEO0FBRUEsU0FBS0wsT0FBTCxDQUFhUyxPQUFiLENBQXFCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQixVQUFJQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ1osWUFBSixDQUFpQixhQUFqQixDQUFYOztBQUNBLFVBQ0VhLElBQUksS0FBSyxNQUFULElBQ0FBLElBQUksS0FBSyxrQkFEVCxJQUVDLE9BQU9KLFNBQVMsQ0FBQ0ksSUFBRCxDQUFoQixLQUEyQixTQUEzQixJQUF3QyxDQUFDSixTQUFTLENBQUNJLElBQUQsQ0FGbkQsSUFHQ0EsSUFBSSxLQUFLLGlCQUFULElBQThCSixTQUFTLENBQUNLLFFBSjNDLEVBS0U7QUFDQUYsV0FBRyxDQUFDMUIsZUFBSixDQUFvQixVQUFwQjtBQUNBMEIsV0FBRyxDQUFDbkIsVUFBSixDQUFlakMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDRDtBQUNGLEtBWEQ7QUFZRCxHQXRDWTtBQXVDYnFELFlBdkNhLHdCQXVDQTtBQUNYLFNBQUtiLE9BQUwsQ0FBYVMsT0FBYixDQUFxQixVQUFBQyxHQUFHLEVBQUk7QUFDMUJBLFNBQUcsQ0FBQ3pCLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsSUFBN0I7QUFDQXlCLFNBQUcsQ0FBQ25CLFVBQUosQ0FBZWpDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQTdCO0FBQ0QsS0FIRDtBQUlEO0FBNUNZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQSxJQUFJOUMsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLFFBRFo7QUFFSCwwQkFBb0IsUUFGakI7QUFHSCxxQ0FBK0IsUUFINUI7QUFJSCwyQkFBcUIscUJBSmxCO0FBS0gsb0JBQWM7QUFMWCxLQURDO0FBUU5xRCxPQUFHLEVBQUU7QUFDSHlDLFlBQU0sRUFBRTtBQUNOLDBCQUFrQixRQURaO0FBRU4sdUJBQWU7QUFGVCxPQURMO0FBS0h4QyxXQUFLLEVBQUU7QUFDTCwwQkFBa0I7QUFEYjtBQUxKO0FBUkMsR0FGSztBQXFCYnlCLE9BQUssRUFBRSxDQXJCTTtBQXNCYmdCLGlCQUFlLEVBQUUsS0F0Qko7QUF3QmJqRSxVQXhCYSxzQkF3QkY7QUFDVCxTQUFLZ0IsTUFBTDtBQUNELEdBMUJZO0FBMkJiQSxRQTNCYSxvQkEyQko7QUFBQTs7QUFDUGhDLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQmlGLElBQWhCLENBQXFCL0UsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFILE9BQU8sRUFBSTtBQUN6QyxVQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksUUFBbkIsS0FBZ0MsQ0FBQ0osT0FBTyxDQUFDaUYsSUFBVCxJQUFpQmpGLE9BQU8sQ0FBQ2lGLElBQVIsQ0FBYTdFLFFBQTlELENBQUosRUFBNkU7QUFDM0UsYUFBSSxDQUFDNEUsZUFBTCxHQUF1QmhGLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQjhFLElBQWpCLENBQXNCQyxVQUF0QixLQUFxQyxNQUE1RDtBQUNBLGVBQU9uRixPQUFPLENBQUNJLFFBQVIsQ0FBaUJRLE9BQXhCO0FBQ0Q7O0FBQ0QsYUFBT2IsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsS0FBaEIsQ0FBc0JsRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQUgsT0FBTyxFQUFJO0FBQ2pELFlBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxRQUFuQixJQUErQkosT0FBTyxDQUFDaUYsSUFBdkMsSUFBK0MsQ0FBQ2pGLE9BQU8sQ0FBQ2lGLElBQVIsQ0FBYTdFLFFBQWpFLEVBQTJFO0FBQ3pFLGVBQUksQ0FBQzRFLGVBQUwsR0FBdUJoRixPQUFPLENBQUNJLFFBQVIsQ0FBaUI4RSxJQUFqQixDQUFzQkMsVUFBdEIsS0FBcUMsTUFBNUQ7QUFDQSxpQkFBT25GLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQlEsT0FBeEI7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQU5NLENBQVA7QUFPRCxLQVpELEVBYUNULElBYkQsQ0FhTSxVQUFBUyxPQUFPLEVBQUk7QUFDZixVQUFJLENBQUNBLE9BQUwsRUFBYyxPQUFPLEtBQVA7QUFDZCxVQUFNeUUsYUFBYSxHQUFHakUsUUFBUSxDQUFDQyxjQUFULENBQXdCLHlCQUF4QixDQUF0QjtBQUNBLFVBQU1pRSxjQUFjLEdBQUdsRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMEJBQXhCLENBQXZCO0FBQ0EsVUFBTWtFLFNBQVMsR0FBR25FLFFBQVEsQ0FBQ29FLHNCQUFULEVBQWxCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHckUsUUFBUSxDQUFDb0Usc0JBQVQsRUFBakI7QUFDQSxVQUFNRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxGLE9BQVosRUFBcUJtRixNQUFyQixHQUE4QixDQUF4QyxDQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLENBQVo7QUFBQSxVQUFlQyxDQUFmO0FBQUEsVUFBa0JDLEdBQWxCO0FBQUEsVUFBdUJDLEtBQXZCO0FBQUEsVUFBOEJDLFdBQTlCO0FBQUEsVUFBMkNDLE1BQTNDO0FBQUEsVUFBbURDLEtBQW5EO0FBQUEsVUFBMERDLEtBQTFEO0FBQUEsVUFBaUVDLEVBQWpFO0FBQUEsVUFBcUVDLE9BQXJFO0FBQUEsVUFBOEVDLE1BQTlFO0FBRUFyQixtQkFBYSxDQUFDakQsU0FBZCxHQUEwQixFQUExQjtBQUNBa0Qsb0JBQWMsQ0FBQ2xELFNBQWYsR0FBMkIsRUFBM0I7O0FBRUEsV0FBSzZELENBQUwsSUFBVXJGLE9BQVYsRUFBbUI7QUFDakJvRixhQUFLO0FBRUxFLFdBQUcsR0FBRzlFLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTjtBQUNBUixhQUFLLEdBQUcvRSxRQUFRLENBQUN1RixhQUFULENBQXVCLE9BQXZCLENBQVI7QUFDQVAsbUJBQVcsR0FBR2hGLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBTixjQUFNLEdBQUdqRixRQUFRLENBQUN1RixhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQUosYUFBSyxHQUFHbkYsUUFBUSxDQUFDdUYsYUFBVCxDQUF1QixLQUF2QixDQUFSO0FBQ0FILFVBQUUsR0FBR3BGLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBTDtBQUNBRixlQUFPLEdBQUdyRixRQUFRLENBQUN1RixhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQUQsY0FBTSxHQUFHdEYsUUFBUSxDQUFDdUYsYUFBVCxDQUF1QixNQUF2QixDQUFUO0FBQ0FMLGFBQUssR0FBRyxLQUFJLENBQUNNLGNBQUwsQ0FBb0JoRyxPQUFPLENBQUNxRixDQUFELENBQVAsQ0FBV1ksS0FBL0IsQ0FBUjtBQUVBWCxXQUFHLENBQUNZLFNBQUosR0FBZ0IsYUFBaEI7QUFDQVgsYUFBSyxDQUFDVyxTQUFOLEdBQWtCLGVBQWxCO0FBQ0FYLGFBQUssQ0FBQ1ksRUFBTixHQUFXLFlBQVlkLENBQXZCO0FBQ0FFLGFBQUssQ0FBQ2pFLElBQU4sR0FBYStELENBQWI7QUFDQUUsYUFBSyxDQUFDdkIsSUFBTixHQUFhLE9BQWI7QUFDQXVCLGFBQUssQ0FBQ2EsS0FBTixHQUFjVixLQUFkO0FBQ0FGLG1CQUFXLENBQUNVLFNBQVosR0FBd0IsY0FBeEI7QUFDQVYsbUJBQVcsQ0FBQ2xELFlBQVosQ0FBeUIsT0FBekIsRUFBa0N0QyxPQUFPLENBQUNxRixDQUFELENBQVAsQ0FBV1ksS0FBN0M7QUFDQVQsbUJBQVcsQ0FBQ2xELFlBQVosQ0FBeUIsS0FBekIsRUFBZ0MsWUFBWStDLENBQTVDO0FBQ0FJLGNBQU0sQ0FBQ1MsU0FBUCxHQUFtQixlQUFuQjtBQUNBVCxjQUFNLENBQUNuRCxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLElBQWhDO0FBQ0FtRCxjQUFNLENBQUNuRCxZQUFQLENBQW9CLFVBQXBCLEVBQWdDK0MsQ0FBaEM7QUFDQU0sYUFBSyxDQUFDTyxTQUFOLEdBQWtCLGdCQUFsQjtBQUNBTixVQUFFLENBQUNNLFNBQUgsR0FBZSxZQUFmO0FBQ0FOLFVBQUUsQ0FBQ3RELFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIrQyxDQUE1QjtBQUNBTyxVQUFFLENBQUM1QixJQUFILEdBQVUsT0FBVjtBQUNBNEIsVUFBRSxDQUFDTyxFQUFILEdBQVEsaUJBQWlCZCxDQUF6QjtBQUNBTyxVQUFFLENBQUN0RSxJQUFILEdBQVUsV0FBVjtBQUNBdUUsZUFBTyxDQUFDSyxTQUFSLEdBQW9CLFNBQXBCO0FBQ0FMLGVBQU8sQ0FBQ3ZELFlBQVIsQ0FBcUIsS0FBckIsRUFBNEIsaUJBQWlCK0MsQ0FBN0M7QUFDQVMsY0FBTSxDQUFDTyxXQUFQLEdBQXFCQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBckI7QUFFQVYsZUFBTyxDQUFDVyxXQUFSLENBQW9CVixNQUFwQjtBQUNBSCxhQUFLLENBQUNhLFdBQU4sQ0FBa0JaLEVBQWxCO0FBQ0FELGFBQUssQ0FBQ2EsV0FBTixDQUFrQlgsT0FBbEI7QUFFQVAsV0FBRyxDQUFDa0IsV0FBSixDQUFnQmYsTUFBaEI7QUFDQUgsV0FBRyxDQUFDa0IsV0FBSixDQUFnQmIsS0FBaEI7QUFDQUwsV0FBRyxDQUFDa0IsV0FBSixDQUFnQmpCLEtBQWhCO0FBQ0FELFdBQUcsQ0FBQ2tCLFdBQUosQ0FBZ0JoQixXQUFoQjs7QUFFQSxZQUFJSixLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUdOLENBQXpCLEVBQTRCO0FBQzFCRCxrQkFBUSxDQUFDMkIsV0FBVCxDQUFxQmxCLEdBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xYLG1CQUFTLENBQUM2QixXQUFWLENBQXNCbEIsR0FBdEI7QUFDRDs7QUFFREQsU0FBQyxHQUFHQSxDQUFDLENBQUNvQixXQUFGLEVBQUo7QUFDQXBCLFNBQUMsR0FBR0EsQ0FBQyxLQUFLLE9BQU4sR0FBZ0JpQixNQUFNLENBQUNDLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBaEIsR0FBOENsQixDQUFsRDtBQUNBRyxtQkFBVyxDQUFDaEUsU0FBWixHQUF3QjZELENBQXhCO0FBQ0EsWUFBSSxDQUFDSyxLQUFMLEVBQVlILEtBQUssQ0FBQ2pELFlBQU4sQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFDYjs7QUFDRG9DLG9CQUFjLENBQUM4QixXQUFmLENBQTJCN0IsU0FBM0I7QUFDQUYsbUJBQWEsQ0FBQytCLFdBQWQsQ0FBMEIzQixRQUExQjs7QUFFQSxVQUFJLEtBQUksQ0FBQ1QsZUFBVCxFQUEwQjtBQUN4QixhQUFJLENBQUNsRCxFQUFMLENBQVFQLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCOztBQUNBSixnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDaUcsT0FBekMsR0FBbUQsSUFBbkQ7QUFDRCxPQUhELE1BR087QUFDTCxhQUFJLENBQUN4RixFQUFMLENBQVFQLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0Q7QUFDRixLQXpGRDtBQTBGRCxHQXRIWTtBQXVIYm1GLGdCQXZIYSwwQkF1SEVXLE1BdkhGLEVBdUhVO0FBQ3JCLFFBQUlDLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixDQUFaO0FBQUEsUUFDSUMsQ0FBQyxHQUFHRCxLQUFLLENBQUN6QixNQURkO0FBQUEsUUFFSU8sS0FBSyxHQUFHLEVBRlo7QUFBQSxRQUdJb0IsQ0FBQyxHQUFHLENBSFI7QUFBQSxRQUlJYixLQUpKOztBQU1BLFdBQU9hLENBQUMsR0FBR0QsQ0FBWCxFQUFjQyxDQUFDLEVBQWYsRUFBbUI7QUFDakJiLFdBQUssR0FBR1csS0FBSyxDQUFDRSxDQUFELENBQWI7O0FBQ0EsVUFBSWIsS0FBSyxDQUFDYyxRQUFOLENBQWUsa0JBQWYsQ0FBSixFQUF3QztBQUN0Q3JCLGFBQUssR0FBR08sS0FBSyxDQUFDVyxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFSO0FBQ0E7QUFDRDtBQUNGOztBQUNELFdBQU9sQixLQUFQO0FBQ0QsR0F0SVk7QUF1SWJ2QixRQXZJYSxrQkF1SU56QixDQXZJTSxFQXVJSHhCLEVBdklHLEVBdUlDO0FBQ1osU0FBS25DLElBQUwsQ0FBVSxtQkFBVixFQUErQm1DLEVBQUUsQ0FBQ0ksSUFBbEMsRUFBd0NKLEVBQUUsQ0FBQ2tGLEtBQTNDO0FBQ0QsR0F6SVk7QUEwSWJZLFFBMUlhLGtCQTBJTnRFLENBMUlNLEVBMElIeEIsRUExSUcsRUEwSUM7QUFDWixTQUFLbkMsSUFBTCxDQUFVLHlCQUFWLEVBQXFDbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixVQUFoQixDQUFyQyxFQUFrRTtBQUFFL0MsU0FBRyxFQUFFLFFBQVA7QUFBaUJzRCxhQUFPLEVBQUUsS0FBS047QUFBL0IsS0FBbEU7QUFDRCxHQTVJWTtBQTZJYjZELFlBN0lhLHNCQTZJRnZFLENBN0lFLEVBNklDeEIsRUE3SUQsRUE2SUs7QUFDaEIsUUFBSUEsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCLFVBQXRCLENBQUosRUFBdUM7QUFDdkMsU0FBSzVELElBQUwsQ0FBVSxtQkFBVixFQUErQm1DLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsVUFBaEIsQ0FBL0IsRUFBNEQ7QUFBRS9DLFNBQUcsRUFBRSxRQUFQO0FBQWlCc0QsYUFBTyxFQUFFLEtBQUtOO0FBQS9CLEtBQTVEO0FBQ0QsR0FoSlk7QUFpSmI4RCxxQkFqSmEsK0JBaUpPQyxJQWpKUCxFQWlKYXRELE1BakpiLEVBaUpxQjtBQUNoQyxRQUFJLEtBQUtPLGVBQVQsRUFBMEI7QUFDMUIsU0FBS2hCLEtBQUwsR0FBYVMsTUFBTSxJQUFJQSxNQUFNLENBQUNILE9BQWpCLEdBQTJCRyxNQUFNLENBQUNILE9BQWxDLEdBQTRDLENBQXpEO0FBQ0EsUUFBTXZCLElBQUksR0FBR2dGLElBQUksR0FBRyxpQkFBSCxHQUF1QixjQUF4QztBQUNBeEksU0FBSyxDQUFDMkUsSUFBTixDQUFXOUMsUUFBUSxDQUFDZSxzQkFBVCxDQUFnQyxlQUFoQyxDQUFYLEVBQTZEdUMsT0FBN0QsQ0FBcUUsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQzVCLElBQUQsQ0FBSCxDQUFVLFVBQVYsRUFBc0IsSUFBdEIsQ0FBSjtBQUFBLEtBQXhFO0FBQ0QsR0F0Slk7QUF1SmJZLGFBdkphLHVCQXVKREMsS0F2SkMsRUF1Sk07QUFDakIsU0FBS2tFLG1CQUFMLENBQXlCbEUsS0FBSyxDQUFDb0UsU0FBL0I7QUFDRDtBQXpKWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSXRKLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCw2QkFBdUIsWUFEcEI7QUFFSCxzQkFBZ0IsUUFGYjtBQUdILDhCQUF5QjtBQUh0QixLQURDO0FBTU5xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsdUJBQWUsVUFEVjtBQUVMLDJCQUFtQixZQUZkO0FBR0wsK0JBQXVCO0FBSGxCLE9BREo7QUFNSHdDLFlBQU0sRUFBRTtBQUNOLHVCQUFlO0FBRFQ7QUFOTDtBQU5DLEdBRks7QUFvQmJrRCxPQUFLLEVBQUUsRUFwQk07QUFxQmJDLFNBQU8sRUFBRSxJQXJCSTtBQXNCYm5DLFFBQU0sRUFBRSxDQXRCSztBQXVCYm9DLFNBQU8sRUFBRSxDQUFDLENBdkJHO0FBd0JiQyxZQUFVLEVBQUUsS0F4QkM7QUF5QmJDLFdBQVMsRUFBRTtBQUFFLFNBQUssQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFQO0FBQXVCLFNBQUssQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUE1QjtBQUEyQyxTQUFLLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBaEQ7QUFBK0QsU0FBSyxDQUFDLElBQUQsRUFBTyxJQUFQO0FBQXBFLEdBekJFO0FBMkJidEcsUUEzQmEsa0JBMkJOdUcsQ0EzQk0sRUEyQkpDLENBM0JJLEVBMkJGQyxDQTNCRSxFQTJCQztBQUNaLFFBQU1ySixLQUFLLEdBQUcsS0FBS0EsS0FBTCxHQUFhUixtQkFBT1EsS0FBbEM7O0FBQ0EsUUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBS3NKLFFBQUw7QUFDQSxVQUFJLENBQUMsS0FBS0wsVUFBVixFQUFzQixLQUFLTSxnQkFBTDtBQUN0QixXQUFLQyxVQUFMO0FBQ0Q7QUFDRixHQWxDWTtBQW1DYkYsVUFuQ2Esc0JBbUNGO0FBQ1QsUUFBTXRKLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUNBLFFBQUk4SSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxRQUFJMUksS0FBSyxDQUFDQyxPQUFOLENBQWNMLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsV0FBSyxDQUFDdUYsT0FBTixDQUFjLFVBQUFwQixDQUFDO0FBQUEsZUFBSTJFLEtBQUssR0FBR0EsS0FBSyxDQUFDVyxNQUFOLENBQWF0RixDQUFDLENBQUMyRSxLQUFmLENBQVo7QUFBQSxPQUFmO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFdBQUssR0FBRzlJLEtBQUssQ0FBQzhJLEtBQWQ7QUFDRDs7QUFDRCxRQUFNQyxPQUFPLEdBQUcsS0FBS0EsT0FBckIsQ0FSUyxDQVNUO0FBQ0E7O0FBQ0EsU0FBS0QsS0FBTCxHQUFhQyxPQUFPLEdBQ2xCQSxPQUFPLENBQUNXLEdBQVIsQ0FBWSxVQUFBOUIsRUFBRTtBQUFBLGFBQUlrQixLQUFLLENBQUNhLElBQU4sQ0FBVyxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDaEMsRUFBTCxJQUFXQSxFQUFmO0FBQUEsT0FBZixDQUFKO0FBQUEsS0FBZCxDQURrQixHQUVsQmtCLEtBRkY7QUFHQSxTQUFLbEMsTUFBTCxHQUFjLEtBQUtrQyxLQUFMLENBQVdsQyxNQUF6QjtBQUNELEdBbERZO0FBbURiaUQsWUFuRGEsc0JBbURGQyxHQW5ERSxFQW1ERVYsQ0FuREYsRUFtRElDLENBbkRKLEVBbURPO0FBQ2xCLFNBQUtOLE9BQUwsR0FBZWUsR0FBZjtBQUNBLFNBQUtsSCxNQUFMO0FBQ0QsR0F0RFk7QUF1RGIyRyxrQkF2RGEsOEJBdURNO0FBQ2pCLFFBQU1RLElBQUksR0FBRzlILFFBQVEsQ0FBQzhILElBQXRCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHL0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFiO0FBQ0EsUUFBTStILE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBSTFCLENBQUosRUFBT2MsQ0FBUDs7QUFDQSxTQUFLZCxDQUFMLElBQVUyQiw0QkFBVUMsV0FBcEIsRUFBaUM7QUFDOUJkLE9BQUMsR0FBR2EsNEJBQVVDLFdBQVYsQ0FBc0I1QixDQUF0QixDQUFKO0FBQ0QwQixZQUFNLENBQUMxQixDQUFDLENBQUM2QixXQUFGLEVBQUQsQ0FBTixHQUEwQixhQUFhLEtBQUtDLFVBQUwsQ0FBZ0JoQixDQUFDLENBQUNpQixNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBaEIsQ0FBYixHQUE4QyxXQUE5QyxHQUE0RCxLQUFLRCxVQUFMLENBQWdCaEIsQ0FBQyxDQUFDaUIsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWhCLENBQTVELEdBQTZGLFdBQTdGLEdBQTJHLEtBQUtELFVBQUwsQ0FBZ0JoQixDQUFDLENBQUNpQixNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBaEIsQ0FBM0csR0FBNEksWUFBdEs7QUFDRDs7QUFDRCxRQUFJQyxNQUFKOztBQUNBLFNBQUtoQyxDQUFMLElBQVUwQixNQUFWLEVBQWtCO0FBQ2hCTSxZQUFNLEdBQUdQLElBQUksQ0FBQ1EsU0FBTCxDQUFlLElBQWYsQ0FBVDtBQUNBRCxZQUFNLENBQUN2RixvQkFBUCxDQUE0QixRQUE1QixFQUFzQyxDQUF0QyxFQUF5QzRDLEVBQXpDLEdBQThDLGFBQWFXLENBQTNEO0FBQ0FnQyxZQUFNLENBQUN2RixvQkFBUCxDQUE0QixlQUE1QixFQUE2QyxDQUE3QyxFQUFnRGpCLFlBQWhELENBQTZELFFBQTdELEVBQXVFa0csTUFBTSxDQUFDMUIsQ0FBRCxDQUE3RTtBQUNBd0IsVUFBSSxDQUFDOUIsV0FBTCxDQUFpQnNDLE1BQWpCO0FBQ0Q7O0FBQ0QsU0FBS3RCLFVBQUwsR0FBa0IsSUFBbEI7QUFDRCxHQXhFWTtBQXlFYm9CLFlBekVhLHNCQXlFRkksR0F6RUUsRUF5RUc7QUFDZCxXQUFPLENBQUUsS0FBS0MsTUFBTSxDQUFDLE9BQU9ELEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBWixHQUErQkMsTUFBTSxDQUFDLE9BQU9ELEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBdEMsSUFBeUQsR0FBaEU7QUFDRCxHQTNFWTtBQTRFYmpCLFlBNUVhLHdCQTRFQTtBQUNYLFFBQU1tQixRQUFRLEdBQUcxSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBakI7QUFDQSxRQUFNMEksUUFBUSxHQUFHM0ksUUFBUSxDQUFDb0Usc0JBQVQsRUFBakI7QUFDQSxRQUFNd0UsY0FBYyxHQUFHNUksUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQXZCO0FBQ0EsUUFBSTRJLGFBQUo7QUFFQUQsa0JBQWMsQ0FBQzVILFNBQWYsR0FBMkIsRUFBM0I7QUFFQSxTQUFLNkYsS0FBTCxDQUFXdkQsT0FBWCxDQUFtQixVQUFDcUUsSUFBRCxFQUFPckIsQ0FBUCxFQUFhO0FBQzlCLFVBQUlxQixJQUFKLEVBQVU7QUFDUmtCLHFCQUFhLEdBQUdILFFBQVEsQ0FBQ0gsU0FBVCxDQUFtQixJQUFuQixDQUFoQjtBQUNBTSxxQkFBYSxDQUFDbEQsRUFBZCxHQUFtQixFQUFuQjtBQUNBa0QscUJBQWEsQ0FBQzFJLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBd0kscUJBQWEsQ0FBQy9HLFlBQWQsQ0FBMkIsU0FBM0IsRUFBc0N3RSxDQUF0QztBQUVBLFlBQU13QyxRQUFRLEdBQUdELGFBQWEsQ0FBQzlILHNCQUFkLENBQXFDLFlBQXJDLEVBQW1ELENBQW5ELENBQWpCO0FBQ0EsWUFBTThFLFdBQVcsR0FBRzdGLFFBQVEsQ0FBQytJLGNBQVQsQ0FBd0JwQixJQUFJLENBQUNxQixJQUE3QixDQUFwQjtBQUNBLFlBQUk5RCxLQUFLLEdBQUd5QyxJQUFJLENBQUNsQyxLQUFMLENBQVd3RCxPQUFYLENBQW1CLGtCQUFuQixDQUFaO0FBQ0EsWUFBSUMsT0FBTyxHQUFHdkIsSUFBSSxDQUFDd0IsSUFBTCxLQUFjLE9BQU94QixJQUFJLENBQUN3QixJQUFaLEtBQXFCLFFBQXJCLElBQWlDeEIsSUFBSSxDQUFDd0IsSUFBTCxDQUFVSCxJQUF6RCxDQUFkO0FBQ0E5RCxhQUFLLEdBQUdBLEtBQUssS0FBSyxDQUFDLENBQVgsR0FBZSxhQUFmLEdBQStCeUMsSUFBSSxDQUFDbEMsS0FBTCxDQUFXNEMsTUFBWCxDQUFrQm5ELEtBQUssR0FBRyxFQUExQixFQUE4QixDQUE5QixDQUF2QztBQUNBLFlBQUlpRSxJQUFKLEVBQVVDLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCQyxPQUEvQixFQUF3Q0MsUUFBeEM7QUFFQVQsZ0JBQVEsQ0FBQ3JELEtBQVQsQ0FBZStELFdBQWYsR0FBNkJ0RSxLQUE3QjtBQUNBNEQsZ0JBQVEsQ0FBQzlDLFdBQVQsQ0FBcUJILFdBQXJCOztBQUVBLFlBQUlxRCxPQUFKLEVBQWE7QUFDWEMsY0FBSSxHQUFHeEIsSUFBSSxDQUFDd0IsSUFBWjtBQUNBQyxtQkFBUyxHQUFHRCxJQUFJLENBQUNqRSxLQUFMLElBQWMsUUFBMUI7QUFDQW1FLGtCQUFRLEdBQUdGLElBQUksQ0FBQ0gsSUFBTCxJQUFhRyxJQUF4QjtBQUNBTix1QkFBYSxDQUFDMUksU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsWUFBNUI7QUFDQWtKLGlCQUFPLEdBQUdULGFBQWEsQ0FBQzlILHNCQUFkLENBQXFDLGdCQUFyQyxFQUF1RCxDQUF2RCxDQUFWO0FBQ0F1SSxpQkFBTyxDQUFDbkosU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0FpSixpQkFBTyxDQUFDbkosU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IscUJBQXFCZ0osU0FBM0M7QUFDQUcsa0JBQVEsR0FBR1YsYUFBYSxDQUFDOUgsc0JBQWQsQ0FBcUMsWUFBckMsRUFBbUQsQ0FBbkQsQ0FBWDtBQUNBd0ksa0JBQVEsQ0FBQ3ZELFdBQVQsQ0FBcUJoRyxRQUFRLENBQUMrSSxjQUFULENBQXdCTSxRQUF4QixDQUFyQjtBQUNBRSxrQkFBUSxDQUFDcEosU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsaUJBQTFCO0FBQ0FrSixrQkFBUSxDQUFDcEosU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsaUJBQWlCZ0osU0FBeEM7QUFDRDs7QUFDRFQsZ0JBQVEsQ0FBQzNDLFdBQVQsQ0FBcUI2QyxhQUFyQjtBQUNEO0FBQ0YsS0FoQ0Q7QUFpQ0FELGtCQUFjLENBQUM1QyxXQUFmLENBQTJCMkMsUUFBM0I7QUFDRCxHQXRIWTtBQXVIYmMsS0F2SGEsZUF1SFR2SCxDQXZIUyxFQXVITnhCLEVBdkhNLEVBdUhGO0FBQ1QsUUFBTWdKLEdBQUcsR0FBRyxJQUFJaEosRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixZQUFoQixDQUFoQjtBQUNBLFNBQUtvRSxPQUFMLElBQWdCMkMsR0FBaEI7QUFDQSxRQUFJLEtBQUszQyxPQUFMLElBQWdCLEtBQUtwQyxNQUF6QixFQUFpQyxLQUFLb0MsT0FBTCxHQUFlLENBQWYsQ0FBakMsS0FDSyxJQUFJLEtBQUtBLE9BQUwsR0FBZSxDQUFuQixFQUFzQixLQUFLQSxPQUFMLEdBQWUsS0FBS3BDLE1BQUwsR0FBYyxDQUE3QjtBQUMzQixTQUFLZ0YsZ0JBQUw7QUFDRCxHQTdIWTtBQThIYkEsa0JBOUhhLDRCQThISWhFLEVBOUhKLEVBOEhRO0FBQ25CLFFBQUksT0FBT0EsRUFBUCxLQUFjLFFBQWxCLEVBQTRCLEtBQUtvQixPQUFMLEdBQWVwQixFQUFmO0FBQzVCLFFBQU1pRSxXQUFXLEdBQUcsS0FBS2xKLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsY0FBL0IsRUFBK0MsQ0FBL0MsQ0FBcEI7QUFDQSxRQUFJNkksV0FBSixFQUFpQkEsV0FBVyxDQUFDekosU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDakJMLFlBQVEsQ0FBQzZKLGFBQVQsQ0FBdUIsa0JBQWtCLENBQUMsS0FBSzlDLE9BQU4sQ0FBbEIsR0FBbUMsSUFBMUQsRUFBZ0U1RyxTQUFoRSxDQUEwRUMsR0FBMUUsQ0FBOEUsY0FBOUU7QUFDQSxTQUFLN0IsSUFBTCxDQUFVLG1CQUFWLEVBQStCLEtBQUt3SSxPQUFwQyxFQUE2QztBQUFFbkgsU0FBRyxFQUFFO0FBQVAsS0FBN0M7QUFDRCxHQXBJWTtBQXFJYnVELFVBcklhLG9CQXFJSmpCLENBcklJLEVBcUlEeEIsRUFySUMsRUFxSUc7QUFDZFYsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDMkYsS0FBdEMsR0FBOEMsQ0FBOUM7QUFDQWxGLE1BQUUsQ0FBQ1AsU0FBSCxDQUFhSyxNQUFiLENBQW9CLFVBQXBCO0FBQ0EsU0FBS21KLGdCQUFMLENBQXNCLElBQUVqSixFQUFFLENBQUMwQixVQUFILENBQWNBLFVBQWQsQ0FBeUJPLFlBQXpCLENBQXNDLFNBQXRDLENBQXhCO0FBQ0QsR0F6SVk7QUEwSWJtSCxVQTFJYSxvQkEwSUo1SCxDQTFJSSxFQTBJRHhCLEVBMUlDLEVBMElHO0FBQ2QsUUFBTXFKLEdBQUcsR0FBR3JKLEVBQUUsQ0FBQ2tGLEtBQWY7O0FBQ0EsUUFBSW1FLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDWixVQUFNbEQsS0FBSyxHQUFHN0csUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxVQUFNK0osY0FBYyxHQUFHLEtBQUsvQyxTQUFMLENBQWU4QyxHQUFmLENBQXZCO0FBRUEsV0FBS3ZKLE1BQUwsQ0FBWSxNQUFaLEVBQW9Cd0osY0FBYyxDQUFDLENBQUQsQ0FBbEM7QUFDQSxXQUFLeEosTUFBTCxDQUFZLE1BQVosRUFBb0J3SixjQUFjLENBQUMsQ0FBRCxDQUFsQztBQUNEO0FBQ0YsR0FuSlk7QUFvSmJDLFlBcEphLHNCQW9KRi9ILENBcEpFLEVBb0pDeEIsRUFwSkQsRUFvSks7QUFDaEJWLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzJGLEtBQXRDLEdBQThDLENBQTlDO0FBQ0EsUUFBTXNFLE1BQU0sR0FBR3hKLEVBQUUsQ0FBQzBCLFVBQWxCO0FBQ0E4SCxVQUFNLENBQUMvSixTQUFQLENBQWlCSyxNQUFqQixDQUF3QixXQUF4QjtBQUNBMEosVUFBTSxDQUFDbkosc0JBQVAsQ0FBOEIsWUFBOUIsRUFBNEMsQ0FBNUMsRUFBK0NaLFNBQS9DLENBQXlESyxNQUF6RCxDQUFnRSxVQUFoRTtBQUNELEdBekpZO0FBMEpiQSxRQTFKYSxrQkEwSk5nRCxJQTFKTSxFQTBKQW1ELElBMUpBLEVBMEpNO0FBQ2pCLFFBQU1oRixJQUFJLEdBQUdnRixJQUFJLEdBQUcsS0FBSCxHQUFXLFFBQTVCO0FBQ0F4SSxTQUFLLENBQUMyRSxJQUFOLENBQVcsS0FBS3BDLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsV0FBV3lDLElBQTFDLENBQVgsRUFDR0YsT0FESCxDQUNXLFVBQUE1QyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDUCxTQUFILENBQWF3QixJQUFiLEVBQW1CLFVBQW5CLENBQUo7QUFBQSxLQURiO0FBRUQ7QUE5SlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUNBOzs7Ozs7QUFFQSxJQUFJckUsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixRQURiO0FBRUgsOEJBQXdCO0FBRnJCO0FBREMsR0FGSztBQVNiOEMsUUFUYSxrQkFTTjVDLEtBVE0sRUFTQztBQUNaLFFBQUlBLEtBQUssSUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDLFVBQU1vTSxHQUFHLEdBQUd4TCxPQUFPLENBQUN5TCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBLFVBQU1DLEVBQUUsR0FBRzNMLE9BQU8sQ0FBQ3lMLElBQVIsQ0FBYUMsVUFBYixDQUF3QixJQUF4QixDQUFYO0FBRUFySyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDZSxTQUE5QyxHQUEwRGpELEtBQUssQ0FBQzhJLEtBQU4sQ0FBWWxDLE1BQXRFO0FBQ0EzRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNlLFNBQXpDLEdBQXFELEtBQUt1SixrQkFBTCxDQUF3QixJQUFJQyxJQUFKLENBQVN6TSxLQUFLLENBQUMwTSxLQUFmLEVBQXNCQyxjQUF0QixFQUF4QixDQUFyRDtBQUNBMUssY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ2UsU0FBL0MsR0FBMkQsS0FBS3VKLGtCQUFMLENBQXdCLElBQUlDLElBQUosQ0FBU3pNLEtBQUssQ0FBQzRNLElBQWYsRUFBcUJELGNBQXJCLEVBQXhCLENBQTNEO0FBRUEsT0FBQyxRQUFELEVBQVcsT0FBWCxFQUNHcEgsT0FESCxDQUNXLFVBQUFzSCxLQUFLO0FBQUEsZUFBSTVLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUFXMkssS0FBbkMsRUFBMEM1SixTQUExQyxHQUFzRGpELEtBQUssQ0FBQzZNLEtBQUQsQ0FBTCxHQUFlVCxHQUFmLEdBQXFCRyxFQUEvRTtBQUFBLE9BRGhCO0FBRUQ7QUFDRixHQXJCWTtBQXVCYkMsb0JBdkJhLDhCQXVCTU0sSUF2Qk4sRUF1Qlk7QUFDdkIsV0FBUUEsSUFBSSxDQUNUQyxPQURLLENBQ0csaUJBREgsRUFDc0IsVUFBQ2pHLENBQUQsRUFBSWtHLENBQUosRUFBT0MsQ0FBUDtBQUFBLGFBQVksTUFBTUQsQ0FBTixHQUFVQyxDQUF0QjtBQUFBLEtBRHRCLEVBRUxGLE9BRkssQ0FFRyxzQkFGSCxFQUUyQixVQUFDakcsQ0FBRCxFQUFJa0csQ0FBSixFQUFPQyxDQUFQO0FBQUEsYUFBYUQsQ0FBQyxHQUFHLEdBQUosR0FBVUMsQ0FBdkI7QUFBQSxLQUYzQixDQUFSO0FBR0Q7QUEzQlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJMU4saUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHdCQUFrQixrQkFEZjtBQUVILDBCQUFvQixvQkFGakI7QUFHSCxvQkFBYyxlQUhYO0FBSUgsMkJBQXFCLGlCQUpsQjtBQUtILG9CQUFjLGFBTFg7QUFNSCxxQkFBZTtBQU5aLEtBREM7QUFTTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxnQ0FBd0I7QUFEbkI7QUFESjtBQVRDLEdBRks7QUFrQmI4SixrQkFsQmEsOEJBa0JNO0FBQ2pCLFNBQUs5SCxRQUFMLENBQWMsUUFBZCxFQUF3QixJQUF4QjtBQUNELEdBcEJZO0FBcUJiK0gsb0JBckJhLGdDQXFCUTtBQUNuQixTQUFLL0gsUUFBTCxDQUFjLFFBQWQsRUFBd0IsS0FBeEI7QUFDRCxHQXZCWTtBQXdCYmdJLGVBeEJhLDJCQXdCRztBQUNkLFNBQUtoSSxRQUFMLENBQWMsT0FBZCxFQUF1QixJQUF2QjtBQUNELEdBMUJZO0FBMkJiaUksaUJBM0JhLDZCQTJCSztBQUNoQixTQUFLakksUUFBTCxDQUFjLE9BQWQsRUFBdUIsS0FBdkI7QUFDRCxHQTdCWTtBQThCYkEsVUE5QmEsb0JBOEJKSyxJQTlCSSxFQThCRTFELEVBOUJGLEVBOEJNO0FBQ2pCLFFBQU15RCxHQUFHLEdBQUd2RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQWtCdUQsSUFBMUMsQ0FBWjs7QUFDQSxRQUFJMUQsRUFBSixFQUFRO0FBQ055RCxTQUFHLENBQUMxQixlQUFKLENBQW9CLFVBQXBCO0FBQ0EwQixTQUFHLENBQUNuQixVQUFKLENBQWVqQyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxVQUFoQztBQUNELEtBSEQsTUFJSztBQUNIa0QsU0FBRyxDQUFDekIsWUFBSixDQUFpQixVQUFqQixFQUE2QixJQUE3QjtBQUNBeUIsU0FBRyxDQUFDbkIsVUFBSixDQUFlakMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBN0I7QUFDRDtBQUNGLEdBeENZO0FBeUNiaUwsWUF6Q2Esc0JBeUNGbkosQ0F6Q0UsRUF5Q0N4QixFQXpDRCxFQXlDSztBQUNoQixTQUFLbkMsSUFBTCxDQUFVLGFBQWFtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLGFBQWhCLENBQXZCLEVBQXVEO0FBQUUvQyxTQUFHLEVBQUU7QUFBUCxLQUF2RDtBQUNELEdBM0NZO0FBNENiMkMsYUE1Q2EsdUJBNENEQyxLQTVDQyxFQTRDTTtBQUNqQixRQUFJQSxLQUFLLENBQUNpQixRQUFWLEVBQW9CLEtBQUt3SCxnQkFBTDtBQUNyQixHQTlDWTtBQStDYkssY0EvQ2Esd0JBK0NBQyxLQS9DQSxFQStDTztBQUNsQixRQUFJQSxLQUFKLEVBQVcsS0FBS0osYUFBTDtBQUNaO0FBakRZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTs7Ozs7O0FBRUEsSUFBSTdOLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCwyQkFBcUI7QUFEbEIsS0FEQztBQUlOcUQsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLHFCQUFhLFNBRFI7QUFFTCx1QkFBZSxhQUZWO0FBR0wsMkJBQW1CLGVBSGQ7QUFJTCx3QkFBZ0IsWUFKWDtBQUtMLDBCQUFrQixZQUxiO0FBTUwsc0JBQWM7QUFOVCxPQURKO0FBU0h3QyxZQUFNLEVBQUU7QUFDTiw0QkFBb0I7QUFEZDtBQVRMO0FBSkMsR0FGSztBQW9CYjRILE9BQUssRUFBRSxFQXBCTTtBQXFCYkMsU0FBTyxFQUFFLEVBckJJO0FBc0JiN0YsSUFBRSxFQUFFLENBdEJTO0FBdUJiOEYsY0FBWSxFQUFFLFFBdkJEO0FBeUJiOUwsVUF6QmEsc0JBeUJGO0FBQ1QsU0FBS2dCLE1BQUw7QUFDRCxHQTNCWTtBQTZCYkEsUUE3QmEsb0JBNkJKO0FBQUE7O0FBQ1AsU0FBS2xDLE1BQUw7QUFDQSxrQ0FBa0JNLElBQWxCLENBQXVCLFVBQUFhLEdBQUcsRUFBSTtBQUM1QixVQUFNOEwsR0FBRyxHQUFHLEtBQUksQ0FBQ0EsR0FBTCxHQUFXOUwsR0FBRyxDQUFDOEwsR0FBM0I7O0FBQ0FuTyx5QkFBT3VCLEdBQVAsQ0FBVyxXQUFYLEVBQXdCQyxJQUF4QixDQUE2QixVQUFBVyxTQUFTLEVBQUk7QUFDeENBLGlCQUFTLEdBQUdBLFNBQVMsSUFBSUEsU0FBUyxDQUFDZ00sR0FBRCxDQUF0QixHQUE4QmhNLFNBQVMsQ0FBQ2dNLEdBQUQsQ0FBdkMsR0FBK0MsSUFBM0Q7QUFDQSxZQUFJckYsQ0FBSixFQUFPVixFQUFQOztBQUNBLFlBQUlqRyxTQUFTLEtBQUsyRyxDQUFDLEdBQUczRyxTQUFTLENBQUNpRixNQUFuQixDQUFiLEVBQXlDO0FBQ3ZDLGVBQUksQ0FBQzRHLEtBQUwsR0FBYTdMLFNBQWI7O0FBQ0EsaUJBQU8yRyxDQUFDLEVBQVIsRUFBWTtBQUNWVixjQUFFLEdBQUcsS0FBSSxDQUFDZ0csT0FBTCxDQUFhak0sU0FBUyxDQUFDMkcsQ0FBRCxDQUF0QixDQUFMO0FBQ0EsaUJBQUksQ0FBQ1YsRUFBTCxHQUFVcEIsSUFBSSxDQUFDcUgsR0FBTCxDQUFTLEtBQUksQ0FBQ2pHLEVBQWQsRUFBa0JBLEVBQWxCLENBQVY7QUFDRDtBQUNGO0FBQ0YsT0FWRCxFQVdHNUcsSUFYSCxDQVdRLFlBQU07QUFDVixhQUFJLENBQUM4TSxZQUFMLENBQWtCLENBQUMsQ0FBQyxLQUFJLENBQUNOLEtBQUwsQ0FBVzVHLE1BQS9COztBQUNBLGFBQUksQ0FBQ21ILFdBQUwsQ0FBaUIsSUFBakIsRUFBdUI5TCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCO0FBQ0QsT0FkSDtBQWVELEtBakJEO0FBa0JELEdBakRZO0FBa0RidUIsTUFsRGEsZ0JBa0RSVSxDQWxEUSxFQWtETHhCLEVBbERLLEVBa0REO0FBQ1YsUUFBSUEsRUFBSixFQUFRO0FBQ04sVUFBTXlJLElBQUksR0FBRyxLQUFLNEMsT0FBTCxDQUFhckwsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFiLENBQWI7QUFDQXdHLFVBQUksQ0FBQ0gsSUFBTCxHQUFZdEksRUFBRSxDQUFDc0wsZUFBSCxDQUFtQnBHLEtBQS9CO0FBQ0F1RCxVQUFJLENBQUNySSxJQUFMLEdBQVlKLEVBQUUsQ0FBQzBCLFVBQUgsQ0FBY3JCLHNCQUFkLENBQXFDLGdCQUFyQyxFQUF1RCxDQUF2RCxFQUEwRDZFLEtBQXRFO0FBQ0Q7O0FBQ0QsU0FBS3JILElBQUwsQ0FBVSxtQkFBVixFQUErQixLQUFLbU4sR0FBcEMsRUFBeUMsS0FBS0gsS0FBOUM7QUFDRCxHQXpEWTtBQTBEYjlNLFFBMURhLG9CQTBESjtBQUNQLFNBQUs4TSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSzdGLEVBQUwsR0FBVSxDQUFWO0FBQ0EzRixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M0RixXQUF0QyxHQUFvRCxFQUFwRDtBQUNELEdBL0RZO0FBaUViOEYsU0FqRWEsbUJBaUVMeEMsSUFqRUssRUFpRUM7QUFDWkEsUUFBSSxHQUFHQSxJQUFJLENBQUMzRixJQUFMLEdBQVksSUFBWixHQUFtQjJGLElBQTFCO0FBQ0EsUUFBTThDLFNBQVMsR0FBR2pNLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBLFFBQU1pTSxNQUFNLEdBQUdsTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDc0ksU0FBOUMsQ0FBd0QsSUFBeEQsQ0FBZjtBQUNBLFFBQU00RCxRQUFRLEdBQUdELE1BQU0sQ0FBQ25KLG9CQUFQLENBQTRCLFVBQTVCLEVBQXdDLENBQXhDLENBQWpCO0FBQ0EsUUFBTW5DLE1BQU0sR0FBR3NMLE1BQU0sQ0FBQ25MLHNCQUFQLENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFmO0FBQ0FtTCxVQUFNLENBQUMvTCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixpQkFBeEI7QUFFQSxRQUFJc0YsRUFBSjs7QUFDQSxRQUFJd0QsSUFBSixFQUFVO0FBQ1J4RCxRQUFFLEdBQUd1RyxNQUFNLENBQUN2RyxFQUFQLEdBQVl3RCxJQUFJLENBQUN4RCxFQUF0QjtBQUNBd0csY0FBUSxDQUFDdEcsV0FBVCxHQUF1QnNELElBQUksQ0FBQ0gsSUFBTCxJQUFhLEVBQXBDO0FBQ0FwSSxZQUFNLENBQUNnRixLQUFQLEdBQWV1RCxJQUFJLENBQUNySSxJQUFMLElBQWEsRUFBNUI7QUFDQW9MLFlBQU0sQ0FBQy9MLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGFBQWErSSxJQUFJLENBQUNqRSxLQUF2QztBQUNBK0csZUFBUyxDQUFDakcsV0FBVixDQUFzQmtHLE1BQXRCO0FBQ0QsS0FORCxNQU1PO0FBQ0x2RyxRQUFFLEdBQUd1RyxNQUFNLENBQUN2RyxFQUFQLEdBQVksRUFBRSxLQUFLQSxFQUF4QjtBQUNBLFdBQUs0RixLQUFMLENBQVdqTixJQUFYLENBQWdCO0FBQUVxSCxVQUFFLEVBQUZBLEVBQUY7QUFBTXFELFlBQUksRUFBRSxFQUFaO0FBQWdCOUQsYUFBSyxFQUFFLEtBQUt1RztBQUE1QixPQUFoQjtBQUNBUyxZQUFNLENBQUMvTCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixhQUF4QjtBQUNBNkwsWUFBTSxDQUFDL0wsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBYSxLQUFLcUwsWUFBdkM7QUFDQVEsZUFBUyxDQUFDRyxZQUFWLENBQXVCRixNQUF2QixFQUErQkQsU0FBUyxDQUFDSSxVQUF6QztBQUNEOztBQUVEbE8sU0FBSyxDQUFDMkUsSUFBTixDQUFXb0osTUFBTSxDQUFDbkosb0JBQVAsQ0FBNEIsR0FBNUIsQ0FBWCxFQUNHTyxPQURILENBQ1csVUFBQTVDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNvQixZQUFILENBQWdCLFNBQWhCLEVBQTJCNkQsRUFBM0IsQ0FBSjtBQUFBLEtBRGI7QUFHQSxTQUFLNkYsT0FBTCxDQUFhN0YsRUFBYixJQUFtQnVHLE1BQW5CO0FBRUEsU0FBS0wsWUFBTCxDQUFrQixJQUFsQjtBQUVBLFdBQU9sRyxFQUFQO0FBQ0QsR0FoR1k7QUFpR2IyRyxhQWpHYSx1QkFpR0RwSyxDQWpHQyxFQWlHRXhCLEVBakdGLEVBaUdNO0FBQ2pCLFFBQU1pRixFQUFFLEdBQUdqRixFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQVg7QUFDQSxRQUFNdUMsS0FBSyxHQUFHLEtBQUt1RyxZQUFMLEdBQW9CL0ssRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixZQUFoQixDQUFsQztBQUNBLFNBQUs2SSxPQUFMLENBQWE3RixFQUFiLEVBQWlCRCxTQUFqQixHQUE2QixLQUFLOEYsT0FBTCxDQUFhN0YsRUFBYixFQUFpQkQsU0FBakIsQ0FBMkJvRixPQUEzQixDQUFtQyxPQUFuQyxFQUE0QyxPQUFPNUYsS0FBbkQsQ0FBN0I7QUFDQSxTQUFLNkcsT0FBTCxDQUFhcEcsRUFBYixFQUFpQlQsS0FBakIsR0FBeUJBLEtBQXpCO0FBQ0F4RSxNQUFFLENBQUMwQixVQUFILENBQWNqQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDRCxHQXZHWTtBQXdHYm1NLFlBeEdhLHNCQXdHRnJLLENBeEdFLEVBd0dDeEIsRUF4R0QsRUF3R0s7QUFDaEIsUUFBTWlGLEVBQUUsR0FBR2pGLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBWDtBQUNBLFFBQU13RyxJQUFJLEdBQUcsS0FBS3FDLE9BQUwsQ0FBYTdGLEVBQWIsQ0FBYjtBQUNBd0QsUUFBSSxDQUFDL0csVUFBTCxDQUFnQm9LLFdBQWhCLENBQTRCckQsSUFBNUI7QUFDQSxXQUFPLEtBQUtxQyxPQUFMLENBQWE3RixFQUFiLENBQVA7QUFDQSxTQUFLNEYsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQixLQUFLbEIsS0FBTCxDQUFXdEMsT0FBWCxDQUFtQixLQUFLOEMsT0FBTCxDQUFhcEcsRUFBYixDQUFuQixDQUFsQixFQUF3RCxDQUF4RDtBQUNBLFNBQUtuRSxJQUFMOztBQUNBLFFBQUksQ0FBQyxLQUFLK0osS0FBTCxDQUFXNUcsTUFBaEIsRUFBd0I7QUFDdEIsV0FBS2tILFlBQUwsQ0FBa0IsS0FBbEI7QUFDRDtBQUNGLEdBbEhZO0FBbUhiQSxjQW5IYSx3QkFtSEFsRixJQW5IQSxFQW1ITTtBQUNqQixRQUFNaEYsSUFBSSxHQUFHZ0YsSUFBSSxHQUFHLFFBQUgsR0FBYyxLQUEvQjtBQUNBM0csWUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0UsU0FBM0MsQ0FBcUR3QixJQUFyRCxFQUEyRCxpQkFBM0Q7QUFDRCxHQXRIWTtBQXVIYitLLGVBdkhhLHlCQXVIQ3hLLENBdkhELEVBdUhJeEIsRUF2SEosRUF1SFE7QUFDbkIsUUFBTXlJLElBQUksR0FBRyxLQUFLcUMsT0FBTCxDQUFhOUssRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFiLENBQWI7QUFDQSxRQUFNZ0ssT0FBTyxHQUFHeEQsSUFBSSxDQUFDcEcsb0JBQUwsQ0FBMEIsZUFBMUIsRUFBMkMsQ0FBM0MsQ0FBaEI7QUFDQTRKLFdBQU8sQ0FBQ3hNLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCLGlCQUF6Qjs7QUFDQSxRQUFJLENBQUNtTSxPQUFPLENBQUN4TSxTQUFSLENBQWtCZ0MsUUFBbEIsQ0FBMkIsaUJBQTNCLENBQUwsRUFBb0Q7QUFDbERnSCxVQUFJLENBQUNoSixTQUFMLENBQWVFLE1BQWYsQ0FBc0IsYUFBdEI7QUFDRDtBQUNGLEdBOUhZO0FBK0hiNEosWUEvSGEsc0JBK0hGL0gsQ0EvSEUsRUErSEN4QixFQS9IRCxFQStISztBQUNoQixRQUFNeUksSUFBSSxHQUFHLEtBQUtxQyxPQUFMLENBQWE5SyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQWIsQ0FBYjtBQUNBd0csUUFBSSxDQUFDaEosU0FBTCxDQUFlSyxNQUFmLENBQXNCLGFBQXRCOztBQUNBLFFBQUksQ0FBQzJJLElBQUksQ0FBQ2hKLFNBQUwsQ0FBZWdDLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBTCxFQUE2QztBQUMzQyxXQUFLeUssb0JBQUwsQ0FBMEJ6RCxJQUExQjtBQUNEOztBQUNEbkosWUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQzJGLEtBQTNDLEdBQW1ELENBQW5EO0FBQ0QsR0F0SVk7QUF1SWJrRyxhQXZJYSx1QkF1SUQ1SixDQXZJQyxFQXVJRXhCLEVBdklGLEVBdUlNO0FBQ2pCLFFBQUlBLEVBQUUsQ0FBQ2tGLEtBQUgsSUFBWSxDQUFoQixFQUFtQjtBQUNqQixXQUFLLElBQUlELEVBQVQsSUFBZSxLQUFLNkYsT0FBcEIsRUFBNkI7QUFDM0IsYUFBS0EsT0FBTCxDQUFhN0YsRUFBYixFQUFpQnhGLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixhQUEvQjtBQUNEO0FBQ0YsS0FKRCxNQUlPO0FBQ0wsVUFBSStJLElBQUosRUFBVWdELFFBQVY7O0FBQ0EsV0FBSyxJQUFJeEcsR0FBVCxJQUFlLEtBQUs2RixPQUFwQixFQUE2QjtBQUMzQnJDLFlBQUksR0FBRyxLQUFLcUMsT0FBTCxDQUFhN0YsR0FBYixDQUFQO0FBQ0F3RCxZQUFJLENBQUNoSixTQUFMLENBQWVFLE1BQWYsQ0FBc0IsYUFBdEI7QUFDQSxhQUFLdU0sb0JBQUwsQ0FBMEJ6RCxJQUExQjtBQUNEO0FBQ0Y7QUFDRixHQXBKWTtBQXFKYjRDLFNBckphLG1CQXFKTHBHLEVBckpLLEVBcUpEO0FBQ1YsV0FBTyxLQUFLNEYsS0FBTCxDQUFXN0QsSUFBWCxDQUFnQixVQUFBeUIsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ3hELEVBQUwsSUFBV0EsRUFBZjtBQUFBLEtBQXBCLENBQVA7QUFDRCxHQXZKWTtBQXdKYmlILHNCQXhKYSxnQ0F3SlF6RCxJQXhKUixFQXdKYztBQUN6QixRQUFNZ0QsUUFBUSxHQUFHaEQsSUFBSSxDQUFDcEcsb0JBQUwsQ0FBMEIsVUFBMUIsRUFBc0MsQ0FBdEMsQ0FBakI7QUFDQW9KLFlBQVEsQ0FBQzFHLEtBQVQsQ0FBZW9ILE1BQWYsR0FBd0JWLFFBQVEsQ0FBQ1csWUFBVCxHQUF3QixFQUF4QixHQUE2QixJQUFyRDtBQUNEO0FBM0pZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXhQLGlCQUFKLENBQWU7QUFDYm9ELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCO0FBRGIsS0FEQztBQUlOcUQsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLHVCQUFlLFFBRFY7QUFFTCxzQkFBYyxRQUZUO0FBR0wsd0JBQWdCO0FBSFg7QUFESjtBQUpDLEdBRks7QUFlYjRMLE1BQUksRUFBRSxFQWZPO0FBaUJicE4sVUFqQmEsc0JBaUJGO0FBQUE7O0FBQ1RwQyx1QkFBT3VCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0EsUUFBUSxDQUFDZ08sRUFBM0IsRUFBK0I7QUFDL0IsVUFBTUMsV0FBVyxHQUFHak8sUUFBUSxDQUFDZ08sRUFBVCxDQUFZRCxJQUFoQzs7QUFDQSxXQUFLLElBQUluTixHQUFULElBQWdCcU4sV0FBaEIsRUFBNkI7QUFDM0IsYUFBSSxDQUFDRixJQUFMLENBQVVuTixHQUFWLElBQWlCSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBVUwsR0FBbEMsQ0FBakI7QUFDQSxZQUFJcU4sV0FBVyxDQUFDck4sR0FBRCxDQUFYLENBQWlCc04sUUFBckIsRUFBK0IsS0FBSSxDQUFDQyxJQUFMLENBQVV2TixHQUFWLEVBQS9CLEtBQ0ssS0FBSSxDQUFDd04sS0FBTCxDQUFXeE4sR0FBWDtBQUNOO0FBQ0YsS0FSRDtBQVNELEdBM0JZO0FBNkJidU4sTUE3QmEsZ0JBNkJSdk4sR0E3QlEsRUE2Qkg7QUFDUixTQUFLbU4sSUFBTCxDQUFVbk4sR0FBVixFQUFlTyxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxhQUFoQztBQUNELEdBL0JZO0FBZ0NiK00sT0FoQ2EsaUJBZ0NQeE4sR0FoQ08sRUFnQ0Y7QUFDVCxTQUFLbU4sSUFBTCxDQUFVbk4sR0FBVixFQUFlTyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNELEdBbENZO0FBbUNiSSxRQW5DYSxrQkFtQ04wQixDQW5DTSxFQW1DSHhCLEVBbkNHLEVBbUNDO0FBQ1pBLE1BQUUsR0FBR0EsRUFBRSxDQUFDMk0sUUFBSCxLQUFnQixJQUFoQixHQUF1QjNNLEVBQXZCLEdBQTRCQSxFQUFFLENBQUMwQixVQUFwQztBQUNBLFFBQU11RCxFQUFFLEdBQUdqRixFQUFFLENBQUNpQyxZQUFILENBQWdCLGFBQWhCLENBQVg7QUFDQSxRQUFNL0MsR0FBRyxHQUFHK0YsRUFBRSxDQUFDUyxLQUFILENBQVMsSUFBVCxFQUFla0gsR0FBZixFQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHdk4sUUFBUSxDQUFDQyxjQUFULENBQXdCMEYsRUFBeEIsQ0FBZDtBQUNBNEgsU0FBSyxDQUFDcE4sU0FBTixDQUFnQkssTUFBaEIsQ0FBdUIsYUFBdkI7QUFDQSxTQUFLakMsSUFBTCxDQUFVLHFCQUFWLEVBQWlDcUIsR0FBakMsRUFBc0MsQ0FBQzJOLEtBQUssQ0FBQ3BOLFNBQU4sQ0FBZ0JnQyxRQUFoQixDQUF5QixhQUF6QixDQUF2QztBQUNELEdBMUNZO0FBMkNicUwsdUJBM0NhLG1DQTJDVztBQUN0QnJQLFNBQUssQ0FBQzJFLElBQU4sQ0FBVzlDLFFBQVEsQ0FBQ2Usc0JBQVQsQ0FBZ0MsWUFBaEMsQ0FBWCxFQUNHdUMsT0FESCxDQUNXLFVBQUExRCxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDTyxTQUFKLENBQWNFLE1BQWQsQ0FBcUIsaUJBQXJCLENBQUo7QUFBQSxLQURkO0FBRUQ7QUE5Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJL0MsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQjtBQURiLEtBREM7QUFJTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCx5QkFBaUIsV0FEWjtBQUVMLG9CQUFZO0FBRlA7QUFESjtBQUpDLEdBRks7QUFjYlIsUUFkYSxrQkFjTjVDLEtBZE0sRUFjQztBQUFBOztBQUNaLFFBQUlBLEtBQUssSUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkLEVBQW9DO0FBQ2xDLFVBQU0wUCxJQUFJLEdBQUcxUCxLQUFLLENBQUMyUCxHQUFOLEdBQVkzUCxLQUFLLENBQUMyUCxHQUFOLENBQVV0SCxLQUFWLENBQWdCLEdBQWhCLENBQVosR0FBbUMsRUFBaEQ7QUFDQXBHLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ2UsU0FBaEMsR0FBNEMsRUFBNUM7QUFDQXlNLFVBQUksQ0FBQ25LLE9BQUwsQ0FBYSxVQUFBb0ssR0FBRztBQUFBLGVBQUksS0FBSSxDQUFDQyxTQUFMLENBQWVELEdBQWYsQ0FBSjtBQUFBLE9BQWhCO0FBQ0Q7QUFDRixHQXBCWTtBQXFCYkMsV0FyQmEscUJBcUJIRCxHQXJCRyxFQXFCRTtBQUNiLFFBQU16QixTQUFTLEdBQUdqTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQSxRQUFNUyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ3VGLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFFBQU1xSSxHQUFHLEdBQUc1TixRQUFRLENBQUN1RixhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxRQUFNc0ksQ0FBQyxHQUFHN04sUUFBUSxDQUFDK0ksY0FBVCxDQUF3QmpELE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixLQUFwQixDQUF4QixDQUFWO0FBQ0FyRixNQUFFLENBQUNnRixTQUFILEdBQWUsaUNBQWY7QUFDQWtJLE9BQUcsQ0FBQ2xJLFNBQUosR0FBZ0IsY0FBaEI7QUFDQWtJLE9BQUcsQ0FBQzlMLFlBQUosQ0FBaUIsVUFBakIsRUFBNkI0TCxHQUE3QjtBQUNBaE4sTUFBRSxDQUFDTSxTQUFILEdBQWUwTSxHQUFmO0FBQ0FFLE9BQUcsQ0FBQzVILFdBQUosQ0FBZ0I2SCxDQUFoQjtBQUNBbk4sTUFBRSxDQUFDc0YsV0FBSCxDQUFlNEgsR0FBZjtBQUNBM0IsYUFBUyxDQUFDakcsV0FBVixDQUFzQnRGLEVBQXRCO0FBQ0QsR0FqQ1k7QUFrQ2JvTixRQWxDYSxvQkFrQ0o7QUFBQTs7QUFDUCxRQUFNQyxHQUFHLEdBQUcvTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBWjtBQUNBLFFBQUl5TixHQUFHLEdBQUdLLEdBQUcsQ0FBQ25JLEtBQUosQ0FBVW9JLElBQVYsRUFBVjtBQUNBLFFBQUksQ0FBQ04sR0FBTCxFQUFVO0FBQ1YsU0FBS25QLElBQUwsQ0FBVSxTQUFWLEVBQXFCbVAsR0FBckIsRUFBMEJuUSxtQkFBT1EsS0FBakM7QUFDQWdRLE9BQUcsQ0FBQ25JLEtBQUosR0FBWSxFQUFaO0FBQ0E4SCxPQUFHLENBQUN0SCxLQUFKLENBQVUsR0FBVixFQUFlOUMsT0FBZixDQUF1QixVQUFBb0ssR0FBRztBQUFBLGFBQUksTUFBSSxDQUFDQyxTQUFMLENBQWVELEdBQWYsQ0FBSjtBQUFBLEtBQTFCO0FBQ0QsR0F6Q1k7QUEwQ2JPLFdBMUNhLHFCQTBDSC9MLENBMUNHLEVBMENBeEIsRUExQ0EsRUEwQ0k7QUFDZixTQUFLbkMsSUFBTCxDQUFVLFlBQVYsRUFBd0JtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFVBQWhCLENBQXhCLEVBQXFEcEYsbUJBQU9RLEtBQTVEO0FBQ0EyQyxNQUFFLENBQUMwQixVQUFILENBQWNBLFVBQWQsQ0FBeUJvSyxXQUF6QixDQUFxQzlMLEVBQUUsQ0FBQzBCLFVBQXhDO0FBQ0Q7QUE3Q1ksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBOzs7Ozs7QUFFQSxJQUFJOUUsaUJBQUosQ0FBZTtBQUNib0QsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05zRCxPQUFHLEVBQUU7QUFDSHlDLFlBQU0sRUFBRTtBQUNOLHNCQUFjO0FBRFI7QUFETDtBQURDLEdBRks7QUFVYnVLLE9BQUssRUFBRSxTQVZNO0FBWWJ2TyxVQVphLHNCQVlGO0FBQUE7O0FBQ1RwQyx1QkFBT3VCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxRQUFRLEVBQUk7QUFDdEMsVUFBTWtQLEtBQUssR0FBR2xQLFFBQVEsSUFBSUEsUUFBUSxDQUFDZ08sRUFBckIsSUFBMkJoTyxRQUFRLENBQUNnTyxFQUFULENBQVlrQixLQUF2QyxHQUErQ2xQLFFBQVEsQ0FBQ2dPLEVBQVQsQ0FBWWtCLEtBQTNELEdBQW1FLFNBQWpGO0FBQ0FsTyxjQUFRLENBQUNDLGNBQVQsa0JBQWtDaU8sS0FBbEMsR0FBMkNoSSxPQUEzQyxHQUFxRCxJQUFyRDs7QUFDQSxXQUFJLENBQUNpSSxNQUFMLENBQVlELEtBQVo7QUFDRCxLQUpEO0FBS0QsR0FsQlk7QUFvQmJFLFVBcEJhLG9CQW9CSmxNLENBcEJJLEVBb0JEeEIsRUFwQkMsRUFvQkc7QUFDZCxRQUFNd04sS0FBSyxHQUFHeE4sRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixZQUFoQixDQUFkO0FBQ0EsU0FBS3BFLElBQUwsQ0FBVSx1QkFBVixFQUFtQzJQLEtBQW5DO0FBQ0EsU0FBS0MsTUFBTCxDQUFZRCxLQUFaO0FBQ0QsR0F4Qlk7QUF5QmJDLFFBekJhLGtCQXlCTkQsS0F6Qk0sRUF5QkM7QUFDWixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQWxPLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEN5RixTQUE5QyxpQ0FBaUZ3SSxLQUFqRjtBQUNEO0FBNUJZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O3FCQUVlLElBQUkxUSxZQUFKLENBQVU7QUFDdkJzRCxNQUFJLEVBQUUsU0FEaUI7QUFFdkIwQyxNQUFJLEVBQUUsWUFGaUI7QUFHdkI1RixRQUFNLEVBQUU7QUFDTnlRLGNBQVUsRUFBRSxDQUNWLG1CQURVLEVBRVYsdUJBRlUsRUFHVixtQkFIVSxFQUlWLDBCQUpVLEVBS1Ysa0JBTFUsRUFNVix5QkFOVSxFQU9WLGNBUFUsRUFRVixlQVJVLEVBU1Ysc0JBVFUsRUFVViwyQkFWVSxFQVdWLGNBWFUsRUFZVixjQVpVLEVBYVYsY0FiVSxFQWNWLDRCQWRVLEVBZVYsc0JBZlUsRUFnQlYsbUJBaEJVLEVBaUJWLFlBakJVLEVBa0JWLFNBbEJVLEVBbUJWLHFCQW5CVSxFQW9CVixnQkFwQlUsRUFxQlYsbUJBckJVLEVBc0JWLHFCQXRCVSxFQXVCVix5QkF2QlUsRUF3QlYsdUJBeEJVO0FBRE47QUFIZSxDQUFWLEM7Ozs7Ozs7Ozs7O0FDRmYseUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FlO0FBQ2JDLFNBQU8sRUFBRTNQLE9BQU8sQ0FBQzRQLE9BQVIsQ0FBZ0JDLFdBQWhCLEdBQThCRixPQUQxQjtBQUVidFAsVUFBUSxFQUFDO0FBQ1B5UCxhQUFTLEVBQUU7QUFDVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FETTtBQUVUQyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUZNO0FBR1RySyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixDQUhNO0FBSVQ4QyxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUpNO0FBS1RELE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBTE07QUFNVHlILE9BQUMsRUFBRSxDQUFDLFVBQUQsRUFBYSxLQUFiLEVBQW9CLElBQXBCLENBTk07QUFPVCxZQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBUEc7QUFRVC9KLE9BQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQVJNO0FBU1RnSyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FUTTtBQVVUQyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVEMsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FiQTtBQWNUQyxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWRGO0FBZVRoQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FmSztBQWdCVGlDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMO0FBaEJLLEtBREo7QUFtQlB6UCxXQUFPLEVBQUU7QUFDUCxXQUFLO0FBQUVpRyxhQUFLLEVBQUU7QUFBVCxPQURFO0FBRVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZFO0FBR1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhFO0FBSVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUpFO0FBS1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxFO0FBTVBaLE9BQUMsRUFBRTtBQUFFWSxhQUFLLEVBQUU7QUFBVDtBQU5JLEtBbkJGO0FBMkJQckcsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxJQURIO0FBRVA2UCxnQkFBVSxFQUFFLEtBRkw7QUFHUEMsZ0JBQVUsRUFBRSxJQUhMO0FBSVA3TSxXQUFLLEVBQUUsS0FKQTtBQUtQOE0sWUFBTSxFQUFFLE9BTEQ7QUFNUEMsY0FBUSxFQUFFLE1BTkg7QUFPUEMsVUFBSSxFQUFFLE1BUEM7QUFRUEMsY0FBUSxFQUFFLElBUkg7QUFTUEMsWUFBTSxFQUFFLFdBVEQ7QUFVUEMsVUFBSSxFQUFFLE1BVkM7QUFXUEMsUUFBRSxFQUFFLEVBWEc7QUFZUEMsZ0JBQVUsRUFBRTtBQVpMLEtBM0JGO0FBeUNQMVEsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxJQURIO0FBRUwwUSxZQUFNLEVBQUUsSUFGSDtBQUdMQyxhQUFPLEVBQUU7QUFISixLQXpDQTtBQThDUC9MLFFBQUksRUFBRTtBQUNKZ00sWUFBTSxFQUFFLElBREo7QUFFSkMsY0FBUSxFQUFFLElBRk47QUFHSkMsaUJBQVcsRUFBRSxJQUhUO0FBSUpDLGdCQUFVLEVBQUUsS0FKUjtBQUtKQyxtQkFBYSxFQUFFLEtBTFg7QUFNSkMsa0JBQVksRUFBRSxFQU5WO0FBT0pDLGVBQVMsRUFBRSxLQVBQO0FBUUpDLGlCQUFXLEVBQUUsSUFSVDtBQVNKQyxpQkFBVyxFQUFFLElBVFQ7QUFVSkMsYUFBTyxFQUFFLElBVkw7QUFXSkMsaUJBQVcsRUFBRSxLQVhUO0FBWUpDLGVBQVMsRUFBRSxJQVpQO0FBYUpDLGFBQU8sRUFBRSxJQWJMO0FBY0pDLGtCQUFZLEVBQUUsS0FkVjtBQWVKQyxhQUFPLEVBQUUsV0FmTDtBQWdCSjdNLGdCQUFVLEVBQUUsT0FoQlI7QUFpQko4TSxpQkFBVyxFQUFFLElBakJUO0FBa0JKQyxjQUFRLEVBQUU7QUFsQk4sS0E5Q0M7QUFrRVA5RCxNQUFFLEVBQUU7QUFDRkQsVUFBSSxFQUFFO0FBQ0pnRSxZQUFJLEVBQUU7QUFBRTdELGtCQUFRLEVBQUU7QUFBWixTQURGO0FBRUpPLFlBQUksRUFBRTtBQUFFUCxrQkFBUSxFQUFFO0FBQVosU0FGRjtBQUdKM0IsYUFBSyxFQUFFO0FBQUUyQixrQkFBUSxFQUFFO0FBQVosU0FISDtBQUlKMU4sZUFBTyxFQUFFO0FBQUUwTixrQkFBUSxFQUFFO0FBQVosU0FKTDtBQUtKOEQsZUFBTyxFQUFFO0FBQUU5RCxrQkFBUSxFQUFFO0FBQVosU0FMTDtBQU1KckcsYUFBSyxFQUFFO0FBQUVxRyxrQkFBUSxFQUFFO0FBQVosU0FOSDtBQU9KK0QsYUFBSyxFQUFFO0FBQUUvRCxrQkFBUSxFQUFFO0FBQVosU0FQSDtBQVFKZ0UsY0FBTSxFQUFFO0FBQUVoRSxrQkFBUSxFQUFFO0FBQVo7QUFSSixPQURKO0FBV0ZnQixXQUFLLEVBQUU7QUFYTDtBQWxFRyxHQUZJO0FBa0ZiOU8sU0FBTyxFQUFFO0FBQ1ArUixXQUFPLEVBQUU7QUFERixHQWxGSTtBQXFGYnpSLFdBQVMsRUFBRSxFQXJGRTtBQXNGYm1FLE1BQUksRUFBRTtBQUNKN0UsWUFBUSxFQUFFLEtBRE47QUFFSkksV0FBTyxFQUFFLEtBRkw7QUFHSk0sYUFBUyxFQUFFO0FBSFA7QUF0Rk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQUE7QUFFYjBSLHNCQUFvQixFQUFFLEVBRlQ7QUFJYkMsaUJBQWUsRUFBRSxFQUpKO0FBTWJuSixhQUFXLEVBQUU7QUFDWG9KLGFBQVMsRUFBRSxTQURBO0FBRVhDLFNBQUssRUFBRSxTQUZJO0FBR1hDLFVBQU0sRUFBRSxTQUhHO0FBSVhDLFVBQU0sRUFBRSxTQUpHO0FBS1hDLE9BQUcsRUFBRSxTQUxNO0FBTVhDLFVBQU0sRUFBRSxTQU5HO0FBT1hDLFFBQUksRUFBRSxTQVBLO0FBUVhDLFNBQUssRUFBRTtBQVJJO0FBTkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZixJQUFNM1UsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBUzRVLEdBQVQsRUFBYztBQUMxQixNQUFNQyxNQUFNLEdBQUc1VCxLQUFLLENBQUNDLE9BQU4sQ0FBYzBULEdBQWQsSUFBcUIsRUFBckIsR0FBMEIsRUFBekM7QUFDQSxNQUFJL0gsR0FBSjs7QUFDQSxPQUFLLElBQUlpSSxJQUFULElBQWlCRixHQUFqQixFQUFzQjtBQUNwQixRQUFJQSxHQUFHLENBQUNHLGNBQUosQ0FBbUJELElBQW5CLENBQUosRUFBOEI7QUFDNUJqSSxTQUFHLEdBQUcrSCxHQUFHLENBQUNFLElBQUQsQ0FBVDs7QUFDQSxVQUFJakksR0FBRyxLQUFLLElBQVIsSUFBZ0IsUUFBT0EsR0FBUCxNQUFlLFFBQW5DLEVBQTZDO0FBQzNDZ0ksY0FBTSxDQUFDQyxJQUFELENBQU4sR0FBZTlVLEtBQUssQ0FBQzZNLEdBQUQsQ0FBcEI7QUFDRCxPQUZELE1BR0VnSSxNQUFNLENBQUNDLElBQUQsQ0FBTixHQUFlakksR0FBZjtBQUNIO0FBQ0Y7O0FBQ0QsU0FBT2dJLE1BQVA7QUFDRCxDQWJEOztRQWVTN1UsSyxHQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFJLFU7O1FBQUFBLFU7OztBQUVYLHNCQUFZNFUsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNmQSxPQUFHLENBQUNDLE1BQUosR0FBYSxFQUFiO0FBQ0FELE9BQUcsQ0FBQ0UsV0FBSixHQUFrQixFQUFsQjtBQUVBLG9GQUFNRixHQUFOO0FBRUEsVUFBS0csb0JBQUwsSUFBNkIsTUFBS0MsWUFBTCxFQUE3QjtBQUNBLEtBQUMsTUFBS0MsU0FBTixJQUFtQixNQUFLQyxZQUFMLEVBQW5CO0FBUGU7QUFRaEI7Ozs7bUNBQ2NDLE0sRUFBUWpQLEksRUFBTXRCLEMsRUFBRztBQUM5QixVQUFJeEIsRUFBRSxHQUFHd0IsQ0FBQyxDQUFDNlAsTUFBWDtBQUFBLFVBQ0lXLFFBREo7QUFBQSxVQUNjQyxJQURkO0FBQUEsVUFDb0JoUixJQURwQjtBQUFBLFVBQzBCaVIsQ0FEMUI7QUFBQSxVQUM2QkMsSUFEN0I7QUFBQSxVQUNtQ0MsT0FEbkM7QUFBQSxVQUM0Q0MsS0FENUM7O0FBR0EsV0FBS0wsUUFBTCxJQUFpQkQsTUFBakIsRUFBeUI7QUFDdkJHLFNBQUMsR0FBR0YsUUFBUSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFJLEdBQUdELFFBQVA7QUFDQUcsWUFBSSxHQUFHRCxDQUFDLEtBQUssR0FBYjtBQUNBRSxlQUFPLEdBQUdGLENBQUMsS0FBSyxHQUFoQjtBQUNBRyxhQUFLLEdBQUdILENBQUMsS0FBSyxHQUFkO0FBRUEsWUFBSUMsSUFBSSxJQUFJQyxPQUFaLEVBQXFCSixRQUFRLEdBQUdBLFFBQVEsQ0FBQ3JLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBWDs7QUFFckIsWUFBSTBLLEtBQUssSUFDTEQsT0FBTyxJQUFJcFMsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCdVEsUUFBdEIsQ0FEWCxJQUVBRyxJQUFJLElBQUluUyxFQUFFLENBQUNpRixFQUFILEtBQVUrTSxRQUZsQixJQUdBaFMsRUFBRSxDQUFDMk0sUUFBSCxDQUFZbEYsV0FBWixPQUE4QnVLLFFBSGxDLEVBSUU7QUFFQS9RLGNBQUksR0FBRzhRLE1BQU0sQ0FBQ0UsSUFBRCxDQUFiO0FBRUEsY0FBSSxPQUFPaFIsSUFBUCxLQUFnQixVQUFwQixFQUFnQ0EsSUFBSSxDQUFDTyxDQUFELEVBQUl4QixFQUFKLENBQUosQ0FBaEMsS0FDSyxJQUFJLEtBQUtpQixJQUFMLENBQUosRUFBZ0IsS0FBS0EsSUFBTCxFQUFXTyxDQUFYLEVBQWN4QixFQUFkO0FBRXJCO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBQ2M7QUFBQTs7QUFDYixXQUFLWixFQUFMLENBQVEsZUFBUixFQUF5QixVQUFBQSxFQUFFLEVBQUk7QUFDN0IsWUFBSUEsRUFBSixFQUFRLE1BQUksQ0FBQ3dTLFlBQUwsR0FBUixLQUNLLE1BQUksQ0FBQ1UsZUFBTDtBQUNOLE9BSEQ7QUFJRDs7O2dDQUNXeFAsSSxFQUFNN0IsSSxFQUFNakIsRSxFQUFJO0FBQzFCQSxRQUFFLEdBQUdBLEVBQUUsSUFBSSxLQUFLQSxFQUFoQjtBQUNBLFVBQU11UyxPQUFPLEdBQUcsT0FBT3RSLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQTdCLEdBQW9DLEtBQUtBLElBQUwsQ0FBcEQ7QUFFQWpCLFFBQUUsQ0FBQ3dTLGdCQUFILENBQW9CMVAsSUFBcEIsRUFBMEJ5UCxPQUExQixFQUFtQyxLQUFuQzs7QUFFQSxVQUFJdlMsRUFBRSxLQUFLLEtBQUtBLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQUksQ0FBQyxLQUFLeVIsTUFBTCxDQUFZM08sSUFBWixDQUFMLEVBQXdCLEtBQUsyTyxNQUFMLENBQVkzTyxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLMk8sTUFBTCxDQUFZM08sSUFBWixFQUFrQmxGLElBQWxCLENBQXVCMlUsT0FBdkI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLYixXQUFMLENBQWlCOVQsSUFBakIsQ0FBc0IsQ0FBQ29DLEVBQUQsRUFBSzhDLElBQUwsRUFBV3lQLE9BQVgsQ0FBdEI7QUFDRDtBQUNGOzs7bUNBQ2M7QUFDYixVQUFJclYsTUFBTSxHQUFHLEtBQUtBLE1BQWxCO0FBQUEsVUFDSXVWLFNBREo7QUFBQSxVQUNlelMsRUFEZjtBQUFBLFVBQ21CK1IsTUFEbkI7QUFBQSxVQUMyQmpQLElBRDNCO0FBQUEsVUFDaUN5UCxPQURqQztBQUdBLFVBQUksQ0FBQ3JWLE1BQUQsSUFBVyxFQUFFdVYsU0FBUyxHQUFHdlYsTUFBTSxDQUFDc0QsR0FBckIsQ0FBWCxJQUF3QyxFQUFFUixFQUFFLEdBQUcsS0FBS0EsRUFBWixDQUE1QyxFQUE2RCxPQUFPLEtBQVA7O0FBRTdELFdBQUs4QyxJQUFMLElBQWEyUCxTQUFiLEVBQXdCO0FBQ3RCVixjQUFNLEdBQUdVLFNBQVMsQ0FBQzNQLElBQUQsQ0FBbEI7QUFDQXlQLGVBQU8sR0FBRyxLQUFLRyxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLQyxjQUF0QixFQUFzQ1osTUFBdEMsRUFBOENqUCxJQUE5QyxDQUFWO0FBQ0E5QyxVQUFFLENBQUN3UyxnQkFBSCxDQUFvQjFQLElBQXBCLEVBQTBCeVAsT0FBMUIsRUFBbUMsS0FBbkM7QUFDQSxZQUFJLENBQUMsS0FBS2QsTUFBTCxDQUFZM08sSUFBWixDQUFMLEVBQXdCLEtBQUsyTyxNQUFMLENBQVkzTyxJQUFaLElBQW9CLEVBQXBCOztBQUN4QixhQUFLMk8sTUFBTCxDQUFZM08sSUFBWixFQUFrQmxGLElBQWxCLENBQXVCMlUsT0FBdkI7QUFDRDtBQUNGOzs7c0NBQ2lCO0FBQ2hCLFVBQUl6UCxJQUFKLEVBQVUyTyxNQUFWLEVBQWtCOUwsQ0FBbEI7O0FBRUEsV0FBSzdDLElBQUwsSUFBYSxLQUFLMk8sTUFBbEIsRUFBMEI7QUFDeEJBLGNBQU0sR0FBRyxLQUFLQSxNQUFMLENBQVkzTyxJQUFaLENBQVQ7QUFDQTZDLFNBQUMsR0FBRzhMLE1BQU0sQ0FBQ3hOLE1BQVg7O0FBQ0EsZUFBTzBCLENBQUMsRUFBUixFQUFZO0FBQ1YsZUFBSzNGLEVBQUwsQ0FBUTRTLG1CQUFSLENBQTRCOVAsSUFBNUIsRUFBa0MyTyxNQUFNLENBQUM5TCxDQUFELENBQXhDLEVBQTZDLEtBQTdDOztBQUNBOEwsZ0JBQU0sQ0FBQzFGLE1BQVAsQ0FBY3BHLENBQWQsRUFBaUIsQ0FBakI7QUFDRDtBQUNGOztBQUVELFVBQUlrTixNQUFNLEdBQUcsS0FBS25CLFdBQWxCO0FBQUEsVUFBK0I5TCxDQUFDLEdBQUcsQ0FBbkM7QUFBQSxVQUFzQ2tOLEdBQXRDO0FBQ0FuTixPQUFDLEdBQUdrTixNQUFNLENBQUM1TyxNQUFYOztBQUVBLGFBQU8yQixDQUFDLEdBQUdELENBQVgsRUFBY0MsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCa04sV0FBRyxHQUFHRCxNQUFNLENBQUNqTixDQUFELENBQVo7QUFDQWtOLFdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0YsbUJBQVAsQ0FBMkJFLEdBQUcsQ0FBQyxDQUFELENBQTlCLEVBQW1DQSxHQUFHLENBQUMsQ0FBRCxDQUF0QyxFQUEyQyxLQUEzQztBQUNEO0FBQ0Y7Ozs7RUEzRjZCblcsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhDOztBQUVBLElBQU1LLGFBQWEsR0FBRyxJQUFJTCxlQUFKLENBQVk7QUFDaENzQyxVQURnQyxzQkFDckI7QUFBQTs7QUFDVDhULFVBQU0sQ0FBQ1AsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQVEsS0FBSyxFQUFJO0FBQ3hDLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWV4TixLQUFmLENBQXFCLEdBQXJCLEVBQTBCa0gsR0FBMUIsRUFBYjs7QUFDQSxVQUFJLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsRUFBb0MsZUFBcEMsRUFBcUQsa0JBQXJELEVBQXlFL0csUUFBekUsQ0FBa0ZvTixJQUFsRixDQUFKLEVBQTZGO0FBQzNGLGFBQUksQ0FBQ3BWLElBQUwsQ0FBVSx1QkFBVixFQUFtQztBQUNqQ3NWLGlCQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FEa0I7QUFFakNDLGtCQUFRLEVBQUVKLEtBQUssQ0FBQ0UsUUFBTixDQUFleE4sS0FBZixDQUFxQixHQUFyQixFQUEwQmtILEdBQTFCLEdBQWdDbEgsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkMyTixLQUEzQyxLQUFxRCxHQUFyRCxHQUEyREwsS0FBSyxDQUFDTSxNQUFqRSxHQUEwRSxHQUExRSxHQUFnRk4sS0FBSyxDQUFDTyxLQUYvRDtBQUdqQ0MsY0FBSSxFQUFHLElBQUkxSixJQUFKLEVBQUQsQ0FBYTJKLE9BQWI7QUFIMkIsU0FBbkM7QUFLRDtBQUNGLEtBVEQsRUFTRyxLQVRIO0FBVUQ7QUFaK0IsQ0FBWixDQUF0Qjs7cUJBZWV6VyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDakJBLFVBQVMwVyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDbEMsT0FBSyxJQUFJL04sQ0FBVCxJQUFjK04sSUFBZDtBQUNFLFFBQUksQ0FBQ0QsSUFBSSxDQUFDOU4sQ0FBRCxDQUFULEVBQWM4TixJQUFJLENBQUM5TixDQUFELENBQUosR0FBVStOLElBQUksQ0FBQy9OLENBQUQsQ0FBZDtBQURoQjs7QUFHQSxTQUFPOE4sSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELElBQU1qWCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFFakMsU0FBT3dCLE9BQU8sQ0FBQ29PLElBQVIsQ0FBYXVILEtBQWIsQ0FBbUI7QUFBRUMsaUJBQWEsRUFBRSxJQUFqQjtBQUF1QnJWLFVBQU0sRUFBRTtBQUEvQixHQUFuQixFQUEwREgsSUFBMUQsQ0FBK0QsVUFBQWdPLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSO0FBQUEsR0FBbkUsQ0FBUDtBQUNELENBSEQ7O1FBS1M1UCxlLEdBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xULElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVMrTixHQUFULEVBQWM7QUFDOUIsTUFBTThJLENBQUMsR0FBRzlJLEdBQUcsQ0FBQytJLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLE1BQUlELENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYyxPQUFPOUksR0FBUCxDQUFkLEtBQ0ssT0FBT0EsR0FBRyxDQUFDckQsTUFBSixDQUFXLENBQVgsRUFBY21NLENBQWQsQ0FBUDtBQUNOLENBSkQ7O1FBTVM3VyxTLEdBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkN1Q00sWUFBVztBQUN4QnFDLFVBQVEsQ0FBQ2tULGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLFdBQU13QixpQkFBaUIsRUFBdkI7QUFBQSxHQUE5QyxFQUF5RTtBQUN2RUMsV0FBTyxFQUFFLEtBRDhEO0FBRXZFQyxXQUFPLEVBQUUsSUFGOEQ7QUFHdkVDLFFBQUksRUFBRTtBQUhpRSxHQUF6RTtBQUtELEM7O0FBbkREOzs7Ozs7OztBQVFBLFNBQVNILGlCQUFULEdBQTZCO0FBQzNCLE1BQUloVSxFQUFKLEVBQVFvVSxJQUFSLEVBQWNDLE9BQWQsQ0FEMkIsQ0FFM0I7O0FBQ0EvVSxVQUFRLENBQUNnVixlQUFULENBQXlCbFQsWUFBekIsQ0FBc0MsTUFBdEMsRUFBOENuRCxPQUFPLENBQUN5TCxJQUFSLENBQWE2SyxhQUFiLEdBQTZCbkssT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBOUMsRUFIMkIsQ0FJM0I7O0FBQ0EsTUFBTW9LLFlBQVksR0FBR2xWLFFBQVEsQ0FBQ21WLGdCQUFULENBQTBCLGlCQUExQixDQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBR3BWLFFBQVEsQ0FBQ21WLGdCQUFULENBQTBCLG1CQUExQixDQUFyQjtBQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFRM0IseUJBQVVELFlBQVYsOEhBQXdCO0FBQXBCeFUsUUFBb0I7QUFDdEJxVSxhQUFPLEdBQUdyVSxFQUFFLENBQUNxVSxPQUFiO0FBQ0EsVUFBTU0sTUFBTSxHQUFHTixPQUFPLENBQUNNLE1BQXZCOztBQUVBLFVBQUlBLE1BQUosRUFBWTtBQUNWUCxZQUFJLEdBQUduVyxPQUFPLENBQUN5TCxJQUFSLENBQWFDLFVBQWIsQ0FBd0JnTCxNQUF4QixFQUFnQyxFQUFoQyxDQUFQOztBQUVBLFlBQUdQLElBQUksSUFBSUEsSUFBSSxJQUFJLElBQW5CLEVBQXlCO0FBQ3ZCcFUsWUFBRSxDQUFDbUYsV0FBSCxHQUFpQmlQLElBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBbkIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0IsMEJBQVVNLFlBQVYsbUlBQXdCO0FBQXBCMVUsUUFBb0I7QUFDdEJxVSxhQUFPLEdBQUdyVSxFQUFFLENBQUNxVSxPQUFiO0FBRUEsT0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixNQUF6QixFQUFpQ3pSLE9BQWpDLENBQXlDLFVBQUFnUyxJQUFJLEVBQUk7QUFDL0MsWUFBTUMsUUFBUSxHQUFHUixPQUFPLENBQUMsU0FBU08sSUFBVixDQUF4Qjs7QUFFQSxZQUFJQyxRQUFKLEVBQWM7QUFDWlQsY0FBSSxHQUFHblcsT0FBTyxDQUFDeUwsSUFBUixDQUFhQyxVQUFiLENBQXdCa0wsUUFBeEIsQ0FBUDs7QUFFQSxjQUFJVCxJQUFJLElBQUlBLElBQUksSUFBSSxJQUFwQixFQUEwQjtBQUN4QnBVLGNBQUUsQ0FBQ29CLFlBQUgsQ0FBZ0J3VCxJQUFJLENBQUNuTixXQUFMLEVBQWhCLEVBQW9DMk0sSUFBcEM7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdEO0FBbEMwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUM1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsSUFBSVUsTUFBTSxHQUFHLEVBQWI7Ozs7Ozs7Ozs7O3VCQUlLQyxLLEVBQU94QyxPLEVBQVM7QUFDakIsVUFBSSxDQUFDdUMsTUFBTSxDQUFDQyxLQUFELENBQVgsRUFBb0JELE1BQU0sQ0FBQ0MsS0FBRCxDQUFOLEdBQWdCLEVBQWhCO0FBRXBCRCxZQUFNLENBQUNDLEtBQUQsQ0FBTixDQUFjblgsSUFBZCxDQUFtQjJVLE9BQW5CO0FBQ0Q7Ozt5QkFDSXJWLE0sRUFBaUI7QUFBQTs7QUFBQSx3Q0FBTjhYLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQjlYLFlBQU0sR0FBR0EsTUFBTSxDQUFDd0ksS0FBUCxDQUFhLEdBQWIsQ0FBVDtBQUVBLFVBQUlFLENBQUMsR0FBRyxDQUFSO0FBQUEsVUFBV0QsQ0FBQyxHQUFHekksTUFBTSxDQUFDK0csTUFBdEI7QUFBQSxVQUE4QmdSLEtBQTlCOztBQUVBLGFBQU9yUCxDQUFDLEdBQUdELENBQVgsRUFBY0MsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCcVAsYUFBSyxHQUFHSCxNQUFNLENBQUM1WCxNQUFNLENBQUMwSSxDQUFELENBQVAsQ0FBZDtBQUVBLFlBQUlxUCxLQUFKLEVBQ0VBLEtBQUssQ0FBQ3JTLE9BQU4sQ0FBYyxVQUFBMlAsT0FBTztBQUFBLGlCQUFJQSxPQUFPLENBQUMyQyxLQUFSLENBQWMsS0FBZCxFQUFvQkYsSUFBcEIsQ0FBSjtBQUFBLFNBQXJCO0FBQ0g7QUFDRjs7OzRCQUNPRCxLLEVBQWdCO0FBQUEseUNBQU5DLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixhQUFPL1csT0FBTyxDQUFDNFAsT0FBUixDQUFnQnNILFdBQWhCLENBQTRCO0FBQUVDLFVBQUUsRUFBRUwsS0FBTjtBQUFhQyxZQUFJLEVBQUVBLElBQW5CO0FBQXlCSyxZQUFJLEVBQUU7QUFBL0IsT0FBNUIsV0FBeUUsWUFBTSxDQUFFLENBQWpGLENBQVA7QUFDRDs7OzBCQUNLQyxPLEVBQVNDLEksRUFBZ0I7QUFBQSx5Q0FBUEMsS0FBTztBQUFQQSxhQUFPO0FBQUE7O0FBQzdCLGFBQU8sWUFBbUI7QUFBQSwyQ0FBUEMsS0FBTztBQUFQQSxlQUFPO0FBQUE7O0FBQ3hCLGVBQU9GLElBQUksQ0FBQ0wsS0FBTCxDQUFXSSxPQUFYLEVBQW9CRSxLQUFLLENBQUMxTyxNQUFOLENBQWEyTyxLQUFiLENBQXBCLENBQVA7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWE5WSxPOztRQUFBQSxPOzs7QUFFWCxtQkFBWTZVLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZjs7QUFFQSxTQUFLa0UsQ0FBTCxJQUFVbEUsR0FBVjtBQUFlLFlBQUtrRSxDQUFMLElBQVVsRSxHQUFHLENBQUNrRSxDQUFELENBQWI7QUFBZjs7QUFFQSxRQUFJeFksTUFBTSxHQUFHLE1BQUtBLE1BQWxCO0FBQUEsUUFDSXlZLFNBREo7QUFBQSxRQUNlRCxDQURmO0FBQUEsUUFDa0JsVSxDQURsQjtBQUFBLFFBQ3FCK1EsT0FEckI7O0FBR0EsUUFBSXJWLE1BQU0sS0FBS3lZLFNBQVMsR0FBR3pZLE1BQU0sQ0FBQ0MsR0FBeEIsQ0FBVixFQUF3QztBQUN0QyxXQUFLcUUsQ0FBTCxJQUFVbVUsU0FBVixFQUFxQjtBQUNuQnBELGVBQU8sR0FBR29ELFNBQVMsQ0FBQ25VLENBQUQsQ0FBbkI7QUFDQSxZQUFJLE1BQUsrUSxPQUFMLENBQUosRUFDRSxNQUFLblQsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLE1BQUtrUixLQUFMLGdDQUFpQixNQUFLSCxPQUFMLENBQWpCLENBQVg7QUFDSDtBQUNGOztBQUNELEtBQUMsTUFBS3RULFFBQU4sSUFBa0IsTUFBS0EsUUFBTCxFQUFsQjtBQWZlO0FBZ0JoQjs7O0VBbEIwQjJXLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVhOVksSzs7UUFBQUEsSzs7O0FBRVgsaUJBQVkwVSxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFFQSxVQUFLcUUsSUFBTCxHQUFZLElBQVo7QUFFQSxRQUFNL1MsSUFBSSxHQUFHLE1BQUtBLElBQWxCO0FBRUE3RSxXQUFPLENBQUM0UCxPQUFSLENBQWdCaUksU0FBaEIsQ0FBMEJDLFdBQTFCLENBQXNDLE1BQUtyRCxLQUFMLGdDQUFpQixNQUFLc0QsV0FBdEIsQ0FBdEM7QUFFQSxRQUFJbFQsSUFBSSxLQUFLLFlBQVQsSUFBeUJBLElBQUksS0FBSyxZQUF0QyxFQUFvRCxNQUFLbVQsV0FBTDs7QUFFcEQsVUFBS0Msa0JBQUw7O0FBWGU7QUFZaEI7Ozs7MkJBQ01oWixNLEVBQVE7QUFDYixXQUFLZ1osa0JBQUwsQ0FBd0JoWixNQUF4QjtBQUNEOzs7dUNBQ2tCQSxNLEVBQVE7QUFDekJBLFlBQU0sR0FBR0EsTUFBTSxJQUFJLEtBQUtBLE1BQXhCO0FBQ0EsVUFBSWlaLFlBQUosRUFBa0JDLHFCQUFsQjs7QUFFQSxVQUFJbFosTUFBSixFQUFZO0FBQ1ZpWixvQkFBWSxHQUFHalosTUFBTSxDQUFDbVosTUFBdEI7O0FBQ0EsWUFBSUYsWUFBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoQixpQ0FBY0EsWUFBZDtBQUFBLGtCQUFTM1UsQ0FBVDtBQUNFLG1CQUFLcEMsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLEtBQUtrUixLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLeUMsV0FBdEIsRUFBbUMzVCxDQUFuQyxDQUFYO0FBREY7QUFEZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdqQjs7QUFDRDRVLDZCQUFxQixHQUFHbFosTUFBTSxDQUFDeVEsVUFBL0I7O0FBQ0EsWUFBSXlJLHFCQUFKLEVBQTJCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pCLGtDQUFjQSxxQkFBZDtBQUFBLGtCQUFTbEUsQ0FBVDtBQUNFLG1CQUFLOVMsRUFBTCxDQUFROFMsQ0FBUixFQUFXLEtBQUtRLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUs0RCxXQUF0QixFQUFtQ3BFLENBQW5DLENBQVg7QUFERjtBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzFCO0FBQ0Y7QUFDRjs7O2dDQUNXcUUsRyxFQUFLNVQsTSxFQUFRNlQsWSxFQUFjO0FBQ3JDRCxTQUFHLENBQUN2QixJQUFKLEdBQVd1QixHQUFHLENBQUN2QixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxJQUFJLEdBQUcsR0FBR2xPLE1BQUgsQ0FBVXlQLEdBQUcsQ0FBQ25CLEVBQWQsRUFBa0JtQixHQUFHLENBQUN2QixJQUF0QixDQUFYO0FBQ0EsVUFBSSxDQUFDclMsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ3ZDLElBQXZCLEVBQTZCNFUsSUFBSSxHQUFHQSxJQUFJLENBQUNsTyxNQUFMLENBQVluRSxNQUFaLEVBQW9CNlQsWUFBcEIsQ0FBUDtBQUM3QixXQUFLM1ksSUFBTCxDQUFVcVgsS0FBVixDQUFnQixJQUFoQixFQUFzQkYsSUFBdEI7QUFDQSxVQUFJdUIsR0FBRyxDQUFDbEIsSUFBUixFQUFjLE9BQU8sSUFBUCxDQUx1QixDQUtWOztBQUMzQixhQUFPLEtBQVA7QUFDRDs7O2dDQUNXN1QsQyxFQUFZO0FBQ3RCLFVBQU1zQixJQUFJLEdBQUcsS0FBS0EsSUFBbEI7O0FBRHNCLHdDQUFOa1MsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBRXRCLFVBQUl5QixHQUFHLEdBQUc7QUFBRXJCLFVBQUUsRUFBRTVULENBQU47QUFBU3dULFlBQUksRUFBRUE7QUFBZixPQUFWO0FBQ0EsVUFBSWxTLElBQUksS0FBSyxTQUFiLEVBQXdCN0UsT0FBTyxDQUFDNFAsT0FBUixDQUFnQnNILFdBQWhCLENBQTRCc0IsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSTNULElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU00VCxPQUFPLEdBQUcxQixJQUFJLENBQUNBLElBQUksQ0FBQy9RLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSS9FLEdBQUo7O0FBQ0EsWUFBSXdYLE9BQU8sS0FBS3hYLEdBQUcsR0FBR3dYLE9BQU8sQ0FBQ3hYLEdBQW5CLENBQVgsRUFBb0M7QUFDbEMsY0FBSUEsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDcEJqQixtQkFBTyxDQUFDb08sSUFBUixDQUFhdUgsS0FBYixDQUFtQjtBQUFFcFYsb0JBQU0sRUFBRTtBQUFWLGFBQW5CLEVBQXFDSCxJQUFyQyxDQUEwQyxVQUFBZ08sSUFBSSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hELHNDQUFnQkEsSUFBaEI7QUFBQSxzQkFBU25OLElBQVQ7QUFDRWpCLHlCQUFPLENBQUNvTyxJQUFSLENBQWE4SSxXQUFiLENBQXlCalcsSUFBRyxDQUFDK0YsRUFBN0IsRUFBaUN3UixHQUFqQyxFQUFzQztBQUFFalUsMkJBQU8sRUFBRWtVLE9BQU8sQ0FBQ2xVLE9BQVIsSUFBbUI7QUFBOUIsbUJBQXRDLFdBQStFLFlBQU0sQ0FBRSxDQUF2RjtBQURGO0FBRGdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHakQsYUFIRDtBQUlELFdBTEQsTUFLTztBQUNMdkUsbUJBQU8sQ0FBQ29PLElBQVIsQ0FBYThJLFdBQWIsQ0FBeUJ1QixPQUFPLENBQUN4WCxHQUFqQyxFQUFzQ3VYLEdBQXRDLEVBQTJDO0FBQUVqVSxxQkFBTyxFQUFFa1UsT0FBTyxDQUFDbFUsT0FBUixJQUFtQjtBQUE5QixhQUEzQyxXQUFvRixZQUFNLENBQUUsQ0FBNUY7QUFDRDtBQUNGLFNBVEQsTUFTTztBQUNMdkUsaUJBQU8sQ0FBQ29PLElBQVIsQ0FBYXVILEtBQWIsQ0FBbUI7QUFBQztBQUFELFdBQW5CLEVBQWdFdlYsSUFBaEUsQ0FBcUUsVUFBQWdPLElBQUksRUFBSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMzRSxvQ0FBZ0JBLElBQWhCO0FBQUEsb0JBQVNuTixLQUFUO0FBQ0VqQix1QkFBTyxDQUFDb08sSUFBUixDQUFhOEksV0FBYixDQUF5QmpXLEtBQUcsQ0FBQytGLEVBQTdCLEVBQWlDd1IsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7Z0NBQ1dqVixDLEVBQVk7QUFBQSx5Q0FBTndULElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN0QixVQUFNeUIsR0FBRyxHQUFHO0FBQUVyQixVQUFFLEVBQUU1VCxDQUFOO0FBQVN3VCxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS2EsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVVMsV0FBVixDQUFzQkcsR0FBdEI7QUFDaEI7OztrQ0FDYTtBQUNaLFVBQUksQ0FBQyxLQUFLRSxrQkFBVixFQUE4QjtBQUM1QixhQUFLQyxPQUFMO0FBQ0EsYUFBS0Msc0JBQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxzQkFBTCxDQUE0QixLQUFLbkUsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS2tFLE9BQXRCLENBQTVCO0FBQ0Q7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTWYsSUFBSSxHQUFHLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWE1WCxPQUFPLENBQUM0UCxPQUFSLENBQWdCK0ksT0FBaEIsQ0FBd0I7QUFBRXhXLFlBQUksRUFBRSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0F5VixVQUFJLENBQUNpQixZQUFMLENBQWtCZixXQUFsQixDQUE4QjtBQUFBLGVBQU0sTUFBSSxDQUFDRixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCblIsRSxFQUFJO0FBQUE7O0FBQ3pCekcsYUFBTyxDQUFDNFAsT0FBUixDQUFnQmtKLFNBQWhCLENBQTBCaEIsV0FBMUIsQ0FBc0MsVUFBQUYsSUFBSSxFQUFJO0FBQzVDQSxZQUFJLENBQUNDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQixNQUFJLENBQUNyRCxLQUFMLENBQVcsTUFBWCxFQUFpQixNQUFJLENBQUNzRCxXQUF0QixDQUEzQjtBQUNBLFNBQUN0UixFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQXhGd0IvSCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUUsTTs7UUFBQUEsTTs7O0FBRVgsa0JBQVkyVSxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsZ0ZBQU1BLEdBQU47QUFFQSxVQUFLd0YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFFQSxVQUFLOVksYUFBTCxHQUFxQitZLDRCQUFpQi9ULElBQWpCLENBQXNCN0UsUUFBdEIsR0FBaUMsTUFBakMsR0FBMEMsT0FBL0Q7QUFDQSxVQUFLNlksWUFBTCxHQUFvQkQsNEJBQWlCL1QsSUFBakIsQ0FBc0J6RSxPQUF0QixHQUFnQyxNQUFoQyxHQUF5QyxPQUE3RDtBQUNBLFVBQUswWSxjQUFMLEdBQXNCRiw0QkFBaUIvVCxJQUFqQixDQUFzQm5FLFNBQXRCLEdBQWtDLE1BQWxDLEdBQTJDLE9BQWpFO0FBUmU7QUFTaEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxhQUFPZixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBSCxPQUFPLEVBQUk7QUFDakQsWUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUNpRixJQUF2QixFQUE2QjtBQUMzQixnQkFBSSxDQUFDa1UsUUFBTCxDQUFjblosT0FBTyxDQUFDaUYsSUFBdEI7QUFDRDtBQUNGLE9BSk0sQ0FBUDtBQUtEOzs7NkJBRVFBLEksRUFBTTtBQUNiLFdBQUssSUFBSW1VLElBQVQsSUFBaUJuVSxJQUFqQixFQUF1QjtBQUNyQixhQUFLLFVBQVVtVSxJQUFmLElBQXVCblUsSUFBSSxDQUFDbVUsSUFBRCxDQUFKLEdBQWEsTUFBYixHQUFzQixPQUE3QztBQUNEO0FBQ0Y7OztvQ0FFZTtBQUFBOztBQUNkLFdBQUtDLElBQUwsR0FBWWxaLElBQVosQ0FBaUI7QUFBQSxlQUFNLE1BQUksQ0FBQ1IsSUFBTCxDQUFVLDZCQUFWLENBQU47QUFBQSxPQUFqQjtBQUNEOzs7MEJBRXNCO0FBQUE7O0FBQUEsVUFBbkJxTSxLQUFtQix1RUFBWCxTQUFXOztBQUNyQixVQUFJLEtBQUsrTSxZQUFULEVBQXVCO0FBQ3JCLGVBQVEsSUFBSU8sT0FBSixDQUFZLFVBQUFDLENBQUM7QUFBQSxpQkFBSTFFLE1BQU0sQ0FBQzJFLFVBQVAsQ0FBa0I7QUFBQSxtQkFBTUQsQ0FBQyxDQUFDLE1BQUksQ0FBQ3JaLEdBQUwsQ0FBUzhMLEtBQVQsQ0FBRCxDQUFQO0FBQUEsV0FBbEIsRUFBNEMsRUFBNUMsQ0FBSjtBQUFBLFNBQWIsQ0FBUjtBQUNEOztBQUNELFVBQU1qSixJQUFJLEdBQUcsS0FBSyxVQUFVaUosS0FBZixDQUFiO0FBQ0EsVUFBSSxDQUFDakosSUFBTCxFQUFXLE1BQU0sV0FBV2lKLEtBQVgsR0FBbUIsaUJBQXpCOztBQUVYLFVBQUksQ0FBQyxLQUFLOE0sV0FBVixFQUF1QjtBQUNyQixhQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsYUFBS0QsV0FBTCxHQUFtQixJQUFuQjtBQUVBLGVBQU8sS0FBS08sSUFBTCxHQUFZbFosSUFBWixDQUFpQixZQUFNO0FBQzVCLGdCQUFJLENBQUM0WSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsaUJBQU8sTUFBSSxDQUFDLFVBQVUvTSxLQUFYLENBQUosRUFBUDtBQUNELFNBSE0sQ0FBUDtBQUlEOztBQUNELGFBQU8sS0FBSyxVQUFVQSxLQUFmLEdBQVA7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsYUFBT2pNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9GLEtBQWhCLENBQXNCbEYsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFzWixZQUFZLEVBQUk7QUFDdEQsZUFBTzFaLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmlGLElBQWhCLENBQXFCL0UsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUF1WixhQUFhLEVBQUk7QUFDdEQsV0FBQyxTQUFELEVBQVksTUFBWixFQUFvQmhWLE9BQXBCLENBQTRCLFVBQUFzSCxLQUFLLEVBQUk7QUFDbkN5Tix3QkFBWSxDQUFDek4sS0FBRCxDQUFaLEdBQXNCeU4sWUFBWSxDQUFDek4sS0FBRCxDQUFaLElBQXVCME4sYUFBYSxDQUFDMU4sS0FBRCxDQUExRDtBQUNELFdBRkQ7QUFHQSxjQUFJLE1BQUksQ0FBQy9MLGFBQUwsS0FBdUIsTUFBM0IsRUFBbUN3WixZQUFZLENBQUNyWixRQUFiLEdBQXdCc1osYUFBYSxDQUFDdFosUUFBdEM7QUFDbkMsaUJBQU8sTUFBSSxDQUFDdVosWUFBTCxHQUFvQnhaLElBQXBCLENBQXlCLFVBQUFLLE9BQU8sRUFBSTtBQUN6Q2laLHdCQUFZLENBQUNqWixPQUFiLEdBQXVCQSxPQUF2QjtBQUNBLG1CQUFPaVosWUFBUDtBQUNELFdBSE0sQ0FBUDtBQUlELFNBVE0sQ0FBUDtBQVVELE9BWE0sQ0FBUDtBQVlEOzs7eUNBQ29CO0FBQ25CLGFBQU8xWixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixLQUFoQixDQUFzQmxGLEdBQXRCLEVBQVA7QUFDRDs7OzBDQUNxQjtBQUNwQixhQUFPSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpRixJQUFoQixDQUFxQi9FLEdBQXJCLEVBQVA7QUFDRDs7O21DQUNjO0FBQ2IsYUFBT0gsT0FBTyxDQUFDQyxPQUFSLENBQWdCaUYsSUFBaEIsQ0FBcUIvRSxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQXVaLGFBQWEsRUFBSTtBQUN0RCxZQUFNRSxhQUFhLEdBQUdGLGFBQWEsQ0FBQ2xaLE9BQXBDO0FBRUEsZUFBT1QsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsS0FBaEIsQ0FBc0JsRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXNaLFlBQVksRUFBSTtBQUN0RCxjQUFNSSxZQUFZLEdBQUdKLFlBQVksQ0FBQ2paLE9BQWxDO0FBQ0EsY0FBSSxDQUFDb1osYUFBTCxFQUFvQixPQUFPQyxZQUFQO0FBQ3BCLGNBQUksQ0FBQ0EsWUFBTCxFQUFtQixPQUFPRCxhQUFQLENBSG1DLENBS3REOztBQUNBLGVBQUssSUFBSXRXLENBQVQsSUFBY3VXLFlBQVksQ0FBQ3RILE9BQTNCO0FBQW9DcUgseUJBQWEsQ0FBQ3JILE9BQWQsQ0FBc0JqUCxDQUF0QixJQUEyQnVXLFlBQVksQ0FBQ3RILE9BQWIsQ0FBcUJqUCxDQUFyQixDQUEzQjtBQUFwQzs7QUFFQSxpQkFBT3NXLGFBQVA7QUFDRCxTQVRNLENBQVA7QUFVRCxPQWJNLENBQVA7QUFjRDs7O29DQUNlO0FBQ2QsYUFBTzdaLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxhQUFyQixFQUFvQ0MsR0FBcEMsR0FBMENDLElBQTFDLENBQStDLFVBQUFILE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNJLFFBQVIsSUFBb0I0WSw0QkFBaUI1WSxRQUF6QztBQUFBLE9BQXRELENBQVA7QUFDRDs7O2dDQUNXO0FBQ1YsYUFBT0wsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsS0FBaEIsQ0FBc0JsRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXNaLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDSyxJQUFuQyxFQUF5QyxPQUFPLEVBQVA7QUFDekMsZUFBT0wsWUFBWSxDQUFDSyxJQUFwQjtBQUNELE9BSE0sQ0FBUDtBQUlEOzs7bUNBQ2M7QUFDYixhQUFPL1osT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsS0FBaEIsQ0FBc0JsRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQXNaLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDL0osT0FBbkMsRUFBNEM7QUFDMUMsaUJBQU8zUCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpRixJQUFoQixDQUFxQi9FLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBdVosYUFBYTtBQUFBLG1CQUFJQSxhQUFhLENBQUNoSyxPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU8rSixZQUFZLENBQUMvSixPQUFwQjtBQUNELE9BTE0sQ0FBUDtBQU1EOzs7O0VBdEd5QmpSLGUiLCJmaWxlIjoiY29udGVudC9zaWRlYmFyL3NpZGViYXIud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvc2lkZWJhci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3N0b3JlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1NUT1JFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYycsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCc6ICd1cGRhdGVFbnRyeU9uRm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYic6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVudjogJ3NpZGViYXInLFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcblxyXG4gIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KGVudHJ5KTtcclxuICAgICAgY29uc3QgY3VycmVudEVudHJ5ID0gISF0aGlzLmVudHJ5O1xyXG5cclxuICAgICAgdGhpcy5sb2NrZWQgPSB0aGlzLmxvY2tlZCB8fCBpc0FyciB8fCBlbnRyeS5sb2NrZWQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubG9ja2VkIHx8IGlzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubG9ja2VkICYmICFpc0Fycikge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJ5ICYmIEFycmF5LmlzQXJyYXkodGhpcy5lbnRyeSkpIHRoaXMuZW50cnkucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudHJ5ID0gW2VudHJ5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRFbnRyeSkgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlZC1lbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnc3RvcmVkOmVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uRm91bmQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUVudHJ5KGVudHJ5KTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGx5LXN0b3JlZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cnkgPSBudWxsO1xyXG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDplbnRyeScpO1xyXG4gIH0sXHJcblxyXG5cclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfcGFnZW5vdGVzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnBhZ2Vub3RlcyB8fCBudWxsKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhLWluZm9zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWdzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLW5vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmstYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbGlua3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdvblN0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd0b2dnbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW5lZDpzaWRlYmFyJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMucG93ZXIobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGVudHJ5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgaWYgKGVudHJ5ICYmIF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWw7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHJldHVybjtcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hbWUoZW50cnkubmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYW1lJylbMF07XHJcbiAgICBlbC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgZWwudGl0bGUgPSBuYW1lO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcyc6ICdhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0J1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXJldHJ5JzogJ3JldHJ5UmVzdG9yYXRpb24nLFxyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXNhdmUnOiAnc2F2ZScsXHJcbiAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlSW1tdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUJ0blNob3duOiBmYWxzZSxcclxuICBzYXZlQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXNhdmUnKSxcclxuICByZXRyeUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1yZXRyeScpLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudG9nZ2xlU2F2ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgcmV0cnlSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfSxcclxuICB0b2dnbGVTYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgY29uc3QgbWV0aCA9IGF1dG9zYXZlID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgdGhpcy5zYXZlQnRuLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlU2F2ZShvbiA9IHRydWUpIHtcclxuICAgIGlmIChvbikgdGhpcy5zYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIGVsc2UgdGhpcy5zYXZlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVTYXZlKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZVNhdmUoZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICghdGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAodGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXQoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLWltbXV0JykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjppbW11dCcsIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZUltbXV0KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgbWV0aCA9IGVudHJ5LmltbXV0ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1pbW11dCcpLmNsYXNzTGlzdFttZXRoXSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5yZXRyeUFjdGl2ZSkgdGhpcy5hY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbGlua3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubGluayc6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX2ljb24nOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX190ZXh0JzogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsaW5rKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnbGluaycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2Uoc2IpJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2FjdGl2YXRlJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJzogJ2FjdGl2YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbWFyayc6ICdtYXJrQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBmcmFtZTogMCxcclxuICBidXR0b25zOiBbXSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpKTtcclxuICB9LFxyXG4gIG1hcmtBY3Rpb24oZSwgZWwpIHtcclxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCBudWxsLCBudWxsLCB7IHRhYjogJ2FjdGl2ZScsIGZyYW1lSWQ6IHRoaXMuZnJhbWUgfSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZShtYXJrSW5mb3MsIHNlbmRlcikge1xyXG4gICAgdGhpcy5mcmFtZSA9IHNlbmRlciAmJiBzZW5kZXIuZnJhbWVJZCA/IHNlbmRlci5mcmFtZUlkIDogMDtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBsZXQgdHlwZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlID09PSAnY29weScgfHxcclxuICAgICAgICB0eXBlID09PSAnZGVsZXRlLWhpZ2hsaWdodCcgfHxcclxuICAgICAgICAodHlwZW9mIG1hcmtJbmZvc1t0eXBlXSA9PT0gJ2Jvb2xlYW4nICYmICFtYXJrSW5mb3NbdHlwZV0pIHx8XHJcbiAgICAgICAgKHR5cGUgPT09ICdkZWxldGUtYm9va21hcmsnICYmIG1hcmtJbmZvcy5ib29rbWFyaylcclxuICAgICAgKSB7XHJcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya2VycycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdyZW5kZXInLFxyXG4gICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3JlbmRlcicsXHJcbiAgICAgICdjaGFuZ2VkOnNlbGVjdGlvbic6ICd0b2dnbGVNYXJrZXJCdXR0b25zJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcubWFya2VyX19jb2xvcic6ICdjaGFuZ2UnLFxyXG4gICAgICAgICcubWFya2VyX19jYic6ICdzZWxlY3QnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2FwcGx5JzogJ2FwcGx5Q29sb3InXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBmcmFtZTogMCxcclxuICBhdXRvbWFya0VuYWJsZWQ6IGZhbHNlLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmICghc3RvcmFnZS5zeW5jIHx8IHN0b3JhZ2Uuc3luYy5zZXR0aW5ncykpIHtcclxuICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLnN5bmMgJiYgIXN0b3JhZ2Uuc3luYy5zZXR0aW5ncykge1xyXG4gICAgICAgICAgdGhpcy5hdXRvbWFya0VuYWJsZWQgPSBzdG9yYWdlLnNldHRpbmdzLm1pc2MubWFya21ldGhvZCA9PT0gJ2F1dG8nO1xyXG4gICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWFya2VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBpZiAoIW1hcmtlcnMpIHJldHVybiB0aGlzO1xyXG4gICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1sZWZ0Jyk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcnMtY29udGFpbmVyLS1yaWdodCcpO1xyXG4gICAgICBjb25zdCBmcmFnUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IGZyYWdMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBzID0gTWF0aC5jZWlsKE9iamVjdC5rZXlzKG1hcmtlcnMpLmxlbmd0aCAvIDIpO1xyXG4gICAgICBsZXQgY291bnQgPSAwLCBtLCBib3gsIGlucHV0LCBleGFtcGxlVGV4dCwgYnV0dG9uLCBjb2xvciwgY2JCb3gsIGNiLCBjYkxhYmVsLCBjYlNwYW47XHJcblxyXG4gICAgICBsZWZ0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICByaWdodENvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGZvciAobSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjYlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLmV4dHJhY3RCZ0NvbG9yKG1hcmtlcnNbbV0uc3R5bGUpO1xyXG5cclxuICAgICAgICBib3guY2xhc3NOYW1lID0gJ21hcmtlciB1LWNmJztcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnbWFya2VyX19jb2xvcic7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnbWFya2VyLScgKyBtO1xyXG4gICAgICAgIGlucHV0Lm5hbWUgPSBtO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY29sb3I7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuY2xhc3NOYW1lID0gJ21hcmtlcl9fdGV4dCc7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG1hcmtlcnNbbV0uc3R5bGUpO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlci0nICsgbSk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2FwcGx5JztcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2JCb3guY2xhc3NOYW1lID0gJ21hcmtlcl9fY2ItYm94JztcclxuICAgICAgICBjYi5jbGFzc05hbWUgPSAnbWFya2VyX19jYic7XHJcbiAgICAgICAgY2Iuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIG0pO1xyXG4gICAgICAgIGNiLnR5cGUgPSAncmFkaW8nO1xyXG4gICAgICAgIGNiLmlkID0gJ21hcmtlcl9fY2ItLScgKyBtO1xyXG4gICAgICAgIGNiLm5hbWUgPSAnbWFya2VyLWNiJztcclxuICAgICAgICBjYkxhYmVsLmNsYXNzTmFtZSA9ICdmYWtlLXJiJztcclxuICAgICAgICBjYkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21hcmtlcl9fY2ItLScgKyBtKTtcclxuICAgICAgICBjYlNwYW4udGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjVDRik7XHJcblxyXG4gICAgICAgIGNiTGFiZWwuYXBwZW5kQ2hpbGQoY2JTcGFuKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYik7XHJcbiAgICAgICAgY2JCb3guYXBwZW5kQ2hpbGQoY2JMYWJlbCk7XHJcblxyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjYkJveCk7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHQpO1xyXG5cclxuICAgICAgICBpZiAoY291bnQgPiAzICYmIGNvdW50ID4gcykge1xyXG4gICAgICAgICAgZnJhZ0xlZnQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnJhZ1JpZ2h0LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtID0gbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG0gPSBtID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogbTtcclxuICAgICAgICBleGFtcGxlVGV4dC5pbm5lclRleHQgPSBtO1xyXG4gICAgICAgIGlmICghY29sb3IpIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnUmlnaHQpO1xyXG4gICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdMZWZ0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYXV0bycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZXJfX2NiLS1tJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhdXRvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZXh0cmFjdEJnQ29sb3Ioc3R5bGVzKSB7XHJcbiAgICBsZXQgc3BsaXQgPSBzdHlsZXMuc3BsaXQoJzsnKSxcclxuICAgICAgICBsID0gc3BsaXQubGVuZ3RoLFxyXG4gICAgICAgIGNvbG9yID0gJycsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgc3R5bGU7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc3R5bGUgPSBzcGxpdFtpXTtcclxuICAgICAgaWYgKHN0eWxlLmluY2x1ZGVzKCdiYWNrZ3JvdW5kLWNvbG9yJykpIHtcclxuICAgICAgICBjb2xvciA9IHN0eWxlLnNwbGl0KCc6JylbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9LFxyXG4gIGNoYW5nZShlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2U6Ymctc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICB9LFxyXG4gIHNlbGVjdChlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOnNlbGVjdGVkLW1hcmtlcicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnLCBmcmFtZUlkOiB0aGlzLmZyYW1lIH0pO1xyXG4gIH0sXHJcbiAgYXBwbHlDb2xvcihlLCBlbCkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOmhpZ2hsaWdodCcsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSwgeyB0YWI6ICdhY3RpdmUnLCBmcmFtZUlkOiB0aGlzLmZyYW1lIH0pO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTWFya2VyQnV0dG9ucyhzaG93LCBzZW5kZXIpIHtcclxuICAgIGlmICh0aGlzLmF1dG9tYXJrRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5mcmFtZSA9IHNlbmRlciAmJiBzZW5kZXIuZnJhbWVJZCA/IHNlbmRlci5mcmFtZUlkIDogMDtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnc2V0QXR0cmlidXRlJztcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya2VyX19hcHBseScpKS5mb3JFYWNoKGJ0biA9PiBidG5bbWV0aF0oJ2Rpc2FibGVkJywgdHJ1ZSkpO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMudG9nZ2xlTWFya2VyQnV0dG9ucyhzdGF0ZS5zZWxlY3Rpb24pO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2dsb2JhbC1zZXR0aW5ncydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWFya3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnZW50cnk6b3JkZXJlZC1tYXJrcyc6ICdzZXRNYXJrSURzJyxcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInLFxyXG4gICAgICAndXBkYXRlZDpzdG9yZWQtZW50cnknIDogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtfX3RleHQnOiAnYWN0aXZhdGUnLFxyXG4gICAgICAgICcubWFya19fbm90ZS1idG4nOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJy5hY3Rpb24tYnV0dG9uLS1uYXYnOiAnbmF2J1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAnI2ZvbGQtbWFya3MnOiAnZm9sZExpc3QnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtYXJrczogW10sXHJcbiAgbWFya0lEczogbnVsbCxcclxuICBsZW5ndGg6IDAsXHJcbiAgY3VycmVudDogLTEsXHJcbiAgc2V0RmlsdGVyczogZmFsc2UsXHJcbiAgdG9nZ2xlTWFwOiB7ICcxJzogW2ZhbHNlLCBmYWxzZV0sICcyJzogW3RydWUsIGZhbHNlXSwgJzMnOiBbZmFsc2UsIHRydWVdLCAnNCc6IFt0cnVlLCB0cnVlXSB9LFxyXG5cclxuICByZW5kZXIoYSxiLGMpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeSA9IF9TVE9SRS5lbnRyeTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnNldE1hcmtzKCk7XHJcbiAgICAgIGlmICghdGhpcy5zZXRGaWx0ZXJzKSB0aGlzLnJlbmRlclNWR0ZpbHRlcnMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXRNYXJrcygpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeTtcclxuICAgIGxldCBtYXJrcyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGVudHJ5LmZvckVhY2goZSA9PiBtYXJrcyA9IG1hcmtzLmNvbmNhdChlLm1hcmtzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya0lEcyA9IHRoaXMubWFya0lEcztcclxuICAgIC8vdGhpcy5sZW5ndGggPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAvL3RoaXMubWFya3MgPSBtYXJrSURzID8gbWFya3Muc29ydCgobTEsIG0yKSA9PiBtYXJrSURzLmluZGV4T2YobTEuaWQpIDwgbWFya0lEcy5pbmRleE9mKG0yLmlkKSkgOiBtYXJrcztcclxuICAgIHRoaXMubWFya3MgPSBtYXJrSURzID9cclxuICAgICAgbWFya0lEcy5tYXAoaWQgPT4gbWFya3MuZmluZChtYXJrID0+IG1hcmsuaWQgPT0gaWQpKSA6XHJcbiAgICAgIG1hcmtzO1xyXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLm1hcmtzLmxlbmd0aDtcclxuICB9LFxyXG4gIHNldE1hcmtJRHMoaWRzLGIsYykge1xyXG4gICAgdGhpcy5tYXJrSURzID0gaWRzO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlclNWR0ZpbHRlcnMoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IHRtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB7fTtcclxuICAgIGxldCBpLCBjO1xyXG4gICAgZm9yIChpIGluIF9TRVRUSU5HUy5OT1RFX0NPTE9SUykge1xyXG4gICAgICAgYyA9IF9TRVRUSU5HUy5OT1RFX0NPTE9SU1tpXTtcclxuICAgICAgY29sb3JzW2kudG9Mb3dlckNhc2UoKV0gPSAnMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDEsMikpICsgJyAwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMywyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cig1LDIpKSArICcgMCAwIDAgMSAwJztcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXI7XHJcbiAgICBmb3IgKGkgaW4gY29sb3JzKSB7XHJcbiAgICAgIGZpbHRlciA9IHRtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBmaWx0ZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpbHRlcicpWzBdLmlkID0gJ2ZpbHRlci0tJyArIGk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmVDb2xvck1hdHJpeCcpWzBdLnNldEF0dHJpYnV0ZSgndmFsdWVzJywgY29sb3JzW2ldKTtcclxuICAgICAgYm9keS5hcHBlbmRDaGlsZChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZpbHRlcnMgPSB0cnVlO1xyXG4gIH0sXHJcbiAgY29udmVydEhleChoZXgpIHtcclxuICAgIHJldHVybiAoKDE2ICogTnVtYmVyKCcweCcgKyBoZXhbMF0pKSArIE51bWJlcignMHgnICsgaGV4WzFdKSkgLyAyNTU7XHJcbiAgfSxcclxuICByZW5kZXJMaXN0KCkge1xyXG4gICAgY29uc3QgbWFya1RtcGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay10ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCBtYXJrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrcycpO1xyXG4gICAgbGV0IG1hcmtDb250YWluZXI7XHJcblxyXG4gICAgbWFya3NDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5tYXJrcy5mb3JFYWNoKChtYXJrLCBpKSA9PiB7XHJcbiAgICAgIGlmIChtYXJrKSB7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lciA9IG1hcmtUbXBsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmlkID0gJyc7XHJcbiAgICAgICAgbWFya0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICBtYXJrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fdGV4dCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWFyay50ZXh0KTtcclxuICAgICAgICBsZXQgY29sb3IgPSBtYXJrLnN0eWxlLmluZGV4T2YoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBsZXQgaGFzTm90ZSA9IG1hcmsubm90ZSAmJiAodHlwZW9mIG1hcmsubm90ZSA9PT0gJ3N0cmluZycgfHwgbWFyay5ub3RlLnRleHQpO1xyXG4gICAgICAgIGNvbG9yID0gY29sb3IgPT09IC0xID8gJ3RyYW5zcGFyZW50JyA6IG1hcmsuc3R5bGUuc3Vic3RyKGNvbG9yICsgMTcsIDcpO1xyXG4gICAgICAgIGxldCBub3RlLCBub3RlQ29sb3IsIG5vdGVUZXh0LCBub3RlQnRuLCBub3RlTm9kZTtcclxuXHJcbiAgICAgICAgdGV4dE5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0ZXh0Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChoYXNOb3RlKSB7XHJcbiAgICAgICAgICBub3RlID0gbWFyay5ub3RlO1xyXG4gICAgICAgICAgbm90ZUNvbG9yID0gbm90ZS5jb2xvciB8fCAneWVsbG93JztcclxuICAgICAgICAgIG5vdGVUZXh0ID0gbm90ZS50ZXh0IHx8IG5vdGU7XHJcbiAgICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hcmstLW5vdGUnKTtcclxuICAgICAgICAgIG5vdGVCdG4gPSBtYXJrQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUtYnRuJylbMF07XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLWJ0bi0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgICBub3RlTm9kZSA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZScpWzBdO1xyXG4gICAgICAgICAgbm90ZU5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm90ZVRleHQpKTtcclxuICAgICAgICAgIG5vdGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWFya19fbm90ZS0tJyArIG5vdGVDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1hcmtDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hcmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9LFxyXG4gIG5hdihlLCBlbCkge1xyXG4gICAgY29uc3QgZGlyID0gMSAqIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgdGhpcy5jdXJyZW50ICs9IGRpcjtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5sZW5ndGgpIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB0aGlzLmN1cnJlbnQgPSB0aGlzLmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTGlzdEl0ZW0oaWQpIHtcclxuICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB0aGlzLmN1cnJlbnQgPSBpZDtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrLS1hY3RpdmUnKVswXTtcclxuICAgIGlmIChjdXJyZW50SXRlbSkgY3VycmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWFyay0tYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pZD1cIicgKyBbdGhpcy5jdXJyZW50XSArICdcIl0nKS5jbGFzc0xpc3QuYWRkKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpuZXh0LW1hcmsnLCB0aGlzLmN1cnJlbnQsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKGUsIGVsKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1tYXJrcycpLnZhbHVlID0gMDtcclxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3VuZm9sZGVkJyk7XHJcbiAgICB0aGlzLmFjdGl2YXRlTGlzdEl0ZW0oMSplbC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH0sXHJcbiAgZm9sZExpc3QoZSwgZWwpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgaWYgKHZhbCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVNldHRpbmdzID0gdGhpcy50b2dnbGVNYXBbdmFsXTtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlKCd0ZXh0JywgdG9nZ2xlU2V0dGluZ3NbMF0pO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgnbm90ZScsIHRvZ2dsZVNldHRpbmdzWzFdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZU5vdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgY29uc3QgbWFya0VsID0gZWwucGFyZW50Tm9kZTtcclxuICAgIG1hcmtFbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLW5vdGUnKTtcclxuICAgIG1hcmtFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZSh0eXBlLCBzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fJyArIHR5cGUpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3RbbWV0aF0oJ3VuZm9sZGVkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLW1ldGEnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGNvbnN0IHllcyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5ZXMnKTtcclxuICAgICAgY29uc3Qgbm8gPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm8nKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19udW1iZXItbWFya3MnKS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19jcmVhdGVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YV9fbGFzdC1tb2RpZmllZCcpLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG5cclxuICAgICAgWydzeW5jZWQnLCAnaW1tdXQnXVxyXG4gICAgICAgIC5mb3JFYWNoKGZpZWxkID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX18nICsgZmllbGQpLmlubmVyVGV4dCA9IGVudHJ5W2ZpZWxkXSA/IHllcyA6IG5vKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgcmV0dXJuIChkYXRlXHJcbiAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1hY3Rpb25zJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ2FkZGVkOmJvb2ttYXJrJzogJ2FjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAncmVtb3ZlZDpib29rbWFyayc6ICdkZWFjdGl2YXRlQm9va21hcmsnLFxyXG4gICAgICAnYWRkZWQ6bm90ZSc6ICdhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3JlbW92ZWQ6bGFzdC1ub3RlJzogJ2RlYWN0aXZhdGVOb3RlcycsXHJcbiAgICAgICdwYWdlLXN0YXRlJzogJ29uUGFnZVN0YXRlJyxcclxuICAgICAgJ25vdGVzLXN0YXRlJzogJ29uTm90ZXNTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLXBhZ2UnOiAncGFnZUFjdGlvbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGl2YXRlQm9va21hcmsoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdzY3JvbGwnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZU5vdGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnbm90ZXMnLCBmYWxzZSk7XHJcbiAgfSxcclxuICBhY3RpdmF0ZSh0eXBlLCBvbikge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS0nICsgdHlwZSk7XHJcbiAgICBpZiAob24pIHtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgYnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUFjdGlvbihlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIG9uUGFnZVN0YXRlKHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuYm9va21hcmspIHRoaXMuYWN0aXZhdGVCb29rbWFyaygpO1xyXG4gIH0sXHJcbiAgb25Ob3Rlc1N0YXRlKG5vdGVzKSB7XHJcbiAgICBpZiAobm90ZXMpIHRoaXMuYWN0aXZhdGVOb3RlcygpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbm90ZXMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndXBkYXRlZDpwYWdlbm90ZXMnOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWRkLW5vdGUnOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWNvbG9yJzogJ2NoYW5nZUNvbG9yJyxcclxuICAgICAgICAndG1ub3RlY3VzdG9taXplJzogJ3RvZ2dsZVBhbGV0dGUnLFxyXG4gICAgICAgICd0bW5vdGVkZWxldGUnOiAncmVtb3ZlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ3RvZ2dsZU5vdGUnLFxyXG4gICAgICAgICd0bW5vdGVzYXZlJzogJ3NhdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1wYWdlLW5vdGVzJzogJ3RvZ2dsZU5vdGVzJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBub3RlczogW10sXHJcbiAgbm90ZUVsczoge30sXHJcbiAgaWQ6IDAsXHJcbiAgY3VycmVudENvbG9yOiAneWVsbG93JyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICBfR0VUX0FDVElWRV9UQUIoKS50aGVuKHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsID0gdGFiLnVybDtcclxuICAgICAgX1NUT1JFLmdldCgncGFnZW5vdGVzJykudGhlbihwYWdlbm90ZXMgPT4ge1xyXG4gICAgICAgIHBhZ2Vub3RlcyA9IHBhZ2Vub3RlcyAmJiBwYWdlbm90ZXNbdXJsXSA/IHBhZ2Vub3Rlc1t1cmxdIDogbnVsbDtcclxuICAgICAgICBsZXQgbCwgaWQ7XHJcbiAgICAgICAgaWYgKHBhZ2Vub3RlcyAmJiAobCA9IHBhZ2Vub3Rlcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGVzID0gcGFnZW5vdGVzO1xyXG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgICAgICBpZCA9IHRoaXMuYWRkTm90ZShwYWdlbm90ZXNbbF0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5tYXgodGhpcy5pZCwgaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCghIXRoaXMubm90ZXMubGVuZ3RoKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlTm90ZXMobnVsbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc2F2ZShlLCBlbCkge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmdldEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICBub3RlLnRleHQgPSBlbC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XHJcbiAgICAgIG5vdGUubmFtZSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG1ub3RlX19oZWFkZXInKVswXS52YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgndXBkYXRlZDpwYWdlLW5vdGUnLCB0aGlzLnVybCwgdGhpcy5ub3Rlcyk7XHJcbiAgfSxcclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLm5vdGVzID0gW107XHJcbiAgICB0aGlzLm5vdGVFbHMgPSB7fTtcclxuICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0sXHJcblxyXG4gIGFkZE5vdGUobm90ZSkge1xyXG4gICAgbm90ZSA9IG5vdGUudHlwZSA/IG51bGwgOiBub3RlO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZXMnKTtcclxuICAgIGNvbnN0IG5vdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW5vdGUtdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcclxuICAgIGNvbnN0IGhlYWRlciA9IG5vdGVFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdO1xyXG4gICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gbm90ZS5pZDtcclxuICAgICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBub3RlLnRleHQgfHwgJyc7XHJcbiAgICAgIGhlYWRlci52YWx1ZSA9IG5vdGUubmFtZSB8fCAnJztcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIG5vdGUuY29sb3IpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlkID0gbm90ZUVsLmlkID0gKyt0aGlzLmlkO1xyXG4gICAgICB0aGlzLm5vdGVzLnB1c2goeyBpZCwgdGV4dDogJycsIGNvbG9yOiB0aGlzLmN1cnJlbnRDb2xvciB9KTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgIG5vdGVFbC5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLScgKyB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobm90ZUVsLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQXJyYXkuZnJvbShub3RlRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSlcclxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpKTtcclxuXHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdID0gbm90ZUVsO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0KHRydWUpO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9LFxyXG4gIGNoYW5nZUNvbG9yKGUsIGVsKSB7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmN1cnJlbnRDb2xvciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpO1xyXG4gICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc05hbWUgPSB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZS5yZXBsYWNlKC8tLVxcdysvLCAnLS0nICsgY29sb3IpO1xyXG4gICAgdGhpcy5nZXRCeUlkKGlkKS5jb2xvciA9IGNvbG9yO1xyXG4gICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHJlbW92ZU5vdGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgIG5vdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub3RlKTtcclxuICAgIGRlbGV0ZSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgdGhpcy5ub3Rlcy5zcGxpY2UodGhpcy5ub3Rlcy5pbmRleE9mKHRoaXMuZ2V0QnlJZChpZCkpLCAxKTtcclxuICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVTZWxlY3Qoc2hvdykge1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtcGFnZS1ub3RlcycpLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgfSxcclxuICB0b2dnbGVQYWxldHRlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIGNvbnN0IHBhbGV0dGUgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGVwYWxldHRlJylbMF07XHJcbiAgICBwYWxldHRlLmNsYXNzTGlzdC50b2dnbGUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgaWYgKCFwYWxldHRlLmNsYXNzTGlzdC5jb250YWlucygndS1kaXNwbGF5LS1ub25lJykpIHtcclxuICAgICAgbm90ZS5jbGFzc0xpc3QucmVtb3ZlKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZUVsc1tlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKV07XHJcbiAgICBub3RlLmNsYXNzTGlzdC50b2dnbGUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICBpZiAoIW5vdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0bW5vdGUtLW1pbicpKSB7XHJcbiAgICAgIHRoaXMuYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykudmFsdWUgPSAwO1xyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgIGlmIChlbC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIHRoaXMubm90ZUVsc1tpZF0uY2xhc3NMaXN0LmFkZCgndG1ub3RlLS1taW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5vdGUsIHRleHRhcmVhO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm5vdGVFbHMpIHtcclxuICAgICAgICBub3RlID0gdGhpcy5ub3RlRWxzW2lkXTtcclxuICAgICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm90ZXMuZmluZChub3RlID0+IG5vdGUuaWQgPT0gaWQpO1xyXG4gIH0sXHJcbiAgYWRqdXN0VGV4dGFyZWFIZWlnaHQobm90ZSkge1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBub3RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgMTAgKyAncHgnO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3Nob3dFbnRyeVNwZWNpZmljVGFicydcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhYl9fdGl0bGUnOiAndG9nZ2xlJyxcclxuICAgICAgICAnLnRhYl9fbmFtZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX190b2dnbGUnOiAndG9nZ2xlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGFiczoge30sXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgaWYgKCFzZXR0aW5ncyB8fCAhc2V0dGluZ3Muc2IpIHJldHVybjtcclxuICAgICAgY29uc3QgdGFiU2V0dGluZ3MgPSBzZXR0aW5ncy5zYi50YWJzO1xyXG4gICAgICBmb3IgKGxldCB0YWIgaW4gdGFiU2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLnRhYnNbdGFiXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLScgKyB0YWIpO1xyXG4gICAgICAgIGlmICh0YWJTZXR0aW5nc1t0YWJdLnVuZm9sZGVkKSB0aGlzLm9wZW4odGFiKTtcclxuICAgICAgICBlbHNlIHRoaXMuY2xvc2UodGFiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgb3Blbih0YWIpIHtcclxuICAgIHRoaXMudGFic1t0YWJdLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgfSxcclxuICBjbG9zZSh0YWIpIHtcclxuICAgIHRoaXMudGFic1t0YWJdLmNsYXNzTGlzdC5hZGQoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgfSxcclxuICB0b2dnbGUoZSwgZWwpIHtcclxuICAgIGVsID0gZWwubm9kZU5hbWUgPT09ICdIMicgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgIGNvbnN0IHRhYiA9IGlkLnNwbGl0KCctLScpLnBvcCgpO1xyXG4gICAgY29uc3QgdGFiRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB0YWJFbC5jbGFzc0xpc3QudG9nZ2xlKCd0YWItLWZvbGRlZCcpO1xyXG4gICAgdGhpcy5lbWl0KCd0b2dnbGVkOnNpZGViYXItdGFiJywgdGFiLCAhdGFiRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWItLWZvbGRlZCcpKTtcclxuICB9LFxyXG4gIHNob3dFbnRyeVNwZWNpZmljVGFicygpIHtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFiLS1lbnRyeScpKVxyXG4gICAgICAuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS10YWdzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0b3JlZDplbnRyeSc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy50YWdzX19yZW1vdmUnOiAncmVtb3ZlVGFnJyxcclxuICAgICAgICAnLmFkZC10YWcnOiAnYWRkVGFnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgIGNvbnN0IHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICB0YWdzLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVuZGVyVGFnKHRhZykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MnKTtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCB4ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nLmZyb21DaGFyQ29kZSgxMDAwNSkpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0gdS1vdmVyZmxvdy0tZWxsaXBzaXMnO1xyXG4gICAgZGVsLmNsYXNzTmFtZSA9ICd0YWdzX19yZW1vdmUnO1xyXG4gICAgZGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10YWcnLCB0YWcpO1xyXG4gICAgZWwuaW5uZXJUZXh0ID0gdGFnO1xyXG4gICAgZGVsLmFwcGVuZENoaWxkKHgpO1xyXG4gICAgZWwuYXBwZW5kQ2hpbGQoZGVsKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XHJcbiAgfSxcclxuICBhZGRUYWcoKSB7XHJcbiAgICBjb25zdCBpbnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhZycpO1xyXG4gICAgbGV0IHRhZyA9IGlucC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIXRhZykgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdhZGQ6dGFnJywgdGFnLCBfU1RPUkUuZW50cnkpO1xyXG4gICAgaW5wLnZhbHVlID0gJyc7XHJcbiAgICB0YWcuc3BsaXQoJyAnKS5mb3JFYWNoKHRhZyA9PiB0aGlzLnJlbmRlclRhZyh0YWcpKTtcclxuICB9LFxyXG4gIHJlbW92ZVRhZyhlLCBlbCkge1xyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmU6dGFnJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZycpLCBfU1RPUkUuZW50cnkpO1xyXG4gICAgZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsLnBhcmVudE5vZGUpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRoZW1lcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcudGhlbWUtb3B0JzogJ29uQ2hhbmdlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdGhlbWU6ICdkZWZhdWx0JyxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBjb25zdCB0aGVtZSA9IHNldHRpbmdzICYmIHNldHRpbmdzLnNiICYmIHNldHRpbmdzLnNiLnRoZW1lID8gc2V0dGluZ3Muc2IudGhlbWUgOiAnZGVmYXVsdCc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aGVtZS0tJHt0aGVtZX1gKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgb25DaGFuZ2UoZSwgZWwpIHtcclxuICAgIGNvbnN0IHRoZW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6c2lkZWJhci10aGVtZScsIHRoZW1lKTtcclxuICAgIHRoaXMudXBkYXRlKHRoZW1lKTtcclxuICB9LFxyXG4gIHVwZGF0ZSh0aGVtZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpLmNsYXNzTmFtZSA9IGB0ZXh0bWFya2VyLXNpZGViYXItLSR7dGhlbWV9YDtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ3NpZGViYXInLFxyXG4gIHR5cGU6ICdwcml2aWxlZ2VkJyxcclxuICBldmVudHM6IHtcclxuICAgIENPTk5FQ1RJT046IFtcclxuICAgICAgJ2NoYW5nZTpiZy1zZXR0aW5nJyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdzaWRlYmFyOmhpZ2hsaWdodCcsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1oaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOm5vdGUnLFxyXG4gICAgICAnc2lkZWJhcjppbW11dCcsXHJcbiAgICAgICdzaWRlYmFyOnNhdmUtY2hhbmdlcycsXHJcbiAgICAgICdzaWRlYmFyOnJldHJ5LXJlc3RvcmF0aW9uJyxcclxuICAgICAgJ3NpZGViYXI6dW5kbycsXHJcbiAgICAgICdzaWRlYmFyOnJlZG8nLFxyXG4gICAgICAnc2lkZWJhcjpjb3B5JyxcclxuICAgICAgJ3NpZGViYXI6c2Nyb2xsLXRvLWJvb2ttYXJrJyxcclxuICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJyxcclxuICAgICAgJ3NpZGViYXI6bmV4dC1tYXJrJyxcclxuICAgICAgJ3JlbW92ZTp0YWcnLFxyXG4gICAgICAnYWRkOnRhZycsXHJcbiAgICAgICdvcGVuOmFkZG9uLXBhZ2Uoc2IpJyxcclxuICAgICAgJ29wZW5lZDpzaWRlYmFyJyxcclxuICAgICAgJ3VwZGF0ZWQ6cGFnZS1ub3RlJyxcclxuICAgICAgJ3RvZ2dsZWQ6c2lkZWJhci10YWInLFxyXG4gICAgICAnc2lkZWJhcjpzZWxlY3RlZC1tYXJrZXInLFxyXG4gICAgICAnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBub3RlZm9udHNpemU6IDEyLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICd0bSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBNQVhfRU5UUllfTkFNRV9DSEFSUzogNzAsXHJcblxyXG4gIE1BWF9MT0dfRU5UUklFUzogMjAsXHJcblxyXG4gIE5PVEVfQ09MT1JTOiB7XHJcbiAgICBUVVJRVU9JU0U6ICcjYjllNGVjJyxcclxuICAgIEdSRUVOOiAnI2NjZmZjYycsXHJcbiAgICBZRUxMT1c6ICcjZmZmZmNjJyxcclxuICAgIE9SQU5HRTogJyNmZmVlYmInLFxyXG4gICAgUkVEOiAnI2ZmY2NjYycsXHJcbiAgICBQVVJQTEU6ICcjZWVjY2ZmJyxcclxuICAgIEJMVUU6ICcjYmJlZWZmJyxcclxuICAgIFdISVRFOiAnI2VlZWVlZSdcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnLCB7IGZyYW1lSWQ6IGxhc3RBcmcuZnJhbWVJZCB8fCAwIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuaW1wb3J0IF9ERUZBVUxUX1NUT1JBR0UgZnJvbSAnLi4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UnXHJcblxyXG5leHBvcnQgY2xhc3MgX1NUT1JFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hcmVhX3NldHRpbmdzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX3BhZ2Vub3RlcyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5wYWdlbm90ZXMgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBcmVhcyhzdG9yYWdlLnN5bmMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFyZWFzKHN5bmMpIHtcclxuICAgIGZvciAobGV0IGFyZWEgaW4gc3luYykge1xyXG4gICAgICB0aGlzWydhcmVhXycgKyBhcmVhXSA9IHN5bmNbYXJlYV0gPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVkU3luYygpIHtcclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5lbWl0KCdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnKSk7XHJcbiAgfVxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGlmICh0aGlzLmluaXRpYWxpemluZykge1xyXG4gICAgICByZXR1cm4gKG5ldyBQcm9taXNlKHIgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcih0aGlzLmdldChmaWVsZCkpLCAxMCkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9XHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X3N5bmNlZF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpO1xyXG4gIH1cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzIHx8IF9ERUZBVUxUX1NUT1JBR0Uuc2V0dGluZ3MpO1xyXG4gIH1cclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH1cclxuICBfZ2V0X3ZlcnNpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS52ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiBzeW5jZWRTdG9yYWdlLnZlcnNpb24gfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudmVyc2lvbjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9