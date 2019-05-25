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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/addon-page/index.js");
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
exports._HASHLESS = exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../../utils/dommodule */ "./utils/dommodule.js");

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
exports._PORT = _port._PORT;
exports._L10N = _l10n2["default"];
exports._ERRORTRACKER = _errorTracker2["default"];
exports._HASHLESS = _hashless._HASHLESS;

/***/ }),

/***/ "./content/addon-page/_store.js":
/*!**************************************!*\
  !*** ./content/addon-page/_store.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  initializing: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_pagenotes: 'sync',
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
  _get_storage: function _get_storage() {
    var _this3 = this;

    return browser.storage.local.get().then(function (localStorage) {
      return browser.storage.sync.get().then(function (syncedStorage) {
        ['version', 'logs'].forEach(function (field) {
          localStorage[field] = localStorage[field] || syncedStorage[field];
        });
        if (_this3.area_settings === 'sync') localStorage.settings = syncedStorage.settings;
        return _this3._get_history().then(function (history) {
          localStorage.history = history;
          return localStorage;
        });
      });
    });
  },
  _get_local_storage: function _get_local_storage() {
    return browser.storage.local.get();
  },
  _get_synced_storage: function _get_synced_storage() {
    return browser.storage.sync.get();
  },
  _get_history: function _get_history() {
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
  },
  _get_settings: function _get_settings() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings;
    });
  },
  _get_logs: function _get_logs() {
    return browser.storage.local.get().then(function (localStorage) {
      if (!localStorage || !localStorage.logs) return [];
      return localStorage.logs;
    });
  },
  _get_download_option: function _get_download_option() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'text';
      return storage.settings.history.download;
    });
  },
  _get_markers: function _get_markers() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.markers;
    });
  },
  _get_shortcuts: function _get_shortcuts() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      return storage.settings.shortcuts;
    });
  }
});

/***/ }),

/***/ "./content/addon-page/bootstrap.js":
/*!*****************************************!*\
  !*** ./content/addon-page/bootstrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _history = __webpack_require__(/*! ./modules/history */ "./content/addon-page/modules/history.js");

var _history2 = _interopRequireDefault(_history);

var _settings = __webpack_require__(/*! ./modules/settings */ "./content/addon-page/modules/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _logs = __webpack_require__(/*! ./modules/logs */ "./content/addon-page/modules/logs.js");

var _logs2 = _interopRequireDefault(_logs);

var _syncing = __webpack_require__(/*! ./modules/syncing */ "./content/addon-page/modules/syncing.js");

var _syncing2 = _interopRequireDefault(_syncing);

var _import = __webpack_require__(/*! ./modules/import */ "./content/addon-page/modules/import.js");

var _import2 = _interopRequireDefault(_import);

var _contact = __webpack_require__(/*! ./modules/contact */ "./content/addon-page/modules/contact.js");

var _contact2 = _interopRequireDefault(_contact);

var _historyPagination = __webpack_require__(/*! ./modules/history-pagination */ "./content/addon-page/modules/history-pagination.js");

var _historyPagination2 = _interopRequireDefault(_historyPagination);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'start',
      'updated:settings': 'start',
      'updated:history': 'start'
    }
  },
  allowedHashes: ['news', 'manual', 'settings', 'history', 'contact', 'sync', 'export', 'logs'],
  bootstrapped: false,
  autoinit: function autoinit() {
    var _this = this;

    _store2["default"].get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history2["default"])();
      (0, _settings2["default"])();
      (0, _logs2["default"])();
      (0, _syncing2["default"])();
      (0, _import2["default"])();
      (0, _contact2["default"])();
      (0, _historyPagination2["default"])();
      this.initMainNav();
    }
  },
  initMainNav: function initMainNav() {
    var tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }

    new _nav2["default"](window.document.getElementById('mainnav'));
  }
});

/***/ }),

/***/ "./content/addon-page/index.js":
/*!*************************************!*\
  !*** ./content/addon-page/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/index.scss */ "./content/addon-page/sass/index.scss");

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _toggler = __webpack_require__(/*! ./modules/toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

__webpack_require__(/*! ./port */ "./content/addon-page/port.js");

__webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/addon-page/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _utils._L10N)();
/* auto-insert current version number */

document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */

var subnavs = document.getElementsByClassName('subnav');
var n = subnavs.length;

while (n--) {
  new _nav2["default"](subnavs[n]);
}
/* end: configure navs */

/* configure toggle elements */


var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
  new _toggler2["default"](toggleButtons[t]);
}
/* end: configure toggle elements */

/***/ }),

