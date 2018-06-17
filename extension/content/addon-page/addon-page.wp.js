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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/addon-page/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/addon-page/js/_store.js":
/*!*****************************************!*\
  !*** ./content/addon-page/js/_store.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  area_settings: 'sync',
  area_history: 'sync',

  setAreas: function setAreas() {
    var _this = this;

    return browser.storage.sync.get().then(function (storage) {
      if (storage && storage.sync) {
        _this.area_settings = storage.sync.settings ? 'sync' : 'local';
        _this.area_history = storage.sync.history ? 'sync' : 'local';
      }
    });
  },
  get: function get() {
    var _this2 = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'storage';

    var meth = this['_get_' + field];
    if (!meth) throw 'field ' + field + ' doesn\'t exist';

    if (!this.initialized) {
      this.initialized = true;
      return this.setAreas().then(function () {
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
        if (!localHistory) return syncedHistory;

        syncedHistory.order = syncedHistory.order.concat(localHistory.order);
        for (var e in localHistory.entries) {
          syncedHistory.entries[e] = localHistory.entries[e];
        }return syncedHistory;
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

/***/ "./content/addon-page/js/bootstrap.js":
/*!********************************************!*\
  !*** ./content/addon-page/js/bootstrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(/*! ./_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _history = __webpack_require__(/*! ./modules/history */ "./content/addon-page/js/modules/history.js");

var _history2 = _interopRequireDefault(_history);

var _settings = __webpack_require__(/*! ./modules/settings */ "./content/addon-page/js/modules/settings.js");

var _settings2 = _interopRequireDefault(_settings);

var _logs = __webpack_require__(/*! ./modules/logs */ "./content/addon-page/js/modules/logs.js");

var _logs2 = _interopRequireDefault(_logs);

var _syncing = __webpack_require__(/*! ./modules/syncing */ "./content/addon-page/js/modules/syncing.js");

var _syncing2 = _interopRequireDefault(_syncing);

var _import = __webpack_require__(/*! ./modules/import */ "./content/addon-page/js/modules/import.js");

var _import2 = _interopRequireDefault(_import);

var _contact = __webpack_require__(/*! ./modules/contact */ "./content/addon-page/js/modules/contact.js");

var _contact2 = _interopRequireDefault(_contact);

var _historyPagination = __webpack_require__(/*! ./modules/history-pagination */ "./content/addon-page/js/modules/history-pagination.js");

var _historyPagination2 = _interopRequireDefault(_historyPagination);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/js/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

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

    _store2.default.get().then(function (storage) {
      if (storage.settings && storage.history) _this.start();
    });
  },
  start: function start() {
    if (!this.bootstrapped) {
      this.bootstrapped = true;
      (0, _history2.default)();
      (0, _settings2.default)();
      (0, _logs2.default)();
      (0, _syncing2.default)();
      (0, _import2.default)();
      (0, _contact2.default)();
      (0, _historyPagination2.default)();
      this.initMainNav();
    }
  },
  initMainNav: function initMainNav() {
    var tab = window.location.hash.split('=')[1];

    if (this.allowedHashes.includes(tab)) {
      window.document.getElementById('mainnav-' + tab).classList.add('active');
    }
    new _nav2.default(window.document.getElementById('mainnav'));
  }
});

/***/ }),

/***/ "./content/addon-page/js/index.js":
/*!****************************************!*\
  !*** ./content/addon-page/js/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/addon-page/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _nav = __webpack_require__(/*! ./modules/nav */ "./content/addon-page/js/modules/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _toggler = __webpack_require__(/*! ./modules/toggler */ "./content/addon-page/js/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

__webpack_require__(/*! ./port */ "./content/addon-page/js/port.js");

__webpack_require__(/*! ./_store */ "./content/addon-page/js/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/addon-page/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils._L10N)();

/* auto-insert current version number */
document.getElementById('version-number').innerText = browser.runtime.getManifest().version;
/* end: auto-insert current version number */

/* configure subnavs */
var subnavs = document.getElementsByClassName('subnav');
var n = subnavs.length;

while (n--) {
    new _nav2.default(subnavs[n]);
} /* end: configure navs */

/* configure toggle elements */
var toggleButtons = document.getElementsByClassName('toggle-button'),
    t = toggleButtons.length;

while (t--) {
    new _toggler2.default(toggleButtons[t]);
} /* end: configure toggle elements */

/***/ }),

