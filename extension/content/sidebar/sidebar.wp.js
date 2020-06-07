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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PRIVPORT = exports._PORT = exports._STORE = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

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
exports._PRIVPORT = _port._PRIVPORT;
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
  el: document.getElementById('mark-actions'),
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
    var _this = this;

    if (el.hasAttribute('disabled')) return;
    var action = el.getAttribute('data-action');

    if (action === 'copy') {
      browser.permissions.contains({
        permissions: ['clipboardWrite']
      }).then(function (granted) {
        _this.emit('sidebar:' + el.getAttribute('data-action'), granted, null, {
          tab: 'active',
          frameId: _this.frame
        });
      });
    } else {
      this.emit('sidebar:' + el.getAttribute('data-action'), null, null, {
        tab: 'active',
        frameId: this.frame
      });
    }
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
  el: document.getElementById('page-actions'),
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

exports["default"] = new _utils._PRIVPORT({
  name: 'sidebar',
  type: 'privileged',
  id: Math.random().toString().slice(2, 16),
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
      n: ['shiftKey', false, true],
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
      ignoreHash: true,
      autoRetry: true
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
      loadNote: false,
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
  if (!url) return '';
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

      if (this.type === 'background') {
        return browser.tabs.sendMessage(args[0].tabId, {
          ev: event,
          wait: true
        }, {
          frameId: args[0].frameId
        });
      } else {
        return browser.runtime.sendMessage({
          ev: event,
          args: args,
          wait: true
        })["catch"](function () {});
      }
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
exports._BGPORT = exports._PRIVPORT = exports._PORT = undefined;

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
function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    var _this;

    _classCallCheck(this, _PORT);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_PORT).call(this, obj));
    browser.runtime.onMessage.addListener(_this.proxy(_assertThisInitialized(_this), _this.passMessage));

    _this.registerOneOffEvents();

    return _this;
  }

  _createClass(_PORT, [{
    key: "extend",
    value: function extend(events) {
      this.registerOneOffEvents(events.ONEOFF);
    }
  }, {
    key: "registerOneOffEvents",
    value: function registerOneOffEvents(events) {
      events || (events = this.events.ONEOFF);

      if (events) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = tabs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _tab = _step2.value;
                  browser.tabs.sendMessage(_tab.id, msg, {
                    frameId: lastArg.frameId || 0
                  })["catch"](function () {});
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _tab2 = _step3.value;
                browser.tabs.sendMessage(_tab2.id, msg)["catch"](function () {});
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
        }
      }
    }
  }]);

  return _PORT;
}(_module._MODULE);

var _PRIVPORT =
/*#__PURE__*/
function (_PORT2) {
  _inherits(_PRIVPORT, _PORT2);

  function _PRIVPORT(obj) {
    var _this2;

    _classCallCheck(this, _PRIVPORT);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_PRIVPORT).call(this, obj));
    _this2.port = null;
    _this2.portListener = null;

    _this2.connect();

    _this2.registerConnectionBasedEvents();

    window.addEventListener('pagehide', function () {
      !_this2.port || _this2.port.onMessage.removeListener(_this2.portListener);
    });
    return _this2;
  }

  _createClass(_PRIVPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var e = _step4.value;
            this.on(e, this.proxy(this, this.postMessage, e));
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
    key: "connect",
    value: function connect() {
      var port = this.port = this.port || browser.runtime.connect({
        name: "".concat(this.name, "_").concat(this.id)
      });
      var listener = this.portListener = this.proxy(this, this.passMessage);
      port.onMessage.addListener(listener);
    }
  }]);

  return _PRIVPORT;
}(_PORT);

var _BGPORT =
/*#__PURE__*/
function (_PORT3) {
  _inherits(_BGPORT, _PORT3);

  function _BGPORT(obj) {
    var _this3;

    _classCallCheck(this, _BGPORT);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_BGPORT).call(this, obj));
    _this3.ports = {};

    _this3.registerOnConnectListener();

    _this3.registerConnectionBasedEvents();

    return _this3;
  }

  _createClass(_BGPORT, [{
    key: "registerConnectionBasedEvents",
    value: function registerConnectionBasedEvents() {
      var events = this.events.CONNECTION;

      if (events) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var e = _step5.value;
            this.on(e, this.proxy(this, this.postMessage, e));
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }
  }, {
    key: "registerOnConnectListener",
    value: function registerOnConnectListener() {
      var _this4 = this;

      browser.runtime.onConnect.addListener(function (port) {
        var ports = _this4.ports;

        var listener = _this4.proxy(_this4, _this4.passMessage);

        ports[port.name] = port;
        port.onMessage.addListener(listener);
        port.onDisconnect.addListener(function () {
          port.onMessage.removeListener(listener);
          delete ports[port.name];
        });
      });
    }
  }, {
    key: "postMessage",
    value: function postMessage(e) {
      var ports = this.ports;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var msg = {
        ev: e,
        args: args
      };

      for (var p in ports) {
        if (ports.hasOwnProperty(p)) {
          ports[p].postMessage(msg);
        }
      }
    }
  }]);

  return _BGPORT;
}(_PORT);