/***/ "./content/addon-page/modules/contact.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/contact.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit: function autoinit() {
      this.setAddonLinks().setLogLink();
    },
    setAddonLinks: function setAddonLinks() {
      var addonURL = browser.i18n.getMessage('url_moz_addon'),
          addonLinks = document.getElementsByClassName('moz-addon'),
          a = addonLinks.length,
          aL;

      while (a--) {
        aL = addonLinks[a];
        aL.href = addonURL;
        if (aL.id === 'moz-addon--contact') aL.innerText = addonURL;
      }

      return this;
    },
    setLogLink: function setLogLink() {
      var logLink = document.getElementById('log-mail');

      _store2["default"].get('logs').then(function (logs) {
        var l = logs ? logs.length : 0,
            href = 'mailto:undflybir@gmx.de?subject=Textmarker' + encodeURIComponent(' : Error Logs') + '&body=' + encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log;

        while (l--) {
          log = logs[l];
          href += log[1] + (log[2] ? ' (' + log[2] + ')' : '') + ' - ' + encodeURIComponent(new Date(log[0]).toUTCString() + '\n');
        }

        logLink.href = href;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-pagination.js":
/*!**********************************************************!*\
  !*** ./content/addon-page/modules/history-pagination.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('paginator'),
    events: {
      ENV: {
        'saved:entry': 'add',
        'deleted:entries': 'updateFromStorage',
        'filtered:history': 'reset',
        'imported:history': 'updateFromStorage',
        'changed:per-page-count': 'changeCountPerPage'
      },
      DOM: {
        click: {
          '.page': 'goto',
          '.prev': 'prev',
          '.next': 'next'
        }
      }
    },
    numberPages: 1,
    numberEntries: 0,
    currentPage: 1,
    perPage: 10,
    autoinit: function autoinit() {
      this.updateFromStorage();
    },
    "goto": function goto(e, el) {
      var newPage = el.getAttribute('data-page') * 1;

      if (this.currentPage !== newPage) {
        this.emit('paginate:history', newPage);
        this.currentPage = newPage;
        this.render();
      }
    },
    prev: function prev() {
      if (this.currentPage === 1) return;
      this.emit('paginate:history', --this.currentPage);
      this.render();
    },
    next: function next() {
      if (this.currentPage === this.numberPages) return;
      this.emit('paginate:history', ++this.currentPage);
      this.render();
    },
    add: function add() {
      this.update(++this.numberEntries);
    },
    remove: function remove() {
      this.update(--this.numberEntries);
    },
    updateFromStorage: function updateFromStorage() {
      var _this = this;

      _store2["default"].get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store2["default"].get('history').then(function (history) {
          return _this.update(Object.keys(history.entries).length);
        });
      });
    },
    update: function update(l, silent) {
      this.numberEntries = l;
      this.numberPages = l ? Math.ceil(l / this.perPage) : 1;

      if (this.currentPage > this.numberPages) {
        this.currentPage = this.numberPages;
        if (!silent) this.emit('paginate:history', this.currentPage);
      }

      this.render();
    },
    reset: function reset(l) {
      this.currentPage = 1;
      this.update(l);
    },
    render: function render() {
      var ul = document.getElementById('paginator-list');
      var l = this.numberEntries;
      Array.from(ul.getElementsByClassName('page')).forEach(function (li) {
        return li.remove();
      });

      if (l < this.perPage + 1) {
        this.el.classList.add('u-display--none');
        return;
      } else {
        this.el.classList.remove('u-display--none');
      }

      var p = this.currentPage;
      var pages = this.numberPages;
      var r = 7 - (pages - 1 - p);
      var frag = document.createDocumentFragment();
      var next = ul.getElementsByClassName('next')[0];
      var i = Math.max(2, p - 7);
      if (r > 0) i = Math.max(2, Math.min(i, i - r));
      var j = Math.min(pages, i + 14) + 1;
      this.appendButton(frag, 1);

      for (; i < j; i++) {
        this.appendButton(frag, i);
      }

      if (pages > j - 1) this.appendButton(frag, pages);
      ul.insertBefore(frag, next);
    },
    appendButton: function appendButton(frag, b) {
      var btn = document.createElement('li');
      btn.setAttribute('data-page', b);
      btn.appendChild(document.createTextNode(b));
      btn.classList.add('page');
      if (b === this.currentPage) btn.classList.add('active');
      frag.appendChild(btn);
    },
    changeCountPerPage: function changeCountPerPage(p) {
      this.perPage = p;
      this.update(this.numberEntries, true);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/history-sort.js":
/*!****************************************************!*\
  !*** ./content/addon-page/modules/history-sort.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  by: {
    date: {
      created: function created(object) {
        return this._sort(object, 'first');
      },
      last: function last(object) {
        return this._sort(object, 'last');
      },
      _sort: function _sort(object, field) {
        return Object.keys(object).sort(function (a, b) {
          return new Date(object[b][field]) - new Date(object[a][field]);
        });
      }
    },
    name: {
      az: function az(object) {
        return this._sort(object);
      },
      za: function za(object) {
        return this._sort(object).reverse();
      },
      _sort: function _sort(object) {
        return Object.keys(object).sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
      }
    }
  }
};

/***/ }),

/***/ "./content/addon-page/modules/history.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/history.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _ref;

  return new _utils._DOMMODULE((_ref = {
    el: document.getElementById('history'),
    events: {
      ENV: {
        'opened:tab': 'init',
        'updated:history': 'render',
        'failed:sync-entry': 'undoSyncToggle',
        'paginate:history': 'paginate'
      },
      DOM: {
        click: {
          '.action-button': 'delegateButtonAction',
          '.switch': 'toggleSwitch',
          '.name': 'open',
          '.edit': 'edit',
          '.view': 'view',
          '#search-toggle': 'toggleSearch',
          '#remove-filter': 'removeFilter',
          '.tags__item': 'filter'
        },
        change: {
          '.checkmark-all': 'checkmarkAll',
          '#sort-entries': 'sort',
          '#filter-entries': 'filter',
          '#entries-per-page': 'changeCountPerPage',
          '#set-view': 'setView',
          '#action': 'onChangeAction'
        },
        keyup: {
          '.search-entries': 'search'
        }
      }
    },
    initialized: false,
    names: [],
    entries: {},
    entryTmpl: document.getElementById('entry-template'),
    entriesContainer: document.getElementById('entries'),
    page: 1,
    perPage: 10,
    sorted: 'date-last',
    viewMode: 'list',
    searchTerm: '',
    searched: [],
    tags: [],
    filtered: false,
    filterOptionsSet: false,
    init: function init(tab) {
      if (tab !== 'history') return;
      if (!this.initialized) this.render();
      this.initialized = true;
    },
    resume: function resume() {
      this.filterOptionsSet = false;
      this.tags = [];
    }
  }, _defineProperty(_ref, 'delete', function _delete(names) {
    var msg = 'del_confirm';
    var l = names.length;

    while (l--) {
      if (this.entries[names[l]].locked) {
        msg += '_locked';
        break;
      }
    }

    var confirmed = window.confirm(browser.i18n.getMessage(msg));
    if (confirmed) this.emit('delete:entries', names);
  }), _defineProperty(_ref, "clean", function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_ref, "download", function download(names, type, spec) {
    var _this = this;

    if (typeof type !== 'string') {
      return _store2["default"].get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        if (type === 'json') _this["export"](names);else _this.download(names, type, spec);
      });
    }

    this.getData(names, type, spec).then(function (data) {
      var text = encodeURIComponent(data),
          link = document.createElement('a');
      link.setAttribute('download', 'Textmarker (' + names.join('_') + ').txt');
      link.href = 'data:text/plain;charset=utf-8,' + text;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, "export", function _export(names) {
    var backup = {
      history: {
        entries: {}
      }
    },
        entries = backup.history.entries,
        link = document.createElement('a');

    _store2["default"].get('history').then(function (history) {
      var name;

      while (names.length) {
        name = names.pop();
        entries[name] = history.entries[name];
      }

      backup = encodeURIComponent(JSON.stringify(backup));
      link.setAttribute('download', 'Textmarker-backup-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
      link.href = 'data:text/json;charset=utf-8,' + backup;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, "sync", function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_ref, "visit", function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls, names);
    });
  }), _defineProperty(_ref, "open", function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'), el.getAttribute('data-name'));
  }), _defineProperty(_ref, "edit", function edit(e, el) {
    var newName = window.prompt(browser.i18n.getMessage('nm_message_edit'));

    if (newName) {
      var oldName = el.getAttribute('data-name');
      var area = el.parentNode.getElementsByClassName('switch--sync')[0].classList.contains('active') ? 'sync' : 'local';
      this.emit('rename:entry', oldName, newName, area);
    }
  }), _defineProperty(_ref, "view", function view(e, el) {
    this.emit('view:entry', el.getAttribute('data-name'));
  }), _defineProperty(_ref, "tag", function tag(names, _tag, force) {
    var _this3 = this;

    if (!_tag && !force) return;
    var o = {
      sync: [],
      local: []
    };
    names.forEach(function (name) {
      if (_this3.origEntries[name].synced) o.sync.push(name);else o.local.push(name);
    });
    this.emit('tag:entries', o, _tag);
  }), _defineProperty(_ref, "removeTags", function removeTags(names) {
    this.tag(names, '', true);
  }), _defineProperty(_ref, "processSelection", function processSelection() {
    var checked = document.querySelectorAll('.entry-cb:checked'),
        i = checked.length;
    if (!i) return false;
    var action = document.getElementById('action').value,
        names = [];

    while (i--) {
      names.push(checked[i].getAttribute('data-name'));
    }

    if (action === 'tag') {
      var val = document.getElementById('tag').value;
      this.tag(names, val);
    } else {
      var split = document.getElementById('specification').value.split(' '),
          type = split[0],
          spec = split[1];
      !this[action] || this[action](names, type, spec);
    }
  }), _defineProperty(_ref, "renderEntries", function renderEntries() {
    var _this4 = this;

    var template = this.entryTmpl,
        container = this.entriesContainer,
        entries = this.entries,
        searchTerm = this.searchTerm,
        searchTermLength = searchTerm ? searchTerm.length : 0,
        searched = !!searchTerm,
        searchedFullText = this.searchedFullText,
        names = searched ? this.searched : this.names,
        l = searched ? names.length : this.page * this.perPage,
        i = searched ? 0 : l - this.perPage,
        clone,
        entry,
        name,
        nameField,
        input,
        label,
        infoButton,
        details,
        searchResults,
        buttons,
        edit,
        view,
        tags,
        immut,
        immutEl,
        locked,
        lockedEl,
        tagEl,
        b,
        j;

    if (this.filtered) {
      names = names.filter(function (n) {
        return !!entries[n];
      });
    }

    l = Math.min(l, names.length);
    container.innerText = '';
    document.getElementById('checkmark-all').checked = false;
    if (!l) return this;

    for (; i < l; i++) {
      (function (i, j) {
        name = names[i];
        entry = entries[name];

        if (entry) {
          tags = entry.tag ? entry.tag.split(' ') : null;
          locked = entry.locked;
          immut = entry.immut;
          clone = template.cloneNode(true);
          container.appendChild(clone);
          clone.id = 'entry-' + j;
          clone.classList.remove('u-display--none');
          clone.setAttribute('data-name', name);
          nameField = clone.getElementsByClassName('name')[0];
          input = clone.getElementsByTagName('input')[0];
          label = clone.getElementsByTagName('label')[0];
          details = clone.getElementsByClassName('details')[0];
          searchResults = clone.getElementsByClassName('search-results')[0];
          buttons = clone.getElementsByClassName('quick-action');
          edit = clone.getElementsByClassName('edit')[0];
          view = clone.getElementsByClassName('view')[0];
          tagEl = clone.getElementsByClassName('tags')[0];
          lockedEl = clone.getElementsByClassName('locked')[0];
          immutEl = clone.getElementsByClassName('immut')[0];
          b = buttons.length;

          while (b--) {
            buttons[b].setAttribute('data-name', name);
          }

          nameField.appendChild(document.createTextNode(name));
          nameField.setAttribute('data-url', entry.url);
          nameField.setAttribute('data-name', name);
          input.className = 'entry-cb';
          input.id = 'entry-cb-' + j;
          input.setAttribute('data-name', name);
          view.setAttribute('data-name', name);
          label.setAttribute('for', 'entry-cb-' + j);

          if (locked) {
            lockedEl.classList.remove('u-display--none');
          } else {
            edit.classList.remove('u-display--none');
            edit.setAttribute('data-name', name);
          }

          if (immut) immutEl.classList.remove('u-display--none');

          if (tags) {
            tags.forEach(function (tag) {
              var el = document.createElement('span');
              tagEl.appendChild(el);
              el.className = 'tags__item';
              el.appendChild(document.createTextNode(tag));
              el.setAttribute('title', browser.i18n.getMessage('title_filter'));
            });
          } else {
            tagEl.innerText = browser.i18n.getMessage('detail_notag');
          }

          clone.getElementsByClassName('created')[0].innerText = _this4.optimizeDateString(new Date(entry.first).toLocaleString());
          clone.getElementsByClassName('last')[0].innerText = _this4.optimizeDateString(new Date(entry.last).toLocaleString());
          clone.getElementsByClassName('count')[0].innerText = entry.marks.length; //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

          if (entry.synced === undefined || entry.synced) {
            clone.getElementsByClassName('switch--sync')[0].classList.add('active');
          }

          if (searchedFullText) {
            var fullTextSearchResults = _this4.fullTextSearchResults[name];

            if (fullTextSearchResults) {
              var r = 0,
                  res,
                  mark,
                  pos,
                  markText,
                  markTextEl,
                  highlight,
                  t1,
                  t2,
                  t3;

              for (; r < fullTextSearchResults.length; r++) {
                res = fullTextSearchResults[r];
                mark = entry.marks[res.mark];
                pos = res.pos;
                markText = mark.text;
                markTextEl = document.createElement('div');
                t1 = markText.substring(Math.max(pos - 16, 0), pos);
                t2 = markText.substr(pos, searchTermLength);
                t3 = markText.substr(pos + searchTermLength, 16);
                t1 = t1 ? '... ' + t1 : t1;
                t3 = t3 ? t3 + ' ...' : t3;
                highlight = document.createElement('span');
                highlight.className = 'highlight';
                highlight.appendChild(document.createTextNode(t2));
                markTextEl.appendChild(document.createTextNode(t1));
                markTextEl.appendChild(highlight);
                markTextEl.appendChild(document.createTextNode(t3));
                searchResults.appendChild(markTextEl);
              }
            }
          }
        }
      })(i, l - i - 1);
    }

    return this;
  }), _defineProperty(_ref, "toggleHeaderFields", function toggleHeaderFields(l) {
    var _this5 = this;

    var noEntriesHint = document.getElementById('no-entries');
    var search = document.getElementById('search');
    var actions = document.getElementById('history-actions');
    var sort = document.getElementById('sort');
    var filter = document.getElementById('filter');
    var count = document.getElementById('count');
    var view = document.getElementById('view');
    var ppSelect = document.getElementById('entries-per-page');
    var checkall = document.getElementById('checkmark-all-container');
    var meth_0 = !l ? 'remove' : 'add';
    var meth_1 = l > 0 ? 'remove' : 'add';
    var meth_2 = l > 2 ? 'remove' : 'add';
    var meth_3 = l > 10 ? 'remove' : 'add';
    noEntriesHint.classList[meth_0]('u-display--none');
    actions.classList[meth_1]('u-display--none');
    search.classList[meth_2]('u-display--none');
    sort.classList[meth_2]('u-display--none');
    filter.classList[meth_1]('u-display--none');
    count.classList[meth_3]('u-display--none');
    view.classList[meth_1]('u-display--none');
    checkall.classList[meth_2]('u-display--none');
    document.getElementById('entries-count').innerText = l;
    return _store2["default"].get('settings').then(function (settings) {
      var pp = _this5.perPage = settings.history.pp || 10;
      ppSelect.value = pp;
    });
  }), _defineProperty(_ref, "setFilterOptions", function setFilterOptions() {
    var _this6 = this;

    if (this.filterOptionsSet) return this;
    var select = document.getElementById('filter-entries');
    var placeholderOption = document.createElement('option');
    var allTags = [];
    var entries = this.origEntries;
    var tags;
    select.innerText = '';
    select.appendChild(placeholderOption);
    placeholderOption.setAttribute('selected', '');
    placeholderOption.setAttribute('hidden', '');
    placeholderOption.innerText = browser.i18n.getMessage('t5124');

    for (var name in entries) {
      tags = entries[name].tag;
      tags = tags ? tags.split(' ') : [];
      tags.forEach(function (tag) {
        if (!allTags.includes(tag)) allTags.push(tag);
      });
    }

    if (!allTags.length && !document.getElementById('filter-opt-notag')) {
      this.addFilterOpt('', browser.i18n.getMessage('detail_notag'), {
        disabled: true,
        id: 'filter-opt-notag'
      });
    } else {
      allTags.forEach(function (tag) {
        return _this6.addFilterOpt(tag, tag);
      });

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    this.filterOptionsSet = true;
  }), _defineProperty(_ref, "addFilterOpt", function addFilterOpt(tag, text, attrs) {
    if (this.tags.includes(tag)) return this;
    var select = document.getElementById('filter-entries');
    var opt = document.createElement('option');
    select.appendChild(opt);
    opt.value = tag;
    opt.innerText = text;

    if (attrs) {
      for (var a in attrs) {
        opt.setAttribute(a, attrs[a]);
      }
    }

    if (!this.tags.length && tag) {
      var notagFilterOpt = document.getElementById('filter-opt-notag');
      if (notagFilterOpt) select.removeChild(notagFilterOpt);

      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), {
          id: 'filter-opt-tagless'
        });
      }
    }

    if (tag) this.tags.push(tag);
  }), _defineProperty(_ref, "getText", function getText(names, spec) {
    var _this7 = this;

    var all_marks_plus_meta = spec === '+meta',
        all_marks_plus_lost = spec === '+lost',
        all_marks_plus_meta_and_notes = spec === '+notes',
        all_marks_lost = spec === 'lost',
        defaultMarkers = ['m', '2', '3', 2, 3],
        reject = defaultMarkers.includes(spec) ? function (key) {
      return key != spec;
    } : spec === 'c' ? function (key) {
      return defaultMarkers.includes(key);
    } : null,
        newLine = '\r\n',
        newLines = '\r\n\r\n',
        note = browser.i18n.getMessage('note'),
        text = '',
        l = names.length,
        i = 0,
        noteText,
        entry,
        marks,
        mark,
        lost,
        name,
        m,
        n,
        j;
    return _store2["default"].get('history').then(function (history) {
      var entries = history.entries;

      for (; i < l; i++) {
        name = names[i];
        entry = entries[name];
        marks = entry.marks;
        lost = entry.lost;
        m = marks.length;
        n = lost.length;

        if (!all_marks_lost) {
          if (all_marks_plus_meta || all_marks_plus_meta_and_notes) {
            text += name + newLine + 'URL: ' + entry.url + newLine + browser.i18n.getMessage('page_title') + ': ' + entry.title + newLine + browser.i18n.getMessage('created') + ': ' + _this7.optimizeDateString(new Date(entry.first).toLocaleString()) + newLine + browser.i18n.getMessage('last_modified') + ': ' + _this7.optimizeDateString(new Date(entry.last).toLocaleString()) + newLine + newLines;
          }

          for (j = 0; j < m; j++) {
            mark = marks[j];
            if (reject && reject(mark.key)) continue;

            if (all_marks_plus_meta_and_notes) {
              text += '---' + newLine;
            }

            text += mark.text.replace(/\n/g, '\r\n') + newLines;

            if (all_marks_plus_meta_and_notes && mark.note) {
              noteText = mark.note.text || mark.note;
              text += '  ' + note + ':' + newLine + '  ' + noteText.replace(/\n/g, '\r\n  ') + newLines;
            }
          }
        }

        if (all_marks_lost || all_marks_plus_lost) {
          text += newLines + browser.i18n.getMessage('lost_marks') + ':' + newLines + newLines;

          for (j = 0; j < n; j++) {
            mark = lost[j];
            text += mark.text.replace(/\n/g, '\r\n') + newLines;
          }
        }

        text += newLines + newLines + newLines;
      }

      return text.trim();
    });
  }), _defineProperty(_ref, "getData", function getData(names, type, spec) {
    var _this8 = this;

    if (type === 'text') return this.getText(names, spec);
    return _store2["default"].get('history').then(function (history) {
      var entries = _this8.origEntries = history.entries,
          l = names.length,
          data = '',
          newLines = '\r\n\r\n',
          i = 0;

      for (; i < l; i++) {
        data += entries[names[i]][type] + newLines;
      }

      return data;
    });
  }), _defineProperty(_ref, "getURLs", function getURLs(names) {
    return _store2["default"].get('history').then(function (history) {
      var entries = history.entries,
          urls = [],
          l = names.length,
          i = 0;

      for (; i < l; i++) {
        urls.push(entries[names[i]].url);
      }

      return urls;
    });
  }), _defineProperty(_ref, "optimizeDateString", function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_ref, "search", function search(e, el) {
    var term = el.value.toLowerCase();
    var searchType = el.getAttribute ? el.getAttribute('data-type') : '';
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term, searchType).renderEntries();
    countSelect.classList[classMeth]('u-display--none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_ref, "setupSearch", function setupSearch(term, searchType) {
    term = typeof term === 'string' ? term : this.searchTerm;
    var history = this.el;
    var searchCount = document.getElementById('search-count');
    this.searched = [];
    this.searchTerm = term;

    if (!term) {
      history.classList.remove('searched');
      history.classList.remove('searched--full-text');
      searchCount.innerText = '';
      this.searchedFullText = false;
      return this;
    } else {
      history.classList.add('searched');

      if (searchType === 'full-text') {
        history.classList.add('searched--full-text');
        this.searchFullText(term);
        this.searchedFullText = true;
      } else {
        history.classList.remove('searched--full-text');
        this.searchByName(term);
        this.searchedFullText = false;
      }

      searchCount.innerText = this.searched.length || '';
    }

    return this;
  }), _defineProperty(_ref, "searchByName", function searchByName(term) {
    var names = this.names;
    var l = names.length,
        i = 0,
        name;

    for (; i < l; i++) {
      name = names[i];

      if (name.toLowerCase().search(term) !== -1) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "searchFullText", function searchFullText(text) {
    var entries = this.origEntries;
    var name, marks, i, markText, pos, found;
    var results = this.fullTextSearchResults = {};

    for (name in entries) {
      marks = entries[name].marks;
      found = false;

      for (i = 0; i < marks.length; i++) {
        markText = marks[i].text;
        pos = markText.toLowerCase().search(text);

        if (pos !== -1) {
          found = true;
          results[name] = results[name] || [];
          results[name].push({
            mark: i,
            pos: pos
          });
        }
      }

      if (found) {
        this.searched.push(name);
      }
    }
  }), _defineProperty(_ref, "toggleSearch", function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries--name').value = '';
      document.getElementById('search-entries--full-text').value = '';
      if (this.searchTerm) this.search(null, {
        value: ''
      });
    }
  }), _defineProperty(_ref, "changeCountPerPage", function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_ref, "setView", function setView(e, el) {
    var table = document.getElementById('entries');
    var val = el.value;
    if (val === 'list') table.classList.remove('detailed-list');else table.classList.add('detailed-list');
    this.emit('change:view-setting', val);
  }), _defineProperty(_ref, "setupView", function setupView(view) {
    document.getElementById('set-view').value = view;
    this.setView(null, {
      value: view
    });
  }), _defineProperty(_ref, "onChangeAction", function onChangeAction(e, el) {
    if (el.value === 'tag') setTimeout(function () {
      return document.getElementById('tag').focus();
    }, 0);
  }), _defineProperty(_ref, "sort", function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_ref, "setupSort", function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2["default"].by[sorted[0]][sorted[1]](this.origEntries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_ref, "filter", function filter(e, el) {
    var filter = el.nodeName === 'SPAN' ? el.firstChild.data : el.value;
    var entries = this.origEntries;
    var filteredEntries = {};
    var entry,
        rx,
        c = 0;
    document.getElementById('filter').classList.add('active');

    for (var name in entries) {
      entry = entries[name];
      rx = new RegExp('^' + filter + '$|^' + filter + '\\s|\\s' + filter + '\\s|\\s' + filter + '$', 'g');

      if (filter && entry.tag && entry.tag.search(rx) !== -1 || !entry.tag && filter == '') {
        filteredEntries[name] = entry;
        c++;
      }
    }

    this.entries = filteredEntries;
    this.filtered = true;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', c);
  }), _defineProperty(_ref, "removeFilter", function removeFilter(e, el) {
    el.parentNode.classList.remove('active');
    document.getElementById('filter-entries').selectedIndex = 0;
    this.entries = this.origEntries;
    this.filtered = false;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', this.names.length);
  }), _defineProperty(_ref, "sortSearchResults", function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_ref, "checkmarkAll", function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }

    return false;
  }), _defineProperty(_ref, "delegateButtonAction", function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');
    name = name ? [name] : undefined;
    !this[action] || this[action](name, el);
  }), _defineProperty(_ref, "toggleSwitch", function toggleSwitch(e, el) {
    el = el.classList.contains('switch--sync') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_ref, "undoSyncToggle", function undoSyncToggle(name) {
    document.querySelector('.switch--sync[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_ref, "render", function render() {
    var _this9 = this;

    this.resume();

    _store2["default"].get().then(function (storage) {
      var entries = _this9.entries = _this9.origEntries = storage.history.entries,
          sorted = storage.settings.history.sorted || _this9.sorted,
          view = storage.settings.history.view || _this9.viewMode,
          l;
      _this9.sorted = sorted;

      _this9.setupSort(sorted);

      _this9.setupView(view);

      l = _this9.names.length;

      _this9.setupSearch().toggleHeaderFields(l).then(function () {
        return _this9.renderEntries().setFilterOptions();
      });
    });
  }), _defineProperty(_ref, "paginate", function paginate(page) {
    this.page = page;
    this.renderEntries();
  }), _defineProperty(_ref, "updateEntry", function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');
    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length; //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _ref));
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

var _historySort = __webpack_require__(/*! ./history-sort */ "./content/addon-page/modules/history-sort.js");

var _historySort2 = _interopRequireDefault(_historySort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),

/***/ "./content/addon-page/modules/import.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/import.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('export'),
    events: {
      ENV: {
        'updated:settings': 'updateExportLinks',
        'updated:history': 'updateExportLinks',
        'toggled:sync': 'updateExportLinks',
        'synced:entry': 'updateExportLinks'
      },
      DOM: {
        click: {
          '.import-button': 'triggerFileInput'
        },
        change: {
          '.import-file': 'handleFile'
        },
        mousedown: {
          '.export-button': 'updateExportName'
        }
      }
    },
    autoinit: function autoinit() {
      this.updateExportLinks();
    },
    "import": function _import(storeString, type) {
      var parsedString;

      try {
        parsedString = JSON.parse(storeString);
      } catch (e) {
        return this.displayFailure(browser.i18n.getMessage('error_file_parse'));
      }

      if (parsedString) {
        this.emit('import:storage', parsedString, type);
        this.displayFailure('');
      }
    },
    triggerFileInput: function triggerFileInput(e, el) {
      document.getElementById('import--' + el.getAttribute('data-type')).click();
    },
    handleFile: function handleFile(e, el) {
      var reader = new FileReader(),
          file = el.files[0],
          size = file.size / 1000000,
          type = el.getAttribute('data-type'),
          mod = this;
      if (size > 50) return this.displayFailure(browser.i18n.getMessage('error_file_size'));
      if (type === 'sync' && size > 0.099) return this.displayFailure(browser.i18n.getMessage('error_file_size_sync'));
      if (file.name.split('.').pop() !== 'json') return this.displayFailure(browser.i18n.getMessage('error_file_format'));

      reader.onload = function (file) {
        return function (e) {
          mod["import"](e.target.result, type);
        };
      }(file);

      reader.readAsText(file);
    },
    displayFailure: function displayFailure(reason) {
      document.getElementById('import-error').innerText = reason;
    },
    updateExportLinks: function updateExportLinks() {
      var localDataLink = document.getElementById('export-local');
      var syncedDataLink = document.getElementById('export-synced');

      _store2["default"].get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store2["default"].get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/logs.js":
/*!********************************************!*\
  !*** ./content/addon-page/modules/logs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('logs'),
    events: {
      ENV: {
        'updated:logs': 'log'
      },
      DOM: {
        click: {
          '#clear-logs': 'clear'
        }
      }
    },
    autoinit: function autoinit() {
      this.log();
    },
    log: function log() {
      var _this = this;

      _store2["default"].get('logs').then(function (logs) {
        logs = logs || [];

        var tableBody = _this.el.getElementsByTagName('tbody')[0],
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr,
            td_date,
            td_msg,
            node_date,
            node_msg,
            log,
            time,
            msg,
            reason;

        if (l) {
          _this.el.classList.remove('nologs');

          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2["default"].getKeyByValue(log[1])); //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}

            time = _this.optimizeDateString(new Date(log[0]).toLocaleString());
            tr = document.createElement('tr');
            td_date = document.createElement('td');
            td_msg = document.createElement('td');
            node_date = document.createTextNode(time);
            node_msg = document.createTextNode(msg);
            td_date.appendChild(node_date);
            td_msg.appendChild(node_msg);

            if (log[2]) {
              reason = document.createElement('div'); //reason.appendChild(document.createTextNode(log[2]));

              reason.innerText = log[2];
              td_msg.appendChild(reason);
            }

            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }

          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          _this.el.classList.add('nologs');
        }
      });
    },
    clear: function clear() {
      this.emit('clear:logs');
    },
    optimizeDateString: function optimizeDateString(date) {
      return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
        return '0' + p + q;
      }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
        return p + '0' + q;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _logKeys = __webpack_require__(/*! ../../../data/log-keys */ "./data/log-keys.js");

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/marker.js":
/*!**********************************************!*\
  !*** ./content/addon-page/modules/marker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _MARKER =
/*#__PURE__*/
function () {
  function _MARKER(key, customBgColor) {
    var _this = this;

    _classCallCheck(this, _MARKER);

    this.key = key;
    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
      'border-bottom': undefined,
      'font-size': undefined,
      'font-family': undefined,
      'font-weight': undefined,
      'font-style': undefined,
      'text-decoration': undefined,
      'text-shadow': undefined
    };
    this.shadow = {
      x: '1px',
      y: '1px',
      blur: '1px',
      color: '#000000'
    };
    this.init().then(function () {
      return _this.inject().preview();
    });
  }

  _createClass(_MARKER, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      return _store2["default"].get('markers').then(function (markers) {
        var marker = markers[_this2.key];
        var existingStyle = marker ? marker.style : null;
        _this2.autonote = marker && marker.autonote ? true : false;
        if (!existingStyle) _this2.setStyle();else _this2.style = existingStyle;

        var styles = _this2.style.split(';'),
            i = styles.length,
            style,
            styleSplit,
            textShadow;

        while (i--) {
          style = styles[i];

          if (style) {
            styleSplit = style.split(':');
            _this2.styles[styleSplit[0]] = styleSplit[1];
          }
        }

        if ((textShadow = _this2.styles['text-shadow']) && textShadow !== 'none') {
          var shadowSplit = textShadow.split(' ');
          _this2.shadow.x = shadowSplit[0];
          _this2.shadow.y = shadowSplit[1];
          _this2.shadow.blur = shadowSplit[2];
          _this2.shadow.color = shadowSplit[3];
        }
      });
    }
  }, {
    key: "inject",
    value: function inject() {
      var marker = this,
          styles = this.styles,
          bgInput = document.getElementById('bg-color'),
          colorInput = document.getElementById('text-color'),
          borderInput = document.getElementById('border-color'),
          autonoteInput = document.getElementById('autonote-color'),
          bg = styles['background-color'],
          color = styles['color'],
          border = styles['border-bottom'],
          autonoteColor = this.autonote || '',
          shadow,
          shadowSelect,
          i;
      document.getElementById('auto-note').checked = this.autonote;
      autonoteInput.value = autonoteColor || 'yellow';
      autonoteInput.disabled = !autonoteColor;
      document.getElementById('bg-color-checkbox').checked = !!bg;
      bgInput.value = bg || '#ffffff';
      bgInput.disabled = !bg;
      document.getElementById('text-color-checkbox').checked = !!color;
      colorInput.value = color || '#000000';
      colorInput.disabled = !color;
      document.getElementById('border-color-checkbox').checked = !!border;
      borderInput.value = border || '1px solid #ff0000';
      borderInput.disabled = !border;
      ['font-size', 'font-family', 'font-weight', 'font-style', 'text-decoration'].forEach(function (prop) {
        document.getElementById(prop).value = styles[prop] || 'default';
      });
      shadowSelect = document.getElementById('text-shadow');
      shadow = styles['text-shadow'];
      i = !shadow ? 0 : shadow === 'none' ? 2 : 1;
      shadowSelect.selectedIndex = i;
      shadowSelect.children[i].click();
      ['x', 'y', 'blur', 'color'].forEach(function (prop) {
        document.getElementById('text-shadow-' + prop).value = marker.shadow[prop].replace('px', '');
      });
      return this;
    }
  }, {
    key: "preview",
    value: function preview() {
      document.getElementById('example').style = this.style;
      return this;
    }
  }, {
    key: "update",
    value: function update(el) {
      var classes = el.classList,
          prop = el.name,
          val;

      if (classes.contains('css-color')) {
        if (el.checked) {
          val = document.getElementById(el.getAttribute('data-target')).value;
          if (!this.isValid(prop, val)) return false;
          this.styles[prop] = prop === 'border-bottom' ? '1px solid ' + val : val;
        } else {
          this.styles[prop] = undefined;
        }
      } else if (classes.contains('shadow')) {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else {
          var marker = this;

          switch (val) {
            case 'none':
              marker.styles['text-shadow'] = 'none';
              break;

            case 'default':
              marker.styles['text-shadow'] = undefined;
              break;

            case 'shadow':
              marker.setShadow();
              break;

            default:
              return false;
          }
        }
      } else if (classes.contains('shadow-value')) {
        val = el.value;
        if (!this.isValid(prop, val)) this.styles[prop] = '';else {
          if (classes.contains('shadow-px-value')) val += 'px';
          this.shadow[prop] = val;
          this.setShadow();
        }
      } else if (prop === 'border-bottom') {
        val = '1px solid ' + el.value;
        this.styles[prop] = val;
      } else {
        val = el.value;
        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else this.styles[prop] = val;
      }

      return this.setStyle().preview();
    }
  }, {
    key: "isValid",
    value: function isValid(prop, val) {
      var valid;

      switch (prop) {
        case 'background-color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'color':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'border-bottom':
          valid = /^#[0-9A-F]{6}$/i.test(val);
          break;

        case 'font-size':
          valid = /^[0-9]{1,2}px$/.test(val);
          break;

        case 'font-family':
          valid = /^[a-z,\s-]{5,40}$/i.test(val);
          break;

        case 'font-weight':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'font-style':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'text-decoration':
          valid = /^[a-z-]{7,12}$/i.test(val);
          break;

        case 'text-shadow':
          valid = /^[a-z]{4,7}$/i.test(val);
          break;

        case 'x':
          valid = /^\d$/;
          break;

        case 'y':
          valid = /^\d$/;
          break;

        case 'blur':
          valid = /^\d$/;
          break;

        default:
          valid = false;
      }

      return valid;
    }
  }, {
    key: "setShadow",
    value: function setShadow() {
      this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      var style = '',
          val;

      for (var i in this.styles) {
        val = this.styles[i];
        if (val) style += i + ':' + val + ';';
      }

      this.style = style;
      return this;
    }
  }]);

  return _MARKER;
}();

