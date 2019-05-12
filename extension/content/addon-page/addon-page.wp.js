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
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._MODULE({
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

exports.default = _default;

/***/ }),

/***/ "./content/addon-page/bootstrap.js":
/*!*****************************************!*\
  !*** ./content/addon-page/bootstrap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = _interopRequireDefault(__webpack_require__(/*! ./_store */ "./content/addon-page/_store.js"));

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _history = _interopRequireDefault(__webpack_require__(/*! ./modules/history */ "./content/addon-page/modules/history.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./modules/settings */ "./content/addon-page/modules/settings.js"));

var _logs = _interopRequireDefault(__webpack_require__(/*! ./modules/logs */ "./content/addon-page/modules/logs.js"));

var _syncing = _interopRequireDefault(__webpack_require__(/*! ./modules/syncing */ "./content/addon-page/modules/syncing.js"));

var _import = _interopRequireDefault(__webpack_require__(/*! ./modules/import */ "./content/addon-page/modules/import.js"));

var _contact = _interopRequireDefault(__webpack_require__(/*! ./modules/contact */ "./content/addon-page/modules/contact.js"));

var _historyPagination = _interopRequireDefault(__webpack_require__(/*! ./modules/history-pagination */ "./content/addon-page/modules/history-pagination.js"));

var _nav = _interopRequireDefault(__webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _store.default.get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history.default)();
      (0, _settings.default)();
      (0, _logs.default)();
      (0, _syncing.default)();
      (0, _import.default)();
      (0, _contact.default)();
      (0, _historyPagination.default)();
      this.initMainNav();
    }
  },
  initMainNav: function initMainNav() {
    var tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }

    new _nav.default(window.document.getElementById('mainnav'));
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