/***/ "./content/addon-page/js/modules/contact.js":
/*!**************************************************!*\
  !*** ./content/addon-page/js/modules/contact.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._MODULE({
    events: {
      ENV: {
        'updated:logs': 'setLogLink'
      }
    },
    autoinit: function autoinit() {
      this.setAddonLinks().setDeveloperLinks().setLogLink();
    },
    setAddonLinks: function setAddonLinks() {
      var addonURL = browser.i18n.getMessage('url_moz_addon'),
          addonLinks = document.getElementsByClassName('moz-addon'),
          a = addonLinks.length,
          aL = void 0;

      while (a--) {
        aL = addonLinks[a];
        aL.href = addonURL;
        if (aL.id === 'moz-addon--contact') aL.innerText = addonURL;
      }

      return this;
    },
    setDeveloperLinks: function setDeveloperLinks() {
      var developerURL = browser.i18n.getMessage('url_moz_developer'),
          developerLinks = document.getElementsByClassName('moz-developer'),
          d = developerLinks.length,
          dL = void 0;

      while (d--) {
        dL = developerLinks[d];
        dL.href = developerURL;
        if (dL.id === 'moz-developer--contact') dL.innerText = developerURL;
      }

      return this;
    },
    setLogLink: function setLogLink() {
      var logLink = document.getElementById('log-mail');

      _store2.default.get('logs').then(function (logs) {
        var l = logs ? logs.length : 0,
            href = 'mailto:undflybir@gmx.de?subject=Textmarker' + encodeURIComponent(' : Error Logs') + '&body=' + encodeURIComponent('- ' + browser.i18n.getMessage('your_msg') + ' -\n\n\nLOGS:\n\n'),
            log = void 0;

        while (l--) {
          log = logs[l];
          href += encodeURIComponent(new Date(log[0]).toUTCString() + ' --- ' + log[1] + '\n');
        }
        logLink.href = href;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/history-pagination.js":
/*!*************************************************************!*\
  !*** ./content/addon-page/js/modules/history-pagination.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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

      _store2.default.get('settings').then(function (settings) {
        return _this.perPage = settings.history.pp || 10;
      }).then(function () {
        return _store2.default.get('history').then(function (history) {
          return _this.update(history.order.length);
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
        this.el.classList.add('none');
        return;
      } else {
        this.el.classList.remove('none');
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
      }if (pages > j - 1) this.appendButton(frag, pages);

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

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/js/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/history-sort.js":
/*!*******************************************************!*\
  !*** ./content/addon-page/js/modules/history-sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
          a = new Date(object[a][field]), b = new Date(object[b][field]);
          if (a == b) return 0;
          return a < b ? 1 : -1;
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

/***/ "./content/addon-page/js/modules/history.js":
/*!**************************************************!*\
  !*** ./content/addon-page/js/modules/history.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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
          '.view': 'view',
          '#search-toggle': 'toggleSearch',
          '#remove-filter': 'removeFilter'
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
    }
  }, _defineProperty(_ref, 'delete', function _delete(names) {
    var confirmed = window.confirm(browser.i18n.getMessage('del_confirm'));
    if (confirmed) this.emit('delete:entries', names);
  }), _defineProperty(_ref, 'clean', function clean(names) {
    this.emit('clean:entries', names);
  }), _defineProperty(_ref, 'download', function download(names, type, spec) {
    var _this = this;

    if (typeof type !== 'string') {
      return _store2.default.get('download_option').then(function (settings) {
        settings = settings.split(' ');
        type = settings[0];
        spec = settings.length === 2 ? settings[1] : undefined;
        _this.download(names, type, spec);
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
  }), _defineProperty(_ref, 'export', function _export(names) {
    var backup = { history: { entries: {}, order: [] } },
        entries = backup.history.entries,
        order = backup.history.order,
        link = document.createElement('a');

    _store2.default.get('history').then(function (history) {
      var name = void 0;
      while (names.length) {
        name = names.pop();
        entries[name] = history.entries[name];
        order.push(name);
      }
      backup = encodeURIComponent(JSON.stringify(backup));
      link.setAttribute('download', 'Textmarker-backup-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
      link.href = 'data:text/json;charset=utf-8,' + backup;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }), _defineProperty(_ref, 'sync', function sync(name, el) {
    this.emit('sync:entry', name[0], el.classList.contains('active'));
  }), _defineProperty(_ref, 'visit', function visit(names) {
    var _this2 = this;

    this.getURLs(names).then(function (urls) {
      return _this2.emit('open:entries', urls);
    });
  }), _defineProperty(_ref, 'open', function open(e, el) {
    this.emit('open:entries', el.getAttribute('data-url'));
  }), _defineProperty(_ref, 'view', function view(e, el) {
    this.emit('view:entry', el.getAttribute('data-name'));
  }), _defineProperty(_ref, 'tag', function tag(names, _tag) {
    var _this3 = this;

    var o = { sync: [], local: [] };
    names.forEach(function (name) {
      if (_this3.origEntries[name].synced) o.sync.push(name);else o.local.push(name);
    });
    this.emit('tag:entries', o, _tag);
    this.addFilterOpt(_tag, _tag);
  }), _defineProperty(_ref, 'processSelection', function processSelection() {
    var checked = document.querySelectorAll('.entry-cb:checked'),
        i = checked.length;

    if (!i) return false;

    var action = document.getElementById('action').value,
        names = [];

    while (i--) {
      names.push(checked[i].getAttribute('data-name'));
    }if (action === 'tag') {
      var val = document.getElementById('tag').value;
      this.tag(names, val);
    } else {
      var split = document.getElementById('specification').value.split(' '),
          type = split[0],
          spec = split[1];

      !this[action] || this[action](names, type, spec);
    }
  }), _defineProperty(_ref, 'renderEntries', function renderEntries() {
    var _this4 = this;

    var template = this.entryTmpl,
        container = this.entriesContainer,
        entries = this.entries,
        searched = !!this.searchTerm,
        names = searched ? this.searched : this.names,
        l = searched ? names.length : this.page * this.perPage,
        i = searched ? 0 : l - this.perPage,
        clone = void 0,
        entry = void 0,
        name = void 0,
        nameField = void 0,
        input = void 0,
        label = void 0,
        infoButton = void 0,
        details = void 0,
        buttons = void 0,
        view = void 0,
        tag = void 0,
        tagEl = void 0,
        b = void 0,
        j = void 0;

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
          tag = entry.tag || '';
          clone = template.cloneNode(true);
          container.appendChild(clone);
          clone.id = 'entry-' + j;
          clone.classList.remove('none');
          clone.setAttribute('data-name', name);
          nameField = clone.getElementsByClassName('name')[0];
          input = clone.getElementsByTagName('input')[0];
          label = clone.getElementsByTagName('label')[0];
          details = clone.getElementsByClassName('details')[0];
          buttons = clone.getElementsByClassName('quick-action');
          view = clone.getElementsByClassName('view')[0];
          tagEl = clone.getElementsByClassName('tag')[0];
          b = buttons.length;

          while (b--) {
            buttons[b].setAttribute('data-name', name);
          }
          nameField.innerText = name;
          nameField.setAttribute('data-url', entry.url);
          input.className = 'entry-cb';
          input.id = 'entry-cb-' + j;
          input.setAttribute('data-name', name);
          view.setAttribute('data-name', name);
          label.setAttribute('for', 'entry-cb-' + j);

          tagEl.innerText = tag ? tag : browser.i18n.getMessage('detail_notag');

          clone.getElementsByClassName('created')[0].innerText = _this4.optimizeDateString(new Date(entry.first).toLocaleString());
          clone.getElementsByClassName('last')[0].innerText = _this4.optimizeDateString(new Date(entry.last).toLocaleString());
          clone.getElementsByClassName('count')[0].innerText = entry.marks.length;
          //clone.getElementsByClassName('lost')[0].innerText = entry.lost ? entry.lost.length : 0;

          if (entry.synced === undefined || entry.synced) {
            clone.getElementsByClassName('sync-switch')[0].classList.add('active');
          }
        }
      })(i, l - i - 1);
    }
    return this;
  }), _defineProperty(_ref, 'toggleHeaderFields', function toggleHeaderFields(l) {
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

    noEntriesHint.classList[meth_0]('none');
    actions.classList[meth_1]('none');
    search.classList[meth_2]('none');
    sort.classList[meth_2]('none');
    filter.classList[meth_2]('none');
    count.classList[meth_3]('none');
    view.classList[meth_1]('none');
    checkall.classList[meth_2]('none');

    document.getElementById('entries-count').innerText = l;

    return _store2.default.get('settings').then(function (settings) {
      var pp = _this5.perPage = settings.history.pp || 10;
      ppSelect.value = pp;
    });
  }), _defineProperty(_ref, 'setFilterOptions', function setFilterOptions() {
    var _this6 = this;

    if (this.filterOptionsSet) return this;

    var tags = [];
    var entries = this.origEntries;
    var tag = void 0;

    for (var name in entries) {
      tag = entries[name].tag || null;
      if (tag && !tags.includes(tag)) tags.push(tag);
    }
    if (!tags.length && !document.getElementById('filter-opt-notag')) {
      this.addFilterOpt('', browser.i18n.getMessage('detail_notag'), { disabled: true, id: 'filter-opt-notag' });
    } else {
      tags.forEach(function (tag) {
        return _this6.addFilterOpt(tag, tag);
      });
      if (!document.getElementById('filter-opt-tagless')) {
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), { id: 'filter-opt-tagless' });
      }
    }
    this.filterOptionsSet = true;
  }), _defineProperty(_ref, 'addFilterOpt', function addFilterOpt(tag, text, attrs) {
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
        this.addFilterOpt('', browser.i18n.getMessage('t5125'), { id: 'filter-opt-tagless' });
      }
    }
    if (tag) this.tags.push(tag);
  }), _defineProperty(_ref, 'getText', function getText(names, spec) {
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
        entry = void 0,
        marks = void 0,
        mark = void 0,
        lost = void 0,
        name = void 0,
        m = void 0,
        n = void 0,
        j = void 0;

    return _store2.default.get('history').then(function (history) {
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
              text += '  ' + note + ':' + newLine + '  ' + mark.note.replace(/\n/g, '\r\n  ') + newLines;
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
  }), _defineProperty(_ref, 'getData', function getData(names, type, spec) {
    var _this8 = this;

    if (type === 'text') return this.getText(names, spec);

    return _store2.default.get('history').then(function (history) {
      var entries = _this8.origEntries = history.entries,
          l = names.length,
          data = '',
          newLines = '\r\n\r\n',
          i = 0;

      for (; i < l; i++) {
        data += entries[names[i]][type] + newLines;
      }return data;
    });
  }), _defineProperty(_ref, 'getURLs', function getURLs(names) {
    return _store2.default.get('history').then(function (history) {
      var entries = history.entries,
          urls = [],
          l = names.length,
          i = 0;

      for (; i < l; i++) {
        urls.push(entries[names[i]].url);
      }return urls;
    });
  }), _defineProperty(_ref, 'optimizeDateString', function optimizeDateString(date) {
    return date.replace(/^(\d{1})(\D{1})/, function (m, p, q) {
      return '0' + p + q;
    }).replace(/(\D{1})(\d{1}\D{1})/g, function (m, p, q) {
      return p + '0' + q;
    });
  }), _defineProperty(_ref, 'search', function search(e, el) {
    var term = el.value.toLowerCase();
    var countSelect = document.getElementById('count');
    var classMeth = term ? 'add' : 'remove';
    var toggle = document.getElementById('search-toggle');
    this.setupSearch(term).renderEntries();
    countSelect.classList[classMeth]('none');
    toggle.classList[classMeth]('active');
  }), _defineProperty(_ref, 'setupSearch', function setupSearch(term) {
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
        name = void 0;

    for (; i < l; i++) {
      name = names[i];
      if (name.toLowerCase().search(term) !== -1) {
        this.searched.push(name);
      }
    }
    searchCount.innerText = this.searched.length || '';
    return this;
  }), _defineProperty(_ref, 'toggleSearch', function toggleSearch(e, el) {
    if (el.classList.contains('active')) {
      document.getElementById('search-entries').value = '';
      if (this.searchTerm) this.search(null, { value: '' });
    }
  }), _defineProperty(_ref, 'changeCountPerPage', function changeCountPerPage(e, el) {
    var p = this.perPage = el.value * 1;
    this.page = 1;
    this.emit('changed:per-page-count', p);
    this.renderEntries();
  }), _defineProperty(_ref, 'setView', function setView(e, el) {
    var table = document.getElementById('entries');
    var val = el.value;
    if (val === 'list') table.classList.remove('detailed-list');else table.classList.add('detailed-list');
    this.emit('change:view-setting', val);
  }), _defineProperty(_ref, 'setupView', function setupView(view) {
    document.getElementById('set-view').value = view;
    this.setView(null, { value: view });
  }), _defineProperty(_ref, 'onChangeAction', function onChangeAction(e, el) {
    if (el.value === 'tag') setTimeout(function () {
      return document.getElementById('tag').focus();
    }, 0);
  }), _defineProperty(_ref, 'sort', function sort(e, el) {
    var sorted = this.sorted = el.value;
    this.emit('change:sort-setting', sorted);
    this.setupSort(sorted).renderEntries();
  }), _defineProperty(_ref, 'setupSort', function setupSort(sorted) {
    sorted = sorted.split('-');
    this.names = _historySort2.default.by[sorted[0]][sorted[1]](this.origEntries);
    this.sortSearchResults();
    return this;
  }), _defineProperty(_ref, 'filter', function filter(e, el) {
    var filter = el.value;
    var entries = this.origEntries;
    var filteredEntries = {};
    var entry = void 0,
        c = 0;
    el.parentNode.classList.add('active');
    for (var name in entries) {
      entry = entries[name];
      if (entry.tag && entry.tag === filter || !entry.tag && filter == '') {
        filteredEntries[name] = entry;
        c++;
      }
    }
    this.entries = filteredEntries;
    this.filtered = true;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', c);
  }), _defineProperty(_ref, 'removeFilter', function removeFilter(e, el) {
    el.parentNode.classList.remove('active');
    document.getElementById('filter-entries').selectedIndex = 0;
    this.entries = this.origEntries;
    this.filtered = false;
    this.page = 1;
    this.renderEntries();
    this.emit('filtered:history', this.names.length);
  }), _defineProperty(_ref, 'sortSearchResults', function sortSearchResults() {
    if (!this.searched.length) return;
    var names = this.names;
    this.searched.sort(function (a, b) {
      a = names.indexOf(a);
      b = names.indexOf(b);
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });
  }), _defineProperty(_ref, 'checkmarkAll', function checkmarkAll(e, el) {
    var directly = typeof el === 'boolean',
        checked = directly ? el : el.checked,
        inputs = document.getElementById('entries').getElementsByTagName('input'),
        i = inputs.length;

    while (i--) {
      inputs[i].checked = checked;
    }return false;
  }), _defineProperty(_ref, 'delegateButtonAction', function delegateButtonAction(e, el) {
    var action = el.getAttribute('data-action'),
        name = el.getAttribute('data-name');

    name = name ? [name] : undefined;

    !this[action] || this[action](name, el);
  }), _defineProperty(_ref, 'toggleSwitch', function toggleSwitch(e, el) {
    el = el.classList.contains('sync-switch') ? el : el.parentNode;
    el.classList.toggle('active');
    this.delegateButtonAction(e, el);
  }), _defineProperty(_ref, 'undoSyncToggle', function undoSyncToggle(name) {
    document.querySelector('.sync-switch[data-name="' + name + '"]').classList.toggle('active');
  }), _defineProperty(_ref, 'render', function render() {
    var _this9 = this;

    _store2.default.get().then(function (storage) {
      var entries = _this9.entries = _this9.origEntries = storage.history.entries,
          sorted = storage.settings.history.sorted || _this9.sorted,
          view = storage.settings.history.view || _this9.viewMode,
          l = void 0;
      _this9.sorted = sorted;
      _this9.setupSort(sorted);
      _this9.setupView(view);
      l = _this9.names.length;

      _this9.setupSearch().toggleHeaderFields(l).then(function () {
        return _this9.renderEntries().setFilterOptions();
      });
    });
  }), _defineProperty(_ref, 'paginate', function paginate(page) {
    this.page = page;
    this.renderEntries();
  }), _defineProperty(_ref, 'updateEntry', function updateEntry(entry) {
    var el = document.querySelector('.entry[data-name="' + entry.name + '"]');

    el.getElementsByClassName('created')[0].innerText = entry.first;
    el.getElementsByClassName('last')[0].innerText = entry.last;
    el.getElementsByClassName('count')[0].innerText = entry.marks.length;
    //el.getElementsByClassName('lost')[0].innerText = entry.lost.length;
  }), _ref));
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _toggler = __webpack_require__(/*! ./toggler */ "./content/addon-page/js/modules/toggler.js");

var _toggler2 = _interopRequireDefault(_toggler);

var _historySort = __webpack_require__(/*! ./history-sort */ "./content/addon-page/js/modules/history-sort.js");

var _historySort2 = _interopRequireDefault(_historySort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ }),

/***/ "./content/addon-page/js/modules/import.js":
/*!*************************************************!*\
  !*** ./content/addon-page/js/modules/import.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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

      _store2.default.get('local_storage').then(function (storage) {
        localDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
      }).then(function () {
        return _store2.default.get('synced_storage').then(function (storage) {
          syncedDataLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storage));
        });
      });
    },
    updateExportName: function updateExportName(e, el) {
      el.parentNode.setAttribute('download', 'Textmarker-data-' + el.getAttribute('data-type') + '-' + new Date().toLocaleString().replace(/\D/g, '_') + '.json');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/logs.js":
/*!***********************************************!*\
  !*** ./content/addon-page/js/modules/logs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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

      _store2.default.get('logs').then(function (logs) {
        logs = logs || [];
        var logsTable = document.getElementById('logs-table'),
            tableBody = logsTable.getElementsByTagName('tbody')[0],
            noLogs = document.getElementById('no-logs'),
            clearBtn = document.getElementById('clear-logs'),
            l = logs.length,
            frag = document.createDocumentFragment(),
            tr = void 0,
            td_date = void 0,
            td_msg = void 0,
            node_date = void 0,
            node_msg = void 0,
            log = void 0,
            time = void 0,
            msg = void 0;

        if (l) {
          noLogs.classList.add('none');
          logsTable.classList.remove('none');
          clearBtn.classList.remove('none');
          while (l--) {
            log = logs[l];
            msg = log[1];
            if (typeof msg === 'number') msg = browser.i18n.getMessage(_logKeys2.default.getKeyByValue(log[1]));
            //'nu',{year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',second:'numeric',minute:'numeric'}
            time = _this.optimizeDateString(new Date(log[0]).toLocaleString());
            tr = document.createElement('tr');
            td_date = document.createElement('td');
            td_msg = document.createElement('td');
            node_date = document.createTextNode(time);
            node_msg = document.createTextNode(msg);

            td_date.appendChild(node_date);
            td_msg.appendChild(node_msg);
            tr.appendChild(td_date);
            tr.appendChild(td_msg);
            frag.appendChild(tr);
          }
          tableBody.innerText = '';
          tableBody.appendChild(frag);
        } else {
          noLogs.classList.remove('none');
          logsTable.classList.add('none');
          clearBtn.classList.add('none');
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

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _logKeys = __webpack_require__(/*! ./../../../../data/log-keys */ "./data/log-keys.js");