exports["default"] = _MARKER;

/***/ }),

/***/ "./content/addon-page/modules/nav.js":
/*!*******************************************!*\
  !*** ./content/addon-page/modules/nav.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (el) {
  return new _utils._DOMMODULE({
    el: el,
    events: {
      DOM: {
        click: {
          'li': 'toggle'
        }
      }
    },
    pageNav: null,
    current: null,
    autoinit: function autoinit() {
      this.pageNav = el.hasAttribute('data-page-nav');
      var current = this.current = el.getElementsByClassName('active')[0];
      this.open(current);
    },
    toggle: function toggle(e, el) {
      if (el.classList.contains('disabled') || this.current == el) return false;
      if (this.current) this.close(this.current);
      this.open(el);
    },
    open: function open(el) {
      var targetId = el.getAttribute('data-target');
      el.classList.add('active');
      document.getElementById(targetId).classList.remove('u-display--none');
      this.emit('opened:tab', targetId);
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    },
    close: function close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('u-display--none');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

/***/ }),

/***/ "./content/addon-page/modules/settings.js":
/*!************************************************!*\
  !*** ./content/addon-page/modules/settings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'toggled:sync-settings': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.mark-opt': 'changeMarkMethod',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.download-quickbutton-opt': 'switchQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tbbpower-opt': 'toggleTBBPowerOpt',
          '.tmuipos': 'changeTmuiPositionOpt',
          '#private-save': 'togglePrivSave',
          '#auto-note': 'toggleAutoNoteOpt',
          '#immut': 'toggleImmutOpt',
          '#drop-losses': 'toggleDropLossesOpt',
          '#autonote-color': 'changeAutoNoteOpt',
          '#ignore-hash': 'changeHashOpt',
          '#addon-autocs': 'toggleAutocsOpt'
        },
        click: {
          '#custom-search': 'changeCustomSearch',
          '.custom-search-input': 'hideCustomSearchSettingSuccess'
        }
      }
    },
    allowedKeys: 'a b c d e f g h i j k l n o p q r s t u v x y z 0 1 4 5 6 7 8 9 enter - +'.split(' '),
    allowedShortcuts: ['', 'ctrlKey', 'shiftKey', 'altKey', 'ctrlKey-shiftKey', 'ctrlKey-altKey', 'shiftKey-altKey', 'metaKey', 'metaKey-shiftKey', 'metaKey-altKey'],
    allowedQuickbuttonOpts: ['title', 'url', 'text', 'text +meta', 'text +notes', 'text +lost', 'text m', 'text 2', 'text 3', 'text c', 'text lost'],
    markerKeys: ['m', '2', '3'],
    customMarkerKeys: [],
    marker: null,
    customSearch: browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/',
    autoinit: function autoinit() {
      this.init();
    },
    init: function init() {
      var _this = this;

      _store2["default"].get('settings').then(function (settings) {
        var markers = settings.markers,
            markerKeys = _this.markerKeys,
            customMarkerKeys = _this.customMarkerKeys,
            i,
            key;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i)) _this.customMarkerKeys.push(i);
        }

        _this.renderMarkerSelectOptions().updateMarker(_this.marker ? _this.marker.key : 'm').injectSettings(settings);
      });
    },
    resume: function resume() {
      Array.prototype.slice.call(document.getElementsByClassName('custom-key')).forEach(function (el) {
        return el.remove();
      });
      Array.prototype.slice.call(document.getElementsByClassName('custom-marker-option')).forEach(function (el) {
        return el.remove();
      });
      this.customMarkerKeys = [];
      return this;
    },
    update: function update() {
      this.resume().init();
    },
    updateMarker: function updateMarker(e, el, customBgColor) {
      var key = el ? el.value : e ? e : this.marker ? this.marker.key : 'm';
      this.marker = new _marker2["default"](key, customBgColor);
      return this;
    },
    renderMarkerSelectOptions: function renderMarkerSelectOptions() {
      var keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          removeKeySelect = document.getElementById('remove-key'),
          allowedKeys = this.allowedKeys,
          customMarkerKeys = this.customMarkerKeys,
          a = allowedKeys.length,
          c = customMarkerKeys.length,
          i = 0,
          fragment1 = document.createDocumentFragment(),
          fragment2 = document.createDocumentFragment(),
          fragment3 = document.createDocumentFragment(),
          fragment4 = document.createDocumentFragment(),
          option,
          icon,
          val,
          Val;

      for (; i < c; i++) {
        val = customMarkerKeys[i];
        Val = val.toUpperCase();
        Val = Val === 'ENTER' ? String.fromCharCode(0x21B5) : Val;
        option = document.createElement('option');
        fragment1.appendChild(option);
        option.value = val;
        option.innerText = val.toUpperCase();
        option.className = 'custom-marker-option custom-marker-option-' + val;
        fragment3.appendChild(option.cloneNode(true));
        icon = document.createElement('div');
        fragment2.appendChild(icon);
        icon.className = 'key custom-key';
        icon.id = 'custom-key-' + val;
        icon.innerText = Val;
      }

      keySelect.appendChild(fragment1);
      keyIcons.appendChild(fragment2);
      removeKeySelect.appendChild(fragment3);

      for (i = 0; i < a; i++) {
        val = allowedKeys[i].toLowerCase();
        if (customMarkerKeys.includes(val)) continue;
        Val = val.toUpperCase();
        option = document.createElement('option');
        fragment4.appendChild(option);
        option.value = val;
        option.innerText = Val;
        option.className = 'custom-marker-option custom-marker-option-' + val;
      }

      addKeySelect.appendChild(fragment4);
      return this;
    },
    injectSettings: function injectSettings(settings) {
      var shortcuts = settings.shortcuts,
          i,
          scCheckbox,
          scSelect,
          cmCheckbox,
          sc;

      for (i in shortcuts) {
        sc = shortcuts[i];
        scCheckbox = document.getElementById('sc-' + i);
        scSelect = document.getElementById('shortcut-select-' + i);
        cmCheckbox = document.getElementById('cm-' + i);
        if (scCheckbox) scCheckbox.checked = sc[1];
        if (scSelect) scSelect.value = sc[0];
        if (cmCheckbox) cmCheckbox.checked = sc[2];
      }

      var historySettings = settings.history,
          saveOpts = document.getElementsByName('save-opt');
      if (historySettings.autosave) saveOpts[0].checked = true;else saveOpts[1].checked = true;
      document.getElementById('name-' + historySettings.naming).checked = true;
      document.getElementById('private-save').checked = historySettings.saveInPriv;
      document.getElementById('immut').checked = historySettings.immut;
      document.getElementById('drop-losses').checked = historySettings.dropLosses;
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('ignore-hash').checked = !historySettings.ignoreHash;

      if (historySettings.download === 'json') {
        document.getElementById('download-json').checked = true;
      } else {
        document.getElementById('download-text').checked = true;
        document.getElementById('quickbutton-download-select').value = historySettings.download;
      }

      var miscSettings = settings.misc;
      document.getElementById('mark-method--' + miscSettings.markmethod).checked = true;
      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('misc-notetransp').checked = miscSettings.notetransp;
      document.getElementById('misc-noteplainview').checked = miscSettings.noteplainview;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('vip-note').checked = miscSettings.vipNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;

      if (miscSettings.tbbpower) {
        document.getElementById('tbbpower-on').checked = true;
      } else {
        document.getElementById('tbbpower-off').checked = true;
      }

      document.getElementById('addon-autocs').checked = settings.addon.autocs;
    },
    showCustomSearchSettingSuccess: function showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('u-display--none');
    },
    hideCustomSearchSettingSuccess: function hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('u-display--none');
    },
    changeStyle: function changeStyle(e, el) {
      var marker = this.marker.update(el);
      this.emit('change:style-setting', marker.key, marker.style);
    },
    toggleAutoNoteOpt: function toggleAutoNoteOpt(e, el) {
      var val = el.checked ? document.getElementById('autonote-color').value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeAutoNoteOpt: function changeAutoNoteOpt(e, el) {
      var val = document.getElementById('auto-note').checked ? el.value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeHashOpt: function changeHashOpt(e, el) {
      this.emit('change:hash-setting', !el.checked);
    },
    toggleImmutOpt: function toggleImmutOpt(e, el) {
      this.emit('change:immut-setting', el.checked);
    },
    toggleDropLossesOpt: function toggleDropLossesOpt(e, el) {
      this.emit('change:dropLosses-setting', el.checked);
    },
    toggleAutocsOpt: function toggleAutocsOpt(e, el) {
      this.emit('change:autocs-setting', el.checked);
    },
    addMarker: function addMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          removeKeySelect = document.getElementById('remove-key'),
          option = el.children[el.selectedIndex],
          clone = option.cloneNode(true),
          icon = document.createElement('div'),
          bgColor = this.getRandomLightColor();
      if (!key || removeKeySelect.children.length >= 12 || this.allowedKeys.indexOf(key) === -1) return false;
      removeKeySelect.appendChild(option);
      removeKeySelect.selectedIndex = 0;
      keySelect.appendChild(clone);
      clone.selected = true;
      icon.className = 'key custom-key';
      icon.id = 'custom-key-' + key;
      keyIcons.appendChild(icon);
      icon.innerText = key === 'enter' ? String.fromCharCode(0x21B5) : key.toUpperCase();
      this.updateMarker(key, null, bgColor);
      this.emit('add:custom-marker', key, 'background-color:' + bgColor + ';');
    },
    removeMarker: function removeMarker(e, el) {
      var key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          option;
      if (!key || this.allowedKeys.indexOf(key) === -1) return false;
      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option);
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;
      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;
      this.updateMarker('m');
      this.emit('remove:custom-marker', key);
    },
    changeMarkMethod: function changeMarkMethod(e, el) {
      if (el.checked) {
        this.emit('change:mark-method-setting', el.getAttribute('data-value'));
      }
    },
    toggleShortcut: function toggleShortcut(e, el) {
      this.emit('toggle:shortcut-setting', el.name, el.checked);
    },
    changeShortcut: function changeShortcut(e, el) {
      if (!this.allowedShortcuts.includes(el.value)) return false;
      this.emit('change:shortcut-setting', el.name, el.value);
    },
    toggleCtm: function toggleCtm(e, el) {
      this.emit('toggle:ctm-setting', el.name, el.checked);
    },
    changeSaveOpt: function changeSaveOpt(e, el) {
      this.emit('change:saveopt-setting', !!el.getAttribute('data-id'));
    },
    togglePrivSave: function togglePrivSave(e, el) {
      this.emit('toggle:priv-setting', el.checked);
    },
    changeNamingOpt: function changeNamingOpt(e, el) {
      this.emit('change:namingopt-setting', el.getAttribute('data-id'));
    },
    toggleSaveNoteOpt: function toggleSaveNoteOpt(e, el) {
      this.emit('toggle:noteopt-setting', el.checked);
    },
    changeQuickbuttonOpt: function changeQuickbuttonOpt(e, el) {
      if (!this.allowedQuickbuttonOpts.includes(el.value)) return false;
      this.emit('toggle:quickbuttonopt-setting', el.name, el.value);
    },
    switchQuickbuttonOpt: function switchQuickbuttonOpt(e, el) {
      var type = el.getAttribute('data-id');
      var val = type === 'json' ? type : document.getElementById('quickbutton-download-select').value;
      this.emit('switch:quickbuttonopt-setting', el.name, val);
    },
    toggleNotes: function toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    toggleMisc: function toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
    },
    toggleTBBPowerOpt: function toggleTBBPowerOpt(e, el) {
      var val = !!(el.getAttribute('data-id') * 1);
      this.emit('toggle:tbbpower-setting', el.name, val);
    },
    changeTmuiPositionOpt: function changeTmuiPositionOpt(e, el) {
      this.emit('change:misc-setting', el.name, el.value);
      Array.from(this.el.getElementsByClassName('tmuipos')).forEach(function (select) {
        return select.value = el.value;
      });
    },
    changeCustomSearch: function changeCustomSearch(e, el) {
      this.hideCustomSearchSettingSuccess();
      var inp1 = document.getElementById('custom-search--start');
      var inp2 = document.getElementById('custom-search--end');
      var part1 = inp1.value;
      var part2 = inp2.value;

      if (!part1 && !part2) {
        inp1.value = this.customSearch;
        inp2.value = '';
        this.emit('change:custom-search-setting', false);
      } else {
        this.emit('change:custom-search-setting', [part1, part2]);
      }
    },
    getRandomLightColor: function getRandomLightColor() {
      return '#' + Math.floor((0.8 + Math.random() * 0.175) * 16777215).toString(16);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

var _marker = __webpack_require__(/*! ./marker */ "./content/addon-page/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/syncing.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/syncing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('sync'),
    events: {
      ENV: {
        'failed:toggle-sync': 'undo'
      },
      DOM: {
        click: {
          '.switch': 'toggleSwitch'
        }
      }
    },
    autoinit: function autoinit() {
      document.getElementById('sync-switch--settings').classList.toggle('active', _store2["default"].area_settings === 'sync');
      document.getElementById('sync-switch--history').classList.toggle('active', _store2["default"].area_history === 'sync');
      document.getElementById('sync-switch--pagenotes').classList.toggle('active', _store2["default"].area_pagenotes === 'sync');
    },
    toggleSwitch: function toggleSwitch(e, el) {
      el = el.classList.contains('switch--sync') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },
    undo: function undo(field) {
      document.getElementById('sync-switch--' + field).classList.toggle('active');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./content/addon-page/modules/toggler.js":
/*!***********************************************!*\
  !*** ./content/addon-page/modules/toggler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _TOGGLER =
/*#__PURE__*/
function () {
  function _TOGGLER(el) {
    _classCallCheck(this, _TOGGLER);

    this.el = el;
    this.init();
  }

  _createClass(_TOGGLER, [{
    key: "init",
    value: function init() {
      this.el.addEventListener('click', this.toggle, false);
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.stopPropagation();
      var dataTarget = this.getAttribute('data-target'),
          targets = dataTarget ? dataTarget.split(' ') : null,
          dataToggle = this.getAttribute('data-toggle'),
          roles = dataToggle ? dataToggle.split(' ') : null;

      if (roles) {
        roles.forEach(function (role, i) {
          return document.getElementById(targets[i]).classList[role]('open');
        });
      } else document.getElementById(targets[0]).disabled = !this.checked;
    }
  }]);

  return _TOGGLER;
}();

exports["default"] = _TOGGLER;

/***/ }),

