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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbIl9NT0RVTEUiLCJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemluZyIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsInBhZ2Vub3RlcyIsImZpZWxkIiwiUHJvbWlzZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyIiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwiZm9yRWFjaCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsImUiLCJlbnRyaWVzIiwiX2dldF9zZXR0aW5ncyIsIl9nZXRfbG9ncyIsImxvZ3MiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImRvd25sb2FkIiwiX2dldF9tYXJrZXJzIiwibWFya2VycyIsIl9nZXRfc2hvcnRjdXRzIiwic2hvcnRjdXRzIiwiYWxsb3dlZEhhc2hlcyIsImJvb3RzdHJhcHBlZCIsImF1dG9pbml0IiwiX1NUT1JFIiwic3RhcnQiLCJpbml0TWFpbk5hdiIsInRhYiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0IiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiX05BViIsImlubmVyVGV4dCIsInJ1bnRpbWUiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJzdWJuYXZzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm4iLCJsZW5ndGgiLCJ0b2dnbGVCdXR0b25zIiwidCIsIl9UT0dHTEVSIiwic2V0QWRkb25MaW5rcyIsInNldExvZ0xpbmsiLCJhZGRvblVSTCIsImkxOG4iLCJnZXRNZXNzYWdlIiwiYWRkb25MaW5rcyIsImEiLCJhTCIsImhyZWYiLCJpZCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiX0RPTU1PRFVMRSIsImVsIiwiRE9NIiwiY2xpY2siLCJudW1iZXJQYWdlcyIsIm51bWJlckVudHJpZXMiLCJjdXJyZW50UGFnZSIsInBlclBhZ2UiLCJ1cGRhdGVGcm9tU3RvcmFnZSIsImdvdG8iLCJuZXdQYWdlIiwiZ2V0QXR0cmlidXRlIiwiZW1pdCIsInJlbmRlciIsInByZXYiLCJuZXh0IiwidXBkYXRlIiwicmVtb3ZlIiwicHAiLCJPYmplY3QiLCJrZXlzIiwic2lsZW50IiwiTWF0aCIsImNlaWwiLCJyZXNldCIsInVsIiwiQXJyYXkiLCJmcm9tIiwibGkiLCJwIiwicGFnZXMiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJtYXgiLCJtaW4iLCJqIiwiYXBwZW5kQnV0dG9uIiwiaW5zZXJ0QmVmb3JlIiwiYiIsImJ0biIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiY2hhbmdlQ291bnRQZXJQYWdlIiwiYnkiLCJkYXRlIiwiY3JlYXRlZCIsIm9iamVjdCIsIl9zb3J0IiwibGFzdCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsIm5hbWVzIiwiZW50cnlUbXBsIiwiZW50cmllc0NvbnRhaW5lciIsInBhZ2UiLCJzb3J0ZWQiLCJ2aWV3TW9kZSIsInNlYXJjaFRlcm0iLCJzZWFyY2hlZCIsInRhZ3MiLCJmaWx0ZXJlZCIsImZpbHRlck9wdGlvbnNTZXQiLCJpbml0IiwicmVzdW1lIiwibXNnIiwibG9ja2VkIiwiY29uZmlybWVkIiwiY29uZmlybSIsInR5cGUiLCJzcGVjIiwidW5kZWZpbmVkIiwiZXhwb3J0IiwiZ2V0RGF0YSIsInRleHQiLCJkYXRhIiwibGluayIsImpvaW4iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJiYWNrdXAiLCJwb3AiLCJKU09OIiwic3RyaW5naWZ5IiwidG9Mb2NhbGVTdHJpbmciLCJyZXBsYWNlIiwiY29udGFpbnMiLCJnZXRVUkxzIiwidXJscyIsIm5ld05hbWUiLCJwcm9tcHQiLCJvbGROYW1lIiwiYXJlYSIsInBhcmVudE5vZGUiLCJ0YWciLCJmb3JjZSIsIm8iLCJvcmlnRW50cmllcyIsInN5bmNlZCIsInB1c2giLCJjaGVja2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGlvbiIsInZhbHVlIiwidmFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwiYnV0dG9ucyIsImVkaXQiLCJ2aWV3IiwiaW1tdXQiLCJpbW11dEVsIiwibG9ja2VkRWwiLCJ0YWdFbCIsImZpbHRlciIsImNsb25lTm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJtYXJrIiwibG9zdCIsIm0iLCJ0aXRsZSIsInRyaW0iLCJnZXRUZXh0IiwicSIsInRlcm0iLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50IiwidGFibGUiLCJzZXRWaWV3IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsImltcG9ydCIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJlcnJvck5vdGUiLCJ0bXVpcG9zIiwicHJvZ3Jlc3NiYXIiLCJ0YmJwb3dlciIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0b2dnbGVTd2l0Y2giLCJ1bmRvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFUYXJnZXQiLCJ0YXJnZXRzIiwiZGF0YVRvZ2dsZSIsInJvbGVzIiwicm9sZSIsIl9QT1JUIiwiT05FT0ZGIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwiX0NPUFkiLCJzcmMiLCJpc0FycmF5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiZiIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJzdWJzdHIiLCJoYW5kbGVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJfRVJST1JUUkFDS0VSIiwiZXJyb3IiLCJmaWxlbmFtZSIsIm1lc3NhZ2UiLCJzaGlmdCIsImxpbmVubyIsImNvbG5vIiwiZ2V0VGltZSIsIm9iajEiLCJvYmoyIiwiX0dFVF9BQ1RJVkVfVEFCIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImFjdGl2ZSIsIl9IQVNITEVTUyIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImwxMG5BdHRyIiwiYXR0ciIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNhdGNoIiwiY29udGV4dCIsImZ1bmMiLCJhcmdzMSIsImFyZ3MyIiwiY29uY2F0IiwiZW52RXZlbnRzIiwib24iLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUFLQTtBQUFiLE9BQXhCLENBQXRDO0FBQ0E2YSxXQUFLZ0IsWUFBTCxDQUFrQmQsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JpQixFLEVBQUk7QUFBQTs7QUFDekJqa0IsY0FBUW9ELE9BQVIsQ0FBZ0I4Z0IsU0FBaEIsQ0FBMEJoQixXQUExQixDQUFzQyxnQkFBUTtBQUM1Q0YsYUFBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLE9BQUt4RCxLQUFMLENBQVcsTUFBWCxFQUFpQixPQUFLeUQsV0FBdEIsQ0FBM0I7QUFDQSxTQUFDYyxFQUFELElBQU9BLElBQVA7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFsRndCMWtCLGUiLCJmaWxlIjoiY29udGVudC9hZGRvbi1wYWdlL2FkZG9uLXBhZ2Uud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvYWRkb24tcGFnZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IHsgX0hBU0hMRVNTIH0gZnJvbSAnLi8uLi8uLi91dGlscy9oYXNobGVzcydcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9NT0RVTEUoe1xyXG4gIGV2ZW50czoge1xyXG4gICAgRU5WOiB7XHJcbiAgICAgICd0b2dnbGVkOnN5bmMnOiAnc2V0QXJlYXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgaW5pdGlhbGl6aW5nOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9wYWdlbm90ZXM6ICdzeW5jJyxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gc3RvcmFnZS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgICBbJ3ZlcnNpb24nLCAnbG9ncyddLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlW2ZpZWxkXSA9IGxvY2FsU3RvcmFnZVtmaWVsZF0gfHwgc3luY2VkU3RvcmFnZVtmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKSBsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgPSBzeW5jZWRTdG9yYWdlLnNldHRpbmdzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRfaGlzdG9yeSgpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuaGlzdG9yeSA9IGhpc3Rvcnk7XHJcbiAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfSxcclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIC8vc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnI3NlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgbmFtZXMgPSBzZWFyY2hlZCA/IHRoaXMuc2VhcmNoZWQgOiB0aGlzLm5hbWVzLFxyXG4gICAgICAgICAgbCA9IHNlYXJjaGVkID8gbmFtZXMubGVuZ3RoIDogdGhpcy5wYWdlICogdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgaSA9IHNlYXJjaGVkID8gMCA6IGwgLSB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBjbG9uZSwgZW50cnksIG5hbWUsIG5hbWVGaWVsZCwgaW5wdXQsIGxhYmVsLCBpbmZvQnV0dG9uLCBkZXRhaWxzLFxyXG4gICAgICAgICAgYnV0dG9ucywgZWRpdCwgdmlldywgdGFncywgaW1tdXQsIGltbXV0RWwsIGxvY2tlZCwgbG9ja2VkRWwsIHRhZ0VsLCBiLCBqO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsdGVyZWQpIHtcclxuICAgICAgICBuYW1lcyA9IG5hbWVzLmZpbHRlcihuID0+ICEhZW50cmllc1tuXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGwgPSBNYXRoLm1pbihsLCBuYW1lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWwpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAoKGksIGopID0+IHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBudWxsO1xyXG4gICAgICAgICAgICBsb2NrZWQgPSBlbnRyeS5sb2NrZWQ7XHJcbiAgICAgICAgICAgIGltbXV0ID0gZW50cnkuaW1tdXQ7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgICAgICBjbG9uZS5pZCA9ICdlbnRyeS0nICsgajtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgbGFiZWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcclxuICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoLCBpID0gMCwgbmFtZTtcclxuXHJcbiAgICAgIGZvcig7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGVybSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZWFyY2goZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0pIHRoaXMuc2VhcmNoKG51bGwsIHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBwID0gdGhpcy5wZXJQYWdlID0gZWwudmFsdWUgKiAxO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLCBwKTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlldyhlLCBlbCkge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAodmFsID09PSAnbGlzdCcpIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgZWxzZSB0YWJsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnZpZXctc2V0dGluZycsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBWaWV3KHZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC12aWV3JykudmFsdWUgPSB2aWV3O1xyXG4gICAgICB0aGlzLnNldFZpZXcobnVsbCwgeyB2YWx1ZTogdmlldyB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsdWUgPT09ICd0YWcnKSBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5mb2N1cygpLCAwKTtcclxuICAgIH0sXHJcbiAgICBzb3J0KGUsIGVsKSB7XHJcbiAgICAgIGxldCBzb3J0ZWQgPSB0aGlzLnNvcnRlZCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzb3J0LXNldHRpbmcnLCBzb3J0ZWQpO1xyXG4gICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNvcnQoc29ydGVkKSB7XHJcbiAgICAgIHNvcnRlZCA9IHNvcnRlZC5zcGxpdCgnLScpO1xyXG4gICAgICB0aGlzLm5hbWVzID0gX1NPUlQuYnlbc29ydGVkWzBdXVtzb3J0ZWRbMV1dKHRoaXMub3JpZ0VudHJpZXMpO1xyXG4gICAgICB0aGlzLnNvcnRTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcihlLCBlbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbC5ub2RlTmFtZSA9PT0gJ1NQQU4nID8gZWwuZmlyc3RDaGlsZC5kYXRhIDogZWwudmFsdWU7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSB7fTtcclxuICAgICAgbGV0IGVudHJ5LCByeCwgYyA9IDA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIHJ4ID0gbmV3IFJlZ0V4cCgnXicrZmlsdGVyKyckfF4nK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnXFxcXHN8XFxcXHMnK2ZpbHRlcisnJCcsICdnJyk7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgJiYgZW50cnkudGFnICYmIGVudHJ5LnRhZy5zZWFyY2gocngpICE9PSAtMSkgfHwgKCFlbnRyeS50YWcgJiYgZmlsdGVyID09ICcnKSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRFbnRyaWVzW25hbWVdID0gZW50cnk7XHJcbiAgICAgICAgICBjKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IGZpbHRlcmVkRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCBjKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIHRoaXMubmFtZXMubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBzb3J0U2VhcmNoUmVzdWx0cygpIHtcclxuICAgICAgaWYgKCF0aGlzLnNlYXJjaGVkLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGEgPSBuYW1lcy5pbmRleE9mKGEpO1xyXG4gICAgICAgIGIgPSBuYW1lcy5pbmRleE9mKGIpO1xyXG4gICAgICAgIGlmIChhID09IGIpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2ttYXJrQWxsKGUsIGVsKSB7XHJcbiAgICAgIGxldCBkaXJlY3RseSA9IHR5cGVvZiBlbCA9PT0gJ2Jvb2xlYW4nLFxyXG4gICAgICAgICAgY2hlY2tlZCA9IGRpcmVjdGx5ID8gZWwgOiBlbC5jaGVja2VkLFxyXG4gICAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAgIGkgPSBpbnB1dHMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkgaW5wdXRzW2ldLmNoZWNrZWQgPSBjaGVja2VkO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGxldCBhY3Rpb24gPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aW9uJyksXHJcbiAgICAgICAgICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuXHJcbiAgICAgIG5hbWUgPSBuYW1lID8gW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB1bmRvU3luY1RvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtLXN5bmNbZGF0YS1uYW1lPVwiJyArIG5hbWUgKyAnXCJdJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gc3RvcmFnZS5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHNvcnRlZCA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5zb3J0ZWQgfHwgdGhpcy5zb3J0ZWQsXHJcbiAgICAgICAgICAgIHZpZXcgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkudmlldyB8fCB0aGlzLnZpZXdNb2RlLFxyXG4gICAgICAgICAgICBsO1xyXG4gICAgICAgIHRoaXMuc29ydGVkID0gc29ydGVkO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFZpZXcodmlldyk7XHJcbiAgICAgICAgbCA9IHRoaXMubmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwU2VhcmNoKCkudG9nZ2xlSGVhZGVyRmllbGRzKGwpLnRoZW4oKCkgPT4gdGhpcy5yZW5kZXJFbnRyaWVzKCkuc2V0RmlsdGVyT3B0aW9ucygpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGUocGFnZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFbnRyeShlbnRyeSkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeVtkYXRhLW5hbWU9XCInICsgZW50cnkubmFtZSArICdcIl0nKTtcclxuXHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5maXJzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGFzdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxhc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAvL2VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0Lmxlbmd0aDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICd0b2dnbGVkOnN5bmMnOiAndXBkYXRlRXhwb3J0TGlua3MnLFxyXG4gICAgICAgICdzeW5jZWQ6ZW50cnknOiAndXBkYXRlRXhwb3J0TGlua3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1idXR0b24nOiAndHJpZ2dlckZpbGVJbnB1dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5pbXBvcnQtZmlsZSc6ICdoYW5kbGVGaWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2Vkb3duOiB7XHJcbiAgICAgICAgICAnLmV4cG9ydC1idXR0b24nOiAndXBkYXRlRXhwb3J0TmFtZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRXhwb3J0TGlua3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW1wb3J0OiBmdW5jdGlvbihzdG9yZVN0cmluZywgdHlwZSkge1xyXG4gICAgICB2YXIgcGFyc2VkU3RyaW5nO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBwYXJzZWRTdHJpbmcgPSBKU09OLnBhcnNlKHN0b3JlU3RyaW5nKTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfcGFyc2UnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJzZWRTdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ltcG9ydDpzdG9yYWdlJywgcGFyc2VkU3RyaW5nLCB0eXBlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlGYWlsdXJlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0cmlnZ2VyRmlsZUlucHV0OiBmdW5jdGlvbihlLCBlbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LS0nICsgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSkuY2xpY2soKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGaWxlKGUsIGVsKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICAgICAgZmlsZSA9IGVsLmZpbGVzWzBdLFxyXG4gICAgICAgICAgc2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMDAwMDAsXHJcbiAgICAgICAgICB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgIG1vZCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc2l6ZSA+IDUwKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZScpKTtcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnc3luYycgJiYgc2l6ZSA+IDAuMDk5KVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfc2l6ZV9zeW5jJykpO1xyXG5cclxuICAgICAgaWYgKGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpICE9PSAnanNvbicpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9mb3JtYXQnKSk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgbW9kLmltcG9ydChlLnRhcmdldC5yZXN1bHQsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pKGZpbGUpO1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheUZhaWx1cmUocmVhc29uKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtZXJyb3InKS5pbm5lclRleHQgPSByZWFzb247XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUV4cG9ydExpbmtzKCkge1xyXG4gICAgICBjb25zdCBsb2NhbERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1sb2NhbCcpO1xyXG4gICAgICBjb25zdCBzeW5jZWREYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtc3luY2VkJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2NhbF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsb2NhbERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnc3luY2VkX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIHN5bmNlZERhdGFMaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUV4cG9ydE5hbWUoZSwgZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAnVGV4dG1hcmtlci1kYXRhLScgK1xyXG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgKyAnLScgK1xyXG4gICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAnLmpzb24nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLi8uLi8uLi9kYXRhL2xvZy1rZXlzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnbG9nJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjbGVhci1sb2dzJzogJ2NsZWFyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmxvZygpO1xyXG4gICAgfSxcclxuICAgIGxvZygpIHtcclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbG9ncyA9IGxvZ3MgfHwgW107XHJcbiAgICAgICAgbGV0IHRhYmxlQm9keSA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3Rib2R5JylbMF0sXHJcbiAgICAgICAgICAgIGwgPSBsb2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgdHIsIHRkX2RhdGUsIHRkX21zZywgbm9kZV9kYXRlLCBub2RlX21zZywgbG9nLCB0aW1lLCBtc2csIHJlYXNvbjtcclxuXHJcbiAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9sb2dzJyk7XHJcbiAgICAgICAgICB3aGlsZShsLS0pIHtcclxuICAgICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgICAgbXNnID0gbG9nWzFdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ251bWJlcicpIG1zZyA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKF9MT0dfS0VZUy5nZXRLZXlCeVZhbHVlKGxvZ1sxXSkpO1xyXG4gICAgICAgICAgICAvLydudScse3llYXI6J251bWVyaWMnLG1vbnRoOicyLWRpZ2l0JyxkYXk6JzItZGlnaXQnLGhvdXI6J251bWVyaWMnLHNlY29uZDonbnVtZXJpYycsbWludXRlOidudW1lcmljJ31cclxuICAgICAgICAgICAgdGltZSA9IHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKChuZXcgRGF0ZShsb2dbMF0pKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICB0ZF9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgdGRfbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgbm9kZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGltZSk7XHJcbiAgICAgICAgICAgIG5vZGVfbXNnID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobXNnKTtcclxuXHJcbiAgICAgICAgICAgIHRkX2RhdGUuYXBwZW5kQ2hpbGQobm9kZV9kYXRlKTtcclxuICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKG5vZGVfbXNnKTtcclxuICAgICAgICAgICAgaWYgKGxvZ1syXSkge1xyXG4gICAgICAgICAgICAgIHJlYXNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgIC8vcmVhc29uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvZ1syXSkpO1xyXG4gICAgICAgICAgICAgIHJlYXNvbi5pbm5lclRleHQgPSBsb2dbMl07XHJcbiAgICAgICAgICAgICAgdGRfbXNnLmFwcGVuZENoaWxkKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX21zZyk7XHJcbiAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGVCb2R5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ25vbG9ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXI6bG9ncycpO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSS0VSIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5LCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuXHJcbiAgICB0aGlzLnN0eWxlcyA9IHtcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXN0b21CZ0NvbG9yLFxyXG4gICAgICAnY29sb3InOiB1bmRlZmluZWQsXHJcbiAgICAgICdib3JkZXItYm90dG9tJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zaXplJzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1mYW1pbHknOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXdlaWdodCc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc3R5bGUnOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LWRlY29yYXRpb24nOiB1bmRlZmluZWQsXHJcbiAgICAgICd0ZXh0LXNoYWRvdyc6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNoYWRvdyA9IHtcclxuICAgICAgeDogJzFweCcsXHJcbiAgICAgIHk6ICcxcHgnLFxyXG4gICAgICBibHVyOiAnMXB4JyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuaW5qZWN0KCkucHJldmlldygpKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gX1NUT1JFLmdldCgnbWFya2VycycpLnRoZW4obWFya2VycyA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG1hcmtlcnNbdGhpcy5rZXldO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1N0eWxlID0gbWFya2VyID8gbWFya2VyLnN0eWxlIDogbnVsbDtcclxuXHJcbiAgICAgIHRoaXMuYXV0b25vdGUgPSBtYXJrZXIgJiYgbWFya2VyLmF1dG9ub3RlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKCFleGlzdGluZ1N0eWxlKSB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdHlsZSA9IGV4aXN0aW5nU3R5bGU7XHJcblxyXG4gICAgICBsZXQgc3R5bGVzID0gdGhpcy5zdHlsZS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgaSA9IHN0eWxlcy5sZW5ndGgsXHJcbiAgICAgICAgICBzdHlsZSwgc3R5bGVTcGxpdCwgdGV4dFNoYWRvdztcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBzdHlsZSA9IHN0eWxlc1tpXTtcclxuICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgIHN0eWxlU3BsaXQgPSBzdHlsZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgdGhpcy5zdHlsZXNbc3R5bGVTcGxpdFswXV0gPSBzdHlsZVNwbGl0WzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCh0ZXh0U2hhZG93ID0gdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10pICYmIHRleHRTaGFkb3cgIT09ICdub25lJykge1xyXG4gICAgICAgIGxldCBzaGFkb3dTcGxpdCA9IHRleHRTaGFkb3cuc3BsaXQoJyAnKTtcclxuICAgICAgICB0aGlzLnNoYWRvdy54ID0gc2hhZG93U3BsaXRbMF07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueSA9IHNoYWRvd1NwbGl0WzFdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmJsdXIgPSBzaGFkb3dTcGxpdFsyXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5jb2xvciA9IHNoYWRvd1NwbGl0WzNdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaW5qZWN0KCkge1xyXG4gICAgbGV0IG1hcmtlciA9IHRoaXMsXHJcbiAgICAgICAgc3R5bGVzID0gdGhpcy5zdHlsZXMsXHJcbiAgICAgICAgYmdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvcicpLFxyXG4gICAgICAgIGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvcicpLFxyXG4gICAgICAgIGJvcmRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvcicpLFxyXG4gICAgICAgIGF1dG9ub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKSxcclxuICAgICAgICBiZyA9IHN0eWxlc1snYmFja2dyb3VuZC1jb2xvciddLFxyXG4gICAgICAgIGNvbG9yID0gc3R5bGVzWydjb2xvciddLFxyXG4gICAgICAgIGJvcmRlciA9IHN0eWxlc1snYm9yZGVyLWJvdHRvbSddLFxyXG4gICAgICAgIGF1dG9ub3RlQ29sb3IgPSB0aGlzLmF1dG9ub3RlIHx8ICcnLFxyXG4gICAgICAgIHNoYWRvdywgc2hhZG93U2VsZWN0LCBpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID0gdGhpcy5hdXRvbm90ZTtcclxuICAgIGF1dG9ub3RlSW5wdXQudmFsdWUgPSBhdXRvbm90ZUNvbG9yIHx8ICd5ZWxsb3cnO1xyXG4gICAgYXV0b25vdGVJbnB1dC5kaXNhYmxlZCA9ICFhdXRvbm90ZUNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYmc7XHJcbiAgICBiZ0lucHV0LnZhbHVlID0gYmcgfHwgJyNmZmZmZmYnO1xyXG4gICAgYmdJbnB1dC5kaXNhYmxlZCA9ICFiZztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhY29sb3I7XHJcbiAgICBjb2xvcklucHV0LnZhbHVlID0gY29sb3IgfHwgJyMwMDAwMDAnO1xyXG4gICAgY29sb3JJbnB1dC5kaXNhYmxlZCA9ICFjb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFib3JkZXI7XHJcbiAgICBib3JkZXJJbnB1dC52YWx1ZSA9IGJvcmRlciB8fCAnMXB4IHNvbGlkICNmZjAwMDAnO1xyXG4gICAgYm9yZGVySW5wdXQuZGlzYWJsZWQgPSAhYm9yZGVyO1xyXG5cclxuICAgIFsnZm9udC1zaXplJywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnQtc3R5bGUnLCAndGV4dC1kZWNvcmF0aW9uJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcCkudmFsdWUgPSBzdHlsZXNbcHJvcF0gfHwgJ2RlZmF1bHQnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdycpO1xyXG4gICAgc2hhZG93ID0gc3R5bGVzWyd0ZXh0LXNoYWRvdyddO1xyXG4gICAgaSA9ICFzaGFkb3cgPyAwIDogc2hhZG93ID09PSAnbm9uZScgPyAyIDogMTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICBzaGFkb3dTZWxlY3QuY2hpbGRyZW5baV0uY2xpY2soKTtcclxuXHJcbiAgICBbJ3gnLCAneScsICdibHVyJywgJ2NvbG9yJ10uZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93LScgKyBwcm9wKS52YWx1ZSA9IG1hcmtlci5zaGFkb3dbcHJvcF0ucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcHJldmlldygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykuc3R5bGUgPSB0aGlzLnN0eWxlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICB1cGRhdGUoZWwpIHtcclxuICAgIGxldCBjbGFzc2VzID0gZWwuY2xhc3NMaXN0LFxyXG4gICAgICAgIHByb3AgPSBlbC5uYW1lLFxyXG4gICAgICAgIHZhbDtcclxuXHJcbiAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnY3NzLWNvbG9yJykpIHtcclxuICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcclxuICAgICAgICB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gcHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nID8gJzFweCBzb2xpZCAnICsgdmFsIDogdmFsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3cnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWwpIHtcclxuICAgICAgICAgIGNhc2UgJ25vbmUnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gJ25vbmUnOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdW5kZWZpbmVkOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NoYWRvdyc6IG1hcmtlci5zZXRTaGFkb3coKTsgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctdmFsdWUnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy1weC12YWx1ZScpKVxyXG4gICAgICAgICAgdmFsICs9ICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93W3Byb3BdID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhZG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3JkZXItYm90dG9tJykge1xyXG4gICAgICB2YWwgPSAnMXB4IHNvbGlkICcgKyBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdHlsZSgpLnByZXZpZXcoKTtcclxuICB9XHJcbiAgaXNWYWxpZChwcm9wLCB2YWwpIHtcclxuICAgIGxldCB2YWxpZDtcclxuXHJcbiAgICBzd2l0Y2gocHJvcCkge1xyXG4gICAgICBjYXNlICdiYWNrZ3JvdW5kLWNvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdjb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnYm9yZGVyLWJvdHRvbSc6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zaXplJzogdmFsaWQgPSAvXlswLTldezEsMn1weCQvLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtZmFtaWx5JzogdmFsaWQgPSAvXlthLXosXFxzLV17NSw0MH0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC13ZWlnaHQnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXN0eWxlJzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1kZWNvcmF0aW9uJzogdmFsaWQgPSAvXlthLXotXXs3LDEyfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LXNoYWRvdyc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICd5JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAnYmx1cic6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuICBzZXRTaGFkb3coKSB7XHJcbiAgICB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHRoaXMuc2hhZG93LnggKyAnICcgKyB0aGlzLnNoYWRvdy55ICsgJyAnICsgdGhpcy5zaGFkb3cuYmx1ciArICcgJyArIHRoaXMuc2hhZG93LmNvbG9yO1xyXG4gIH1cclxuICBzZXRTdHlsZSgpIHtcclxuICAgIGxldCBzdHlsZSA9ICcnLCB2YWw7XHJcblxyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnN0eWxlcykge1xyXG4gICAgICB2YWwgPSB0aGlzLnN0eWxlc1tpXTtcclxuICAgICAgaWYgKHZhbCkgc3R5bGUgKz0gaSArICc6JyArIHZhbCArICc7JztcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsLFxyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnbGknOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgdGhpcy5vcGVuKGN1cnJlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGUoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCB0aGlzLmN1cnJlbnQgPT0gZWwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHRoaXMuY2xvc2UodGhpcy5jdXJyZW50KTtcclxuXHJcbiAgICAgIHRoaXMub3BlbihlbCk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlbCkge1xyXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdGhpcy5lbWl0KCdvcGVuZWQ6dGFiJywgdGFyZ2V0SWQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBlbDtcclxuICAgICAgaWYgKHRoaXMucGFnZU5hdikgd2luZG93LmRvY3VtZW50LnRpdGxlID0gJ1RleHRtYXJrZXIgLSAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UodGFyZ2V0SWQpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmN1c3RvbS1zZWFyY2gtc2V0dGluZ3MnOiAnc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jLXNldHRpbmdzJzogJ3VwZGF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNzcyc6ICdjaGFuZ2VTdHlsZScsXHJcbiAgICAgICAgICAnI2N1c3RvbWl6ZWQta2V5JzogJ3VwZGF0ZU1hcmtlcicsXHJcbiAgICAgICAgICAnI2FkZC1rZXknOiAnYWRkTWFya2VyJyxcclxuICAgICAgICAgICcjcmVtb3ZlLWtleSc6ICdyZW1vdmVNYXJrZXInLFxyXG4gICAgICAgICAgJy5tYXJrLW9wdCc6ICdjaGFuZ2VNYXJrTWV0aG9kJyxcclxuICAgICAgICAgICcuc2MtY2InOiAndG9nZ2xlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zaG9ydGN1dC1zZWxlY3QnOiAnY2hhbmdlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zYXZlLW9wdCc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgICAgICcubmFtaW5nLW9wdCc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAgICAgJyNub3Rlcy1uZXcnOiAndG9nZ2xlU2F2ZU5vdGVPcHQnLFxyXG4gICAgICAgICAgJy5jdXN0b21pemUtcXVpY2tidXR0b25zJzogJ2NoYW5nZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuZG93bmxvYWQtcXVpY2tidXR0b24tb3B0JzogJ3N3aXRjaFF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuY3RtLWNiJzogJ3RvZ2dsZUN0bScsXHJcbiAgICAgICAgICAnLm5vdGVzLWNiJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAgICcubWlzYy1jYic6ICd0b2dnbGVNaXNjJyxcclxuICAgICAgICAgICcudGJicG93ZXItb3B0JzogJ3RvZ2dsZVRCQlBvd2VyT3B0JyxcclxuICAgICAgICAgICcudG11aXBvcyc6ICdjaGFuZ2VUbXVpUG9zaXRpb25PcHQnLFxyXG4gICAgICAgICAgJyNwcml2YXRlLXNhdmUnOiAndG9nZ2xlUHJpdlNhdmUnLFxyXG4gICAgICAgICAgJyNhdXRvLW5vdGUnOiAndG9nZ2xlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpbW11dCc6ICd0b2dnbGVJbW11dE9wdCcsXHJcbiAgICAgICAgICAnI2Ryb3AtbG9zc2VzJzogJ3RvZ2dsZURyb3BMb3NzZXNPcHQnLFxyXG4gICAgICAgICAgJyNhdXRvbm90ZS1jb2xvcic6ICdjaGFuZ2VBdXRvTm90ZU9wdCcsXHJcbiAgICAgICAgICAnI2lnbm9yZS1oYXNoJzogJ2NoYW5nZUhhc2hPcHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsbG93ZWRLZXlzOiAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbiBvIHAgcSByIHMgdCB1IHYgeCB5IHogMCAxIDQgNSA2IDcgOCA5IGVudGVyIC0gKycuc3BsaXQoJyAnKSxcclxuICAgIGFsbG93ZWRTaG9ydGN1dHM6IFsnJywgJ2N0cmxLZXknLCAnc2hpZnRLZXknLCAnYWx0S2V5JywgJ2N0cmxLZXktc2hpZnRLZXknLCAnY3RybEtleS1hbHRLZXknLCAnc2hpZnRLZXktYWx0S2V5JywgJ21ldGFLZXknLCAnbWV0YUtleS1zaGlmdEtleScsICdtZXRhS2V5LWFsdEtleSddLFxyXG4gICAgYWxsb3dlZFF1aWNrYnV0dG9uT3B0czogWyd0aXRsZScsICd1cmwnLCAndGV4dCcsICd0ZXh0ICttZXRhJywgJ3RleHQgK25vdGVzJywgJ3RleHQgK2xvc3QnLCAndGV4dCBtJywgJ3RleHQgMicsICd0ZXh0IDMnLCAndGV4dCBjJywgJ3RleHQgbG9zdCddLFxyXG4gICAgbWFya2VyS2V5czogWydtJywgJzInLCAnMyddLFxyXG4gICAgY3VzdG9tTWFya2VyS2V5czogW10sXHJcbiAgICBtYXJrZXI6IG51bGwsXHJcbiAgICBjdXN0b21TZWFyY2g6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXJLZXlzID0gdGhpcy5tYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBpLCBrZXk7XHJcblxyXG4gICAgICAgIGZvciAoa2V5IGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgIGkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmICghbWFya2VyS2V5cy5pbmNsdWRlcyhpKSAmJiAhY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKVxyXG4gICAgICAgICAgICAudXBkYXRlTWFya2VyKHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nKVxyXG4gICAgICAgICAgICAuaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1rZXknKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uJykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMgPSBbXTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVNYXJrZXIoZSwgZWwsIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgbGV0IGtleSA9IGVsID8gZWwudmFsdWUgOiBlID8gZSA6IHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nO1xyXG5cclxuICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgX01BUktFUihrZXksIGN1c3RvbUJnQ29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgbGV0IGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG5cclxuICAgICAgICAgIGFsbG93ZWRLZXlzID0gdGhpcy5hbGxvd2VkS2V5cyxcclxuICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcblxyXG4gICAgICAgICAgYSA9IGFsbG93ZWRLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGMgPSBjdXN0b21NYXJrZXJLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG5cclxuICAgICAgICAgIGZyYWdtZW50MSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50NCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHJcbiAgICAgICAgICBvcHRpb24sIGljb24sIHZhbCwgVmFsO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBjOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBjdXN0b21NYXJrZXJLZXlzW2ldO1xyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIFZhbCA9IFZhbCA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IFZhbDtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuXHJcbiAgICAgICAgZnJhZ21lbnQzLmFwcGVuZENoaWxkKG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnQyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIHZhbDtcclxuICAgICAgICBpY29uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50MSk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGZyYWdtZW50Mik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDMpO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IGE7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGFsbG93ZWRLZXlzW2ldLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKHZhbCkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcblxyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50NC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50NCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBpbmplY3RTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgICBsZXQgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzLFxyXG4gICAgICAgICAgaSwgc2NDaGVja2JveCwgc2NTZWxlY3QsIGNtQ2hlY2tib3gsIHNjO1xyXG5cclxuICAgICAgZm9yIChpIGluIHNob3J0Y3V0cykge1xyXG4gICAgICAgIHNjID0gc2hvcnRjdXRzW2ldO1xyXG4gICAgICAgIHNjQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MtJyArIGkpO1xyXG4gICAgICAgIHNjU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXNlbGVjdC0nICsgaSk7XHJcbiAgICAgICAgY21DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbS0nICsgaSk7XHJcblxyXG4gICAgICAgIGlmIChzY0NoZWNrYm94KSBzY0NoZWNrYm94LmNoZWNrZWQgPSBzY1sxXTtcclxuICAgICAgICBpZiAoc2NTZWxlY3QpIHNjU2VsZWN0LnZhbHVlID0gc2NbMF07XHJcbiAgICAgICAgaWYgKGNtQ2hlY2tib3gpIGNtQ2hlY2tib3guY2hlY2tlZCA9IHNjWzJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MuaGlzdG9yeSxcclxuICAgICAgICAgIHNhdmVPcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NhdmUtb3B0Jyk7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmF1dG9zYXZlKSBzYXZlT3B0c1swXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBzYXZlT3B0c1sxXS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLScgKyBoaXN0b3J5U2V0dGluZ3MubmFtaW5nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaXZhdGUtc2F2ZScpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZUluUHJpdjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltbXV0JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5pbW11dDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtbG9zc2VzJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5kcm9wTG9zc2VzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnbm9yZS1oYXNoJykuY2hlY2tlZCA9ICFoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaDtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQgPT09ICdqc29uJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1qc29uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLXRleHQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtaXNjU2V0dGluZ3MgPSBzZXR0aW5ncy5taXNjO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstbWV0aG9kLS0nICsgbWlzY1NldHRpbmdzLm1hcmttZXRob2QpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuYm1pY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlaWNvbicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVvbmNsaWNrJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3Rlb25jbGljaztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXRyYW5zcCcpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXRyYW5zcDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1wcm9ncmVzc2JhcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucHJvZ3Jlc3NiYXI7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU3R5bGUoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXIudXBkYXRlKGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnN0eWxlLXNldHRpbmcnLCBtYXJrZXIua2V5LCBtYXJrZXIuc3R5bGUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLmNoZWNrZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKS52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID8gZWwudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VIYXNoT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmhhc2gtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJbW11dE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppbW11dC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRHJvcExvc3Nlc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1c3RvbVNlYXJjaChlLCBlbCkge1xyXG4gICAgICB0aGlzLmhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpO1xyXG4gICAgICBjb25zdCBpbnAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0Jyk7XHJcbiAgICAgIGNvbnN0IGlucDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJyk7XHJcbiAgICAgIGNvbnN0IHBhcnQxID0gaW5wMS52YWx1ZTtcclxuICAgICAgY29uc3QgcGFydDIgPSBpbnAyLnZhbHVlO1xyXG4gICAgICBpZiAoIXBhcnQxICYmICFwYXJ0Mikge1xyXG4gICAgICAgIGlucDEudmFsdWUgPSB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgICBpbnAyLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIFtwYXJ0MSwgcGFydDJdKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJhbmRvbUxpZ2h0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKCgwLjggKyBNYXRoLnJhbmRvbSgpICogMC4xNzUpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tc2V0dGluZ3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1oaXN0b3J5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1wYWdlbm90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9wYWdlbm90ZXMgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzeW5jJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG8oZmllbGQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS0nICsgZmllbGQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UT0dHTEVSIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xyXG4gIH1cclxuICB0b2dnbGUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgZGF0YVRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgIHRhcmdldHMgPSBkYXRhVGFyZ2V0ID8gZGF0YVRhcmdldC5zcGxpdCgnICcpIDogbnVsbCxcclxuICAgICAgICBkYXRhVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyksXHJcbiAgICAgICAgcm9sZXMgPSBkYXRhVG9nZ2xlID8gZGF0YVRvZ2dsZS5zcGxpdCgnICcpIDogbnVsbDtcclxuXHJcbiAgICBpZiAocm9sZXMpIHtcclxuICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1tpXSkuY2xhc3NMaXN0W3JvbGVdKCdvcGVuJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzWzBdKS5kaXNhYmxlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsImNvbnN0IF9IQVNITEVTUyA9IGZ1bmN0aW9uKHVybCkge1xyXG4gIGNvbnN0IGggPSB1cmwubGFzdEluZGV4T2YoJyMnKTtcclxuICBpZiAoaCA9PT0gLTEpIHJldHVybiB1cmw7XHJcbiAgZWxzZSByZXR1cm4gdXJsLnN1YnN0cigwLCBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0hBU0hMRVNTIH1cclxuIiwiLypcclxuKiBUcmFuc2xhdGVzIGEgSFRNbCBwYWdlIGluIHRoZSB3ZWIgbDEwbiBzdHlsZSBmcm9tIHRoZSBBZGQtb24gU0RLIHdpdGggV2ViRXh0ZW5zaW9ucyBzdHJpbmdzLlxyXG4qIE1vZGlmaWVkIGJ5IHVuZGVyZmx5aW5nYmlyY2hlc1xyXG4qXHJcbiogQGF1dGhvciBNYXJ0aW4gR2lnZXJcclxuKiBAc2VlIHtAbGluayBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9mcmVha3RlY2huaWsvNGE3MmJjMDcxMWQ5YmM4MmNmM2IwNzViY2MyOTI5NTN9XHJcbiogQGxpY2Vuc2UgTVBMLTIuMFxyXG4qL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVEb2N1bWVudCgpIHtcclxuICBsZXQgZWwsIGRhdGEsIGRhdGFzZXQ7XHJcbiAgLy8gU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUgb2YgdGhlIGRvY3VtZW50LlxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCBicm93c2VyLmkxOG4uZ2V0VUlMYW5ndWFnZSgpLnJlcGxhY2UoJ18nLCAnLScpKTtcclxuICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIG1hcmtlZCBhcyBiZWluZyB0cmFuc2xhdGVhYmxlLlxyXG4gIGNvbnN0IHRleHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWlkXScpO1xyXG4gIGNvbnN0IGF0dHJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1sMTBuLWF0dHJdJyk7XHJcblxyXG4gIGZvcihlbCBvZiB0ZXh0RWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG4gICAgY29uc3QgbDEwbklkID0gZGF0YXNldC5sMTBuSWQ7XHJcblxyXG4gICAgaWYgKGwxMG5JZCkge1xyXG4gICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbklkKTtcclxuXHJcbiAgICAgIGlmKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihlbCBvZiBhdHRyRWxlbWVudHMpIHtcclxuICAgIGRhdGFzZXQgPSBlbC5kYXRhc2V0O1xyXG5cclxuICAgIFsnVGl0bGUnLCAnUGxhY2Vob2xkZXInXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICBjb25zdCBsMTBuQXR0ciA9IGRhdGFzZXRbJ2wxMG4nICsgYXR0cl07XHJcblxyXG4gICAgICBpZiAobDEwbkF0dHIpIHtcclxuICAgICAgICBkYXRhID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobDEwbkF0dHIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLnRvTG93ZXJDYXNlKCksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gdHJhbnNsYXRlRG9jdW1lbnQoKSwge1xyXG4gICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgb25jZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiIsImxldCB0b3BpY3MgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIGlmICghdG9waWNzW2V2ZW50XSkgdG9waWNzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIHRvcGljc1tldmVudF0ucHVzaChoYW5kbGVyKTtcclxuICB9XHJcbiAgZW1pdChldmVudHMsIC4uLmFyZ3MpIHtcclxuICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnICcpO1xyXG5cclxuICAgIGxldCBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGgsIHRvcGljO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHRvcGljID0gdG9waWNzW2V2ZW50c1tpXV07XHJcblxyXG4gICAgICBpZiAodG9waWMpXHJcbiAgICAgICAgdG9waWMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIuYXBwbHkodGhpcywgYXJncykpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcXVlc3QoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldjogZXZlbnQsIGFyZ3M6IGFyZ3MsIHdhaXQ6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuICBwcm94eShjb250ZXh0LCBmdW5jLCAuLi5hcmdzMSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MyKSB7XHJcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MxLmNvbmNhdChhcmdzMikpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IF9NRURJQVRPUiBmcm9tICcuL21lZGlhdG9yJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9NT0RVTEUgZXh0ZW5kcyBfTUVESUFUT1Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKClcclxuXHJcbiAgICBmb3IgKG8gaW4gb2JqKSB0aGlzW29dID0gb2JqW29dO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBlbnZFdmVudHMsIG8sIGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKGV2ZW50cyAmJiAoZW52RXZlbnRzID0gZXZlbnRzLkVOVikpIHtcclxuICAgICAgZm9yIChlIGluIGVudkV2ZW50cykge1xyXG4gICAgICAgIGhhbmRsZXIgPSBlbnZFdmVudHNbZV07XHJcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcl0pXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpc1toYW5kbGVyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAhdGhpcy5hdXRvaW5pdCB8fCB0aGlzLmF1dG9pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfUE9SVCBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLnBvcnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcblxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3ByaXZpbGVnZWQnIHx8IHR5cGUgPT09ICdiYWNrZ3JvdW5kJykgdGhpcy5pbml0UG9ydGluZygpO1xyXG5cclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBvbmVPZmZFdmVudHMsIGNvbm5lY3Rpb25CYXNlZEV2ZW50cztcclxuXHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIG9uZU9mZkV2ZW50cyA9IGV2ZW50cy5PTkVPRkY7XHJcbiAgICAgIGlmIChvbmVPZmZFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG9uZU9mZkV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnNlbmRNZXNzYWdlLCBlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdGlvbkJhc2VkRXZlbnRzID0gZXZlbnRzLkNPTk5FQ1RJT047XHJcbiAgICAgIGlmIChjb25uZWN0aW9uQmFzZWRFdmVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBmIG9mIGNvbm5lY3Rpb25CYXNlZEV2ZW50cylcclxuICAgICAgICAgIHRoaXMub24oZiwgdGhpcy5wcm94eSh0aGlzLCB0aGlzLnBvc3RNZXNzYWdlLCBmKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcGFzc01lc3NhZ2UocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgcmVxLmFyZ3MgPSByZXEuYXJncyB8fCBbXTtcclxuICAgIGxldCBhcmdzID0gW10uY29uY2F0KHJlcS5ldiwgcmVxLmFyZ3MpO1xyXG4gICAgaWYgKCFzZW5kZXIgfHwgIXNlbmRlci5uYW1lKSBhcmdzID0gYXJncy5jb25jYXQoc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKHJlcS53YWl0KSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyB3aWxsIGtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIHRvIHRoZSBvdGhlciBlbmQgdW50aWwgYHNlbmRSZXNwb25zZWAgaXMgY2FsbGVkXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICBsZXQgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdjb250ZW50JykgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB0YWI7XHJcbiAgICAgIGlmIChsYXN0QXJnICE9PSB1bmRlZmluZWQgJiYgKHRhYiA9IGxhc3RBcmcudGFiKSkge1xyXG4gICAgICAgIGlmICh0YWIgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsvKiBjdXJyZW50V2luZG93OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSAqL30pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcG9zdE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgbXNnID0geyBldjogZSwgYXJnczogYXJncyB9O1xyXG4gICAgaWYgKHRoaXMucG9ydCkgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKG1zZyk7XHJcbiAgfVxyXG4gIGluaXRQb3J0aW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLnBvc3Rwb25lQ29ubmVjdGlvbikge1xyXG4gICAgICB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnModGhpcy5wcm94eSh0aGlzLCB0aGlzLmNvbm5lY3QpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29ubmVjdCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnQgPSB0aGlzLnBvcnQgfHwgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiB0aGlzLm5hbWUgfSk7XHJcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB0aGlzLnBvcnQgPSBudWxsKTtcclxuICB9XHJcbiAgYWRkQ29ubmVjdGlvbkxpc3RlbmVycyhjYikge1xyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcclxuICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcbiAgICAgICFjYiB8fCBjYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=