exports._PORT = _PORT;
exports._PRIVPORT = _PRIVPORT;
exports._BGPORT = _BGPORT;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFyay1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvbWV0YS1pbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy9wYWdlLWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvcGFnZS1ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NpZGViYXIvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9tb2R1bGVzL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaWRlYmFyL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2lkZWJhci9zYXNzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9kZWZhdWx0LXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9nbG9iYWwtc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kb21tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXJyb3ItdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0QWN0aXZlVGFiLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2hhc2hsZXNzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2wxMG4uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3RvcmUuanMiXSwibmFtZXMiOlsiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfU1RPUkUiLCJfUE9SVCIsIl9QUklWUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIl9IQVNITEVTUyIsImV2ZW50cyIsIkVOViIsImVudiIsImVudHJ5IiwibG9ja2VkIiwidXBkYXRlRW50cnkiLCJpc0FyciIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRFbnRyeSIsInB1c2giLCJlbWl0IiwidXBkYXRlRW50cnlPbkZvdW5kIiwicmVzdW1lIiwiX2dldF9tb2RlIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJhcmVhX3NldHRpbmdzIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiYWRkb24iLCJhY3RpdmUiLCJfZ2V0X2F1dG9zYXZlIiwiaGlzdG9yeSIsImF1dG9zYXZlIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3BhZ2Vub3RlcyIsInBhZ2Vub3RlcyIsImF1dG9pbml0IiwidGFiIiwicG93ZXIiLCJvbiIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvblN0YXJ0IiwibW9kZSIsInRvZ2dsZSIsInNpZGViYXIiLCJlbCIsInJlbmRlciIsImhlYWRlciIsInVwZGF0ZU5hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsInRpdGxlIiwiRE9NIiwiY2xpY2siLCJyZXRyeUJ0blNob3duIiwic2F2ZUJ0biIsInJldHJ5QnRuIiwidG9nZ2xlU2F2ZSIsInNhdmUiLCJyZXRyeVJlc3RvcmF0aW9uIiwiZGVhY3RpdmF0ZVJldHJ5IiwibWV0aCIsImFjdGl2YXRlU2F2ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlYWN0aXZhdGVTYXZlIiwiYWN0aXZhdGVSZXRyeSIsInRvZ2dsZUltbXV0IiwiZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsInVwZGF0ZUltbXV0IiwiaW1tdXQiLCJvblBhZ2VTdGF0ZSIsInN0YXRlIiwicmV0cnlBY3RpdmUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiZnJhbWUiLCJidXR0b25zIiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFya0FjdGlvbiIsImhhc0F0dHJpYnV0ZSIsImFjdGlvbiIsInBlcm1pc3Npb25zIiwiZ3JhbnRlZCIsImZyYW1lSWQiLCJhY3RpdmF0ZSIsIm1hcmtJbmZvcyIsInNlbmRlciIsImZvckVhY2giLCJidG4iLCJ0eXBlIiwiYm9va21hcmsiLCJkZWFjdGl2YXRlIiwiY2hhbmdlIiwiYXV0b21hcmtFbmFibGVkIiwic3luYyIsIm1pc2MiLCJtYXJrbWV0aG9kIiwibG9jYWwiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJmcmFnUmlnaHQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZnJhZ0xlZnQiLCJzIiwiTWF0aCIsImNlaWwiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY291bnQiLCJtIiwiYm94IiwiaW5wdXQiLCJleGFtcGxlVGV4dCIsImJ1dHRvbiIsImNvbG9yIiwiY2JCb3giLCJjYiIsImNiTGFiZWwiLCJjYlNwYW4iLCJjcmVhdGVFbGVtZW50IiwiZXh0cmFjdEJnQ29sb3IiLCJzdHlsZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZENoaWxkIiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic3R5bGVzIiwic3BsaXQiLCJsIiwiaSIsImluY2x1ZGVzIiwic2VsZWN0IiwiYXBwbHlDb2xvciIsInRvZ2dsZU1hcmtlckJ1dHRvbnMiLCJzaG93Iiwic2VsZWN0aW9uIiwibWFya3MiLCJtYXJrSURzIiwiY3VycmVudCIsInNldEZpbHRlcnMiLCJ0b2dnbGVNYXAiLCJhIiwiYiIsImMiLCJzZXRNYXJrcyIsInJlbmRlclNWR0ZpbHRlcnMiLCJyZW5kZXJMaXN0IiwiY29uY2F0IiwibWFwIiwiZmluZCIsIm1hcmsiLCJzZXRNYXJrSURzIiwiaWRzIiwiYm9keSIsInRtcGwiLCJjb2xvcnMiLCJfU0VUVElOR1MiLCJOT1RFX0NPTE9SUyIsInRvTG93ZXJDYXNlIiwiY29udmVydEhleCIsInN1YnN0ciIsImZpbHRlciIsImNsb25lTm9kZSIsImhleCIsIk51bWJlciIsIm1hcmtUbXBsIiwiZnJhZ21lbnQiLCJtYXJrc0NvbnRhaW5lciIsIm1hcmtDb250YWluZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImluZGV4T2YiLCJoYXNOb3RlIiwibm90ZSIsIm5vdGVDb2xvciIsIm5vdGVUZXh0Iiwibm90ZUJ0biIsIm5vdGVOb2RlIiwiYm9yZGVyQ29sb3IiLCJuYXYiLCJkaXIiLCJhY3RpdmF0ZUxpc3RJdGVtIiwiY3VycmVudEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiZm9sZExpc3QiLCJ2YWwiLCJ0b2dnbGVTZXR0aW5ncyIsInRvZ2dsZU5vdGUiLCJtYXJrRWwiLCJ5ZXMiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm5vIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiRGF0ZSIsImZpcnN0IiwidG9Mb2NhbGVTdHJpbmciLCJsYXN0IiwiZmllbGQiLCJkYXRlIiwicmVwbGFjZSIsInAiLCJxIiwiYWN0aXZhdGVCb29rbWFyayIsImRlYWN0aXZhdGVCb29rbWFyayIsImFjdGl2YXRlTm90ZXMiLCJkZWFjdGl2YXRlTm90ZXMiLCJwYWdlQWN0aW9uIiwib25Ob3Rlc1N0YXRlIiwibm90ZXMiLCJub3RlRWxzIiwiY3VycmVudENvbG9yIiwidXJsIiwiYWRkTm90ZSIsIm1heCIsInRvZ2dsZVNlbGVjdCIsInRvZ2dsZU5vdGVzIiwiZ2V0QnlJZCIsInByZXZpb3VzU2libGluZyIsImNvbnRhaW5lciIsIm5vdGVFbCIsInRleHRhcmVhIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNoYW5nZUNvbG9yIiwicmVtb3ZlTm90ZSIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwidG9nZ2xlUGFsZXR0ZSIsInBhbGV0dGUiLCJhZGp1c3RUZXh0YXJlYUhlaWdodCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJzYiIsInRhYlNldHRpbmdzIiwidW5mb2xkZWQiLCJvcGVuIiwiY2xvc2UiLCJub2RlTmFtZSIsInBvcCIsInRhYkVsIiwic2hvd0VudHJ5U3BlY2lmaWNUYWJzIiwidGFncyIsInRhZyIsInJlbmRlclRhZyIsImRlbCIsIngiLCJhZGRUYWciLCJpbnAiLCJ0cmltIiwicmVtb3ZlVGFnIiwidGhlbWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJDT05ORUNUSU9OIiwidmVyc2lvbiIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInNob3J0Y3V0cyIsInoiLCJ5IiwiZCIsInciLCJuIiwiYXJyb3d1cCIsImFycm93ZG93biIsImNtIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJuYW1pbmciLCJkb3dubG9hZCIsImNvcHkiLCJzYXZlTm90ZSIsInNvcnRlZCIsInZpZXciLCJwcCIsImlnbm9yZUhhc2giLCJhdXRvUmV0cnkiLCJhdXRvY3MiLCJpZnJhbWVzIiwiYm1pY29uIiwibm90ZWljb24iLCJub3Rlb25jbGljayIsIm5vdGV0cmFuc3AiLCJub3RlcGxhaW52aWV3Iiwibm90ZWZvbnRzaXplIiwib3ZlcndyaXRlIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJsb2FkTm90ZSIsImN1c3RvbVNlYXJjaCIsInRtdWlwb3MiLCJwcm9ncmVzc2JhciIsInRiYnBvd2VyIiwibWV0YSIsImFjdGlvbnMiLCJsaW5rcyIsInRoZW1lcyIsImVudHJpZXMiLCJNQVhfRU5UUllfTkFNRV9DSEFSUyIsIk1BWF9MT0dfRU5UUklFUyIsIlRVUlFVT0lTRSIsIkdSRUVOIiwiWUVMTE9XIiwiT1JBTkdFIiwiUkVEIiwiUFVSUExFIiwiQkxVRSIsIldISVRFIiwic3JjIiwidGFyZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Iiwib2JqIiwiX2JvdW5kIiwiX2V4dHJhQm91bmQiLCJhZGRMaXN0ZW5lcnNNYW51YWxseSIsImFkZExpc3RlbmVycyIsImF1dG9QYXVzZSIsInNldEF1dG9QYXVzZSIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9leHRyYSIsInNldCIsIndpbmRvdyIsImVycm9yIiwiZmlsZSIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxvY2F0aW9uIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsInRpbWUiLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGEiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJ0YWJJZCIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsIm8iLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwicmVnaXN0ZXJPbmVPZmZFdmVudHMiLCJPTkVPRkYiLCJyZXEiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwicG9ydCIsInBvcnRMaXN0ZW5lciIsImNvbm5lY3QiLCJyZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsInJlbW92ZUxpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJsaXN0ZW5lciIsIl9CR1BPUlQiLCJwb3J0cyIsInJlZ2lzdGVyT25Db25uZWN0TGlzdGVuZXIiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsIl9ERUZBVUxUX1NUT1JBR0UiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYXJlYSIsImluaXQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzeW5jZWRTdG9yYWdlIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImxvZ3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVNBLEssR0FBQUEsVztRQUFPQyxlLEdBQUFBLDZCO1FBQWlCQyxPLEdBQUFBLG1CO1FBQVNDLE8sR0FBQUEsZTtRQUFTQyxVLEdBQUFBLHFCO1FBQVlDLE0sR0FBQUEsYTtRQUFRQyxLLEdBQUFBLFc7UUFBT0MsUyxHQUFBQSxlO1FBQVdDLEssR0FBQUEsaUI7UUFBT0MsYSxHQUFBQSx5QjtRQUFlQyxTLEdBQUFBLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYL0c7O3FCQUVlLElBQUlMLGFBQUosQ0FBVztBQUN4Qk0sUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixlQURiO0FBRUgscUJBQWUsYUFGWjtBQUdILHFCQUFlLG9CQUhaO0FBSUgsNkJBQXVCLGFBSnBCO0FBS0gsK0JBQXlCO0FBTHRCO0FBREMsR0FEZ0I7QUFXeEJDLEtBQUcsRUFBRSxTQVhtQjtBQVl4QkMsT0FBSyxFQUFFLElBWmlCO0FBYXhCQyxRQUFNLEVBQUUsS0FiZ0I7QUFleEJDLGFBZndCLHVCQWVaRixLQWZZLEVBZUw7QUFDakIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTUcsS0FBSyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFkO0FBQ0EsVUFBTU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLTixLQUE1QjtBQUVBLFdBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLElBQWVFLEtBQWYsSUFBd0JILEtBQUssQ0FBQ0MsTUFBNUM7O0FBRUEsVUFBSSxDQUFDLEtBQUtBLE1BQU4sSUFBZ0JFLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNELE9BRkQsTUFHSyxJQUFJLEtBQUtDLE1BQUwsSUFBZSxDQUFDRSxLQUFwQixFQUEyQjtBQUM5QixZQUFJLEtBQUtILEtBQUwsSUFBY0ksS0FBSyxDQUFDQyxPQUFOLENBQWMsS0FBS0wsS0FBbkIsQ0FBbEIsRUFBNkMsS0FBS0EsS0FBTCxDQUFXTyxJQUFYLENBQWdCUCxLQUFoQixFQUE3QyxLQUNLLEtBQUtBLEtBQUwsR0FBYSxDQUFDQSxLQUFELENBQWI7QUFDTjs7QUFFRCxVQUFJTSxZQUFKLEVBQWtCLEtBQUtFLElBQUwsQ0FBVSxzQkFBVixFQUFrQyxLQUFLUixLQUF2QyxFQUFsQixLQUNLLEtBQUtRLElBQUwsQ0FBVSxjQUFWLEVBQTBCLEtBQUtSLEtBQS9CO0FBQ047QUFDRixHQWpDdUI7QUFrQ3hCUyxvQkFsQ3dCLDhCQWtDTFQsS0FsQ0ssRUFrQ0U7QUFDeEIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBS0UsV0FBTCxDQUFpQkYsS0FBakI7O0FBQ0EsVUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsS0FBZCxDQUFMLEVBQTJCO0FBQ3pCLGFBQUtRLElBQUwsQ0FBVSx3QkFBVixFQUFvQ1IsS0FBcEM7QUFDRDtBQUNGO0FBQ0YsR0F6Q3VCO0FBMkN4QlUsUUEzQ3dCLG9CQTJDZjtBQUNQLFNBQUtWLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLTyxJQUFMLENBQVUsZUFBVjtBQUNELEdBL0N1QjtBQWtEeEJHLFdBbER3Qix1QkFrRFo7QUFDVixXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDSSxRQUFyQixJQUFpQ0osT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxLQUFqQixDQUF1QkMsTUFBNUQsRUFBb0UsT0FBTyxJQUFQO0FBQ3BFLGFBQU8sS0FBUDtBQUNELEtBSE0sQ0FBUDtBQUlELEdBdkR1QjtBQXdEeEJDLGVBeER3QiwyQkF3RFI7QUFDZCxXQUFPUixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPLEVBQUk7QUFDL0QsVUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDSSxRQUF6QixFQUFtQyxPQUFPLEtBQVA7QUFDbkMsYUFBT0osT0FBTyxDQUFDSSxRQUFSLENBQWlCSSxPQUFqQixDQUF5QkMsUUFBaEM7QUFDRCxLQUhNLENBQVA7QUFJRCxHQTdEdUI7QUE4RHhCQyxlQTlEd0IsMkJBOERSO0FBQ2QsV0FBT1gsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0ksUUFBWjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQWhFdUI7QUFpRXhCTyxjQWpFd0IsMEJBaUVUO0FBQ2IsV0FBT1osT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQlEsT0FBckI7QUFBQSxLQUF0RCxDQUFQO0FBQ0QsR0FuRXVCO0FBb0V4QkMsZ0JBcEV3Qiw0QkFvRVA7QUFDZixXQUFPZCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsS0FBS0MsYUFBckIsRUFBb0NDLEdBQXBDLEdBQTBDQyxJQUExQyxDQUErQyxVQUFBSCxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDYyxTQUFSLElBQXFCLElBQXpCO0FBQUEsS0FBdEQsQ0FBUDtBQUNEO0FBdEV1QixDQUFYLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUVBLElBQUl0QyxjQUFKLENBQVk7QUFDVlEsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHFCQUFlLFNBRFo7QUFFSCx1QkFBaUIsT0FGZDtBQUdILHNCQUFnQixRQUhiO0FBSUgsOEJBQXdCLFFBSnJCO0FBS0gsZ0NBQTBCO0FBTHZCO0FBREMsR0FERTtBQVdWOEIsVUFYVSxzQkFXQztBQUNULFNBQUtwQixJQUFMLENBQVUsZ0JBQVYsRUFBNEI7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQTVCO0FBQ0QsR0FiUztBQWVWQyxPQWZVLGlCQWVKQyxFQWZJLEVBZUE7QUFDUixRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBcEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FBaEI7O0FBRUEsUUFBSUgsRUFBSixFQUFRO0FBQ05DLGlCQUFXLENBQUNJLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGlCQUExQjtBQUNBRixhQUFPLENBQUNDLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGlCQUF6QjtBQUNELEtBSEQsTUFHTztBQUNMTixpQkFBVyxDQUFDSSxTQUFaLENBQXNCRSxNQUF0QixDQUE2QixpQkFBN0I7QUFDQUgsYUFBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBdEI7QUFDRDtBQUNGLEdBMUJTO0FBMkJWRSxTQTNCVSxxQkEyQkE7QUFBQTs7QUFDUmhELHVCQUFPd0IsR0FBUCxDQUFXLE1BQVgsRUFBbUJDLElBQW5CLENBQXdCLFVBQUF3QixJQUFJO0FBQUEsYUFBSSxLQUFJLENBQUNWLEtBQUwsQ0FBV1UsSUFBWCxDQUFKO0FBQUEsS0FBNUI7QUFDRCxHQTdCUztBQThCVkMsUUE5QlUsa0JBOEJIekMsS0E5QkcsRUE4Qkk7QUFDWixRQUFNMEMsT0FBTyxHQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQWhCOztBQUNBLFFBQUlsQyxLQUFLLElBQUlULG1CQUFPVSxNQUFwQixFQUE0QjtBQUMxQnlDLGFBQU8sQ0FBQ04sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsNEJBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xLLGFBQU8sQ0FBQ04sU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsNEJBQXpCO0FBQ0Q7QUFDRjtBQXJDUyxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUNBOzs7Ozs7QUFFQSxJQUFJaEQsaUJBQUosQ0FBZTtBQUNicUQsSUFBRSxFQUFFVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQixRQURiO0FBRUgsOEJBQXdCO0FBRnJCO0FBREMsR0FGSztBQVNiOEMsUUFUYSxrQkFTTjVDLEtBVE0sRUFTQztBQUNaLFFBQU02QyxNQUFNLEdBQUcsS0FBS0YsRUFBcEI7QUFFQSxRQUFJLENBQUMzQyxLQUFMLEVBQVk2QyxNQUFNLENBQUNULFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGlCQUFyQixFQUFaLEtBQ0ssSUFBSWpDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQUosRUFBMEI7QUFFL0I2QyxVQUFNLENBQUNULFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGlCQUF4QjtBQUNBLFNBQUtRLFVBQUwsQ0FBZ0I5QyxLQUFLLENBQUMrQyxJQUF0QjtBQUNELEdBakJZO0FBbUJiRCxZQW5CYSxzQkFtQkZDLElBbkJFLEVBbUJJO0FBQ2YsUUFBTUosRUFBRSxHQUFHLEtBQUtBLEVBQUwsQ0FBUUssc0JBQVIsQ0FBK0IsY0FBL0IsRUFBK0MsQ0FBL0MsQ0FBWDtBQUNBTCxNQUFFLENBQUNNLFNBQUgsR0FBZUYsSUFBZjtBQUNBSixNQUFFLENBQUNPLEtBQUgsR0FBV0gsSUFBWDtBQUNEO0FBdkJZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXpELGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gscUJBQWUsWUFEWjtBQUVILDBCQUFvQixZQUZqQjtBQUdILHFDQUErQixZQUg1QjtBQUlILCtCQUF5QixnQkFKdEI7QUFLSCxxQkFBZSxnQkFMWjtBQU1ILHlCQUFtQixjQU5oQjtBQU9ILDhCQUF3QixlQVByQjtBQVFILHVCQUFpQixpQkFSZDtBQVNILHNCQUFnQixhQVRiO0FBVUgsb0JBQWMsYUFWWDtBQVdILGdDQUEwQjtBQVh2QixLQURDO0FBY05xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsK0JBQXVCLGtCQURsQjtBQUVMLDhCQUFzQixNQUZqQjtBQUdMLG1CQUFXO0FBSE47QUFESjtBQWRDLEdBRks7QUF5QmJDLGVBQWEsRUFBRSxLQXpCRjtBQTBCYkMsU0FBTyxFQUFFckIsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQTFCSTtBQTJCYnFCLFVBQVEsRUFBRXRCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0EzQkc7QUE2QmJOLFVBN0JhLHNCQTZCRjtBQUNULFNBQUs0QixVQUFMO0FBQ0QsR0EvQlk7QUFpQ2JDLE1BakNhLGtCQWlDTjtBQUNMLFNBQUtqRCxJQUFMLENBQVUsc0JBQVYsRUFBa0M7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQWxDO0FBQ0QsR0FuQ1k7QUFvQ2I2QixrQkFwQ2EsOEJBb0NNO0FBQ2pCLFNBQUtsRCxJQUFMLENBQVUsMkJBQVYsRUFBdUM7QUFBRXFCLFNBQUcsRUFBRTtBQUFQLEtBQXZDO0FBQ0EsU0FBSzhCLGVBQUw7QUFDRCxHQXZDWTtBQXdDYkgsWUF4Q2Esd0JBd0NBO0FBQUE7O0FBQ1hqRSx1QkFBT3dCLEdBQVAsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBTSxRQUFRLEVBQUk7QUFDdEMsVUFBTXNDLElBQUksR0FBR3RDLFFBQVEsR0FBRyxLQUFILEdBQVcsUUFBaEM7O0FBQ0EsV0FBSSxDQUFDZ0MsT0FBTCxDQUFhbEIsU0FBYixDQUF1QndCLElBQXZCLEVBQTZCLGlCQUE3QjtBQUNELEtBSEQ7QUFJRCxHQTdDWTtBQThDYkMsY0E5Q2EsMEJBOENXO0FBQUEsUUFBWDlCLEVBQVcsdUVBQU4sSUFBTTtBQUN0QixRQUFJQSxFQUFKLEVBQVEsS0FBS3VCLE9BQUwsQ0FBYVEsZUFBYixDQUE2QixVQUE3QixFQUFSLEtBQ0ssS0FBS1IsT0FBTCxDQUFhUyxZQUFiLENBQTBCLFVBQTFCLEVBQXNDLElBQXRDO0FBQ04sR0FqRFk7QUFrRGJDLGdCQWxEYSw0QkFrREk7QUFDZixTQUFLSCxZQUFMLENBQWtCLEtBQWxCO0FBQ0QsR0FwRFk7QUFxRGJJLGVBckRhLDJCQXFERztBQUNkLFFBQUksQ0FBQyxLQUFLWixhQUFWLEVBQXlCO0FBQ3ZCLFdBQUtFLFFBQUwsQ0FBY25CLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBLFdBQUtlLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGLEdBMURZO0FBMkRiTSxpQkEzRGEsNkJBMkRLO0FBQ2hCLFFBQUksS0FBS04sYUFBVCxFQUF3QjtBQUN0QixXQUFLRSxRQUFMLENBQWNuQixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixpQkFBNUI7QUFDQSxXQUFLZ0IsYUFBTCxHQUFxQixLQUFyQjtBQUNEO0FBQ0YsR0FoRVk7QUFpRWJhLGFBakVhLHVCQWlFREMsQ0FqRUMsRUFpRUV4QixFQWpFRixFQWlFTTtBQUNqQkEsTUFBRSxHQUFHQSxFQUFFLENBQUNQLFNBQUgsQ0FBYWdDLFFBQWIsQ0FBc0IsZUFBdEIsSUFBeUN6QixFQUF6QyxHQUE4Q0EsRUFBRSxDQUFDMEIsVUFBdEQ7QUFDQTFCLE1BQUUsQ0FBQ1AsU0FBSCxDQUFhSyxNQUFiLENBQW9CLFFBQXBCO0FBQ0EsU0FBS2pDLElBQUwsQ0FBVSxlQUFWLEVBQTJCbUMsRUFBRSxDQUFDUCxTQUFILENBQWFnQyxRQUFiLENBQXNCLFFBQXRCLENBQTNCLEVBQTREO0FBQUV2QyxTQUFHLEVBQUU7QUFBUCxLQUE1RDtBQUNELEdBckVZO0FBc0VieUMsYUF0RWEsdUJBc0VEdEUsS0F0RUMsRUFzRU07QUFDakIsUUFBSUEsS0FBSixFQUFXO0FBQ1QsVUFBTTRELElBQUksR0FBRzVELEtBQUssQ0FBQ3VFLEtBQU4sR0FBYyxLQUFkLEdBQXNCLFFBQW5DO0FBQ0F0QyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDRSxTQUE5QyxDQUF3RHdCLElBQXhELEVBQThELFFBQTlEO0FBQ0EzQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLFNBQXRDLENBQWdERSxNQUFoRCxDQUF1RCxpQkFBdkQ7QUFDRCxLQUpELE1BSU87QUFDTEwsY0FBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxTQUF0QyxDQUFnREMsR0FBaEQsQ0FBb0QsaUJBQXBEO0FBQ0Q7QUFDRixHQTlFWTtBQStFYm1DLGFBL0VhLHVCQStFREMsS0EvRUMsRUErRU07QUFDakIsUUFBSUEsS0FBSyxDQUFDQyxXQUFWLEVBQXVCLEtBQUtULGFBQUw7QUFDeEI7QUFqRlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVBLElBQUkzRSxpQkFBSixDQUFlO0FBQ2JxRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTnNELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxpQkFBUyxNQURKO0FBRUwsdUJBQWUsTUFGVjtBQUdMLHVCQUFlO0FBSFY7QUFESjtBQURDLEdBRks7QUFZYnVCLE1BWmEsZ0JBWVJSLENBWlEsRUFZTHhCLEVBWkssRUFZRDtBQUNWQSxNQUFFLEdBQUdBLEVBQUUsQ0FBQ1AsU0FBSCxDQUFhZ0MsUUFBYixDQUFzQixNQUF0QixJQUFnQ3pCLEVBQWhDLEdBQXFDQSxFQUFFLENBQUMwQixVQUE3QztBQUNBLFNBQUs3RCxJQUFMLENBQVUscUJBQVYsRUFBaUNtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQWpDO0FBQ0Q7QUFmWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7Ozs7OztBQUVBLElBQUl0RixpQkFBSixDQUFlO0FBQ2JxRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsc0JBQWdCLFVBRGI7QUFFSCx3QkFBa0I7QUFGZixLQURDO0FBS05xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsZ0NBQXdCO0FBRG5CO0FBREo7QUFMQyxHQUZLO0FBYWJ5QixPQUFLLEVBQUUsQ0FiTTtBQWNiQyxTQUFPLEVBQUUsRUFkSTtBQWdCYmxELFVBaEJhLHNCQWdCRjtBQUNULFNBQUtrRCxPQUFMLEdBQWUxRSxLQUFLLENBQUMyRSxJQUFOLENBQVcsS0FBS3BDLEVBQUwsQ0FBUXFDLG9CQUFSLENBQTZCLFFBQTdCLENBQVgsQ0FBZjtBQUNELEdBbEJZO0FBbUJiQyxZQW5CYSxzQkFtQkZkLENBbkJFLEVBbUJDeEIsRUFuQkQsRUFtQks7QUFBQTs7QUFDaEIsUUFBSUEsRUFBRSxDQUFDdUMsWUFBSCxDQUFnQixVQUFoQixDQUFKLEVBQWlDO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR3hDLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBZjs7QUFDQSxRQUFJTyxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQnZFLGFBQU8sQ0FBQ3dFLFdBQVIsQ0FBb0JoQixRQUFwQixDQUE2QjtBQUFFZ0IsbUJBQVcsRUFBRSxDQUFDLGdCQUFEO0FBQWYsT0FBN0IsRUFBa0VwRSxJQUFsRSxDQUF1RSxVQUFBcUUsT0FBTyxFQUFJO0FBQ2hGLGFBQUksQ0FBQzdFLElBQUwsQ0FBVSxhQUFhbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixhQUFoQixDQUF2QixFQUF1RFMsT0FBdkQsRUFBZ0UsSUFBaEUsRUFBc0U7QUFBRXhELGFBQUcsRUFBRSxRQUFQO0FBQWlCeUQsaUJBQU8sRUFBRSxLQUFJLENBQUNUO0FBQS9CLFNBQXRFO0FBQ0QsT0FGRDtBQUdELEtBSkQsTUFJTztBQUNMLFdBQUtyRSxJQUFMLENBQVUsYUFBYW1DLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBdkIsRUFBdUQsSUFBdkQsRUFBNkQsSUFBN0QsRUFBbUU7QUFBRS9DLFdBQUcsRUFBRSxRQUFQO0FBQWlCeUQsZUFBTyxFQUFFLEtBQUtUO0FBQS9CLE9BQW5FO0FBQ0Q7QUFDRixHQTdCWTtBQThCYlUsVUE5QmEsb0JBOEJKQyxTQTlCSSxFQThCT0MsTUE5QlAsRUE4QmU7QUFDMUIsU0FBS1osS0FBTCxHQUFhWSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0gsT0FBakIsR0FBMkJHLE1BQU0sQ0FBQ0gsT0FBbEMsR0FBNEMsQ0FBekQ7QUFFQSxTQUFLUixPQUFMLENBQWFZLE9BQWIsQ0FBcUIsVUFBQUMsR0FBRyxFQUFJO0FBQzFCLFVBQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDZixZQUFKLENBQWlCLGFBQWpCLENBQVg7O0FBQ0EsVUFDRWdCLElBQUksS0FBSyxNQUFULElBQ0FBLElBQUksS0FBSyxrQkFEVCxJQUVDLE9BQU9KLFNBQVMsQ0FBQ0ksSUFBRCxDQUFoQixLQUEyQixTQUEzQixJQUF3QyxDQUFDSixTQUFTLENBQUNJLElBQUQsQ0FGbkQsSUFHQ0EsSUFBSSxLQUFLLGlCQUFULElBQThCSixTQUFTLENBQUNLLFFBSjNDLEVBS0U7QUFDQUYsV0FBRyxDQUFDN0IsZUFBSixDQUFvQixVQUFwQjtBQUNBNkIsV0FBRyxDQUFDdEIsVUFBSixDQUFlakMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDRDtBQUNGLEtBWEQ7QUFZRCxHQTdDWTtBQThDYndELFlBOUNhLHdCQThDQTtBQUNYLFNBQUtoQixPQUFMLENBQWFZLE9BQWIsQ0FBcUIsVUFBQUMsR0FBRyxFQUFJO0FBQzFCQSxTQUFHLENBQUM1QixZQUFKLENBQWlCLFVBQWpCLEVBQTZCLElBQTdCO0FBQ0E0QixTQUFHLENBQUN0QixVQUFKLENBQWVqQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixVQUE3QjtBQUNELEtBSEQ7QUFJRDtBQW5EWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsSUFBSS9DLGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxxQkFBZSxRQURaO0FBRUgsMEJBQW9CLFFBRmpCO0FBR0gscUNBQStCLFFBSDVCO0FBSUgsMkJBQXFCLHFCQUpsQjtBQUtILG9CQUFjO0FBTFgsS0FEQztBQVFOcUQsT0FBRyxFQUFFO0FBQ0g0QyxZQUFNLEVBQUU7QUFDTiwwQkFBa0IsUUFEWjtBQUVOLHVCQUFlO0FBRlQsT0FETDtBQUtIM0MsV0FBSyxFQUFFO0FBQ0wsMEJBQWtCO0FBRGI7QUFMSjtBQVJDLEdBRks7QUFxQmJ5QixPQUFLLEVBQUUsQ0FyQk07QUFzQmJtQixpQkFBZSxFQUFFLEtBdEJKO0FBd0JicEUsVUF4QmEsc0JBd0JGO0FBQ1QsU0FBS2dCLE1BQUw7QUFDRCxHQTFCWTtBQTJCYkEsUUEzQmEsb0JBMkJKO0FBQUE7O0FBQ1BoQyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixJQUFoQixDQUFxQmxGLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBSCxPQUFPLEVBQUk7QUFDekMsVUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUNJLFFBQW5CLEtBQWdDLENBQUNKLE9BQU8sQ0FBQ29GLElBQVQsSUFBaUJwRixPQUFPLENBQUNvRixJQUFSLENBQWFoRixRQUE5RCxDQUFKLEVBQTZFO0FBQzNFLGFBQUksQ0FBQytFLGVBQUwsR0FBdUJuRixPQUFPLENBQUNJLFFBQVIsQ0FBaUJpRixJQUFqQixDQUFzQkMsVUFBdEIsS0FBcUMsTUFBNUQ7QUFDQSxlQUFPdEYsT0FBTyxDQUFDSSxRQUFSLENBQWlCUSxPQUF4QjtBQUNEOztBQUNELGFBQU9iLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVGLEtBQWhCLENBQXNCckYsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFILE9BQU8sRUFBSTtBQUNqRCxZQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksUUFBbkIsSUFBK0JKLE9BQU8sQ0FBQ29GLElBQXZDLElBQStDLENBQUNwRixPQUFPLENBQUNvRixJQUFSLENBQWFoRixRQUFqRSxFQUEyRTtBQUN6RSxlQUFJLENBQUMrRSxlQUFMLEdBQXVCbkYsT0FBTyxDQUFDSSxRQUFSLENBQWlCaUYsSUFBakIsQ0FBc0JDLFVBQXRCLEtBQXFDLE1BQTVEO0FBQ0EsaUJBQU90RixPQUFPLENBQUNJLFFBQVIsQ0FBaUJRLE9BQXhCO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0QsS0FaRCxFQWFDVCxJQWJELENBYU0sVUFBQVMsT0FBTyxFQUFJO0FBQ2YsVUFBSSxDQUFDQSxPQUFMLEVBQWMsT0FBTyxLQUFQO0FBQ2QsVUFBTTRFLGFBQWEsR0FBR3BFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix5QkFBeEIsQ0FBdEI7QUFDQSxVQUFNb0UsY0FBYyxHQUFHckUsUUFBUSxDQUFDQyxjQUFULENBQXdCLDBCQUF4QixDQUF2QjtBQUNBLFVBQU1xRSxTQUFTLEdBQUd0RSxRQUFRLENBQUN1RSxzQkFBVCxFQUFsQjtBQUNBLFVBQU1DLFFBQVEsR0FBR3hFLFFBQVEsQ0FBQ3VFLHNCQUFULEVBQWpCO0FBQ0EsVUFBTUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsTUFBTSxDQUFDQyxJQUFQLENBQVlyRixPQUFaLEVBQXFCc0YsTUFBckIsR0FBOEIsQ0FBeEMsQ0FBVjtBQUNBLFVBQUlDLEtBQUssR0FBRyxDQUFaO0FBQUEsVUFBZUMsQ0FBZjtBQUFBLFVBQWtCQyxHQUFsQjtBQUFBLFVBQXVCQyxLQUF2QjtBQUFBLFVBQThCQyxXQUE5QjtBQUFBLFVBQTJDQyxNQUEzQztBQUFBLFVBQW1EQyxLQUFuRDtBQUFBLFVBQTBEQyxLQUExRDtBQUFBLFVBQWlFQyxFQUFqRTtBQUFBLFVBQXFFQyxPQUFyRTtBQUFBLFVBQThFQyxNQUE5RTtBQUVBckIsbUJBQWEsQ0FBQ3BELFNBQWQsR0FBMEIsRUFBMUI7QUFDQXFELG9CQUFjLENBQUNyRCxTQUFmLEdBQTJCLEVBQTNCOztBQUVBLFdBQUtnRSxDQUFMLElBQVV4RixPQUFWLEVBQW1CO0FBQ2pCdUYsYUFBSztBQUVMRSxXQUFHLEdBQUdqRixRQUFRLENBQUMwRixhQUFULENBQXVCLEtBQXZCLENBQU47QUFDQVIsYUFBSyxHQUFHbEYsUUFBUSxDQUFDMEYsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FQLG1CQUFXLEdBQUduRixRQUFRLENBQUMwRixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQU4sY0FBTSxHQUFHcEYsUUFBUSxDQUFDMEYsYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FKLGFBQUssR0FBR3RGLFFBQVEsQ0FBQzBGLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUjtBQUNBSCxVQUFFLEdBQUd2RixRQUFRLENBQUMwRixhQUFULENBQXVCLE9BQXZCLENBQUw7QUFDQUYsZUFBTyxHQUFHeEYsUUFBUSxDQUFDMEYsYUFBVCxDQUF1QixPQUF2QixDQUFWO0FBQ0FELGNBQU0sR0FBR3pGLFFBQVEsQ0FBQzBGLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVDtBQUNBTCxhQUFLLEdBQUcsS0FBSSxDQUFDTSxjQUFMLENBQW9CbkcsT0FBTyxDQUFDd0YsQ0FBRCxDQUFQLENBQVdZLEtBQS9CLENBQVI7QUFFQVgsV0FBRyxDQUFDWSxTQUFKLEdBQWdCLGFBQWhCO0FBQ0FYLGFBQUssQ0FBQ1csU0FBTixHQUFrQixlQUFsQjtBQUNBWCxhQUFLLENBQUNZLEVBQU4sR0FBVyxZQUFZZCxDQUF2QjtBQUNBRSxhQUFLLENBQUNwRSxJQUFOLEdBQWFrRSxDQUFiO0FBQ0FFLGFBQUssQ0FBQ3ZCLElBQU4sR0FBYSxPQUFiO0FBQ0F1QixhQUFLLENBQUNhLEtBQU4sR0FBY1YsS0FBZDtBQUNBRixtQkFBVyxDQUFDVSxTQUFaLEdBQXdCLGNBQXhCO0FBQ0FWLG1CQUFXLENBQUNyRCxZQUFaLENBQXlCLE9BQXpCLEVBQWtDdEMsT0FBTyxDQUFDd0YsQ0FBRCxDQUFQLENBQVdZLEtBQTdDO0FBQ0FULG1CQUFXLENBQUNyRCxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLFlBQVlrRCxDQUE1QztBQUNBSSxjQUFNLENBQUNTLFNBQVAsR0FBbUIsZUFBbkI7QUFDQVQsY0FBTSxDQUFDdEQsWUFBUCxDQUFvQixVQUFwQixFQUFnQyxJQUFoQztBQUNBc0QsY0FBTSxDQUFDdEQsWUFBUCxDQUFvQixVQUFwQixFQUFnQ2tELENBQWhDO0FBQ0FNLGFBQUssQ0FBQ08sU0FBTixHQUFrQixnQkFBbEI7QUFDQU4sVUFBRSxDQUFDTSxTQUFILEdBQWUsWUFBZjtBQUNBTixVQUFFLENBQUN6RCxZQUFILENBQWdCLFVBQWhCLEVBQTRCa0QsQ0FBNUI7QUFDQU8sVUFBRSxDQUFDNUIsSUFBSCxHQUFVLE9BQVY7QUFDQTRCLFVBQUUsQ0FBQ08sRUFBSCxHQUFRLGlCQUFpQmQsQ0FBekI7QUFDQU8sVUFBRSxDQUFDekUsSUFBSCxHQUFVLFdBQVY7QUFDQTBFLGVBQU8sQ0FBQ0ssU0FBUixHQUFvQixTQUFwQjtBQUNBTCxlQUFPLENBQUMxRCxZQUFSLENBQXFCLEtBQXJCLEVBQTRCLGlCQUFpQmtELENBQTdDO0FBQ0FTLGNBQU0sQ0FBQ08sV0FBUCxHQUFxQkMsTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLENBQXJCO0FBRUFWLGVBQU8sQ0FBQ1csV0FBUixDQUFvQlYsTUFBcEI7QUFDQUgsYUFBSyxDQUFDYSxXQUFOLENBQWtCWixFQUFsQjtBQUNBRCxhQUFLLENBQUNhLFdBQU4sQ0FBa0JYLE9BQWxCO0FBRUFQLFdBQUcsQ0FBQ2tCLFdBQUosQ0FBZ0JmLE1BQWhCO0FBQ0FILFdBQUcsQ0FBQ2tCLFdBQUosQ0FBZ0JiLEtBQWhCO0FBQ0FMLFdBQUcsQ0FBQ2tCLFdBQUosQ0FBZ0JqQixLQUFoQjtBQUNBRCxXQUFHLENBQUNrQixXQUFKLENBQWdCaEIsV0FBaEI7O0FBRUEsWUFBSUosS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHTixDQUF6QixFQUE0QjtBQUMxQkQsa0JBQVEsQ0FBQzJCLFdBQVQsQ0FBcUJsQixHQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMWCxtQkFBUyxDQUFDNkIsV0FBVixDQUFzQmxCLEdBQXRCO0FBQ0Q7O0FBRURELFNBQUMsR0FBR0EsQ0FBQyxDQUFDb0IsV0FBRixFQUFKO0FBQ0FwQixTQUFDLEdBQUdBLENBQUMsS0FBSyxPQUFOLEdBQWdCaUIsTUFBTSxDQUFDQyxZQUFQLENBQW9CLE1BQXBCLENBQWhCLEdBQThDbEIsQ0FBbEQ7QUFDQUcsbUJBQVcsQ0FBQ25FLFNBQVosR0FBd0JnRSxDQUF4QjtBQUNBLFlBQUksQ0FBQ0ssS0FBTCxFQUFZSCxLQUFLLENBQUNwRCxZQUFOLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ2I7O0FBQ0R1QyxvQkFBYyxDQUFDOEIsV0FBZixDQUEyQjdCLFNBQTNCO0FBQ0FGLG1CQUFhLENBQUMrQixXQUFkLENBQTBCM0IsUUFBMUI7O0FBRUEsVUFBSSxLQUFJLENBQUNULGVBQVQsRUFBMEI7QUFDeEIsYUFBSSxDQUFDckQsRUFBTCxDQUFRUCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0Qjs7QUFDQUosZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q29HLE9BQXpDLEdBQW1ELElBQW5EO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBSSxDQUFDM0YsRUFBTCxDQUFRUCxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixNQUF6QjtBQUNEO0FBQ0YsS0F6RkQ7QUEwRkQsR0F0SFk7QUF1SGJzRixnQkF2SGEsMEJBdUhFVyxNQXZIRixFQXVIVTtBQUNyQixRQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsQ0FBWjtBQUFBLFFBQ0lDLENBQUMsR0FBR0QsS0FBSyxDQUFDekIsTUFEZDtBQUFBLFFBRUlPLEtBQUssR0FBRyxFQUZaO0FBQUEsUUFHSW9CLENBQUMsR0FBRyxDQUhSO0FBQUEsUUFJSWIsS0FKSjs7QUFNQSxXQUFPYSxDQUFDLEdBQUdELENBQVgsRUFBY0MsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCYixXQUFLLEdBQUdXLEtBQUssQ0FBQ0UsQ0FBRCxDQUFiOztBQUNBLFVBQUliLEtBQUssQ0FBQ2MsUUFBTixDQUFlLGtCQUFmLENBQUosRUFBd0M7QUFDdENyQixhQUFLLEdBQUdPLEtBQUssQ0FBQ1csS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBUjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPbEIsS0FBUDtBQUNELEdBdElZO0FBdUlidkIsUUF2SWEsa0JBdUlONUIsQ0F2SU0sRUF1SUh4QixFQXZJRyxFQXVJQztBQUNaLFNBQUtuQyxJQUFMLENBQVUsbUJBQVYsRUFBK0JtQyxFQUFFLENBQUNJLElBQWxDLEVBQXdDSixFQUFFLENBQUNxRixLQUEzQztBQUNELEdBeklZO0FBMEliWSxRQTFJYSxrQkEwSU56RSxDQTFJTSxFQTBJSHhCLEVBMUlHLEVBMElDO0FBQ1osU0FBS25DLElBQUwsQ0FBVSx5QkFBVixFQUFxQ21DLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsVUFBaEIsQ0FBckMsRUFBa0U7QUFBRS9DLFNBQUcsRUFBRSxRQUFQO0FBQWlCeUQsYUFBTyxFQUFFLEtBQUtUO0FBQS9CLEtBQWxFO0FBQ0QsR0E1SVk7QUE2SWJnRSxZQTdJYSxzQkE2SUYxRSxDQTdJRSxFQTZJQ3hCLEVBN0lELEVBNklLO0FBQ2hCLFFBQUlBLEVBQUUsQ0FBQ1AsU0FBSCxDQUFhZ0MsUUFBYixDQUFzQixVQUF0QixDQUFKLEVBQXVDO0FBQ3ZDLFNBQUs1RCxJQUFMLENBQVUsbUJBQVYsRUFBK0JtQyxFQUFFLENBQUNpQyxZQUFILENBQWdCLFVBQWhCLENBQS9CLEVBQTREO0FBQUUvQyxTQUFHLEVBQUUsUUFBUDtBQUFpQnlELGFBQU8sRUFBRSxLQUFLVDtBQUEvQixLQUE1RDtBQUNELEdBaEpZO0FBaUpiaUUscUJBakphLCtCQWlKT0MsSUFqSlAsRUFpSmF0RCxNQWpKYixFQWlKcUI7QUFDaEMsUUFBSSxLQUFLTyxlQUFULEVBQTBCO0FBQzFCLFNBQUtuQixLQUFMLEdBQWFZLE1BQU0sSUFBSUEsTUFBTSxDQUFDSCxPQUFqQixHQUEyQkcsTUFBTSxDQUFDSCxPQUFsQyxHQUE0QyxDQUF6RDtBQUNBLFFBQU0xQixJQUFJLEdBQUdtRixJQUFJLEdBQUcsaUJBQUgsR0FBdUIsY0FBeEM7QUFDQTNJLFNBQUssQ0FBQzJFLElBQU4sQ0FBVzlDLFFBQVEsQ0FBQ2Usc0JBQVQsQ0FBZ0MsZUFBaEMsQ0FBWCxFQUE2RDBDLE9BQTdELENBQXFFLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUMvQixJQUFELENBQUgsQ0FBVSxVQUFWLEVBQXNCLElBQXRCLENBQUo7QUFBQSxLQUF4RTtBQUNELEdBdEpZO0FBdUpiWSxhQXZKYSx1QkF1SkRDLEtBdkpDLEVBdUpNO0FBQ2pCLFNBQUtxRSxtQkFBTCxDQUF5QnJFLEtBQUssQ0FBQ3VFLFNBQS9CO0FBQ0Q7QUF6SlksQ0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUkxSixpQkFBSixDQUFlO0FBQ2JxRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsNkJBQXVCLFlBRHBCO0FBRUgsc0JBQWdCLFFBRmI7QUFHSCw4QkFBeUI7QUFIdEIsS0FEQztBQU1OcUQsT0FBRyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQUNMLHVCQUFlLFVBRFY7QUFFTCwyQkFBbUIsWUFGZDtBQUdMLCtCQUF1QjtBQUhsQixPQURKO0FBTUgyQyxZQUFNLEVBQUU7QUFDTix1QkFBZTtBQURUO0FBTkw7QUFOQyxHQUZLO0FBb0Jia0QsT0FBSyxFQUFFLEVBcEJNO0FBcUJiQyxTQUFPLEVBQUUsSUFyQkk7QUFzQmJuQyxRQUFNLEVBQUUsQ0F0Qks7QUF1QmJvQyxTQUFPLEVBQUUsQ0FBQyxDQXZCRztBQXdCYkMsWUFBVSxFQUFFLEtBeEJDO0FBeUJiQyxXQUFTLEVBQUU7QUFBRSxTQUFLLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBUDtBQUF1QixTQUFLLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBNUI7QUFBMkMsU0FBSyxDQUFDLEtBQUQsRUFBUSxJQUFSLENBQWhEO0FBQStELFNBQUssQ0FBQyxJQUFELEVBQU8sSUFBUDtBQUFwRSxHQXpCRTtBQTJCYnpHLFFBM0JhLGtCQTJCTjBHLENBM0JNLEVBMkJKQyxDQTNCSSxFQTJCRkMsQ0EzQkUsRUEyQkM7QUFDWixRQUFNeEosS0FBSyxHQUFHLEtBQUtBLEtBQUwsR0FBYVQsbUJBQU9TLEtBQWxDOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUNULFdBQUt5SixRQUFMO0FBQ0EsVUFBSSxDQUFDLEtBQUtMLFVBQVYsRUFBc0IsS0FBS00sZ0JBQUw7QUFDdEIsV0FBS0MsVUFBTDtBQUNEO0FBQ0YsR0FsQ1k7QUFtQ2JGLFVBbkNhLHNCQW1DRjtBQUNULFFBQU16SixLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFDQSxRQUFJaUosS0FBSyxHQUFHLEVBQVo7O0FBQ0EsUUFBSTdJLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQUosRUFBMEI7QUFDeEJBLFdBQUssQ0FBQzBGLE9BQU4sQ0FBYyxVQUFBdkIsQ0FBQztBQUFBLGVBQUk4RSxLQUFLLEdBQUdBLEtBQUssQ0FBQ1csTUFBTixDQUFhekYsQ0FBQyxDQUFDOEUsS0FBZixDQUFaO0FBQUEsT0FBZjtBQUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUdqSixLQUFLLENBQUNpSixLQUFkO0FBQ0Q7O0FBQ0QsUUFBTUMsT0FBTyxHQUFHLEtBQUtBLE9BQXJCLENBUlMsQ0FTVDtBQUNBOztBQUNBLFNBQUtELEtBQUwsR0FBYUMsT0FBTyxHQUNsQkEsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQTlCLEVBQUU7QUFBQSxhQUFJa0IsS0FBSyxDQUFDYSxJQUFOLENBQVcsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ2hDLEVBQUwsSUFBV0EsRUFBZjtBQUFBLE9BQWYsQ0FBSjtBQUFBLEtBQWQsQ0FEa0IsR0FFbEJrQixLQUZGO0FBR0EsU0FBS2xDLE1BQUwsR0FBYyxLQUFLa0MsS0FBTCxDQUFXbEMsTUFBekI7QUFDRCxHQWxEWTtBQW1EYmlELFlBbkRhLHNCQW1ERkMsR0FuREUsRUFtREVWLENBbkRGLEVBbURJQyxDQW5ESixFQW1ETztBQUNsQixTQUFLTixPQUFMLEdBQWVlLEdBQWY7QUFDQSxTQUFLckgsTUFBTDtBQUNELEdBdERZO0FBdURiOEcsa0JBdkRhLDhCQXVETTtBQUNqQixRQUFNUSxJQUFJLEdBQUdqSSxRQUFRLENBQUNpSSxJQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBR2xJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBYjtBQUNBLFFBQU1rSSxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQUkxQixDQUFKLEVBQU9jLENBQVA7O0FBQ0EsU0FBS2QsQ0FBTCxJQUFVMkIsNEJBQVVDLFdBQXBCLEVBQWlDO0FBQzlCZCxPQUFDLEdBQUdhLDRCQUFVQyxXQUFWLENBQXNCNUIsQ0FBdEIsQ0FBSjtBQUNEMEIsWUFBTSxDQUFDMUIsQ0FBQyxDQUFDNkIsV0FBRixFQUFELENBQU4sR0FBMEIsYUFBYSxLQUFLQyxVQUFMLENBQWdCaEIsQ0FBQyxDQUFDaUIsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWhCLENBQWIsR0FBOEMsV0FBOUMsR0FBNEQsS0FBS0QsVUFBTCxDQUFnQmhCLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxDQUFoQixDQUE1RCxHQUE2RixXQUE3RixHQUEyRyxLQUFLRCxVQUFMLENBQWdCaEIsQ0FBQyxDQUFDaUIsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWhCLENBQTNHLEdBQTRJLFlBQXRLO0FBQ0Q7O0FBQ0QsUUFBSUMsTUFBSjs7QUFDQSxTQUFLaEMsQ0FBTCxJQUFVMEIsTUFBVixFQUFrQjtBQUNoQk0sWUFBTSxHQUFHUCxJQUFJLENBQUNRLFNBQUwsQ0FBZSxJQUFmLENBQVQ7QUFDQUQsWUFBTSxDQUFDMUYsb0JBQVAsQ0FBNEIsUUFBNUIsRUFBc0MsQ0FBdEMsRUFBeUMrQyxFQUF6QyxHQUE4QyxhQUFhVyxDQUEzRDtBQUNBZ0MsWUFBTSxDQUFDMUYsb0JBQVAsQ0FBNEIsZUFBNUIsRUFBNkMsQ0FBN0MsRUFBZ0RqQixZQUFoRCxDQUE2RCxRQUE3RCxFQUF1RXFHLE1BQU0sQ0FBQzFCLENBQUQsQ0FBN0U7QUFDQXdCLFVBQUksQ0FBQzlCLFdBQUwsQ0FBaUJzQyxNQUFqQjtBQUNEOztBQUNELFNBQUt0QixVQUFMLEdBQWtCLElBQWxCO0FBQ0QsR0F4RVk7QUF5RWJvQixZQXpFYSxzQkF5RUZJLEdBekVFLEVBeUVHO0FBQ2QsV0FBTyxDQUFFLEtBQUtDLE1BQU0sQ0FBQyxPQUFPRCxHQUFHLENBQUMsQ0FBRCxDQUFYLENBQVosR0FBK0JDLE1BQU0sQ0FBQyxPQUFPRCxHQUFHLENBQUMsQ0FBRCxDQUFYLENBQXRDLElBQXlELEdBQWhFO0FBQ0QsR0EzRVk7QUE0RWJqQixZQTVFYSx3QkE0RUE7QUFDWCxRQUFNbUIsUUFBUSxHQUFHN0ksUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQWpCO0FBQ0EsUUFBTTZJLFFBQVEsR0FBRzlJLFFBQVEsQ0FBQ3VFLHNCQUFULEVBQWpCO0FBQ0EsUUFBTXdFLGNBQWMsR0FBRy9JLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUF2QjtBQUNBLFFBQUkrSSxhQUFKO0FBRUFELGtCQUFjLENBQUMvSCxTQUFmLEdBQTJCLEVBQTNCO0FBRUEsU0FBS2dHLEtBQUwsQ0FBV3ZELE9BQVgsQ0FBbUIsVUFBQ3FFLElBQUQsRUFBT3JCLENBQVAsRUFBYTtBQUM5QixVQUFJcUIsSUFBSixFQUFVO0FBQ1JrQixxQkFBYSxHQUFHSCxRQUFRLENBQUNILFNBQVQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQU0scUJBQWEsQ0FBQ2xELEVBQWQsR0FBbUIsRUFBbkI7QUFDQWtELHFCQUFhLENBQUM3SSxTQUFkLENBQXdCRSxNQUF4QixDQUErQixpQkFBL0I7QUFDQTJJLHFCQUFhLENBQUNsSCxZQUFkLENBQTJCLFNBQTNCLEVBQXNDMkUsQ0FBdEM7QUFFQSxZQUFNd0MsUUFBUSxHQUFHRCxhQUFhLENBQUNqSSxzQkFBZCxDQUFxQyxZQUFyQyxFQUFtRCxDQUFuRCxDQUFqQjtBQUNBLFlBQU1pRixXQUFXLEdBQUdoRyxRQUFRLENBQUNrSixjQUFULENBQXdCcEIsSUFBSSxDQUFDcUIsSUFBN0IsQ0FBcEI7QUFDQSxZQUFJOUQsS0FBSyxHQUFHeUMsSUFBSSxDQUFDbEMsS0FBTCxDQUFXd0QsT0FBWCxDQUFtQixrQkFBbkIsQ0FBWjtBQUNBLFlBQUlDLE9BQU8sR0FBR3ZCLElBQUksQ0FBQ3dCLElBQUwsS0FBYyxPQUFPeEIsSUFBSSxDQUFDd0IsSUFBWixLQUFxQixRQUFyQixJQUFpQ3hCLElBQUksQ0FBQ3dCLElBQUwsQ0FBVUgsSUFBekQsQ0FBZDtBQUNBOUQsYUFBSyxHQUFHQSxLQUFLLEtBQUssQ0FBQyxDQUFYLEdBQWUsYUFBZixHQUErQnlDLElBQUksQ0FBQ2xDLEtBQUwsQ0FBVzRDLE1BQVgsQ0FBa0JuRCxLQUFLLEdBQUcsRUFBMUIsRUFBOEIsQ0FBOUIsQ0FBdkM7QUFDQSxZQUFJaUUsSUFBSixFQUFVQyxTQUFWLEVBQXFCQyxRQUFyQixFQUErQkMsT0FBL0IsRUFBd0NDLFFBQXhDO0FBRUFULGdCQUFRLENBQUNyRCxLQUFULENBQWUrRCxXQUFmLEdBQTZCdEUsS0FBN0I7QUFDQTRELGdCQUFRLENBQUM5QyxXQUFULENBQXFCSCxXQUFyQjs7QUFFQSxZQUFJcUQsT0FBSixFQUFhO0FBQ1hDLGNBQUksR0FBR3hCLElBQUksQ0FBQ3dCLElBQVo7QUFDQUMsbUJBQVMsR0FBR0QsSUFBSSxDQUFDakUsS0FBTCxJQUFjLFFBQTFCO0FBQ0FtRSxrQkFBUSxHQUFHRixJQUFJLENBQUNILElBQUwsSUFBYUcsSUFBeEI7QUFDQU4sdUJBQWEsQ0FBQzdJLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFlBQTVCO0FBQ0FxSixpQkFBTyxHQUFHVCxhQUFhLENBQUNqSSxzQkFBZCxDQUFxQyxnQkFBckMsRUFBdUQsQ0FBdkQsQ0FBVjtBQUNBMEksaUJBQU8sQ0FBQ3RKLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLGlCQUF6QjtBQUNBb0osaUJBQU8sQ0FBQ3RKLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHFCQUFxQm1KLFNBQTNDO0FBQ0FHLGtCQUFRLEdBQUdWLGFBQWEsQ0FBQ2pJLHNCQUFkLENBQXFDLFlBQXJDLEVBQW1ELENBQW5ELENBQVg7QUFDQTJJLGtCQUFRLENBQUN2RCxXQUFULENBQXFCbkcsUUFBUSxDQUFDa0osY0FBVCxDQUF3Qk0sUUFBeEIsQ0FBckI7QUFDQUUsa0JBQVEsQ0FBQ3ZKLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGlCQUExQjtBQUNBcUosa0JBQVEsQ0FBQ3ZKLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGlCQUFpQm1KLFNBQXhDO0FBQ0Q7O0FBQ0RULGdCQUFRLENBQUMzQyxXQUFULENBQXFCNkMsYUFBckI7QUFDRDtBQUNGLEtBaENEO0FBaUNBRCxrQkFBYyxDQUFDNUMsV0FBZixDQUEyQjJDLFFBQTNCO0FBQ0QsR0F0SFk7QUF1SGJjLEtBdkhhLGVBdUhUMUgsQ0F2SFMsRUF1SE54QixFQXZITSxFQXVIRjtBQUNULFFBQU1tSixHQUFHLEdBQUcsSUFBSW5KLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBaEI7QUFDQSxTQUFLdUUsT0FBTCxJQUFnQjJDLEdBQWhCO0FBQ0EsUUFBSSxLQUFLM0MsT0FBTCxJQUFnQixLQUFLcEMsTUFBekIsRUFBaUMsS0FBS29DLE9BQUwsR0FBZSxDQUFmLENBQWpDLEtBQ0ssSUFBSSxLQUFLQSxPQUFMLEdBQWUsQ0FBbkIsRUFBc0IsS0FBS0EsT0FBTCxHQUFlLEtBQUtwQyxNQUFMLEdBQWMsQ0FBN0I7QUFDM0IsU0FBS2dGLGdCQUFMO0FBQ0QsR0E3SFk7QUE4SGJBLGtCQTlIYSw0QkE4SEloRSxFQTlISixFQThIUTtBQUNuQixRQUFJLE9BQU9BLEVBQVAsS0FBYyxRQUFsQixFQUE0QixLQUFLb0IsT0FBTCxHQUFlcEIsRUFBZjtBQUM1QixRQUFNaUUsV0FBVyxHQUFHLEtBQUtySixFQUFMLENBQVFLLHNCQUFSLENBQStCLGNBQS9CLEVBQStDLENBQS9DLENBQXBCO0FBQ0EsUUFBSWdKLFdBQUosRUFBaUJBLFdBQVcsQ0FBQzVKLFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLGNBQTdCO0FBQ2pCTCxZQUFRLENBQUNnSyxhQUFULENBQXVCLGtCQUFrQixDQUFDLEtBQUs5QyxPQUFOLENBQWxCLEdBQW1DLElBQTFELEVBQWdFL0csU0FBaEUsQ0FBMEVDLEdBQTFFLENBQThFLGNBQTlFO0FBQ0EsU0FBSzdCLElBQUwsQ0FBVSxtQkFBVixFQUErQixLQUFLMkksT0FBcEMsRUFBNkM7QUFBRXRILFNBQUcsRUFBRTtBQUFQLEtBQTdDO0FBQ0QsR0FwSVk7QUFxSWIwRCxVQXJJYSxvQkFxSUpwQixDQXJJSSxFQXFJRHhCLEVBcklDLEVBcUlHO0FBQ2RWLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzhGLEtBQXRDLEdBQThDLENBQTlDO0FBQ0FyRixNQUFFLENBQUNQLFNBQUgsQ0FBYUssTUFBYixDQUFvQixVQUFwQjtBQUNBLFNBQUtzSixnQkFBTCxDQUFzQixJQUFFcEosRUFBRSxDQUFDMEIsVUFBSCxDQUFjQSxVQUFkLENBQXlCTyxZQUF6QixDQUFzQyxTQUF0QyxDQUF4QjtBQUNELEdBeklZO0FBMElic0gsVUExSWEsb0JBMElKL0gsQ0ExSUksRUEwSUR4QixFQTFJQyxFQTBJRztBQUNkLFFBQU13SixHQUFHLEdBQUd4SixFQUFFLENBQUNxRixLQUFmOztBQUNBLFFBQUltRSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1osVUFBTWxELEtBQUssR0FBR2hILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsVUFBTWtLLGNBQWMsR0FBRyxLQUFLL0MsU0FBTCxDQUFlOEMsR0FBZixDQUF2QjtBQUVBLFdBQUsxSixNQUFMLENBQVksTUFBWixFQUFvQjJKLGNBQWMsQ0FBQyxDQUFELENBQWxDO0FBQ0EsV0FBSzNKLE1BQUwsQ0FBWSxNQUFaLEVBQW9CMkosY0FBYyxDQUFDLENBQUQsQ0FBbEM7QUFDRDtBQUNGLEdBbkpZO0FBb0piQyxZQXBKYSxzQkFvSkZsSSxDQXBKRSxFQW9KQ3hCLEVBcEpELEVBb0pLO0FBQ2hCVixZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M4RixLQUF0QyxHQUE4QyxDQUE5QztBQUNBLFFBQU1zRSxNQUFNLEdBQUczSixFQUFFLENBQUMwQixVQUFsQjtBQUNBaUksVUFBTSxDQUFDbEssU0FBUCxDQUFpQkssTUFBakIsQ0FBd0IsV0FBeEI7QUFDQTZKLFVBQU0sQ0FBQ3RKLHNCQUFQLENBQThCLFlBQTlCLEVBQTRDLENBQTVDLEVBQStDWixTQUEvQyxDQUF5REssTUFBekQsQ0FBZ0UsVUFBaEU7QUFDRCxHQXpKWTtBQTBKYkEsUUExSmEsa0JBMEpObUQsSUExSk0sRUEwSkFtRCxJQTFKQSxFQTBKTTtBQUNqQixRQUFNbkYsSUFBSSxHQUFHbUYsSUFBSSxHQUFHLEtBQUgsR0FBVyxRQUE1QjtBQUNBM0ksU0FBSyxDQUFDMkUsSUFBTixDQUFXLEtBQUtwQyxFQUFMLENBQVFLLHNCQUFSLENBQStCLFdBQVc0QyxJQUExQyxDQUFYLEVBQ0dGLE9BREgsQ0FDVyxVQUFBL0MsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ1AsU0FBSCxDQUFhd0IsSUFBYixFQUFtQixVQUFuQixDQUFKO0FBQUEsS0FEYjtBQUVEO0FBOUpZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSXRFLGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxzQkFBZ0IsUUFEYjtBQUVILDhCQUF3QjtBQUZyQjtBQURDLEdBRks7QUFTYjhDLFFBVGEsa0JBU041QyxLQVRNLEVBU0M7QUFDWixRQUFJQSxLQUFLLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFOLENBQWNMLEtBQWQsQ0FBZCxFQUFvQztBQUNsQyxVQUFNdU0sR0FBRyxHQUFHM0wsT0FBTyxDQUFDNEwsSUFBUixDQUFhQyxVQUFiLENBQXdCLEtBQXhCLENBQVo7QUFDQSxVQUFNQyxFQUFFLEdBQUc5TCxPQUFPLENBQUM0TCxJQUFSLENBQWFDLFVBQWIsQ0FBd0IsSUFBeEIsQ0FBWDtBQUVBeEssY0FBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q2UsU0FBOUMsR0FBMERqRCxLQUFLLENBQUNpSixLQUFOLENBQVlsQyxNQUF0RTtBQUNBOUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDZSxTQUF6QyxHQUFxRCxLQUFLMEosa0JBQUwsQ0FBd0IsSUFBSUMsSUFBSixDQUFTNU0sS0FBSyxDQUFDNk0sS0FBZixFQUFzQkMsY0FBdEIsRUFBeEIsQ0FBckQ7QUFDQTdLLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NlLFNBQS9DLEdBQTJELEtBQUswSixrQkFBTCxDQUF3QixJQUFJQyxJQUFKLENBQVM1TSxLQUFLLENBQUMrTSxJQUFmLEVBQXFCRCxjQUFyQixFQUF4QixDQUEzRDtBQUVBLE9BQUMsUUFBRCxFQUFXLE9BQVgsRUFDR3BILE9BREgsQ0FDVyxVQUFBc0gsS0FBSztBQUFBLGVBQUkvSyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBVzhLLEtBQW5DLEVBQTBDL0osU0FBMUMsR0FBc0RqRCxLQUFLLENBQUNnTixLQUFELENBQUwsR0FBZVQsR0FBZixHQUFxQkcsRUFBL0U7QUFBQSxPQURoQjtBQUVEO0FBQ0YsR0FyQlk7QUF1QmJDLG9CQXZCYSw4QkF1Qk1NLElBdkJOLEVBdUJZO0FBQ3ZCLFdBQVFBLElBQUksQ0FDVEMsT0FESyxDQUNHLGlCQURILEVBQ3NCLFVBQUNqRyxDQUFELEVBQUlrRyxDQUFKLEVBQU9DLENBQVA7QUFBQSxhQUFZLE1BQU1ELENBQU4sR0FBVUMsQ0FBdEI7QUFBQSxLQUR0QixFQUVMRixPQUZLLENBRUcsc0JBRkgsRUFFMkIsVUFBQ2pHLENBQUQsRUFBSWtHLENBQUosRUFBT0MsQ0FBUDtBQUFBLGFBQWFELENBQUMsR0FBRyxHQUFKLEdBQVVDLENBQXZCO0FBQUEsS0FGM0IsQ0FBUjtBQUdEO0FBM0JZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSTlOLGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCx3QkFBa0Isa0JBRGY7QUFFSCwwQkFBb0Isb0JBRmpCO0FBR0gsb0JBQWMsZUFIWDtBQUlILDJCQUFxQixpQkFKbEI7QUFLSCxvQkFBYyxhQUxYO0FBTUgscUJBQWU7QUFOWixLQURDO0FBU05xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wsZ0NBQXdCO0FBRG5CO0FBREo7QUFUQyxHQUZLO0FBa0JiaUssa0JBbEJhLDhCQWtCTTtBQUNqQixTQUFLOUgsUUFBTCxDQUFjLFFBQWQsRUFBd0IsSUFBeEI7QUFDRCxHQXBCWTtBQXFCYitILG9CQXJCYSxnQ0FxQlE7QUFDbkIsU0FBSy9ILFFBQUwsQ0FBYyxRQUFkLEVBQXdCLEtBQXhCO0FBQ0QsR0F2Qlk7QUF3QmJnSSxlQXhCYSwyQkF3Qkc7QUFDZCxTQUFLaEksUUFBTCxDQUFjLE9BQWQsRUFBdUIsSUFBdkI7QUFDRCxHQTFCWTtBQTJCYmlJLGlCQTNCYSw2QkEyQks7QUFDaEIsU0FBS2pJLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLEtBQXZCO0FBQ0QsR0E3Qlk7QUE4QmJBLFVBOUJhLG9CQThCSkssSUE5QkksRUE4QkU3RCxFQTlCRixFQThCTTtBQUNqQixRQUFNNEQsR0FBRyxHQUFHMUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUFrQjBELElBQTFDLENBQVo7O0FBQ0EsUUFBSTdELEVBQUosRUFBUTtBQUNONEQsU0FBRyxDQUFDN0IsZUFBSixDQUFvQixVQUFwQjtBQUNBNkIsU0FBRyxDQUFDdEIsVUFBSixDQUFlakMsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsVUFBaEM7QUFDRCxLQUhELE1BSUs7QUFDSHFELFNBQUcsQ0FBQzVCLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsSUFBN0I7QUFDQTRCLFNBQUcsQ0FBQ3RCLFVBQUosQ0FBZWpDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQTdCO0FBQ0Q7QUFDRixHQXhDWTtBQXlDYm9MLFlBekNhLHNCQXlDRnRKLENBekNFLEVBeUNDeEIsRUF6Q0QsRUF5Q0s7QUFDaEIsU0FBS25DLElBQUwsQ0FBVSxhQUFhbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixhQUFoQixDQUF2QixFQUF1RDtBQUFFL0MsU0FBRyxFQUFFO0FBQVAsS0FBdkQ7QUFDRCxHQTNDWTtBQTRDYjJDLGFBNUNhLHVCQTRDREMsS0E1Q0MsRUE0Q007QUFDakIsUUFBSUEsS0FBSyxDQUFDb0IsUUFBVixFQUFvQixLQUFLd0gsZ0JBQUw7QUFDckIsR0E5Q1k7QUErQ2JLLGNBL0NhLHdCQStDQUMsS0EvQ0EsRUErQ087QUFDbEIsUUFBSUEsS0FBSixFQUFXLEtBQUtKLGFBQUw7QUFDWjtBQWpEWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUE7Ozs7OztBQUVBLElBQUlqTyxpQkFBSixDQUFlO0FBQ2JxRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQURTO0FBRWJyQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFO0FBQ0gsMkJBQXFCO0FBRGxCLEtBREM7QUFJTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCxxQkFBYSxTQURSO0FBRUwsdUJBQWUsYUFGVjtBQUdMLDJCQUFtQixlQUhkO0FBSUwsd0JBQWdCLFlBSlg7QUFLTCwwQkFBa0IsWUFMYjtBQU1MLHNCQUFjO0FBTlQsT0FESjtBQVNIMkMsWUFBTSxFQUFFO0FBQ04sNEJBQW9CO0FBRGQ7QUFUTDtBQUpDLEdBRks7QUFvQmI0SCxPQUFLLEVBQUUsRUFwQk07QUFxQmJDLFNBQU8sRUFBRSxFQXJCSTtBQXNCYjdGLElBQUUsRUFBRSxDQXRCUztBQXVCYjhGLGNBQVksRUFBRSxRQXZCRDtBQXlCYmpNLFVBekJhLHNCQXlCRjtBQUNULFNBQUtnQixNQUFMO0FBQ0QsR0EzQlk7QUE2QmJBLFFBN0JhLG9CQTZCSjtBQUFBOztBQUNQLFNBQUtsQyxNQUFMO0FBQ0Esa0NBQWtCTSxJQUFsQixDQUF1QixVQUFBYSxHQUFHLEVBQUk7QUFDNUIsVUFBTWlNLEdBQUcsR0FBRyxLQUFJLENBQUNBLEdBQUwsR0FBV2pNLEdBQUcsQ0FBQ2lNLEdBQTNCOztBQUNBdk8seUJBQU93QixHQUFQLENBQVcsV0FBWCxFQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQVcsU0FBUyxFQUFJO0FBQ3hDQSxpQkFBUyxHQUFHQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ21NLEdBQUQsQ0FBdEIsR0FBOEJuTSxTQUFTLENBQUNtTSxHQUFELENBQXZDLEdBQStDLElBQTNEO0FBQ0EsWUFBSXJGLENBQUosRUFBT1YsRUFBUDs7QUFDQSxZQUFJcEcsU0FBUyxLQUFLOEcsQ0FBQyxHQUFHOUcsU0FBUyxDQUFDb0YsTUFBbkIsQ0FBYixFQUF5QztBQUN2QyxlQUFJLENBQUM0RyxLQUFMLEdBQWFoTSxTQUFiOztBQUNBLGlCQUFPOEcsQ0FBQyxFQUFSLEVBQVk7QUFDVlYsY0FBRSxHQUFHLEtBQUksQ0FBQ2dHLE9BQUwsQ0FBYXBNLFNBQVMsQ0FBQzhHLENBQUQsQ0FBdEIsQ0FBTDtBQUNBLGlCQUFJLENBQUNWLEVBQUwsR0FBVXBCLElBQUksQ0FBQ3FILEdBQUwsQ0FBUyxLQUFJLENBQUNqRyxFQUFkLEVBQWtCQSxFQUFsQixDQUFWO0FBQ0Q7QUFDRjtBQUNGLE9BVkQsRUFXRy9HLElBWEgsQ0FXUSxZQUFNO0FBQ1YsYUFBSSxDQUFDaU4sWUFBTCxDQUFrQixDQUFDLENBQUMsS0FBSSxDQUFDTixLQUFMLENBQVc1RyxNQUEvQjs7QUFDQSxhQUFJLENBQUNtSCxXQUFMLENBQWlCLElBQWpCLEVBQXVCak0sUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF2QjtBQUNELE9BZEg7QUFlRCxLQWpCRDtBQWtCRCxHQWpEWTtBQWtEYnVCLE1BbERhLGdCQWtEUlUsQ0FsRFEsRUFrREx4QixFQWxESyxFQWtERDtBQUNWLFFBQUlBLEVBQUosRUFBUTtBQUNOLFVBQU00SSxJQUFJLEdBQUcsS0FBSzRDLE9BQUwsQ0FBYXhMLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYixDQUFiO0FBQ0EyRyxVQUFJLENBQUNILElBQUwsR0FBWXpJLEVBQUUsQ0FBQ3lMLGVBQUgsQ0FBbUJwRyxLQUEvQjtBQUNBdUQsVUFBSSxDQUFDeEksSUFBTCxHQUFZSixFQUFFLENBQUMwQixVQUFILENBQWNyQixzQkFBZCxDQUFxQyxnQkFBckMsRUFBdUQsQ0FBdkQsRUFBMERnRixLQUF0RTtBQUNEOztBQUNELFNBQUt4SCxJQUFMLENBQVUsbUJBQVYsRUFBK0IsS0FBS3NOLEdBQXBDLEVBQXlDLEtBQUtILEtBQTlDO0FBQ0QsR0F6RFk7QUEwRGJqTixRQTFEYSxvQkEwREo7QUFDUCxTQUFLaU4sS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUs3RixFQUFMLEdBQVUsQ0FBVjtBQUNBOUYsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDK0YsV0FBdEMsR0FBb0QsRUFBcEQ7QUFDRCxHQS9EWTtBQWlFYjhGLFNBakVhLG1CQWlFTHhDLElBakVLLEVBaUVDO0FBQ1pBLFFBQUksR0FBR0EsSUFBSSxDQUFDM0YsSUFBTCxHQUFZLElBQVosR0FBbUIyRixJQUExQjtBQUNBLFFBQU04QyxTQUFTLEdBQUdwTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxRQUFNb00sTUFBTSxHQUFHck0sUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q3lJLFNBQTlDLENBQXdELElBQXhELENBQWY7QUFDQSxRQUFNNEQsUUFBUSxHQUFHRCxNQUFNLENBQUN0SixvQkFBUCxDQUE0QixVQUE1QixFQUF3QyxDQUF4QyxDQUFqQjtBQUNBLFFBQU1uQyxNQUFNLEdBQUd5TCxNQUFNLENBQUN0TCxzQkFBUCxDQUE4QixnQkFBOUIsRUFBZ0QsQ0FBaEQsQ0FBZjtBQUNBc0wsVUFBTSxDQUFDbE0sU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsaUJBQXhCO0FBRUEsUUFBSXlGLEVBQUo7O0FBQ0EsUUFBSXdELElBQUosRUFBVTtBQUNSeEQsUUFBRSxHQUFHdUcsTUFBTSxDQUFDdkcsRUFBUCxHQUFZd0QsSUFBSSxDQUFDeEQsRUFBdEI7QUFDQXdHLGNBQVEsQ0FBQ3RHLFdBQVQsR0FBdUJzRCxJQUFJLENBQUNILElBQUwsSUFBYSxFQUFwQztBQUNBdkksWUFBTSxDQUFDbUYsS0FBUCxHQUFldUQsSUFBSSxDQUFDeEksSUFBTCxJQUFhLEVBQTVCO0FBQ0F1TCxZQUFNLENBQUNsTSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixhQUFha0osSUFBSSxDQUFDakUsS0FBdkM7QUFDQStHLGVBQVMsQ0FBQ2pHLFdBQVYsQ0FBc0JrRyxNQUF0QjtBQUNELEtBTkQsTUFNTztBQUNMdkcsUUFBRSxHQUFHdUcsTUFBTSxDQUFDdkcsRUFBUCxHQUFZLEVBQUUsS0FBS0EsRUFBeEI7QUFDQSxXQUFLNEYsS0FBTCxDQUFXcE4sSUFBWCxDQUFnQjtBQUFFd0gsVUFBRSxFQUFGQSxFQUFGO0FBQU1xRCxZQUFJLEVBQUUsRUFBWjtBQUFnQjlELGFBQUssRUFBRSxLQUFLdUc7QUFBNUIsT0FBaEI7QUFDQVMsWUFBTSxDQUFDbE0sU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsYUFBeEI7QUFDQWdNLFlBQU0sQ0FBQ2xNLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGFBQWEsS0FBS3dMLFlBQXZDO0FBQ0FRLGVBQVMsQ0FBQ0csWUFBVixDQUF1QkYsTUFBdkIsRUFBK0JELFNBQVMsQ0FBQ0ksVUFBekM7QUFDRDs7QUFFRHJPLFNBQUssQ0FBQzJFLElBQU4sQ0FBV3VKLE1BQU0sQ0FBQ3RKLG9CQUFQLENBQTRCLEdBQTVCLENBQVgsRUFDR1UsT0FESCxDQUNXLFVBQUEvQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDb0IsWUFBSCxDQUFnQixTQUFoQixFQUEyQmdFLEVBQTNCLENBQUo7QUFBQSxLQURiO0FBR0EsU0FBSzZGLE9BQUwsQ0FBYTdGLEVBQWIsSUFBbUJ1RyxNQUFuQjtBQUVBLFNBQUtMLFlBQUwsQ0FBa0IsSUFBbEI7QUFFQSxXQUFPbEcsRUFBUDtBQUNELEdBaEdZO0FBaUdiMkcsYUFqR2EsdUJBaUdEdkssQ0FqR0MsRUFpR0V4QixFQWpHRixFQWlHTTtBQUNqQixRQUFNb0YsRUFBRSxHQUFHcEYsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFYO0FBQ0EsUUFBTTBDLEtBQUssR0FBRyxLQUFLdUcsWUFBTCxHQUFvQmxMLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBbEM7QUFDQSxTQUFLZ0osT0FBTCxDQUFhN0YsRUFBYixFQUFpQkQsU0FBakIsR0FBNkIsS0FBSzhGLE9BQUwsQ0FBYTdGLEVBQWIsRUFBaUJELFNBQWpCLENBQTJCb0YsT0FBM0IsQ0FBbUMsT0FBbkMsRUFBNEMsT0FBTzVGLEtBQW5ELENBQTdCO0FBQ0EsU0FBSzZHLE9BQUwsQ0FBYXBHLEVBQWIsRUFBaUJULEtBQWpCLEdBQXlCQSxLQUF6QjtBQUNBM0UsTUFBRSxDQUFDMEIsVUFBSCxDQUFjakMsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsaUJBQTVCO0FBQ0QsR0F2R1k7QUF3R2JzTSxZQXhHYSxzQkF3R0Z4SyxDQXhHRSxFQXdHQ3hCLEVBeEdELEVBd0dLO0FBQ2hCLFFBQU1vRixFQUFFLEdBQUdwRixFQUFFLENBQUNpQyxZQUFILENBQWdCLFNBQWhCLENBQVg7QUFDQSxRQUFNMkcsSUFBSSxHQUFHLEtBQUtxQyxPQUFMLENBQWE3RixFQUFiLENBQWI7QUFDQXdELFFBQUksQ0FBQ2xILFVBQUwsQ0FBZ0J1SyxXQUFoQixDQUE0QnJELElBQTVCO0FBQ0EsV0FBTyxLQUFLcUMsT0FBTCxDQUFhN0YsRUFBYixDQUFQO0FBQ0EsU0FBSzRGLEtBQUwsQ0FBV2tCLE1BQVgsQ0FBa0IsS0FBS2xCLEtBQUwsQ0FBV3RDLE9BQVgsQ0FBbUIsS0FBSzhDLE9BQUwsQ0FBYXBHLEVBQWIsQ0FBbkIsQ0FBbEIsRUFBd0QsQ0FBeEQ7QUFDQSxTQUFLdEUsSUFBTDs7QUFDQSxRQUFJLENBQUMsS0FBS2tLLEtBQUwsQ0FBVzVHLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQUtrSCxZQUFMLENBQWtCLEtBQWxCO0FBQ0Q7QUFDRixHQWxIWTtBQW1IYkEsY0FuSGEsd0JBbUhBbEYsSUFuSEEsRUFtSE07QUFDakIsUUFBTW5GLElBQUksR0FBR21GLElBQUksR0FBRyxRQUFILEdBQWMsS0FBL0I7QUFDQTlHLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNFLFNBQTNDLENBQXFEd0IsSUFBckQsRUFBMkQsaUJBQTNEO0FBQ0QsR0F0SFk7QUF1SGJrTCxlQXZIYSx5QkF1SEMzSyxDQXZIRCxFQXVISXhCLEVBdkhKLEVBdUhRO0FBQ25CLFFBQU00SSxJQUFJLEdBQUcsS0FBS3FDLE9BQUwsQ0FBYWpMLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBYixDQUFiO0FBQ0EsUUFBTW1LLE9BQU8sR0FBR3hELElBQUksQ0FBQ3ZHLG9CQUFMLENBQTBCLGVBQTFCLEVBQTJDLENBQTNDLENBQWhCO0FBQ0ErSixXQUFPLENBQUMzTSxTQUFSLENBQWtCSyxNQUFsQixDQUF5QixpQkFBekI7O0FBQ0EsUUFBSSxDQUFDc00sT0FBTyxDQUFDM00sU0FBUixDQUFrQmdDLFFBQWxCLENBQTJCLGlCQUEzQixDQUFMLEVBQW9EO0FBQ2xEbUgsVUFBSSxDQUFDbkosU0FBTCxDQUFlRSxNQUFmLENBQXNCLGFBQXRCO0FBQ0Q7QUFDRixHQTlIWTtBQStIYitKLFlBL0hhLHNCQStIRmxJLENBL0hFLEVBK0hDeEIsRUEvSEQsRUErSEs7QUFDaEIsUUFBTTRJLElBQUksR0FBRyxLQUFLcUMsT0FBTCxDQUFhakwsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixTQUFoQixDQUFiLENBQWI7QUFDQTJHLFFBQUksQ0FBQ25KLFNBQUwsQ0FBZUssTUFBZixDQUFzQixhQUF0Qjs7QUFDQSxRQUFJLENBQUM4SSxJQUFJLENBQUNuSixTQUFMLENBQWVnQyxRQUFmLENBQXdCLGFBQXhCLENBQUwsRUFBNkM7QUFDM0MsV0FBSzRLLG9CQUFMLENBQTBCekQsSUFBMUI7QUFDRDs7QUFDRHRKLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkM4RixLQUEzQyxHQUFtRCxDQUFuRDtBQUNELEdBdElZO0FBdUlia0csYUF2SWEsdUJBdUlEL0osQ0F2SUMsRUF1SUV4QixFQXZJRixFQXVJTTtBQUNqQixRQUFJQSxFQUFFLENBQUNxRixLQUFILElBQVksQ0FBaEIsRUFBbUI7QUFDakIsV0FBSyxJQUFJRCxFQUFULElBQWUsS0FBSzZGLE9BQXBCLEVBQTZCO0FBQzNCLGFBQUtBLE9BQUwsQ0FBYTdGLEVBQWIsRUFBaUIzRixTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsYUFBL0I7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMLFVBQUlrSixJQUFKLEVBQVVnRCxRQUFWOztBQUNBLFdBQUssSUFBSXhHLEdBQVQsSUFBZSxLQUFLNkYsT0FBcEIsRUFBNkI7QUFDM0JyQyxZQUFJLEdBQUcsS0FBS3FDLE9BQUwsQ0FBYTdGLEdBQWIsQ0FBUDtBQUNBd0QsWUFBSSxDQUFDbkosU0FBTCxDQUFlRSxNQUFmLENBQXNCLGFBQXRCO0FBQ0EsYUFBSzBNLG9CQUFMLENBQTBCekQsSUFBMUI7QUFDRDtBQUNGO0FBQ0YsR0FwSlk7QUFxSmI0QyxTQXJKYSxtQkFxSkxwRyxFQXJKSyxFQXFKRDtBQUNWLFdBQU8sS0FBSzRGLEtBQUwsQ0FBVzdELElBQVgsQ0FBZ0IsVUFBQXlCLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUN4RCxFQUFMLElBQVdBLEVBQWY7QUFBQSxLQUFwQixDQUFQO0FBQ0QsR0F2Slk7QUF3SmJpSCxzQkF4SmEsZ0NBd0pRekQsSUF4SlIsRUF3SmM7QUFDekIsUUFBTWdELFFBQVEsR0FBR2hELElBQUksQ0FBQ3ZHLG9CQUFMLENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLENBQWpCO0FBQ0F1SixZQUFRLENBQUMxRyxLQUFULENBQWVvSCxNQUFmLEdBQXdCVixRQUFRLENBQUNXLFlBQVQsR0FBd0IsRUFBeEIsR0FBNkIsSUFBckQ7QUFDRDtBQTNKWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7Ozs7OztBQUVBLElBQUk1UCxpQkFBSixDQUFlO0FBQ2JxRCxJQUFFLEVBQUVWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsQ0FEUztBQUVickMsUUFBTSxFQUFFO0FBQ05DLE9BQUcsRUFBRTtBQUNILHNCQUFnQjtBQURiLEtBREM7QUFJTnFELE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFDTCx1QkFBZSxRQURWO0FBRUwsc0JBQWMsUUFGVDtBQUdMLHdCQUFnQjtBQUhYO0FBREo7QUFKQyxHQUZLO0FBZWIrTCxNQUFJLEVBQUUsRUFmTztBQWlCYnZOLFVBakJhLHNCQWlCRjtBQUFBOztBQUNUckMsdUJBQU93QixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsUUFBUSxFQUFJO0FBQ3RDLFVBQUksQ0FBQ0EsUUFBRCxJQUFhLENBQUNBLFFBQVEsQ0FBQ21PLEVBQTNCLEVBQStCO0FBQy9CLFVBQU1DLFdBQVcsR0FBR3BPLFFBQVEsQ0FBQ21PLEVBQVQsQ0FBWUQsSUFBaEM7O0FBQ0EsV0FBSyxJQUFJdE4sR0FBVCxJQUFnQndOLFdBQWhCLEVBQTZCO0FBQzNCLGFBQUksQ0FBQ0YsSUFBTCxDQUFVdE4sR0FBVixJQUFpQkksUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVVMLEdBQWxDLENBQWpCO0FBQ0EsWUFBSXdOLFdBQVcsQ0FBQ3hOLEdBQUQsQ0FBWCxDQUFpQnlOLFFBQXJCLEVBQStCLEtBQUksQ0FBQ0MsSUFBTCxDQUFVMU4sR0FBVixFQUEvQixLQUNLLEtBQUksQ0FBQzJOLEtBQUwsQ0FBVzNOLEdBQVg7QUFDTjtBQUNGLEtBUkQ7QUFTRCxHQTNCWTtBQTZCYjBOLE1BN0JhLGdCQTZCUjFOLEdBN0JRLEVBNkJIO0FBQ1IsU0FBS3NOLElBQUwsQ0FBVXROLEdBQVYsRUFBZU8sU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsYUFBaEM7QUFDRCxHQS9CWTtBQWdDYmtOLE9BaENhLGlCQWdDUDNOLEdBaENPLEVBZ0NGO0FBQ1QsU0FBS3NOLElBQUwsQ0FBVXROLEdBQVYsRUFBZU8sU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsYUFBN0I7QUFDRCxHQWxDWTtBQW1DYkksUUFuQ2Esa0JBbUNOMEIsQ0FuQ00sRUFtQ0h4QixFQW5DRyxFQW1DQztBQUNaQSxNQUFFLEdBQUdBLEVBQUUsQ0FBQzhNLFFBQUgsS0FBZ0IsSUFBaEIsR0FBdUI5TSxFQUF2QixHQUE0QkEsRUFBRSxDQUFDMEIsVUFBcEM7QUFDQSxRQUFNMEQsRUFBRSxHQUFHcEYsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixhQUFoQixDQUFYO0FBQ0EsUUFBTS9DLEdBQUcsR0FBR2tHLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTLElBQVQsRUFBZWtILEdBQWYsRUFBWjtBQUNBLFFBQU1DLEtBQUssR0FBRzFOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QjZGLEVBQXhCLENBQWQ7QUFDQTRILFNBQUssQ0FBQ3ZOLFNBQU4sQ0FBZ0JLLE1BQWhCLENBQXVCLGFBQXZCO0FBQ0EsU0FBS2pDLElBQUwsQ0FBVSxxQkFBVixFQUFpQ3FCLEdBQWpDLEVBQXNDLENBQUM4TixLQUFLLENBQUN2TixTQUFOLENBQWdCZ0MsUUFBaEIsQ0FBeUIsYUFBekIsQ0FBdkM7QUFDRCxHQTFDWTtBQTJDYndMLHVCQTNDYSxtQ0EyQ1c7QUFDdEJ4UCxTQUFLLENBQUMyRSxJQUFOLENBQVc5QyxRQUFRLENBQUNlLHNCQUFULENBQWdDLFlBQWhDLENBQVgsRUFDRzBDLE9BREgsQ0FDVyxVQUFBN0QsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ08sU0FBSixDQUFjRSxNQUFkLENBQXFCLGlCQUFyQixDQUFKO0FBQUEsS0FEZDtBQUVEO0FBOUNZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSWhELGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOQyxPQUFHLEVBQUU7QUFDSCxzQkFBZ0I7QUFEYixLQURDO0FBSU5xRCxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBQ0wseUJBQWlCLFdBRFo7QUFFTCxvQkFBWTtBQUZQO0FBREo7QUFKQyxHQUZLO0FBY2JSLFFBZGEsa0JBY041QyxLQWRNLEVBY0M7QUFBQTs7QUFDWixRQUFJQSxLQUFLLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFOLENBQWNMLEtBQWQsQ0FBZCxFQUFvQztBQUNsQyxVQUFNNlAsSUFBSSxHQUFHN1AsS0FBSyxDQUFDOFAsR0FBTixHQUFZOVAsS0FBSyxDQUFDOFAsR0FBTixDQUFVdEgsS0FBVixDQUFnQixHQUFoQixDQUFaLEdBQW1DLEVBQWhEO0FBQ0F2RyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NlLFNBQWhDLEdBQTRDLEVBQTVDO0FBQ0E0TSxVQUFJLENBQUNuSyxPQUFMLENBQWEsVUFBQW9LLEdBQUc7QUFBQSxlQUFJLEtBQUksQ0FBQ0MsU0FBTCxDQUFlRCxHQUFmLENBQUo7QUFBQSxPQUFoQjtBQUNEO0FBQ0YsR0FwQlk7QUFxQmJDLFdBckJhLHFCQXFCSEQsR0FyQkcsRUFxQkU7QUFDYixRQUFNekIsU0FBUyxHQUFHcE0sUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBQ0EsUUFBTVMsRUFBRSxHQUFHVixRQUFRLENBQUMwRixhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxRQUFNcUksR0FBRyxHQUFHL04sUUFBUSxDQUFDMEYsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0EsUUFBTXNJLENBQUMsR0FBR2hPLFFBQVEsQ0FBQ2tKLGNBQVQsQ0FBd0JqRCxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsS0FBcEIsQ0FBeEIsQ0FBVjtBQUNBeEYsTUFBRSxDQUFDbUYsU0FBSCxHQUFlLGlDQUFmO0FBQ0FrSSxPQUFHLENBQUNsSSxTQUFKLEdBQWdCLGNBQWhCO0FBQ0FrSSxPQUFHLENBQUNqTSxZQUFKLENBQWlCLFVBQWpCLEVBQTZCK0wsR0FBN0I7QUFDQW5OLE1BQUUsQ0FBQ00sU0FBSCxHQUFlNk0sR0FBZjtBQUNBRSxPQUFHLENBQUM1SCxXQUFKLENBQWdCNkgsQ0FBaEI7QUFDQXROLE1BQUUsQ0FBQ3lGLFdBQUgsQ0FBZTRILEdBQWY7QUFDQTNCLGFBQVMsQ0FBQ2pHLFdBQVYsQ0FBc0J6RixFQUF0QjtBQUNELEdBakNZO0FBa0NidU4sUUFsQ2Esb0JBa0NKO0FBQUE7O0FBQ1AsUUFBTUMsR0FBRyxHQUFHbE8sUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQVo7QUFDQSxRQUFJNE4sR0FBRyxHQUFHSyxHQUFHLENBQUNuSSxLQUFKLENBQVVvSSxJQUFWLEVBQVY7QUFDQSxRQUFJLENBQUNOLEdBQUwsRUFBVTtBQUNWLFNBQUt0UCxJQUFMLENBQVUsU0FBVixFQUFxQnNQLEdBQXJCLEVBQTBCdlEsbUJBQU9TLEtBQWpDO0FBQ0FtUSxPQUFHLENBQUNuSSxLQUFKLEdBQVksRUFBWjtBQUNBOEgsT0FBRyxDQUFDdEgsS0FBSixDQUFVLEdBQVYsRUFBZTlDLE9BQWYsQ0FBdUIsVUFBQW9LLEdBQUc7QUFBQSxhQUFJLE1BQUksQ0FBQ0MsU0FBTCxDQUFlRCxHQUFmLENBQUo7QUFBQSxLQUExQjtBQUNELEdBekNZO0FBMENiTyxXQTFDYSxxQkEwQ0hsTSxDQTFDRyxFQTBDQXhCLEVBMUNBLEVBMENJO0FBQ2YsU0FBS25DLElBQUwsQ0FBVSxZQUFWLEVBQXdCbUMsRUFBRSxDQUFDaUMsWUFBSCxDQUFnQixVQUFoQixDQUF4QixFQUFxRHJGLG1CQUFPUyxLQUE1RDtBQUNBMkMsTUFBRSxDQUFDMEIsVUFBSCxDQUFjQSxVQUFkLENBQXlCdUssV0FBekIsQ0FBcUNqTSxFQUFFLENBQUMwQixVQUF4QztBQUNEO0FBN0NZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSS9FLGlCQUFKLENBQWU7QUFDYnFELElBQUUsRUFBRVYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBRFM7QUFFYnJDLFFBQU0sRUFBRTtBQUNOc0QsT0FBRyxFQUFFO0FBQ0g0QyxZQUFNLEVBQUU7QUFDTixzQkFBYztBQURSO0FBREw7QUFEQyxHQUZLO0FBVWJ1SyxPQUFLLEVBQUUsU0FWTTtBQVliMU8sVUFaYSxzQkFZRjtBQUFBOztBQUNUckMsdUJBQU93QixHQUFQLENBQVcsVUFBWCxFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsUUFBUSxFQUFJO0FBQ3RDLFVBQU1xUCxLQUFLLEdBQUdyUCxRQUFRLElBQUlBLFFBQVEsQ0FBQ21PLEVBQXJCLElBQTJCbk8sUUFBUSxDQUFDbU8sRUFBVCxDQUFZa0IsS0FBdkMsR0FBK0NyUCxRQUFRLENBQUNtTyxFQUFULENBQVlrQixLQUEzRCxHQUFtRSxTQUFqRjtBQUNBck8sY0FBUSxDQUFDQyxjQUFULGtCQUFrQ29PLEtBQWxDLEdBQTJDaEksT0FBM0MsR0FBcUQsSUFBckQ7O0FBQ0EsV0FBSSxDQUFDaUksTUFBTCxDQUFZRCxLQUFaO0FBQ0QsS0FKRDtBQUtELEdBbEJZO0FBb0JiRSxVQXBCYSxvQkFvQkpyTSxDQXBCSSxFQW9CRHhCLEVBcEJDLEVBb0JHO0FBQ2QsUUFBTTJOLEtBQUssR0FBRzNOLEVBQUUsQ0FBQ2lDLFlBQUgsQ0FBZ0IsWUFBaEIsQ0FBZDtBQUNBLFNBQUtwRSxJQUFMLENBQVUsdUJBQVYsRUFBbUM4UCxLQUFuQztBQUNBLFNBQUtDLE1BQUwsQ0FBWUQsS0FBWjtBQUNELEdBeEJZO0FBeUJiQyxRQXpCYSxrQkF5Qk5ELEtBekJNLEVBeUJDO0FBQ1osU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0FyTyxZQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDNEYsU0FBOUMsaUNBQWlGd0ksS0FBakY7QUFDRDtBQTVCWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztxQkFFZSxJQUFJN1EsZ0JBQUosQ0FBYztBQUMzQnNELE1BQUksRUFBRSxTQURxQjtBQUUzQjZDLE1BQUksRUFBRSxZQUZxQjtBQUczQm1DLElBQUUsRUFBRXBCLElBQUksQ0FBQzhKLE1BQUwsR0FBY0MsUUFBZCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FIdUI7QUFJM0I5USxRQUFNLEVBQUU7QUFDTitRLGNBQVUsRUFBRSxDQUNWLG1CQURVLEVBRVYsdUJBRlUsRUFHVixtQkFIVSxFQUlWLDBCQUpVLEVBS1Ysa0JBTFUsRUFNVix5QkFOVSxFQU9WLGNBUFUsRUFRVixlQVJVLEVBU1Ysc0JBVFUsRUFVViwyQkFWVSxFQVdWLGNBWFUsRUFZVixjQVpVLEVBYVYsY0FiVSxFQWNWLDRCQWRVLEVBZVYsc0JBZlUsRUFnQlYsbUJBaEJVLEVBaUJWLFlBakJVLEVBa0JWLFNBbEJVLEVBbUJWLHFCQW5CVSxFQW9CVixnQkFwQlUsRUFxQlYsbUJBckJVLEVBc0JWLHFCQXRCVSxFQXVCVix5QkF2QlUsRUF3QlYsdUJBeEJVO0FBRE47QUFKbUIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0ZmLHlDOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBZTtBQUNiQyxTQUFPLEVBQUVqUSxPQUFPLENBQUNrUSxPQUFSLENBQWdCQyxXQUFoQixHQUE4QkYsT0FEMUI7QUFFYjVQLFVBQVEsRUFBQztBQUNQK1AsYUFBUyxFQUFFO0FBQ1RDLE9BQUMsRUFBRSxDQUFDLGdCQUFELEVBQW1CLElBQW5CLENBRE07QUFFVEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FGTTtBQUdUeEssT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FITTtBQUlUOEMsT0FBQyxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FKTTtBQUtURCxPQUFDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUxNO0FBTVQ0SCxPQUFDLEVBQUUsQ0FBQyxVQUFELEVBQWEsS0FBYixFQUFvQixJQUFwQixDQU5NO0FBT1QsWUFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxDQVBHO0FBUVRsSyxPQUFDLEVBQUUsQ0FBQyxFQUFELEVBQUssSUFBTCxFQUFXLElBQVgsQ0FSTTtBQVNUbUssT0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxJQUFYLENBVE07QUFVVEMsT0FBQyxFQUFFLENBQUMsVUFBRCxFQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FWTTtBQVdULFdBQUssQ0FBQyxFQUFELEVBQUssSUFBTCxDQVhJO0FBWVQsV0FBSyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBWkk7QUFhVEMsYUFBTyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsQ0FiQTtBQWNUQyxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQixDQWRGO0FBZVRuQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsQ0FmSztBQWdCVG9DLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMO0FBaEJLLEtBREo7QUFtQlAvUCxXQUFPLEVBQUU7QUFDUCxXQUFLO0FBQUVvRyxhQUFLLEVBQUU7QUFBVCxPQURFO0FBRVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZFO0FBR1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUhFO0FBSVAsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUpFO0FBS1AsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxFO0FBTVBaLE9BQUMsRUFBRTtBQUFFWSxhQUFLLEVBQUU7QUFBVDtBQU5JLEtBbkJGO0FBMkJQeEcsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxJQURIO0FBRVBtUSxnQkFBVSxFQUFFLEtBRkw7QUFHUEMsZ0JBQVUsRUFBRSxJQUhMO0FBSVBuTixXQUFLLEVBQUUsS0FKQTtBQUtQb04sWUFBTSxFQUFFLE9BTEQ7QUFNUEMsY0FBUSxFQUFFLE1BTkg7QUFPUEMsVUFBSSxFQUFFLE1BUEM7QUFRUEMsY0FBUSxFQUFFLElBUkg7QUFTUEMsWUFBTSxFQUFFLFdBVEQ7QUFVUEMsVUFBSSxFQUFFLE1BVkM7QUFXUEMsUUFBRSxFQUFFLEVBWEc7QUFZUEMsZ0JBQVUsRUFBRSxJQVpMO0FBYVBDLGVBQVMsRUFBRTtBQWJKLEtBM0JGO0FBMENQalIsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxJQURIO0FBRUxpUixZQUFNLEVBQUUsSUFGSDtBQUdMQyxhQUFPLEVBQUU7QUFISixLQTFDQTtBQStDUG5NLFFBQUksRUFBRTtBQUNKb00sWUFBTSxFQUFFLElBREo7QUFFSkMsY0FBUSxFQUFFLElBRk47QUFHSkMsaUJBQVcsRUFBRSxJQUhUO0FBSUpDLGdCQUFVLEVBQUUsS0FKUjtBQUtKQyxtQkFBYSxFQUFFLEtBTFg7QUFNSkMsa0JBQVksRUFBRSxFQU5WO0FBT0pDLGVBQVMsRUFBRSxLQVBQO0FBUUpDLGlCQUFXLEVBQUUsSUFSVDtBQVNKQyxpQkFBVyxFQUFFLElBVFQ7QUFVSkMsYUFBTyxFQUFFLElBVkw7QUFXSkMsaUJBQVcsRUFBRSxLQVhUO0FBWUpDLGVBQVMsRUFBRSxJQVpQO0FBYUpDLGFBQU8sRUFBRSxJQWJMO0FBY0pDLGNBQVEsRUFBRSxLQWROO0FBZUpDLGtCQUFZLEVBQUUsS0FmVjtBQWdCSkMsYUFBTyxFQUFFLFdBaEJMO0FBaUJKbE4sZ0JBQVUsRUFBRSxPQWpCUjtBQWtCSm1OLGlCQUFXLEVBQUUsSUFsQlQ7QUFtQkpDLGNBQVEsRUFBRTtBQW5CTixLQS9DQztBQW9FUG5FLE1BQUUsRUFBRTtBQUNGRCxVQUFJLEVBQUU7QUFDSnFFLFlBQUksRUFBRTtBQUFFbEUsa0JBQVEsRUFBRTtBQUFaLFNBREY7QUFFSk8sWUFBSSxFQUFFO0FBQUVQLGtCQUFRLEVBQUU7QUFBWixTQUZGO0FBR0ozQixhQUFLLEVBQUU7QUFBRTJCLGtCQUFRLEVBQUU7QUFBWixTQUhIO0FBSUo3TixlQUFPLEVBQUU7QUFBRTZOLGtCQUFRLEVBQUU7QUFBWixTQUpMO0FBS0ptRSxlQUFPLEVBQUU7QUFBRW5FLGtCQUFRLEVBQUU7QUFBWixTQUxMO0FBTUpyRyxhQUFLLEVBQUU7QUFBRXFHLGtCQUFRLEVBQUU7QUFBWixTQU5IO0FBT0pvRSxhQUFLLEVBQUU7QUFBRXBFLGtCQUFRLEVBQUU7QUFBWixTQVBIO0FBUUpxRSxjQUFNLEVBQUU7QUFBRXJFLGtCQUFRLEVBQUU7QUFBWjtBQVJKLE9BREo7QUFXRmdCLFdBQUssRUFBRTtBQVhMO0FBcEVHLEdBRkk7QUFvRmJqUCxTQUFPLEVBQUU7QUFDUHVTLFdBQU8sRUFBRTtBQURGLEdBcEZJO0FBdUZialMsV0FBUyxFQUFFLEVBdkZFO0FBd0Zic0UsTUFBSSxFQUFFO0FBQ0poRixZQUFRLEVBQUUsS0FETjtBQUVKSSxXQUFPLEVBQUUsS0FGTDtBQUdKTSxhQUFTLEVBQUU7QUFIUDtBQXhGTyxDOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBQTtBQUVia1Msc0JBQW9CLEVBQUUsRUFGVDtBQUliQyxpQkFBZSxFQUFFLEVBSko7QUFNYnhKLGFBQVcsRUFBRTtBQUNYeUosYUFBUyxFQUFFLFNBREE7QUFFWEMsU0FBSyxFQUFFLFNBRkk7QUFHWEMsVUFBTSxFQUFFLFNBSEc7QUFJWEMsVUFBTSxFQUFFLFNBSkc7QUFLWEMsT0FBRyxFQUFFLFNBTE07QUFNWEMsVUFBTSxFQUFFLFNBTkc7QUFPWEMsUUFBSSxFQUFFLFNBUEs7QUFRWEMsU0FBSyxFQUFFO0FBUkk7QUFOQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLElBQU1wVixLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFTcVYsR0FBVCxFQUFjO0FBQzFCLE1BQU1DLE1BQU0sR0FBR3BVLEtBQUssQ0FBQ0MsT0FBTixDQUFja1UsR0FBZCxJQUFxQixFQUFyQixHQUEwQixFQUF6QztBQUNBLE1BQUlwSSxHQUFKOztBQUNBLE9BQUssSUFBSXNJLElBQVQsSUFBaUJGLEdBQWpCLEVBQXNCO0FBQ3BCLFFBQUlBLEdBQUcsQ0FBQ0csY0FBSixDQUFtQkQsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QnRJLFNBQUcsR0FBR29JLEdBQUcsQ0FBQ0UsSUFBRCxDQUFUOztBQUNBLFVBQUl0SSxHQUFHLEtBQUssSUFBUixJQUFnQixRQUFPQSxHQUFQLE1BQWUsUUFBbkMsRUFBNkM7QUFDM0NxSSxjQUFNLENBQUNDLElBQUQsQ0FBTixHQUFldlYsS0FBSyxDQUFDaU4sR0FBRCxDQUFwQjtBQUNELE9BRkQsTUFHRXFJLE1BQU0sQ0FBQ0MsSUFBRCxDQUFOLEdBQWV0SSxHQUFmO0FBQ0g7QUFDRjs7QUFDRCxTQUFPcUksTUFBUDtBQUNELENBYkQ7O1FBZVN0VixLLEdBQUFBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYUksVTs7UUFBQUEsVTs7O0FBRVgsc0JBQVlxVixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2ZBLE9BQUcsQ0FBQ0MsTUFBSixHQUFhLEVBQWI7QUFDQUQsT0FBRyxDQUFDRSxXQUFKLEdBQWtCLEVBQWxCO0FBRUEsb0ZBQU1GLEdBQU47QUFFQSxVQUFLRyxvQkFBTCxJQUE2QixNQUFLQyxZQUFMLEVBQTdCO0FBQ0EsS0FBQyxNQUFLQyxTQUFOLElBQW1CLE1BQUtDLFlBQUwsRUFBbkI7QUFQZTtBQVFoQjs7OzttQ0FDY0MsTSxFQUFRdFAsSSxFQUFNekIsQyxFQUFHO0FBQzlCLFVBQUl4QixFQUFFLEdBQUd3QixDQUFDLENBQUNxUSxNQUFYO0FBQUEsVUFDSVcsUUFESjtBQUFBLFVBQ2NDLElBRGQ7QUFBQSxVQUNvQnhSLElBRHBCO0FBQUEsVUFDMEJ5UixDQUQxQjtBQUFBLFVBQzZCQyxJQUQ3QjtBQUFBLFVBQ21DQyxPQURuQztBQUFBLFVBQzRDQyxLQUQ1Qzs7QUFHQSxXQUFLTCxRQUFMLElBQWlCRCxNQUFqQixFQUF5QjtBQUN2QkcsU0FBQyxHQUFHRixRQUFRLENBQUMsQ0FBRCxDQUFaO0FBQ0FDLFlBQUksR0FBR0QsUUFBUDtBQUNBRyxZQUFJLEdBQUdELENBQUMsS0FBSyxHQUFiO0FBQ0FFLGVBQU8sR0FBR0YsQ0FBQyxLQUFLLEdBQWhCO0FBQ0FHLGFBQUssR0FBR0gsQ0FBQyxLQUFLLEdBQWQ7QUFFQSxZQUFJQyxJQUFJLElBQUlDLE9BQVosRUFBcUJKLFFBQVEsR0FBR0EsUUFBUSxDQUFDMUssTUFBVCxDQUFnQixDQUFoQixDQUFYOztBQUVyQixZQUFJK0ssS0FBSyxJQUNMRCxPQUFPLElBQUk1UyxFQUFFLENBQUNQLFNBQUgsQ0FBYWdDLFFBQWIsQ0FBc0IrUSxRQUF0QixDQURYLElBRUFHLElBQUksSUFBSTNTLEVBQUUsQ0FBQ29GLEVBQUgsS0FBVW9OLFFBRmxCLElBR0F4UyxFQUFFLENBQUM4TSxRQUFILENBQVlsRixXQUFaLE9BQThCNEssUUFIbEMsRUFJRTtBQUVBdlIsY0FBSSxHQUFHc1IsTUFBTSxDQUFDRSxJQUFELENBQWI7QUFFQSxjQUFJLE9BQU94UixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxJQUFJLENBQUNPLENBQUQsRUFBSXhCLEVBQUosQ0FBSixDQUFoQyxLQUNLLElBQUksS0FBS2lCLElBQUwsQ0FBSixFQUFnQixLQUFLQSxJQUFMLEVBQVdPLENBQVgsRUFBY3hCLEVBQWQ7QUFFckI7QUFDRDtBQUNGO0FBQ0Y7OzttQ0FDYztBQUFBOztBQUNiLFdBQUtaLEVBQUwsQ0FBUSxlQUFSLEVBQXlCLFVBQUFBLEVBQUUsRUFBSTtBQUM3QixZQUFJQSxFQUFKLEVBQVEsTUFBSSxDQUFDZ1QsWUFBTCxHQUFSLEtBQ0ssTUFBSSxDQUFDVSxlQUFMO0FBQ04sT0FIRDtBQUlEOzs7Z0NBQ1c3UCxJLEVBQU1oQyxJLEVBQU1qQixFLEVBQUk7QUFDMUJBLFFBQUUsR0FBR0EsRUFBRSxJQUFJLEtBQUtBLEVBQWhCO0FBQ0EsVUFBTStTLE9BQU8sR0FBRyxPQUFPOVIsSUFBUCxLQUFnQixVQUFoQixHQUE2QkEsSUFBN0IsR0FBb0MsS0FBS0EsSUFBTCxDQUFwRDtBQUVBakIsUUFBRSxDQUFDZ1QsZ0JBQUgsQ0FBb0IvUCxJQUFwQixFQUEwQjhQLE9BQTFCLEVBQW1DLEtBQW5DOztBQUVBLFVBQUkvUyxFQUFFLEtBQUssS0FBS0EsRUFBaEIsRUFBb0I7QUFDbEIsWUFBSSxDQUFDLEtBQUtpUyxNQUFMLENBQVloUCxJQUFaLENBQUwsRUFBd0IsS0FBS2dQLE1BQUwsQ0FBWWhQLElBQVosSUFBb0IsRUFBcEI7O0FBQ3hCLGFBQUtnUCxNQUFMLENBQVloUCxJQUFaLEVBQWtCckYsSUFBbEIsQ0FBdUJtVixPQUF2QjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtiLFdBQUwsQ0FBaUJ0VSxJQUFqQixDQUFzQixDQUFDb0MsRUFBRCxFQUFLaUQsSUFBTCxFQUFXOFAsT0FBWCxDQUF0QjtBQUNEO0FBQ0Y7OzttQ0FDYztBQUNiLFVBQUk3VixNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFBQSxVQUNJK1YsU0FESjtBQUFBLFVBQ2VqVCxFQURmO0FBQUEsVUFDbUJ1UyxNQURuQjtBQUFBLFVBQzJCdFAsSUFEM0I7QUFBQSxVQUNpQzhQLE9BRGpDO0FBR0EsVUFBSSxDQUFDN1YsTUFBRCxJQUFXLEVBQUUrVixTQUFTLEdBQUcvVixNQUFNLENBQUNzRCxHQUFyQixDQUFYLElBQXdDLEVBQUVSLEVBQUUsR0FBRyxLQUFLQSxFQUFaLENBQTVDLEVBQTZELE9BQU8sS0FBUDs7QUFFN0QsV0FBS2lELElBQUwsSUFBYWdRLFNBQWIsRUFBd0I7QUFDdEJWLGNBQU0sR0FBR1UsU0FBUyxDQUFDaFEsSUFBRCxDQUFsQjtBQUNBOFAsZUFBTyxHQUFHLEtBQUtHLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtDLGNBQXRCLEVBQXNDWixNQUF0QyxFQUE4Q3RQLElBQTlDLENBQVY7QUFDQWpELFVBQUUsQ0FBQ2dULGdCQUFILENBQW9CL1AsSUFBcEIsRUFBMEI4UCxPQUExQixFQUFtQyxLQUFuQztBQUNBLFlBQUksQ0FBQyxLQUFLZCxNQUFMLENBQVloUCxJQUFaLENBQUwsRUFBd0IsS0FBS2dQLE1BQUwsQ0FBWWhQLElBQVosSUFBb0IsRUFBcEI7O0FBQ3hCLGFBQUtnUCxNQUFMLENBQVloUCxJQUFaLEVBQWtCckYsSUFBbEIsQ0FBdUJtVixPQUF2QjtBQUNEO0FBQ0Y7OztzQ0FDaUI7QUFDaEIsVUFBSTlQLElBQUosRUFBVWdQLE1BQVYsRUFBa0JuTSxDQUFsQjs7QUFFQSxXQUFLN0MsSUFBTCxJQUFhLEtBQUtnUCxNQUFsQixFQUEwQjtBQUN4QkEsY0FBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWWhQLElBQVosQ0FBVDtBQUNBNkMsU0FBQyxHQUFHbU0sTUFBTSxDQUFDN04sTUFBWDs7QUFDQSxlQUFPMEIsQ0FBQyxFQUFSLEVBQVk7QUFDVixlQUFLOUYsRUFBTCxDQUFRb1QsbUJBQVIsQ0FBNEJuUSxJQUE1QixFQUFrQ2dQLE1BQU0sQ0FBQ25NLENBQUQsQ0FBeEMsRUFBNkMsS0FBN0M7O0FBQ0FtTSxnQkFBTSxDQUFDL0YsTUFBUCxDQUFjcEcsQ0FBZCxFQUFpQixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSXVOLE1BQU0sR0FBRyxLQUFLbkIsV0FBbEI7QUFBQSxVQUErQm5NLENBQUMsR0FBRyxDQUFuQztBQUFBLFVBQXNDdU4sR0FBdEM7QUFDQXhOLE9BQUMsR0FBR3VOLE1BQU0sQ0FBQ2pQLE1BQVg7O0FBRUEsYUFBTzJCLENBQUMsR0FBR0QsQ0FBWCxFQUFjQyxDQUFDLEVBQWYsRUFBbUI7QUFDakJ1TixXQUFHLEdBQUdELE1BQU0sQ0FBQ3ROLENBQUQsQ0FBWjtBQUNBdU4sV0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPRixtQkFBUCxDQUEyQkUsR0FBRyxDQUFDLENBQUQsQ0FBOUIsRUFBbUNBLEdBQUcsQ0FBQyxDQUFELENBQXRDLEVBQTJDLEtBQTNDO0FBQ0Q7QUFDRjs7OztFQTNGNkI1VyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaEM7O0FBRUEsSUFBTU0sYUFBYSxHQUFHLElBQUlOLGVBQUosQ0FBWTtBQUNoQ3VDLFVBRGdDLHNCQUNyQjtBQUFBOztBQUNUc1UsVUFBTSxDQUFDUCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBUSxLQUFLLEVBQUk7QUFDeEMsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZTdOLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEJrSCxHQUExQixFQUFiOztBQUNBLFVBQUksQ0FBQyxlQUFELEVBQWtCLGdCQUFsQixFQUFvQyxlQUFwQyxFQUFxRCxrQkFBckQsRUFBeUUvRyxRQUF6RSxDQUFrRnlOLElBQWxGLENBQUosRUFBNkY7QUFDM0YsYUFBSSxDQUFDNVYsSUFBTCxDQUFVLHVCQUFWLEVBQW1DO0FBQ2pDOFYsaUJBQU8sRUFBRUgsS0FBSyxDQUFDRyxPQURrQjtBQUVqQ0Msa0JBQVEsRUFBRUosS0FBSyxDQUFDRSxRQUFOLENBQWU3TixLQUFmLENBQXFCLEdBQXJCLEVBQTBCa0gsR0FBMUIsR0FBZ0NsSCxLQUFoQyxDQUFzQyxHQUF0QyxFQUEyQ2dPLEtBQTNDLEtBQXFELEdBQXJELEdBQTJETCxLQUFLLENBQUNNLE1BQWpFLEdBQTBFLEdBQTFFLEdBQWdGTixLQUFLLENBQUNPLEtBRi9EO0FBR2pDQyxjQUFJLEVBQUcsSUFBSS9KLElBQUosRUFBRCxDQUFhZ0ssT0FBYjtBQUgyQixTQUFuQztBQUtEO0FBQ0YsS0FURCxFQVNHLEtBVEg7QUFVRDtBQVorQixDQUFaLENBQXRCOztxQkFlZWpYLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqQkEsVUFBU2tYLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUNsQyxPQUFLLElBQUlwTyxDQUFULElBQWNvTyxJQUFkO0FBQ0UsUUFBSSxDQUFDRCxJQUFJLENBQUNuTyxDQUFELENBQVQsRUFBY21PLElBQUksQ0FBQ25PLENBQUQsQ0FBSixHQUFVb08sSUFBSSxDQUFDcE8sQ0FBRCxDQUFkO0FBRGhCOztBQUdBLFNBQU9tTyxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQsSUFBTTFYLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUVqQyxTQUFPeUIsT0FBTyxDQUFDdU8sSUFBUixDQUFhNEgsS0FBYixDQUFtQjtBQUFFQyxpQkFBYSxFQUFFLElBQWpCO0FBQXVCN1YsVUFBTSxFQUFFO0FBQS9CLEdBQW5CLEVBQTBESCxJQUExRCxDQUErRCxVQUFBbU8sSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQyxDQUFELENBQVI7QUFBQSxHQUFuRSxDQUFQO0FBQ0QsQ0FIRDs7UUFLU2hRLGUsR0FBQUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFQsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU2tPLEdBQVQsRUFBYztBQUM5QixNQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLEVBQVA7QUFDVixNQUFNbUosQ0FBQyxHQUFHbkosR0FBRyxDQUFDb0osV0FBSixDQUFnQixHQUFoQixDQUFWO0FBQ0EsTUFBSUQsQ0FBQyxLQUFLLENBQUMsQ0FBWCxFQUFjLE9BQU9uSixHQUFQLENBQWQsS0FDSyxPQUFPQSxHQUFHLENBQUNyRCxNQUFKLENBQVcsQ0FBWCxFQUFjd00sQ0FBZCxDQUFQO0FBQ04sQ0FMRDs7UUFPU3JYLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3NDTSxZQUFXO0FBQ3hCcUMsVUFBUSxDQUFDMFQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDO0FBQUEsV0FBTXdCLGlCQUFpQixFQUF2QjtBQUFBLEdBQTlDLEVBQXlFO0FBQ3ZFQyxXQUFPLEVBQUUsS0FEOEQ7QUFFdkVDLFdBQU8sRUFBRSxJQUY4RDtBQUd2RUMsUUFBSSxFQUFFO0FBSGlFLEdBQXpFO0FBS0QsQzs7QUFuREQ7Ozs7Ozs7O0FBUUEsU0FBU0gsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSXhVLEVBQUosRUFBUTRVLElBQVIsRUFBY0MsT0FBZCxDQUQyQixDQUUzQjs7QUFDQXZWLFVBQVEsQ0FBQ3dWLGVBQVQsQ0FBeUIxVCxZQUF6QixDQUFzQyxNQUF0QyxFQUE4Q25ELE9BQU8sQ0FBQzRMLElBQVIsQ0FBYWtMLGFBQWIsR0FBNkJ4SyxPQUE3QixDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUE5QyxFQUgyQixDQUkzQjs7QUFDQSxNQUFNeUssWUFBWSxHQUFHMVYsUUFBUSxDQUFDMlYsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHNVYsUUFBUSxDQUFDMlYsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXJCO0FBTjJCO0FBQUE7QUFBQTs7QUFBQTtBQVEzQix5QkFBVUQsWUFBViw4SEFBd0I7QUFBcEJoVixRQUFvQjtBQUN0QjZVLGFBQU8sR0FBRzdVLEVBQUUsQ0FBQzZVLE9BQWI7QUFDQSxVQUFNTSxNQUFNLEdBQUdOLE9BQU8sQ0FBQ00sTUFBdkI7O0FBRUEsVUFBSUEsTUFBSixFQUFZO0FBQ1ZQLFlBQUksR0FBRzNXLE9BQU8sQ0FBQzRMLElBQVIsQ0FBYUMsVUFBYixDQUF3QnFMLE1BQXhCLEVBQWdDLEVBQWhDLENBQVA7O0FBRUEsWUFBR1AsSUFBSSxJQUFJQSxJQUFJLElBQUksSUFBbkIsRUFBeUI7QUFDdkI1VSxZQUFFLENBQUNzRixXQUFILEdBQWlCc1AsSUFBakI7QUFDRDtBQUNGO0FBQ0Y7QUFuQjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBb0IzQiwwQkFBVU0sWUFBVixtSUFBd0I7QUFBcEJsVixRQUFvQjtBQUN0QjZVLGFBQU8sR0FBRzdVLEVBQUUsQ0FBQzZVLE9BQWI7QUFFQSxPQUFDLE9BQUQsRUFBVSxhQUFWLEVBQXlCLE1BQXpCLEVBQWlDOVIsT0FBakMsQ0FBeUMsVUFBQXFTLElBQUksRUFBSTtBQUMvQyxZQUFNQyxRQUFRLEdBQUdSLE9BQU8sQ0FBQyxTQUFTTyxJQUFWLENBQXhCOztBQUVBLFlBQUlDLFFBQUosRUFBYztBQUNaVCxjQUFJLEdBQUczVyxPQUFPLENBQUM0TCxJQUFSLENBQWFDLFVBQWIsQ0FBd0J1TCxRQUF4QixDQUFQOztBQUVBLGNBQUlULElBQUksSUFBSUEsSUFBSSxJQUFJLElBQXBCLEVBQTBCO0FBQ3hCNVUsY0FBRSxDQUFDb0IsWUFBSCxDQUFnQmdVLElBQUksQ0FBQ3hOLFdBQUwsRUFBaEIsRUFBb0NnTixJQUFwQztBQUNEO0FBQ0Y7QUFDRixPQVZEO0FBV0Q7QUFsQzBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQzVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRCxJQUFJVSxNQUFNLEdBQUcsRUFBYjs7Ozs7Ozs7Ozs7dUJBSUtDLEssRUFBT3hDLE8sRUFBUztBQUNqQixVQUFJLENBQUN1QyxNQUFNLENBQUNDLEtBQUQsQ0FBWCxFQUFvQkQsTUFBTSxDQUFDQyxLQUFELENBQU4sR0FBZ0IsRUFBaEI7QUFFcEJELFlBQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWMzWCxJQUFkLENBQW1CbVYsT0FBbkI7QUFDRDs7O3lCQUNJN1YsTSxFQUFpQjtBQUFBOztBQUFBLHdDQUFOc1ksSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCdFksWUFBTSxHQUFHQSxNQUFNLENBQUMySSxLQUFQLENBQWEsR0FBYixDQUFUO0FBRUEsVUFBSUUsQ0FBQyxHQUFHLENBQVI7QUFBQSxVQUFXRCxDQUFDLEdBQUc1SSxNQUFNLENBQUNrSCxNQUF0QjtBQUFBLFVBQThCcVIsS0FBOUI7O0FBRUEsYUFBTzFQLENBQUMsR0FBR0QsQ0FBWCxFQUFjQyxDQUFDLEVBQWYsRUFBbUI7QUFDakIwUCxhQUFLLEdBQUdILE1BQU0sQ0FBQ3BZLE1BQU0sQ0FBQzZJLENBQUQsQ0FBUCxDQUFkO0FBRUEsWUFBSTBQLEtBQUosRUFDRUEsS0FBSyxDQUFDMVMsT0FBTixDQUFjLFVBQUFnUSxPQUFPO0FBQUEsaUJBQUlBLE9BQU8sQ0FBQzJDLEtBQVIsQ0FBYyxLQUFkLEVBQW9CRixJQUFwQixDQUFKO0FBQUEsU0FBckI7QUFDSDtBQUNGOzs7NEJBQ09ELEssRUFBZ0I7QUFBQSx5Q0FBTkMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3RCLFVBQUksS0FBS3ZTLElBQUwsS0FBYyxZQUFsQixFQUFnQztBQUM5QixlQUFPaEYsT0FBTyxDQUFDdU8sSUFBUixDQUFhbUosV0FBYixDQUF5QkgsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSSxLQUFqQyxFQUF3QztBQUFFQyxZQUFFLEVBQUVOLEtBQU47QUFBYU8sY0FBSSxFQUFFO0FBQW5CLFNBQXhDLEVBQW1FO0FBQUVuVCxpQkFBTyxFQUFFNlMsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRN1M7QUFBbkIsU0FBbkUsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8xRSxPQUFPLENBQUNrUSxPQUFSLENBQWdCd0gsV0FBaEIsQ0FBNEI7QUFBRUUsWUFBRSxFQUFFTixLQUFOO0FBQWFDLGNBQUksRUFBRUEsSUFBbkI7QUFBeUJNLGNBQUksRUFBRTtBQUEvQixTQUE1QixXQUF5RSxZQUFNLENBQUUsQ0FBakYsQ0FBUDtBQUNEO0FBQ0Y7OzswQkFDS0MsTyxFQUFTQyxJLEVBQWdCO0FBQUEseUNBQVBDLEtBQU87QUFBUEEsYUFBTztBQUFBOztBQUM3QixhQUFPLFlBQW1CO0FBQUEsMkNBQVBDLEtBQU87QUFBUEEsZUFBTztBQUFBOztBQUN4QixlQUFPRixJQUFJLENBQUNOLEtBQUwsQ0FBV0ssT0FBWCxFQUFvQkUsS0FBSyxDQUFDaFAsTUFBTixDQUFhaVAsS0FBYixDQUFwQixDQUFQO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVheFosTzs7UUFBQUEsTzs7O0FBRVgsbUJBQVlzVixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2Y7O0FBRUEsU0FBS21FLENBQUwsSUFBVW5FLEdBQVY7QUFBZSxZQUFLbUUsQ0FBTCxJQUFVbkUsR0FBRyxDQUFDbUUsQ0FBRCxDQUFiO0FBQWY7O0FBRUEsUUFBSWpaLE1BQU0sR0FBRyxNQUFLQSxNQUFsQjtBQUFBLFFBQ0lrWixTQURKO0FBQUEsUUFDZUQsQ0FEZjtBQUFBLFFBQ2tCM1UsQ0FEbEI7QUFBQSxRQUNxQnVSLE9BRHJCOztBQUdBLFFBQUk3VixNQUFNLEtBQUtrWixTQUFTLEdBQUdsWixNQUFNLENBQUNDLEdBQXhCLENBQVYsRUFBd0M7QUFDdEMsV0FBS3FFLENBQUwsSUFBVTRVLFNBQVYsRUFBcUI7QUFDbkJyRCxlQUFPLEdBQUdxRCxTQUFTLENBQUM1VSxDQUFELENBQW5CO0FBQ0EsWUFBSSxNQUFLdVIsT0FBTCxDQUFKLEVBQ0UsTUFBSzNULEVBQUwsQ0FBUW9DLENBQVIsRUFBVyxNQUFLMFIsS0FBTCxnQ0FBaUIsTUFBS0gsT0FBTCxDQUFqQixDQUFYO0FBQ0g7QUFDRjs7QUFDRCxLQUFDLE1BQUs5VCxRQUFOLElBQWtCLE1BQUtBLFFBQUwsRUFBbEI7QUFmZTtBQWdCaEI7OztFQWxCMEJvWCxxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTXhaLEs7Ozs7O0FBRUosaUJBQVltVixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU1BLEdBQU47QUFDQS9ULFdBQU8sQ0FBQ2tRLE9BQVIsQ0FBZ0JtSSxTQUFoQixDQUEwQkMsV0FBMUIsQ0FBc0MsTUFBS3JELEtBQUwsZ0NBQWlCLE1BQUtzRCxXQUF0QixDQUF0Qzs7QUFDQSxVQUFLQyxvQkFBTDs7QUFIZTtBQUloQjs7OzsyQkFDTXZaLE0sRUFBUTtBQUNiLFdBQUt1WixvQkFBTCxDQUEwQnZaLE1BQU0sQ0FBQ3daLE1BQWpDO0FBQ0Q7Ozt5Q0FDb0J4WixNLEVBQVE7QUFDM0JBLFlBQU0sS0FBTUEsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWXdaLE1BQTNCLENBQU47O0FBRUEsVUFBSXhaLE1BQUosRUFBWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNWLCtCQUFnQkEsTUFBaEIsOEhBQXdCO0FBQUEsZ0JBQWJzRSxDQUFhO0FBQ3RCLGlCQUFLcEMsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLEtBQUswUixLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLeUMsV0FBdEIsRUFBbUNuVSxDQUFuQyxDQUFYO0FBQ0Q7QUFIUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSVg7QUFDRjs7O2dDQUNXbVYsRyxFQUFLN1QsTSxFQUFROFQsWSxFQUFjO0FBQ3JDRCxTQUFHLENBQUNuQixJQUFKLEdBQVdtQixHQUFHLENBQUNuQixJQUFKLElBQVksRUFBdkI7QUFDQSxVQUFJQSxJQUFJLEdBQUcsR0FBR3ZPLE1BQUgsQ0FBVTBQLEdBQUcsQ0FBQ2QsRUFBZCxFQUFrQmMsR0FBRyxDQUFDbkIsSUFBdEIsQ0FBWDtBQUNBLFVBQUksQ0FBQzFTLE1BQUQsSUFBVyxDQUFDQSxNQUFNLENBQUMxQyxJQUF2QixFQUE2Qm9WLElBQUksR0FBR0EsSUFBSSxDQUFDdk8sTUFBTCxDQUFZbkUsTUFBWixFQUFvQjhULFlBQXBCLENBQVA7QUFDN0IsV0FBSy9ZLElBQUwsQ0FBVTZYLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JGLElBQXRCO0FBQ0EsVUFBSW1CLEdBQUcsQ0FBQ2IsSUFBUixFQUFjLE9BQU8sSUFBUCxDQUx1QixDQUtWOztBQUMzQixhQUFPLEtBQVA7QUFDRDs7O2dDQUNXdFUsQyxFQUFZO0FBQ3RCLFVBQU15QixJQUFJLEdBQUcsS0FBS0EsSUFBbEI7O0FBRHNCLHdDQUFOdVMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBRXRCLFVBQUlxQixHQUFHLEdBQUc7QUFBRWhCLFVBQUUsRUFBRXJVLENBQU47QUFBU2dVLFlBQUksRUFBRUE7QUFBZixPQUFWO0FBQ0EsVUFBSXZTLElBQUksS0FBSyxTQUFiLEVBQXdCaEYsT0FBTyxDQUFDa1EsT0FBUixDQUFnQndILFdBQWhCLENBQTRCa0IsR0FBNUIsV0FBdUMsWUFBTSxDQUFFLENBQS9DLEVBQXhCLEtBQ0ssSUFBSTVULElBQUksS0FBSyxZQUFiLEVBQTJCO0FBQzlCLFlBQU02VCxPQUFPLEdBQUd0QixJQUFJLENBQUNBLElBQUksQ0FBQ3BSLE1BQUwsR0FBYyxDQUFmLENBQXBCO0FBQ0EsWUFBSWxGLEdBQUo7O0FBQ0EsWUFBSTRYLE9BQU8sS0FBSzVYLEdBQUcsR0FBRzRYLE9BQU8sQ0FBQzVYLEdBQW5CLENBQVgsRUFBb0M7QUFDbEMsY0FBSUEsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDcEJqQixtQkFBTyxDQUFDdU8sSUFBUixDQUFhNEgsS0FBYixDQUFtQjtBQUFFNVYsb0JBQU0sRUFBRTtBQUFWLGFBQW5CLEVBQXFDSCxJQUFyQyxDQUEwQyxVQUFBbU8sSUFBSSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2hELHNDQUFnQkEsSUFBaEI7QUFBQSxzQkFBU3ROLElBQVQ7QUFDRWpCLHlCQUFPLENBQUN1TyxJQUFSLENBQWFtSixXQUFiLENBQXlCelcsSUFBRyxDQUFDa0csRUFBN0IsRUFBaUN5UixHQUFqQyxFQUFzQztBQUFFbFUsMkJBQU8sRUFBRW1VLE9BQU8sQ0FBQ25VLE9BQVIsSUFBbUI7QUFBOUIsbUJBQXRDLFdBQStFLFlBQU0sQ0FBRSxDQUF2RjtBQURGO0FBRGdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHakQsYUFIRDtBQUlELFdBTEQsTUFLTztBQUNMMUUsbUJBQU8sQ0FBQ3VPLElBQVIsQ0FBYW1KLFdBQWIsQ0FBeUJtQixPQUFPLENBQUM1WCxHQUFqQyxFQUFzQzJYLEdBQXRDLEVBQTJDO0FBQUVsVSxxQkFBTyxFQUFFbVUsT0FBTyxDQUFDblUsT0FBUixJQUFtQjtBQUE5QixhQUEzQyxXQUFvRixZQUFNLENBQUUsQ0FBNUY7QUFDRDtBQUNGLFNBVEQsTUFTTztBQUNMMUUsaUJBQU8sQ0FBQ3VPLElBQVIsQ0FBYTRILEtBQWIsQ0FBbUI7QUFBQztBQUFELFdBQW5CLEVBQWdFL1YsSUFBaEUsQ0FBcUUsVUFBQW1PLElBQUksRUFBSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMzRSxvQ0FBZ0JBLElBQWhCO0FBQUEsb0JBQVN0TixLQUFUO0FBQ0VqQix1QkFBTyxDQUFDdU8sSUFBUixDQUFhbUosV0FBYixDQUF5QnpXLEtBQUcsQ0FBQ2tHLEVBQTdCLEVBQWlDeVIsR0FBakMsV0FBNEMsWUFBTSxDQUFFLENBQXBEO0FBREY7QUFEMkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc1RSxXQUhEO0FBSUQ7QUFDRjtBQUNGOzs7O0VBbERpQm5hLGU7O0lBcURkSSxTOzs7OztBQUNGLHFCQUFZa1YsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNiLG9GQUFNQSxHQUFOO0FBQ0EsV0FBSytFLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjs7QUFDQSxXQUFLQyxPQUFMOztBQUNBLFdBQUtDLDZCQUFMOztBQUVBM0QsVUFBTSxDQUFDUCxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxZQUFNO0FBQ3hDLE9BQUMsT0FBSytELElBQU4sSUFBYyxPQUFLQSxJQUFMLENBQVVULFNBQVYsQ0FBb0JhLGNBQXBCLENBQW1DLE9BQUtILFlBQXhDLENBQWQ7QUFDRCxLQUZEO0FBUGE7QUFVaEI7Ozs7b0RBQytCO0FBQzVCLFVBQU05WixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZK1EsVUFBM0I7O0FBRUEsVUFBSS9RLE1BQUosRUFBWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNSLGdDQUFnQkEsTUFBaEIsbUlBQXdCO0FBQUEsZ0JBQWJzRSxDQUFhO0FBQ3BCLGlCQUFLcEMsRUFBTCxDQUFRb0MsQ0FBUixFQUFXLEtBQUswUixLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLa0UsV0FBdEIsRUFBbUM1VixDQUFuQyxDQUFYO0FBQ0g7QUFITztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSVg7QUFDSjs7O2dDQUNXQSxDLEVBQVk7QUFBQSx5Q0FBTmdVLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNwQixVQUFNcUIsR0FBRyxHQUFHO0FBQUVoQixVQUFFLEVBQUVyVSxDQUFOO0FBQVNnVSxZQUFJLEVBQUVBO0FBQWYsT0FBWjtBQUNBLFVBQUksS0FBS3VCLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVLLFdBQVYsQ0FBc0JQLEdBQXRCO0FBQ2xCOzs7OEJBQ1M7QUFDTixVQUFNRSxJQUFJLEdBQUcsS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYTlZLE9BQU8sQ0FBQ2tRLE9BQVIsQ0FBZ0I4SSxPQUFoQixDQUF3QjtBQUFFN1csWUFBSSxZQUFLLEtBQUtBLElBQVYsY0FBa0IsS0FBS2dGLEVBQXZCO0FBQU4sT0FBeEIsQ0FBdEM7QUFDQSxVQUFNaVMsUUFBUSxHQUFHLEtBQUtMLFlBQUwsR0FBb0IsS0FBSzlELEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEtBQUtzRCxXQUF0QixDQUFyQztBQUNBTyxVQUFJLENBQUNULFNBQUwsQ0FBZUMsV0FBZixDQUEyQmMsUUFBM0I7QUFDSDs7OztFQTdCbUJ4YSxLOztJQWdDbEJ5YSxPOzs7OztBQUNGLG1CQUFZdEYsR0FBWixFQUFpQjtBQUFBOztBQUFBOztBQUNiLGtGQUFNQSxHQUFOO0FBQ0EsV0FBS3VGLEtBQUwsR0FBYSxFQUFiOztBQUNBLFdBQUtDLHlCQUFMOztBQUNBLFdBQUtOLDZCQUFMOztBQUphO0FBS2hCOzs7O29EQUMrQjtBQUM1QixVQUFNaGEsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWStRLFVBQTNCOztBQUVBLFVBQUkvUSxNQUFKLEVBQVk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDUixnQ0FBZ0JBLE1BQWhCLG1JQUF3QjtBQUFBLGdCQUFic0UsQ0FBYTtBQUNwQixpQkFBS3BDLEVBQUwsQ0FBUW9DLENBQVIsRUFBVyxLQUFLMFIsS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBS2tFLFdBQXRCLEVBQW1DNVYsQ0FBbkMsQ0FBWDtBQUNIO0FBSE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlYO0FBQ0o7OztnREFDMkI7QUFBQTs7QUFDeEJ2RCxhQUFPLENBQUNrUSxPQUFSLENBQWdCc0osU0FBaEIsQ0FBMEJsQixXQUExQixDQUFzQyxVQUFBUSxJQUFJLEVBQUk7QUFDMUMsWUFBTVEsS0FBSyxHQUFHLE1BQUksQ0FBQ0EsS0FBbkI7O0FBQ0EsWUFBTUYsUUFBUSxHQUFHLE1BQUksQ0FBQ25FLEtBQUwsQ0FBVyxNQUFYLEVBQWlCLE1BQUksQ0FBQ3NELFdBQXRCLENBQWpCOztBQUNBZSxhQUFLLENBQUNSLElBQUksQ0FBQzNXLElBQU4sQ0FBTCxHQUFtQjJXLElBQW5CO0FBQ0FBLFlBQUksQ0FBQ1QsU0FBTCxDQUFlQyxXQUFmLENBQTJCYyxRQUEzQjtBQUNBTixZQUFJLENBQUNXLFlBQUwsQ0FBa0JuQixXQUFsQixDQUE4QixZQUFNO0FBQ2hDUSxjQUFJLENBQUNULFNBQUwsQ0FBZWEsY0FBZixDQUE4QkUsUUFBOUI7QUFDQSxpQkFBT0UsS0FBSyxDQUFDUixJQUFJLENBQUMzVyxJQUFOLENBQVo7QUFDSCxTQUhEO0FBSUgsT0FURDtBQVVIOzs7Z0NBQ1dvQixDLEVBQVk7QUFDcEIsVUFBTStWLEtBQUssR0FBRyxLQUFLQSxLQUFuQjs7QUFEb0IseUNBQU4vQixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFFcEIsVUFBTXFCLEdBQUcsR0FBRztBQUFFaEIsVUFBRSxFQUFFclUsQ0FBTjtBQUFTZ1UsWUFBSSxFQUFFQTtBQUFmLE9BQVo7O0FBRUEsV0FBSyxJQUFNaEwsQ0FBWCxJQUFnQitNLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUlBLEtBQUssQ0FBQ3hGLGNBQU4sQ0FBcUJ2SCxDQUFyQixDQUFKLEVBQTZCO0FBQzNCK00sZUFBSyxDQUFDL00sQ0FBRCxDQUFMLENBQVM0TSxXQUFULENBQXFCUCxHQUFyQjtBQUNEO0FBQ0o7QUFDSjs7OztFQXJDaUJoYSxLOztRQXdDYkEsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztRQUFXd2EsTyxHQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0gzQjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWExYSxNOztRQUFBQSxNOzs7QUFFWCxrQkFBWW9WLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDZixnRkFBTUEsR0FBTjtBQUVBLFVBQUsyRixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUVBLFVBQUt6WixhQUFMLEdBQXFCMFosNEJBQWlCdlUsSUFBakIsQ0FBc0JoRixRQUF0QixHQUFpQyxNQUFqQyxHQUEwQyxPQUEvRDtBQUNBLFVBQUt3WixZQUFMLEdBQW9CRCw0QkFBaUJ2VSxJQUFqQixDQUFzQjVFLE9BQXRCLEdBQWdDLE1BQWhDLEdBQXlDLE9BQTdEO0FBQ0EsVUFBS3FaLGNBQUwsR0FBc0JGLDRCQUFpQnZVLElBQWpCLENBQXNCdEUsU0FBdEIsR0FBa0MsTUFBbEMsR0FBMkMsT0FBakU7QUFSZTtBQVNoQjs7OzsyQkFFTTtBQUFBOztBQUNMLGFBQU9mLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVGLEtBQWhCLENBQXNCckYsR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUFILE9BQU8sRUFBSTtBQUNqRCxZQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ29GLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFJLENBQUMwVSxRQUFMLENBQWM5WixPQUFPLENBQUNvRixJQUF0QjtBQUNEO0FBQ0YsT0FKTSxDQUFQO0FBS0Q7Ozs2QkFFUUEsSSxFQUFNO0FBQ2IsV0FBSyxJQUFJMlUsSUFBVCxJQUFpQjNVLElBQWpCLEVBQXVCO0FBQ3JCLGFBQUssVUFBVTJVLElBQWYsSUFBdUIzVSxJQUFJLENBQUMyVSxJQUFELENBQUosR0FBYSxNQUFiLEdBQXNCLE9BQTdDO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQUE7O0FBQ2QsV0FBS0MsSUFBTCxHQUFZN1osSUFBWixDQUFpQjtBQUFBLGVBQU0sTUFBSSxDQUFDUixJQUFMLENBQVUsNkJBQVYsQ0FBTjtBQUFBLE9BQWpCO0FBQ0Q7OzswQkFFc0I7QUFBQTs7QUFBQSxVQUFuQndNLEtBQW1CLHVFQUFYLFNBQVc7O0FBQ3JCLFVBQUksS0FBS3VOLFlBQVQsRUFBdUI7QUFDckIsZUFBUSxJQUFJTyxPQUFKLENBQVksVUFBQUMsQ0FBQztBQUFBLGlCQUFJN0UsTUFBTSxDQUFDOEUsVUFBUCxDQUFrQjtBQUFBLG1CQUFNRCxDQUFDLENBQUMsTUFBSSxDQUFDaGEsR0FBTCxDQUFTaU0sS0FBVCxDQUFELENBQVA7QUFBQSxXQUFsQixFQUE0QyxFQUE1QyxDQUFKO0FBQUEsU0FBYixDQUFSO0FBQ0Q7O0FBQ0QsVUFBTXBKLElBQUksR0FBRyxLQUFLLFVBQVVvSixLQUFmLENBQWI7QUFDQSxVQUFJLENBQUNwSixJQUFMLEVBQVcsTUFBTSxXQUFXb0osS0FBWCxHQUFtQixpQkFBekI7O0FBRVgsVUFBSSxDQUFDLEtBQUtzTixXQUFWLEVBQXVCO0FBQ3JCLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBRUEsZUFBTyxLQUFLTyxJQUFMLEdBQVk3WixJQUFaLENBQWlCLFlBQU07QUFDNUIsZ0JBQUksQ0FBQ3VaLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxpQkFBTyxNQUFJLENBQUMsVUFBVXZOLEtBQVgsQ0FBSixFQUFQO0FBQ0QsU0FITSxDQUFQO0FBSUQ7O0FBQ0QsYUFBTyxLQUFLLFVBQVVBLEtBQWYsR0FBUDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixhQUFPcE0sT0FBTyxDQUFDQyxPQUFSLENBQWdCdUYsS0FBaEIsQ0FBc0JyRixHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQWlhLFlBQVksRUFBSTtBQUN0RCxlQUFPcmEsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0YsSUFBaEIsQ0FBcUJsRixHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWthLGFBQWEsRUFBSTtBQUN0RCxXQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CeFYsT0FBcEIsQ0FBNEIsVUFBQXNILEtBQUssRUFBSTtBQUNuQ2lPLHdCQUFZLENBQUNqTyxLQUFELENBQVosR0FBc0JpTyxZQUFZLENBQUNqTyxLQUFELENBQVosSUFBdUJrTyxhQUFhLENBQUNsTyxLQUFELENBQTFEO0FBQ0QsV0FGRDtBQUdBLGNBQUksTUFBSSxDQUFDbE0sYUFBTCxLQUF1QixNQUEzQixFQUFtQ21hLFlBQVksQ0FBQ2hhLFFBQWIsR0FBd0JpYSxhQUFhLENBQUNqYSxRQUF0QztBQUNuQyxpQkFBTyxNQUFJLENBQUNrYSxZQUFMLEdBQW9CbmEsSUFBcEIsQ0FBeUIsVUFBQUssT0FBTyxFQUFJO0FBQ3pDNFosd0JBQVksQ0FBQzVaLE9BQWIsR0FBdUJBLE9BQXZCO0FBQ0EsbUJBQU80WixZQUFQO0FBQ0QsV0FITSxDQUFQO0FBSUQsU0FUTSxDQUFQO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozt5Q0FDb0I7QUFDbkIsYUFBT3JhLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVGLEtBQWhCLENBQXNCckYsR0FBdEIsRUFBUDtBQUNEOzs7MENBQ3FCO0FBQ3BCLGFBQU9ILE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9GLElBQWhCLENBQXFCbEYsR0FBckIsRUFBUDtBQUNEOzs7bUNBQ2M7QUFDYixhQUFPSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JvRixJQUFoQixDQUFxQmxGLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBa2EsYUFBYSxFQUFJO0FBQ3RELFlBQU1FLGFBQWEsR0FBR0YsYUFBYSxDQUFDN1osT0FBcEM7QUFFQSxlQUFPVCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J1RixLQUFoQixDQUFzQnJGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBaWEsWUFBWSxFQUFJO0FBQ3RELGNBQU1JLFlBQVksR0FBR0osWUFBWSxDQUFDNVosT0FBbEM7QUFDQSxjQUFJLENBQUMrWixhQUFMLEVBQW9CLE9BQU9DLFlBQVA7QUFDcEIsY0FBSSxDQUFDQSxZQUFMLEVBQW1CLE9BQU9ELGFBQVAsQ0FIbUMsQ0FLdEQ7O0FBQ0EsZUFBSyxJQUFJalgsQ0FBVCxJQUFja1gsWUFBWSxDQUFDekgsT0FBM0I7QUFBb0N3SCx5QkFBYSxDQUFDeEgsT0FBZCxDQUFzQnpQLENBQXRCLElBQTJCa1gsWUFBWSxDQUFDekgsT0FBYixDQUFxQnpQLENBQXJCLENBQTNCO0FBQXBDOztBQUVBLGlCQUFPaVgsYUFBUDtBQUNELFNBVE0sQ0FBUDtBQVVELE9BYk0sQ0FBUDtBQWNEOzs7b0NBQ2U7QUFDZCxhQUFPeGEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0ksUUFBUixJQUFvQnVaLDRCQUFpQnZaLFFBQXpDO0FBQUEsT0FBdEQsQ0FBUDtBQUNEOzs7Z0NBQ1c7QUFDVixhQUFPTCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J1RixLQUFoQixDQUFzQnJGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBaWEsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNLLElBQW5DLEVBQXlDLE9BQU8sRUFBUDtBQUN6QyxlQUFPTCxZQUFZLENBQUNLLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU8xYSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J1RixLQUFoQixDQUFzQnJGLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBaWEsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNwSyxPQUFuQyxFQUE0QztBQUMxQyxpQkFBT2pRLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQm9GLElBQWhCLENBQXFCbEYsR0FBckIsR0FBMkJDLElBQTNCLENBQWdDLFVBQUFrYSxhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ3JLLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT29LLFlBQVksQ0FBQ3BLLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCeFIsZSIsImZpbGUiOiJjb250ZW50L3NpZGViYXIvc2lkZWJhci53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9zaWRlYmFyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JULCBfUFJJVlBPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9QUklWUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfU1RPUkUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnb25Ub2dnbGVkU3luYycsXHJcbiAgICAgICdzYXZlZDplbnRyeSc6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpmb3VuZCc6ICd1cGRhdGVFbnRyeU9uRm91bmQnLFxyXG4gICAgICAnZW50cnk6Zm91bmQtZm9yLXRhYic6ICd1cGRhdGVFbnRyeScsXHJcbiAgICAgICdlbnRyeTpkZWxldGVkLWZvci10YWInOiAncmVzdW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVudjogJ3NpZGViYXInLFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIGxvY2tlZDogZmFsc2UsXHJcblxyXG4gIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KGVudHJ5KTtcclxuICAgICAgY29uc3QgY3VycmVudEVudHJ5ID0gISF0aGlzLmVudHJ5O1xyXG5cclxuICAgICAgdGhpcy5sb2NrZWQgPSB0aGlzLmxvY2tlZCB8fCBpc0FyciB8fCBlbnRyeS5sb2NrZWQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubG9ja2VkIHx8IGlzQXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMubG9ja2VkICYmICFpc0Fycikge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJ5ICYmIEFycmF5LmlzQXJyYXkodGhpcy5lbnRyeSkpIHRoaXMuZW50cnkucHVzaChlbnRyeSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudHJ5ID0gW2VudHJ5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRFbnRyeSkgdGhpcy5lbWl0KCd1cGRhdGVkOnN0b3JlZC1lbnRyeScsIHRoaXMuZW50cnkpO1xyXG4gICAgICBlbHNlIHRoaXMuZW1pdCgnc3RvcmVkOmVudHJ5JywgdGhpcy5lbnRyeSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVFbnRyeU9uRm91bmQoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUVudHJ5KGVudHJ5KTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW5pdGlhbGx5LXN0b3JlZDplbnRyeScsIGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuZW50cnkgPSBudWxsO1xyXG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZW1pdCgncmVtb3ZlZDplbnRyeScpO1xyXG4gIH0sXHJcblxyXG5cclxuICBfZ2V0X21vZGUoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzIHx8IHN0b3JhZ2Uuc2V0dGluZ3MuYWRkb24uYWN0aXZlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfcGFnZW5vdGVzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnBhZ2Vub3RlcyB8fCBudWxsKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9QT1JUIGZyb20gJy4vcG9ydCdcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuXHJcbmltcG9ydCAnLi9tb2R1bGVzL3RoZW1lcydcclxuaW1wb3J0ICcuL21vZHVsZXMvdGFicydcclxuaW1wb3J0ICcuL21vZHVsZXMvaGVhZGVyJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tZXRhLWluZm9zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90YWdzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlLW5vdGVzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrZXJzJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9oaXN0b3J5LWFjdGlvbnMnXHJcbmltcG9ydCAnLi9tb2R1bGVzL21hcmstYWN0aW9ucydcclxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZS1hY3Rpb25zJ1xyXG5pbXBvcnQgJy4vbW9kdWxlcy9tYXJrcydcclxuaW1wb3J0ICcuL21vZHVsZXMvbGlua3MnXHJcblxyXG5fTDEwTigpO1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdvblN0YXJ0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3RvZ2dsZScsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeSc6ICd0b2dnbGUnLFxyXG4gICAgICAnaW5pdGlhbGx5LXN0b3JlZDplbnRyeSc6ICd0b2dnbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ29wZW5lZDpzaWRlYmFyJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcblxyXG4gIHBvd2VyKG9uKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXItLXBhdXNlZCcpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLXNpZGViYXInKTtcclxuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU3RhcnQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihtb2RlID0+IHRoaXMucG93ZXIobW9kZSkpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKGVudHJ5KSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpO1xyXG4gICAgaWYgKGVudHJ5ICYmIF9TVE9SRS5sb2NrZWQpIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLXNpZGViYXItLWxvY2tlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZWw7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHJldHVybjtcclxuXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hbWUoZW50cnkubmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYW1lJylbMF07XHJcbiAgICBlbC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgZWwudGl0bGUgPSBuYW1lO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAndG9nZ2xlU2F2ZScsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJzogJ3RvZ2dsZVNhdmUnLFxyXG4gICAgICAndXBkYXRlZDplbnRyeS1vbi1zYXZlJzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3NhdmVkOmVudHJ5JzogJ2RlYWN0aXZhdGVTYXZlJyxcclxuICAgICAgJ3Vuc2F2ZWQtY2hhbmdlcyc6ICdhY3RpdmF0ZVNhdmUnLFxyXG4gICAgICAnZmluaXNoZWQ6cmVzdG9yYXRpb24nOiAnYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICd1cGRhdGU6ZW50cnk/JzogJ2RlYWN0aXZhdGVSZXRyeScsXHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAndXBkYXRlSW1tdXQnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZScsXHJcbiAgICAgICdpbml0aWFsbHktc3RvcmVkOmVudHJ5JzogJ3VwZGF0ZUltbXV0J1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXJldHJ5JzogJ3JldHJ5UmVzdG9yYXRpb24nLFxyXG4gICAgICAgICcjcGFnZS1hY3Rpb24tLXNhdmUnOiAnc2F2ZScsXHJcbiAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlSW1tdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXRyeUJ0blNob3duOiBmYWxzZSxcclxuICBzYXZlQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLXNhdmUnKSxcclxuICByZXRyeUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1yZXRyeScpLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMudG9nZ2xlU2F2ZSgpO1xyXG4gIH0sXHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2F2ZS1jaGFuZ2VzJywgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgcmV0cnlSZXN0b3JhdGlvbigpIHtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfSxcclxuICB0b2dnbGVTYXZlKCkge1xyXG4gICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgY29uc3QgbWV0aCA9IGF1dG9zYXZlID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgdGhpcy5zYXZlQnRuLmNsYXNzTGlzdFttZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFjdGl2YXRlU2F2ZShvbiA9IHRydWUpIHtcclxuICAgIGlmIChvbikgdGhpcy5zYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIGVsc2UgdGhpcy5zYXZlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICB9LFxyXG4gIGRlYWN0aXZhdGVTYXZlKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZVNhdmUoZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVSZXRyeSgpIHtcclxuICAgIGlmICghdGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlUmV0cnkoKSB7XHJcbiAgICBpZiAodGhpcy5yZXRyeUJ0blNob3duKSB7XHJcbiAgICAgIHRoaXMucmV0cnlCdG4uY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMucmV0cnlCdG5TaG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlSW1tdXQoZSwgZWwpIHtcclxuICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLWltbXV0JykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZW1pdCgnc2lkZWJhcjppbW11dCcsIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyksIHsgdGFiOiAnYWN0aXZlJyB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZUltbXV0KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgY29uc3QgbWV0aCA9IGVudHJ5LmltbXV0ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtYWN0aW9uLS1pbW11dCcpLmNsYXNzTGlzdFttZXRoXSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtYm94JykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWJveCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5yZXRyeUFjdGl2ZSkgdGhpcy5hY3RpdmF0ZVJldHJ5KCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbGlua3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubGluayc6ICdsaW5rJyxcclxuICAgICAgICAnLmxpbmtfX2ljb24nOiAnbGluaycsXHJcbiAgICAgICAgJy5saW5rX190ZXh0JzogJ2xpbmsnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsaW5rKGUsIGVsKSB7XHJcbiAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnbGluaycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgdGhpcy5lbWl0KCdvcGVuOmFkZG9uLXBhZ2Uoc2IpJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnY2xpY2tlZDptYXJrJzogJ2FjdGl2YXRlJyxcclxuICAgICAgJ2FjdGl2YXRlZDptYXJrJzogJ2FjdGl2YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tbWFyayc6ICdtYXJrQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBmcmFtZTogMCxcclxuICBidXR0b25zOiBbXSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpKTtcclxuICB9LFxyXG4gIG1hcmtBY3Rpb24oZSwgZWwpIHtcclxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHJldHVybjtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgIGlmIChhY3Rpb24gPT09ICdjb3B5Jykge1xyXG4gICAgICBicm93c2VyLnBlcm1pc3Npb25zLmNvbnRhaW5zKHsgcGVybWlzc2lvbnM6IFsnY2xpcGJvYXJkV3JpdGUnXSB9KS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnc2lkZWJhcjonICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLCBncmFudGVkLCBudWxsLCB7IHRhYjogJ2FjdGl2ZScsIGZyYW1lSWQ6IHRoaXMuZnJhbWUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbWl0KCdzaWRlYmFyOicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksIG51bGwsIG51bGwsIHsgdGFiOiAnYWN0aXZlJywgZnJhbWVJZDogdGhpcy5mcmFtZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFjdGl2YXRlKG1hcmtJbmZvcywgc2VuZGVyKSB7XHJcbiAgICB0aGlzLmZyYW1lID0gc2VuZGVyICYmIHNlbmRlci5mcmFtZUlkID8gc2VuZGVyLmZyYW1lSWQgOiAwO1xyXG5cclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGxldCB0eXBlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGUgPT09ICdjb3B5JyB8fFxyXG4gICAgICAgIHR5cGUgPT09ICdkZWxldGUtaGlnaGxpZ2h0JyB8fFxyXG4gICAgICAgICh0eXBlb2YgbWFya0luZm9zW3R5cGVdID09PSAnYm9vbGVhbicgJiYgIW1hcmtJbmZvc1t0eXBlXSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gJ2RlbGV0ZS1ib29rbWFyaycgJiYgbWFya0luZm9zLmJvb2ttYXJrKVxyXG4gICAgICApIHtcclxuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrZXJzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3JlbmRlcicsXHJcbiAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAncmVuZGVyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2VsZWN0aW9uJzogJ3RvZ2dsZU1hcmtlckJ1dHRvbnMnLFxyXG4gICAgICAncGFnZS1zdGF0ZSc6ICdvblBhZ2VTdGF0ZSdcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy5tYXJrZXJfX2NvbG9yJzogJ2NoYW5nZScsXHJcbiAgICAgICAgJy5tYXJrZXJfX2NiJzogJ3NlbGVjdCdcclxuICAgICAgfSxcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLm1hcmtlcl9fYXBwbHknOiAnYXBwbHlDb2xvcidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGZyYW1lOiAwLFxyXG4gIGF1dG9tYXJrRW5hYmxlZDogZmFsc2UsXHJcblxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc2V0dGluZ3MgJiYgKCFzdG9yYWdlLnN5bmMgfHwgc3RvcmFnZS5zeW5jLnNldHRpbmdzKSkge1xyXG4gICAgICAgIHRoaXMuYXV0b21hcmtFbmFibGVkID0gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm1hcmttZXRob2QgPT09ICdhdXRvJztcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2Uuc3luYyAmJiAhc3RvcmFnZS5zeW5jLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9tYXJrRW5hYmxlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5tYXJrbWV0aG9kID09PSAnYXV0byc7XHJcbiAgICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGlmICghbWFya2VycykgcmV0dXJuIHRoaXM7XHJcbiAgICAgIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLWxlZnQnKTtcclxuICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Vycy1jb250YWluZXItLXJpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGZyYWdSaWdodCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgZnJhZ0xlZnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmNlaWwoT2JqZWN0LmtleXMobWFya2VycykubGVuZ3RoIC8gMik7XHJcbiAgICAgIGxldCBjb3VudCA9IDAsIG0sIGJveCwgaW5wdXQsIGV4YW1wbGVUZXh0LCBidXR0b24sIGNvbG9yLCBjYkJveCwgY2IsIGNiTGFiZWwsIGNiU3BhbjtcclxuXHJcbiAgICAgIGxlZnRDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChtIGluIG1hcmtlcnMpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNiQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNiTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNiU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMuZXh0cmFjdEJnQ29sb3IobWFya2Vyc1ttXS5zdHlsZSk7XHJcblxyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnbWFya2VyIHUtY2YnO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NvbG9yJztcclxuICAgICAgICBpbnB1dC5pZCA9ICdtYXJrZXItJyArIG07XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IG07XHJcbiAgICAgICAgaW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBjb2xvcjtcclxuICAgICAgICBleGFtcGxlVGV4dC5jbGFzc05hbWUgPSAnbWFya2VyX190ZXh0JztcclxuICAgICAgICBleGFtcGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFya2Vyc1ttXS5zdHlsZSk7XHJcbiAgICAgICAgZXhhbXBsZVRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyLScgKyBtKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ21hcmtlcl9fYXBwbHknO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBtKTtcclxuICAgICAgICBjYkJveC5jbGFzc05hbWUgPSAnbWFya2VyX19jYi1ib3gnO1xyXG4gICAgICAgIGNiLmNsYXNzTmFtZSA9ICdtYXJrZXJfX2NiJztcclxuICAgICAgICBjYi5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgbSk7XHJcbiAgICAgICAgY2IudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgY2IuaWQgPSAnbWFya2VyX19jYi0tJyArIG07XHJcbiAgICAgICAgY2IubmFtZSA9ICdtYXJrZXItY2InO1xyXG4gICAgICAgIGNiTGFiZWwuY2xhc3NOYW1lID0gJ2Zha2UtcmInO1xyXG4gICAgICAgIGNiTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWFya2VyX19jYi0tJyArIG0pO1xyXG4gICAgICAgIGNiU3Bhbi50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNUNGKTtcclxuXHJcbiAgICAgICAgY2JMYWJlbC5hcHBlbmRDaGlsZChjYlNwYW4pO1xyXG4gICAgICAgIGNiQm94LmFwcGVuZENoaWxkKGNiKTtcclxuICAgICAgICBjYkJveC5hcHBlbmRDaGlsZChjYkxhYmVsKTtcclxuXHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNiQm94KTtcclxuICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChleGFtcGxlVGV4dCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudCA+IDMgJiYgY291bnQgPiBzKSB7XHJcbiAgICAgICAgICBmcmFnTGVmdC5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmcmFnUmlnaHQuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG0gPSBtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgbSA9IG0gPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBtO1xyXG4gICAgICAgIGV4YW1wbGVUZXh0LmlubmVyVGV4dCA9IG07XHJcbiAgICAgICAgaWYgKCFjb2xvcikgaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdSaWdodCk7XHJcbiAgICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ0xlZnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdhdXRvJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtlcl9fY2ItLW0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2F1dG8nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBleHRyYWN0QmdDb2xvcihzdHlsZXMpIHtcclxuICAgIGxldCBzcGxpdCA9IHN0eWxlcy5zcGxpdCgnOycpLFxyXG4gICAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXHJcbiAgICAgICAgY29sb3IgPSAnJyxcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBzdHlsZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzdHlsZSA9IHNwbGl0W2ldO1xyXG4gICAgICBpZiAoc3R5bGUuaW5jbHVkZXMoJ2JhY2tncm91bmQtY29sb3InKSkge1xyXG4gICAgICAgIGNvbG9yID0gc3R5bGUuc3BsaXQoJzonKVsxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgY2hhbmdlKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZTpiZy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gIH0sXHJcbiAgc2VsZWN0KGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScsIGZyYW1lSWQ6IHRoaXMuZnJhbWUgfSk7XHJcbiAgfSxcclxuICBhcHBseUNvbG9yKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6aGlnaGxpZ2h0JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpLCB7IHRhYjogJ2FjdGl2ZScsIGZyYW1lSWQ6IHRoaXMuZnJhbWUgfSk7XHJcbiAgfSxcclxuICB0b2dnbGVNYXJrZXJCdXR0b25zKHNob3csIHNlbmRlcikge1xyXG4gICAgaWYgKHRoaXMuYXV0b21hcmtFbmFibGVkKSByZXR1cm47XHJcbiAgICB0aGlzLmZyYW1lID0gc2VuZGVyICYmIHNlbmRlci5mcmFtZUlkID8gc2VuZGVyLmZyYW1lSWQgOiAwO1xyXG4gICAgY29uc3QgbWV0aCA9IHNob3cgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdzZXRBdHRyaWJ1dGUnO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrZXJfX2FwcGx5JykpLmZvckVhY2goYnRuID0+IGJ0blttZXRoXSgnZGlzYWJsZWQnLCB0cnVlKSk7XHJcbiAgfSxcclxuICBvblBhZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy50b2dnbGVNYXJrZXJCdXR0b25zKHN0YXRlLnNlbGVjdGlvbik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuLy4uLy4uLy4uL2RhdGEvZ2xvYmFsLXNldHRpbmdzJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1tYXJrcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdlbnRyeTpvcmRlcmVkLW1hcmtzJzogJ3NldE1hcmtJRHMnLFxyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcicsXHJcbiAgICAgICd1cGRhdGVkOnN0b3JlZC1lbnRyeScgOiAncmVuZGVyJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcubWFya19fdGV4dCc6ICdhY3RpdmF0ZScsXHJcbiAgICAgICAgJy5tYXJrX19ub3RlLWJ0bic6ICd0b2dnbGVOb3RlJyxcclxuICAgICAgICAnLmFjdGlvbi1idXR0b24tLW5hdic6ICduYXYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICcjZm9sZC1tYXJrcyc6ICdmb2xkTGlzdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1hcmtzOiBbXSxcclxuICBtYXJrSURzOiBudWxsLFxyXG4gIGxlbmd0aDogMCxcclxuICBjdXJyZW50OiAtMSxcclxuICBzZXRGaWx0ZXJzOiBmYWxzZSxcclxuICB0b2dnbGVNYXA6IHsgJzEnOiBbZmFsc2UsIGZhbHNlXSwgJzInOiBbdHJ1ZSwgZmFsc2VdLCAnMyc6IFtmYWxzZSwgdHJ1ZV0sICc0JzogW3RydWUsIHRydWVdIH0sXHJcblxyXG4gIHJlbmRlcihhLGIsYykge1xyXG4gICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5ID0gX1NUT1JFLmVudHJ5O1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgIHRoaXMuc2V0TWFya3MoKTtcclxuICAgICAgaWYgKCF0aGlzLnNldEZpbHRlcnMpIHRoaXMucmVuZGVyU1ZHRmlsdGVycygpO1xyXG4gICAgICB0aGlzLnJlbmRlckxpc3QoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHNldE1hcmtzKCkge1xyXG4gICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5O1xyXG4gICAgbGV0IG1hcmtzID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgZW50cnkuZm9yRWFjaChlID0+IG1hcmtzID0gbWFya3MuY29uY2F0KGUubWFya3MpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtzID0gZW50cnkubWFya3M7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrSURzID0gdGhpcy5tYXJrSURzO1xyXG4gICAgLy90aGlzLmxlbmd0aCA9IG1hcmtzLmxlbmd0aDtcclxuICAgIC8vdGhpcy5tYXJrcyA9IG1hcmtJRHMgPyBtYXJrcy5zb3J0KChtMSwgbTIpID0+IG1hcmtJRHMuaW5kZXhPZihtMS5pZCkgPCBtYXJrSURzLmluZGV4T2YobTIuaWQpKSA6IG1hcmtzO1xyXG4gICAgdGhpcy5tYXJrcyA9IG1hcmtJRHMgP1xyXG4gICAgICBtYXJrSURzLm1hcChpZCA9PiBtYXJrcy5maW5kKG1hcmsgPT4gbWFyay5pZCA9PSBpZCkpIDpcclxuICAgICAgbWFya3M7XHJcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMubWFya3MubGVuZ3RoO1xyXG4gIH0sXHJcbiAgc2V0TWFya0lEcyhpZHMsYixjKSB7XHJcbiAgICB0aGlzLm1hcmtJRHMgPSBpZHM7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sXHJcbiAgcmVuZGVyU1ZHRmlsdGVycygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgdG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IHt9O1xyXG4gICAgbGV0IGksIGM7XHJcbiAgICBmb3IgKGkgaW4gX1NFVFRJTkdTLk5PVEVfQ09MT1JTKSB7XHJcbiAgICAgICBjID0gX1NFVFRJTkdTLk5PVEVfQ09MT1JTW2ldO1xyXG4gICAgICBjb2xvcnNbaS50b0xvd2VyQ2FzZSgpXSA9ICcwIDAgMCAwICcgKyB0aGlzLmNvbnZlcnRIZXgoYy5zdWJzdHIoMSwyKSkgKyAnIDAgMCAwIDAgJyArIHRoaXMuY29udmVydEhleChjLnN1YnN0cigzLDIpKSArICcgMCAwIDAgMCAnICsgdGhpcy5jb252ZXJ0SGV4KGMuc3Vic3RyKDUsMikpICsgJyAwIDAgMCAxIDAnO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcjtcclxuICAgIGZvciAoaSBpbiBjb2xvcnMpIHtcclxuICAgICAgZmlsdGVyID0gdG1wbC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGZpbHRlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmlsdGVyJylbMF0uaWQgPSAnZmlsdGVyLS0nICsgaTtcclxuICAgICAgZmlsdGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmZUNvbG9yTWF0cml4JylbMF0uc2V0QXR0cmlidXRlKCd2YWx1ZXMnLCBjb2xvcnNbaV0pO1xyXG4gICAgICBib2R5LmFwcGVuZENoaWxkKGZpbHRlcilcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RmlsdGVycyA9IHRydWU7XHJcbiAgfSxcclxuICBjb252ZXJ0SGV4KGhleCkge1xyXG4gICAgcmV0dXJuICgoMTYgKiBOdW1iZXIoJzB4JyArIGhleFswXSkpICsgTnVtYmVyKCcweCcgKyBoZXhbMV0pKSAvIDI1NTtcclxuICB9LFxyXG4gIHJlbmRlckxpc3QoKSB7XHJcbiAgICBjb25zdCBtYXJrVG1wbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLXRlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IG1hcmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtzJyk7XHJcbiAgICBsZXQgbWFya0NvbnRhaW5lcjtcclxuXHJcbiAgICBtYXJrc0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICB0aGlzLm1hcmtzLmZvckVhY2goKG1hcmssIGkpID0+IHtcclxuICAgICAgaWYgKG1hcmspIHtcclxuICAgICAgICBtYXJrQ29udGFpbmVyID0gbWFya1RtcGwuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuaWQgPSAnJztcclxuICAgICAgICBtYXJrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIG1hcmtDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX190ZXh0JylbMF07XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXJrLnRleHQpO1xyXG4gICAgICAgIGxldCBjb2xvciA9IG1hcmsuc3R5bGUuaW5kZXhPZignYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGxldCBoYXNOb3RlID0gbWFyay5ub3RlICYmICh0eXBlb2YgbWFyay5ub3RlID09PSAnc3RyaW5nJyB8fCBtYXJrLm5vdGUudGV4dCk7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvciA9PT0gLTEgPyAndHJhbnNwYXJlbnQnIDogbWFyay5zdHlsZS5zdWJzdHIoY29sb3IgKyAxNywgNyk7XHJcbiAgICAgICAgbGV0IG5vdGUsIG5vdGVDb2xvciwgbm90ZVRleHQsIG5vdGVCdG4sIG5vdGVOb2RlO1xyXG5cclxuICAgICAgICB0ZXh0Tm9kZS5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRleHROb2RlLmFwcGVuZENoaWxkKHRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGhhc05vdGUpIHtcclxuICAgICAgICAgIG5vdGUgPSBtYXJrLm5vdGU7XHJcbiAgICAgICAgICBub3RlQ29sb3IgPSBub3RlLmNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgbm90ZVRleHQgPSBub3RlLnRleHQgfHwgbm90ZTtcclxuICAgICAgICAgIG1hcmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFyay0tbm90ZScpO1xyXG4gICAgICAgICAgbm90ZUJ0biA9IG1hcmtDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya19fbm90ZS1idG4nKVswXTtcclxuICAgICAgICAgIG5vdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlQnRuLmNsYXNzTGlzdC5hZGQoJ21hcmtfX25vdGUtYnRuLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICAgIG5vdGVOb2RlID0gbWFya0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX19ub3RlJylbMF07XHJcbiAgICAgICAgICBub3RlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub3RlVGV4dCkpO1xyXG4gICAgICAgICAgbm90ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICBub3RlTm9kZS5jbGFzc0xpc3QuYWRkKCdtYXJrX19ub3RlLS0nICsgbm90ZUNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWFya0NvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFya3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH0sXHJcbiAgbmF2KGUsIGVsKSB7XHJcbiAgICBjb25zdCBkaXIgPSAxICogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICB0aGlzLmN1cnJlbnQgKz0gZGlyO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmxlbmd0aCkgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudCA8IDApIHRoaXMuY3VycmVudCA9IHRoaXMubGVuZ3RoIC0gMTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVMaXN0SXRlbShpZCkge1xyXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHRoaXMuY3VycmVudCA9IGlkO1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmstLWFjdGl2ZScpWzBdO1xyXG4gICAgaWYgKGN1cnJlbnRJdGVtKSBjdXJyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtYXJrLS1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWlkPVwiJyArIFt0aGlzLmN1cnJlbnRdICsgJ1wiXScpLmNsYXNzTGlzdC5hZGQoJ21hcmstLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5lbWl0KCdzaWRlYmFyOm5leHQtbWFyaycsIHRoaXMuY3VycmVudCwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGUoZSwgZWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLW1hcmtzJykudmFsdWUgPSAwO1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndW5mb2xkZWQnKTtcclxuICAgIHRoaXMuYWN0aXZhdGVMaXN0SXRlbSgxKmVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgfSxcclxuICBmb2xkTGlzdChlLCBlbCkge1xyXG4gICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICBpZiAodmFsICE9IDApIHtcclxuICAgICAgY29uc3QgbWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya3MnKTtcclxuICAgICAgY29uc3QgdG9nZ2xlU2V0dGluZ3MgPSB0aGlzLnRvZ2dsZU1hcFt2YWxdO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGUoJ3RleHQnLCB0b2dnbGVTZXR0aW5nc1swXSk7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCdub3RlJywgdG9nZ2xlU2V0dGluZ3NbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdG9nZ2xlTm90ZShlLCBlbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQtbWFya3MnKS52YWx1ZSA9IDA7XHJcbiAgICBjb25zdCBtYXJrRWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgbWFya0VsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tbm90ZScpO1xyXG4gICAgbWFya0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtfX25vdGUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCd1bmZvbGRlZCcpO1xyXG4gIH0sXHJcbiAgdG9nZ2xlKHR5cGUsIHNob3cpIHtcclxuICAgIGNvbnN0IG1ldGggPSBzaG93ID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXJrX18nICsgdHlwZSkpXHJcbiAgICAgIC5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdFttZXRoXSgndW5mb2xkZWQnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tbWV0YScpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAncmVuZGVyJyxcclxuICAgICAgJ3VwZGF0ZWQ6c3RvcmVkLWVudHJ5JzogJ3JlbmRlcidcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgeWVzID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3llcycpO1xyXG4gICAgICBjb25zdCBubyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubycpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX251bWJlci1tYXJrcycpLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfX2NyZWF0ZWQnKS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhX19sYXN0LW1vZGlmaWVkJykuaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcblxyXG4gICAgICBbJ3N5bmNlZCcsICdpbW11dCddXHJcbiAgICAgICAgLmZvckVhY2goZmllbGQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldGFfXycgKyBmaWVsZCkuaW5uZXJUZXh0ID0gZW50cnlbZmllbGRdID8geWVzIDogbm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGVcclxuICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWFjdGlvbnMnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ2RlYWN0aXZhdGVCb29rbWFyaycsXHJcbiAgICAgICdhZGRlZDpub3RlJzogJ2FjdGl2YXRlTm90ZXMnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnZGVhY3RpdmF0ZU5vdGVzJyxcclxuICAgICAgJ3BhZ2Utc3RhdGUnOiAnb25QYWdlU3RhdGUnLFxyXG4gICAgICAnbm90ZXMtc3RhdGUnOiAnb25Ob3Rlc1N0YXRlJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcuYWN0aW9uLWJ1dHRvbi0tcGFnZSc6ICdwYWdlQWN0aW9uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWN0aXZhdGVCb29rbWFyaygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ3Njcm9sbCcsIHRydWUpO1xyXG4gIH0sXHJcbiAgZGVhY3RpdmF0ZUJvb2ttYXJrKCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZSgnc2Nyb2xsJywgZmFsc2UpO1xyXG4gIH0sXHJcbiAgYWN0aXZhdGVOb3RlcygpIHtcclxuICAgIHRoaXMuYWN0aXZhdGUoJ25vdGVzJywgdHJ1ZSk7XHJcbiAgfSxcclxuICBkZWFjdGl2YXRlTm90ZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2YXRlKCdub3RlcycsIGZhbHNlKTtcclxuICB9LFxyXG4gIGFjdGl2YXRlKHR5cGUsIG9uKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1hY3Rpb24tLScgKyB0eXBlKTtcclxuICAgIGlmIChvbikge1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICBidG4ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3NpZGViYXI6JyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSwgeyB0YWI6ICdhY3RpdmUnIH0pO1xyXG4gIH0sXHJcbiAgb25QYWdlU3RhdGUoc3RhdGUpIHtcclxuICAgIGlmIChzdGF0ZS5ib29rbWFyaykgdGhpcy5hY3RpdmF0ZUJvb2ttYXJrKCk7XHJcbiAgfSxcclxuICBvbk5vdGVzU3RhdGUobm90ZXMpIHtcclxuICAgIGlmIChub3RlcykgdGhpcy5hY3RpdmF0ZU5vdGVzKCk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxubmV3IF9ET01NT0RVTEUoe1xyXG4gIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLS1ub3RlcycpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd1cGRhdGVkOnBhZ2Vub3Rlcyc6ICdyZW5kZXInXHJcbiAgICB9LFxyXG4gICAgRE9NOiB7XHJcbiAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgJy5hZGQtbm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAndG1ub3RlY29sb3InOiAnY2hhbmdlQ29sb3InLFxyXG4gICAgICAgICd0bW5vdGVjdXN0b21pemUnOiAndG9nZ2xlUGFsZXR0ZScsXHJcbiAgICAgICAgJ3Rtbm90ZWRlbGV0ZSc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgICAndG1ub3RlbWluaW1pemUnOiAndG9nZ2xlTm90ZScsXHJcbiAgICAgICAgJ3Rtbm90ZXNhdmUnOiAnc2F2ZSdcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJyNmb2xkLXBhZ2Utbm90ZXMnOiAndG9nZ2xlTm90ZXMnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG5vdGVzOiBbXSxcclxuICBub3RlRWxzOiB7fSxcclxuICBpZDogMCxcclxuICBjdXJyZW50Q29sb3I6ICd5ZWxsb3cnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIF9HRVRfQUNUSVZFX1RBQigpLnRoZW4odGFiID0+IHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgPSB0YWIudXJsO1xyXG4gICAgICBfU1RPUkUuZ2V0KCdwYWdlbm90ZXMnKS50aGVuKHBhZ2Vub3RlcyA9PiB7XHJcbiAgICAgICAgcGFnZW5vdGVzID0gcGFnZW5vdGVzICYmIHBhZ2Vub3Rlc1t1cmxdID8gcGFnZW5vdGVzW3VybF0gOiBudWxsO1xyXG4gICAgICAgIGxldCBsLCBpZDtcclxuICAgICAgICBpZiAocGFnZW5vdGVzICYmIChsID0gcGFnZW5vdGVzLmxlbmd0aCkpIHtcclxuICAgICAgICAgIHRoaXMubm90ZXMgPSBwYWdlbm90ZXM7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlkID0gdGhpcy5hZGROb3RlKHBhZ2Vub3Rlc1tsXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBNYXRoLm1heCh0aGlzLmlkLCBpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KCEhdGhpcy5ub3Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVOb3RlcyhudWxsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzYXZlKGUsIGVsKSB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IHRoaXMuZ2V0QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgIG5vdGUudGV4dCA9IGVsLnByZXZpb3VzU2libGluZy52YWx1ZTtcclxuICAgICAgbm90ZS5uYW1lID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bW5vdGVfX2hlYWRlcicpWzBdLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCd1cGRhdGVkOnBhZ2Utbm90ZScsIHRoaXMudXJsLCB0aGlzLm5vdGVzKTtcclxuICB9LFxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMubm90ZXMgPSBbXTtcclxuICAgIHRoaXMubm90ZUVscyA9IHt9O1xyXG4gICAgdGhpcy5pZCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3RlID0gbm90ZS50eXBlID8gbnVsbCA6IG5vdGU7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1ub3RlcycpO1xyXG4gICAgY29uc3Qgbm90ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Utbm90ZS10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gbm90ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xyXG4gICAgY29uc3QgaGVhZGVyID0gbm90ZUVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rtbm90ZV9faGVhZGVyJylbMF07XHJcbiAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgbGV0IGlkO1xyXG4gICAgaWYgKG5vdGUpIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSBub3RlLmlkO1xyXG4gICAgICB0ZXh0YXJlYS50ZXh0Q29udGVudCA9IG5vdGUudGV4dCB8fCAnJztcclxuICAgICAgaGVhZGVyLnZhbHVlID0gbm90ZS5uYW1lIHx8ICcnO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LmFkZCgndG1ub3RlLS0nICsgbm90ZS5jb2xvcik7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBub3RlRWwuaWQgPSArK3RoaXMuaWQ7XHJcbiAgICAgIHRoaXMubm90ZXMucHVzaCh7IGlkLCB0ZXh0OiAnJywgY29sb3I6IHRoaXMuY3VycmVudENvbG9yIH0pO1xyXG4gICAgICBub3RlRWwuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgbm90ZUVsLmNsYXNzTGlzdC5hZGQoJ3Rtbm90ZS0tJyArIHRoaXMuY3VycmVudENvbG9yKTtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub3RlRWwsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBBcnJheS5mcm9tKG5vdGVFbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKVxyXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCkpO1xyXG5cclxuICAgIHRoaXMubm90ZUVsc1tpZF0gPSBub3RlRWw7XHJcblxyXG4gICAgdGhpcy50b2dnbGVTZWxlY3QodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH0sXHJcbiAgY2hhbmdlQ29sb3IoZSwgZWwpIHtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuY3VycmVudENvbG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyk7XHJcbiAgICB0aGlzLm5vdGVFbHNbaWRdLmNsYXNzTmFtZSA9IHRoaXMubm90ZUVsc1tpZF0uY2xhc3NOYW1lLnJlcGxhY2UoLy0tXFx3Ky8sICctLScgKyBjb2xvcik7XHJcbiAgICB0aGlzLmdldEJ5SWQoaWQpLmNvbG9yID0gY29sb3I7XHJcbiAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90ZShlLCBlbCkge1xyXG4gICAgY29uc3QgaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgbm90ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGUpO1xyXG4gICAgZGVsZXRlIHRoaXMubm90ZUVsc1tpZF07XHJcbiAgICB0aGlzLm5vdGVzLnNwbGljZSh0aGlzLm5vdGVzLmluZGV4T2YodGhpcy5nZXRCeUlkKGlkKSksIDEpO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgICBpZiAoIXRoaXMubm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0KGZhbHNlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHRvZ2dsZVNlbGVjdChzaG93KSB7XHJcbiAgICBjb25zdCBtZXRoID0gc2hvdyA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZC1wYWdlLW5vdGVzJykuY2xhc3NMaXN0W21ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICB9LFxyXG4gIHRvZ2dsZVBhbGV0dGUoZSwgZWwpIHtcclxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLm5vdGVFbHNbZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyldO1xyXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rtbm90ZXBhbGV0dGUnKVswXTtcclxuICAgIHBhbGV0dGUuY2xhc3NMaXN0LnRvZ2dsZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICBpZiAoIXBhbGV0dGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd1LWRpc3BsYXktLW5vbmUnKSkge1xyXG4gICAgICBub3RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rtbm90ZS0tbWluJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlKGUsIGVsKSB7XHJcbiAgICBjb25zdCBub3RlID0gdGhpcy5ub3RlRWxzW2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXTtcclxuICAgIG5vdGUuY2xhc3NMaXN0LnRvZ2dsZSgndG1ub3RlLS1taW4nKTtcclxuICAgIGlmICghbm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rtbm90ZS0tbWluJykpIHtcclxuICAgICAgdGhpcy5hZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkLXBhZ2Utbm90ZXMnKS52YWx1ZSA9IDA7XHJcbiAgfSxcclxuICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgaWYgKGVsLnZhbHVlID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5ub3RlRWxzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlRWxzW2lkXS5jbGFzc0xpc3QuYWRkKCd0bW5vdGUtLW1pbicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbm90ZSwgdGV4dGFyZWE7XHJcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubm90ZUVscykge1xyXG4gICAgICAgIG5vdGUgPSB0aGlzLm5vdGVFbHNbaWRdO1xyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LnJlbW92ZSgndG1ub3RlLS1taW4nKTtcclxuICAgICAgICB0aGlzLmFkanVzdFRleHRhcmVhSGVpZ2h0KG5vdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZCA9PSBpZCk7XHJcbiAgfSxcclxuICBhZGp1c3RUZXh0YXJlYUhlaWdodChub3RlKSB7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IG5vdGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XHJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAxMCArICdweCc7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRtYXJrZXItc2lkZWJhcicpLFxyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdG9yZWQ6ZW50cnknOiAnc2hvd0VudHJ5U3BlY2lmaWNUYWJzJ1xyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICBjbGljazoge1xyXG4gICAgICAgICcudGFiX190aXRsZSc6ICd0b2dnbGUnLFxyXG4gICAgICAgICcudGFiX19uYW1lJzogJ3RvZ2dsZScsXHJcbiAgICAgICAgJy50YWJfX3RvZ2dsZSc6ICd0b2dnbGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0YWJzOiB7fSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICBpZiAoIXNldHRpbmdzIHx8ICFzZXR0aW5ncy5zYikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB0YWJTZXR0aW5ncyA9IHNldHRpbmdzLnNiLnRhYnM7XHJcbiAgICAgIGZvciAobGV0IHRhYiBpbiB0YWJTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMudGFic1t0YWJdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tJyArIHRhYik7XHJcbiAgICAgICAgaWYgKHRhYlNldHRpbmdzW3RhYl0udW5mb2xkZWQpIHRoaXMub3Blbih0YWIpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jbG9zZSh0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvcGVuKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZSgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIGNsb3NlKHRhYikge1xyXG4gICAgdGhpcy50YWJzW3RhYl0uY2xhc3NMaXN0LmFkZCgndGFiLS1mb2xkZWQnKTtcclxuICB9LFxyXG4gIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgZWwgPSBlbC5ub2RlTmFtZSA9PT0gJ0gyJyA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgdGFiID0gaWQuc3BsaXQoJy0tJykucG9wKCk7XHJcbiAgICBjb25zdCB0YWJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIHRhYkVsLmNsYXNzTGlzdC50b2dnbGUoJ3RhYi0tZm9sZGVkJyk7XHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZWQ6c2lkZWJhci10YWInLCB0YWIsICF0YWJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYi0tZm9sZGVkJykpO1xyXG4gIH0sXHJcbiAgc2hvd0VudHJ5U3BlY2lmaWNUYWJzKCkge1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWItLWVudHJ5JykpXHJcbiAgICAgIC5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5uZXcgX0RPTU1PRFVMRSh7XHJcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItLXRhZ3MnKSxcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RvcmVkOmVudHJ5JzogJ3JlbmRlcidcclxuICAgIH0sXHJcbiAgICBET006IHtcclxuICAgICAgY2xpY2s6IHtcclxuICAgICAgICAnLnRhZ3NfX3JlbW92ZSc6ICdyZW1vdmVUYWcnLFxyXG4gICAgICAgICcuYWRkLXRhZyc6ICdhZGRUYWcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW5kZXIoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgY29uc3QgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzJykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5yZW5kZXJUYWcodGFnKSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZW5kZXJUYWcodGFnKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncycpO1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMDA1KSk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSB1LW92ZXJmbG93LS1lbGxpcHNpcyc7XHJcbiAgICBkZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX3JlbW92ZSc7XHJcbiAgICBkZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhZycsIHRhZyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB0YWc7XHJcbiAgICBkZWwuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZChkZWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICB9LFxyXG4gIGFkZFRhZygpIHtcclxuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFnJyk7XHJcbiAgICBsZXQgdGFnID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghdGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2FkZDp0YWcnLCB0YWcsIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBpbnAudmFsdWUgPSAnJztcclxuICAgIHRhZy5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IHRoaXMucmVuZGVyVGFnKHRhZykpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlVGFnKGUsIGVsKSB7XHJcbiAgICB0aGlzLmVtaXQoJ3JlbW92ZTp0YWcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyksIF9TVE9SRS5lbnRyeSk7XHJcbiAgICBlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbm5ldyBfRE9NTU9EVUxFKHtcclxuICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0tdGhlbWVzJyksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBET006IHtcclxuICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgJy50aGVtZS1vcHQnOiAnb25DaGFuZ2UnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZTogJ2RlZmF1bHQnLFxyXG5cclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gc2V0dGluZ3MgJiYgc2V0dGluZ3Muc2IgJiYgc2V0dGluZ3Muc2IudGhlbWUgPyBzZXR0aW5ncy5zYi50aGVtZSA6ICdkZWZhdWx0JztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRoZW1lLS0ke3RoZW1lfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGVtZSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBvbkNoYW5nZShlLCBlbCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpzaWRlYmFyLXRoZW1lJywgdGhlbWUpO1xyXG4gICAgdGhpcy51cGRhdGUodGhlbWUpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHRoZW1lKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dG1hcmtlci1zaWRlYmFyJykuY2xhc3NOYW1lID0gYHRleHRtYXJrZXItc2lkZWJhci0tJHt0aGVtZX1gO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7IF9QUklWUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUFJJVlBPUlQoe1xyXG4gIG5hbWU6ICdzaWRlYmFyJyxcclxuICB0eXBlOiAncHJpdmlsZWdlZCcsXHJcbiAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zbGljZSgyLCAxNiksXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBDT05ORUNUSU9OOiBbXHJcbiAgICAgICdjaGFuZ2U6Ymctc2V0dGluZycsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnc2lkZWJhcjpoaWdobGlnaHQnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JyxcclxuICAgICAgJ3NpZGViYXI6Ym9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpkZWxldGUtYm9va21hcmsnLFxyXG4gICAgICAnc2lkZWJhcjpub3RlJyxcclxuICAgICAgJ3NpZGViYXI6aW1tdXQnLFxyXG4gICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnLFxyXG4gICAgICAnc2lkZWJhcjpyZXRyeS1yZXN0b3JhdGlvbicsXHJcbiAgICAgICdzaWRlYmFyOnVuZG8nLFxyXG4gICAgICAnc2lkZWJhcjpyZWRvJyxcclxuICAgICAgJ3NpZGViYXI6Y29weScsXHJcbiAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyaycsXHJcbiAgICAgICdzaWRlYmFyOnRvZ2dsZS1ub3RlcycsXHJcbiAgICAgICdzaWRlYmFyOm5leHQtbWFyaycsXHJcbiAgICAgICdyZW1vdmU6dGFnJyxcclxuICAgICAgJ2FkZDp0YWcnLFxyXG4gICAgICAnb3BlbjphZGRvbi1wYWdlKHNiKScsXHJcbiAgICAgICdvcGVuZWQ6c2lkZWJhcicsXHJcbiAgICAgICd1cGRhdGVkOnBhZ2Utbm90ZScsXHJcbiAgICAgICd0b2dnbGVkOnNpZGViYXItdGFiJyxcclxuICAgICAgJ3NpZGViYXI6c2VsZWN0ZWQtbWFya2VyJyxcclxuICAgICAgJ2NoYW5nZWQ6c2lkZWJhci10aGVtZSdcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnc2hpZnRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZSxcclxuICAgICAgYXV0b1JldHJ5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYWRkb246IHtcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBhdXRvY3M6IHRydWUsXHJcbiAgICAgIGlmcmFtZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBtaXNjOiB7XHJcbiAgICAgIGJtaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZWljb246IHRydWUsXHJcbiAgICAgIG5vdGVvbmNsaWNrOiB0cnVlLFxyXG4gICAgICBub3RldHJhbnNwOiBmYWxzZSxcclxuICAgICAgbm90ZXBsYWludmlldzogZmFsc2UsXHJcbiAgICAgIG5vdGVmb250c2l6ZTogMTIsXHJcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXHJcbiAgICAgIGZhaWx1cmVOb3RlOiB0cnVlLFxyXG4gICAgICBzdWNjZXNzTm90ZTogdHJ1ZSxcclxuICAgICAgcGJtTm90ZTogdHJ1ZSxcclxuICAgICAgY2hhbmdlZE5vdGU6IGZhbHNlLFxyXG4gICAgICBlcnJvck5vdGU6IHRydWUsXHJcbiAgICAgIHZpcE5vdGU6IHRydWUsXHJcbiAgICAgIGxvYWROb3RlOiBmYWxzZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAndG0nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b3J5OiB7XHJcbiAgICBlbnRyaWVzOiB7fVxyXG4gIH0sXHJcbiAgcGFnZW5vdGVzOiB7fSxcclxuICBzeW5jOiB7XHJcbiAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICBoaXN0b3J5OiBmYWxzZSxcclxuICAgIHBhZ2Vub3RlczogZmFsc2VcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgTUFYX0VOVFJZX05BTUVfQ0hBUlM6IDcwLFxyXG5cclxuICBNQVhfTE9HX0VOVFJJRVM6IDIwLFxyXG5cclxuICBOT1RFX0NPTE9SUzoge1xyXG4gICAgVFVSUVVPSVNFOiAnI2I5ZTRlYycsXHJcbiAgICBHUkVFTjogJyNjY2ZmY2MnLFxyXG4gICAgWUVMTE9XOiAnI2ZmZmZjYycsXHJcbiAgICBPUkFOR0U6ICcjZmZlZWJiJyxcclxuICAgIFJFRDogJyNmZmNjY2MnLFxyXG4gICAgUFVSUExFOiAnI2VlY2NmZicsXHJcbiAgICBCTFVFOiAnI2JiZWVmZicsXHJcbiAgICBXSElURTogJyNlZWVlZWUnXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiAnJztcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCwgJycpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlcicsICdIcmVmJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShhcmdzWzBdLnRhYklkLCB7IGV2OiBldmVudCwgd2FpdDogdHJ1ZSB9LCB7IGZyYW1lSWQ6IGFyZ3NbMF0uZnJhbWVJZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgIHRoaXMucmVnaXN0ZXJPbmVPZmZFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3Rlck9uZU9mZkV2ZW50cyhldmVudHMuT05FT0ZGKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbmVPZmZFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgfHwgKCBldmVudHMgPSB0aGlzLmV2ZW50cy5PTkVPRkYpO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgX1BSSVZQT1JUIGV4dGVuZHMgX1BPUlQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xyXG4gICAgICAgICAgIXRoaXMucG9ydCB8fCB0aGlzLnBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucG9ydExpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQ29ubmVjdGlvbkJhc2VkRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLkNPTk5FQ1RJT047XHJcblxyXG4gICAgICAgIGlmIChldmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBgJHt0aGlzLm5hbWV9XyR7dGhpcy5pZH1gIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wb3J0TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpO1xyXG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgX0JHUE9SVCBleHRlbmRzIF9QT1JUIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnBvcnRzID0ge307XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck9uQ29ubmVjdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbm5lY3Rpb25CYXNlZEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJDb25uZWN0aW9uQmFzZWRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ldmVudHMuQ09OTkVDVElPTjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJPbkNvbm5lY3RMaXN0ZW5lcigpIHtcclxuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3J0cyA9IHRoaXMucG9ydHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKTtcclxuICAgICAgICAgICAgcG9ydHNbcG9ydC5uYW1lXSA9IHBvcnQ7XHJcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcnRzW3BvcnQubmFtZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IHBvcnRzID0gdGhpcy5wb3J0cztcclxuICAgICAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcCBpbiBwb3J0cykge1xyXG4gICAgICAgICAgICBpZiAocG9ydHMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICBwb3J0c1twXS5wb3N0TWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBfUE9SVCwgX1BSSVZQT1JULCBfQkdQT1JUIH1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=