var _logKeys2 = _interopRequireDefault(_logKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/marker.js":
/*!*************************************************!*\
  !*** ./content/addon-page/js/modules/marker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _MARKER = function () {
  function _MARKER(key, customBgColor) {
    var _this = this;

    _classCallCheck(this, _MARKER);

    this.key = key;

    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
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
    key: 'init',
    value: function init() {
      var _this2 = this;

      return _store2.default.get('markers').then(function (markers) {
        var existingStyle = markers[_this2.key];

        if (!existingStyle) _this2.setStyle();else _this2.style = existingStyle;

        var styles = _this2.style.split(';'),
            i = styles.length,
            style = void 0,
            styleSplit = void 0,
            textShadow = void 0;

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
    key: 'inject',
    value: function inject() {
      var marker = this,
          styles = this.styles,
          bg = styles['background-color'],
          bgInput = document.getElementById('bg-color'),
          colorInput = document.getElementById('text-color'),
          color = styles['color'],
          shadow = void 0,
          shadowSelect = void 0,
          i = void 0;

      document.getElementById('bg-color-checkbox').checked = !!bg;
      bgInput.value = bg || '#ffffff';
      bgInput.disabled = !bg;
      document.getElementById('text-color-checkbox').checked = !!color;
      colorInput.value = color || '#000000';
      colorInput.disabled = !color;

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
    key: 'preview',
    value: function preview() {
      document.getElementById('example').style = this.style;

      return this;
    }
  }, {
    key: 'update',
    value: function update(el) {
      var classes = el.classList,
          prop = el.name,
          val = void 0;

      if (classes.contains('css-color')) {
        if (el.checked) {
          val = document.getElementById(el.getAttribute('data-target')).value;

          if (!this.isValid(prop, val)) return false;

          this.styles[prop] = val;
        } else this.styles[prop] = undefined;
      } else if (classes.contains('shadow')) {
        val = el.value;

        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else {
          var marker = this;

          switch (val) {
            case 'none':
              marker.styles['text-shadow'] = 'none';break;
            case 'default':
              marker.styles['text-shadow'] = undefined;break;
            case 'shadow':
              marker.setShadow();break;
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
      } else {
        val = el.value;

        if (val === 'default' || !this.isValid(prop, val)) this.styles[prop] = '';else this.styles[prop] = val;
      }

      return this.setStyle().preview();
    }
  }, {
    key: 'isValid',
    value: function isValid(prop, val) {
      var valid = void 0;

      switch (prop) {
        case 'background-color':
          valid = /^#[0-9A-F]{6}$/i.test(val);break;
        case 'color':
          valid = /^#[0-9A-F]{6}$/i.test(val);break;
        case 'font-size':
          valid = /^[0-9]{1,2}px$/.test(val);break;
        case 'font-family':
          valid = /^[a-z,\s-]{5,40}$/i.test(val);break;
        case 'font-weight':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'font-style':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'text-decoration':
          valid = /^[a-z-]{7,12}$/i.test(val);break;
        case 'text-shadow':
          valid = /^[a-z]{4,7}$/i.test(val);break;
        case 'x':
          valid = /^\d$/;break;
        case 'y':
          valid = /^\d$/;break;
        case 'blur':
          valid = /^\d$/;break;
        default:
          valid = false;
      }

      return valid;
    }
  }, {
    key: 'setShadow',
    value: function setShadow() {
      this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      var style = '',
          val = void 0;

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

/***/ "./content/addon-page/js/modules/nav.js":
/*!**********************************************!*\
  !*** ./content/addon-page/js/modules/nav.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {

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
      document.getElementById(targetId).classList.remove('none');
      this.emit('opened:tab', targetId);
      this.current = el;
      if (this.pageNav) window.document.title = 'Textmarker - ' + browser.i18n.getMessage(targetId);
    },
    close: function close(el) {
      el.classList.remove('active');
      document.getElementById(el.getAttribute('data-target')).classList.add('none');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

/***/ }),

/***/ "./content/addon-page/js/modules/settings.js":
/*!***************************************************!*\
  !*** ./content/addon-page/js/modules/settings.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:saveopt-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'toggled:sync-settings': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tmuipos': 'changeTmuiPositionOpt',
          '#private-save': 'togglePrivSave'
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

      _store2.default.get('settings').then(function (settings) {
        var markers = settings.markers,
            markerKeys = _this.markerKeys,
            customMarkerKeys = _this.customMarkerKeys,
            i = void 0,
            key = void 0;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i)) _this.customMarkerKeys.push(i);
        }

        _this.renderMarkerSelectOptions().updateMarker('m').injectSettings(settings);
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

      this.marker = new _marker2.default(key, customBgColor);

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
          option = void 0,
          icon = void 0,
          val = void 0,
          Val = void 0;

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
          i = void 0,
          scCheckbox = void 0,
          scSelect = void 0,
          cmCheckbox = void 0,
          sc = void 0;

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
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('quickbutton-download-select').value = historySettings.download;

      var miscSettings = settings.misc;

      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-changed').checked = miscSettings.changedNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;
    },
    showCustomSearchSettingSuccess: function showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('none');
    },
    hideCustomSearchSettingSuccess: function hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('none');
    },
    changeStyle: function changeStyle(e, el) {
      var marker = this.marker.update(el);

      this.emit('change:style-setting', marker.key, marker.style);
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
          option = void 0;

      if (!key || this.allowedKeys.indexOf(key) === -1) return false;

      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option); //lieber an richtige stelle im alphabet setzen (alternativ an anfang)
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;

      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;

      this.updateMarker('m');

      this.emit('remove:custom-marker', key);
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
    toggleNotes: function toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    toggleMisc: function toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
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

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _marker = __webpack_require__(/*! ./marker */ "./content/addon-page/js/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/syncing.js":
/*!**************************************************!*\
  !*** ./content/addon-page/js/modules/syncing.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
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
      document.getElementById('sync-switch-settings').classList.toggle('active', _store2.default.area_settings === 'sync');
      document.getElementById('sync-switch-history').classList.toggle('active', _store2.default.area_history === 'sync');
    },
    toggleSwitch: function toggleSwitch(e, el) {
      el = el.classList.contains('sync-switch') ? el : el.parentNode;
      el.classList.toggle('active');
      this.emit('toggle:sync', el.getAttribute('data-type'), el.classList.contains('active'));
    },
    undo: function undo(field) {
      document.getElementById('sync-switch-' + field).classList.toggle('active');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/addon-page/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/addon-page/js/modules/toggler.js":
/*!**************************************************!*\
  !*** ./content/addon-page/js/modules/toggler.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _TOGGLER = function () {
  function _TOGGLER(el) {
    _classCallCheck(this, _TOGGLER);

    this.el = el;
    this.init();
  }

  _createClass(_TOGGLER, [{
    key: 'init',
    value: function init() {
      this.el.addEventListener('click', this.toggle, false);
    }
  }, {
    key: 'toggle',
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
      } else target.disabled = !this.checked;
    }
  }]);

  return _TOGGLER;
}();

exports.default = _TOGGLER;

/***/ }),

/***/ "./content/addon-page/js/port.js":
/*!***************************************!*\
  !*** ./content/addon-page/js/port.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: ['change:style-setting', 'toggle:shortcut-setting', 'change:shortcut-setting', 'toggle:ctm-setting', 'change:saveopt-setting', 'toggle:priv-setting', 'change:namingopt-setting', 'change:sort-setting', 'change:view-setting', 'toggle:noteopt-setting', 'toggle:quickbuttonopt-setting', 'toggle:notification-setting', 'toggle:misc-setting', 'change:misc-setting', 'add:custom-marker', 'remove:custom-marker', 'delete:entries', 'clean:entries', 'open:entries', 'view:entry', 'sync:entry', 'sync:history', 'sync:settings', 'import:storage', 'toggle:sync', 'change:custom-search-setting', 'changed:per-page-count', 'error:browser-console', 'clear:logs', 'tag:entries']
  }
});

/***/ }),

