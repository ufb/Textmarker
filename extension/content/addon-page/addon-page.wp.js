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

exports["default"] = new _utils._STORE({
  events: {
    ENV: {
      'toggled:sync': 'onToggledSync'
    }
  },
  env: 'addon-page',
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
        'set-areas-after-sync-change': 'update'
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
      autocs: true
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
  js_injection_failure: 37,
  css_injection_failure: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJlbnYiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJkb3dubG9hZCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsImFsbG93ZWRIYXNoZXMiLCJib290c3RyYXBwZWQiLCJhdXRvaW5pdCIsInN0YXJ0IiwiaW5pdE1haW5OYXYiLCJ0YWIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIl9OQVYiLCJpbm5lclRleHQiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIiwic3VibmF2cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuIiwibGVuZ3RoIiwidG9nZ2xlQnV0dG9ucyIsInQiLCJfVE9HR0xFUiIsInNldEFkZG9uTGlua3MiLCJzZXRMb2dMaW5rIiwiYWRkb25VUkwiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImFkZG9uTGlua3MiLCJhIiwiYUwiLCJocmVmIiwiaWQiLCJsb2dMaW5rIiwibG9ncyIsImwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2ciLCJEYXRlIiwidG9VVENTdHJpbmciLCJlbCIsIkRPTSIsImNsaWNrIiwibnVtYmVyUGFnZXMiLCJudW1iZXJFbnRyaWVzIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwidXBkYXRlRnJvbVN0b3JhZ2UiLCJlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJzaWxlbnQiLCJNYXRoIiwiY2VpbCIsInJlc2V0IiwidWwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibGkiLCJwIiwicGFnZXMiLCJyIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJmaWVsZCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsImluaXRpYWxpemVkIiwibmFtZXMiLCJlbnRyeVRtcGwiLCJlbnRyaWVzQ29udGFpbmVyIiwicGFnZSIsInNvcnRlZCIsInZpZXdNb2RlIiwic2VhcmNoVGVybSIsInNlYXJjaGVkIiwidGFncyIsImZpbHRlcmVkIiwiZmlsdGVyT3B0aW9uc1NldCIsImluaXQiLCJyZXN1bWUiLCJtc2ciLCJsb2NrZWQiLCJjb25maXJtZWQiLCJjb25maXJtIiwidHlwZSIsInNwZWMiLCJ1bmRlZmluZWQiLCJnZXREYXRhIiwiZGF0YSIsInRleHQiLCJsaW5rIiwiam9pbiIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImJhY2t1cCIsInBvcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJjb250YWlucyIsImdldFVSTHMiLCJ1cmxzIiwibmV3TmFtZSIsInByb21wdCIsIm9sZE5hbWUiLCJhcmVhIiwicGFyZW50Tm9kZSIsInRhZyIsImZvcmNlIiwibyIsInN5bmMiLCJsb2NhbCIsIm9yaWdFbnRyaWVzIiwic3luY2VkIiwicHVzaCIsImNoZWNrZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9uIiwidmFsdWUiLCJ2YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsInNlYXJjaFRlcm1MZW5ndGgiLCJzZWFyY2hlZEZ1bGxUZXh0IiwiY2xvbmUiLCJlbnRyeSIsIm5hbWVGaWVsZCIsImlucHV0IiwibGFiZWwiLCJpbmZvQnV0dG9uIiwiZGV0YWlscyIsInNlYXJjaFJlc3VsdHMiLCJidXR0b25zIiwiZWRpdCIsInZpZXciLCJpbW11dCIsImltbXV0RWwiLCJsb2NrZWRFbCIsInRhZ0VsIiwiZmlsdGVyIiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJjbGFzc05hbWUiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJmaXJzdCIsIm1hcmtzIiwiZnVsbFRleHRTZWFyY2hSZXN1bHRzIiwicmVzIiwibWFyayIsInBvcyIsIm1hcmtUZXh0IiwibWFya1RleHRFbCIsImhpZ2hsaWdodCIsInQxIiwidDIiLCJ0MyIsInN1YnN0cmluZyIsInN1YnN0ciIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRpdGxlIiwidHJpbSIsImdldFRleHQiLCJxIiwidGVybSIsInNlYXJjaFR5cGUiLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50Iiwic2VhcmNoRnVsbFRleHQiLCJzZWFyY2hCeU5hbWUiLCJmb3VuZCIsInJlc3VsdHMiLCJ0YWJsZSIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsInRtdWlwb3MiLCJ0YmJwb3dlciIsImFkZG9uIiwiYXV0b2NzIiwic2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzIiwiaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzIiwiY2hhbmdlU3R5bGUiLCJ0b2dnbGVBdXRvTm90ZU9wdCIsImNoYW5nZUF1dG9Ob3RlT3B0IiwiY2hhbmdlSGFzaE9wdCIsInRvZ2dsZUltbXV0T3B0IiwidG9nZ2xlRHJvcExvc3Nlc09wdCIsInRvZ2dsZUF1dG9jc09wdCIsImFkZE1hcmtlciIsImJnQ29sb3IiLCJnZXRSYW5kb21MaWdodENvbG9yIiwic2VsZWN0ZWQiLCJyZW1vdmVNYXJrZXIiLCJjaGFuZ2VNYXJrTWV0aG9kIiwidG9nZ2xlU2hvcnRjdXQiLCJjaGFuZ2VTaG9ydGN1dCIsInRvZ2dsZUN0bSIsImNoYW5nZVNhdmVPcHQiLCJ0b2dnbGVQcml2U2F2ZSIsImNoYW5nZU5hbWluZ09wdCIsInRvZ2dsZVNhdmVOb3RlT3B0IiwiY2hhbmdlUXVpY2tidXR0b25PcHQiLCJzd2l0Y2hRdWlja2J1dHRvbk9wdCIsInRvZ2dsZU5vdGVzIiwidG9nZ2xlTWlzYyIsInRvZ2dsZVRCQlBvd2VyT3B0IiwiY2hhbmdlVG11aVBvc2l0aW9uT3B0IiwiY2hhbmdlQ3VzdG9tU2VhcmNoIiwiaW5wMSIsImlucDIiLCJwYXJ0MSIsInBhcnQyIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImFyZWFfaGlzdG9yeSIsImFyZWFfcGFnZW5vdGVzIiwidG9nZ2xlU3dpdGNoIiwidW5kbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhVGFyZ2V0IiwidGFyZ2V0cyIsImRhdGFUb2dnbGUiLCJyb2xlcyIsInJvbGUiLCJPTkVPRkYiLCJ6IiwicyIsImQiLCJ3IiwiYXJyb3d1cCIsImFycm93ZG93biIsInNiIiwiY20iLCJjb3B5IiwiYWN0aXZlIiwib3ZlcndyaXRlIiwiY2hhbmdlZE5vdGUiLCJwcm9ncmVzc2JhciIsInRhYnMiLCJtZXRhIiwidW5mb2xkZWQiLCJub3RlcyIsImxpbmtzIiwidGhlbWVzIiwidGhlbWUiLCJwYWdlbm90ZXMiLCJub3RlX3BibSIsIm5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZSIsIm5vdGVfdXJsIiwiZXJyb3Jfc2F2ZV9zdHlsZSIsImVycm9yX3NhdmVfX3RvZ2dsZV9zYyIsImVycm9yX3NhdmVfY2hhbmdlX3NjIiwiZXJyb3Jfc2F2ZV9jdG0iLCJlcnJvcl9zYXZlX2F1dG9zYXZlIiwiZXJyb3Jfc2F2ZV9uYW1pbmciLCJlcnJvcl9zYXZlX25vdGlmeSIsImVycm9yX3NhdmVfZG93bmxvYWQiLCJlcnJvcl9zYXZlX2JtaWNvbiIsImVycm9yX2NsZWFuX2hpc3RvcnkiLCJlcnJvcl9hZGRfbWFya2VyIiwiZXJyb3JfcmVtb3ZlX21hcmtlciIsImVycm9yX3NhdmVfZW50cnkiLCJlcnJvcl91cGRhdGVfZW50cnkiLCJlcnJvcl9kZWxfZW50cnkiLCJlcnJvcl9lbXB0eV9zeW5jZWRfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQiLCJlcnJvcl9pbXBvcnRfZW1wdHkiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeSIsImVycm9yX2ltcG9ydF9zZXR0aW5ncyIsImVycm9yX2ltcG9ydF9vdXRkYXRlZCIsImVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZCIsImVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQiLCJlcnJvcl9uYW1pbmciLCJlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbiIsImVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGUiLCJlcnJvcl90b2dnbGVfc3luYyIsImVycm9yX3NhdmVfcHJpdiIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xIiwibm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzIiLCJlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZSIsImVycm9yX3NhdmVfbWFya19tZXRob2QiLCJqc19pbmplY3Rpb25fZmFpbHVyZSIsImNzc19pbmplY3Rpb25fZmFpbHVyZSIsInNyYyIsImlzQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsIl9ib3VuZCIsIl9leHRyYUJvdW5kIiwiYWRkTGlzdGVuZXJzTWFudWFsbHkiLCJhZGRMaXN0ZW5lcnMiLCJhdXRvUGF1c2UiLCJzZXRBdXRvUGF1c2UiLCJzdWJNYXAiLCJzZWxlY3RvciIsIl9zZWwiLCJtZXRoIiwiZiIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJvbiIsInJlbW92ZUxpc3RlbmVycyIsImhhbmRsZXIiLCJkb21FdmVudHMiLCJwcm94eSIsImdlbmVyYWxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsIl9leHRyYSIsInNldCIsImVycm9yIiwiZmlsZW5hbWUiLCJtZXNzYWdlIiwic2hpZnQiLCJsaW5lbm8iLCJjb2xubyIsImdldFRpbWUiLCJvYmoxIiwib2JqMiIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsImgiLCJsYXN0SW5kZXhPZiIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImF0dHIiLCJsMTBuQXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsImV2Iiwid2FpdCIsImNvbnRleHQiLCJmdW5jIiwiYXJnczEiLCJhcmdzMiIsImNvbmNhdCIsImVudkV2ZW50cyIsIl9NRURJQVRPUiIsInBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJyZWdpc3RlclBvcnRFdmVudHMiLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJsYXN0QXJnIiwiZnJhbWVJZCIsInBvc3Rwb25lQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJhZGRDb25uZWN0aW9uTGlzdGVuZXJzIiwib25EaXNjb25uZWN0IiwiY2IiLCJvbkNvbm5lY3QiLCJpbml0aWFsaXppbmciLCJfREVGQVVMVF9TVE9SQUdFIiwic2V0QXJlYXMiLCJQcm9taXNlIiwibG9jYWxTdG9yYWdlIiwic3luY2VkU3RvcmFnZSIsIl9nZXRfaGlzdG9yeSIsInN5bmNlZEhpc3RvcnkiLCJsb2NhbEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEtBQUtDLGFBQXJCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQUgsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0ksUUFBUixJQUFvQjJsQiw0QkFBaUIzbEIsUUFBekM7QUFBQSxPQUF0RCxDQUFQO0FBQ0Q7OztnQ0FDVztBQUNWLGFBQU9MLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnFLLEtBQWhCLENBQXNCbkssR0FBdEIsR0FBNEJDLElBQTVCLENBQWlDLFVBQUErbEIsWUFBWSxFQUFJO0FBQ3RELFlBQUksQ0FBQ0EsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNqakIsSUFBbkMsRUFBeUMsT0FBTyxFQUFQO0FBQ3pDLGVBQU9pakIsWUFBWSxDQUFDampCLElBQXBCO0FBQ0QsT0FITSxDQUFQO0FBSUQ7OzttQ0FDYztBQUNiLGFBQU9sRCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JxSyxLQUFoQixDQUFzQm5LLEdBQXRCLEdBQTRCQyxJQUE1QixDQUFpQyxVQUFBK2xCLFlBQVksRUFBSTtBQUN0RCxZQUFJLENBQUNBLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDcGtCLE9BQW5DLEVBQTRDO0FBQzFDLGlCQUFPL0IsT0FBTyxDQUFDQyxPQUFSLENBQWdCb0ssSUFBaEIsQ0FBcUJsSyxHQUFyQixHQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQWdtQixhQUFhO0FBQUEsbUJBQUlBLGFBQWEsQ0FBQ3JrQixPQUFkLElBQXlCLEVBQTdCO0FBQUEsV0FBN0MsQ0FBUDtBQUNEOztBQUNELGVBQU9va0IsWUFBWSxDQUFDcGtCLE9BQXBCO0FBQ0QsT0FMTSxDQUFQO0FBTUQ7Ozs7RUF0R3lCMUMsZSIsImZpbGUiOiJjb250ZW50L2FkZG9uLXBhZ2UvYWRkb24tcGFnZS53cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY29udGVudC9hZGRvbi1wYWdlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX0NPUFkgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvcHknXHJcbmltcG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZ2V0QWN0aXZlVGFiJ1xyXG5pbXBvcnQgX0VYVEVORCBmcm9tICcuLy4uLy4uL3V0aWxzL2V4dGVuZCdcclxuaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvbW9kdWxlJ1xyXG5pbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9kb21tb2R1bGUnXHJcbmltcG9ydCB7IF9TVE9SRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscy9wb3J0J1xyXG5pbXBvcnQgeyBfSEFTSExFU1MgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2hhc2hsZXNzJ1xyXG5pbXBvcnQgX0wxME4gZnJvbSAnLi8uLi8uLi91dGlscy9sMTBuJ1xyXG5pbXBvcnQgX0VSUk9SVFJBQ0tFUiBmcm9tICcuLy4uLy4uL3V0aWxzL2Vycm9yLXRyYWNrZXInXHJcblxyXG5leHBvcnQgeyBfQ09QWSwgX0dFVF9BQ1RJVkVfVEFCLCBfRVhURU5ELCBfTU9EVUxFLCBfRE9NTU9EVUxFLCBfU1RPUkUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiwgX0hBU0hMRVNTIH1cclxuIiwiaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9TVE9SRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdvblRvZ2dsZWRTeW5jJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW52OiAnYWRkb24tcGFnZScsXHJcblxyXG4gIF9nZXRfZG93bmxvYWRfb3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuICd0ZXh0JztcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS5kb3dubG9hZDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9tYXJrZXJzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiBzdG9yYWdlLnNldHRpbmdzLm1hcmtlcnMpO1xyXG4gIH0sXHJcbiAgX2dldF9zaG9ydGN1dHMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3Muc2hvcnRjdXRzKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vX3N0b3JlJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuaW1wb3J0IF9ISVNUT1JZIGZyb20gJy4vbW9kdWxlcy9oaXN0b3J5J1xyXG5pbXBvcnQgX1NFVFRJTkdTIGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncydcclxuaW1wb3J0IF9MT0dHSU5HIGZyb20gJy4vbW9kdWxlcy9sb2dzJ1xyXG5pbXBvcnQgX1NZTkNJTkcgZnJvbSAnLi9tb2R1bGVzL3N5bmNpbmcnXHJcbmltcG9ydCBfSU1QT1JUIGZyb20gJy4vbW9kdWxlcy9pbXBvcnQnXHJcbmltcG9ydCBfQ09OVEFDVCBmcm9tICcuL21vZHVsZXMvY29udGFjdCdcclxuaW1wb3J0IF9QQUdJTkFUT1IgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnktcGFnaW5hdGlvbidcclxuXHJcbmltcG9ydCBfTkFWIGZyb20gJy4vbW9kdWxlcy9uYXYnXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ3N0YXJ0JyxcclxuICAgICAgJ3VwZGF0ZWQ6c2V0dGluZ3MnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3N0YXJ0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWxsb3dlZEhhc2hlczogWyduZXdzJywgJ21hbnVhbCcsICdzZXR0aW5ncycsICdoaXN0b3J5JywgJ2NvbnRhY3QnLCAnc3luYycsICdleHBvcnQnLCAnbG9ncyddLFxyXG4gIGJvb3RzdHJhcHBlZDogZmFsc2UsXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBfU1RPUkUuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKHN0b3JhZ2Uuc2V0dGluZ3MgJiYgc3RvcmFnZS5oaXN0b3J5KSB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKCF0aGlzLmJvb3RzdHJhcHBlZCkge1xyXG4gICAgICB0aGlzLmJvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgIF9ISVNUT1JZKCk7XHJcbiAgICAgIF9TRVRUSU5HUygpO1xyXG4gICAgICBfTE9HR0lORygpO1xyXG4gICAgICBfU1lOQ0lORygpO1xyXG4gICAgICBfSU1QT1JUKCk7XHJcbiAgICAgIF9DT05UQUNUKCk7XHJcbiAgICAgIF9QQUdJTkFUT1IoKTtcclxuICAgICAgdGhpcy5pbml0TWFpbk5hdigpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5pdE1haW5OYXYoKSB7XHJcbiAgICBjb25zdCB0YWIgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPScpWzFdO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbG93ZWRIYXNoZXMuaW5jbHVkZXModGFiKSkge1xyXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYtJyArIHRhYikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBuZXcgX05BVih3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5uYXYnKSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IHsgX0wxME4gfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfTkFWIGZyb20gJy4vbW9kdWxlcy9uYXYnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL21vZHVsZXMvdG9nZ2xlcidcclxuaW1wb3J0ICcuL3BvcnQnXHJcbmltcG9ydCAnLi9fc3RvcmUnXHJcbmltcG9ydCAnLi9ib290c3RyYXAnXHJcblxyXG5fTDEwTigpO1xyXG5cclxuLyogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyc2lvbi1udW1iZXInKS5pbm5lclRleHQgPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9uO1xyXG4vKiBlbmQ6IGF1dG8taW5zZXJ0IGN1cnJlbnQgdmVyc2lvbiBudW1iZXIgKi9cclxuXHJcbi8qIGNvbmZpZ3VyZSBzdWJuYXZzICovXHJcbmNvbnN0IHN1Ym5hdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWJuYXYnKTtcclxubGV0IG4gPSBzdWJuYXZzLmxlbmd0aDtcclxuXHJcbndoaWxlKG4tLSkgbmV3IF9OQVYoc3VibmF2c1tuXSk7XHJcbi8qIGVuZDogY29uZmlndXJlIG5hdnMgKi9cclxuXHJcbi8qIGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxubGV0IHRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2dnbGUtYnV0dG9uJyksXHJcbiAgICB0ID0gdG9nZ2xlQnV0dG9ucy5sZW5ndGg7XHJcblxyXG53aGlsZSh0LS0pIG5ldyBfVE9HR0xFUih0b2dnbGVCdXR0b25zW3RdKTtcclxuLyogZW5kOiBjb25maWd1cmUgdG9nZ2xlIGVsZW1lbnRzICovXHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOmxvZ3MnOiAnc2V0TG9nTGluaydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnNldEFkZG9uTGlua3MoKVxyXG4gICAgICAgICAgLnNldExvZ0xpbmsoKTtcclxuICAgIH0sXHJcbiAgICBzZXRBZGRvbkxpbmtzKCkge1xyXG4gICAgICBsZXQgYWRkb25VUkwgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndXJsX21vel9hZGRvbicpLFxyXG4gICAgICAgICAgYWRkb25MaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vei1hZGRvbicpLFxyXG4gICAgICAgICAgYSA9IGFkZG9uTGlua3MubGVuZ3RoLFxyXG4gICAgICAgICAgYUw7XHJcblxyXG4gICAgICB3aGlsZSAoYS0tKSB7XHJcbiAgICAgICAgYUwgPSBhZGRvbkxpbmtzW2FdO1xyXG4gICAgICAgIGFMLmhyZWYgPSBhZGRvblVSTDtcclxuICAgICAgICBpZiAoYUwuaWQgPT09ICdtb3otYWRkb24tLWNvbnRhY3QnKSBhTC5pbm5lclRleHQgPSBhZGRvblVSTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TG9nTGluaygpIHtcclxuICAgICAgY29uc3QgbG9nTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2ctbWFpbCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9ncycpLnRoZW4obG9ncyA9PiB7XHJcbiAgICAgICAgbGV0IGwgPSBsb2dzID8gbG9ncy5sZW5ndGggOiAwLFxyXG4gICAgICAgICAgICBocmVmID1cclxuICAgICAgICAgICAgICAnbWFpbHRvOnVuZGZseWJpckBnbXguZGU/c3ViamVjdD1UZXh0bWFya2VyJyArXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCcgOiBFcnJvciBMb2dzJykgK1xyXG4gICAgICAgICAgICAgICcmYm9keT0nK1xyXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCgnLSAnICsgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3lvdXJfbXNnJykgKyAnIC1cXG5cXG5cXG5MT0dTOlxcblxcbicpLFxyXG4gICAgICAgICAgICBsb2c7XHJcblxyXG4gICAgICAgIHdoaWxlKGwtLSkge1xyXG4gICAgICAgICAgbG9nID0gbG9nc1tsXTtcclxuICAgICAgICAgIGhyZWYgKz0gbG9nWzFdICsgKGxvZ1syXSA/ICcgKCcgKyBsb2dbMl0gKyAnKScgOiAnJykgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudCgobmV3IERhdGUobG9nWzBdKS50b1VUQ1N0cmluZygpKSArICdcXG4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nTGluay5ocmVmID0gaHJlZjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vdG9nZ2xlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvcicpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdzYXZlZDplbnRyeSc6ICdhZGQnLFxyXG4gICAgICAgICdkZWxldGVkOmVudHJpZXMnOiAndXBkYXRlRnJvbVN0b3JhZ2UnLFxyXG4gICAgICAgICdmaWx0ZXJlZDpoaXN0b3J5JzogJ3Jlc2V0JyxcclxuICAgICAgICAnaW1wb3J0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2NoYW5nZWQ6cGVyLXBhZ2UtY291bnQnOiAnY2hhbmdlQ291bnRQZXJQYWdlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5wYWdlJzogJ2dvdG8nLFxyXG4gICAgICAgICAgJy5wcmV2JzogJ3ByZXYnLFxyXG4gICAgICAgICAgJy5uZXh0JzogJ25leHQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyUGFnZXM6IDEsXHJcbiAgICBudW1iZXJFbnRyaWVzOiAwLFxyXG4gICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiAxMCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVGcm9tU3RvcmFnZSgpO1xyXG4gICAgfSxcclxuICAgIGdvdG8oZSwgZWwpIHtcclxuICAgICAgY29uc3QgbmV3UGFnZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJykgKiAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gbmV3UGFnZSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIG5ld1BhZ2UpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcmV2KCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCAtLXRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIG5leHQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLm51bWJlclBhZ2VzKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsICsrdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgrK3RoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgtLXRoaXMubnVtYmVyRW50cmllcyk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRnJvbVN0b3JhZ2UoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB0aGlzLnBlclBhZ2UgPSBzZXR0aW5ncy5oaXN0b3J5LnBwIHx8IDEwKVxyXG4gICAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4gdGhpcy51cGRhdGUoT2JqZWN0LmtleXMoaGlzdG9yeS5lbnRyaWVzKS5sZW5ndGgpKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGwsIHNpbGVudCkge1xyXG4gICAgICB0aGlzLm51bWJlckVudHJpZXMgPSBsO1xyXG4gICAgICB0aGlzLm51bWJlclBhZ2VzID0gbCA/IE1hdGguY2VpbChsIC8gdGhpcy5wZXJQYWdlKSA6IDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy5udW1iZXJQYWdlcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICAgIGlmICghc2lsZW50KSB0aGlzLmVtaXQoJ3BhZ2luYXRlOmhpc3RvcnknLCB0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0KGwpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgIHRoaXMudXBkYXRlKGwpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yLWxpc3QnKTtcclxuICAgICAgY29uc3QgbCA9IHRoaXMubnVtYmVyRW50cmllcztcclxuICAgICAgQXJyYXkuZnJvbSh1bC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlJykpLmZvckVhY2gobGkgPT4gbGkucmVtb3ZlKCkpO1xyXG5cclxuICAgICAgaWYgKGwgPCB0aGlzLnBlclBhZ2UgKyAxKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwID0gdGhpcy5jdXJyZW50UGFnZTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5udW1iZXJQYWdlcztcclxuICAgICAgY29uc3QgciA9IDcgLSAocGFnZXMgLSAxIC0gcCk7XHJcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgIGNvbnN0IG5leHQgPSB1bC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF07XHJcbiAgICAgIGxldCBpID0gTWF0aC5tYXgoMiwgcCAtIDcpO1xyXG4gICAgICBpZiAociA+IDApIGkgPSBNYXRoLm1heCgyLCBNYXRoLm1pbihpLCBpIC0gcikpO1xyXG4gICAgICBjb25zdCBqID0gTWF0aC5taW4ocGFnZXMsIGkgKyAxNCkgKyAxO1xyXG5cclxuICAgICAgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgMSk7XHJcbiAgICAgIGZvciAoOyBpIDwgajsgaSsrKSB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCBpKTtcclxuICAgICAgaWYgKHBhZ2VzID4gaiAtIDEpIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIHBhZ2VzKTtcclxuXHJcbiAgICAgIHVsLmluc2VydEJlZm9yZShmcmFnLCBuZXh0KTtcclxuICAgIH0sXHJcbiAgICBhcHBlbmRCdXR0b24oZnJhZywgYikge1xyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnLCBiKTtcclxuICAgICAgYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGIpKTtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcclxuICAgICAgaWYgKGIgPT09IHRoaXMuY3VycmVudFBhZ2UpIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZnJhZy5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShwKSB7XHJcbiAgICAgIHRoaXMucGVyUGFnZSA9IHA7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMubnVtYmVyRW50cmllcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ5OiB7XHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIGNyZWF0ZWQob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0LCAnZmlyc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgbGFzdChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdsYXN0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCwgZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5zb3J0KChhLCBiKSA9PiAobmV3IERhdGUob2JqZWN0W2JdW2ZpZWxkXSkpIC0gKG5ldyBEYXRlKG9iamVjdFthXVtmaWVsZF0pKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIGF6KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHphKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCkucmV2ZXJzZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBfc29ydChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5zb3J0KChhLCBiKSA9PiBhLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5pbXBvcnQgX1NPUlQgZnJvbSAnLi9oaXN0b3J5LXNvcnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5JyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ29wZW5lZDp0YWInOiAnaW5pdCcsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICdyZW5kZXInLFxyXG4gICAgICAgICdmYWlsZWQ6c3luYy1lbnRyeSc6ICd1bmRvU3luY1RvZ2dsZScsXHJcbiAgICAgICAgJ3BhZ2luYXRlOmhpc3RvcnknOiAncGFnaW5hdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLmFjdGlvbi1idXR0b24nOiAnZGVsZWdhdGVCdXR0b25BY3Rpb24nLFxyXG4gICAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlU3dpdGNoJyxcclxuICAgICAgICAgICcubmFtZSc6ICdvcGVuJyxcclxuICAgICAgICAgICcuZWRpdCc6ICdlZGl0JyxcclxuICAgICAgICAgICcudmlldyc6ICd2aWV3JyxcclxuICAgICAgICAgICcjc2VhcmNoLXRvZ2dsZSc6ICd0b2dnbGVTZWFyY2gnLFxyXG4gICAgICAgICAgJyNyZW1vdmUtZmlsdGVyJzogJ3JlbW92ZUZpbHRlcicsXHJcbiAgICAgICAgICAnLnRhZ3NfX2l0ZW0nOiAnZmlsdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmNoZWNrbWFyay1hbGwnOiAnY2hlY2ttYXJrQWxsJyxcclxuICAgICAgICAgICcjc29ydC1lbnRyaWVzJzogJ3NvcnQnLFxyXG4gICAgICAgICAgJyNmaWx0ZXItZW50cmllcyc6ICdmaWx0ZXInLFxyXG4gICAgICAgICAgJyNlbnRyaWVzLXBlci1wYWdlJzogJ2NoYW5nZUNvdW50UGVyUGFnZScsXHJcbiAgICAgICAgICAnI3NldC12aWV3JzogJ3NldFZpZXcnLFxyXG4gICAgICAgICAgJyNhY3Rpb24nOiAnb25DaGFuZ2VBY3Rpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXl1cDoge1xyXG4gICAgICAgICAgJy5zZWFyY2gtZW50cmllcyc6ICdzZWFyY2gnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuXHJcbiAgICBuYW1lczogW10sXHJcbiAgICBlbnRyaWVzOiB7fSxcclxuICAgIGVudHJ5VG1wbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJ5LXRlbXBsYXRlJyksXHJcbiAgICBlbnRyaWVzQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpLFxyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG4gICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgIHZpZXdNb2RlOiAnbGlzdCcsXHJcbiAgICBzZWFyY2hUZXJtOiAnJyxcclxuICAgIHNlYXJjaGVkOiBbXSxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZmlsdGVyZWQ6IGZhbHNlLFxyXG4gICAgZmlsdGVyT3B0aW9uc1NldDogZmFsc2UsXHJcblxyXG4gICAgaW5pdCh0YWIpIHtcclxuICAgICAgaWYgKHRhYiAhPT0gJ2hpc3RvcnknKSByZXR1cm47XHJcbiAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbnNTZXQgPSBmYWxzZTtcclxuICAgICAgdGhpcy50YWdzID0gW107XHJcbiAgICB9LFxyXG5cclxuICAgIFsnZGVsZXRlJ10obmFtZXMpIHtcclxuICAgICAgbGV0IG1zZyA9ICdkZWxfY29uZmlybSc7XHJcbiAgICAgIGxldCBsID0gbmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIGlmICh0aGlzLmVudHJpZXNbbmFtZXNbbF1dLmxvY2tlZCkge1xyXG4gICAgICAgICAgbXNnICs9ICdfbG9ja2VkJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKG1zZykpO1xyXG4gICAgICBpZiAoY29uZmlybWVkKSB0aGlzLmVtaXQoJ2RlbGV0ZTplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGNsZWFuKG5hbWVzKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xlYW46ZW50cmllcycsIG5hbWVzKTtcclxuICAgIH0sXHJcbiAgICBkb3dubG9hZChuYW1lcywgdHlwZSwgc3BlYykge1xyXG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2Rvd25sb2FkX29wdGlvbicpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgdHlwZSA9IHNldHRpbmdzWzBdO1xyXG4gICAgICAgICAgc3BlYyA9IHNldHRpbmdzLmxlbmd0aCA9PT0gMiA/IHNldHRpbmdzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdqc29uJykgdGhpcy5leHBvcnQobmFtZXMpO1xyXG4gICAgICAgICAgZWxzZSB0aGlzLmRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdldERhdGEobmFtZXMsIHR5cGUsIHNwZWMpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgbGV0IHRleHQgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSksXHJcbiAgICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdUZXh0bWFya2VyICgnICsgbmFtZXMuam9pbignXycpICsgJykudHh0Jyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyB0ZXh0O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBleHBvcnQobmFtZXMpIHtcclxuICAgICAgbGV0IGJhY2t1cCA9IHsgaGlzdG9yeTogeyBlbnRyaWVzOiB7fSB9IH0sXHJcbiAgICAgICAgICBlbnRyaWVzID0gYmFja3VwLmhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICB3aGlsZSAobmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZXMucG9wKCk7XHJcbiAgICAgICAgICBlbnRyaWVzW25hbWVdID0gaGlzdG9yeS5lbnRyaWVzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrdXAgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoYmFja3VwKSk7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICdUZXh0bWFya2VyLWJhY2t1cC0nICtcclxuICAgICAgICAgIChuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICdfJykpICtcclxuICAgICAgICAgICcuanNvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBiYWNrdXA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHN5bmMobmFtZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdzeW5jOmVudHJ5JywgbmFtZVswXSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG4gICAgdmlzaXQobmFtZXMpIHtcclxuICAgICAgdGhpcy5nZXRVUkxzKG5hbWVzKS50aGVuKHVybHMgPT4gdGhpcy5lbWl0KCdvcGVuOmVudHJpZXMnLCB1cmxzLCBuYW1lcykpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdvcGVuOmVudHJpZXMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfSxcclxuICAgIGVkaXQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2VfZWRpdCcpKTtcclxuICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICBjb25zdCBvbGROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBjb25zdCBhcmVhID0gZWwucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzd2l0Y2gtLXN5bmMnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID9cclxuICAgICAgICAgICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5hbWU6ZW50cnknLCBvbGROYW1lLCBuZXdOYW1lLCBhcmVhKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHZpZXcoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd2aWV3OmVudHJ5JywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgdGFnKG5hbWVzLCB0YWcsIGZvcmNlKSB7XHJcbiAgICAgIGlmICghdGFnICYmICFmb3JjZSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBvID0geyBzeW5jOiBbXSwgbG9jYWw6IFtdIH07XHJcbiAgICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZ0VudHJpZXNbbmFtZV0uc3luY2VkKSBvLnN5bmMucHVzaChuYW1lKTtcclxuICAgICAgICBlbHNlIG8ubG9jYWwucHVzaChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZW1pdCgndGFnOmVudHJpZXMnLCBvLCB0YWcpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhZ3MobmFtZXMpIHtcclxuICAgICAgdGhpcy50YWcobmFtZXMsICcnLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzU2VsZWN0aW9uKCkge1xyXG4gICAgICBsZXQgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbnRyeS1jYjpjaGVja2VkJyksXHJcbiAgICAgICAgICBpID0gY2hlY2tlZC5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAoIWkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGxldCBhY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uJykudmFsdWUsXHJcbiAgICAgICAgICBuYW1lcyA9IFtdO1xyXG5cclxuICAgICAgd2hpbGUoaS0tKSBuYW1lcy5wdXNoKGNoZWNrZWRbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uID09PSAndGFnJykge1xyXG4gICAgICAgIGxldCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykudmFsdWU7XHJcbiAgICAgICAgdGhpcy50YWcobmFtZXMsIHZhbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNwbGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpZmljYXRpb24nKS52YWx1ZS5zcGxpdCgnICcpLFxyXG4gICAgICAgICAgICB0eXBlID0gc3BsaXRbMF0sXHJcbiAgICAgICAgICAgIHNwZWMgPSBzcGxpdFsxXTtcclxuXHJcbiAgICAgICAgIXRoaXNbYWN0aW9uXSB8fCB0aGlzW2FjdGlvbl0obmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyRW50cmllcygpIHtcclxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy5lbnRyeVRtcGwsXHJcbiAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmVudHJpZXNDb250YWluZXIsXHJcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5lbnRyaWVzLFxyXG4gICAgICAgICAgc2VhcmNoVGVybSA9IHRoaXMuc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaFRlcm1MZW5ndGggPSBzZWFyY2hUZXJtID8gc2VhcmNoVGVybS5sZW5ndGggOiAwLFxyXG4gICAgICAgICAgc2VhcmNoZWQgPSAhIXNlYXJjaFRlcm0sXHJcbiAgICAgICAgICBzZWFyY2hlZEZ1bGxUZXh0ID0gdGhpcy5zZWFyY2hlZEZ1bGxUZXh0LFxyXG4gICAgICAgICAgbmFtZXMgPSBzZWFyY2hlZCA/IHRoaXMuc2VhcmNoZWQgOiB0aGlzLm5hbWVzLFxyXG4gICAgICAgICAgbCA9IHNlYXJjaGVkID8gbmFtZXMubGVuZ3RoIDogdGhpcy5wYWdlICogdGhpcy5wZXJQYWdlLFxyXG4gICAgICAgICAgaSA9IHNlYXJjaGVkID8gMCA6IGwgLSB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBjbG9uZSwgZW50cnksIG5hbWUsIG5hbWVGaWVsZCwgaW5wdXQsIGxhYmVsLCBpbmZvQnV0dG9uLCBkZXRhaWxzLCBzZWFyY2hSZXN1bHRzLFxyXG4gICAgICAgICAgYnV0dG9ucywgZWRpdCwgdmlldywgdGFncywgaW1tdXQsIGltbXV0RWwsIGxvY2tlZCwgbG9ja2VkRWwsIHRhZ0VsLCBiLCBqO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsdGVyZWQpIHtcclxuICAgICAgICBuYW1lcyA9IG5hbWVzLmZpbHRlcihuID0+ICEhZW50cmllc1tuXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGwgPSBNYXRoLm1pbihsLCBuYW1lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgY29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwnKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWwpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAoKGksIGopID0+IHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICB0YWdzID0gZW50cnkudGFnID8gZW50cnkudGFnLnNwbGl0KCcgJykgOiBudWxsO1xyXG4gICAgICAgICAgICBsb2NrZWQgPSBlbnRyeS5sb2NrZWQ7XHJcbiAgICAgICAgICAgIGltbXV0ID0gZW50cnkuaW1tdXQ7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgICAgICBjbG9uZS5pZCA9ICdlbnRyeS0nICsgajtcclxuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXTtcclxuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgbGFiZWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcclxuICAgICAgICAgICAgZGV0YWlscyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXTtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaC1yZXN1bHRzJylbMF07XHJcbiAgICAgICAgICAgIGJ1dHRvbnMgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWljay1hY3Rpb24nKTtcclxuICAgICAgICAgICAgZWRpdCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQnKVswXTtcclxuICAgICAgICAgICAgdmlldyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZXcnKVswXTtcclxuICAgICAgICAgICAgdGFnRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWdzJylbMF07XHJcbiAgICAgICAgICAgIGxvY2tlZEVsID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9ja2VkJylbMF07XHJcbiAgICAgICAgICAgIGltbXV0RWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbW11dCcpWzBdO1xyXG4gICAgICAgICAgICBiID0gYnV0dG9ucy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICB3aGlsZShiLS0pIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbYl0uc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lRmllbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xyXG4gICAgICAgICAgICBuYW1lRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLXVybCcsIGVudHJ5LnVybCk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSAnZW50cnktY2InO1xyXG4gICAgICAgICAgICBpbnB1dC5pZCA9ICdlbnRyeS1jYi0nICsgajtcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgdmlldy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbnRyeS1jYi0nICsgaik7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgbG9ja2VkRWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGltbXV0KSBpbW11dEVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhZ3MpIHtcclxuICAgICAgICAgICAgICB0YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIHRhZ0VsLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd0YWdzX19pdGVtJztcclxuICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhZykpO1xyXG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0aXRsZV9maWx0ZXInKSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGFnRWwuaW5uZXJUZXh0ID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkubGFzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvdW50JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubWFya3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAvL2Nsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sb3N0ID8gZW50cnkubG9zdC5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudHJ5LnN5bmNlZCA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5LnN5bmNlZCkge1xyXG4gICAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoZWRGdWxsVGV4dCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZ1bGxUZXh0U2VhcmNoUmVzdWx0cyA9IHRoaXMuZnVsbFRleHRTZWFyY2hSZXN1bHRzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoZnVsbFRleHRTZWFyY2hSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIHJlcywgbWFyaywgcG9zLCBtYXJrVGV4dCwgbWFya1RleHRFbCwgaGlnaGxpZ2h0LCB0MSwgdDIsIHQzO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoOyByIDwgZnVsbFRleHRTZWFyY2hSZXN1bHRzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcyA9IGZ1bGxUZXh0U2VhcmNoUmVzdWx0c1tyXTtcclxuICAgICAgICAgICAgICAgICAgbWFyayA9IGVudHJ5Lm1hcmtzW3Jlcy5tYXJrXTtcclxuICAgICAgICAgICAgICAgICAgcG9zID0gcmVzLnBvcztcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHQgPSBtYXJrLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHQxID0gbWFya1RleHQuc3Vic3RyaW5nKE1hdGgubWF4KHBvcy0xNiwgMCksIHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgIHQyID0gbWFya1RleHQuc3Vic3RyKHBvcywgc2VhcmNoVGVybUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgIHQzID0gbWFya1RleHQuc3Vic3RyKHBvcytzZWFyY2hUZXJtTGVuZ3RoLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgIHQxID0gdDEgPyAnLi4uICcgKyB0MSA6IHQxO1xyXG4gICAgICAgICAgICAgICAgICB0MyA9IHQzID8gdDMgKyAnIC4uLicgOiB0MztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0LmNsYXNzTmFtZSA9ICdoaWdobGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDIpKTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MSkpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodDMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQobWFya1RleHRFbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoaSwgbC1pLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUhlYWRlckZpZWxkcyhsKSB7XHJcbiAgICAgIGNvbnN0IG5vRW50cmllc0hpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8tZW50cmllcycpO1xyXG4gICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1hY3Rpb25zJyk7XHJcbiAgICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydCcpO1xyXG4gICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50Jyk7XHJcbiAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldycpO1xyXG4gICAgICBjb25zdCBwcFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLXBlci1wYWdlJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbWFyay1hbGwtY29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnN0IG1ldGhfMCA9ICFsID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8xID0gbCA+IDAgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzIgPSBsID4gMiA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMyA9IGwgPiAxMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcblxyXG4gICAgICBub0VudHJpZXNIaW50LmNsYXNzTGlzdFttZXRoXzBdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgYWN0aW9ucy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHNvcnQuY2xhc3NMaXN0W21ldGhfMl0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjb3VudC5jbGFzc0xpc3RbbWV0aF8zXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHZpZXcuY2xhc3NMaXN0W21ldGhfMV0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBjaGVja2FsbC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcy1jb3VudCcpLmlubmVyVGV4dCA9IGw7XHJcblxyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuICAgICAgICBjb25zdCBwcCA9IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTA7XHJcbiAgICAgICAgcHBTZWxlY3QudmFsdWUgPSBwcDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0RmlsdGVyT3B0aW9ucygpIHtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uc1NldCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKTtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgY29uc3QgYWxsVGFncyA9IFtdO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgbGV0IHRhZ3M7XHJcblxyXG4gICAgICBzZWxlY3QuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xyXG4gICAgICBwbGFjZWhvbGRlck9wdGlvbi5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjQnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIHRhZ3MgPSBlbnRyaWVzW25hbWVdLnRhZztcclxuICAgICAgICB0YWdzID0gdGFncyA/IHRhZ3Muc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgaWYgKCFhbGxUYWdzLmluY2x1ZGVzKHRhZykpIGFsbFRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWFsbFRhZ3MubGVuZ3RoICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdkZXRhaWxfbm90YWcnKSwgeyBkaXNhYmxlZDogdHJ1ZSwgaWQ6ICdmaWx0ZXItb3B0LW5vdGFnJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHRoaXMuYWRkRmlsdGVyT3B0KHRhZywgdGFnKSk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC10YWdsZXNzJykpIHtcclxuICAgICAgICAgIHRoaXMuYWRkRmlsdGVyT3B0KCcnLCBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgndDUxMjUnKSwgeyBpZDogJ2ZpbHRlci1vcHQtdGFnbGVzcycgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkRmlsdGVyT3B0KHRhZywgdGV4dCwgYXR0cnMpIHtcclxuICAgICAgaWYgKHRoaXMudGFncy5pbmNsdWRlcyh0YWcpKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICBvcHQudmFsdWUgPSB0YWc7XHJcbiAgICAgIG9wdC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpZiAoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhIGluIGF0dHJzKSBvcHQuc2V0QXR0cmlidXRlKGEsIGF0dHJzW2FdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudGFncy5sZW5ndGggJiYgdGFnKSB7XHJcbiAgICAgICAgY29uc3Qgbm90YWdGaWx0ZXJPcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW9wdC1ub3RhZycpO1xyXG4gICAgICAgIGlmIChub3RhZ0ZpbHRlck9wdCkgc2VsZWN0LnJlbW92ZUNoaWxkKG5vdGFnRmlsdGVyT3B0KTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZykgdGhpcy50YWdzLnB1c2godGFnKTtcclxuICAgIH0sXHJcbiAgICBnZXRUZXh0KG5hbWVzLCBzcGVjKSB7XHJcbiAgICAgIGxldCBhbGxfbWFya3NfcGx1c19tZXRhID0gc3BlYyA9PT0gJyttZXRhJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19wbHVzX2xvc3QgPSBzcGVjID09PSAnK2xvc3QnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgPSBzcGVjID09PSAnK25vdGVzJyxcclxuICAgICAgICAgIGFsbF9tYXJrc19sb3N0ID0gc3BlYyA9PT0gJ2xvc3QnLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJywgMiwgM10sXHJcblxyXG4gICAgICAgICAgcmVqZWN0ID0gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoc3BlYykgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9IHNwZWM7XHJcbiAgICAgICAgICAgIH0gOiBzcGVjID09PSAnYycgP1xyXG4gICAgICAgICAgICBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KTtcclxuICAgICAgICAgICAgfSA6IG51bGwsXHJcblxyXG4gICAgICAgICAgbmV3TGluZSA9ICdcXHJcXG4nLFxyXG4gICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgIG5vdGUgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm90ZScpLFxyXG4gICAgICAgICAgdGV4dCA9ICcnLFxyXG4gICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgbm90ZVRleHQsIGVudHJ5LCBtYXJrcywgbWFyaywgbG9zdCwgbmFtZSwgbSwgbiwgajtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcztcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIG1hcmtzID0gZW50cnkubWFya3M7XHJcbiAgICAgICAgICBsb3N0ID0gZW50cnkubG9zdDtcclxuICAgICAgICAgIG0gPSBtYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICBuID0gbG9zdC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGxfbWFya3NfbG9zdCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YSB8fCBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBuYW1lICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICAnVVJMOiAnICsgZW50cnkudXJsICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgncGFnZV90aXRsZScpICsgJzogJyArIGVudHJ5LnRpdGxlICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnY3JlYXRlZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5LmZpcnN0KS50b0xvY2FsZVN0cmluZygpKSArIG5ld0xpbmUgK1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2xhc3RfbW9kaWZpZWQnKSArICc6ICcgKyB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKSArXHJcbiAgICAgICAgICAgICAgICBuZXdMaW5lICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBtOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbWFya3Nbal07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyZWplY3QgJiYgcmVqZWN0KG1hcmsua2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dCArPSAnLS0tJyArIG5ld0xpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRleHQgKz0gbWFyay50ZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuJykgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzICYmIG1hcmsubm90ZSkge1xyXG4gICAgICAgICAgICAgICAgbm90ZVRleHQgPSBtYXJrLm5vdGUudGV4dCB8fCBtYXJrLm5vdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgICcgKyBub3RlICsgJzonICsgbmV3TGluZSArICcgICcgKyBub3RlVGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbiAgJykgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhbGxfbWFya3NfbG9zdCB8fCBhbGxfbWFya3NfcGx1c19sb3N0KSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG9zdF9tYXJrcycpICsgJzonICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgICAgICBtYXJrID0gbG9zdFtqXTtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZXh0ICs9IG5ld0xpbmVzICsgbmV3TGluZXMgKyBuZXdMaW5lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ3RleHQnKSByZXR1cm4gdGhpcy5nZXRUZXh0KG5hbWVzLCBzcGVjKTtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMsXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGRhdGEgPSAnJyxcclxuICAgICAgICAgICAgbmV3TGluZXMgPSAnXFxyXFxuXFxyXFxuJyxcclxuICAgICAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSBkYXRhICs9IGVudHJpZXNbbmFtZXNbaV1dW3R5cGVdICsgbmV3TGluZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRVUkxzKG5hbWVzKSB7XHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdoaXN0b3J5JykudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgdXJscyA9IFtdLFxyXG4gICAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHVybHMucHVzaChlbnRyaWVzW25hbWVzW2ldXS51cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJscztcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0ZXJtID0gZWwudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3Qgc2VhcmNoVHlwZSA9IGVsLmdldEF0dHJpYnV0ZSA/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgOiAnJztcclxuICAgICAgY29uc3QgY291bnRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgY2xhc3NNZXRoID0gdGVybSA/ICdhZGQnIDogJ3JlbW92ZSc7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdG9nZ2xlJyk7XHJcbiAgICAgIHRoaXMuc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkucmVuZGVyRW50cmllcygpO1xyXG4gICAgICBjb3VudFNlbGVjdC5jbGFzc0xpc3RbY2xhc3NNZXRoXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRvZ2dsZS5jbGFzc0xpc3RbY2xhc3NNZXRoXSgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTZWFyY2godGVybSwgc2VhcmNoVHlwZSkge1xyXG4gICAgICB0ZXJtID0gdHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnID8gdGVybSA6IHRoaXMuc2VhcmNoVGVybTtcclxuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHNlYXJjaENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jb3VudCcpO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkID0gW107XHJcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQnKTtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICBzZWFyY2hDb3VudC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkJyk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFR5cGUgPT09ICdmdWxsLXRleHQnKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRnVsbFRleHQodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoaXN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaGVkLS1mdWxsLXRleHQnKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoQnlOYW1lKHRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZEZ1bGxUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9IHRoaXMuc2VhcmNoZWQubGVuZ3RoIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaEJ5TmFtZSh0ZXJtKSB7XHJcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGgsIGkgPSAwLCBuYW1lO1xyXG5cclxuICAgICAgZm9yKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcclxuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXJtKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWQucHVzaChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWFyY2hGdWxsVGV4dCh0ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgbmFtZSwgbWFya3MsIGksIG1hcmtUZXh0LCBwb3MsIGZvdW5kO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuZnVsbFRleHRTZWFyY2hSZXN1bHRzID0ge307XHJcblxyXG4gICAgICBmb3IgKG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIG1hcmtzID0gZW50cmllc1tuYW1lXS5tYXJrcztcclxuICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbWFya1RleHQgPSBtYXJrc1tpXS50ZXh0O1xyXG4gICAgICAgICAgcG9zID0gbWFya1RleHQudG9Mb3dlckNhc2UoKS5zZWFyY2godGV4dCk7XHJcbiAgICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0gPSByZXN1bHRzW25hbWVdIHx8IFtdO1xyXG4gICAgICAgICAgICByZXN1bHRzW25hbWVdLnB1c2goeyBtYXJrOiBpLCBwb3MgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNlYXJjaChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tbmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWVudHJpZXMtLWZ1bGwtdGV4dCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGVybSkgdGhpcy5zZWFyY2gobnVsbCwgeyB2YWx1ZTogJycgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VDb3VudFBlclBhZ2UoZSwgZWwpIHtcclxuICAgICAgbGV0IHAgPSB0aGlzLnBlclBhZ2UgPSBlbC52YWx1ZSAqIDE7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsIHApO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgIH0sXHJcbiAgICBzZXRWaWV3KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMnKTtcclxuICAgICAgY29uc3QgdmFsID0gZWwudmFsdWU7XHJcbiAgICAgIGlmICh2YWwgPT09ICdsaXN0JykgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICBlbHNlIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbGVkLWxpc3QnKTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6dmlldy1zZXR0aW5nJywgdmFsKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFZpZXcodmlldykge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0LXZpZXcnKS52YWx1ZSA9IHZpZXc7XHJcbiAgICAgIHRoaXMuc2V0VmlldyhudWxsLCB7IHZhbHVlOiB2aWV3IH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlQWN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC52YWx1ZSA9PT0gJ3RhZycpIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpLmZvY3VzKCksIDApO1xyXG4gICAgfSxcclxuICAgIHNvcnQoZSwgZWwpIHtcclxuICAgICAgbGV0IHNvcnRlZCA9IHRoaXMuc29ydGVkID0gZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNvcnQtc2V0dGluZycsIHNvcnRlZCk7XHJcbiAgICAgIHRoaXMuc2V0dXBTb3J0KHNvcnRlZCkucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldHVwU29ydChzb3J0ZWQpIHtcclxuICAgICAgc29ydGVkID0gc29ydGVkLnNwbGl0KCctJyk7XHJcbiAgICAgIHRoaXMubmFtZXMgPSBfU09SVC5ieVtzb3J0ZWRbMF1dW3NvcnRlZFsxXV0odGhpcy5vcmlnRW50cmllcyk7XHJcbiAgICAgIHRoaXMuc29ydFNlYXJjaFJlc3VsdHMoKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGVsLm5vZGVOYW1lID09PSAnU1BBTicgPyBlbC5maXJzdENoaWxkLmRhdGEgOiBlbC52YWx1ZTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkRW50cmllcyA9IHt9O1xyXG4gICAgICBsZXQgZW50cnksIHJ4LCBjID0gMDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3IgKGxldCBuYW1lIGluIGVudHJpZXMpIHtcclxuICAgICAgICBlbnRyeSA9IGVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgcnggPSBuZXcgUmVnRXhwKCdeJytmaWx0ZXIrJyR8XicrZmlsdGVyKydcXFxcc3xcXFxccycrZmlsdGVyKydcXFxcc3xcXFxccycrZmlsdGVyKyckJywgJ2cnKTtcclxuICAgICAgICBpZiAoKGZpbHRlciAmJiBlbnRyeS50YWcgJiYgZW50cnkudGFnLnNlYXJjaChyeCkgIT09IC0xKSB8fCAoIWVudHJ5LnRhZyAmJiBmaWx0ZXIgPT0gJycpKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEVudHJpZXNbbmFtZV0gPSBlbnRyeTtcclxuICAgICAgICAgIGMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbnRyaWVzID0gZmlsdGVyZWRFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIHRoaXMuZW1pdCgnZmlsdGVyZWQ6aGlzdG9yeScsIGMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUZpbHRlcihlLCBlbCkge1xyXG4gICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWVudHJpZXMnKS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgdGhpcy5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgdGhpcy5uYW1lcy5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIHNvcnRTZWFyY2hSZXN1bHRzKCkge1xyXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoZWQubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcztcclxuICAgICAgdGhpcy5zZWFyY2hlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgYSA9IG5hbWVzLmluZGV4T2YoYSk7XHJcbiAgICAgICAgYiA9IG5hbWVzLmluZGV4T2YoYik7XHJcbiAgICAgICAgaWYgKGEgPT0gYikgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjaGVja21hcmtBbGwoZSwgZWwpIHtcclxuICAgICAgbGV0IGRpcmVjdGx5ID0gdHlwZW9mIGVsID09PSAnYm9vbGVhbicsXHJcbiAgICAgICAgICBjaGVja2VkID0gZGlyZWN0bHkgPyBlbCA6IGVsLmNoZWNrZWQsXHJcbiAgICAgICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLFxyXG4gICAgICAgICAgaSA9IGlucHV0cy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSBpbnB1dHNbaV0uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZGVsZWdhdGVCdXR0b25BY3Rpb24oZSwgZWwpIHtcclxuICAgICAgbGV0IGFjdGlvbiA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpb24nKSxcclxuICAgICAgICAgIG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG5cclxuICAgICAgbmFtZSA9IG5hbWUgPyBbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU3dpdGNoKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLXN5bmMnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGVCdXR0b25BY3Rpb24oZSwgZWwpO1xyXG4gICAgfSxcclxuICAgIHVuZG9TeW5jVG9nZ2xlKG5hbWUpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC0tc3luY1tkYXRhLW5hbWU9XCInICsgbmFtZSArICdcIl0nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHRoaXMucmVzdW1lKCk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMuZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXMgPSBzdG9yYWdlLmhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgc29ydGVkID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnNvcnRlZCB8fCB0aGlzLnNvcnRlZCxcclxuICAgICAgICAgICAgdmlldyA9IHN0b3JhZ2Uuc2V0dGluZ3MuaGlzdG9yeS52aWV3IHx8IHRoaXMudmlld01vZGUsXHJcbiAgICAgICAgICAgIGw7XHJcbiAgICAgICAgdGhpcy5zb3J0ZWQgPSBzb3J0ZWQ7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKTtcclxuICAgICAgICB0aGlzLnNldHVwVmlldyh2aWV3KTtcclxuICAgICAgICBsID0gdGhpcy5uYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBTZWFyY2goKS50b2dnbGVIZWFkZXJGaWVsZHMobCkudGhlbigoKSA9PiB0aGlzLnJlbmRlckVudHJpZXMoKS5zZXRGaWx0ZXJPcHRpb25zKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0ZShwYWdlKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUVudHJ5KGVudHJ5KSB7XHJcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5W2RhdGEtbmFtZT1cIicgKyBlbnRyeS5uYW1lICsgJ1wiXScpO1xyXG5cclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3JlYXRlZCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5LmZpcnN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXN0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubGFzdDtcclxuICAgICAgZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgIC8vZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6aGlzdG9yeSc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICd1cGRhdGVFeHBvcnRMaW5rcycsXHJcbiAgICAgICAgJ3N5bmNlZDplbnRyeSc6ICd1cGRhdGVFeHBvcnRMaW5rcydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWJ1dHRvbic6ICd0cmlnZ2VyRmlsZUlucHV0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlOiB7XHJcbiAgICAgICAgICAnLmltcG9ydC1maWxlJzogJ2hhbmRsZUZpbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZWRvd246IHtcclxuICAgICAgICAgICcuZXhwb3J0LWJ1dHRvbic6ICd1cGRhdGVFeHBvcnROYW1lJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy51cGRhdGVFeHBvcnRMaW5rcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbXBvcnQ6IGZ1bmN0aW9uKHN0b3JlU3RyaW5nLCB0eXBlKSB7XHJcbiAgICAgIHZhciBwYXJzZWRTdHJpbmc7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHBhcnNlZFN0cmluZyA9IEpTT04ucGFyc2Uoc3RvcmVTdHJpbmcpO1xyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9wYXJzZScpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcnNlZFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnaW1wb3J0OnN0b3JhZ2UnLCBwYXJzZWRTdHJpbmcsIHR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUZhaWx1cmUoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRyaWdnZXJGaWxlSW5wdXQ6IGZ1bmN0aW9uKGUsIGVsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtLScgKyBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpKS5jbGljaygpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUZpbGUoZSwgZWwpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCksXHJcbiAgICAgICAgICBmaWxlID0gZWwuZmlsZXNbMF0sXHJcbiAgICAgICAgICBzaXplID0gZmlsZS5zaXplIC8gMTAwMDAwMCxcclxuICAgICAgICAgIHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgbW9kID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzaXplID4gNTApXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplJykpO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09ICdzeW5jJyAmJiBzaXplID4gMC4wOTkpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5RmFpbHVyZShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZXJyb3JfZmlsZV9zaXplX3N5bmMnKSk7XHJcblxyXG4gICAgICBpZiAoZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCkgIT09ICdqc29uJylcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX2Zvcm1hdCcpKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBtb2QuaW1wb3J0KGUudGFyZ2V0LnJlc3VsdCwgdHlwZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSkoZmlsZSk7XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5RmFpbHVyZShyZWFzb24pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1lcnJvcicpLmlubmVyVGV4dCA9IHJlYXNvbjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlRXhwb3J0TGlua3MoKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWxvY2FsJyk7XHJcbiAgICAgIGNvbnN0IHN5bmNlZERhdGFMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1zeW5jZWQnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvY2FsX3N0b3JhZ2UnKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxvY2FsRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBfU1RPUkUuZ2V0KCdzeW5jZWRfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgc3luY2VkRGF0YUxpbmsuaHJlZiA9ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRXhwb3J0TmFtZShlLCBlbCkge1xyXG4gICAgICBlbC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICdUZXh0bWFya2VyLWRhdGEtJyArXHJcbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSArICctJyArXHJcbiAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICcuanNvbidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX0xPR19LRVlTIGZyb20gJy4uLy4uLy4uL2RhdGEvbG9nLWtleXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdsb2cnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnI2NsZWFyLWxvZ3MnOiAnY2xlYXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMubG9nKCk7XHJcbiAgICB9LFxyXG4gICAgbG9nKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsb2dzID0gbG9ncyB8fCBbXTtcclxuICAgICAgICBsZXQgdGFibGVCb2R5ID0gdGhpcy5lbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGJvZHknKVswXSxcclxuICAgICAgICAgICAgbCA9IGxvZ3MubGVuZ3RoLFxyXG4gICAgICAgICAgICBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG4gICAgICAgICAgICB0ciwgdGRfZGF0ZSwgdGRfbXNnLCBub2RlX2RhdGUsIG5vZGVfbXNnLCBsb2csIHRpbWUsIG1zZywgcmVhc29uO1xyXG5cclxuICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdub2xvZ3MnKTtcclxuICAgICAgICAgIHdoaWxlKGwtLSkge1xyXG4gICAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgICBtc2cgPSBsb2dbMV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnbnVtYmVyJykgbXNnID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoX0xPR19LRVlTLmdldEtleUJ5VmFsdWUobG9nWzFdKSk7XHJcbiAgICAgICAgICAgIC8vJ251Jyx7eWVhcjonbnVtZXJpYycsbW9udGg6JzItZGlnaXQnLGRheTonMi1kaWdpdCcsaG91cjonbnVtZXJpYycsc2Vjb25kOidudW1lcmljJyxtaW51dGU6J251bWVyaWMnfVxyXG4gICAgICAgICAgICB0aW1lID0gdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcoKG5ldyBEYXRlKGxvZ1swXSkpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRkX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICB0ZF9tc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICBub2RlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aW1lKTtcclxuICAgICAgICAgICAgbm9kZV9tc2cgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtc2cpO1xyXG5cclxuICAgICAgICAgICAgdGRfZGF0ZS5hcHBlbmRDaGlsZChub2RlX2RhdGUpO1xyXG4gICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQobm9kZV9tc2cpO1xyXG4gICAgICAgICAgICBpZiAobG9nWzJdKSB7XHJcbiAgICAgICAgICAgICAgcmVhc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgLy9yZWFzb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobG9nWzJdKSk7XHJcbiAgICAgICAgICAgICAgcmVhc29uLmlubmVyVGV4dCA9IGxvZ1syXTtcclxuICAgICAgICAgICAgICB0ZF9tc2cuYXBwZW5kQ2hpbGQocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9kYXRlKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRfbXNnKTtcclxuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZUJvZHkuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnbm9sb2dzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhcjpsb2dzJyk7XHJcbiAgICB9LFxyXG4gICAgb3B0aW1pemVEYXRlU3RyaW5nKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIChkYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoL14oXFxkezF9KShcXER7MX0pLywgKG0sIHAsIHEpPT4gJzAnICsgcCArIHEpXHJcbiAgICAgICAgLnJlcGxhY2UoLyhcXER7MX0pKFxcZHsxfVxcRHsxfSkvZywgKG0sIHAsIHEpID0+IHAgKyAnMCcgKyBxKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9NQVJLRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXksIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgIHRoaXMuc3R5bGVzID0ge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGN1c3RvbUJnQ29sb3IsXHJcbiAgICAgICdjb2xvcic6IHVuZGVmaW5lZCxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXNpemUnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LWZhbWlseSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC1zdHlsZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtZGVjb3JhdGlvbic6IHVuZGVmaW5lZCxcclxuICAgICAgJ3RleHQtc2hhZG93JzogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0ge1xyXG4gICAgICB4OiAnMXB4JyxcclxuICAgICAgeTogJzFweCcsXHJcbiAgICAgIGJsdXI6ICcxcHgnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4gdGhpcy5pbmplY3QoKS5wcmV2aWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHJldHVybiBfU1RPUkUuZ2V0KCdtYXJrZXJzJykudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbWFya2Vyc1t0aGlzLmtleV07XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nU3R5bGUgPSBtYXJrZXIgPyBtYXJrZXIuc3R5bGUgOiBudWxsO1xyXG5cclxuICAgICAgdGhpcy5hdXRvbm90ZSA9IG1hcmtlciAmJiBtYXJrZXIuYXV0b25vdGUgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICBpZiAoIWV4aXN0aW5nU3R5bGUpIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgZWxzZSB0aGlzLnN0eWxlID0gZXhpc3RpbmdTdHlsZTtcclxuXHJcbiAgICAgIGxldCBzdHlsZXMgPSB0aGlzLnN0eWxlLnNwbGl0KCc7JyksXHJcbiAgICAgICAgICBpID0gc3R5bGVzLmxlbmd0aCxcclxuICAgICAgICAgIHN0eWxlLCBzdHlsZVNwbGl0LCB0ZXh0U2hhZG93O1xyXG5cclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHN0eWxlID0gc3R5bGVzW2ldO1xyXG4gICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgc3R5bGVTcGxpdCA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlc1tzdHlsZVNwbGl0WzBdXSA9IHN0eWxlU3BsaXRbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRleHRTaGFkb3cgPSB0aGlzLnN0eWxlc1sndGV4dC1zaGFkb3cnXSkgJiYgdGV4dFNoYWRvdyAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgbGV0IHNoYWRvd1NwbGl0ID0gdGV4dFNoYWRvdy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnggPSBzaGFkb3dTcGxpdFswXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy55ID0gc2hhZG93U3BsaXRbMV07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYmx1ciA9IHNoYWRvd1NwbGl0WzJdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmNvbG9yID0gc2hhZG93U3BsaXRbM107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBpbmplY3QoKSB7XHJcbiAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICBzdHlsZXMgPSB0aGlzLnN0eWxlcyxcclxuICAgICAgICBiZ0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLWNvbG9yJyksXHJcbiAgICAgICAgY29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNvbG9yJyksXHJcbiAgICAgICAgYm9yZGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yJyksXHJcbiAgICAgICAgYXV0b25vdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLFxyXG4gICAgICAgIGJnID0gc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICAgICAgY29sb3IgPSBzdHlsZXNbJ2NvbG9yJ10sXHJcbiAgICAgICAgYm9yZGVyID0gc3R5bGVzWydib3JkZXItYm90dG9tJ10sXHJcbiAgICAgICAgYXV0b25vdGVDb2xvciA9IHRoaXMuYXV0b25vdGUgfHwgJycsXHJcbiAgICAgICAgc2hhZG93LCBzaGFkb3dTZWxlY3QsIGk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPSB0aGlzLmF1dG9ub3RlO1xyXG4gICAgYXV0b25vdGVJbnB1dC52YWx1ZSA9IGF1dG9ub3RlQ29sb3IgfHwgJ3llbGxvdyc7XHJcbiAgICBhdXRvbm90ZUlucHV0LmRpc2FibGVkID0gIWF1dG9ub3RlQ29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFiZztcclxuICAgIGJnSW5wdXQudmFsdWUgPSBiZyB8fCAnI2ZmZmZmZic7XHJcbiAgICBiZ0lucHV0LmRpc2FibGVkID0gIWJnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3ItY2hlY2tib3gnKS5jaGVja2VkID0gISFjb2xvcjtcclxuICAgIGNvbG9ySW5wdXQudmFsdWUgPSBjb2xvciB8fCAnIzAwMDAwMCc7XHJcbiAgICBjb2xvcklucHV0LmRpc2FibGVkID0gIWNvbG9yO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJvcmRlcjtcclxuICAgIGJvcmRlcklucHV0LnZhbHVlID0gYm9yZGVyIHx8ICcxcHggc29saWQgI2ZmMDAwMCc7XHJcbiAgICBib3JkZXJJbnB1dC5kaXNhYmxlZCA9ICFib3JkZXI7XHJcblxyXG4gICAgWydmb250LXNpemUnLCAnZm9udC1mYW1pbHknLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICd0ZXh0LWRlY29yYXRpb24nXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wKS52YWx1ZSA9IHN0eWxlc1twcm9wXSB8fCAnZGVmYXVsdCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaGFkb3dTZWxlY3QgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtc2hhZG93Jyk7XHJcbiAgICBzaGFkb3cgPSBzdHlsZXNbJ3RleHQtc2hhZG93J107XHJcbiAgICBpID0gIXNoYWRvdyA/IDAgOiBzaGFkb3cgPT09ICdub25lJyA/IDIgOiAxO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgIHNoYWRvd1NlbGVjdC5jaGlsZHJlbltpXS5jbGljaygpO1xyXG5cclxuICAgIFsneCcsICd5JywgJ2JsdXInLCAnY29sb3InXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3ctJyArIHByb3ApLnZhbHVlID0gbWFya2VyLnNoYWRvd1twcm9wXS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwcmV2aWV3KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKS5zdHlsZSA9IHRoaXMuc3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHVwZGF0ZShlbCkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc0xpc3QsXHJcbiAgICAgICAgcHJvcCA9IGVsLm5hbWUsXHJcbiAgICAgICAgdmFsO1xyXG5cclxuICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdjc3MtY29sb3InKSkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSBwcm9wID09PSAnYm9yZGVyLWJvdHRvbScgPyAnMXB4IHNvbGlkICcgKyB2YWwgOiB2YWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdycpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya2VyID0gdGhpcztcclxuXHJcbiAgICAgICAgc3dpdGNoKHZhbCkge1xyXG4gICAgICAgICAgY2FzZSAnbm9uZSc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSAnbm9uZSc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGVmYXVsdCc6IG1hcmtlci5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB1bmRlZmluZWQ7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnc2hhZG93JzogbWFya2VyLnNldFNoYWRvdygpOyBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNsYXNzZXMuY29udGFpbnMoJ3NoYWRvdy12YWx1ZScpKSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXB4LXZhbHVlJykpXHJcbiAgICAgICAgICB2YWwgKz0gJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkb3dbcHJvcF0gPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTaGFkb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvcmRlci1ib3R0b20nKSB7XHJcbiAgICAgIHZhbCA9ICcxcHggc29saWQgJyArIGVsLnZhbHVlO1xyXG4gICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWwgPSBlbC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICh2YWwgPT09ICdkZWZhdWx0JyB8fCAhdGhpcy5pc1ZhbGlkKHByb3AsIHZhbCkpXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNldFN0eWxlKCkucHJldmlldygpO1xyXG4gIH1cclxuICBpc1ZhbGlkKHByb3AsIHZhbCkge1xyXG4gICAgbGV0IHZhbGlkO1xyXG5cclxuICAgIHN3aXRjaChwcm9wKSB7XHJcbiAgICAgIGNhc2UgJ2JhY2tncm91bmQtY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbG9yJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdib3JkZXItYm90dG9tJzogdmFsaWQgPSAvXiNbMC05QS1GXXs2fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXNpemUnOiB2YWxpZCA9IC9eWzAtOV17MSwyfXB4JC8udGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1mYW1pbHknOiB2YWxpZCA9IC9eW2EteixcXHMtXXs1LDQwfSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LXdlaWdodCc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc3R5bGUnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0LWRlY29yYXRpb24nOiB2YWxpZCA9IC9eW2Etei1dezcsMTJ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtc2hhZG93JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAneCc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3knOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBjYXNlICdibHVyJzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG4gIHNldFNoYWRvdygpIHtcclxuICAgIHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddID0gdGhpcy5zaGFkb3cueCArICcgJyArIHRoaXMuc2hhZG93LnkgKyAnICcgKyB0aGlzLnNoYWRvdy5ibHVyICsgJyAnICsgdGhpcy5zaGFkb3cuY29sb3I7XHJcbiAgfVxyXG4gIHNldFN0eWxlKCkge1xyXG4gICAgbGV0IHN0eWxlID0gJycsIHZhbDtcclxuXHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc3R5bGVzKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuc3R5bGVzW2ldO1xyXG4gICAgICBpZiAodmFsKSBzdHlsZSArPSBpICsgJzonICsgdmFsICsgJzsnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCkge1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWwsXHJcblx0XHRldmVudHM6IHtcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICdsaSc6ICd0b2dnbGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblx0XHR9LFxyXG4gICAgcGFnZU5hdjogbnVsbCxcclxuICAgIGN1cnJlbnQ6IG51bGwsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMucGFnZU5hdiA9IGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYWdlLW5hdicpO1xyXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudCA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xyXG4gICAgICB0aGlzLm9wZW4oY3VycmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZShlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpIHx8IHRoaXMuY3VycmVudCA9PSBlbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudCkgdGhpcy5jbG9zZSh0aGlzLmN1cnJlbnQpO1xyXG5cclxuICAgICAgdGhpcy5vcGVuKGVsKTtcclxuICAgIH0sXHJcbiAgICBvcGVuKGVsKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldElkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW5lZDp0YWInLCB0YXJnZXRJZCk7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IGVsO1xyXG4gICAgICBpZiAodGhpcy5wYWdlTmF2KSB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSAnVGV4dG1hcmtlciAtICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSh0YXJnZXRJZCk7XHJcbiAgICB9LFxyXG4gICAgY2xvc2UoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tYXJrZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdpbXBvcnRlZDpzZXR0aW5ncyc6ICd1cGRhdGUnLFxyXG4gICAgICAgICd1cGRhdGVkOmJnLWNvbG9yLXNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6Y3VzdG9tLXNlYXJjaC1zZXR0aW5ncyc6ICdzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MnLFxyXG4gICAgICAgICdzZXQtYXJlYXMtYWZ0ZXItc3luYy1jaGFuZ2UnOiAndXBkYXRlJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY3NzJzogJ2NoYW5nZVN0eWxlJyxcclxuICAgICAgICAgICcjY3VzdG9taXplZC1rZXknOiAndXBkYXRlTWFya2VyJyxcclxuICAgICAgICAgICcjYWRkLWtleSc6ICdhZGRNYXJrZXInLFxyXG4gICAgICAgICAgJyNyZW1vdmUta2V5JzogJ3JlbW92ZU1hcmtlcicsXHJcbiAgICAgICAgICAnLm1hcmstb3B0JzogJ2NoYW5nZU1hcmtNZXRob2QnLFxyXG4gICAgICAgICAgJy5zYy1jYic6ICd0b2dnbGVTaG9ydGN1dCcsXHJcbiAgICAgICAgICAnLnNob3J0Y3V0LXNlbGVjdCc6ICdjaGFuZ2VTaG9ydGN1dCcsXHJcbiAgICAgICAgICAnLnNhdmUtb3B0JzogJ2NoYW5nZVNhdmVPcHQnLFxyXG4gICAgICAgICAgJy5uYW1pbmctb3B0JzogJ2NoYW5nZU5hbWluZ09wdCcsXHJcbiAgICAgICAgICAnI25vdGVzLW5ldyc6ICd0b2dnbGVTYXZlTm90ZU9wdCcsXHJcbiAgICAgICAgICAnLmN1c3RvbWl6ZS1xdWlja2J1dHRvbnMnOiAnY2hhbmdlUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAgICAgJy5kb3dubG9hZC1xdWlja2J1dHRvbi1vcHQnOiAnc3dpdGNoUXVpY2tidXR0b25PcHQnLFxyXG4gICAgICAgICAgJy5jdG0tY2InOiAndG9nZ2xlQ3RtJyxcclxuICAgICAgICAgICcubm90ZXMtY2InOiAndG9nZ2xlTm90ZXMnLFxyXG4gICAgICAgICAgJy5taXNjLWNiJzogJ3RvZ2dsZU1pc2MnLFxyXG4gICAgICAgICAgJy50YmJwb3dlci1vcHQnOiAndG9nZ2xlVEJCUG93ZXJPcHQnLFxyXG4gICAgICAgICAgJy50bXVpcG9zJzogJ2NoYW5nZVRtdWlQb3NpdGlvbk9wdCcsXHJcbiAgICAgICAgICAnI3ByaXZhdGUtc2F2ZSc6ICd0b2dnbGVQcml2U2F2ZScsXHJcbiAgICAgICAgICAnI2F1dG8tbm90ZSc6ICd0b2dnbGVBdXRvTm90ZU9wdCcsXHJcbiAgICAgICAgICAnI2ltbXV0JzogJ3RvZ2dsZUltbXV0T3B0JyxcclxuICAgICAgICAgICcjZHJvcC1sb3NzZXMnOiAndG9nZ2xlRHJvcExvc3Nlc09wdCcsXHJcbiAgICAgICAgICAnI2F1dG9ub3RlLWNvbG9yJzogJ2NoYW5nZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaWdub3JlLWhhc2gnOiAnY2hhbmdlSGFzaE9wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWF1dG9jcyc6ICd0b2dnbGVBdXRvY3NPcHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJyNjdXN0b20tc2VhcmNoJzogJ2NoYW5nZUN1c3RvbVNlYXJjaCcsXHJcbiAgICAgICAgICAnLmN1c3RvbS1zZWFyY2gtaW5wdXQnOiAnaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsbG93ZWRLZXlzOiAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbiBvIHAgcSByIHMgdCB1IHYgeCB5IHogMCAxIDQgNSA2IDcgOCA5IGVudGVyIC0gKycuc3BsaXQoJyAnKSxcclxuICAgIGFsbG93ZWRTaG9ydGN1dHM6IFsnJywgJ2N0cmxLZXknLCAnc2hpZnRLZXknLCAnYWx0S2V5JywgJ2N0cmxLZXktc2hpZnRLZXknLCAnY3RybEtleS1hbHRLZXknLCAnc2hpZnRLZXktYWx0S2V5JywgJ21ldGFLZXknLCAnbWV0YUtleS1zaGlmdEtleScsICdtZXRhS2V5LWFsdEtleSddLFxyXG4gICAgYWxsb3dlZFF1aWNrYnV0dG9uT3B0czogWyd0aXRsZScsICd1cmwnLCAndGV4dCcsICd0ZXh0ICttZXRhJywgJ3RleHQgK25vdGVzJywgJ3RleHQgK2xvc3QnLCAndGV4dCBtJywgJ3RleHQgMicsICd0ZXh0IDMnLCAndGV4dCBjJywgJ3RleHQgbG9zdCddLFxyXG4gICAgbWFya2VyS2V5czogWydtJywgJzInLCAnMyddLFxyXG4gICAgY3VzdG9tTWFya2VyS2V5czogW10sXHJcbiAgICBtYXJrZXI6IG51bGwsXHJcbiAgICBjdXN0b21TZWFyY2g6IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsbmcnKSArICcud2lraXBlZGlhLm9yZy93aWtpLycsXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfSxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ3NldHRpbmdzJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBzZXR0aW5ncy5tYXJrZXJzLFxyXG4gICAgICAgICAgICBtYXJrZXJLZXlzID0gdGhpcy5tYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG4gICAgICAgICAgICBpLCBrZXk7XHJcblxyXG4gICAgICAgIGZvciAoa2V5IGluIG1hcmtlcnMpIHtcclxuICAgICAgICAgIGkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmICghbWFya2VyS2V5cy5pbmNsdWRlcyhpKSAmJiAhY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyhpKSlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKVxyXG4gICAgICAgICAgICAudXBkYXRlTWFya2VyKHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nKVxyXG4gICAgICAgICAgICAuaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1rZXknKSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1tYXJrZXItb3B0aW9uJykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICB0aGlzLmN1c3RvbU1hcmtlcktleXMgPSBbXTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICB0aGlzLnJlc3VtZSgpLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVNYXJrZXIoZSwgZWwsIGN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgbGV0IGtleSA9IGVsID8gZWwudmFsdWUgOiBlID8gZSA6IHRoaXMubWFya2VyID8gdGhpcy5tYXJrZXIua2V5IDogJ20nO1xyXG5cclxuICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgX01BUktFUihrZXksIGN1c3RvbUJnQ29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFya2VyU2VsZWN0T3B0aW9ucygpIHtcclxuICAgICAgbGV0IGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG5cclxuICAgICAgICAgIGFsbG93ZWRLZXlzID0gdGhpcy5hbGxvd2VkS2V5cyxcclxuICAgICAgICAgIGN1c3RvbU1hcmtlcktleXMgPSB0aGlzLmN1c3RvbU1hcmtlcktleXMsXHJcblxyXG4gICAgICAgICAgYSA9IGFsbG93ZWRLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGMgPSBjdXN0b21NYXJrZXJLZXlzLmxlbmd0aCxcclxuICAgICAgICAgIGkgPSAwLFxyXG5cclxuICAgICAgICAgIGZyYWdtZW50MSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50MyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgIGZyYWdtZW50NCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuXHJcbiAgICAgICAgICBvcHRpb24sIGljb24sIHZhbCwgVmFsO1xyXG5cclxuICAgICAgZm9yICg7IGkgPCBjOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBjdXN0b21NYXJrZXJLZXlzW2ldO1xyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIFZhbCA9IFZhbCA9PT0gJ0VOVEVSJyA/IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMUI1KSA6IFZhbDtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuXHJcbiAgICAgICAgZnJhZ21lbnQzLmFwcGVuZENoaWxkKG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnQyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2tleSBjdXN0b20ta2V5JztcclxuICAgICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIHZhbDtcclxuICAgICAgICBpY29uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50MSk7XHJcbiAgICAgIGtleUljb25zLmFwcGVuZENoaWxkKGZyYWdtZW50Mik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDMpO1xyXG5cclxuICAgICAgZm9yIChpID0gMDsgaSA8IGE7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IGFsbG93ZWRLZXlzW2ldLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjdXN0b21NYXJrZXJLZXlzLmluY2x1ZGVzKHZhbCkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcblxyXG4gICAgICAgIFZhbCA9IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGZyYWdtZW50NC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gVmFsO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnY3VzdG9tLW1hcmtlci1vcHRpb24gY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIHZhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKGZyYWdtZW50NCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBpbmplY3RTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgICBsZXQgc2hvcnRjdXRzID0gc2V0dGluZ3Muc2hvcnRjdXRzLFxyXG4gICAgICAgICAgaSwgc2NDaGVja2JveCwgc2NTZWxlY3QsIGNtQ2hlY2tib3gsIHNjO1xyXG5cclxuICAgICAgZm9yIChpIGluIHNob3J0Y3V0cykge1xyXG4gICAgICAgIHNjID0gc2hvcnRjdXRzW2ldO1xyXG4gICAgICAgIHNjQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MtJyArIGkpO1xyXG4gICAgICAgIHNjU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXNlbGVjdC0nICsgaSk7XHJcbiAgICAgICAgY21DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbS0nICsgaSk7XHJcblxyXG4gICAgICAgIGlmIChzY0NoZWNrYm94KSBzY0NoZWNrYm94LmNoZWNrZWQgPSBzY1sxXTtcclxuICAgICAgICBpZiAoc2NTZWxlY3QpIHNjU2VsZWN0LnZhbHVlID0gc2NbMF07XHJcbiAgICAgICAgaWYgKGNtQ2hlY2tib3gpIGNtQ2hlY2tib3guY2hlY2tlZCA9IHNjWzJdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaGlzdG9yeVNldHRpbmdzID0gc2V0dGluZ3MuaGlzdG9yeSxcclxuICAgICAgICAgIHNhdmVPcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NhdmUtb3B0Jyk7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmF1dG9zYXZlKSBzYXZlT3B0c1swXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBzYXZlT3B0c1sxXS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLScgKyBoaXN0b3J5U2V0dGluZ3MubmFtaW5nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaXZhdGUtc2F2ZScpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZUluUHJpdjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltbXV0JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5pbW11dDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtbG9zc2VzJykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5kcm9wTG9zc2VzO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtbmV3JykuY2hlY2tlZCA9IGhpc3RvcnlTZXR0aW5ncy5zYXZlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lnbm9yZS1oYXNoJykuY2hlY2tlZCA9ICFoaXN0b3J5U2V0dGluZ3MuaWdub3JlSGFzaDtcclxuXHJcbiAgICAgIGlmIChoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQgPT09ICdqc29uJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1qc29uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLXRleHQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWUgPSBoaXN0b3J5U2V0dGluZ3MuZG93bmxvYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtaXNjU2V0dGluZ3MgPSBzZXR0aW5ncy5taXNjO1xyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmstbWV0aG9kLS0nICsgbWlzY1NldHRpbmdzLm1hcmttZXRob2QpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ibScpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuYm1pY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3RlaWNvbicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZWljb247XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVvbmNsaWNrJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5ub3Rlb25jbGljaztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXRyYW5zcCcpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXRyYW5zcDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZXBsYWludmlldycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZXBsYWludmlldztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLWZhaWx1cmUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmZhaWx1cmVOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcmVzdG9yYXRpb24tc3VjY2VzcycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Muc3VjY2Vzc05vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1wYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnBibU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1lcnJvcicpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3MuZXJyb3JOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlwLW5vdGUnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnZpcE5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdGFydCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMF0gOiB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLWVuZCcpLnZhbHVlID0gbWlzY1NldHRpbmdzLmN1c3RvbVNlYXJjaCA/IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2hbMV0gOiAnJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLW5vdGVpY29uJykudmFsdWUgPSBtaXNjU2V0dGluZ3MudG11aXBvcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RtdWlwb3MtLWJtaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcblxyXG4gICAgICBpZiAobWlzY1NldHRpbmdzLnRiYnBvd2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RiYnBvd2VyLW9mZicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkb24tYXV0b2NzJykuY2hlY2tlZCA9IHNldHRpbmdzLmFkZG9uLmF1dG9jcztcclxuICAgIH0sXHJcbiAgICBzaG93Q3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBoaWRlQ3VzdG9tU2VhcmNoU2V0dGluZ1N1Y2Nlc3MoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1zdWJtaXR0ZWQnKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdHlsZShlLCBlbCkge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlci51cGRhdGUoZWwpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c3R5bGUtc2V0dGluZycsIG1hcmtlci5rZXksIG1hcmtlci5zdHlsZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZWwuY2hlY2tlZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvbm90ZS1jb2xvcicpLnZhbHVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmF1dG9ub3RlLXNldHRpbmcnLCB0aGlzLm1hcmtlci5rZXksIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQXV0b05vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tbm90ZScpLmNoZWNrZWQgPyBlbC52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUhhc2hPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aGFzaC1zZXR0aW5nJywgIWVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUltbXV0T3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmltbXV0LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVEcm9wTG9zc2VzT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9jc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGFkZE1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICByZW1vdmVLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uID0gZWwuY2hpbGRyZW5bZWwuc2VsZWN0ZWRJbmRleF0sXHJcbiAgICAgICAgICBjbG9uZSA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBiZ0NvbG9yID0gdGhpcy5nZXRSYW5kb21MaWdodENvbG9yKCk7XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCByZW1vdmVLZXlTZWxlY3QuY2hpbGRyZW4ubGVuZ3RoID49IDEyIHx8IHRoaXMuYWxsb3dlZEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgcmVtb3ZlS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAga2V5U2VsZWN0LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgICAgY2xvbmUuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgIGljb24uaWQgPSAnY3VzdG9tLWtleS0nICsga2V5O1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgaWNvbi5pbm5lclRleHQgPSBrZXkgPT09ICdlbnRlcicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBrZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKGtleSwgbnVsbCwgYmdDb2xvcik7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2FkZDpjdXN0b20tbWFya2VyJywga2V5LCAnYmFja2dyb3VuZC1jb2xvcjonICsgYmdDb2xvciArICc7Jyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTWFya2VyKGUsIGVsKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbC52YWx1ZSxcclxuICAgICAgICAgIGtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21pemVkLWtleScpLFxyXG4gICAgICAgICAga2V5SWNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWtleXMnKSxcclxuICAgICAgICAgIGFkZEtleVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQta2V5JyksXHJcbiAgICAgICAgICBvcHRpb247XHJcblxyXG4gICAgICBpZiAoIWtleSB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICBhZGRLZXlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgYWRkS2V5U2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICBlbC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIGtleVNlbGVjdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbi0nICsga2V5KVswXS5yZW1vdmUoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXktJyArIGtleSkucmVtb3ZlKCk7XHJcbiAgICAgIGtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlTWFya2VyKCdtJyk7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZTpjdXN0b20tbWFya2VyJywga2V5KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VNYXJrTWV0aG9kKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNob3J0Y3V0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICBpZiAoIXRoaXMuYWxsb3dlZFNob3J0Y3V0cy5pbmNsdWRlcyhlbC52YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnNob3J0Y3V0LXNldHRpbmcnLCBlbC5uYW1lLCBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ3RtKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOmN0bS1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2F2ZU9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzYXZlb3B0LXNldHRpbmcnLCAhIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVQcml2U2F2ZShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpwcml2LXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOYW1pbmdPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2F2ZU5vdGVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZW9wdC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlUXVpY2tidXR0b25PcHQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRRdWlja2J1dHRvbk9wdHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpxdWlja2J1dHRvbm9wdC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHN3aXRjaFF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0gJ2pzb24nID8gdHlwZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja2J1dHRvbi1kb3dubG9hZC1zZWxlY3QnKS52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTm90ZXMoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVNaXNjKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVRCQlBvd2VyT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9ICEhKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKjEpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJywgZWwubmFtZSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUbXVpUG9zaXRpb25PcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bWlzYy1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgICBBcnJheS5mcm9tKHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG11aXBvcycpKS5mb3JFYWNoKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUgPSBlbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ3VzdG9tU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCk7XHJcbiAgICAgIGNvbnN0IGlucDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKTtcclxuICAgICAgY29uc3QgaW5wMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKTtcclxuICAgICAgY29uc3QgcGFydDEgPSBpbnAxLnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXJ0MiA9IGlucDIudmFsdWU7XHJcbiAgICAgIGlmICghcGFydDEgJiYgIXBhcnQyKSB7XHJcbiAgICAgICAgaW5wMS52YWx1ZSA9IHRoaXMuY3VzdG9tU2VhcmNoO1xyXG4gICAgICAgIGlucDIudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLCBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgW3BhcnQxLCBwYXJ0Ml0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UmFuZG9tTGlnaHRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuICcjJyArIE1hdGguZmxvb3IoKDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjE3NSkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ZhaWxlZDp0b2dnbGUtc3luYyc6ICd1bmRvJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5zd2l0Y2gnOiAndG9nZ2xlU3dpdGNoJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1zZXR0aW5ncycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3NldHRpbmdzID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLWhpc3RvcnknKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYycpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLXBhZ2Vub3RlcycpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIF9TVE9SRS5hcmVhX3BhZ2Vub3RlcyA9PT0gJ3N5bmMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlU3dpdGNoKGUsIGVsKSB7XHJcbiAgICAgIGVsID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2l0Y2gtLXN5bmMnKSA/IGVsIDogZWwucGFyZW50Tm9kZTtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOnN5bmMnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbyhmaWVsZCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYy1zd2l0Y2gtLScgKyBmaWVsZCkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgX1RPR0dMRVIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHRvZ2dsZShlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGxldCBkYXRhVGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JyksXHJcbiAgICAgICAgdGFyZ2V0cyA9IGRhdGFUYXJnZXQgPyBkYXRhVGFyZ2V0LnNwbGl0KCcgJykgOiBudWxsLFxyXG4gICAgICAgIGRhdGFUb2dnbGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSxcclxuICAgICAgICByb2xlcyA9IGRhdGFUb2dnbGUgPyBkYXRhVG9nZ2xlLnNwbGl0KCcgJykgOiBudWxsO1xyXG5cclxuICAgIGlmIChyb2xlcykge1xyXG4gICAgICByb2xlcy5mb3JFYWNoKChyb2xlLCBpKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzW2ldKS5jbGFzc0xpc3Rbcm9sZV0oJ29wZW4nKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldHNbMF0pLmRpc2FibGVkID0gIXRoaXMuY2hlY2tlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1BPUlQoe1xyXG4gIG5hbWU6ICdhZGRvbi1wYWdlJyxcclxuICB0eXBlOiAnY29udGVudCcsXHJcbiAgZXZlbnRzOiB7XHJcbiAgICBPTkVPRkY6IFtcclxuICAgICAgJ2NoYW5nZTpzdHlsZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTptYXJrLW1ldGhvZC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpjdG0tc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpwcml2LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmltbXV0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmRyb3BMb3NzZXMtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bmFtaW5nb3B0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNvcnQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6dmlldy1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpoYXNoLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICdzd2l0Y2g6cXVpY2tidXR0b25vcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6bm90aWZpY2F0aW9uLXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWlzYy1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTp0YmJwb3dlci1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTphdXRvY3Mtc2V0dGluZycsXHJcbiAgICAgICdhZGQ6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsXHJcbiAgICAgICdkZWxldGU6ZW50cmllcycsXHJcbiAgICAgICdjbGVhbjplbnRyaWVzJyxcclxuICAgICAgJ29wZW46ZW50cmllcycsXHJcbiAgICAgICdyZW5hbWU6ZW50cnknLFxyXG4gICAgICAndmlldzplbnRyeScsXHJcbiAgICAgICdzeW5jOmVudHJ5JyxcclxuICAgICAgJ3N5bmM6aGlzdG9yeScsXHJcbiAgICAgICdzeW5jOnNldHRpbmdzJyxcclxuICAgICAgJ2ltcG9ydDpzdG9yYWdlJyxcclxuICAgICAgJ3RvZ2dsZTpzeW5jJyxcclxuICAgICAgJ2NoYW5nZTpjdXN0b20tc2VhcmNoLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2xlYXI6bG9ncycsXHJcbiAgICAgICd0YWc6ZW50cmllcydcclxuICAgIF1cclxuICB9XHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZlcnNpb246IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXHJcbiAgc2V0dGluZ3M6e1xyXG4gICAgc2hvcnRjdXRzOiB7XHJcbiAgICAgIHo6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgeTogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICBzOiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIGM6IFsnY3RybEtleS1hbHRLZXknLCBmYWxzZSwgdHJ1ZV0sXHJcbiAgICAgIGI6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlLCB0cnVlXSxcclxuICAgICAgZDogWydzaGlmdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgJy1iJzogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIG06IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIHc6IFsnJywgdHJ1ZSwgdHJ1ZV0sXHJcbiAgICAgIG46IFsnJywgJycsIHRydWVdLFxyXG4gICAgICAnMic6IFsnJywgdHJ1ZV0sXHJcbiAgICAgICczJzogWycnLCB0cnVlXSxcclxuICAgICAgYXJyb3d1cDogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBhcnJvd2Rvd246IFsnYWx0S2V5JywgZmFsc2UsIGZhbHNlXSxcclxuICAgICAgc2I6IFsnJywgJycsIHRydWVdLFxyXG4gICAgICBjbTogWycnLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgJzEnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZGQ5OWZmOycgfSxcclxuICAgICAgJzInOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNjZiYmZmOycgfSxcclxuICAgICAgJzMnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojNTVmZjU1OycgfSxcclxuICAgICAgJzQnOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmY2NjY2O2NvbG9yOiNmZmZmZmY7JyB9LFxyXG4gICAgICAnNSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDA7JyB9LFxyXG4gICAgICBtOiB7IHN0eWxlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZlZTAwOycgfVxyXG4gICAgfSxcclxuICAgIGhpc3Rvcnk6IHtcclxuICAgICAgYXV0b3NhdmU6IHRydWUsXHJcbiAgICAgIHNhdmVJblByaXY6IGZhbHNlLFxyXG4gICAgICBkcm9wTG9zc2VzOiB0cnVlLFxyXG4gICAgICBpbW11dDogZmFsc2UsXHJcbiAgICAgIG5hbWluZzogJ3RpdGxlJyxcclxuICAgICAgZG93bmxvYWQ6ICdqc29uJyxcclxuICAgICAgY29weTogJ3RleHQnLFxyXG4gICAgICBzYXZlTm90ZTogdHJ1ZSxcclxuICAgICAgc29ydGVkOiAnZGF0ZS1sYXN0JyxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBwcDogMTAsXHJcbiAgICAgIGlnbm9yZUhhc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICBhZGRvbjoge1xyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGF1dG9jczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1pc2M6IHtcclxuICAgICAgYm1pY29uOiB0cnVlLFxyXG4gICAgICBub3RlaWNvbjogdHJ1ZSxcclxuICAgICAgbm90ZW9uY2xpY2s6IHRydWUsXHJcbiAgICAgIG5vdGV0cmFuc3A6IGZhbHNlLFxyXG4gICAgICBub3RlcGxhaW52aWV3OiBmYWxzZSxcclxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcclxuICAgICAgZmFpbHVyZU5vdGU6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NOb3RlOiB0cnVlLFxyXG4gICAgICBwYm1Ob3RlOiB0cnVlLFxyXG4gICAgICBjaGFuZ2VkTm90ZTogZmFsc2UsXHJcbiAgICAgIGVycm9yTm90ZTogdHJ1ZSxcclxuICAgICAgdmlwTm90ZTogdHJ1ZSxcclxuICAgICAgY3VzdG9tU2VhcmNoOiBmYWxzZSxcclxuICAgICAgdG11aXBvczogJ3RvcC1yaWdodCcsXHJcbiAgICAgIG1hcmttZXRob2Q6ICdwb3B1cCcsXHJcbiAgICAgIHByb2dyZXNzYmFyOiB0cnVlLFxyXG4gICAgICB0YmJwb3dlcjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzYjoge1xyXG4gICAgICB0YWJzOiB7XHJcbiAgICAgICAgbWV0YTogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0YWdzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG5vdGVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1hcmtlcnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBhY3Rpb25zOiB7IHVuZm9sZGVkOiB0cnVlIH0sXHJcbiAgICAgICAgbWFya3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbGlua3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdGhlbWVzOiB7IHVuZm9sZGVkOiBmYWxzZSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoZW1lOiAnZGVmYXVsdCdcclxuICAgIH1cclxuICB9LFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGVudHJpZXM6IHt9XHJcbiAgfSxcclxuICBwYWdlbm90ZXM6IHt9LFxyXG4gIHN5bmM6IHtcclxuICAgIHNldHRpbmdzOiBmYWxzZSxcclxuICAgIGhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgcGFnZW5vdGVzOiBmYWxzZVxyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5vdGVfcGJtOiAxLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fZmFpbHVyZTogMixcclxuICBub3RlX3VybDogMyxcclxuICBlcnJvcl9zYXZlX3N0eWxlOiA0LFxyXG4gIGVycm9yX3NhdmVfX3RvZ2dsZV9zYzogNSxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9zYzogNixcclxuICBlcnJvcl9zYXZlX2N0bTogNyxcclxuICBlcnJvcl9zYXZlX2F1dG9zYXZlOiA4LFxyXG4gIGVycm9yX3NhdmVfbmFtaW5nOiA5LFxyXG4gIGVycm9yX3NhdmVfbm90aWZ5OiAxMCxcclxuICBlcnJvcl9zYXZlX2Rvd25sb2FkOiAxMSxcclxuICBlcnJvcl9zYXZlX2JtaWNvbjogMTIsXHJcbiAgZXJyb3JfY2xlYW5faGlzdG9yeTogMTMsXHJcbiAgZXJyb3JfYWRkX21hcmtlcjogMTQsXHJcbiAgZXJyb3JfcmVtb3ZlX21hcmtlcjogMTUsXHJcbiAgZXJyb3Jfc2F2ZV9lbnRyeTogMTYsXHJcbiAgZXJyb3JfdXBkYXRlX2VudHJ5OiAxNyxcclxuICBlcnJvcl9kZWxfZW50cnk6IDE4LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29uc3RhcnQ6IDE5LFxyXG4gIGVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlOiAyMCxcclxuICBlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29uc3RhcnQ6IDIxLFxyXG4gIGVycm9yX2ltcG9ydF9lbXB0eTogMjIsXHJcbiAgZXJyb3JfaW1wb3J0X2hpc3Rvcnk6IDIzLFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nczogMjQsXHJcbiAgZXJyb3JfaW1wb3J0X291dGRhdGVkOiAyNSxcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQ6IDI2LFxyXG4gIGVycm9yX2ltcG9ydF9zZXR0aW5nc19ub3RfZm91bmQ6IDI3LFxyXG4gIGVycm9yX25hbWluZzogMjgsXHJcbiAgZXJyb3Jfc3RvcmFnZV9taWdyYXRpb246IDI5LFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb251cGRhdGU6IDMwLFxyXG4gIGVycm9yX3RvZ2dsZV9zeW5jOiAzMSxcclxuICBlcnJvcl9zYXZlX3ByaXY6IDMyLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18xOiAzMyxcclxuICBub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMjogMzQsXHJcbiAgZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGU6IDM1LFxyXG4gIGVycm9yX3NhdmVfbWFya19tZXRob2Q6IDM2LFxyXG4gIGpzX2luamVjdGlvbl9mYWlsdXJlOiAzNyxcclxuICBjc3NfaW5qZWN0aW9uX2ZhaWx1cmU6IDM4LFxyXG5cclxuICBnZXRLZXlCeVZhbHVlKHZhbCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMpIHtcclxuICAgICAgaWYgKHRoaXNba2V5XSA9PSB2YWwpIHtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24oc3JjKSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gQXJyYXkuaXNBcnJheShzcmMpID8gW10gOiB7fTtcclxuICBsZXQgdmFsO1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3JjKSB7XHJcbiAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgIHZhbCA9IHNyY1twcm9wXTtcclxuICAgICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IF9DT1BZKHZhbCk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAhdGhpcy5hdXRvUGF1c2UgfHwgdGhpcy5zZXRBdXRvUGF1c2UoKTtcclxuICB9XHJcbiAgZ2VuZXJhbEhhbmRsZXIoc3ViTWFwLCB0eXBlLCBlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldCxcclxuICAgICAgICBzZWxlY3RvciwgX3NlbCwgbWV0aCwgZiwgaXNJZCwgaXNDbGFzcywgaXNEb2M7XHJcblxyXG4gICAgZm9yIChzZWxlY3RvciBpbiBzdWJNYXApIHtcclxuICAgICAgZiA9IHNlbGVjdG9yWzBdO1xyXG4gICAgICBfc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgIGlzSWQgPSBmID09PSAnIyc7XHJcbiAgICAgIGlzQ2xhc3MgPSBmID09PSAnLic7XHJcbiAgICAgIGlzRG9jID0gZiA9PT0gJyonO1xyXG5cclxuICAgICAgaWYgKGlzSWQgfHwgaXNDbGFzcykgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBpZiAoaXNEb2MgfHxcclxuICAgICAgICAgIGlzQ2xhc3MgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSB8fFxyXG4gICAgICAgICAgaXNJZCAmJiBlbC5pZCA9PT0gc2VsZWN0b3IgfHxcclxuICAgICAgICAgIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yXHJcbiAgICAgICkge1xyXG5cclxuICAgICAgICBtZXRoID0gc3ViTWFwW19zZWxdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicpIG1ldGgoZSwgZWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXNbbWV0aF0pIHRoaXNbbWV0aF0oZSwgZWwpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXRBdXRvUGF1c2UoKSB7XHJcbiAgICB0aGlzLm9uKCd0b2dnbGVkOmFkZG9uJywgb24gPT4ge1xyXG4gICAgICBpZiAob24pIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRMaXN0ZW5lcih0eXBlLCBtZXRoLCBlbCkge1xyXG4gICAgZWwgPSBlbCB8fCB0aGlzLmVsO1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nID8gbWV0aCA6IHRoaXNbbWV0aF07XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYUJvdW5kLnB1c2goW2VsLCB0eXBlLCBoYW5kbGVyXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVycygpIHtcclxuICAgIGxldCBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgICBkb21FdmVudHMsIGVsLCBzdWJNYXAsIHR5cGUsIGhhbmRsZXI7XHJcblxyXG4gICAgaWYgKCFldmVudHMgfHwgIShkb21FdmVudHMgPSBldmVudHMuRE9NKSB8fCAhKGVsID0gdGhpcy5lbCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gZG9tRXZlbnRzKSB7XHJcbiAgICAgIHN1Yk1hcCA9IGRvbUV2ZW50c1t0eXBlXTtcclxuICAgICAgaGFuZGxlciA9IHRoaXMucHJveHkodGhpcywgdGhpcy5nZW5lcmFsSGFuZGxlciwgc3ViTWFwLCB0eXBlKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIGlmICghdGhpcy5fYm91bmRbdHlwZV0pIHRoaXMuX2JvdW5kW3R5cGVdID0gW107XHJcbiAgICAgIHRoaXMuX2JvdW5kW3R5cGVdLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcclxuICAgIGxldCB0eXBlLCBfYm91bmQsIGw7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIHRoaXMuX2JvdW5kKSB7XHJcbiAgICAgIF9ib3VuZCA9IHRoaXMuX2JvdW5kW3R5cGVdO1xyXG4gICAgICBsID0gX2JvdW5kLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBfYm91bmRbbF0sIGZhbHNlKTtcclxuICAgICAgICBfYm91bmQuc3BsaWNlKGwsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9leHRyYSA9IHRoaXMuX2V4dHJhQm91bmQsIGkgPSAwLCBzZXQ7XHJcbiAgICBsID0gX2V4dHJhLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBzZXQgPSBfZXh0cmFbaV07XHJcbiAgICAgIHNldFswXS5yZW1vdmVFdmVudExpc3RlbmVyKHNldFsxXSwgc2V0WzJdLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmNvbnN0IF9FUlJPUlRSQUNLRVIgPSBuZXcgX01PRFVMRSh7XHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICBpZiAoWydzaWRlYmFyLndwLmpzJywgJ3RiYi1tZW51LndwLmpzJywgJ29wdGlvbnMud3AuanMnLCAnYWRkb24tcGFnZS53cC5qcyddLmluY2x1ZGVzKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpicm93c2VyLWNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgbG9jYXRpb246IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKS5zaGlmdCgpICsgJzonICsgZXJyb3IubGluZW5vICsgJzonICsgZXJyb3IuY29sbm8sXHJcbiAgICAgICAgICB0aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0VSUk9SVFJBQ0tFUjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG4gIGZvciAodmFyIGkgaW4gb2JqMilcclxuICAgIGlmICghb2JqMVtpXSkgb2JqMVtpXSA9IG9iajJbaV07XHJcblxyXG4gIHJldHVybiBvYmoxO1xyXG59XHJcbiIsImNvbnN0IF9HRVRfQUNUSVZFX1RBQiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB0YWJzWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH1cclxuIiwiY29uc3QgX0hBU0hMRVNTID0gZnVuY3Rpb24odXJsKSB7XHJcbiAgY29uc3QgaCA9IHVybC5sYXN0SW5kZXhPZignIycpO1xyXG4gIGlmIChoID09PSAtMSkgcmV0dXJuIHVybDtcclxuICBlbHNlIHJldHVybiB1cmwuc3Vic3RyKDAsIGgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBfSEFTSExFU1MgfVxyXG4iLCIvKlxyXG4qIFRyYW5zbGF0ZXMgYSBIVE1sIHBhZ2UgaW4gdGhlIHdlYiBsMTBuIHN0eWxlIGZyb20gdGhlIEFkZC1vbiBTREsgd2l0aCBXZWJFeHRlbnNpb25zIHN0cmluZ3MuXHJcbiogTW9kaWZpZWQgYnkgdW5kZXJmbHlpbmdiaXJjaGVzXHJcbipcclxuKiBAYXV0aG9yIE1hcnRpbiBHaWdlclxyXG4qIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZyZWFrdGVjaG5pay80YTcyYmMwNzExZDliYzgyY2YzYjA3NWJjYzI5Mjk1M31cclxuKiBAbGljZW5zZSBNUEwtMi4wXHJcbiovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURvY3VtZW50KCkge1xyXG4gIGxldCBlbCwgZGF0YSwgZGF0YXNldDtcclxuICAvLyBTZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGJyb3dzZXIuaTE4bi5nZXRVSUxhbmd1YWdlKCkucmVwbGFjZSgnXycsICctJykpO1xyXG4gIC8vIEdldCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgbWFya2VkIGFzIGJlaW5nIHRyYW5zbGF0ZWFibGUuXHJcbiAgY29uc3QgdGV4dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4taWRdJyk7XHJcbiAgY29uc3QgYXR0ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWwxMG4tYXR0cl0nKTtcclxuXHJcbiAgZm9yKGVsIG9mIHRleHRFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBsMTBuSWQgPSBkYXRhc2V0LmwxMG5JZDtcclxuXHJcbiAgICBpZiAobDEwbklkKSB7XHJcbiAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuSWQpO1xyXG5cclxuICAgICAgaWYoZGF0YSAmJiBkYXRhICE9ICc/PycpIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGVsIG9mIGF0dHJFbGVtZW50cykge1xyXG4gICAgZGF0YXNldCA9IGVsLmRhdGFzZXQ7XHJcblxyXG4gICAgWydUaXRsZScsICdQbGFjZWhvbGRlciddLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IGwxMG5BdHRyID0gZGF0YXNldFsnbDEwbicgKyBhdHRyXTtcclxuXHJcbiAgICAgIGlmIChsMTBuQXR0cikge1xyXG4gICAgICAgIGRhdGEgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShsMTBuQXR0cik7XHJcblxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIudG9Mb3dlckNhc2UoKSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0cmFuc2xhdGVEb2N1bWVudCgpLCB7XHJcbiAgICBjYXB0dXJlOiBmYWxzZSxcclxuICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcbn1cclxuIiwibGV0IHRvcGljcyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgaWYgKCF0b3BpY3NbZXZlbnRdKSB0b3BpY3NbZXZlbnRdID0gW107XHJcblxyXG4gICAgdG9waWNzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gIH1cclxuICBlbWl0KGV2ZW50cywgLi4uYXJncykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgbGV0IGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aCwgdG9waWM7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdG9waWMgPSB0b3BpY3NbZXZlbnRzW2ldXTtcclxuXHJcbiAgICAgIGlmICh0b3BpYylcclxuICAgICAgICB0b3BpYy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmVxdWVzdChldmVudCwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7IGV2OiBldmVudCwgYXJnczogYXJncywgd2FpdDogdHJ1ZSB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgfVxyXG4gIHByb3h5KGNvbnRleHQsIGZ1bmMsIC4uLmFyZ3MxKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczIpIHtcclxuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJnczEuY29uY2F0KGFyZ3MyKSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgX01FRElBVE9SIGZyb20gJy4vbWVkaWF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgX01PRFVMRSBleHRlbmRzIF9NRURJQVRPUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIoKVxyXG5cclxuICAgIGZvciAobyBpbiBvYmopIHRoaXNbb10gPSBvYmpbb107XHJcblxyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGVudkV2ZW50cywgbywgZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoZXZlbnRzICYmIChlbnZFdmVudHMgPSBldmVudHMuRU5WKSkge1xyXG4gICAgICBmb3IgKGUgaW4gZW52RXZlbnRzKSB7XHJcbiAgICAgICAgaGFuZGxlciA9IGVudkV2ZW50c1tlXTtcclxuICAgICAgICBpZiAodGhpc1toYW5kbGVyXSlcclxuICAgICAgICAgIHRoaXMub24oZSwgdGhpcy5wcm94eSh0aGlzLCB0aGlzW2hhbmRsZXJdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICF0aGlzLmF1dG9pbml0IHx8IHRoaXMuYXV0b2luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9QT1JUIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMucG9ydCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAncHJpdmlsZWdlZCcgfHwgdHlwZSA9PT0gJ2JhY2tncm91bmQnKSB0aGlzLmluaXRQb3J0aW5nKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoKTtcclxuICB9XHJcbiAgZXh0ZW5kKGV2ZW50cykge1xyXG4gICAgdGhpcy5yZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJQb3J0RXZlbnRzKGV2ZW50cykge1xyXG4gICAgZXZlbnRzID0gZXZlbnRzIHx8IHRoaXMuZXZlbnRzO1xyXG4gICAgbGV0IG9uZU9mZkV2ZW50cywgY29ubmVjdGlvbkJhc2VkRXZlbnRzO1xyXG5cclxuICAgIGlmIChldmVudHMpIHtcclxuICAgICAgb25lT2ZmRXZlbnRzID0gZXZlbnRzLk9ORU9GRjtcclxuICAgICAgaWYgKG9uZU9mZkV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygb25lT2ZmRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMuc2VuZE1lc3NhZ2UsIGUpKTtcclxuICAgICAgfVxyXG4gICAgICBjb25uZWN0aW9uQmFzZWRFdmVudHMgPSBldmVudHMuQ09OTkVDVElPTjtcclxuICAgICAgaWYgKGNvbm5lY3Rpb25CYXNlZEV2ZW50cykge1xyXG4gICAgICAgIGZvciAobGV0IGYgb2YgY29ubmVjdGlvbkJhc2VkRXZlbnRzKVxyXG4gICAgICAgICAgdGhpcy5vbihmLCB0aGlzLnByb3h5KHRoaXMsIHRoaXMucG9zdE1lc3NhZ2UsIGYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXNzTWVzc2FnZShyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICByZXEuYXJncyA9IHJlcS5hcmdzIHx8IFtdO1xyXG4gICAgbGV0IGFyZ3MgPSBbXS5jb25jYXQocmVxLmV2LCByZXEuYXJncyk7XHJcbiAgICBpZiAoIXNlbmRlciB8fCAhc2VuZGVyLm5hbWUpIGFyZ3MgPSBhcmdzLmNvbmNhdChzZW5kZXIsIHNlbmRSZXNwb25zZSk7XHJcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBpZiAocmVxLndhaXQpIHJldHVybiB0cnVlOyAvLyB0aGlzIHdpbGwga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gdG8gdGhlIG90aGVyIGVuZCB1bnRpbCBgc2VuZFJlc3BvbnNlYCBpcyBjYWxsZWRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGxldCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnRlbnQnKSBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcclxuICAgICAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRhYjtcclxuICAgICAgaWYgKGxhc3RBcmcgIT09IHVuZGVmaW5lZCAmJiAodGFiID0gbGFzdEFyZy50YWIpKSB7XHJcbiAgICAgICAgaWYgKHRhYiA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicylcclxuICAgICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UobGFzdEFyZy50YWIsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7LyogY3VycmVudFdpbmRvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2UgKi99KS50aGVuKHRhYnMgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpXHJcbiAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZykuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvc3RNZXNzYWdlKGUsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0aGlzLnBvcnQpIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtc2cpO1xyXG4gIH1cclxuICBpbml0UG9ydGluZygpIHtcclxuICAgIGlmICghdGhpcy5wb3N0cG9uZUNvbm5lY3Rpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRDb25uZWN0aW9uTGlzdGVuZXJzKHRoaXMucHJveHkodGhpcywgdGhpcy5jb25uZWN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBwb3J0ID0gdGhpcy5wb3J0ID0gdGhpcy5wb3J0IHx8IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHsgbmFtZTogdGhpcy5uYW1lIH0pO1xyXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4gdGhpcy5wb3J0ID0gbnVsbCk7XHJcbiAgfVxyXG4gIGFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoY2IpIHtcclxuICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMucHJveHkodGhpcywgdGhpcy5wYXNzTWVzc2FnZSkpO1xyXG4gICAgICAhY2IgfHwgY2IoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBfREVGQVVMVF9TVE9SQUdFIGZyb20gJy4uL2RhdGEvZGVmYXVsdC1zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIF9TVE9SRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYXJlYV9zZXR0aW5ncyA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5zZXR0aW5ncyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfaGlzdG9yeSA9IF9ERUZBVUxUX1NUT1JBR0Uuc3luYy5oaXN0b3J5ID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIHRoaXMuYXJlYV9wYWdlbm90ZXMgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMucGFnZW5vdGVzID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlICYmIHN0b3JhZ2Uuc3luYykge1xyXG4gICAgICAgIHRoaXMuc2V0QXJlYXMoc3RvcmFnZS5zeW5jKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBcmVhcyhzeW5jKSB7XHJcbiAgICBmb3IgKGxldCBhcmVhIGluIHN5bmMpIHtcclxuICAgICAgdGhpc1snYXJlYV8nICsgYXJlYV0gPSBzeW5jW2FyZWFdID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlZFN5bmMoKSB7XHJcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHRoaXMuZW1pdCgnc2V0LWFyZWFzLWFmdGVyLXN5bmMtY2hhbmdlJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGZpZWxkID0gJ3N0b3JhZ2UnKSB7XHJcbiAgICBpZiAodGhpcy5pbml0aWFsaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZShyID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHIodGhpcy5nZXQoZmllbGQpKSwgMTApKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXRoID0gdGhpc1snX2dldF8nICsgZmllbGRdO1xyXG4gICAgaWYgKCFtZXRoKSB0aHJvdygnZmllbGQgJyArIGZpZWxkICsgJyBkb2VzblxcJ3QgZXhpc3QnKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0X3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgWyd2ZXJzaW9uJywgJ2xvZ3MnXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVtmaWVsZF0gPSBsb2NhbFN0b3JhZ2VbZmllbGRdIHx8IHN5bmNlZFN0b3JhZ2VbZmllbGRdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFfc2V0dGluZ3MgPT09ICdzeW5jJykgbG9jYWxTdG9yYWdlLnNldHRpbmdzID0gc3luY2VkU3RvcmFnZS5zZXR0aW5ncztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0X2hpc3RvcnkoKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmhpc3RvcnkgPSBoaXN0b3J5O1xyXG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9sb2NhbF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9zeW5jZWRfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKTtcclxuICB9XHJcbiAgX2dldF9oaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldCgpLnRoZW4oc3luY2VkU3RvcmFnZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN5bmNlZEhpc3RvcnkgPSBzeW5jZWRTdG9yYWdlLmhpc3Rvcnk7XHJcblxyXG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCgpLnRoZW4obG9jYWxTdG9yYWdlID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEhpc3RvcnkgPSBsb2NhbFN0b3JhZ2UuaGlzdG9yeTtcclxuICAgICAgICBpZiAoIXN5bmNlZEhpc3RvcnkpIHJldHVybiBsb2NhbEhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEhpc3RvcnkpIHJldHVybiBzeW5jZWRIaXN0b3J5O1xyXG5cclxuICAgICAgICAvL3N5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF9zZXR0aW5ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncyB8fCBfREVGQVVMVF9TVE9SQUdFLnNldHRpbmdzKTtcclxuICB9XHJcbiAgX2dldF9sb2dzKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UubG9ncykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxvZ3M7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgX2dldF92ZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2UudmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4gc3luY2VkU3RvcmFnZS52ZXJzaW9uIHx8ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnZlcnNpb247XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==