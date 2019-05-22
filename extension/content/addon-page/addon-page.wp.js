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
          '#ignore-hash': 'changeHashOpt'
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
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;
      document.getElementById('misc-progressbar').checked = miscSettings.progressbar;

      if (miscSettings.tbbpower) {
        document.getElementById('tbbpower-on').checked = true;
      } else {
        document.getElementById('tbbpower-off').checked = true;
      }
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
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
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

            _this.on(e, _this.proxy(_assertThisInitialized(_this), _this.sendMessage, e));
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

            _this.on(f, _this.proxy(_assertThisInitialized(_this), _this.postMessage, f));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsInBhZ2Vub3RlcyIsImZpZWxkIiwiUHJvbWlzZSIsInIiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsImZvckVhY2giLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImUiLCJlbnRyaWVzIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsImxvZ3MiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImRvd25sb2FkIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiYWxsb3dlZEhhc2hlcyIsImJvb3RzdHJhcHBlZCIsImF1dG9pbml0IiwiX1NUT1JFIiwic3RhcnQiLCJpbml0TWFpbk5hdiIsInRhYiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiX05BViIsImlubmVyVGV4dCIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJzdWJuYXZzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm4iLCJsZW5ndGgiLCJ0b2dnbGVCdXR0b25zIiwidCIsIl9UT0dHTEVSIiwic2V0QWRkb25MaW5rcyIsInNldExvZ0xpbmsiLCJhZGRvblVSTCIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWRkb25MaW5rcyIsImEiLCJhTCIsImhyZWYiLCJpZCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsInNpbGVudCIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJ1bCIsIkFycmF5IiwiZnJvbSIsImxpIiwicCIsInBhZ2VzIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJzb3J0IiwibmFtZSIsImF6IiwiemEiLCJyZXZlcnNlIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwiY2hhbmdlIiwia2V5dXAiLCJuYW1lcyIsImVudHJ5VG1wbCIsImVudHJpZXNDb250YWluZXIiLCJwYWdlIiwic29ydGVkIiwidmlld01vZGUiLCJzZWFyY2hUZXJtIiwic2VhcmNoZWQiLCJ0YWdzIiwiZmlsdGVyZWQiLCJmaWx0ZXJPcHRpb25zU2V0IiwiaW5pdCIsInJlc3VtZSIsIm1zZyIsImxvY2tlZCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ0eXBlIiwic3BlYyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJkYXRhIiwidGV4dCIsImxpbmsiLCJqb2luIiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYmFja3VwIiwicG9wIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJuZXdOYW1lIiwicHJvbXB0Iiwib2xkTmFtZSIsImFyZWEiLCJwYXJlbnROb2RlIiwidGFnIiwiZm9yY2UiLCJvIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJwdXNoIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb24iLCJ2YWx1ZSIsInZhbCIsInRlbXBsYXRlIiwiY29udGFpbmVyIiwic2VhcmNoVGVybUxlbmd0aCIsInNlYXJjaGVkRnVsbFRleHQiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwic2VhcmNoUmVzdWx0cyIsImJ1dHRvbnMiLCJlZGl0IiwidmlldyIsImltbXV0IiwiaW1tdXRFbCIsImxvY2tlZEVsIiwidGFnRWwiLCJmaWx0ZXIiLCJjbG9uZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVybCIsImNsYXNzTmFtZSIsIm9wdGltaXplRGF0ZVN0cmluZyIsImZpcnN0IiwibWFya3MiLCJmdWxsVGV4dFNlYXJjaFJlc3VsdHMiLCJyZXMiLCJtYXJrIiwicG9zIiwibWFya1RleHQiLCJtYXJrVGV4dEVsIiwiaGlnaGxpZ2h0IiwidDEiLCJ0MiIsInQzIiwic3Vic3RyaW5nIiwic3Vic3RyIiwibm9FbnRyaWVzSGludCIsInNlYXJjaCIsImFjdGlvbnMiLCJjb3VudCIsInBwU2VsZWN0IiwiY2hlY2thbGwiLCJtZXRoXzAiLCJtZXRoXzEiLCJtZXRoXzIiLCJtZXRoXzMiLCJzZWxlY3QiLCJwbGFjZWhvbGRlck9wdGlvbiIsImFsbFRhZ3MiLCJhZGRGaWx0ZXJPcHQiLCJkaXNhYmxlZCIsImF0dHJzIiwib3B0Iiwibm90YWdGaWx0ZXJPcHQiLCJhbGxfbWFya3NfcGx1c19tZXRhIiwiYWxsX21hcmtzX3BsdXNfbG9zdCIsImFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzIiwiYWxsX21hcmtzX2xvc3QiLCJkZWZhdWx0TWFya2VycyIsInJlamVjdCIsImtleSIsIm5ld0xpbmUiLCJuZXdMaW5lcyIsIm5vdGUiLCJub3RlVGV4dCIsImxvc3QiLCJtIiwidGl0bGUiLCJ0cmltIiwiZ2V0VGV4dCIsInEiLCJ0ZXJtIiwic2VhcmNoVHlwZSIsImNvdW50U2VsZWN0IiwiY2xhc3NNZXRoIiwidG9nZ2xlIiwic2V0dXBTZWFyY2giLCJyZW5kZXJFbnRyaWVzIiwic2VhcmNoQ291bnQiLCJzZWFyY2hGdWxsVGV4dCIsInNlYXJjaEJ5TmFtZSIsImZvdW5kIiwicmVzdWx0cyIsInRhYmxlIiwic2V0VmlldyIsImZvY3VzIiwic2V0dXBTb3J0IiwiX1NPUlQiLCJzb3J0U2VhcmNoUmVzdWx0cyIsIm5vZGVOYW1lIiwiZmlyc3RDaGlsZCIsImZpbHRlcmVkRW50cmllcyIsInJ4IiwiYyIsIlJlZ0V4cCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwiZGlyZWN0bHkiLCJpbnB1dHMiLCJkZWxlZ2F0ZUJ1dHRvbkFjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzZXR1cFZpZXciLCJ0b2dnbGVIZWFkZXJGaWVsZHMiLCJzZXRGaWx0ZXJPcHRpb25zIiwibW91c2Vkb3duIiwidXBkYXRlRXhwb3J0TGlua3MiLCJzdG9yZVN0cmluZyIsInBhcnNlZFN0cmluZyIsInBhcnNlIiwiZGlzcGxheUZhaWx1cmUiLCJ0cmlnZ2VyRmlsZUlucHV0IiwiaGFuZGxlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibW9kIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsInJlYXNvbiIsImxvY2FsRGF0YUxpbmsiLCJzeW5jZWREYXRhTGluayIsInVwZGF0ZUV4cG9ydE5hbWUiLCJ0YWJsZUJvZHkiLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsInRpbWUiLCJfTE9HX0tFWVMiLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJfTUFSS0VSIiwiY3VzdG9tQmdDb2xvciIsInN0eWxlcyIsInNoYWRvdyIsIngiLCJ5IiwiYmx1ciIsImNvbG9yIiwiaW5qZWN0IiwicHJldmlldyIsIm1hcmtlciIsImV4aXN0aW5nU3R5bGUiLCJzdHlsZSIsImF1dG9ub3RlIiwic2V0U3R5bGUiLCJzdHlsZVNwbGl0IiwidGV4dFNoYWRvdyIsInNoYWRvd1NwbGl0IiwiYmdJbnB1dCIsImNvbG9ySW5wdXQiLCJib3JkZXJJbnB1dCIsImF1dG9ub3RlSW5wdXQiLCJiZyIsImJvcmRlciIsImF1dG9ub3RlQ29sb3IiLCJzaGFkb3dTZWxlY3QiLCJwcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiaXNWYWxpZCIsInNldFNoYWRvdyIsInZhbGlkIiwidGVzdCIsInBhZ2VOYXYiLCJjdXJyZW50IiwiaGFzQXR0cmlidXRlIiwib3BlbiIsImNsb3NlIiwidGFyZ2V0SWQiLCJhbGxvd2VkS2V5cyIsImFsbG93ZWRTaG9ydGN1dHMiLCJhbGxvd2VkUXVpY2tidXR0b25PcHRzIiwibWFya2VyS2V5cyIsImN1c3RvbU1hcmtlcktleXMiLCJjdXN0b21TZWFyY2giLCJyZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zIiwidXBkYXRlTWFya2VyIiwiaW5qZWN0U2V0dGluZ3MiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJrZXlTZWxlY3QiLCJrZXlJY29ucyIsImFkZEtleVNlbGVjdCIsInJlbW92ZUtleVNlbGVjdCIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImZyYWdtZW50MyIsImZyYWdtZW50NCIsIm9wdGlvbiIsImljb24iLCJWYWwiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNjQ2hlY2tib3giLCJzY1NlbGVjdCIsImNtQ2hlY2tib3giLCJzYyIsImhpc3RvcnlTZXR0aW5ncyIsInNhdmVPcHRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhdXRvc2F2ZSIsIm5hbWluZyIsInNhdmVJblByaXYiLCJkcm9wTG9zc2VzIiwic2F2ZU5vdGUiLCJpZ25vcmVIYXNoIiwibWlzY1NldHRpbmdzIiwibWlzYyIsIm1hcmttZXRob2QiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwibm90ZXRyYW5zcCIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiZXJyb3JOb3RlIiwidG11aXBvcyIsInByb2dyZXNzYmFyIiwidGJicG93ZXIiLCJzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJjaGFuZ2VTdHlsZSIsInRvZ2dsZUF1dG9Ob3RlT3B0IiwiY2hhbmdlQXV0b05vdGVPcHQiLCJjaGFuZ2VIYXNoT3B0IiwidG9nZ2xlSW1tdXRPcHQiLCJ0b2dnbGVEcm9wTG9zc2VzT3B0IiwiYWRkTWFya2VyIiwiYmdDb2xvciIsImdldFJhbmRvbUxpZ2h0Q29sb3IiLCJzZWxlY3RlZCIsInJlbW92ZU1hcmtlciIsImNoYW5nZU1hcmtNZXRob2QiLCJ0b2dnbGVTaG9ydGN1dCIsImNoYW5nZVNob3J0Y3V0IiwidG9nZ2xlQ3RtIiwiY2hhbmdlU2F2ZU9wdCIsInRvZ2dsZVByaXZTYXZlIiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlU2F2ZU5vdGVPcHQiLCJjaGFuZ2VRdWlja2J1dHRvbk9wdCIsInN3aXRjaFF1aWNrYnV0dG9uT3B0IiwidG9nZ2xlTm90ZXMiLCJ0b2dnbGVNaXNjIiwidG9nZ2xlVEJCUG93ZXJPcHQiLCJjaGFuZ2VUbXVpUG9zaXRpb25PcHQiLCJjaGFuZ2VDdXN0b21TZWFyY2giLCJpbnAxIiwiaW5wMiIsInBhcnQxIiwicGFydDIiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwidG9nZ2xlU3dpdGNoIiwidW5kbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhVGFyZ2V0IiwidGFyZ2V0cyIsImRhdGFUb2dnbGUiLCJyb2xlcyIsInJvbGUiLCJPTkVPRkYiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJzcmMiLCJpc0FycmF5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiZiIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJoYW5kbGVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJ0YWJzIiwicXVlcnkiLCJjdXJyZW50V2luZG93IiwiYWN0aXZlIiwiaCIsImxhc3RJbmRleE9mIiwidHJhbnNsYXRlRG9jdW1lbnQiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJkYXRhc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0VUlMYW5ndWFnZSIsInRleHRFbGVtZW50cyIsImF0dHJFbGVtZW50cyIsImwxMG5JZCIsInRleHRDb250ZW50IiwiYXR0ciIsImwxMG5BdHRyIiwidG9waWNzIiwiZXZlbnQiLCJhcmdzIiwidG9waWMiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwiZW52RXZlbnRzIiwib24iLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FB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QUM1Q0EsWUFBSSxDQUFDQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsTUFBSSxDQUFDcEQsS0FBTCxDQUFXLE1BQVgsRUFBaUIsTUFBSSxDQUFDcUQsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDYyxFQUFELElBQU9BLEVBQUUsRUFBVDtBQUNELE9BSEQ7QUFJRDs7OztFQWxGd0J2bEIsZSIsImZpbGUiOiJjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9hZGRvbi1wYWdlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfUE9SVCwgX0wxME4sIF9FUlJPUlRSQUNLRVIsIF9IQVNITEVTUyB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcydcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBpbml0aWFsaXppbmc6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6ICdzeW5jJyxcclxuICBhcmVhX2hpc3Rvcnk6ICdzeW5jJyxcclxuICBhcmVhX3BhZ2Vub3RlczogJ3N5bmMnLFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBzdG9yYWdlLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3NldHRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzKTtcclxuICB9LFxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2Rvd25sb2FkX29wdGlvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiAndGV4dCc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkuZG93bmxvYWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbWFya2VycygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5tYXJrZXJzKTtcclxuICB9LFxyXG4gIF9nZXRfc2hvcnRjdXRzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLnNob3J0Y3V0cyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuL19zdG9yZSdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmltcG9ydCBfSElTVE9SWSBmcm9tICcuL21vZHVsZXMvaGlzdG9yeSdcclxuaW1wb3J0IF9TRVRUSU5HUyBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnXHJcbmltcG9ydCBfTE9HR0lORyBmcm9tICcuL21vZHVsZXMvbG9ncydcclxuaW1wb3J0IF9TWU5DSU5HIGZyb20gJy4vbW9kdWxlcy9zeW5jaW5nJ1xyXG5pbXBvcnQgX0lNUE9SVCBmcm9tICcuL21vZHVsZXMvaW1wb3J0J1xyXG5pbXBvcnQgX0NPTlRBQ1QgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnXHJcbmltcG9ydCBfUEFHSU5BVE9SIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24nXHJcblxyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5cclxubmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICdzdGFydGVkOmFwcCc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdzdGFydCdcclxuICAgIH1cclxuICB9LFxyXG4gIGFsbG93ZWRIYXNoZXM6IFsnbmV3cycsICdtYW51YWwnLCAnc2V0dGluZ3MnLCAnaGlzdG9yeScsICdjb250YWN0JywgJ3N5bmMnLCAnZXhwb3J0JywgJ2xvZ3MnXSxcclxuICBib290c3RyYXBwZWQ6IGZhbHNlLFxyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSkgdGhpcy5zdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIGlmICghdGhpcy5ib290c3RyYXBwZWQpIHtcclxuICAgICAgdGhpcy5ib290c3RyYXBwZWQgPSB0cnVlO1xyXG4gICAgICBfSElTVE9SWSgpO1xyXG4gICAgICBfU0VUVElOR1MoKTtcclxuICAgICAgX0xPR0dJTkcoKTtcclxuICAgICAgX1NZTkNJTkcoKTtcclxuICAgICAgX0lNUE9SVCgpO1xyXG4gICAgICBfQ09OVEFDVCgpO1xyXG4gICAgICBfUEFHSU5BVE9SKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1haW5OYXYoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRNYWluTmF2KCkge1xyXG4gICAgY29uc3QgdGFiID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz0nKVsxXTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd2VkSGFzaGVzLmluY2x1ZGVzKHRhYikpIHtcclxuICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2LScgKyB0YWIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbmV3IF9OQVYod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWlubmF2JykpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCB7IF9MMTBOIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZXInXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbi8qIGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnNpb24tbnVtYmVyJykuaW5uZXJUZXh0ID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuLyogZW5kOiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcblxyXG4vKiBjb25maWd1cmUgc3VibmF2cyAqL1xyXG5jb25zdCBzdWJuYXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibmF2Jyk7XHJcbmxldCBuID0gc3VibmF2cy5sZW5ndGg7XHJcblxyXG53aGlsZShuLS0pIG5ldyBfTkFWKHN1Ym5hdnNbbl0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSBuYXZzICovXHJcblxyXG4vKiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbmxldCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWJ1dHRvbicpLFxyXG4gICAgdCA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xyXG5cclxud2hpbGUodC0tKSBuZXcgX1RPR0dMRVIodG9nZ2xlQnV0dG9uc1t0XSk7XHJcbi8qIGVuZDogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ3NldExvZ0xpbmsnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5zZXRBZGRvbkxpbmtzKClcclxuICAgICAgICAgIC5zZXRMb2dMaW5rKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0QWRkb25MaW5rcygpIHtcclxuICAgICAgbGV0IGFkZG9uVVJMID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3VybF9tb3pfYWRkb24nKSxcclxuICAgICAgICAgIGFkZG9uTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3otYWRkb24nKSxcclxuICAgICAgICAgIGEgPSBhZGRvbkxpbmtzLmxlbmd0aCxcclxuICAgICAgICAgIGFMO1xyXG5cclxuICAgICAgd2hpbGUgKGEtLSkge1xyXG4gICAgICAgIGFMID0gYWRkb25MaW5rc1thXTtcclxuICAgICAgICBhTC5ocmVmID0gYWRkb25VUkw7XHJcbiAgICAgICAgaWYgKGFMLmlkID09PSAnbW96LWFkZG9uLS1jb250YWN0JykgYUwuaW5uZXJUZXh0ID0gYWRkb25VUkw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExvZ0xpbmsoKSB7XHJcbiAgICAgIGNvbnN0IGxvZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nLW1haWwnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxldCBsID0gbG9ncyA/IGxvZ3MubGVuZ3RoIDogMCxcclxuICAgICAgICAgICAgaHJlZiA9XHJcbiAgICAgICAgICAgICAgJ21haWx0bzp1bmRmbHliaXJAZ214LmRlP3N1YmplY3Q9VGV4dG1hcmtlcicgK1xyXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCgnIDogRXJyb3IgTG9ncycpICtcclxuICAgICAgICAgICAgICAnJmJvZHk9JytcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJy0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd5b3VyX21zZycpICsgJyAtXFxuXFxuXFxuTE9HUzpcXG5cXG4nKSxcclxuICAgICAgICAgICAgbG9nO1xyXG5cclxuICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICBocmVmICs9IGxvZ1sxXSArIChsb2dbMl0gPyAnICgnICsgbG9nWzJdICsgJyknIDogJycpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQoKG5ldyBEYXRlKGxvZ1swXSkudG9VVENTdHJpbmcoKSkgKyAnXFxuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ0xpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3InKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc2F2ZWQ6ZW50cnknOiAnYWRkJyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyaWVzJzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnZmlsdGVyZWQ6aGlzdG9yeSc6ICdyZXNldCcsXHJcbiAgICAgICAgJ2ltcG9ydGVkOmhpc3RvcnknOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JzogJ2NoYW5nZUNvdW50UGVyUGFnZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcucGFnZSc6ICdnb3RvJyxcclxuICAgICAgICAgICcucHJldic6ICdwcmV2JyxcclxuICAgICAgICAgICcubmV4dCc6ICduZXh0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG51bWJlclBhZ2VzOiAxLFxyXG4gICAgbnVtYmVyRW50cmllczogMCxcclxuICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRnJvbVN0b3JhZ2UoKTtcclxuICAgIH0sXHJcbiAgICBnb3RvKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld1BhZ2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScpICogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IG5ld1BhZ2UpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCBuZXdQYWdlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3UGFnZTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJldigpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IDEpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgLS10aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy5udW1iZXJQYWdlcykgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCArK3RoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIGFkZCgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKyt0aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy51cGRhdGUoLS10aGlzLm51bWJlckVudHJpZXMpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZyb21TdG9yYWdlKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMClcclxuICAgICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHRoaXMudXBkYXRlKE9iamVjdC5rZXlzKGhpc3RvcnkuZW50cmllcykubGVuZ3RoKSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShsLCBzaWxlbnQpIHtcclxuICAgICAgdGhpcy5udW1iZXJFbnRyaWVzID0gbDtcclxuICAgICAgdGhpcy5udW1iZXJQYWdlcyA9IGwgPyBNYXRoLmNlaWwobCAvIHRoaXMucGVyUGFnZSkgOiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMubnVtYmVyUGFnZXMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5udW1iZXJQYWdlcztcclxuICAgICAgICBpZiAoIXNpbGVudCkgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICByZXNldChsKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnVwZGF0ZShsKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvci1saXN0Jyk7XHJcbiAgICAgIGNvbnN0IGwgPSB0aGlzLm51bWJlckVudHJpZXM7XHJcbiAgICAgIEFycmF5LmZyb20odWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFnZScpKS5mb3JFYWNoKGxpID0+IGxpLnJlbW92ZSgpKTtcclxuXHJcbiAgICAgIGlmIChsIDwgdGhpcy5wZXJQYWdlICsgMSkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcCA9IHRoaXMuY3VycmVudFBhZ2U7XHJcblxyXG4gICAgICBjb25zdCBwYWdlcyA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgIGNvbnN0IHIgPSA3IC0gKHBhZ2VzIC0gMSAtIHApO1xyXG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICBjb25zdCBuZXh0ID0gdWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdO1xyXG4gICAgICBsZXQgaSA9IE1hdGgubWF4KDIsIHAgLSA3KTtcclxuICAgICAgaWYgKHIgPiAwKSBpID0gTWF0aC5tYXgoMiwgTWF0aC5taW4oaSwgaSAtIHIpKTtcclxuICAgICAgY29uc3QgaiA9IE1hdGgubWluKHBhZ2VzLCBpICsgMTQpICsgMTtcclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIDEpO1xyXG4gICAgICBmb3IgKDsgaSA8IGo7IGkrKykgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgaSk7XHJcbiAgICAgIGlmIChwYWdlcyA+IGogLSAxKSB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCBwYWdlcyk7XHJcblxyXG4gICAgICB1bC5pbnNlcnRCZWZvcmUoZnJhZywgbmV4dCk7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kQnV0dG9uKGZyYWcsIGIpIHtcclxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJywgYik7XHJcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShiKSk7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XHJcbiAgICAgIGlmIChiID09PSB0aGlzLmN1cnJlbnRQYWdlKSBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UocCkge1xyXG4gICAgICB0aGlzLnBlclBhZ2UgPSBwO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm51bWJlckVudHJpZXMsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBieToge1xyXG4gICAgZGF0ZToge1xyXG4gICAgICBjcmVhdGVkKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2ZpcnN0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3Qob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0LCAnbGFzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBfc29ydChvYmplY3QsIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gKG5ldyBEYXRlKG9iamVjdFtiXVtmaWVsZF0pKSAtIChuZXcgRGF0ZShvYmplY3RbYV1bZmllbGRdKSkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICBheihvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpO1xyXG4gICAgICB9LFxyXG4gICAgICB6YShvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpLnJldmVyc2UoKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuaW1wb3J0IF9TT1JUIGZyb20gJy4vaGlzdG9yeS1zb3J0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeScpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdvcGVuZWQ6dGFiJzogJ2luaXQnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAncmVuZGVyJyxcclxuICAgICAgICAnZmFpbGVkOnN5bmMtZW50cnknOiAndW5kb1N5bmNUb2dnbGUnLFxyXG4gICAgICAgICdwYWdpbmF0ZTpoaXN0b3J5JzogJ3BhZ2luYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5hY3Rpb24tYnV0dG9uJzogJ2RlbGVnYXRlQnV0dG9uQWN0aW9uJyxcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCcsXHJcbiAgICAgICAgICAnLm5hbWUnOiAnb3BlbicsXHJcbiAgICAgICAgICAnLmVkaXQnOiAnZWRpdCcsXHJcbiAgICAgICAgICAnLnZpZXcnOiAndmlldycsXHJcbiAgICAgICAgICAnI3NlYXJjaC10b2dnbGUnOiAndG9nZ2xlU2VhcmNoJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWZpbHRlcic6ICdyZW1vdmVGaWx0ZXInLFxyXG4gICAgICAgICAgJy50YWdzX19pdGVtJzogJ2ZpbHRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jaGVja21hcmstYWxsJzogJ2NoZWNrbWFya0FsbCcsXHJcbiAgICAgICAgICAnI3NvcnQtZW50cmllcyc6ICdzb3J0JyxcclxuICAgICAgICAgICcjZmlsdGVyLWVudHJpZXMnOiAnZmlsdGVyJyxcclxuICAgICAgICAgICcjZW50cmllcy1wZXItcGFnZSc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnLFxyXG4gICAgICAgICAgJyNzZXQtdmlldyc6ICdzZXRWaWV3JyxcclxuICAgICAgICAgICcjYWN0aW9uJzogJ29uQ2hhbmdlQWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5dXA6IHtcclxuICAgICAgICAgICcuc2VhcmNoLWVudHJpZXMnOiAnc2VhcmNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcblxyXG4gICAgbmFtZXM6IFtdLFxyXG4gICAgZW50cmllczoge30sXHJcbiAgICBlbnRyeVRtcGw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeS10ZW1wbGF0ZScpLFxyXG4gICAgZW50cmllc0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKSxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuICAgIHNvcnRlZDogJ2RhdGUtbGFzdCcsXHJcbiAgICB2aWV3TW9kZTogJ2xpc3QnLFxyXG4gICAgc2VhcmNoVGVybTogJycsXHJcbiAgICBzZWFyY2hlZDogW10sXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGZpbHRlcmVkOiBmYWxzZSxcclxuICAgIGZpbHRlck9wdGlvbnNTZXQ6IGZhbHNlLFxyXG5cclxuICAgIGluaXQodGFiKSB7XHJcbiAgICAgIGlmICh0YWIgIT09ICdoaXN0b3J5JykgcmV0dXJuO1xyXG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGFncyA9IFtdO1xyXG4gICAgfSxcclxuXHJcbiAgICBbJ2RlbGV0ZSddKG5hbWVzKSB7XHJcbiAgICAgIGxldCBtc2cgPSAnZGVsX2NvbmZpcm0nO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyaWVzW25hbWVzW2xdXS5sb2NrZWQpIHtcclxuICAgICAgICAgIG1zZyArPSAnX2xvY2tlZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShtc2cpKTtcclxuICAgICAgaWYgKGNvbmZpcm1lZCkgdGhpcy5lbWl0KCdkZWxldGU6ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBjbGVhbihuYW1lcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFuOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdkb3dubG9hZF9vcHRpb24nKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3Muc3BsaXQoJyAnKTtcclxuICAgICAgICAgIHR5cGUgPSBzZXR0aW5nc1swXTtcclxuICAgICAgICAgIHNwZWMgPSBzZXR0aW5ncy5sZW5ndGggPT09IDIgPyBzZXR0aW5nc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGlmICh0eXBlID09PSAnanNvbicpIHRoaXMuZXhwb3J0KG5hbWVzKTtcclxuICAgICAgICAgIGVsc2UgdGhpcy5kb3dubG9hZChuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpLFxyXG4gICAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnVGV4dG1hcmtlciAoJyArIG5hbWVzLmpvaW4oJ18nKSArICcpLnR4dCcpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgdGV4dDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXhwb3J0KG5hbWVzKSB7XHJcbiAgICAgIGxldCBiYWNrdXAgPSB7IGhpc3Rvcnk6IHsgZW50cmllczoge30gfSB9LFxyXG4gICAgICAgICAgZW50cmllcyA9IGJhY2t1cC5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzLnBvcCgpO1xyXG4gICAgICAgICAgZW50cmllc1tuYW1lXSA9IGhpc3RvcnkuZW50cmllc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja3VwID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGJhY2t1cCkpO1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgICAnVGV4dG1hcmtlci1iYWNrdXAtJyArXHJcbiAgICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgICAnLmpzb24nXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgYmFja3VwO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzeW5jKG5hbWUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3luYzplbnRyeScsIG5hbWVbMF0sIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpO1xyXG4gICAgfSxcclxuICAgIHZpc2l0KG5hbWVzKSB7XHJcbiAgICAgIHRoaXMuZ2V0VVJMcyhuYW1lcykudGhlbih1cmxzID0+IHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgdXJscywgbmFtZXMpKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbjplbnRyaWVzJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICBlZGl0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld05hbWUgPSB3aW5kb3cucHJvbXB0KGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdubV9tZXNzYWdlX2VkaXQnKSk7XHJcbiAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGVsLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA/XHJcbiAgICAgICAgICAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuYW1lOmVudHJ5Jywgb2xkTmFtZSwgbmV3TmFtZSwgYXJlYSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2aWV3KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndmlldzplbnRyeScsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfSxcclxuICAgIHRhZyhuYW1lcywgdGFnLCBmb3JjZSkge1xyXG4gICAgICBpZiAoIXRhZyAmJiAhZm9yY2UpIHJldHVybjtcclxuICAgICAgY29uc3QgbyA9IHsgc3luYzogW10sIGxvY2FsOiBbXSB9O1xyXG4gICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9yaWdFbnRyaWVzW25hbWVdLnN5bmNlZCkgby5zeW5jLnB1c2gobmFtZSk7XHJcbiAgICAgICAgZWxzZSBvLmxvY2FsLnB1c2gobmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RhZzplbnRyaWVzJywgbywgdGFnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVUYWdzKG5hbWVzKSB7XHJcbiAgICAgIHRoaXMudGFnKG5hbWVzLCAnJywgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1NlbGVjdGlvbigpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50cnktY2I6Y2hlY2tlZCcpLFxyXG4gICAgICAgICAgaSA9IGNoZWNrZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKCFpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBsZXQgYWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbicpLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZXMgPSBbXTtcclxuXHJcbiAgICAgIHdoaWxlKGktLSkgbmFtZXMucHVzaChjaGVja2VkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RhZycpIHtcclxuICAgICAgICBsZXQgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFnKG5hbWVzLCB2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzcGxpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjaWZpY2F0aW9uJykudmFsdWUuc3BsaXQoJyAnKSxcclxuICAgICAgICAgICAgdHlwZSA9IHNwbGl0WzBdLFxyXG4gICAgICAgICAgICBzcGVjID0gc3BsaXRbMV07XHJcblxyXG4gICAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlckVudHJpZXMoKSB7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZW50cnlUbXBsLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5lbnRyaWVzQ29udGFpbmVyLFxyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcyxcclxuICAgICAgICAgIHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBzZWFyY2hUZXJtTGVuZ3RoID0gc2VhcmNoVGVybSA/IHNlYXJjaFRlcm0ubGVuZ3RoIDogMCxcclxuICAgICAgICAgIHNlYXJjaGVkID0gISFzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoZWRGdWxsVGV4dCA9IHRoaXMuc2VhcmNoZWRGdWxsVGV4dCxcclxuICAgICAgICAgIG5hbWVzID0gc2VhcmNoZWQgPyB0aGlzLnNlYXJjaGVkIDogdGhpcy5uYW1lcyxcclxuICAgICAgICAgIGwgPSBzZWFyY2hlZCA/IG5hbWVzLmxlbmd0aCA6IHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGkgPSBzZWFyY2hlZCA/IDAgOiBsIC0gdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgY2xvbmUsIGVudHJ5LCBuYW1lLCBuYW1lRmllbGQsIGlucHV0LCBsYWJlbCwgaW5mb0J1dHRvbiwgZGV0YWlscywgc2VhcmNoUmVzdWx0cyxcclxuICAgICAgICAgIGJ1dHRvbnMsIGVkaXQsIHZpZXcsIHRhZ3MsIGltbXV0LCBpbW11dEVsLCBsb2NrZWQsIGxvY2tlZEVsLCB0YWdFbCwgYiwgajtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbHRlcmVkKSB7XHJcbiAgICAgICAgbmFtZXMgPSBuYW1lcy5maWx0ZXIobiA9PiAhIWVudHJpZXNbbl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsID0gTWF0aC5taW4obCwgbmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja21hcmstYWxsJykuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFsKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgdGFncyA9IGVudHJ5LnRhZyA/IGVudHJ5LnRhZy5zcGxpdCgnICcpIDogbnVsbDtcclxuICAgICAgICAgICAgbG9ja2VkID0gZW50cnkubG9ja2VkO1xyXG4gICAgICAgICAgICBpbW11dCA9IGVudHJ5LmltbXV0O1xyXG4gICAgICAgICAgICBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgY2xvbmUuaWQgPSAnZW50cnktJyArIGo7XHJcbiAgICAgICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICBuYW1lRmllbGQgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF07XHJcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XHJcbiAgICAgICAgICAgIGxhYmVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF07XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXRhaWxzJylbMF07XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcmVzdWx0cycpWzBdO1xyXG4gICAgICAgICAgICBidXR0b25zID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVpY2stYWN0aW9uJyk7XHJcbiAgICAgICAgICAgIGVkaXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0JylbMF07XHJcbiAgICAgICAgICAgIHZpZXcgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWV3JylbMF07XHJcbiAgICAgICAgICAgIHRhZ0VsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFncycpWzBdO1xyXG4gICAgICAgICAgICBsb2NrZWRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvY2tlZCcpWzBdO1xyXG4gICAgICAgICAgICBpbW11dEVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1tdXQnKVswXTtcclxuICAgICAgICAgICAgYiA9IGJ1dHRvbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoYi0tKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW2JdLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS11cmwnLCBlbnRyeS51cmwpO1xyXG4gICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ2VudHJ5LWNiJztcclxuICAgICAgICAgICAgaW5wdXQuaWQgPSAnZW50cnktY2ItJyArIGo7XHJcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIHZpZXcuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW50cnktY2ItJyArIGopO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvY2tlZCkge1xyXG4gICAgICAgICAgICAgIGxvY2tlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbW11dCkgaW1tdXRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWdzKSB7XHJcbiAgICAgICAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICB0YWdFbC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSAndGFnc19faXRlbSc7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcpKTtcclxuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndGl0bGVfZmlsdGVyJykpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRhZ0VsLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlZCcpWzBdLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgICAgLy9jbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdCA/IGVudHJ5Lmxvc3QubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5zeW5jZWQgPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5zeW5jZWQpIHtcclxuICAgICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzd2l0Y2gtLXN5bmMnKVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaGVkRnVsbFRleHQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB0aGlzLmZ1bGxUZXh0U2VhcmNoUmVzdWx0c1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGZ1bGxUZXh0U2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSAwLCByZXMsIG1hcmssIHBvcywgbWFya1RleHQsIG1hcmtUZXh0RWwsIGhpZ2hsaWdodCwgdDEsIHQyLCB0MztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgciA8IGZ1bGxUZXh0U2VhcmNoUmVzdWx0cy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICByZXMgPSBmdWxsVGV4dFNlYXJjaFJlc3VsdHNbcl07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmsgPSBlbnRyeS5tYXJrc1tyZXMubWFya107XHJcbiAgICAgICAgICAgICAgICAgIHBvcyA9IHJlcy5wb3M7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0ID0gbWFyay50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0MSA9IG1hcmtUZXh0LnN1YnN0cmluZyhNYXRoLm1heChwb3MtMTYsIDApLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgICB0MiA9IG1hcmtUZXh0LnN1YnN0cihwb3MsIHNlYXJjaFRlcm1MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICB0MyA9IG1hcmtUZXh0LnN1YnN0cihwb3Mrc2VhcmNoVGVybUxlbmd0aCwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICB0MSA9IHQxID8gJy4uLiAnICsgdDEgOiB0MTtcclxuICAgICAgICAgICAgICAgICAgdDMgPSB0MyA/IHQzICsgJyAuLi4nIDogdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5jbGFzc05hbWUgPSAnaGlnaGxpZ2h0JztcclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQyKSk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDEpKTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKG1hcmtUZXh0RWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKGksIGwtaS0xKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFkZXJGaWVsZHMobCkge1xyXG4gICAgICBjb25zdCBub0VudHJpZXNIaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vLWVudHJpZXMnKTtcclxuICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYWN0aW9ucycpO1xyXG4gICAgICBjb25zdCBzb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQnKTtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKTtcclxuICAgICAgY29uc3QgcHBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcy1wZXItcGFnZScpO1xyXG4gICAgICBjb25zdCBjaGVja2FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja21hcmstYWxsLWNvbnRhaW5lcicpO1xyXG4gICAgICBjb25zdCBtZXRoXzAgPSAhbCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMSA9IGwgPiAwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8yID0gbCA+IDIgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzMgPSBsID4gMTAgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG5cclxuICAgICAgbm9FbnRyaWVzSGludC5jbGFzc0xpc3RbbWV0aF8wXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGFjdGlvbnMuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBzZWFyY2guY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBzb3J0LmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgZmlsdGVyLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY291bnQuY2xhc3NMaXN0W21ldGhfM10oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB2aWV3LmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgY2hlY2thbGwuY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtY291bnQnKS5pbm5lclRleHQgPSBsO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHAgPSB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwO1xyXG4gICAgICAgIHBwU2VsZWN0LnZhbHVlID0gcHA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlck9wdGlvbnMoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbnNTZXQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIGNvbnN0IGFsbFRhZ3MgPSBbXTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCB0YWdzO1xyXG5cclxuICAgICAgc2VsZWN0LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJPcHRpb24pO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uaW5uZXJUZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI0Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICB0YWdzID0gZW50cmllc1tuYW1lXS50YWc7XHJcbiAgICAgICAgdGFncyA9IHRhZ3MgPyB0YWdzLnNwbGl0KCcgJykgOiBbXTtcclxuICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgIGlmICghYWxsVGFncy5pbmNsdWRlcyh0YWcpKSBhbGxUYWdzLnB1c2godGFnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFhbGxUYWdzLmxlbmd0aCAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtbm90YWcnKSkge1xyXG4gICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyksIHsgZGlzYWJsZWQ6IHRydWUsIGlkOiAnZmlsdGVyLW9wdC1ub3RhZycgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB0aGlzLmFkZEZpbHRlck9wdCh0YWcsIHRhZykpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbnNTZXQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFkZEZpbHRlck9wdCh0YWcsIHRleHQsIGF0dHJzKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhZ3MuaW5jbHVkZXModGFnKSkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKTtcclxuICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblxyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcclxuICAgICAgb3B0LnZhbHVlID0gdGFnO1xyXG4gICAgICBvcHQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaWYgKGF0dHJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSBpbiBhdHRycykgb3B0LnNldEF0dHJpYnV0ZShhLCBhdHRyc1thXSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnRhZ3MubGVuZ3RoICYmIHRhZykge1xyXG4gICAgICAgIGNvbnN0IG5vdGFnRmlsdGVyT3B0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtbm90YWcnKTtcclxuICAgICAgICBpZiAobm90YWdGaWx0ZXJPcHQpIHNlbGVjdC5yZW1vdmVDaGlsZChub3RhZ0ZpbHRlck9wdCk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcpIHRoaXMudGFncy5wdXNoKHRhZyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGV4dChuYW1lcywgc3BlYykge1xyXG4gICAgICBsZXQgYWxsX21hcmtzX3BsdXNfbWV0YSA9IHNwZWMgPT09ICcrbWV0YScsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19sb3N0ID0gc3BlYyA9PT0gJytsb3N0JyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzID0gc3BlYyA9PT0gJytub3RlcycsXHJcbiAgICAgICAgICBhbGxfbWFya3NfbG9zdCA9IHNwZWMgPT09ICdsb3N0JyxcclxuICAgICAgICAgIGRlZmF1bHRNYXJrZXJzID0gWydtJywgJzInLCAnMycsIDIsIDNdLFxyXG5cclxuICAgICAgICAgIHJlamVjdCA9IGRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKHNwZWMpID9cclxuICAgICAgICAgICAgZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGtleSAhPSBzcGVjO1xyXG4gICAgICAgICAgICB9IDogc3BlYyA9PT0gJ2MnID9cclxuICAgICAgICAgICAgZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRNYXJrZXJzLmluY2x1ZGVzKGtleSk7XHJcbiAgICAgICAgICAgIH0gOiBudWxsLFxyXG5cclxuICAgICAgICAgIG5ld0xpbmUgPSAnXFxyXFxuJyxcclxuICAgICAgICAgIG5ld0xpbmVzID0gJ1xcclxcblxcclxcbicsXHJcbiAgICAgICAgICBub3RlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25vdGUnKSxcclxuICAgICAgICAgIHRleHQgPSAnJyxcclxuICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgIG5vdGVUZXh0LCBlbnRyeSwgbWFya3MsIG1hcmssIGxvc3QsIG5hbWUsIG0sIG4sIGo7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXM7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBtYXJrcyA9IGVudHJ5Lm1hcmtzO1xyXG4gICAgICAgICAgbG9zdCA9IGVudHJ5Lmxvc3Q7XHJcbiAgICAgICAgICBtID0gbWFya3MubGVuZ3RoO1xyXG4gICAgICAgICAgbiA9IGxvc3QubGVuZ3RoO1xyXG5cclxuICAgICAgICAgIGlmICghYWxsX21hcmtzX2xvc3QpIHtcclxuICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGEgfHwgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gbmFtZSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgJ1VSTDogJyArIGVudHJ5LnVybCArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3BhZ2VfdGl0bGUnKSArICc6ICcgKyBlbnRyeS50aXRsZSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2NyZWF0ZWQnKSArICc6ICcgKyB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSkgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsYXN0X21vZGlmaWVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSkgK1xyXG4gICAgICAgICAgICAgICAgbmV3TGluZSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgbWFyayA9IG1hcmtzW2pdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmVqZWN0ICYmIHJlamVjdChtYXJrLmtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJy0tLScgKyBuZXdMaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyAmJiBtYXJrLm5vdGUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGVUZXh0ID0gbWFyay5ub3RlLnRleHQgfHwgbWFyay5ub3RlO1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICAnICsgbm90ZSArICc6JyArIG5ld0xpbmUgKyAnICAnICsgbm90ZVRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4gICcpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYWxsX21hcmtzX2xvc3QgfHwgYWxsX21hcmtzX3BsdXNfbG9zdCkge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xvc3RfbWFya3MnKSArICc6JyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgbWFyayA9IGxvc3Rbal07XHJcblxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dC50cmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldERhdGEobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIHRoaXMuZ2V0VGV4dChuYW1lcywgc3BlYyk7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkYXRhID0gJycsXHJcbiAgICAgICAgICAgIG5ld0xpbmVzID0gJ1xcclxcblxcclxcbicsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgZGF0YSArPSBlbnRyaWVzW25hbWVzW2ldXVt0eXBlXSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VVJMcyhuYW1lcykge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHVybHMgPSBbXSxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB1cmxzLnB1c2goZW50cmllc1tuYW1lc1tpXV0udXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybHM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2goZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGVybSA9IGVsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUgPyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpIDogJyc7XHJcbiAgICAgIGNvbnN0IGNvdW50U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IGNsYXNzTWV0aCA9IHRlcm0gPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXRvZ2dsZScpO1xyXG4gICAgICB0aGlzLnNldHVwU2VhcmNoKHRlcm0sIHNlYXJjaFR5cGUpLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgY291bnRTZWxlY3QuY2xhc3NMaXN0W2NsYXNzTWV0aF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0b2dnbGUuY2xhc3NMaXN0W2NsYXNzTWV0aF0oJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHNldHVwU2VhcmNoKHRlcm0sIHNlYXJjaFR5cGUpIHtcclxuICAgICAgdGVybSA9IHR5cGVvZiB0ZXJtID09PSAnc3RyaW5nJyA/IHRlcm0gOiB0aGlzLnNlYXJjaFRlcm07XHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBzZWFyY2hDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY291bnQnKTtcclxuICAgICAgdGhpcy5zZWFyY2hlZCA9IFtdO1xyXG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSB0ZXJtO1xyXG4gICAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkJyk7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGlmIChzZWFyY2hUeXBlID09PSAnZnVsbC10ZXh0Jykge1xyXG4gICAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEZ1bGxUZXh0KHRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZC0tZnVsbC10ZXh0Jyk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEJ5TmFtZSh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWFyY2hDb3VudC5pbm5lclRleHQgPSB0aGlzLnNlYXJjaGVkLmxlbmd0aCB8fCAnJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZWFyY2hCeU5hbWUodGVybSkge1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoLCBpID0gMCwgbmFtZTtcclxuXHJcbiAgICAgIGZvcig7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGVybSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoRnVsbFRleHQodGV4dCkge1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IG5hbWUsIG1hcmtzLCBpLCBtYXJrVGV4dCwgcG9zLCBmb3VuZDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmZ1bGxUZXh0U2VhcmNoUmVzdWx0cyA9IHt9O1xyXG5cclxuICAgICAgZm9yIChuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICBtYXJrcyA9IGVudHJpZXNbbmFtZV0ubWFya3M7XHJcbiAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIG1hcmtUZXh0ID0gbWFya3NbaV0udGV4dDtcclxuICAgICAgICAgIHBvcyA9IG1hcmtUZXh0LnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRleHQpO1xyXG4gICAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXN1bHRzW25hbWVdID0gcmVzdWx0c1tuYW1lXSB8fCBbXTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXS5wdXNoKHsgbWFyazogaSwgcG9zIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZWFyY2goZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMtLW5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1mdWxsLXRleHQnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0pIHRoaXMuc2VhcmNoKG51bGwsIHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBwID0gdGhpcy5wZXJQYWdlID0gZWwudmFsdWUgKiAxO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLCBwKTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlldyhlLCBlbCkge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAodmFsID09PSAnbGlzdCcpIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgZWxzZSB0YWJsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnZpZXctc2V0dGluZycsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBWaWV3KHZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC12aWV3JykudmFsdWUgPSB2aWV3O1xyXG4gICAgICB0aGlzLnNldFZpZXcobnVsbCwgeyB2YWx1ZTogdmlldyB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsdWUgPT09ICd0YWcnKSBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5mb2N1cygpLCAwKTtcclxuICAgIH0sXHJcbiAgICBzb3J0KGUsIGVsKSB7XHJcbiAgICAgIGxldCBzb3J0ZWQgPSB0aGlzLnNvcnRlZCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzb3J0LXNldHRpbmcnLCBzb3J0ZWQpO1xyXG4gICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNvcnQoc29ydGVkKSB7XHJcbiAgICAgIHNvcnRlZCA9IHNvcnRlZC5zcGxpdCgnLScpO1xyXG4gICAgICB0aGlzLm5hbWVzID0gX1NPUlQuYnlbc29ydGVkWzBdXVtzb3J0ZWRbMV1dKHRoaXMub3JpZ0VudHJpZXMpO1xyXG4gICAgICB0aGlzLnNvcnRTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcihlLCBlbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbC5ub2RlTmFtZSA9PT0gJ1NQQU4nID8gZWwuZmlyc3RDaGlsZC5kYXRhIDogZWwudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSB7fTtcclxuICAgICAgbGV0IGVudHJ5LCByeCwgYyA9IDA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIHJ4ID0gbmV3IFJlZ0V4cCgnXicrZmlsdGVyKyckfF4nK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnJCcsICdnJyk7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgJiYgZW50cnkudGFnICYmIGVudHJ5LnRhZy5zZWFyY2gocngpICE9PSAtMSkgfHwgKCFlbnRyeS50YWcgJiYgZmlsdGVyID09ICcnKSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICBjKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGZpbHRlcmVkRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCBjKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIHRoaXMubmFtZXMubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBzb3J0U2VhcmNoUmVzdWx0cygpIHtcclxuICAgICAgaWYgKCF0aGlzLnNlYXJjaGVkLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGEgPSBuYW1lcy5pbmRleE9mKGEpO1xyXG4gICAgICAgIGIgPSBuYW1lcy5pbmRleE9mKGIpO1xyXG4gICAgICAgIGlmIChhID09IGIpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2ttYXJrQWxsKGUsIGVsKSB7XHJcbiAgICAgIGxldCBkaXJlY3RseSA9IHR5cGVvZiBlbCA9PT0gJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgY2hlY2tlZCA9IGRpcmVjdGx5ID8gZWwgOiBlbC5jaGVja2VkLFxyXG4gICAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAgIGkgPSBpbnB1dHMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkgaW5wdXRzW2ldLmNoZWNrZWQgPSBjaGVja2VkO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGxldCBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksXHJcbiAgICAgICAgICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lID8gW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB1bmRvU3luY1RvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtLXN5bmNbZGF0YS1uYW1lPVwiJyArIG5hbWUgKyAnXCJdJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgfHwgdGhpcy5zb3J0ZWQsXHJcbiAgICAgICAgICAgIHZpZXcgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkudmlldyB8fCB0aGlzLnZpZXdNb2RlLFxyXG4gICAgICAgICAgICBsO1xyXG4gICAgICAgIHRoaXMuc29ydGVkID0gc29ydGVkO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFZpZXcodmlldyk7XHJcbiAgICAgICAgbCA9IHRoaXMubmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwU2VhcmNoKCkudG9nZ2xlSGVhZGVyRmllbGRzKGwpLnRoZW4oKCkgPT4gdGhpcy5yZW5kZXJFbnRyaWVzKCkuc2V0RmlsdGVyT3B0aW9ucygpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGUocGFnZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeVtkYXRhLW5hbWU9XCInICsgZW50cnkubmFtZSArICdcIl0nKTtcclxuXHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5maXJzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAvL2VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0Lmxlbmd0aDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd0b2dnbGVkOnN5bmMnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICdzeW5jZWQ6ZW50cnknOiAndXBkYXRlRXhwb3J0TGlua3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1idXR0b24nOiAndHJpZ2dlckZpbGVJbnB1dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5pbXBvcnQtZmlsZSc6ICdoYW5kbGVGaWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAnLmV4cG9ydC1idXR0b24nOiAndXBkYXRlRXhwb3J0TmFtZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRXhwb3J0TGlua3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW1wb3J0OiBmdW5jdGlvbihzdG9yZVN0cmluZywgdHlwZSkge1xyXG4gICAgICB2YXIgcGFyc2VkU3RyaW5nO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWRTdHJpbmcgPSBKU09OLnBhcnNlKHN0b3JlU3RyaW5nKTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfcGFyc2UnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJzZWRTdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ltcG9ydDpzdG9yYWdlJywgcGFyc2VkU3RyaW5nLCB0eXBlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlGYWlsdXJlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0cmlnZ2VyRmlsZUlucHV0OiBmdW5jdGlvbihlLCBlbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LS0nICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSkuY2xpY2soKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGaWxlKGUsIGVsKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICAgICAgZmlsZSA9IGVsLmZpbGVzWzBdLFxyXG4gICAgICAgICAgc2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMDAwMDAsXHJcbiAgICAgICAgICB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgIG1vZCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc2l6ZSA+IDUwKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZScpKTtcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnc3luYycgJiYgc2l6ZSA+IDAuMDk5KVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZV9zeW5jJykpO1xyXG5cclxuICAgICAgaWYgKGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpICE9PSAnanNvbicpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9mb3JtYXQnKSk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbW9kLmltcG9ydChlLnRhcmdldC5yZXN1bHQsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pKGZpbGUpO1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheUZhaWx1cmUocmVhc29uKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtZXJyb3InKS5pbm5lclRleHQgPSByZWFzb247XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUV4cG9ydExpbmtzKCkge1xyXG4gICAgICBjb25zdCBsb2NhbERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1sb2NhbCcpO1xyXG4gICAgICBjb25zdCBzeW5jZWREYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtc3luY2VkJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2NhbF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsb2NhbERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnc3luY2VkX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIHN5bmNlZERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUV4cG9ydE5hbWUoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAnVGV4dG1hcmtlci1kYXRhLScgK1xyXG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgKyAnLScgK1xyXG4gICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAnLmpzb24nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnbG9nJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjbGVhci1sb2dzJzogJ2NsZWFyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmxvZygpO1xyXG4gICAgfSxcclxuICAgIGxvZygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbG9ncyA9IGxvZ3MgfHwgW107XHJcbiAgICAgICAgbGV0IHRhYmxlQm9keSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF0sXHJcbiAgICAgICAgICAgIGwgPSBsb2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgdHIsIHRkX2RhdGUsIHRkX21zZywgbm9kZV9kYXRlLCBub2RlX21zZywgbG9nLCB0aW1lLCBtc2csIHJlYXNvbjtcclxuXHJcbiAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9sb2dzJyk7XHJcbiAgICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgICAgbXNnID0gbG9nWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ251bWJlcicpIG1zZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKF9MT0dfS0VZUy5nZXRLZXlCeVZhbHVlKGxvZ1sxXSkpO1xyXG4gICAgICAgICAgICAvLydudScse3llYXI6J251bWVyaWMnLG1vbnRoOicyLWRpZ2l0JyxkYXk6JzItZGlnaXQnLGhvdXI6J251bWVyaWMnLHNlY29uZDonbnVtZXJpYycsbWludXRlOidudW1lcmljJ31cclxuICAgICAgICAgICAgdGltZSA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKChuZXcgRGF0ZShsb2dbMF0pKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICB0ZF9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgdGRfbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgbm9kZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGltZSk7XHJcbiAgICAgICAgICAgIG5vZGVfbXNnID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobXNnKTtcclxuXHJcbiAgICAgICAgICAgIHRkX2RhdGUuYXBwZW5kQ2hpbGQobm9kZV9kYXRlKTtcclxuICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKG5vZGVfbXNnKTtcclxuICAgICAgICAgICAgaWYgKGxvZ1syXSkge1xyXG4gICAgICAgICAgICAgIHJlYXNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgIC8vcmVhc29uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvZ1syXSkpO1xyXG4gICAgICAgICAgICAgIHJlYXNvbi5pbm5lclRleHQgPSBsb2dbMl07XHJcbiAgICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX21zZyk7XHJcbiAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGVCb2R5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vbG9ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXI6bG9ncycpO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSS0VSIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5LCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuXHJcbiAgICB0aGlzLnN0eWxlcyA9IHtcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXN0b21CZ0NvbG9yLFxyXG4gICAgICAnY29sb3InOiB1bmRlZmluZWQsXHJcbiAgICAgICdib3JkZXItYm90dG9tJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zaXplJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1mYW1pbHknOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXdlaWdodCc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc3R5bGUnOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LWRlY29yYXRpb24nOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LXNoYWRvdyc6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNoYWRvdyA9IHtcclxuICAgICAgeDogJzFweCcsXHJcbiAgICAgIHk6ICcxcHgnLFxyXG4gICAgICBibHVyOiAnMXB4JyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuaW5qZWN0KCkucHJldmlldygpKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnbWFya2VycycpLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG1hcmtlcnNbdGhpcy5rZXldO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlID0gbWFya2VyID8gbWFya2VyLnN0eWxlIDogbnVsbDtcclxuXHJcbiAgICAgIHRoaXMuYXV0b25vdGUgPSBtYXJrZXIgJiYgbWFya2VyLmF1dG9ub3RlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFleGlzdGluZ1N0eWxlKSB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdHlsZSA9IGV4aXN0aW5nU3R5bGU7XHJcblxyXG4gICAgICBsZXQgc3R5bGVzID0gdGhpcy5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgaSA9IHN0eWxlcy5sZW5ndGgsXHJcbiAgICAgICAgICBzdHlsZSwgc3R5bGVTcGxpdCwgdGV4dFNoYWRvdztcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBzdHlsZSA9IHN0eWxlc1tpXTtcclxuICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgIHN0eWxlU3BsaXQgPSBzdHlsZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgdGhpcy5zdHlsZXNbc3R5bGVTcGxpdFswXV0gPSBzdHlsZVNwbGl0WzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCh0ZXh0U2hhZG93ID0gdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10pICYmIHRleHRTaGFkb3cgIT09ICdub25lJykge1xyXG4gICAgICAgIGxldCBzaGFkb3dTcGxpdCA9IHRleHRTaGFkb3cuc3BsaXQoJyAnKTtcclxuICAgICAgICB0aGlzLnNoYWRvdy54ID0gc2hhZG93U3BsaXRbMF07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueSA9IHNoYWRvd1NwbGl0WzFdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmJsdXIgPSBzaGFkb3dTcGxpdFsyXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5jb2xvciA9IHNoYWRvd1NwbGl0WzNdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaW5qZWN0KCkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgc3R5bGVzID0gdGhpcy5zdHlsZXMsXHJcbiAgICAgICAgYmdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvcicpLFxyXG4gICAgICAgIGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvcicpLFxyXG4gICAgICAgIGJvcmRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvcicpLFxyXG4gICAgICAgIGF1dG9ub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKSxcclxuICAgICAgICBiZyA9IHN0eWxlc1snYmFja2dyb3VuZC1jb2xvciddLFxyXG4gICAgICAgIGNvbG9yID0gc3R5bGVzWydjb2xvciddLFxyXG4gICAgICAgIGJvcmRlciA9IHN0eWxlc1snYm9yZGVyLWJvdHRvbSddLFxyXG4gICAgICAgIGF1dG9ub3RlQ29sb3IgPSB0aGlzLmF1dG9ub3RlIHx8ICcnLFxyXG4gICAgICAgIHNoYWRvdywgc2hhZG93U2VsZWN0LCBpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID0gdGhpcy5hdXRvbm90ZTtcclxuICAgIGF1dG9ub3RlSW5wdXQudmFsdWUgPSBhdXRvbm90ZUNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgYXV0b25vdGVJbnB1dC5kaXNhYmxlZCA9ICFhdXRvbm90ZUNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYmc7XHJcbiAgICBiZ0lucHV0LnZhbHVlID0gYmcgfHwgJyNmZmZmZmYnO1xyXG4gICAgYmdJbnB1dC5kaXNhYmxlZCA9ICFiZztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhY29sb3I7XHJcbiAgICBjb2xvcklucHV0LnZhbHVlID0gY29sb3IgfHwgJyMwMDAwMDAnO1xyXG4gICAgY29sb3JJbnB1dC5kaXNhYmxlZCA9ICFjb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFib3JkZXI7XHJcbiAgICBib3JkZXJJbnB1dC52YWx1ZSA9IGJvcmRlciB8fCAnMXB4IHNvbGlkICNmZjAwMDAnO1xyXG4gICAgYm9yZGVySW5wdXQuZGlzYWJsZWQgPSAhYm9yZGVyO1xyXG5cclxuICAgIFsnZm9udC1zaXplJywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnQtc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCkudmFsdWUgPSBzdHlsZXNbcHJvcF0gfHwgJ2RlZmF1bHQnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdycpO1xyXG4gICAgc2hhZG93ID0gc3R5bGVzWyd0ZXh0LXNoYWRvdyddO1xyXG4gICAgaSA9ICFzaGFkb3cgPyAwIDogc2hhZG93ID09PSAnbm9uZScgPyAyIDogMTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICBzaGFkb3dTZWxlY3QuY2hpbGRyZW5baV0uY2xpY2soKTtcclxuXHJcbiAgICBbJ3gnLCAneScsICdibHVyJywgJ2NvbG9yJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93LScgKyBwcm9wKS52YWx1ZSA9IG1hcmtlci5zaGFkb3dbcHJvcF0ucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcHJldmlldygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykuc3R5bGUgPSB0aGlzLnN0eWxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoZWwpIHtcclxuICAgIGxldCBjbGFzc2VzID0gZWwuY2xhc3NMaXN0LFxyXG4gICAgICAgIHByb3AgPSBlbC5uYW1lLFxyXG4gICAgICAgIHZhbDtcclxuXHJcbiAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnY3NzLWNvbG9yJykpIHtcclxuICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcclxuICAgICAgICB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gcHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nID8gJzFweCBzb2xpZCAnICsgdmFsIDogdmFsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3cnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWwpIHtcclxuICAgICAgICAgIGNhc2UgJ25vbmUnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gJ25vbmUnOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdW5kZWZpbmVkOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NoYWRvdyc6IG1hcmtlci5zZXRTaGFkb3coKTsgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctdmFsdWUnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy1weC12YWx1ZScpKVxyXG4gICAgICAgICAgdmFsICs9ICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93W3Byb3BdID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhZG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3JkZXItYm90dG9tJykge1xyXG4gICAgICB2YWwgPSAnMXB4IHNvbGlkICcgKyBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdHlsZSgpLnByZXZpZXcoKTtcclxuICB9XHJcbiAgaXNWYWxpZChwcm9wLCB2YWwpIHtcclxuICAgIGxldCB2YWxpZDtcclxuXHJcbiAgICBzd2l0Y2gocHJvcCkge1xyXG4gICAgICBjYXNlICdiYWNrZ3JvdW5kLWNvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnYm9yZGVyLWJvdHRvbSc6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zaXplJzogdmFsaWQgPSAvXlswLTldezEsMn1weCQvLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtZmFtaWx5JzogdmFsaWQgPSAvXlthLXosXFxzLV17NSw0MH0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC13ZWlnaHQnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXN0eWxlJzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1kZWNvcmF0aW9uJzogdmFsaWQgPSAvXlthLXotXXs3LDEyfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LXNoYWRvdyc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICd5JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAnYmx1cic6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuICBzZXRTaGFkb3coKSB7XHJcbiAgICB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHRoaXMuc2hhZG93LnggKyAnICcgKyB0aGlzLnNoYWRvdy55ICsgJyAnICsgdGhpcy5zaGFkb3cuYmx1ciArICcgJyArIHRoaXMuc2hhZG93LmNvbG9yO1xyXG4gIH1cclxuICBzZXRTdHlsZSgpIHtcclxuICAgIGxldCBzdHlsZSA9ICcnLCB2YWw7XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnN0eWxlcykge1xyXG4gICAgICB2YWwgPSB0aGlzLnN0eWxlc1tpXTtcclxuICAgICAgaWYgKHZhbCkgc3R5bGUgKz0gaSArICc6JyArIHZhbCArICc7JztcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsLFxyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnbGknOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgdGhpcy5vcGVuKGN1cnJlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGUoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCB0aGlzLmN1cnJlbnQgPT0gZWwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHRoaXMuY2xvc2UodGhpcy5jdXJyZW50KTtcclxuXHJcbiAgICAgIHRoaXMub3BlbihlbCk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlbCkge1xyXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCdvcGVuZWQ6dGFiJywgdGFyZ2V0SWQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBlbDtcclxuICAgICAgaWYgKHRoaXMucGFnZU5hdikgd2luZG93LmRvY3VtZW50LnRpdGxlID0gJ1RleHRtYXJrZXIgLSAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodGFyZ2V0SWQpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnOiAnc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNzcyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICAgICAnI2N1c3RvbWl6ZWQta2V5JzogJ3VwZGF0ZU1hcmtlcicsXHJcbiAgICAgICAgICAnI2FkZC1rZXknOiAnYWRkTWFya2VyJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWtleSc6ICdyZW1vdmVNYXJrZXInLFxyXG4gICAgICAgICAgJy5tYXJrLW9wdCc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgICAgICcuc2MtY2InOiAndG9nZ2xlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zaG9ydGN1dC1zZWxlY3QnOiAnY2hhbmdlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zYXZlLW9wdCc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgICAgICcubmFtaW5nLW9wdCc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAgICAgJyNub3Rlcy1uZXcnOiAndG9nZ2xlU2F2ZU5vdGVPcHQnLFxyXG4gICAgICAgICAgJy5jdXN0b21pemUtcXVpY2tidXR0b25zJzogJ2NoYW5nZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuZG93bmxvYWQtcXVpY2tidXR0b24tb3B0JzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuY3RtLWNiJzogJ3RvZ2dsZUN0bScsXHJcbiAgICAgICAgICAnLm5vdGVzLWNiJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAgICcubWlzYy1jYic6ICd0b2dnbGVNaXNjJyxcclxuICAgICAgICAgICcudGJicG93ZXItb3B0JzogJ3RvZ2dsZVRCQlBvd2VyT3B0JyxcclxuICAgICAgICAgICcudG11aXBvcyc6ICdjaGFuZ2VUbXVpUG9zaXRpb25PcHQnLFxyXG4gICAgICAgICAgJyNwcml2YXRlLXNhdmUnOiAndG9nZ2xlUHJpdlNhdmUnLFxyXG4gICAgICAgICAgJyNhdXRvLW5vdGUnOiAndG9nZ2xlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpbW11dCc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICAgICAnI2Ryb3AtbG9zc2VzJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAgICAgJyNhdXRvbm90ZS1jb2xvcic6ICdjaGFuZ2VBdXRvTm90ZU9wdCcsXHJcbiAgICAgICAgICAnI2lnbm9yZS1oYXNoJzogJ2NoYW5nZUhhc2hPcHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsbG93ZWRLZXlzOiAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbiBvIHAgcSByIHMgdCB1IHYgeCB5IHogMCAxIDQgNSA2IDcgOCA5IGVudGVyIC0gKycuc3BsaXQoJyAnKSxcclxuICAgIGFsbG93ZWRTaG9ydGN1dHM6IFsnJywgJ2N0cmxLZXknLCAnc2hpZnRLZXknLCAnYWx0S2V5JywgJ2N0cmxLZXktc2hpZnRLZXknLCAnY3RybEtleS1hbHRLZXknLCAnc2hpZnRLZXktYWx0S2V5JywgJ21ldGFLZXknLCAnbWV0YUtleS1zaGlmdEtleScsICdtZXRhS2V5LWFsdEtleSddLFxyXG4gICAgYWxsb3dlZFF1aWNrYnV0dG9uT3B0czogWyd0aXRsZScsICd1cmwnLCAndGV4dCcsICd0ZXh0ICttZXRhJywgJ3RleHQgK25vdGVzJywgJ3RleHQgK2xvc3QnLCAndGV4dCBtJywgJ3RleHQgMicsICd0ZXh0IDMnLCAndGV4dCBjJywgJ3RleHQgbG9zdCddLFxyXG4gICAgbWFya2VyS2V5czogWydtJywgJzInLCAnMyddLFxyXG4gICAgY3VzdG9tTWFya2VyS2V5czogW10sXHJcbiAgICBtYXJrZXI6IG51bGwsXHJcbiAgICBjdXN0b21TZWFyY2g6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXJLZXlzID0gdGhpcy5tYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBpLCBrZXk7XHJcblxyXG4gICAgICAgIGZvciAoa2V5IGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgIGkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmICghbWFya2VyS2V5cy5pbmNsdWRlcyhpKSAmJiAhY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKVxyXG4gICAgICAgICAgICAudXBkYXRlTWFya2VyKHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nKVxyXG4gICAgICAgICAgICAuaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1rZXknKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uJykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMgPSBbXTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVNYXJrZXIoZSwgZWwsIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgbGV0IGtleSA9IGVsID8gZWwudmFsdWUgOiBlID8gZSA6IHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nO1xyXG5cclxuICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgX01BUktFUihrZXksIGN1c3RvbUJnQ29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgbGV0IGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG5cclxuICAgICAgICAgIGFsbG93ZWRLZXlzID0gdGhpcy5hbGxvd2VkS2V5cyxcclxuICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcblxyXG4gICAgICAgICAgYSA9IGFsbG93ZWRLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGMgPSBjdXN0b21NYXJrZXJLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG5cclxuICAgICAgICAgIGZyYWdtZW50MSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50NCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHJcbiAgICAgICAgICBvcHRpb24sIGljb24sIHZhbCwgVmFsO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBjOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBjdXN0b21NYXJrZXJLZXlzW2ldO1xyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIFZhbCA9IFZhbCA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IFZhbDtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuXHJcbiAgICAgICAgZnJhZ21lbnQzLmFwcGVuZENoaWxkKG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnQyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIHZhbDtcclxuICAgICAgICBpY29uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50MSk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGZyYWdtZW50Mik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDMpO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IGE7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGFsbG93ZWRLZXlzW2ldLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKHZhbCkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcblxyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50NC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50NCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBpbmplY3RTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgICBsZXQgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzLFxyXG4gICAgICAgICAgaSwgc2NDaGVja2JveCwgc2NTZWxlY3QsIGNtQ2hlY2tib3gsIHNjO1xyXG5cclxuICAgICAgZm9yIChpIGluIHNob3J0Y3V0cykge1xyXG4gICAgICAgIHNjID0gc2hvcnRjdXRzW2ldO1xyXG4gICAgICAgIHNjQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MtJyArIGkpO1xyXG4gICAgICAgIHNjU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXNlbGVjdC0nICsgaSk7XHJcbiAgICAgICAgY21DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbS0nICsgaSk7XHJcblxyXG4gICAgICAgIGlmIChzY0NoZWNrYm94KSBzY0NoZWNrYm94LmNoZWNrZWQgPSBzY1sxXTtcclxuICAgICAgICBpZiAoc2NTZWxlY3QpIHNjU2VsZWN0LnZhbHVlID0gc2NbMF07XHJcbiAgICAgICAgaWYgKGNtQ2hlY2tib3gpIGNtQ2hlY2tib3guY2hlY2tlZCA9IHNjWzJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MuaGlzdG9yeSxcclxuICAgICAgICAgIHNhdmVPcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NhdmUtb3B0Jyk7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmF1dG9zYXZlKSBzYXZlT3B0c1swXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBzYXZlT3B0c1sxXS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLScgKyBoaXN0b3J5U2V0dGluZ3MubmFtaW5nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaXZhdGUtc2F2ZScpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZUluUHJpdjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltbXV0JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5pbW11dDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtbG9zc2VzJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5kcm9wTG9zc2VzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnbm9yZS1oYXNoJykuY2hlY2tlZCA9ICFoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaDtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQgPT09ICdqc29uJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1qc29uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLXRleHQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtaXNjU2V0dGluZ3MgPSBzZXR0aW5ncy5taXNjO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstbWV0aG9kLS0nICsgbWlzY1NldHRpbmdzLm1hcmttZXRob2QpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuYm1pY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlaWNvbicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVvbmNsaWNrJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3Rlb25jbGljaztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXRyYW5zcCcpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXRyYW5zcDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1wcm9ncmVzc2JhcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucHJvZ3Jlc3NiYXI7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU3R5bGUoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXIudXBkYXRlKGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnN0eWxlLXNldHRpbmcnLCBtYXJrZXIua2V5LCBtYXJrZXIuc3R5bGUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLmNoZWNrZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKS52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID8gZWwudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VIYXNoT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmhhc2gtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJbW11dE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppbW11dC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRHJvcExvc3Nlc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1c3RvbVNlYXJjaChlLCBlbCkge1xyXG4gICAgICB0aGlzLmhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpO1xyXG4gICAgICBjb25zdCBpbnAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0Jyk7XHJcbiAgICAgIGNvbnN0IGlucDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJyk7XHJcbiAgICAgIGNvbnN0IHBhcnQxID0gaW5wMS52YWx1ZTtcclxuICAgICAgY29uc3QgcGFydDIgPSBpbnAyLnZhbHVlO1xyXG4gICAgICBpZiAoIXBhcnQxICYmICFwYXJ0Mikge1xyXG4gICAgICAgIGlucDEudmFsdWUgPSB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgICBpbnAyLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIFtwYXJ0MSwgcGFydDJdKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJhbmRvbUxpZ2h0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKCgwLjggKyBNYXRoLnJhbmRvbSgpICogMC4xNzUpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tc2V0dGluZ3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1oaXN0b3J5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1wYWdlbm90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9wYWdlbm90ZXMgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzeW5jJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG8oZmllbGQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS0nICsgZmllbGQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UT0dHTEVSIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xyXG4gIH1cclxuICB0b2dnbGUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgZGF0YVRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgIHRhcmdldHMgPSBkYXRhVGFyZ2V0ID8gZGF0YVRhcmdldC5zcGxpdCgnICcpIDogbnVsbCxcclxuICAgICAgICBkYXRhVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyksXHJcbiAgICAgICAgcm9sZXMgPSBkYXRhVG9nZ2xlID8gZGF0YVRvZ2dsZS5zcGxpdCgnICcpIDogbnVsbDtcclxuXHJcbiAgICBpZiAocm9sZXMpIHtcclxuICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1tpXSkuY2xhc3NMaXN0W3JvbGVdKCdvcGVuJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzWzBdKS5kaXNhYmxlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=