/***/ "./content/addon-page/sass/main.scss":
/*!*******************************************!*\
  !*** ./content/addon-page/sass/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./content/utils.js":
/*!**************************!*\
  !*** ./content/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _l10n = __webpack_require__(/*! ./../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

var _errorTracker2 = _interopRequireDefault(_errorTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports._COPY = _copy._COPY;
exports._GET_ACTIVE_TAB = _getActiveTab._GET_ACTIVE_TAB;
exports._EXTEND = _extend2.default;
exports._MODULE = _module._MODULE;
exports._DOMMODULE = _dommodule._DOMMODULE;
exports._PORT = _port._PORT;
exports._L10N = _l10n2.default;
exports._ERRORTRACKER = _errorTracker2.default;

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
exports.default = {
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _COPY = function _COPY(original, clone) {
  clone = clone || {};

  for (var i in original) {
    if (original.hasOwnProperty(i)) {
      if (_typeof(original[i]) === 'object') {
        clone[i] = Array.isArray(original[i]) ? [] : {};
        _COPY(original[i], clone[i]);
      } else {
        clone[i] = original[i];
      }
    }
  }
  return clone;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _DOMMODULE = exports._DOMMODULE = function (_MODULE2) {
  _inherits(_DOMMODULE, _MODULE2);

  function _DOMMODULE(obj) {
    _classCallCheck(this, _DOMMODULE);

    obj._bound = {};
    obj._extraBound = [];

    var _this = _possibleConstructorReturn(this, (_DOMMODULE.__proto__ || Object.getPrototypeOf(_DOMMODULE)).call(this, obj));

    _this.addListenersManually || _this.addListeners();
    return _this;
  }

  _createClass(_DOMMODULE, [{
    key: 'generalHandler',
    value: function generalHandler(subMap, type, e) {
      var el = e.target,
          selector = void 0,
          _sel = void 0,
          meth = void 0,
          f = void 0,
          isId = void 0,
          isClass = void 0,
          isDoc = void 0;

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
    key: 'addListener',
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
    key: 'addListeners',
    value: function addListeners() {
      var events = this.events,
          domEvents = void 0,
          el = void 0,
          subMap = void 0,
          type = void 0,
          handler = void 0;

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
    key: 'removeListeners',
    value: function removeListeners() {
      var type = void 0,
          _bound = void 0,
          l = void 0;

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
          set = void 0;
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

exports.default = _ERRORTRACKER;

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

exports.default = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }return obj1;
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

  return browser.tabs.query({ currentWindow: true, active: true }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

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

exports.default = function () {
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
  var el = void 0,
      data = void 0,
      dataset = void 0;
  // Set the language attribute of the document.
  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-'));
  // Get all elements that are marked as being translateable.
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
      if (!_iteratorNormalCompletion && _iterator.return) {
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
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var topics = {};

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'on',
    value: function on(event, handler) {
      if (!topics[event]) topics[event] = [];

      topics[event].push(handler);
    }
  }, {
    key: 'emit',
    value: function emit(events) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      events = events.split(' ');

      var i = 0,
          l = events.length,
          topic = void 0;

      for (; i < l; i++) {
        topic = topics[events[i]];

        if (topic) topic.forEach(function (handler) {
          return handler.apply(_this, args);
        });
      }
    }
  }, {
    key: 'request',
    value: function request(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return browser.runtime.sendMessage({ ev: event, args: args, wait: true }).catch(function () {});
    }
  }, {
    key: 'proxy',
    value: function proxy(context, func) {
      for (var _len3 = arguments.length, args1 = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args1[_key3 - 2] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args2[_key4] = arguments[_key4];
        }

        return func.apply(context, args1.concat(args2));
      };
    }
  }]);

  return _class;
}();

exports.default = _class;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MODULE = exports._MODULE = function (_MEDIATOR2) {
  _inherits(_MODULE, _MEDIATOR2);

  function _MODULE(obj) {
    _classCallCheck(this, _MODULE);

    var _this = _possibleConstructorReturn(this, (_MODULE.__proto__ || Object.getPrototypeOf(_MODULE)).call(this));

    for (o in obj) {
      _this[o] = obj[o];
    }var events = _this.events,
        envEvents = void 0,
        o = void 0,
        e = void 0,
        handler = void 0;

    if (events && (envEvents = events.ENV)) {
      for (e in envEvents) {
        handler = envEvents[e];
        if (_this[handler]) _this.on(e, _this.proxy(_this, _this[handler]));
      }
    }
    !_this.autoinit || _this.autoinit();
    return _this;
  }

  return _MODULE;
}(_mediator2.default);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PORT = exports._PORT = function (_MODULE2) {
  _inherits(_PORT, _MODULE2);

  function _PORT(obj) {
    _classCallCheck(this, _PORT);

    var _this = _possibleConstructorReturn(this, (_PORT.__proto__ || Object.getPrototypeOf(_PORT)).call(this, obj));

    _this.port = null;

    var type = _this.type;

    browser.runtime.onMessage.addListener(_this.proxy(_this, _this.passMessage));

    if (type === 'privileged' || type === 'background') _this.initPorting();

    var events = _this.events,
        oneOffEvents = void 0,
        connectionBasedEvents = void 0;

    if (events) {
      oneOffEvents = events.ONEOFF;
      if (oneOffEvents) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = oneOffEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            _this.on(e, _this.proxy(_this, _this.sendMessage, e));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
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

            _this.on(f, _this.proxy(_this, _this.postMessage, f));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
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
    key: 'passMessage',
    value: function passMessage(req, sender, sendResponse) {
      req.args = req.args || [];
      var args = [].concat(req.ev, req.args);
      if (!sender || !sender.name) args = args.concat(sender, sendResponse);
      this.emit.apply(this, args);
      if (req.wait) return true; // this will keep the message channel open to the other end until `sendResponse` is called
      return false;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(e) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var type = this.type;
      var msg = { ev: e, args: args };
      if (type === 'content') browser.runtime.sendMessage(msg).catch(function () {});else if (type === 'background') {
        var lastArg = args[args.length - 1];
        if (lastArg !== undefined && lastArg.tab) {
          browser.tabs.sendMessage(lastArg.tab, msg).catch(function () {});
        } else {
          browser.tabs.query({/* currentWindow: false, active: false */}).then(function (tabs) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tabs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var tab = _step3.value;

                browser.tabs.sendMessage(tab.id, msg).catch(function () {});
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
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
  }, {
    key: 'postMessage',
    value: function postMessage(e) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var msg = { ev: e, args: args };
      if (this.port) this.port.postMessage(msg);
    }
  }, {
    key: 'initPorting',
    value: function initPorting() {
      if (!this.postponeConnection) {
        this.connect();
        this.addConnectionListeners();
      } else {
        this.addConnectionListeners(this.proxy(this, this.connect));
      }
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      var port = this.port = this.port || browser.runtime.connect({ name: this.name });
      port.onDisconnect.addListener(function () {
        return _this2.port = null;
      });
    }
  }, {
    key: 'addConnectionListeners',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2pzL19zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9qcy9tb2R1bGVzL2hpc3RvcnktcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvbW9kdWxlcy9oaXN0b3J5LXNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2pzL21vZHVsZXMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvbW9kdWxlcy9pbXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2pzL21vZHVsZXMvbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2pzL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9qcy9tb2R1bGVzL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9qcy9tb2R1bGVzL3N5bmNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2pzL21vZHVsZXMvdG9nZ2xlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2Uvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsIkVOViIsImluaXRpYWxpemVkIiwiYXJlYV9zZXR0aW5ncyIsImFyZWFfaGlzdG9yeSIsInNldEFyZWFzIiwiYnJvd3NlciIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwidGhlbiIsInNldHRpbmdzIiwiaGlzdG9yeSIsImZpZWxkIiwibWV0aCIsIl9nZXRfc3RvcmFnZSIsImxvY2FsIiwiZm9yRWFjaCIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJfZ2V0X2xvY2FsX3N0b3JhZ2UiLCJfZ2V0X3N5bmNlZF9zdG9yYWdlIiwic3luY2VkSGlzdG9yeSIsImxvY2FsSGlzdG9yeSIsIm9yZGVyIiwiY29uY2F0IiwiZSIsImVudHJpZXMiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9sb2dzIiwibG9ncyIsIl9nZXRfZG93bmxvYWRfb3B0aW9uIiwiZG93bmxvYWQiLCJfZ2V0X21hcmtlcnMiLCJtYXJrZXJzIiwiX2dldF9zaG9ydGN1dHMiLCJzaG9ydGN1dHMiLCJhbGxvd2VkSGFzaGVzIiwiYm9vdHN0cmFwcGVkIiwiYXV0b2luaXQiLCJzdGFydCIsImluaXRNYWluTmF2IiwidGFiIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIiwic3VibmF2cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuIiwibGVuZ3RoIiwidG9nZ2xlQnV0dG9ucyIsInQiLCJzZXRBZGRvbkxpbmtzIiwic2V0RGV2ZWxvcGVyTGlua3MiLCJzZXRMb2dMaW5rIiwiYWRkb25VUkwiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImFkZG9uTGlua3MiLCJhIiwiYUwiLCJocmVmIiwiaWQiLCJkZXZlbG9wZXJVUkwiLCJkZXZlbG9wZXJMaW5rcyIsImQiLCJkTCIsImxvZ0xpbmsiLCJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZWwiLCJET00iLCJjbGljayIsIm51bWJlclBhZ2VzIiwibnVtYmVyRW50cmllcyIsImN1cnJlbnRQYWdlIiwicGVyUGFnZSIsInVwZGF0ZUZyb21TdG9yYWdlIiwiZ290byIsIm5ld1BhZ2UiLCJnZXRBdHRyaWJ1dGUiLCJlbWl0IiwicmVuZGVyIiwicHJldiIsIm5leHQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJwcCIsInNpbGVudCIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJ1bCIsIkFycmF5IiwiZnJvbSIsImxpIiwicCIsInBhZ2VzIiwiciIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsIm1heCIsIm1pbiIsImoiLCJhcHBlbmRCdXR0b24iLCJpbnNlcnRCZWZvcmUiLCJiIiwiYnRuIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGFuZ2VDb3VudFBlclBhZ2UiLCJieSIsImRhdGUiLCJjcmVhdGVkIiwib2JqZWN0IiwiX3NvcnQiLCJsYXN0IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsIm5hbWVzIiwiZW50cnlUbXBsIiwiZW50cmllc0NvbnRhaW5lciIsInBhZ2UiLCJzb3J0ZWQiLCJ2aWV3TW9kZSIsInNlYXJjaFRlcm0iLCJzZWFyY2hlZCIsInRhZ3MiLCJmaWx0ZXJlZCIsImZpbHRlck9wdGlvbnNTZXQiLCJpbml0IiwiY29uZmlybWVkIiwiY29uZmlybSIsInR5cGUiLCJzcGVjIiwidW5kZWZpbmVkIiwiZ2V0RGF0YSIsInRleHQiLCJkYXRhIiwibGluayIsImpvaW4iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJiYWNrdXAiLCJwb3AiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG9jYWxlU3RyaW5nIiwicmVwbGFjZSIsImNvbnRhaW5zIiwiZ2V0VVJMcyIsInVybHMiLCJ0YWciLCJvIiwib3JpZ0VudHJpZXMiLCJzeW5jZWQiLCJhZGRGaWx0ZXJPcHQiLCJjaGVja2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGlvbiIsInZhbHVlIiwidmFsIiwidGVtcGxhdGUiLCJjb250YWluZXIiLCJjbG9uZSIsImVudHJ5IiwibmFtZUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsImluZm9CdXR0b24iLCJkZXRhaWxzIiwiYnV0dG9ucyIsInZpZXciLCJ0YWdFbCIsImZpbHRlciIsImNsb25lTm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiY2xhc3NOYW1lIiwib3B0aW1pemVEYXRlU3RyaW5nIiwiZmlyc3QiLCJtYXJrcyIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwiZGlzYWJsZWQiLCJhdHRycyIsInNlbGVjdCIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibWFyayIsImxvc3QiLCJtIiwidGl0bGUiLCJ0cmltIiwiZ2V0VGV4dCIsInEiLCJ0ZXJtIiwiY291bnRTZWxlY3QiLCJjbGFzc01ldGgiLCJ0b2dnbGUiLCJzZXR1cFNlYXJjaCIsInJlbmRlckVudHJpZXMiLCJzZWFyY2hDb3VudCIsInRhYmxlIiwic2V0VmlldyIsInNldFRpbWVvdXQiLCJmb2N1cyIsInNldHVwU29ydCIsInNvcnRTZWFyY2hSZXN1bHRzIiwiZmlsdGVyZWRFbnRyaWVzIiwiYyIsInBhcmVudE5vZGUiLCJzZWxlY3RlZEluZGV4IiwiaW5kZXhPZiIsImRpcmVjdGx5IiwiaW5wdXRzIiwiZGVsZWdhdGVCdXR0b25BY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwic2V0dXBWaWV3IiwidG9nZ2xlSGVhZGVyRmllbGRzIiwic2V0RmlsdGVyT3B0aW9ucyIsIm1vdXNlZG93biIsInVwZGF0ZUV4cG9ydExpbmtzIiwiaW1wb3J0Iiwic3RvcmVTdHJpbmciLCJwYXJzZWRTdHJpbmciLCJwYXJzZSIsImRpc3BsYXlGYWlsdXJlIiwidHJpZ2dlckZpbGVJbnB1dCIsImhhbmRsZUZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZSIsImZpbGVzIiwic2l6ZSIsIm1vZCIsIm9ubG9hZCIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJyZWFzb24iLCJsb2NhbERhdGFMaW5rIiwic3luY2VkRGF0YUxpbmsiLCJ1cGRhdGVFeHBvcnROYW1lIiwibG9nc1RhYmxlIiwidGFibGVCb2R5Iiwibm9Mb2dzIiwiY2xlYXJCdG4iLCJ0ciIsInRkX2RhdGUiLCJ0ZF9tc2ciLCJub2RlX2RhdGUiLCJub2RlX21zZyIsInRpbWUiLCJtc2ciLCJnZXRLZXlCeVZhbHVlIiwiY2xlYXIiLCJfTUFSS0VSIiwiY3VzdG9tQmdDb2xvciIsInN0eWxlcyIsInNoYWRvdyIsIngiLCJ5IiwiYmx1ciIsImNvbG9yIiwiaW5qZWN0IiwicHJldmlldyIsImV4aXN0aW5nU3R5bGUiLCJzZXRTdHlsZSIsInN0eWxlIiwic3R5bGVTcGxpdCIsInRleHRTaGFkb3ciLCJzaGFkb3dTcGxpdCIsIm1hcmtlciIsImJnIiwiYmdJbnB1dCIsImNvbG9ySW5wdXQiLCJzaGFkb3dTZWxlY3QiLCJwcm9wIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiaXNWYWxpZCIsInNldFNoYWRvdyIsInZhbGlkIiwidGVzdCIsInBhZ2VOYXYiLCJjdXJyZW50IiwiaGFzQXR0cmlidXRlIiwib3BlbiIsImNsb3NlIiwidGFyZ2V0SWQiLCJhbGxvd2VkS2V5cyIsImFsbG93ZWRTaG9ydGN1dHMiLCJhbGxvd2VkUXVpY2tidXR0b25PcHRzIiwibWFya2VyS2V5cyIsImN1c3RvbU1hcmtlcktleXMiLCJjdXN0b21TZWFyY2giLCJyZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zIiwidXBkYXRlTWFya2VyIiwiaW5qZWN0U2V0dGluZ3MiLCJyZXN1bWUiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJrZXlTZWxlY3QiLCJrZXlJY29ucyIsImFkZEtleVNlbGVjdCIsInJlbW92ZUtleVNlbGVjdCIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImZyYWdtZW50MyIsImZyYWdtZW50NCIsIm9wdGlvbiIsImljb24iLCJWYWwiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNjQ2hlY2tib3giLCJzY1NlbGVjdCIsImNtQ2hlY2tib3giLCJzYyIsImhpc3RvcnlTZXR0aW5ncyIsInNhdmVPcHRzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhdXRvc2F2ZSIsIm5hbWluZyIsInNhdmVJblByaXYiLCJzYXZlTm90ZSIsIm1pc2NTZXR0aW5ncyIsIm1pc2MiLCJibWljb24iLCJub3RlaWNvbiIsIm5vdGVvbmNsaWNrIiwiZmFpbHVyZU5vdGUiLCJzdWNjZXNzTm90ZSIsInBibU5vdGUiLCJjaGFuZ2VkTm90ZSIsImVycm9yTm90ZSIsInRtdWlwb3MiLCJzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MiLCJjaGFuZ2VTdHlsZSIsImFkZE1hcmtlciIsImJnQ29sb3IiLCJnZXRSYW5kb21MaWdodENvbG9yIiwic2VsZWN0ZWQiLCJyZW1vdmVNYXJrZXIiLCJ0b2dnbGVTaG9ydGN1dCIsImNoYW5nZVNob3J0Y3V0IiwidG9nZ2xlQ3RtIiwiY2hhbmdlU2F2ZU9wdCIsInRvZ2dsZVByaXZTYXZlIiwiY2hhbmdlTmFtaW5nT3B0IiwidG9nZ2xlU2F2ZU5vdGVPcHQiLCJjaGFuZ2VRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGVzIiwidG9nZ2xlTWlzYyIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0b2dnbGVTd2l0Y2giLCJ1bmRvIiwiX1RPR0dMRVIiLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiT05FT0ZGIiwiX0NPUFkiLCJfR0VUX0FDVElWRV9UQUIiLCJfRVhURU5EIiwiX01PRFVMRSIsIl9ET01NT0RVTEUiLCJfUE9SVCIsIl9MMTBOIiwiX0VSUk9SVFJBQ0tFUiIsIm5vdGVfcGJtIiwibm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlIiwibm90ZV91cmwiLCJlcnJvcl9zYXZlX3N0eWxlIiwiZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjIiwiZXJyb3Jfc2F2ZV9jaGFuZ2Vfc2MiLCJlcnJvcl9zYXZlX2N0bSIsImVycm9yX3NhdmVfYXV0b3NhdmUiLCJlcnJvcl9zYXZlX25hbWluZyIsImVycm9yX3NhdmVfbm90aWZ5IiwiZXJyb3Jfc2F2ZV9kb3dubG9hZCIsImVycm9yX3NhdmVfYm1pY29uIiwiZXJyb3JfY2xlYW5faGlzdG9yeSIsImVycm9yX2FkZF9tYXJrZXIiLCJlcnJvcl9yZW1vdmVfbWFya2VyIiwiZXJyb3Jfc2F2ZV9lbnRyeSIsImVycm9yX3VwZGF0ZV9lbnRyeSIsImVycm9yX2RlbF9lbnRyeSIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2ltcG9ydF9lbXB0eSIsImVycm9yX2ltcG9ydF9oaXN0b3J5IiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzIiwiZXJyb3JfaW1wb3J0X291dGRhdGVkIiwiZXJyb3JfaW1wb3J0X2hpc3Rvcnlfbm90X2ZvdW5kIiwiZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZCIsImVycm9yX25hbWluZyIsImVycm9yX3N0b3JhZ2VfbWlncmF0aW9uIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZSIsImVycm9yX3RvZ2dsZV9zeW5jIiwiZXJyb3Jfc2F2ZV9wcml2Iiwib3JpZ2luYWwiLCJoYXNPd25Qcm9wZXJ0eSIsImlzQXJyYXkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwiZiIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJzdWJzdHIiLCJub2RlTmFtZSIsImhhbmRsZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsIl9leHRyYSIsInNldCIsImVycm9yIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJhY3RpdmUiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwidGV4dENvbnRlbnQiLCJsMTBuQXR0ciIsImF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjYXRjaCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImVudkV2ZW50cyIsIm9uIiwicG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicGFzc01lc3NhZ2UiLCJpbml0UG9ydGluZyIsIm9uZU9mZkV2ZW50cyIsImNvbm5lY3Rpb25CYXNlZEV2ZW50cyIsIkNPTk5FQ1RJT04iLCJwb3N0TWVzc2FnZSIsInJlcSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImxhc3RBcmciLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFLZ0IsWUFBTCxDQUFrQmQsV0FBbEIsQ0FBOEI7QUFBQSxlQUFNLE9BQUtGLElBQUwsR0FBWSxJQUFsQjtBQUFBLE9BQTlCO0FBQ0Q7OzsyQ0FDc0JpQixFLEVBQUk7QUFBQTs7QUFDekI1aEIsY0FBUWdELE9BQVIsQ0FBZ0I2ZSxTQUFoQixDQUEwQmhCLFdBQTFCLENBQXNDLGdCQUFRO0FBQzVDRixhQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsT0FBS2pELEtBQUwsU0FBaUIsT0FBS2tELFdBQXRCLENBQTNCO0FBQ0EsU0FBQ2MsRUFBRCxJQUFPQSxJQUFQO0FBQ0QsT0FIRDtBQUlEIiwiZmlsZSI6ImNvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2FkZG9uLXBhZ2UvanMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ3NldEFyZWFzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gIGFyZWFfc2V0dGluZ3M6ICdzeW5jJyxcclxuICBhcmVhX2hpc3Rvcnk6ICdzeW5jJyxcclxuXHJcbiAgc2V0QXJlYXMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5zeW5jKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhX3NldHRpbmdzID0gc3RvcmFnZS5zeW5jLnNldHRpbmdzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IHN0b3JhZ2Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldEFyZWFzKCkudGhlbigoKSA9PiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfSxcclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2xvY2FsX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpO1xyXG4gIH0sXHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9LFxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgc3luY2VkSGlzdG9yeS5vcmRlciA9IHN5bmNlZEhpc3Rvcnkub3JkZXIuY29uY2F0KGxvY2FsSGlzdG9yeS5vcmRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBsb2NhbEhpc3RvcnkuZW50cmllcykgc3luY2VkSGlzdG9yeS5lbnRyaWVzW2VdID0gbG9jYWxIaXN0b3J5LmVudHJpZXNbZV07XHJcblxyXG4gICAgICAgIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgfSxcclxuICBfZ2V0X2xvZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UgfHwgIWxvY2FsU3RvcmFnZS5sb2dzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubG9ncztcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5cclxuaW1wb3J0IF9ISVNUT1JZIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5J1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncydcclxuaW1wb3J0IF9MT0dHSU5HIGZyb20gJy4vbW9kdWxlcy9sb2dzJ1xyXG5pbXBvcnQgX1NZTkNJTkcgZnJvbSAnLi9tb2R1bGVzL3N5bmNpbmcnXHJcbmltcG9ydCBfSU1QT1JUIGZyb20gJy4vbW9kdWxlcy9pbXBvcnQnXHJcbmltcG9ydCBfQ09OVEFDVCBmcm9tICcuL21vZHVsZXMvY29udGFjdCdcclxuaW1wb3J0IF9QQUdJTkFUT1IgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnktcGFnaW5hdGlvbidcclxuXHJcbmltcG9ydCBfTkFWIGZyb20gJy4vbW9kdWxlcy9uYXYnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3N0YXJ0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWxsb3dlZEhhc2hlczogWyduZXdzJywgJ21hbnVhbCcsICdzZXR0aW5ncycsICdoaXN0b3J5JywgJ2NvbnRhY3QnLCAnc3luYycsICdleHBvcnQnLCAnbG9ncyddLFxyXG4gIGJvb3RzdHJhcHBlZDogZmFsc2UsXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5oaXN0b3J5KSB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKCF0aGlzLmJvb3RzdHJhcHBlZCkge1xyXG4gICAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgIF9ISVNUT1JZKCk7XHJcbiAgICAgIF9TRVRUSU5HUygpO1xyXG4gICAgICBfTE9HR0lORygpO1xyXG4gICAgICBfU1lOQ0lORygpO1xyXG4gICAgICBfSU1QT1JUKCk7XHJcbiAgICAgIF9DT05UQUNUKCk7XHJcbiAgICAgIF9QQUdJTkFUT1IoKTtcclxuICAgICAgdGhpcy5pbml0TWFpbk5hdigpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdE1haW5OYXYoKSB7XHJcbiAgICBjb25zdCB0YWIgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPScpWzFdO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbG93ZWRIYXNoZXMuaW5jbHVkZXModGFiKSkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYtJyArIHRhYikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBuZXcgX05BVih3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuLy4uL3Nhc3MvbWFpbi5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi8uLi91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX05BViBmcm9tICcuL21vZHVsZXMvbmF2J1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZXInXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG5cclxuX0wxME4oKTtcclxuXHJcbi8qIGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnNpb24tbnVtYmVyJykuaW5uZXJUZXh0ID0gYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbjtcclxuLyogZW5kOiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcblxyXG4vKiBjb25maWd1cmUgc3VibmF2cyAqL1xyXG5jb25zdCBzdWJuYXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibmF2Jyk7XHJcbmxldCBuID0gc3VibmF2cy5sZW5ndGg7XHJcblxyXG53aGlsZShuLS0pIG5ldyBfTkFWKHN1Ym5hdnNbbl0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSBuYXZzICovXHJcblxyXG4vKiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbmxldCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9nZ2xlLWJ1dHRvbicpLFxyXG4gICAgdCA9IHRvZ2dsZUJ1dHRvbnMubGVuZ3RoO1xyXG5cclxud2hpbGUodC0tKSBuZXcgX1RPR0dMRVIodG9nZ2xlQnV0dG9uc1t0XSk7XHJcbi8qIGVuZDogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0RGV2ZWxvcGVyTGlua3MoKVxyXG4gICAgICAgICAgLnNldExvZ0xpbmsoKTtcclxuICAgIH0sXHJcbiAgICBzZXRBZGRvbkxpbmtzKCkge1xyXG4gICAgICBsZXQgYWRkb25VUkwgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndXJsX21vel9hZGRvbicpLFxyXG4gICAgICAgICAgYWRkb25MaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vei1hZGRvbicpLFxyXG4gICAgICAgICAgYSA9IGFkZG9uTGlua3MubGVuZ3RoLFxyXG4gICAgICAgICAgYUw7XHJcblxyXG4gICAgICB3aGlsZSAoYS0tKSB7XHJcbiAgICAgICAgYUwgPSBhZGRvbkxpbmtzW2FdO1xyXG4gICAgICAgIGFMLmhyZWYgPSBhZGRvblVSTDtcclxuICAgICAgICBpZiAoYUwuaWQgPT09ICdtb3otYWRkb24tLWNvbnRhY3QnKSBhTC5pbm5lclRleHQgPSBhZGRvblVSTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0RGV2ZWxvcGVyTGlua3MoKSB7XHJcbiAgICAgIGxldCBkZXZlbG9wZXJVUkwgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndXJsX21vel9kZXZlbG9wZXInKSxcclxuICAgICAgICAgIGRldmVsb3BlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWRldmVsb3BlcicpLFxyXG4gICAgICAgICAgZCA9IGRldmVsb3BlckxpbmtzLmxlbmd0aCxcclxuICAgICAgICAgIGRMO1xyXG5cclxuICAgICAgd2hpbGUgKGQtLSkge1xyXG4gICAgICAgIGRMID0gZGV2ZWxvcGVyTGlua3NbZF07XHJcbiAgICAgICAgZEwuaHJlZiA9IGRldmVsb3BlclVSTDtcclxuICAgICAgICBpZiAoZEwuaWQgPT09ICdtb3otZGV2ZWxvcGVyLS1jb250YWN0JykgZEwuaW5uZXJUZXh0ID0gZGV2ZWxvcGVyVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBlbmNvZGVVUklDb21wb25lbnQoKG5ldyBEYXRlKGxvZ1swXSkudG9VVENTdHJpbmcoKSkgKyAnIC0tLSAnICsgbG9nWzFdICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvcicpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdhZGQnLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJpZXMnOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdmaWx0ZXJlZDpoaXN0b3J5JzogJ3Jlc2V0JyxcclxuICAgICAgICAnaW1wb3J0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5wYWdlJzogJ2dvdG8nLFxyXG4gICAgICAgICAgJy5wcmV2JzogJ3ByZXYnLFxyXG4gICAgICAgICAgJy5uZXh0JzogJ25leHQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyUGFnZXM6IDEsXHJcbiAgICBudW1iZXJFbnRyaWVzOiAwLFxyXG4gICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVGcm9tU3RvcmFnZSgpO1xyXG4gICAgfSxcclxuICAgIGdvdG8oZSwgZWwpIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJykgKiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gbmV3UGFnZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIG5ld1BhZ2UpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCAtLXRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIG5leHQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLm51bWJlclBhZ2VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsICsrdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgrK3RoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgtLXRoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwKVxyXG4gICAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4gdGhpcy51cGRhdGUoaGlzdG9yeS5vcmRlci5sZW5ndGgpKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGwsIHNpbGVudCkge1xyXG4gICAgICB0aGlzLm51bWJlckVudHJpZXMgPSBsO1xyXG4gICAgICB0aGlzLm51bWJlclBhZ2VzID0gbCA/IE1hdGguY2VpbChsIC8gdGhpcy5wZXJQYWdlKSA6IDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy5udW1iZXJQYWdlcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICAgIGlmICghc2lsZW50KSB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCB0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0KGwpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgIHRoaXMudXBkYXRlKGwpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yLWxpc3QnKTtcclxuICAgICAgY29uc3QgbCA9IHRoaXMubnVtYmVyRW50cmllcztcclxuICAgICAgQXJyYXkuZnJvbSh1bC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlJykpLmZvckVhY2gobGkgPT4gbGkucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgaWYgKGwgPCB0aGlzLnBlclBhZ2UgKyAxKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGEgPSBuZXcgRGF0ZShvYmplY3RbYV1bZmllbGRdKSxcclxuICAgICAgICAgIGIgPSBuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKTtcclxuICAgICAgICAgIGlmIChhID09IGIpIHJldHVybiAwO1xyXG4gICAgICAgICAgcmV0dXJuIGEgPCBiID8gMSA6IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICBheihvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpO1xyXG4gICAgICB9LFxyXG4gICAgICB6YShvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QpLnJldmVyc2UoKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNoZWNrbWFyay1hbGwnOiAnY2hlY2ttYXJrQWxsJyxcclxuICAgICAgICAgICcjc29ydC1lbnRyaWVzJzogJ3NvcnQnLFxyXG4gICAgICAgICAgJyNmaWx0ZXItZW50cmllcyc6ICdmaWx0ZXInLFxyXG4gICAgICAgICAgJyNlbnRyaWVzLXBlci1wYWdlJzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICAgICAnI3NldC12aWV3JzogJ3NldFZpZXcnLFxyXG4gICAgICAgICAgJyNhY3Rpb24nOiAnb25DaGFuZ2VBY3Rpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJyNzZWFyY2gtZW50cmllcyc6ICdzZWFyY2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuXHJcbiAgICBuYW1lczogW10sXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuICAgIGVudHJ5VG1wbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJ5LXRlbXBsYXRlJyksXHJcbiAgICBlbnRyaWVzQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpLFxyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG4gICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgIHZpZXdNb2RlOiAnbGlzdCcsXHJcbiAgICBzZWFyY2hUZXJtOiAnJyxcclxuICAgIHNlYXJjaGVkOiBbXSxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZmlsdGVyZWQ6IGZhbHNlLFxyXG4gICAgZmlsdGVyT3B0aW9uc1NldDogZmFsc2UsXHJcblxyXG4gICAgaW5pdCh0YWIpIHtcclxuICAgICAgaWYgKHRhYiAhPT0gJ2hpc3RvcnknKSByZXR1cm47XHJcbiAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIFsnZGVsZXRlJ10obmFtZXMpIHtcclxuICAgICAgbGV0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZWxfY29uZmlybScpKTtcclxuICAgICAgaWYgKGNvbmZpcm1lZCkgdGhpcy5lbWl0KCdkZWxldGU6ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBjbGVhbihuYW1lcykge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFuOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdkb3dubG9hZF9vcHRpb24nKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3Muc3BsaXQoJyAnKTtcclxuICAgICAgICAgIHR5cGUgPSBzZXR0aW5nc1swXTtcclxuICAgICAgICAgIHNwZWMgPSBzZXR0aW5ncy5sZW5ndGggPT09IDIgPyBzZXR0aW5nc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9LCBvcmRlcjogW10gfSB9LFxyXG4gICAgICAgICAgZW50cmllcyA9IGJhY2t1cC5oaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICBvcmRlciA9IGJhY2t1cC5oaXN0b3J5Lm9yZGVyLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBvcmRlci5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrdXAgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoYmFja3VwKSk7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICdUZXh0bWFya2VyLWJhY2t1cC0nICtcclxuICAgICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAgICcuanNvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBiYWNrdXA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHN5bmMobmFtZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdzeW5jOmVudHJ5JywgbmFtZVswXSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG4gICAgdmlzaXQobmFtZXMpIHtcclxuICAgICAgdGhpcy5nZXRVUkxzKG5hbWVzKS50aGVuKHVybHMgPT4gdGhpcy5lbWl0KCdvcGVuOmVudHJpZXMnLCB1cmxzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSk7XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZykge1xyXG4gICAgICBjb25zdCBvID0geyBzeW5jOiBbXSwgbG9jYWw6IFtdIH07XHJcbiAgICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZ0VudHJpZXNbbmFtZV0uc3luY2VkKSBvLnN5bmMucHVzaChuYW1lKTtcclxuICAgICAgICBlbHNlIG8ubG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndGFnOmVudHJpZXMnLCBvLCB0YWcpO1xyXG4gICAgICB0aGlzLmFkZEZpbHRlck9wdCh0YWcsIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcHJvY2Vzc1NlbGVjdGlvbigpIHtcclxuICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50cnktY2I6Y2hlY2tlZCcpLFxyXG4gICAgICAgICAgaSA9IGNoZWNrZWQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKCFpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBsZXQgYWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbicpLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZXMgPSBbXTtcclxuXHJcbiAgICAgIHdoaWxlKGktLSkgbmFtZXMucHVzaChjaGVja2VkW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3RhZycpIHtcclxuICAgICAgICBsZXQgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudGFnKG5hbWVzLCB2YWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzcGxpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjaWZpY2F0aW9uJykudmFsdWUuc3BsaXQoJyAnKSxcclxuICAgICAgICAgICAgdHlwZSA9IHNwbGl0WzBdLFxyXG4gICAgICAgICAgICBzcGVjID0gc3BsaXRbMV07XHJcblxyXG4gICAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlckVudHJpZXMoKSB7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZW50cnlUbXBsLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5lbnRyaWVzQ29udGFpbmVyLFxyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcyxcclxuICAgICAgICAgIHNlYXJjaGVkID0gISF0aGlzLnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIGJ1dHRvbnMsIHZpZXcsIHRhZywgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRhZyA9IGVudHJ5LnRhZyB8fCAnJztcclxuICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgbGFiZWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcclxuICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZycpWzBdO1xyXG4gICAgICAgICAgICBiID0gYnV0dG9ucy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICB3aGlsZShiLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbYl0uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lRmllbGQuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS11cmwnLCBlbnRyeS51cmwpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZW50cnktY2InO1xyXG4gICAgICAgICAgICBpbnB1dC5pZCA9ICdlbnRyeS1jYi0nICsgajtcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgdmlldy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbnRyeS1jYi0nICsgaik7XHJcblxyXG4gICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSB0YWcgPyB0YWcgOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcblxyXG4gICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAvL2Nsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0ID8gZW50cnkubG9zdC5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudHJ5LnN5bmNlZCA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5LnN5bmNlZCkge1xyXG4gICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N5bmMtc3dpdGNoJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ25vbmUnKTtcclxuICAgICAgYWN0aW9ucy5jbGFzc0xpc3RbbWV0aF8xXSgnbm9uZScpO1xyXG4gICAgICBzZWFyY2guY2xhc3NMaXN0W21ldGhfMl0oJ25vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgnbm9uZScpO1xyXG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0W21ldGhfMl0oJ25vbmUnKTtcclxuICAgICAgY291bnQuY2xhc3NMaXN0W21ldGhfM10oJ25vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgnbm9uZScpO1xyXG4gICAgICBjaGVja2FsbC5jbGFzc0xpc3RbbWV0aF8yXSgnbm9uZScpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtY291bnQnKS5pbm5lclRleHQgPSBsO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHAgPSB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwO1xyXG4gICAgICAgIHBwU2VsZWN0LnZhbHVlID0gcHA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlck9wdGlvbnMoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbnNTZXQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3QgdGFncyA9IFtdO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IHRhZztcclxuXHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIHRhZyA9IGVudHJpZXNbbmFtZV0udGFnIHx8IG51bGw7XHJcbiAgICAgICAgaWYgKHRhZyAmJiAhdGFncy5pbmNsdWRlcyh0YWcpKSB0YWdzLnB1c2godGFnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRhZ3MubGVuZ3RoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKSwgeyBkaXNhYmxlZDogdHJ1ZSwgaWQ6ICdmaWx0ZXItb3B0LW5vdGFnJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHRoaXMuYWRkRmlsdGVyT3B0KHRhZywgdGFnKSk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkRmlsdGVyT3B0KHRhZywgdGV4dCwgYXR0cnMpIHtcclxuICAgICAgaWYgKHRoaXMudGFncy5pbmNsdWRlcyh0YWcpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICBvcHQudmFsdWUgPSB0YWc7XHJcbiAgICAgIG9wdC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpZiAoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhIGluIGF0dHJzKSBvcHQuc2V0QXR0cmlidXRlKGEsIGF0dHJzW2FdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudGFncy5sZW5ndGggJiYgdGFnKSB7XHJcbiAgICAgICAgY29uc3Qgbm90YWdGaWx0ZXJPcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpO1xyXG4gICAgICAgIGlmIChub3RhZ0ZpbHRlck9wdCkgc2VsZWN0LnJlbW92ZUNoaWxkKG5vdGFnRmlsdGVyT3B0KTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZykgdGhpcy50YWdzLnB1c2godGFnKTtcclxuICAgIH0sXHJcbiAgICBnZXRUZXh0KG5hbWVzLCBzcGVjKSB7XHJcbiAgICAgIGxldCBhbGxfbWFya3NfcGx1c19tZXRhID0gc3BlYyA9PT0gJyttZXRhJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX2xvc3QgPSBzcGVjID09PSAnK2xvc3QnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgPSBzcGVjID09PSAnK25vdGVzJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19sb3N0ID0gc3BlYyA9PT0gJ2xvc3QnLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJywgMiwgM10sXHJcblxyXG4gICAgICAgICAgcmVqZWN0ID0gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoc3BlYykgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9IHNwZWM7XHJcbiAgICAgICAgICAgIH0gOiBzcGVjID09PSAnYycgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgICAgICAgfSA6IG51bGwsXHJcblxyXG4gICAgICAgICAgbmV3TGluZSA9ICdcXHJcXG4nLFxyXG4gICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgIG5vdGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZScpLFxyXG4gICAgICAgICAgdGV4dCA9ICcnLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgICcgKyBub3RlICsgJzonICsgbmV3TGluZSArICcgICcgKyBtYXJrLm5vdGUucmVwbGFjZSgvXFxuL2csICdcXHJcXG4gICcpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYWxsX21hcmtzX2xvc3QgfHwgYWxsX21hcmtzX3BsdXNfbG9zdCkge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xvc3RfbWFya3MnKSArICc6JyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgbWFyayA9IGxvc3Rbal07XHJcblxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIG5ld0xpbmVzICsgbmV3TGluZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dC50cmltKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldERhdGEobmFtZXMsIHR5cGUsIHNwZWMpIHtcclxuICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIHRoaXMuZ2V0VGV4dChuYW1lcywgc3BlYyk7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBkYXRhID0gJycsXHJcbiAgICAgICAgICAgIG5ld0xpbmVzID0gJ1xcclxcblxcclxcbicsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgZGF0YSArPSBlbnRyaWVzW25hbWVzW2ldXVt0eXBlXSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VVJMcyhuYW1lcykge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIHVybHMgPSBbXSxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB1cmxzLnB1c2goZW50cmllc1tuYW1lc1tpXV0udXJsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybHM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2goZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGVybSA9IGVsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGNvdW50U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IGNsYXNzTWV0aCA9IHRlcm0gPyAnYWRkJyA6ICdyZW1vdmUnO1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXRvZ2dsZScpO1xyXG4gICAgICB0aGlzLnNldHVwU2VhcmNoKHRlcm0pLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgY291bnRTZWxlY3QuY2xhc3NMaXN0W2NsYXNzTWV0aF0oJ25vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoLCBpID0gMCwgbmFtZTtcclxuXHJcbiAgICAgIGZvcig7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godGVybSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZWFyY2goZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRlcm0pIHRoaXMuc2VhcmNoKG51bGwsIHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBwID0gdGhpcy5wZXJQYWdlID0gZWwudmFsdWUgKiAxO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLCBwKTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlldyhlLCBlbCkge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAodmFsID09PSAnbGlzdCcpIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgZWxzZSB0YWJsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnZpZXctc2V0dGluZycsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBWaWV3KHZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC12aWV3JykudmFsdWUgPSB2aWV3O1xyXG4gICAgICB0aGlzLnNldFZpZXcobnVsbCwgeyB2YWx1ZTogdmlldyB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlLCBlbCkge1xyXG4gICAgICBpZiAoZWwudmFsdWUgPT09ICd0YWcnKSBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS5mb2N1cygpLCAwKTtcclxuICAgIH0sXHJcbiAgICBzb3J0KGUsIGVsKSB7XHJcbiAgICAgIGxldCBzb3J0ZWQgPSB0aGlzLnNvcnRlZCA9IGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzb3J0LXNldHRpbmcnLCBzb3J0ZWQpO1xyXG4gICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNvcnQoc29ydGVkKSB7XHJcbiAgICAgIHNvcnRlZCA9IHNvcnRlZC5zcGxpdCgnLScpO1xyXG4gICAgICB0aGlzLm5hbWVzID0gX1NPUlQuYnlbc29ydGVkWzBdXVtzb3J0ZWRbMV1dKHRoaXMub3JpZ0VudHJpZXMpO1xyXG4gICAgICB0aGlzLnNvcnRTZWFyY2hSZXN1bHRzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcihlLCBlbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbC52YWx1ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRW50cmllcyA9IHt9O1xyXG4gICAgICBsZXQgZW50cnksIGMgPSAwO1xyXG4gICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKChlbnRyeS50YWcgJiYgZW50cnkudGFnID09PSBmaWx0ZXIpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N5bmMtc3dpdGNoJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlQnV0dG9uQWN0aW9uKGUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB1bmRvU3luY1RvZ2dsZShuYW1lKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zeW5jLXN3aXRjaFtkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3N5bmNlZDplbnRyeSc6ICd1cGRhdGVFeHBvcnRMaW5rcydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWJ1dHRvbic6ICd0cmlnZ2VyRmlsZUlucHV0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1maWxlJzogJ2hhbmRsZUZpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICcuZXhwb3J0LWJ1dHRvbic6ICd1cGRhdGVFeHBvcnROYW1lJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVFeHBvcnRMaW5rcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbXBvcnQ6IGZ1bmN0aW9uKHN0b3JlU3RyaW5nLCB0eXBlKSB7XHJcbiAgICAgIHZhciBwYXJzZWRTdHJpbmc7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHBhcnNlZFN0cmluZyA9IEpTT04ucGFyc2Uoc3RvcmVTdHJpbmcpO1xyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9wYXJzZScpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcnNlZFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW1wb3J0OnN0b3JhZ2UnLCBwYXJzZWRTdHJpbmcsIHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUZhaWx1cmUoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRyaWdnZXJGaWxlSW5wdXQ6IGZ1bmN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtLScgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpKS5jbGljaygpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUZpbGUoZSwgZWwpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCksXHJcbiAgICAgICAgICBmaWxlID0gZWwuZmlsZXNbMF0sXHJcbiAgICAgICAgICBzaXplID0gZmlsZS5zaXplIC8gMTAwMDAwMCxcclxuICAgICAgICAgIHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgbW9kID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzaXplID4gNTApXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplJykpO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdzeW5jJyAmJiBzaXplID4gMC4wOTkpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplX3N5bmMnKSk7XHJcblxyXG4gICAgICBpZiAoZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCkgIT09ICdqc29uJylcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX2Zvcm1hdCcpKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBtb2QuaW1wb3J0KGUudGFyZ2V0LnJlc3VsdCwgdHlwZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSkoZmlsZSk7XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5RmFpbHVyZShyZWFzb24pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1lcnJvcicpLmlubmVyVGV4dCA9IHJlYXNvbjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlRXhwb3J0TGlua3MoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWxvY2FsJyk7XHJcbiAgICAgIGNvbnN0IHN5bmNlZERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1zeW5jZWQnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvY2FsX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxvY2FsRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdzeW5jZWRfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgc3luY2VkRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRXhwb3J0TmFtZShlLCBlbCkge1xyXG4gICAgICBlbC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICdUZXh0bWFya2VyLWRhdGEtJyArXHJcbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSArICctJyArXHJcbiAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICcuanNvbidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9MT0dfS0VZUyBmcm9tICcuLy4uLy4uLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdsb2cnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2NsZWFyLWxvZ3MnOiAnY2xlYXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMubG9nKCk7XHJcbiAgICB9LFxyXG4gICAgbG9nKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsb2dzID0gbG9ncyB8fCBbXTtcclxuICAgICAgICBsZXQgbG9nc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MtdGFibGUnKSxcclxuICAgICAgICAgICAgdGFibGVCb2R5ID0gbG9nc1RhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBub0xvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tbG9ncycpLFxyXG4gICAgICAgICAgICBjbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1sb2dzJyksXHJcbiAgICAgICAgICAgIGwgPSBsb2dzLmxlbmd0aCxcclxuICAgICAgICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgdHIsIHRkX2RhdGUsIHRkX21zZywgbm9kZV9kYXRlLCBub2RlX21zZywgbG9nLCB0aW1lLCBtc2c7XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICBub0xvZ3MuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgbG9nc1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgICAgIGNsZWFyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgICAgIHdoaWxlKGwtLSkge1xyXG4gICAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgICBtc2cgPSBsb2dbMV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnbnVtYmVyJykgbXNnID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoX0xPR19LRVlTLmdldEtleUJ5VmFsdWUobG9nWzFdKSk7XHJcbiAgICAgICAgICAgIC8vJ251Jyx7eWVhcjonbnVtZXJpYycsbW9udGg6JzItZGlnaXQnLGRheTonMi1kaWdpdCcsaG91cjonbnVtZXJpYycsc2Vjb25kOidudW1lcmljJyxtaW51dGU6J251bWVyaWMnfVxyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcoKG5ldyBEYXRlKGxvZ1swXSkpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRkX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICB0ZF9tc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICBub2RlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aW1lKTtcclxuICAgICAgICAgICAgbm9kZV9tc2cgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtc2cpO1xyXG5cclxuICAgICAgICAgICAgdGRfZGF0ZS5hcHBlbmRDaGlsZChub2RlX2RhdGUpO1xyXG4gICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQobm9kZV9tc2cpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9kYXRlKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfbXNnKTtcclxuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZUJvZHkuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vTG9ncy5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgICAgICBsb2dzVGFibGUuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgY2xlYXJCdG4uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXI6bG9ncycpO1xyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGF0ZVN0cmluZyhkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZGF0ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9eKFxcZHsxfSkoXFxEezF9KS8sIChtLCBwLCBxKT0+ICcwJyArIHAgKyBxKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFxEezF9KShcXGR7MX1cXER7MX0pL2csIChtLCBwLCBxKSA9PiBwICsgJzAnICsgcSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSS0VSIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5LCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuXHJcbiAgICB0aGlzLnN0eWxlcyA9IHtcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXN0b21CZ0NvbG9yLFxyXG4gICAgICAnY29sb3InOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXNpemUnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LWZhbWlseSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zdHlsZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtZGVjb3JhdGlvbic6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtc2hhZG93JzogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0ge1xyXG4gICAgICB4OiAnMXB4JyxcclxuICAgICAgeTogJzFweCcsXHJcbiAgICAgIGJsdXI6ICcxcHgnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5pbmplY3QoKS5wcmV2aWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdtYXJrZXJzJykudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgbGV0IGV4aXN0aW5nU3R5bGUgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnID0gc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICAgICAgYmdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvcicpLFxyXG4gICAgICAgIGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvcicpLFxyXG4gICAgICAgIGNvbG9yID0gc3R5bGVzWydjb2xvciddLFxyXG4gICAgICAgIHNoYWRvdywgc2hhZG93U2VsZWN0LCBpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcblxyXG4gICAgWydmb250LXNpemUnLCAnZm9udC1mYW1pbHknLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICd0ZXh0LWRlY29yYXRpb24nXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKS52YWx1ZSA9IHN0eWxlc1twcm9wXSB8fCAnZGVmYXVsdCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3QgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93Jyk7XHJcbiAgICBzaGFkb3cgPSBzdHlsZXNbJ3RleHQtc2hhZG93J107XHJcbiAgICBpID0gIXNoYWRvdyA/IDAgOiBzaGFkb3cgPT09ICdub25lJyA/IDIgOiAxO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgIHNoYWRvd1NlbGVjdC5jaGlsZHJlbltpXS5jbGljaygpO1xyXG5cclxuICAgIFsneCcsICd5JywgJ2JsdXInLCAnY29sb3InXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3ctJyArIHByb3ApLnZhbHVlID0gbWFya2VyLnNoYWRvd1twcm9wXS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwcmV2aWV3KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKS5zdHlsZSA9IHRoaXMuc3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShlbCkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc0xpc3QsXHJcbiAgICAgICAgcHJvcCA9IGVsLm5hbWUsXHJcbiAgICAgICAgdmFsO1xyXG5cclxuICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdjc3MtY29sb3InKSkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3cnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWwpIHtcclxuICAgICAgICAgIGNhc2UgJ25vbmUnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gJ25vbmUnOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOiBtYXJrZXIuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdW5kZWZpbmVkOyBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3NoYWRvdyc6IG1hcmtlci5zZXRTaGFkb3coKTsgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctdmFsdWUnKSkge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy1weC12YWx1ZScpKVxyXG4gICAgICAgICAgdmFsICs9ICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93W3Byb3BdID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhZG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNldFN0eWxlKCkucHJldmlldygpO1xyXG4gIH1cclxuICBpc1ZhbGlkKHByb3AsIHZhbCkge1xyXG4gICAgbGV0IHZhbGlkO1xyXG5cclxuICAgIHN3aXRjaChwcm9wKSB7XHJcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQtY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXNpemUnOiB2YWxpZCA9IC9eWzAtOV17MSwyfXB4JC8udGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1mYW1pbHknOiB2YWxpZCA9IC9eW2EteixcXHMtXXs1LDQwfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXdlaWdodCc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc3R5bGUnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LWRlY29yYXRpb24nOiB2YWxpZCA9IC9eW2Etei1dezcsMTJ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtc2hhZG93JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAneCc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICdibHVyJzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG4gIHNldFNoYWRvdygpIHtcclxuICAgIHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdGhpcy5zaGFkb3cueCArICcgJyArIHRoaXMuc2hhZG93LnkgKyAnICcgKyB0aGlzLnNoYWRvdy5ibHVyICsgJyAnICsgdGhpcy5zaGFkb3cuY29sb3I7XHJcbiAgfVxyXG4gIHNldFN0eWxlKCkge1xyXG4gICAgbGV0IHN0eWxlID0gJycsIHZhbDtcclxuXHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc3R5bGVzKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuc3R5bGVzW2ldO1xyXG4gICAgICBpZiAodmFsKSBzdHlsZSArPSBpICsgJzonICsgdmFsICsgJzsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsLFxyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnbGknOiAndG9nZ2xlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cdFx0fSxcclxuICAgIHBhZ2VOYXY6IG51bGwsXHJcbiAgICBjdXJyZW50OiBudWxsLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnBhZ2VOYXYgPSBlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGFnZS1uYXYnKTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgdGhpcy5vcGVuKGN1cnJlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGUoZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCB0aGlzLmN1cnJlbnQgPT0gZWwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQpIHRoaXMuY2xvc2UodGhpcy5jdXJyZW50KTtcclxuXHJcbiAgICAgIHRoaXMub3BlbihlbCk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlbCkge1xyXG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTUFSS0VSIGZyb20gJy4vbWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnaW1wb3J0ZWQ6c2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpiZy1jb2xvci1zZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOnNhdmVvcHQtc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYy1zZXR0aW5ncyc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcuc2MtY2InOiAndG9nZ2xlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zaG9ydGN1dC1zZWxlY3QnOiAnY2hhbmdlU2hvcnRjdXQnLFxyXG4gICAgICAgICAgJy5zYXZlLW9wdCc6ICdjaGFuZ2VTYXZlT3B0JyxcclxuICAgICAgICAgICcubmFtaW5nLW9wdCc6ICdjaGFuZ2VOYW1pbmdPcHQnLFxyXG4gICAgICAgICAgJyNub3Rlcy1uZXcnOiAndG9nZ2xlU2F2ZU5vdGVPcHQnLFxyXG4gICAgICAgICAgJy5jdXN0b21pemUtcXVpY2tidXR0b25zJzogJ2NoYW5nZVF1aWNrYnV0dG9uT3B0JyxcclxuICAgICAgICAgICcuY3RtLWNiJzogJ3RvZ2dsZUN0bScsXHJcbiAgICAgICAgICAnLm5vdGVzLWNiJzogJ3RvZ2dsZU5vdGVzJyxcclxuICAgICAgICAgICcubWlzYy1jYic6ICd0b2dnbGVNaXNjJyxcclxuICAgICAgICAgICcudG11aXBvcyc6ICdjaGFuZ2VUbXVpUG9zaXRpb25PcHQnLFxyXG4gICAgICAgICAgJyNwcml2YXRlLXNhdmUnOiAndG9nZ2xlUHJpdlNhdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsbG93ZWRLZXlzOiAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbiBvIHAgcSByIHMgdCB1IHYgeCB5IHogMCAxIDQgNSA2IDcgOCA5IGVudGVyIC0gKycuc3BsaXQoJyAnKSxcclxuICAgIGFsbG93ZWRTaG9ydGN1dHM6IFsnJywgJ2N0cmxLZXknLCAnc2hpZnRLZXknLCAnYWx0S2V5JywgJ2N0cmxLZXktc2hpZnRLZXknLCAnY3RybEtleS1hbHRLZXknLCAnc2hpZnRLZXktYWx0S2V5JywgJ21ldGFLZXknLCAnbWV0YUtleS1zaGlmdEtleScsICdtZXRhS2V5LWFsdEtleSddLFxyXG4gICAgYWxsb3dlZFF1aWNrYnV0dG9uT3B0czogWyd0aXRsZScsICd1cmwnLCAndGV4dCcsICd0ZXh0ICttZXRhJywgJ3RleHQgK25vdGVzJywgJ3RleHQgK2xvc3QnLCAndGV4dCBtJywgJ3RleHQgMicsICd0ZXh0IDMnLCAndGV4dCBjJywgJ3RleHQgbG9zdCddLFxyXG4gICAgbWFya2VyS2V5czogWydtJywgJzInLCAnMyddLFxyXG4gICAgY3VzdG9tTWFya2VyS2V5czogW10sXHJcbiAgICBtYXJrZXI6IG51bGwsXHJcbiAgICBjdXN0b21TZWFyY2g6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXJLZXlzID0gdGhpcy5tYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBpLCBrZXk7XHJcblxyXG4gICAgICAgIGZvciAoa2V5IGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgIGkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmICghbWFya2VyS2V5cy5pbmNsdWRlcyhpKSAmJiAhY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKVxyXG4gICAgICAgICAgICAudXBkYXRlTWFya2VyKCdtJylcclxuICAgICAgICAgICAgLmluamVjdFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20ta2V5JykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbicpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzID0gW107XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKS5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTWFya2VyKGUsIGVsLCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbCA/IGVsLnZhbHVlIDogZSA/IGUgOiB0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJztcclxuXHJcbiAgICAgIHRoaXMubWFya2VyID0gbmV3IF9NQVJLRVIoa2V5LCBjdXN0b21CZ0NvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgIGxldCBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuXHJcbiAgICAgICAgICBhbGxvd2VkS2V5cyA9IHRoaXMuYWxsb3dlZEtleXMsXHJcbiAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG5cclxuICAgICAgICAgIGEgPSBhbGxvd2VkS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBjID0gY3VzdG9tTWFya2VyS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuXHJcbiAgICAgICAgICBmcmFnbWVudDEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblxyXG4gICAgICAgICAgb3B0aW9uLCBpY29uLCB2YWwsIFZhbDtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gY3VzdG9tTWFya2VyS2V5c1tpXTtcclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBWYWwgPSBWYWwgPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBWYWw7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQxLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcblxyXG4gICAgICAgIGZyYWdtZW50My5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50Mi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyB2YWw7XHJcbiAgICAgICAgaWNvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDEpO1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChmcmFnbWVudDIpO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQzKTtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBhbGxvd2VkS2V5c1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyh2YWwpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgICAgbGV0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cyxcclxuICAgICAgICAgIGksIHNjQ2hlY2tib3gsIHNjU2VsZWN0LCBjbUNoZWNrYm94LCBzYztcclxuXHJcbiAgICAgIGZvciAoaSBpbiBzaG9ydGN1dHMpIHtcclxuICAgICAgICBzYyA9IHNob3J0Y3V0c1tpXTtcclxuICAgICAgICBzY0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjLScgKyBpKTtcclxuICAgICAgICBzY1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC1zZWxlY3QtJyArIGkpO1xyXG4gICAgICAgIGNtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY20tJyArIGkpO1xyXG5cclxuICAgICAgICBpZiAoc2NDaGVja2JveCkgc2NDaGVja2JveC5jaGVja2VkID0gc2NbMV07XHJcbiAgICAgICAgaWYgKHNjU2VsZWN0KSBzY1NlbGVjdC52YWx1ZSA9IHNjWzBdO1xyXG4gICAgICAgIGlmIChjbUNoZWNrYm94KSBjbUNoZWNrYm94LmNoZWNrZWQgPSBzY1syXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzLmhpc3RvcnksXHJcbiAgICAgICAgICBzYXZlT3B0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzYXZlLW9wdCcpO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5hdXRvc2F2ZSkgc2F2ZU9wdHNbMF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGVsc2Ugc2F2ZU9wdHNbMV0uY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS0nICsgaGlzdG9yeVNldHRpbmdzLm5hbWluZykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRlLXNhdmUnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVJblByaXY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1uZXcnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcblxyXG4gICAgICBsZXQgbWlzY1NldHRpbmdzID0gc2V0dGluZ3MubWlzYztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLWJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ibWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVpY29uJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3RlaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZW9uY2xpY2snKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVvbmNsaWNrO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tZmFpbHVyZScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZmFpbHVyZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1zdWNjZXNzJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5zdWNjZXNzTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXBibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MucGJtTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWNoYW5nZWQnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmNoYW5nZWROb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtZXJyb3InKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmVycm9yTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0JykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFswXSA6IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJykudmFsdWUgPSBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoID8gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaFsxXSA6ICcnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tbm90ZWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG11aXBvcy0tYm1pY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuICAgIH0sXHJcbiAgICBzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVN0eWxlKGUsIGVsKSB7XHJcbiAgICAgIGxldCBtYXJrZXIgPSB0aGlzLm1hcmtlci51cGRhdGUoZWwpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c3R5bGUtc2V0dGluZycsIG1hcmtlci5rZXksIG1hcmtlci5zdHlsZSk7XHJcbiAgICB9LFxyXG4gICAgYWRkTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIHJlbW92ZUtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUta2V5JyksXHJcbiAgICAgICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgIGNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKSxcclxuICAgICAgICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgIGJnQ29sb3IgPSB0aGlzLmdldFJhbmRvbUxpZ2h0Q29sb3IoKTtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHJlbW92ZUtleVNlbGVjdC5jaGlsZHJlbi5sZW5ndGggPj0gMTIgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBrZXlTZWxlY3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICBjbG9uZS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyBrZXk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICBpY29uLmlubmVyVGV4dCA9IGtleSA9PT0gJ2VudGVyJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IGtleS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoa2V5LCBudWxsLCBiZ0NvbG9yKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnYWRkOmN1c3RvbS1tYXJrZXInLCBrZXksICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBiZ0NvbG9yICsgJzsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgYWRkS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbjtcclxuXHJcbiAgICAgIGlmICgha2V5IHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOy8vbGllYmVyIGFuIHJpY2h0aWdlIHN0ZWxsZSBpbSBhbHBoYWJldCBzZXR6ZW4gKGFsdGVybmF0aXYgYW4gYW5mYW5nKVxyXG4gICAgICBhZGRLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGVsLnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAga2V5U2VsZWN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uLScgKyBrZXkpWzBdLnJlbW92ZSgpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleS0nICsga2V5KS5yZW1vdmUoKTtcclxuICAgICAga2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNYXJrZXIoJ20nKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlOmN1c3RvbS1tYXJrZXInLCBrZXkpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFNob3J0Y3V0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ3RtKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOmN0bS1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2F2ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLCAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQcml2U2F2ZShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpwcml2LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOYW1pbmdPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2F2ZU5vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRRdWlja2J1dHRvbk9wdHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUbXVpUG9zaXRpb25PcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG11aXBvcycpKS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUgPSBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ3VzdG9tU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCk7XHJcbiAgICAgIGNvbnN0IGlucDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKTtcclxuICAgICAgY29uc3QgaW5wMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKTtcclxuICAgICAgY29uc3QgcGFydDEgPSBpbnAxLnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXJ0MiA9IGlucDIudmFsdWU7XHJcbiAgICAgIGlmICghcGFydDEgJiYgIXBhcnQyKSB7XHJcbiAgICAgICAgaW5wMS52YWx1ZSA9IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICAgIGlucDIudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgW3BhcnQxLCBwYXJ0Ml0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmFuZG9tTGlnaHRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoKDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjE3NSkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC1zZXR0aW5ncycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3NldHRpbmdzID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtaGlzdG9yeScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX2hpc3RvcnkgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3luYy1zd2l0Y2gnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnN5bmMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbyhmaWVsZCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtJyArIGZpZWxkKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBfVE9HR0xFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUsIGZhbHNlKTtcclxuICB9XHJcbiAgdG9nZ2xlKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IGRhdGFUYXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSxcclxuICAgICAgICB0YXJnZXRzID0gZGF0YVRhcmdldCA/IGRhdGFUYXJnZXQuc3BsaXQoJyAnKSA6IG51bGwsXHJcbiAgICAgICAgZGF0YVRvZ2dsZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpLFxyXG4gICAgICAgIHJvbGVzID0gZGF0YVRvZ2dsZSA/IGRhdGFUb2dnbGUuc3BsaXQoJyAnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHJvbGVzKSB7XHJcbiAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGkpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbaV0pLmNsYXNzTGlzdFtyb2xlXSgnb3BlbicpKTtcclxuICAgIH1cclxuICAgIGVsc2UgdGFyZ2V0LmRpc2FibGVkID0gIXRoaXMuY2hlY2tlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpuYW1pbmdvcHQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c29ydC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTp2aWV3LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnLFxyXG4gICAgICAnb3BlbjplbnRyaWVzJyxcclxuICAgICAgJ3ZpZXc6ZW50cnknLFxyXG4gICAgICAnc3luYzplbnRyeScsXHJcbiAgICAgICdzeW5jOmhpc3RvcnknLFxyXG4gICAgICAnc3luYzpzZXR0aW5ncycsXHJcbiAgICAgICdpbXBvcnQ6c3RvcmFnZScsXHJcbiAgICAgICd0b2dnbGU6c3luYycsXHJcbiAgICAgICdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnLFxyXG4gICAgICAnZXJyb3I6YnJvd3Nlci1jb25zb2xlJyxcclxuICAgICAgJ2NsZWFyOmxvZ3MnLFxyXG4gICAgICAndGFnOmVudHJpZXMnXHJcbiAgICBdXHJcbiAgfVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCB7IF9DT1BZIH0gZnJvbSAnLi8uLi91dGlscy9jb3B5J1xyXG5pbXBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfSBmcm9tICcuLy4uL3V0aWxzL2dldEFjdGl2ZVRhYidcclxuaW1wb3J0IF9FWFRFTkQgZnJvbSAnLi8uLi91dGlscy9leHRlbmQnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL21vZHVsZSdcclxuaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vdXRpbHMvZG9tbW9kdWxlJ1xyXG5pbXBvcnQgeyBfUE9SVCB9IGZyb20gJy4vLi4vdXRpbHMvcG9ydCdcclxuaW1wb3J0IF9MMTBOIGZyb20gJy4vLi4vdXRpbHMvbDEwbidcclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi91dGlscy9lcnJvci10cmFja2VyJ1xyXG5cclxuZXhwb3J0IHsgX0NPUFksIF9HRVRfQUNUSVZFX1RBQiwgX0VYVEVORCwgX01PRFVMRSwgX0RPTU1PRFVMRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSIH1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24ob3JpZ2luYWwsIGNsb25lKSB7XHJcbiAgY2xvbmUgPSBjbG9uZSB8fCB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBvcmlnaW5hbCkge1xyXG4gICAgaWYgKG9yaWdpbmFsLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxbaV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsW2ldKSA/IFtdIDoge307XHJcbiAgICAgICAgX0NPUFkob3JpZ2luYWxbaV0sIGNsb25lW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZVtpXSA9IG9yaWdpbmFsW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmIGxhc3RBcmcudGFiKSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==