/***/ "./content/addon-page/port.js":
/*!************************************!*\
  !*** ./content/addon-page/port.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

exports["default"] = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'change:autocs-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
  }
});

/***/ }),

/***/ "./content/addon-page/sass/index.scss":
/*!********************************************!*\
  !*** ./content/addon-page/sass/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./data/log-keys.js":
/*!**************************!*\
  !*** ./data/log-keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  note_pbm: 1,
  note_restoration_failure: 2,
  note_url: 3,
  error_save_style: 4,
  error_save__toggle_sc: 5,
  error_save_change_sc: 6,
  error_save_ctm: 7,
  error_save_autosave: 8,
  error_save_naming: 9,
  error_save_notify: 10,
  error_save_download: 11,
  error_save_bmicon: 12,
  error_clean_history: 13,
  error_add_marker: 14,
  error_remove_marker: 15,
  error_save_entry: 16,
  error_update_entry: 17,
  error_del_entry: 18,
  error_empty_synced_storage_onstart: 19,
  error_empty_synced_storage_onupdate: 20,
  error_empty_local_storage_onstart: 21,
  error_import_empty: 22,
  error_import_history: 23,
  error_import_settings: 24,
  error_import_outdated: 25,
  error_import_history_not_found: 26,
  error_import_settings_not_found: 27,
  error_naming: 28,
  error_storage_migration: 29,
  error_empty_local_storage_onupdate: 30,
  error_toggle_sync: 31,
  error_save_priv: 32,
  note_restoration_warning_1: 33,
  note_restoration_warning_2: 34,
  error_save_change_autonote: 35,
  error_save_mark_method: 36,
  getKeyByValue: function getKeyByValue(val) {
    for (var key in this) {
      if (this[key] == val) {
        return key;
        break;
      }
    }

    return '';
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
                  browser.tabs.sendMessage(_tab.id, msg)["catch"](function () {});
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
            browser.tabs.sendMessage(lastArg.tab, msg)["catch"](function () {});
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsInBhZ2Vub3RlcyIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsImZvckVhY2giLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImUiLCJlbnRyaWVzIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsImxvZ3MiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImRvd25sb2FkIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiYWxsb3dlZEhhc2hlcyIsImJvb3RzdHJhcHBlZCIsImF1dG9pbml0IiwiX1NUT1JFIiwic3RhcnQiLCJpbml0TWFpbk5hdiIsInRhYiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiX05BViIsImlubmVyVGV4dCIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJzdWJuYXZzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm4iLCJsZW5ndGgiLCJ0b2dnbGVCdXR0b25zIiwidCIsIl9UT0dHTEVSIiwic2V0QWRkb25MaW5rcyIsInNldExvZ0xpbmsiLCJhZGRvblVSTCIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWRkb25MaW5rcyIsImEiLCJhTCIsImhyZWYiLCJpZCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsInNpbGVudCIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJ1bCIsIkFycmF5IiwiZnJvbSIsImxpIiwicCIsInBhZ2VzIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJzb3J0IiwibmFtZSIsImF6IiwiemEiLCJyZXZlcnNlIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwiY2hhbmdlIiwia2V5dXAiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVybCIsImNsYXNzTmFtZSIsIm9wdGltaXplRGF0ZVN0cmluZyIsImZpcnN0IiwibWFya3MiLCJmdWxsVGV4dFNlYXJjaFJlc3VsdHMiLCJyZXMiLCJtYXJrIiwicG9zIiwibWFya1RleHQiLCJtYXJrVGV4dEVsIiwiaGlnaGxpZ2h0IiwidDEiLCJ0MiIsInQzIiwic3Vic3RyaW5nIiwic3Vic3RyIiwibm9FbnRyaWVzSGludCIsInNlYXJjaCIsImFjdGlvbnMiLCJjb3VudCIsInBwU2VsZWN0IiwiY2hlY2thbGwiLCJtZXRoXzAiLCJtZXRoXzEiLCJtZXRoXzIiLCJtZXRoXzMiLCJzZWxlY3QiLCJwbGFjZWhvbGRlck9wdGlvbiIsImFsbFRhZ3MiLCJhZGRGaWx0ZXJPcHQiLCJkaXNhYmxlZCIsImF0dHJzIiwib3B0Iiwibm90YWdGaWx0ZXJPcHQiLCJhbGxfbWFya3NfcGx1c19tZXRhIiwiYWxsX21hcmtzX3BsdXNfbG9zdCIsImFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzIiwiYWxsX21hcmtzX2xvc3QiLCJkZWZhdWx0TWFya2VycyIsInJlamVjdCIsImtleSIsIm5ld0xpbmUiLCJuZXdMaW5lcyIsIm5vdGUiLCJub3RlVGV4dCIsImxvc3QiLCJtIiwidGl0bGUiLCJ0cmltIiwiZ2V0VGV4dCIsInEiLCJ0ZXJtIiwic2VhcmNoVHlwZSIsImNvdW50U2VsZWN0IiwiY2xhc3NNZXRoIiwidG9nZ2xlIiwic2V0dXBTZWFyY2giLCJyZW5kZXJFbnRyaWVzIiwic2VhcmNoQ291bnQiLCJzZWFyY2hGdWxsVGV4dCIsInNlYXJjaEJ5TmFtZSIsImZvdW5kIiwicmVzdWx0cyIsInRhYmxlIiwic2V0VmlldyIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJfTUFSS0VSIiwiY3VzdG9tQmdDb2xvciIsInN0eWxlcyIsInNoYWRvdyIsIngiLCJ5IiwiYmx1ciIsImNvbG9yIiwiaW5qZWN0IiwicHJldmlldyIsIm1hcmtlciIsImV4aXN0aW5nU3R5bGUiLCJzdHlsZSIsImF1dG9ub3RlIiwic2V0U3R5bGUiLCJzdHlsZVNwbGl0IiwidGV4dFNoYWRvdyIsInNoYWRvd1NwbGl0IiwiYmdJbnB1dCIsImNvbG9ySW5wdXQiLCJib3JkZXJJbnB1dCIsImF1dG9ub3RlSW5wdXQiLCJiZyIsImJvcmRlciIsImF1dG9ub3RlQ29sb3IiLCJzaGFkb3dTZWxlY3QiLCJwcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiaXNWYWxpZCIsInNldFNoYWRvdyIsInZhbGlkIiwidGVzdCIsInBhZ2VOYXYiLCJjdXJyZW50IiwiaGFzQXR0cmlidXRlIiwib3BlbiIsImNsb3NlIiwidGFyZ2V0SWQiLCJhbGxvd2VkS2V5cyIsImFsbG93ZWRTaG9ydGN1dHMiLCJhbGxvd2VkUXVpY2tidXR0b25PcHRzIiwibWFya2VyS2V5cyIsImN1c3RvbU1hcmtlcktleXMiLCJjdXN0b21TZWFyY2giLCJyZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zIiwidXBkYXRlTWFya2VyIiwiaW5qZWN0U2V0dGluZ3MiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJrZXlTZWxlY3QiLCJrZXlJY29ucyIsImFkZEtleVNlbGVjdCIsInJlbW92ZUtleVNlbGVjdCIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImZyYWdtZW50MyIsImZyYWdtZW50NCIsIm9wdGlvbiIsImljb24iLCJWYWwiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNjQ2hlY2tib3giLCJzY1NlbGVjdCIsImNtQ2hlY2tib3giLCJzYyIsImhpc3RvcnlTZXR0aW5ncyIsInNhdmVPcHRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhdXRvc2F2ZSIsIm5hbWluZyIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwic2F2ZU5vdGUiLCJpZ25vcmVIYXNoIiwibWlzY1NldHRpbmdzIiwibWlzYyIsIm1hcmttZXRob2QiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsIm5vdGVwbGFpbnZpZXciLCJmYWlsdXJlTm90ZSIsInN1Y2Nlc3NOb3RlIiwicGJtTm90ZSIsImVycm9yTm90ZSIsInZpcE5vdGUiLCJ0bXVpcG9zIiwidGJicG93ZXIiLCJhZGRvbiIsImF1dG9jcyIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJ0b2dnbGVBdXRvY3NPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0b2dnbGVTd2l0Y2giLCJ1bmRvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUYXJnZXQiLCJ0YXJnZXRzIiwiZGF0YVRvZ2dsZSIsInJvbGVzIiwicm9sZSIsIk9ORU9GRiIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzEiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMiIsImVycm9yX3NhdmVfY2hhbmdlX2F1dG9ub3RlIiwiZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZCIsInNyYyIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJmIiwiaXNJZCIsImlzQ2xhc3MiLCJpc0RvYyIsIm9uIiwicmVtb3ZlTGlzdGVuZXJzIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImFjdGl2ZSIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJjYiIsIm9uQ29ubmVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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L2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3RvcmFnZS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnLnNlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoVGVybUxlbmd0aCA9IHNlYXJjaFRlcm0gPyBzZWFyY2hUZXJtLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaGVkRnVsbFRleHQgPSB0aGlzLnNlYXJjaGVkRnVsbFRleHQsXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgICBidXR0b25zLCBlZGl0LCB2aWV3LCB0YWdzLCBpbW11dCwgaW1tdXRFbCwgbG9ja2VkLCBsb2NrZWRFbCwgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2tlZCA9IGVudHJ5LmxvY2tlZDtcclxuICAgICAgICAgICAgaW1tdXQgPSBlbnRyeS5pbW11dDtcclxuICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICBsYWJlbCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xyXG4gICAgICAgICAgICBkZXRhaWxzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hlZEZ1bGxUZXh0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChmdWxsVGV4dFNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgcmVzLCBtYXJrLCBwb3MsIG1hcmtUZXh0LCBtYXJrVGV4dEVsLCBoaWdobGlnaHQsIHQxLCB0MiwgdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgcmVzID0gZnVsbFRleHRTZWFyY2hSZXN1bHRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrID0gZW50cnkubWFya3NbcmVzLm1hcmtdO1xyXG4gICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dDtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgdDIgPSBtYXJrVGV4dC5zdWJzdHIocG9zLCBzZWFyY2hUZXJtTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgdDMgPSBtYXJrVGV4dC5zdWJzdHIocG9zK3NlYXJjaFRlcm1MZW5ndGgsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgIHQzID0gdDMgPyB0MyArICcgLi4uJyA6IHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MikpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQxKSk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChtYXJrVGV4dEVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUeXBlID0gZWwuZ2V0QXR0cmlidXRlID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA6ICcnO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2Z1bGwtdGV4dCcpIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hGdWxsVGV4dCh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCeU5hbWUodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5zZWFyY2hlZC5sZW5ndGggfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQnlOYW1lKHRlcm0pIHtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aCwgaSA9IDAsIG5hbWU7XHJcblxyXG4gICAgICBmb3IoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRlcm0pICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEZ1bGxUZXh0KHRleHQpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCBuYW1lLCBtYXJrcywgaSwgbWFya1RleHQsIHBvcywgZm91bmQ7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgbWFya3MgPSBlbnRyaWVzW25hbWVdLm1hcmtzO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrVGV4dCA9IG1hcmtzW2ldLnRleHQ7XHJcbiAgICAgICAgICBwb3MgPSBtYXJrVGV4dC50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0KTtcclxuICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXSA9IHJlc3VsdHNbbmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh7IG1hcms6IGksIHBvcyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tZnVsbC10ZXh0JykudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXJtKSB0aGlzLnNlYXJjaChudWxsLCB7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShlLCBlbCkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGVyUGFnZSA9IGVsLnZhbHVlICogMTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JywgcCk7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldFZpZXcoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpO1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKHZhbCA9PT0gJ2xpc3QnKSB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGVsc2UgdGFibGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2coKTtcclxuICAgIH0sXHJcbiAgICBsb2coKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxvZ3MgPSBsb2dzIHx8IFtdO1xyXG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBsID0gbG9ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICAgIHRyLCB0ZF9kYXRlLCB0ZF9tc2csIG5vZGVfZGF0ZSwgbm9kZV9tc2csIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX2RhdGUpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9tc2cpO1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlQm9keS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub2xvZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyOmxvZ3MnKTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBwYWdlTmF2OiBudWxsLFxyXG4gICAgY3VycmVudDogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5wYWdlTmF2ID0gZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBhZ2UtbmF2Jyk7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICAgIHRoaXMub3BlbihjdXJyZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2N1c3RvbS1zZWFyY2gnOiAnY2hhbmdlQ3VzdG9tU2VhcmNoJyxcclxuICAgICAgICAgICcuY3VzdG9tLXNlYXJjaC1pbnB1dCc6ICdoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxsb3dlZEtleXM6ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBuIG8gcCBxIHIgcyB0IHUgdiB4IHkgeiAwIDEgNCA1IDYgNyA4IDkgZW50ZXIgLSArJy5zcGxpdCgnICcpLFxyXG4gICAgYWxsb3dlZFNob3J0Y3V0czogWycnLCAnY3RybEtleScsICdzaGlmdEtleScsICdhbHRLZXknLCAnY3RybEtleS1zaGlmdEtleScsICdjdHJsS2V5LWFsdEtleScsICdzaGlmdEtleS1hbHRLZXknLCAnbWV0YUtleScsICdtZXRhS2V5LXNoaWZ0S2V5JywgJ21ldGFLZXktYWx0S2V5J10sXHJcbiAgICBhbGxvd2VkUXVpY2tidXR0b25PcHRzOiBbJ3RpdGxlJywgJ3VybCcsICd0ZXh0JywgJ3RleHQgK21ldGEnLCAndGV4dCArbm90ZXMnLCAndGV4dCArbG9zdCcsICd0ZXh0IG0nLCAndGV4dCAyJywgJ3RleHQgMycsICd0ZXh0IGMnLCAndGV4dCBsb3N0J10sXHJcbiAgICBtYXJrZXJLZXlzOiBbJ20nLCAnMicsICczJ10sXHJcbiAgICBjdXN0b21NYXJrZXJLZXlzOiBbXSxcclxuICAgIG1hcmtlcjogbnVsbCxcclxuICAgIGN1c3RvbVNlYXJjaDogYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xuZycpICsgJy53aWtpcGVkaWEub3JnL3dpa2kvJyxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBsZXQgbWFya2VycyA9IHNldHRpbmdzLm1hcmtlcnMsXHJcbiAgICAgICAgICAgIG1hcmtlcktleXMgPSB0aGlzLm1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcbiAgICAgICAgICAgIGksIGtleTtcclxuXHJcbiAgICAgICAgZm9yIChrZXkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgaWYgKCFtYXJrZXJLZXlzLmluY2x1ZGVzKGkpICYmICFjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKGkpKVxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpXHJcbiAgICAgICAgICAgIC51cGRhdGVNYXJrZXIodGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbScpXHJcbiAgICAgICAgICAgIC5pbmplY3RTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLWtleScpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24nKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cyA9IFtdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCkuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU1hcmtlcihlLCBlbCwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICBsZXQga2V5ID0gZWwgPyBlbC52YWx1ZSA6IGUgPyBlIDogdGhpcy5tYXJrZXIgPyB0aGlzLm1hcmtlci5rZXkgOiAnbSc7XHJcblxyXG4gICAgICB0aGlzLm1hcmtlciA9IG5ldyBfTUFSS0VSKGtleSwgY3VzdG9tQmdDb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKCkge1xyXG4gICAgICBsZXQga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcblxyXG4gICAgICAgICAgYWxsb3dlZEtleXMgPSB0aGlzLmFsbG93ZWRLZXlzLFxyXG4gICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuXHJcbiAgICAgICAgICBhID0gYWxsb3dlZEtleXMubGVuZ3RoLFxyXG4gICAgICAgICAgYyA9IGN1c3RvbU1hcmtlcktleXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcblxyXG4gICAgICAgICAgZnJhZ21lbnQxID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgZnJhZ21lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cclxuICAgICAgICAgIG9wdGlvbiwgaWNvbiwgdmFsLCBWYWw7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGM7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGN1c3RvbU1hcmtlcktleXNbaV07XHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgVmFsID0gVmFsID09PSAnRU5URVInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDogVmFsO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50MS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG5cclxuICAgICAgICBmcmFnbWVudDMuYXBwZW5kQ2hpbGQob3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudDIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsgdmFsO1xyXG4gICAgICAgIGljb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQxKTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQyKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50Myk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYTsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gYWxsb3dlZEtleXNbaV0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXModmFsKSlcclxuICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgVmFsID0gdmFsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQ0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyLW9wdGlvbiBjdXN0b20tbWFya2VyLW9wdGlvbi0nICsgdmFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQ0KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGluamVjdFNldHRpbmdzKHNldHRpbmdzKSB7XHJcbiAgICAgIGxldCBzaG9ydGN1dHMgPSBzZXR0aW5ncy5zaG9ydGN1dHMsXHJcbiAgICAgICAgICBpLCBzY0NoZWNrYm94LCBzY1NlbGVjdCwgY21DaGVja2JveCwgc2M7XHJcblxyXG4gICAgICBmb3IgKGkgaW4gc2hvcnRjdXRzKSB7XHJcbiAgICAgICAgc2MgPSBzaG9ydGN1dHNbaV07XHJcbiAgICAgICAgc2NDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYy0nICsgaSk7XHJcbiAgICAgICAgc2NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtc2VsZWN0LScgKyBpKTtcclxuICAgICAgICBjbUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtLScgKyBpKTtcclxuXHJcbiAgICAgICAgaWYgKHNjQ2hlY2tib3gpIHNjQ2hlY2tib3guY2hlY2tlZCA9IHNjWzFdO1xyXG4gICAgICAgIGlmIChzY1NlbGVjdCkgc2NTZWxlY3QudmFsdWUgPSBzY1swXTtcclxuICAgICAgICBpZiAoY21DaGVja2JveCkgY21DaGVja2JveC5jaGVja2VkID0gc2NbMl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoaXN0b3J5U2V0dGluZ3MgPSBzZXR0aW5ncy5oaXN0b3J5LFxyXG4gICAgICAgICAgc2F2ZU9wdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc2F2ZS1vcHQnKTtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuYXV0b3NhdmUpIHNhdmVPcHRzWzBdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHNhdmVPcHRzWzFdLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtJyArIGhpc3RvcnlTZXR0aW5ncy5uYW1pbmcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZS1zYXZlJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlSW5Qcml2O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1tdXQnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmltbXV0O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1sb3NzZXMnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLmRyb3BMb3NzZXM7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWdub3JlLWhhc2gnKS5jaGVja2VkID0gIWhpc3RvcnlTZXR0aW5ncy5pZ25vcmVIYXNoO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZCA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLWpzb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtdGV4dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZSA9IGhpc3RvcnlTZXR0aW5ncy5kb3dubG9hZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG1pc2NTZXR0aW5ncyA9IHNldHRpbmdzLm1pc2M7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFyay1tZXRob2QtLScgKyBtaXNjU2V0dGluZ3MubWFya21ldGhvZCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLWJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ibWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVpY29uJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZW9uY2xpY2snKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVvbmNsaWNrO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RldHJhbnNwJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RldHJhbnNwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlcGxhaW52aWV3JykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlcGxhaW52aWV3O1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tZmFpbHVyZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZmFpbHVyZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1zdWNjZXNzJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5zdWNjZXNzTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucGJtTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWVycm9yJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5lcnJvck5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXAtbm90ZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MudmlwTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0JykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFswXSA6IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFsxXSA6ICcnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tbm90ZWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tYm1pY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuXHJcbiAgICAgIGlmIChtaXNjU2V0dGluZ3MudGJicG93ZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJicG93ZXItb2ZmJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1hdXRvY3MnKS5jaGVja2VkID0gc2V0dGluZ3MuYWRkb24uYXV0b2NzO1xyXG4gICAgfSxcclxuICAgIHNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN1Ym1pdHRlZCcpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVN0eWxlKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFya2VyLnVwZGF0ZShlbCk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJywgbWFya2VyLmtleSwgbWFya2VyLnN0eWxlKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC5jaGVja2VkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJykudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VBdXRvTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA/IGVsLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlSGFzaE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpoYXNoLXNldHRpbmcnLCAhZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSW1tdXRPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aW1tdXQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZURyb3BMb3NzZXNPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b2NzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgYWRkTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcbiAgICAgICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgIGNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKSxcclxuICAgICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgIGJnQ29sb3IgPSB0aGlzLmdldFJhbmRvbUxpZ2h0Q29sb3IoKTtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHJlbW92ZUtleVNlbGVjdC5jaGlsZHJlbi5sZW5ndGggPj0gMTIgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICBjbG9uZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyBrZXk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICBpY29uLmlubmVyVGV4dCA9IGtleSA9PT0gJ2VudGVyJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IGtleS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoa2V5LCBudWxsLCBiZ0NvbG9yKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkOmN1c3RvbS1tYXJrZXInLCBrZXksICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBiZ0NvbG9yICsgJzsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbjtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICBhZGRLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGVsLnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAga2V5U2VsZWN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uLScgKyBrZXkpWzBdLnJlbW92ZSgpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleS0nICsga2V5KS5yZW1vdmUoKTtcclxuICAgICAga2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoJ20nKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlOmN1c3RvbS1tYXJrZXInLCBrZXkpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZU1hcmtNZXRob2QoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkU2hvcnRjdXRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVDdG0oZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6Y3RtLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTYXZlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsICEhZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVByaXZTYXZlKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnByaXYtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZU5hbWluZ09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTYXZlTm90ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFF1aWNrYnV0dG9uT3B0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgc3dpdGNoUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlID09PSAnanNvbicgPyB0eXBlIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVOb3RlcyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU1pc2MoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlVEJCUG93ZXJPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gISEoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykqMSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVRtdWlQb3NpdGlvbk9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICAgIEFycmF5LmZyb20odGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0bXVpcG9zJykpLmZvckVhY2goc2VsZWN0ID0+IHNlbGVjdC52YWx1ZSA9IGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDdXN0b21TZWFyY2goZSwgZWwpIHtcclxuICAgICAgdGhpcy5oaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKTtcclxuICAgICAgY29uc3QgaW5wMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpO1xyXG4gICAgICBjb25zdCBpbnAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpO1xyXG4gICAgICBjb25zdCBwYXJ0MSA9IGlucDEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhcnQyID0gaW5wMi52YWx1ZTtcclxuICAgICAgaWYgKCFwYXJ0MSAmJiAhcGFydDIpIHtcclxuICAgICAgICBpbnAxLnZhbHVlID0gdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgICAgaW5wMi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBbcGFydDEsIHBhcnQyXSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRSYW5kb21MaWdodENvbG9yKCkge1xyXG4gICAgICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcigoMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMTc1KSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnZmFpbGVkOnRvZ2dsZS1zeW5jJzogJ3VuZG8nXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXNldHRpbmdzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0taGlzdG9yeScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tcGFnZW5vdGVzJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfcGFnZW5vdGVzID09PSAnc3luYycpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6c3luYycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvKGZpZWxkKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tJyArIGZpZWxkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBfVE9HR0xFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUsIGZhbHNlKTtcclxuICB9XHJcbiAgdG9nZ2xlKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IGRhdGFUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSxcclxuICAgICAgICB0YXJnZXRzID0gZGF0YVRhcmdldCA/IGRhdGFUYXJnZXQuc3BsaXQoJyAnKSA6IG51bGwsXHJcbiAgICAgICAgZGF0YVRvZ2dsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpLFxyXG4gICAgICAgIHJvbGVzID0gZGF0YVRvZ2dsZSA/IGRhdGFUb2dnbGUuc3BsaXQoJyAnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHJvbGVzKSB7XHJcbiAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGkpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbaV0pLmNsYXNzTGlzdFtyb2xlXSgnb3BlbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1swXSkuZGlzYWJsZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2FkZG9uLXBhZ2UnLFxyXG4gIHR5cGU6ICdjb250ZW50JyxcclxuICBldmVudHM6IHtcclxuICAgIE9ORU9GRjogW1xyXG4gICAgICAnY2hhbmdlOnN0eWxlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOmN0bS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnByaXYtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aW1tdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6ZHJvcExvc3Nlcy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmhhc2gtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3N3aXRjaDpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3RpZmljYXRpb24tc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnRiYnBvd2VyLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmF1dG9jcy1zZXR0aW5nJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnLFxyXG4gICAgICAnb3BlbjplbnRyaWVzJyxcclxuICAgICAgJ3JlbmFtZTplbnRyeScsXHJcbiAgICAgICd2aWV3OmVudHJ5JyxcclxuICAgICAgJ3N5bmM6ZW50cnknLFxyXG4gICAgICAnc3luYzpoaXN0b3J5JyxcclxuICAgICAgJ3N5bmM6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjbGVhcjpsb2dzJyxcclxuICAgICAgJ3RhZzplbnRyaWVzJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShsYXN0QXJnLnRhYiwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9