var _utils = _interopRequireWildcard(__webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js"));

var _nav = _interopRequireDefault(__webpack_require__(/*! ./modules/nav */ "./content/addon-page/modules/nav.js"));

var _toggler = _interopRequireDefault(__webpack_require__(/*! ./modules/toggler */ "./content/addon-page/modules/toggler.js"));

__webpack_require__(/*! ./port */ "./content/addon-page/port.js");

__webpack_require__(/*! ./_store */ "./content/addon-page/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/addon-page/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils._L10N)();
/* auto-insert current version number */

document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */

var subnavs = document.getElementsByClassName('subnav');
var n = subnavs.length;

while (n--) {
  new _nav.default(subnavs[n]);
}
/* end: configure navs */

/* configure toggle elements */


var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
  new _toggler.default(toggleButtons[t]);
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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      _store.default.get('logs').then(function (logs) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

var _toggler = _interopRequireDefault(__webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
    goto: function goto(e, el) {
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

      _store.default.get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store.default.get('history').then(function (history) {
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
}

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
exports.default = void 0;
var _default = {
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
exports.default = _default;

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

var _toggler = _interopRequireDefault(__webpack_require__(/*! ./toggler */ "./content/addon-page/modules/toggler.js"));

var _historySort = _interopRequireDefault(__webpack_require__(/*! ./history-sort */ "./content/addon-page/modules/history-sort.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
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
          '#search-entries': 'search'
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
      return _store.default.get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        if (type === 'json') _this.export(names);else _this.download(names, type, spec);
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

    _store.default.get('history').then(function (history) {
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
        searched = !!this.searchTerm,
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
    return _store.default.get('settings').then(function (settings) {
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
    return _store.default.get('history').then(function (history) {
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
    return _store.default.get('history').then(function (history) {
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
    return _store.default.get('history').then(function (history) {
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
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term).renderEntries();
    countSelect.classList[classMeth]('u-display--none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_ref, "setupSearch", function setupSearch(term) {
    term = typeof term === 'string' ? term : this.searchTerm;
    var history = this.el;
    var searchCount = document.getElementById('search-count');
    this.searched = [];
    this.searchTerm = term;

    if (!term) {
      history.classList.remove('searched');
      searchCount.innerText = '';
      return this;
    } else {
      history.classList.add('searched');
    }

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

    searchCount.innerText = this.searched.length || '';
    return this;
  }), _defineProperty(_ref, "toggleSearch", function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries').value = '';
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
    this.names = _historySort.default.by[sorted[0]][sorted[1]](this.origEntries);
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

    _store.default.get().then(function (storage) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
    import: function _import(storeString, type) {
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
          mod.import(e.target.result, type);
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

      _store.default.get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store.default.get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

var _logKeys = _interopRequireDefault(__webpack_require__(/*! ../../../data/log-keys */ "./data/log-keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      _store.default.get('logs').then(function (logs) {
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
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys.default.getKeyByValue(log[1])); //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}

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
}

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
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _store.default.get('markers').then(function (markers) {
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

exports.default = _MARKER;

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

function _default(el) {
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

var _marker = _interopRequireDefault(__webpack_require__(/*! ./marker */ "./content/addon-page/modules/marker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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

      _store.default.get('settings').then(function (settings) {
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
      this.marker = new _marker.default(key, customBgColor);
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
}

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
exports.default = _default;

var _utils = __webpack_require__(/*! ./../../_shared/utils */ "./content/_shared/utils.js");

var _store = _interopRequireDefault(__webpack_require__(/*! ./../_store */ "./content/addon-page/_store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
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
      document.getElementById('sync-switch--settings').classList.toggle('active', _store.default.area_settings === 'sync');
      document.getElementById('sync-switch--history').classList.toggle('active', _store.default.area_history === 'sync');
      document.getElementById('sync-switch--pagenotes').classList.toggle('active', _store.default.area_pagenotes === 'sync');
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
}

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
exports.default = void 0;

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

exports.default = _TOGGLER;

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
exports.default = void 0;

var _utils = __webpack_require__(/*! ./../_shared/utils */ "./content/_shared/utils.js");

var _default = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'change:autonote-setting', 'change:mark-method-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:immut-setting', 'change:dropLosses-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'change:hash-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'switch:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'toggle:tbbpower-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'rename:entry', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
  }
});

exports.default = _default;

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
exports.default = void 0;
var _default = {
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
      console.log(subMap, type, [e.target.nodeName]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIl9NT0RVTEUiLCJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsInBhZ2Vub3RlcyIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwiZm9yRWFjaCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImUiLCJlbnRyaWVzIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsImxvZ3MiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImRvd25sb2FkIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiYWxsb3dlZEhhc2hlcyIsImJvb3RzdHJhcHBlZCIsImF1dG9pbml0IiwiX1NUT1JFIiwic3RhcnQiLCJpbml0TWFpbk5hdiIsInRhYiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiX05BViIsImlubmVyVGV4dCIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJzdWJuYXZzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm4iLCJsZW5ndGgiLCJ0b2dnbGVCdXR0b25zIiwidCIsIl9UT0dHTEVSIiwic2V0QWRkb25MaW5rcyIsInNldExvZ0xpbmsiLCJhZGRvblVSTCIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWRkb25MaW5rcyIsImEiLCJhTCIsImhyZWYiLCJpZCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiX0RPTU1PRFVMRSIsImVsIiwiRE9NIiwiY2xpY2siLCJudW1iZXJQYWdlcyIsIm51bWJlckVudHJpZXMiLCJjdXJyZW50UGFnZSIsInBlclBhZ2UiLCJ1cGRhdGVGcm9tU3RvcmFnZSIsImdvdG8iLCJuZXdQYWdlIiwiZ2V0QXR0cmlidXRlIiwiZW1pdCIsInJlbmRlciIsInByZXYiLCJuZXh0IiwidXBkYXRlIiwicmVtb3ZlIiwicHAiLCJPYmplY3QiLCJrZXlzIiwic2lsZW50IiwiTWF0aCIsImNlaWwiLCJyZXNldCIsInVsIiwiQXJyYXkiLCJmcm9tIiwibGkiLCJwIiwicGFnZXMiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJtYXgiLCJtaW4iLCJqIiwiYXBwZW5kQnV0dG9uIiwiaW5zZXJ0QmVmb3JlIiwiYiIsImJ0biIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwiYnkiLCJkYXRlIiwiY3JlYXRlZCIsIm9iamVjdCIsIl9zb3J0IiwibGFzdCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsIm5hbWVzIiwiZW50cnlUbXBsIiwiZW50cmllc0NvbnRhaW5lciIsInBhZ2UiLCJzb3J0ZWQiLCJ2aWV3TW9kZSIsInNlYXJjaFRlcm0iLCJzZWFyY2hlZCIsInRhZ3MiLCJmaWx0ZXJlZCIsImZpbHRlck9wdGlvbnNTZXQiLCJpbml0IiwicmVzdW1lIiwibXNnIiwibG9ja2VkIiwiY29uZmlybWVkIiwiY29uZmlybSIsInR5cGUiLCJzcGVjIiwidW5kZWZpbmVkIiwiZXhwb3J0IiwiZ2V0RGF0YSIsInRleHQiLCJkYXRhIiwibGluayIsImpvaW4iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJiYWNrdXAiLCJwb3AiLCJKU09OIiwic3RyaW5naWZ5IiwidG9Mb2NhbGVTdHJpbmciLCJyZXBsYWNlIiwiY29udGFpbnMiLCJnZXRVUkxzIiwidXJscyIsIm5ld05hbWUiLCJwcm9tcHQiLCJvbGROYW1lIiwiYXJlYSIsInBhcmVudE5vZGUiLCJ0YWciLCJmb3JjZSIsIm8iLCJvcmlnRW50cmllcyIsInN5bmNlZCIsInB1c2giLCJjaGVja2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGlvbiIsInZhbHVlIiwidmFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwiYnV0dG9ucyIsImVkaXQiLCJ2aWV3IiwiaW1tdXQiLCJpbW11dEVsIiwibG9ja2VkRWwiLCJ0YWdFbCIsImZpbHRlciIsImNsb25lTm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJtYXJrIiwibG9zdCIsIm0iLCJ0aXRsZSIsInRyaW0iLCJnZXRUZXh0IiwicSIsInRlcm0iLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50IiwidGFibGUiLCJzZXRWaWV3IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsImltcG9ydCIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJlcnJvck5vdGUiLCJ0bXVpcG9zIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0b2dnbGVTd2l0Y2giLCJ1bmRvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUYXJnZXQiLCJ0YXJnZXRzIiwiZGF0YVRvZ2dsZSIsInJvbGVzIiwicm9sZSIsIl9QT1JUIiwiT05FT0ZGIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwiX0NPUFkiLCJzcmMiLCJpc0FycmF5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwic3ViTWFwIiwiY29uc29sZSIsInNlbGVjdG9yIiwiX3NlbCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwic3Vic3RyIiwiaGFuZGxlciIsImRvbUV2ZW50cyIsInByb3h5IiwiZ2VuZXJhbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3BsaWNlIiwiX2V4dHJhIiwic2V0IiwiX0VSUk9SVFJBQ0tFUiIsImVycm9yIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsIl9HRVRfQUNUSVZFX1RBQiIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJhY3RpdmUiLCJfSEFTSExFU1MiLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwidGV4dENvbnRlbnQiLCJsMTBuQXR0ciIsImF0dHIiLCJjYXB0dXJlIiwicGFzc2l2ZSIsIm9uY2UiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjYXRjaCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsImVudkV2ZW50cyIsIm9uIiwiX01FRElBVE9SIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztB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OztBQUNSLFVBQU1kLE9BQU8sS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYWpqQixRQUFRb0QsT0FBUixDQUFnQjJnQixPQUFoQixDQUF3QjtBQUFFNWIsY0FBTSxLQUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0E4YSxXQUFLZ0IsWUFBTCxDQUFrQmQsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JpQixFLEVBQUk7QUFBQTs7QUFDekJsa0IsY0FBUW9ELE9BQVIsQ0FBZ0IrZ0IsU0FBaEIsQ0FBMEJoQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q0YsYUFBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUt4RCxLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLeUQsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDYyxFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCM2tCLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3RvcmFnZS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnI3NlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgbmFtZXMgPSBzZWFyY2hlZCA/IHRoaXMuc2VhcmNoZWQgOiB0aGlzLm5hbWVzLFxyXG4gICAgICAgICAgbCA9IHNlYXJjaGVkID8gbmFtZXMubGVuZ3RoIDogdGhpcy5wYWdlICogdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgaSA9IHNlYXJjaGVkID8gMCA6IGwgLSB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBjbG9uZSwgZW50cnksIG5hbWUsIG5hbWVGaWVsZCwgaW5wdXQsIGxhYmVsLCBpbmZvQnV0dG9uLCBkZXRhaWxzLFxyXG4gICAgICAgICAgYnV0dG9ucywgZWRpdCwgdmlldywgdGFncywgaW1tdXQsIGltbXV0RWwsIGxvY2tlZCwgbG9ja2VkRWwsIHRhZ0VsLCBiLCBqO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsdGVyZWQpIHtcclxuICAgICAgICBuYW1lcyA9IG5hbWVzLmZpbHRlcihuID0+ICEhZW50cmllc1tuXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGwgPSBNYXRoLm1pbihsLCBuYW1lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWwpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAoKGksIGopID0+IHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBudWxsO1xyXG4gICAgICAgICAgICBsb2NrZWQgPSBlbnRyeS5sb2NrZWQ7XHJcbiAgICAgICAgICAgIGltbXV0ID0gZW50cnkuaW1tdXQ7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgICAgICBjbG9uZS5pZCA9ICdlbnRyeS0nICsgajtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgbGFiZWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcclxuICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoLCBpID0gMCwgbmFtZTtcclxuXHJcbiAgICAgIGZvcig7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGVybSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZWFyY2goZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0pIHRoaXMuc2VhcmNoKG51bGwsIHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBwID0gdGhpcy5wZXJQYWdlID0gZWwudmFsdWUgKiAxO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLCBwKTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlldyhlLCBlbCkge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAodmFsID09PSAnbGlzdCcpIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgZWxzZSB0YWJsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnZpZXctc2V0dGluZycsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBWaWV3KHZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC12aWV3JykudmFsdWUgPSB2aWV3O1xyXG4gICAgICB0aGlzLnNldFZpZXcobnVsbCwgeyB2YWx1ZTogdmlldyB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsdWUgPT09ICd0YWcnKSBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5mb2N1cygpLCAwKTtcclxuICAgIH0sXHJcbiAgICBzb3J0KGUsIGVsKSB7XHJcbiAgICAgIGxldCBzb3J0ZWQgPSB0aGlzLnNvcnRlZCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzb3J0LXNldHRpbmcnLCBzb3J0ZWQpO1xyXG4gICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNvcnQoc29ydGVkKSB7XHJcbiAgICAgIHNvcnRlZCA9IHNvcnRlZC5zcGxpdCgnLScpO1xyXG4gICAgICB0aGlzLm5hbWVzID0gX1NPUlQuYnlbc29ydGVkWzBdXVtzb3J0ZWRbMV1dKHRoaXMub3JpZ0VudHJpZXMpO1xyXG4gICAgICB0aGlzLnNvcnRTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcihlLCBlbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbC5ub2RlTmFtZSA9PT0gJ1NQQU4nID8gZWwuZmlyc3RDaGlsZC5kYXRhIDogZWwudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSB7fTtcclxuICAgICAgbGV0IGVudHJ5LCByeCwgYyA9IDA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIHJ4ID0gbmV3IFJlZ0V4cCgnXicrZmlsdGVyKyckfF4nK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnJCcsICdnJyk7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgJiYgZW50cnkudGFnICYmIGVudHJ5LnRhZy5zZWFyY2gocngpICE9PSAtMSkgfHwgKCFlbnRyeS50YWcgJiYgZmlsdGVyID09ICcnKSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICBjKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGZpbHRlcmVkRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCBjKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIHRoaXMubmFtZXMubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBzb3J0U2VhcmNoUmVzdWx0cygpIHtcclxuICAgICAgaWYgKCF0aGlzLnNlYXJjaGVkLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGEgPSBuYW1lcy5pbmRleE9mKGEpO1xyXG4gICAgICAgIGIgPSBuYW1lcy5pbmRleE9mKGIpO1xyXG4gICAgICAgIGlmIChhID09IGIpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2ttYXJrQWxsKGUsIGVsKSB7XHJcbiAgICAgIGxldCBkaXJlY3RseSA9IHR5cGVvZiBlbCA9PT0gJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgY2hlY2tlZCA9IGRpcmVjdGx5ID8gZWwgOiBlbC5jaGVja2VkLFxyXG4gICAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAgIGkgPSBpbnB1dHMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkgaW5wdXRzW2ldLmNoZWNrZWQgPSBjaGVja2VkO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGxldCBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksXHJcbiAgICAgICAgICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lID8gW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB1bmRvU3luY1RvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtLXN5bmNbZGF0YS1uYW1lPVwiJyArIG5hbWUgKyAnXCJdJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgfHwgdGhpcy5zb3J0ZWQsXHJcbiAgICAgICAgICAgIHZpZXcgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkudmlldyB8fCB0aGlzLnZpZXdNb2RlLFxyXG4gICAgICAgICAgICBsO1xyXG4gICAgICAgIHRoaXMuc29ydGVkID0gc29ydGVkO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFZpZXcodmlldyk7XHJcbiAgICAgICAgbCA9IHRoaXMubmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwU2VhcmNoKCkudG9nZ2xlSGVhZGVyRmllbGRzKGwpLnRoZW4oKCkgPT4gdGhpcy5yZW5kZXJFbnRyaWVzKCkuc2V0RmlsdGVyT3B0aW9ucygpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGUocGFnZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeVtkYXRhLW5hbWU9XCInICsgZW50cnkubmFtZSArICdcIl0nKTtcclxuXHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5maXJzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAvL2VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0Lmxlbmd0aDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd0b2dnbGVkOnN5bmMnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICdzeW5jZWQ6ZW50cnknOiAndXBkYXRlRXhwb3J0TGlua3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1idXR0b24nOiAndHJpZ2dlckZpbGVJbnB1dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5pbXBvcnQtZmlsZSc6ICdoYW5kbGVGaWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAnLmV4cG9ydC1idXR0b24nOiAndXBkYXRlRXhwb3J0TmFtZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRXhwb3J0TGlua3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW1wb3J0OiBmdW5jdGlvbihzdG9yZVN0cmluZywgdHlwZSkge1xyXG4gICAgICB2YXIgcGFyc2VkU3RyaW5nO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWRTdHJpbmcgPSBKU09OLnBhcnNlKHN0b3JlU3RyaW5nKTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfcGFyc2UnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJzZWRTdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ltcG9ydDpzdG9yYWdlJywgcGFyc2VkU3RyaW5nLCB0eXBlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlGYWlsdXJlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0cmlnZ2VyRmlsZUlucHV0OiBmdW5jdGlvbihlLCBlbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LS0nICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSkuY2xpY2soKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGaWxlKGUsIGVsKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICAgICAgZmlsZSA9IGVsLmZpbGVzWzBdLFxyXG4gICAgICAgICAgc2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMDAwMDAsXHJcbiAgICAgICAgICB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgIG1vZCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc2l6ZSA+IDUwKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZScpKTtcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnc3luYycgJiYgc2l6ZSA+IDAuMDk5KVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZV9zeW5jJykpO1xyXG5cclxuICAgICAgaWYgKGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpICE9PSAnanNvbicpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9mb3JtYXQnKSk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbW9kLmltcG9ydChlLnRhcmdldC5yZXN1bHQsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pKGZpbGUpO1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheUZhaWx1cmUocmVhc29uKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtZXJyb3InKS5pbm5lclRleHQgPSByZWFzb247XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUV4cG9ydExpbmtzKCkge1xyXG4gICAgICBjb25zdCBsb2NhbERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1sb2NhbCcpO1xyXG4gICAgICBjb25zdCBzeW5jZWREYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtc3luY2VkJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2NhbF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsb2NhbERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnc3luY2VkX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIHN5bmNlZERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUV4cG9ydE5hbWUoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAnVGV4dG1hcmtlci1kYXRhLScgK1xyXG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgKyAnLScgK1xyXG4gICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAnLmpzb24nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnbG9nJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjbGVhci1sb2dzJzogJ2NsZWFyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmxvZygpO1xyXG4gICAgfSxcclxuICAgIGxvZygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbG9ncyA9IGxvZ3MgfHwgW107XHJcbiAgICAgICAgbGV0IHRhYmxlQm9keSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF0sXHJcbiAgICAgICAgICAgIGwgPSBsb2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgdHIsIHRkX2RhdGUsIHRkX21zZywgbm9kZV9kYXRlLCBub2RlX21zZywgbG9nLCB0aW1lLCBtc2csIHJlYXNvbjtcclxuXHJcbiAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9sb2dzJyk7XHJcbiAgICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgICAgbXNnID0gbG9nWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ251bWJlcicpIG1zZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKF9MT0dfS0VZUy5nZXRLZXlCeVZhbHVlKGxvZ1sxXSkpO1xyXG4gICAgICAgICAgICAvLydudScse3llYXI6J251bWVyaWMnLG1vbnRoOicyLWRpZ2l0JyxkYXk6JzItZGlnaXQnLGhvdXI6J251bWVyaWMnLHNlY29uZDonbnVtZXJpYycsbWludXRlOidudW1lcmljJ31cclxuICAgICAgICAgICAgdGltZSA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKChuZXcgRGF0ZShsb2dbMF0pKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICB0ZF9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgdGRfbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgbm9kZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGltZSk7XHJcbiAgICAgICAgICAgIG5vZGVfbXNnID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobXNnKTtcclxuXHJcbiAgICAgICAgICAgIHRkX2RhdGUuYXBwZW5kQ2hpbGQobm9kZV9kYXRlKTtcclxuICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKG5vZGVfbXNnKTtcclxuICAgICAgICAgICAgaWYgKGxvZ1syXSkge1xyXG4gICAgICAgICAgICAgIHJlYXNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgIC8vcmVhc29uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvZ1syXSkpO1xyXG4gICAgICAgICAgICAgIHJlYXNvbi5pbm5lclRleHQgPSBsb2dbMl07XHJcbiAgICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX21zZyk7XHJcbiAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGVCb2R5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vbG9ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXI6bG9ncycpO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSS0VSIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5LCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuXHJcbiAgICB0aGlzLnN0eWxlcyA9IHtcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXN0b21CZ0NvbG9yLFxyXG4gICAgICAnY29sb3InOiB1bmRlZmluZWQsXHJcbiAgICAgICdib3JkZXItYm90dG9tJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zaXplJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1mYW1pbHknOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXdlaWdodCc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc3R5bGUnOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LWRlY29yYXRpb24nOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LXNoYWRvdyc6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNoYWRvdyA9IHtcclxuICAgICAgeDogJzFweCcsXHJcbiAgICAgIHk6ICcxcHgnLFxyXG4gICAgICBibHVyOiAnMXB4JyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuaW5qZWN0KCkucHJldmlldygpKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnbWFya2VycycpLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG1hcmtlcnNbdGhpcy5rZXldO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlID0gbWFya2VyID8gbWFya2VyLnN0eWxlIDogbnVsbDtcclxuXHJcbiAgICAgIHRoaXMuYXV0b25vdGUgPSBtYXJrZXIgJiYgbWFya2VyLmF1dG9ub3RlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFleGlzdGluZ1N0eWxlKSB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdHlsZSA9IGV4aXN0aW5nU3R5bGU7XHJcblxyXG4gICAgICBsZXQgc3R5bGVzID0gdGhpcy5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgaSA9IHN0eWxlcy5sZW5ndGgsXHJcbiAgICAgICAgICBzdHlsZSwgc3R5bGVTcGxpdCwgdGV4dFNoYWRvdztcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBzdHlsZSA9IHN0eWxlc1tpXTtcclxuICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgIHN0eWxlU3BsaXQgPSBzdHlsZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgdGhpcy5zdHlsZXNbc3R5bGVTcGxpdFswXV0gPSBzdHlsZVNwbGl0WzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCh0ZXh0U2hhZG93ID0gdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10pICYmIHRleHRTaGFkb3cgIT09ICdub25lJykge1xyXG4gICAgICAgIGxldCBzaGFkb3dTcGxpdCA9IHRleHRTaGFkb3cuc3BsaXQoJyAnKTtcclxuICAgICAgICB0aGlzLnNoYWRvdy54ID0gc2hhZG93U3BsaXRbMF07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueSA9IHNoYWRvd1NwbGl0WzFdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmJsdXIgPSBzaGFkb3dTcGxpdFsyXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5jb2xvciA9IHNoYWRvd1NwbGl0WzNdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaW5qZWN0KCkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgc3R5bGVzID0gdGhpcy5zdHlsZXMsXHJcbiAgICAgICAgYmdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvcicpLFxyXG4gICAgICAgIGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvcicpLFxyXG4gICAgICAgIGJvcmRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvcicpLFxyXG4gICAgICAgIGF1dG9ub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKSxcclxuICAgICAgICBiZyA9IHN0eWxlc1snYmFja2dyb3VuZC1jb2xvciddLFxyXG4gICAgICAgIGNvbG9yID0gc3R5bGVzWydjb2xvciddLFxyXG4gICAgICAgIGJvcmRlciA9IHN0eWxlc1snYm9yZGVyLWJvdHRvbSddLFxyXG4gICAgICAgIGF1dG9ub3RlQ29sb3IgPSB0aGlzLmF1dG9ub3RlIHx8ICcnLFxyXG4gICAgICAgIHNoYWRvdywgc2hhZG93U2VsZWN0LCBpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID0gdGhpcy5hdXRvbm90ZTtcclxuICAgIGF1dG9ub3RlSW5wdXQudmFsdWUgPSBhdXRvbm90ZUNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgYXV0b25vdGVJbnB1dC5kaXNhYmxlZCA9ICFhdXRvbm90ZUNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYmc7XHJcbiAgICBiZ0lucHV0LnZhbHVlID0gYmcgfHwgJyNmZmZmZmYnO1xyXG4gICAgYmdJbnB1dC5kaXNhYmxlZCA9ICFiZztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhY29sb3I7XHJcbiAgICBjb2xvcklucHV0LnZhbHVlID0gY29sb3IgfHwgJyMwMDAwMDAnO1xyXG4gICAgY29sb3JJbnB1dC5kaXNhYmxlZCA9ICFjb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFib3JkZXI7XHJcbiAgICBib3JkZXJJbnB1dC52YWx1ZSA9IGJvcmRlciB8fCAnMXB4IHNvbGlkICNmZjAwMDAnO1xyXG4gICAgYm9yZGVySW5wdXQuZGlzYWJsZWQgPSAhYm9yZGVyO1xyXG5cclxuICAgIFsnZm9udC1zaXplJywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnQtc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCkudmFsdWUgPSBzdHlsZXNbcHJvcF0gfHwgJ2RlZmF1bHQnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdycpO1xyXG4gICAgc2hhZG93ID0gc3R5bGVzWyd0ZXh0LXNoYWRvdyddO1xyXG4gICAgaSA9ICFzaGFkb3cgPyAwIDogc2hhZG93ID09PSAnbm9uZScgPyAyIDogMTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICBzaGFkb3dTZWxlY3QuY2hpbGRyZW5baV0uY2xpY2soKTtcclxuXHJcbiAgICBbJ3gnLCAneScsICdibHVyJywgJ2NvbG9yJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93LScgKyBwcm9wKS52YWx1ZSA9IG1hcmtlci5zaGFkb3dbcHJvcF0ucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcHJldmlldygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykuc3R5bGUgPSB0aGlzLnN0eWxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoZWwpIHtcclxuICAgIGxldCBjbGFzc2VzID0gZWwuY2xhc3NMaXN0LFxyXG4gICAgICAgIHByb3AgPSBlbC5uYW1lLFxyXG4gICAgICAgIHZhbDtcclxuXHJcbiAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnY3NzLWNvbG9yJykpIHtcclxuICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcclxuICAgICAgICB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gcHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nID8gJzFweCBzb2xpZCAnICsgdmFsIDogdmFsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3cnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWwpIHtcclxuICAgICAgICAgIGNhc2UgJ25vbmUnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gJ25vbmUnOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdW5kZWZpbmVkOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NoYWRvdyc6IG1hcmtlci5zZXRTaGFkb3coKTsgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctdmFsdWUnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy1weC12YWx1ZScpKVxyXG4gICAgICAgICAgdmFsICs9ICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93W3Byb3BdID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhZG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3JkZXItYm90dG9tJykge1xyXG4gICAgICB2YWwgPSAnMXB4IHNvbGlkICcgKyBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdHlsZSgpLnByZXZpZXcoKTtcclxuICB9XHJcbiAgaXNWYWxpZChwcm9wLCB2YWwpIHtcclxuICAgIGxldCB2YWxpZDtcclxuXHJcbiAgICBzd2l0Y2gocHJvcCkge1xyXG4gICAgICBjYXNlICdiYWNrZ3JvdW5kLWNvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnYm9yZGVyLWJvdHRvbSc6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zaXplJzogdmFsaWQgPSAvXlswLTldezEsMn1weCQvLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtZmFtaWx5JzogdmFsaWQgPSAvXlthLXosXFxzLV17NSw0MH0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC13ZWlnaHQnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXN0eWxlJzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1kZWNvcmF0aW9uJzogdmFsaWQgPSAvXlthLXotXXs3LDEyfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LXNoYWRvdyc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICd5JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAnYmx1cic6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuICBzZXRTaGFkb3coKSB7XHJcbiAgICB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHRoaXMuc2hhZG93LnggKyAnICcgKyB0aGlzLnNoYWRvdy55ICsgJyAnICsgdGhpcy5zaGFkb3cuYmx1ciArICcgJyArIHRoaXMuc2hhZG93LmNvbG9yO1xyXG4gIH1cclxuICBzZXRTdHlsZSgpIHtcclxuICAgIGxldCBzdHlsZSA9ICcnLCB2YWw7XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnN0eWxlcykge1xyXG4gICAgICB2YWwgPSB0aGlzLnN0eWxlc1tpXTtcclxuICAgICAgaWYgKHZhbCkgc3R5bGUgKz0gaSArICc6JyArIHZhbCArICc7JztcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsLFxyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnbGknOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgdGhpcy5vcGVuKGN1cnJlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGUoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCB0aGlzLmN1cnJlbnQgPT0gZWwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHRoaXMuY2xvc2UodGhpcy5jdXJyZW50KTtcclxuXHJcbiAgICAgIHRoaXMub3BlbihlbCk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlbCkge1xyXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCdvcGVuZWQ6dGFiJywgdGFyZ2V0SWQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBlbDtcclxuICAgICAgaWYgKHRoaXMucGFnZU5hdikgd2luZG93LmRvY3VtZW50LnRpdGxlID0gJ1RleHRtYXJrZXIgLSAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodGFyZ2V0SWQpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnOiAnc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNzcyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICAgICAnI2N1c3RvbWl6ZWQta2V5JzogJ3VwZGF0ZU1hcmtlcicsXHJcbiAgICAgICAgICAnI2FkZC1rZXknOiAnYWRkTWFya2VyJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWtleSc6ICdyZW1vdmVNYXJrZXInLFxyXG4gICAgICAgICAgJy5tYXJrLW9wdCc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgICAgICcuc2MtY2InOiAndG9nZ2xlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zaG9ydGN1dC1zZWxlY3QnOiAnY2hhbmdlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zYXZlLW9wdCc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgICAgICcubmFtaW5nLW9wdCc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAgICAgJyNub3Rlcy1uZXcnOiAndG9nZ2xlU2F2ZU5vdGVPcHQnLFxyXG4gICAgICAgICAgJy5jdXN0b21pemUtcXVpY2tidXR0b25zJzogJ2NoYW5nZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuZG93bmxvYWQtcXVpY2tidXR0b24tb3B0JzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuY3RtLWNiJzogJ3RvZ2dsZUN0bScsXHJcbiAgICAgICAgICAnLm5vdGVzLWNiJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAgICcubWlzYy1jYic6ICd0b2dnbGVNaXNjJyxcclxuICAgICAgICAgICcudGJicG93ZXItb3B0JzogJ3RvZ2dsZVRCQlBvd2VyT3B0JyxcclxuICAgICAgICAgICcudG11aXBvcyc6ICdjaGFuZ2VUbXVpUG9zaXRpb25PcHQnLFxyXG4gICAgICAgICAgJyNwcml2YXRlLXNhdmUnOiAndG9nZ2xlUHJpdlNhdmUnLFxyXG4gICAgICAgICAgJyNhdXRvLW5vdGUnOiAndG9nZ2xlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpbW11dCc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICAgICAnI2Ryb3AtbG9zc2VzJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAgICAgJyNhdXRvbm90ZS1jb2xvcic6ICdjaGFuZ2VBdXRvTm90ZU9wdCcsXHJcbiAgICAgICAgICAnI2lnbm9yZS1oYXNoJzogJ2NoYW5nZUhhc2hPcHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsbG93ZWRLZXlzOiAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbiBvIHAgcSByIHMgdCB1IHYgeCB5IHogMCAxIDQgNSA2IDcgOCA5IGVudGVyIC0gKycuc3BsaXQoJyAnKSxcclxuICAgIGFsbG93ZWRTaG9ydGN1dHM6IFsnJywgJ2N0cmxLZXknLCAnc2hpZnRLZXknLCAnYWx0S2V5JywgJ2N0cmxLZXktc2hpZnRLZXknLCAnY3RybEtleS1hbHRLZXknLCAnc2hpZnRLZXktYWx0S2V5JywgJ21ldGFLZXknLCAnbWV0YUtleS1zaGlmdEtleScsICdtZXRhS2V5LWFsdEtleSddLFxyXG4gICAgYWxsb3dlZFF1aWNrYnV0dG9uT3B0czogWyd0aXRsZScsICd1cmwnLCAndGV4dCcsICd0ZXh0ICttZXRhJywgJ3RleHQgK25vdGVzJywgJ3RleHQgK2xvc3QnLCAndGV4dCBtJywgJ3RleHQgMicsICd0ZXh0IDMnLCAndGV4dCBjJywgJ3RleHQgbG9zdCddLFxyXG4gICAgbWFya2VyS2V5czogWydtJywgJzInLCAnMyddLFxyXG4gICAgY3VzdG9tTWFya2VyS2V5czogW10sXHJcbiAgICBtYXJrZXI6IG51bGwsXHJcbiAgICBjdXN0b21TZWFyY2g6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXJLZXlzID0gdGhpcy5tYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBpLCBrZXk7XHJcblxyXG4gICAgICAgIGZvciAoa2V5IGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgIGkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmICghbWFya2VyS2V5cy5pbmNsdWRlcyhpKSAmJiAhY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKVxyXG4gICAgICAgICAgICAudXBkYXRlTWFya2VyKHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nKVxyXG4gICAgICAgICAgICAuaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1rZXknKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uJykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMgPSBbXTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVNYXJrZXIoZSwgZWwsIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgbGV0IGtleSA9IGVsID8gZWwudmFsdWUgOiBlID8gZSA6IHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nO1xyXG5cclxuICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgX01BUktFUihrZXksIGN1c3RvbUJnQ29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgbGV0IGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG5cclxuICAgICAgICAgIGFsbG93ZWRLZXlzID0gdGhpcy5hbGxvd2VkS2V5cyxcclxuICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcblxyXG4gICAgICAgICAgYSA9IGFsbG93ZWRLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGMgPSBjdXN0b21NYXJrZXJLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG5cclxuICAgICAgICAgIGZyYWdtZW50MSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50NCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHJcbiAgICAgICAgICBvcHRpb24sIGljb24sIHZhbCwgVmFsO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBjOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBjdXN0b21NYXJrZXJLZXlzW2ldO1xyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIFZhbCA9IFZhbCA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IFZhbDtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuXHJcbiAgICAgICAgZnJhZ21lbnQzLmFwcGVuZENoaWxkKG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnQyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIHZhbDtcclxuICAgICAgICBpY29uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50MSk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGZyYWdtZW50Mik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDMpO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IGE7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGFsbG93ZWRLZXlzW2ldLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKHZhbCkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcblxyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50NC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50NCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBpbmplY3RTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgICBsZXQgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzLFxyXG4gICAgICAgICAgaSwgc2NDaGVja2JveCwgc2NTZWxlY3QsIGNtQ2hlY2tib3gsIHNjO1xyXG5cclxuICAgICAgZm9yIChpIGluIHNob3J0Y3V0cykge1xyXG4gICAgICAgIHNjID0gc2hvcnRjdXRzW2ldO1xyXG4gICAgICAgIHNjQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MtJyArIGkpO1xyXG4gICAgICAgIHNjU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXNlbGVjdC0nICsgaSk7XHJcbiAgICAgICAgY21DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbS0nICsgaSk7XHJcblxyXG4gICAgICAgIGlmIChzY0NoZWNrYm94KSBzY0NoZWNrYm94LmNoZWNrZWQgPSBzY1sxXTtcclxuICAgICAgICBpZiAoc2NTZWxlY3QpIHNjU2VsZWN0LnZhbHVlID0gc2NbMF07XHJcbiAgICAgICAgaWYgKGNtQ2hlY2tib3gpIGNtQ2hlY2tib3guY2hlY2tlZCA9IHNjWzJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MuaGlzdG9yeSxcclxuICAgICAgICAgIHNhdmVPcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NhdmUtb3B0Jyk7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmF1dG9zYXZlKSBzYXZlT3B0c1swXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBzYXZlT3B0c1sxXS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLScgKyBoaXN0b3J5U2V0dGluZ3MubmFtaW5nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaXZhdGUtc2F2ZScpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZUluUHJpdjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltbXV0JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5pbW11dDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtbG9zc2VzJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5kcm9wTG9zc2VzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnbm9yZS1oYXNoJykuY2hlY2tlZCA9ICFoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaDtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQgPT09ICdqc29uJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1qc29uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLXRleHQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtaXNjU2V0dGluZ3MgPSBzZXR0aW5ncy5taXNjO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstbWV0aG9kLS0nICsgbWlzY1NldHRpbmdzLm1hcmttZXRob2QpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuYm1pY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlaWNvbicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVvbmNsaWNrJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3Rlb25jbGljaztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXRyYW5zcCcpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXRyYW5zcDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1wcm9ncmVzc2JhcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucHJvZ3Jlc3NiYXI7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU3R5bGUoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXIudXBkYXRlKGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnN0eWxlLXNldHRpbmcnLCBtYXJrZXIua2V5LCBtYXJrZXIuc3R5bGUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLmNoZWNrZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKS52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID8gZWwudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VIYXNoT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmhhc2gtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJbW11dE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppbW11dC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRHJvcExvc3Nlc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1c3RvbVNlYXJjaChlLCBlbCkge1xyXG4gICAgICB0aGlzLmhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpO1xyXG4gICAgICBjb25zdCBpbnAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0Jyk7XHJcbiAgICAgIGNvbnN0IGlucDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJyk7XHJcbiAgICAgIGNvbnN0IHBhcnQxID0gaW5wMS52YWx1ZTtcclxuICAgICAgY29uc3QgcGFydDIgPSBpbnAyLnZhbHVlO1xyXG4gICAgICBpZiAoIXBhcnQxICYmICFwYXJ0Mikge1xyXG4gICAgICAgIGlucDEudmFsdWUgPSB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgICBpbnAyLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIFtwYXJ0MSwgcGFydDJdKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJhbmRvbUxpZ2h0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKCgwLjggKyBNYXRoLnJhbmRvbSgpICogMC4xNzUpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tc2V0dGluZ3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1oaXN0b3J5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1wYWdlbm90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9wYWdlbm90ZXMgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzeW5jJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG8oZmllbGQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS0nICsgZmllbGQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UT0dHTEVSIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xyXG4gIH1cclxuICB0b2dnbGUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgZGF0YVRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgIHRhcmdldHMgPSBkYXRhVGFyZ2V0ID8gZGF0YVRhcmdldC5zcGxpdCgnICcpIDogbnVsbCxcclxuICAgICAgICBkYXRhVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyksXHJcbiAgICAgICAgcm9sZXMgPSBkYXRhVG9nZ2xlID8gZGF0YVRvZ2dsZS5zcGxpdCgnICcpIDogbnVsbDtcclxuXHJcbiAgICBpZiAocm9sZXMpIHtcclxuICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1tpXSkuY2xhc3NMaXN0W3JvbGVdKCdvcGVuJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzWzBdKS5kaXNhYmxlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge2NvbnNvbGUubG9nKHN1Yk1hcCwgdHlwZSwgW2UudGFyZ2V0Lm5vZGVOYW1lXSk7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==