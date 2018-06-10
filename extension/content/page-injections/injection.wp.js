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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(5);

var _getActiveTab = __webpack_require__(15);

var _extend = __webpack_require__(6);

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(1);

var _dommodule = __webpack_require__(16);

var _port = __webpack_require__(8);

var _l10n = __webpack_require__(17);

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(9);

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._MODULE = undefined;

var _mediator = __webpack_require__(7);

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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(133);

__webpack_require__(4);

__webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

exports.default = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['finished:restoration', 'failed:restoration', 'succeeded:restoration', 'copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note']
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _page = __webpack_require__(135);

var _page2 = _interopRequireDefault(_page);

var _contextmenu = __webpack_require__(136);

var _contextmenu2 = _interopRequireDefault(_contextmenu);

var _marker = __webpack_require__(137);

var _marker2 = _interopRequireDefault(_marker);

var _restorer = __webpack_require__(140);

var _restorer2 = _interopRequireDefault(_restorer);

var _notes = __webpack_require__(141);

var _notes2 = _interopRequireDefault(_notes);

var _tmui = __webpack_require__(143);

var _tmui2 = _interopRequireDefault(_tmui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'autoinit',
      'toggled:addon': 'power'
    }
  },

  bootstrapped: false,

  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && storage.history && storage.settings.addon.active) {
        _this.power(true);
      }
    });
  },
  power: function power(on) {
    if (!on || this.bootstrapped) return false;

    (0, _page2.default)();
    (0, _contextmenu2.default)();
    (0, _restorer2.default)();
    (0, _marker2.default)();
    (0, _notes2.default)();
    (0, _tmui2.default)();

    this.bootstrapped = true;
  }
});

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'deleted:entry': 'unset',
        'saved:entry': 'update'
      },
      DOM: {
        keydown: {
          '*': 'delegate'
        },
        selectionchange: {
          '*': 'onSelectionChange'
        }
      }
    },

    url: '',
    active: true,
    set: false,
    initialized: false,

    autoinit: function autoinit() {

      //_READER = this.readerMode = this.isReaderMode();
      this.setup();
    },
    power: function power(on) {
      if (on) this.addListeners();else this.removeListeners();

      this.active = on;
      this.setup();
    },
    setup: function setup() {
      var _this = this;

      _store2.default.get('mode').then(function (active) {
        _this.active = active;

        if (_this.set || !active) return false;

        var pdf = _store2.default.pdf = _this.isPdf();

        if (!pdf && window.document.readyState !== 'complete') return _this.addListener('load', function () {
          return _this.setup();
        }, window);

        _store2.default.iframe = _this.isIFrame();

        _this.setURL();
        _this.checkURL();
        _this.removeListeners();

        if (active) _this.addListeners();

        _this.set = true;
      });
    },
    setURL: function setURL() {
      var url = window.document.URL,
          hash = window.document.location.hash,
          hashIdx = url.indexOf(hash) || url.length;

      this.url = url.substr(0, hashIdx);
    },
    isPdf: function isPdf() {
      return window.location.pathname.split('.').pop().substr(0, 3) === 'pdf';
    },
    isIFrame: function isIFrame() {
      return window !== window.parent.window;
    },

    /*isReaderMode() {
      return this.url.split('?')[0] === 'about:reader';
    },*/
    isEditable: function isEditable(el) {
      var name = el.tagName;

      return name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true';
    },
    delegate: function delegate(e) {
      var _this2 = this;

      var key = e.key.toLowerCase(),
          modKey = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey,
          functionKeys = ['b', 's', 'y', 'z'],
          defaultMarkers = ['m', '2', '3'];

      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;

      if (this.isEditable(e.target)) return true;

      _store2.default.get('settings').then(function (settings) {

        if (!settings) return true;

        if (!modKey) {
          if (key === 'w' && !settings.shortcuts.w[0] && settings.shortcuts.w[1]) _this2.lookup();else if (settings.markers[key] && (!defaultMarkers.includes(key) || !settings.shortcuts[key] || !settings.shortcuts[key][0] && settings.shortcuts[key][1])) {
            _this2.emit('pressed:marker-key', e, key);
          }
        } else {
          var setting = settings.shortcuts[key];

          if (!setting || !setting[1]) return true;

          var shortcut = setting[0].split('-'),
              s1 = void 0,
              s2 = void 0;

          s1 = shortcut[0];
          s2 = shortcut[1];

          if (!e[s1] || s2 && !e[s2]) return true;

          if (key === 'w') _this2.lookup();else if (defaultMarkers.includes(key) && settings.markers[key]) {
            _this2.emit('pressed:marker-key', e, key);
          } else _this2.emit('pressed:hotkey', key);
        }
      });
    },
    lookup: function lookup() {
      var selectedText = window.getSelection().toString();

      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL: function checkURL() {
      var _this3 = this;

      this.request('check:url', this.url).then(function (entry) {
        if (entry) _this3.onUrlFound(entry);
      });
    },
    unset: function unset(name) {
      if (_store2.default.name && _store2.default.name === name) {
        _store2.default.name = undefined;
        _store2.default.entry = null;
        this.emit('unset:entry');
      }
    },
    update: function update(entry, force) {
      if (force || entry.url.split('#')[0] === this.url) {
        _store2.default.name = entry.name;
        _store2.default.isNew = false;
        _store2.default.entry = entry;
        this.emit('set:entry');
      }
    },
    onHotkey: function onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound: function onUrlFound(entry) {
      this.update(entry, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;
        /*if (_READER)
          window.setTimeout(() => this.emit('restore:marks', name), 500);*/
        //else
        this.emit('restore:marks', entry);
      }
    },
    onSelectionChange: function onSelectionChange() {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'toggled:addon': 'activate'
      }
    },
    active: false,

    autoinit: function autoinit() {
      this.activate(true);
    },
    activate: function activate(on) {
      if (on && !this.active) {
        this.registerHandler();
        this.active = true;
      } else if (!on && this.active) {
        this.removeListeners();
        this.active = false;
      }
    },
    registerHandler: function registerHandler() {
      this.addListener('mousedown', function (e) {
        if (e.button === 2) {
          if (e.target.classList.contains('textmarker-highlight')) {
            _store2.default.tmid = e.target.getAttribute('data-tm-id');
          } else _store2.default.tmid = '';
        }
      }, window.document);
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // marker module
  return new _utils._MODULE({
    events: {
      ENV: {
        'set:entry': 'updateID',
        'unset:entry': 'resetID',
        'pressed:marker-key': 'onMarkerKey',
        'pressed:hotkey': 'onHotkey',
        'restored:range': 'recreate',
        'finished:restoration': 'onFinishedRestoration',
        'ctx:b': 'setBookmark',
        'ctx:-b': 'removeBookmark',
        'ctx:d': 'remove',
        'ctx:m': 'onMarkerKey',
        'ctx:n': 'addNote',
        'updated:note': 'autosave',
        'removed:note': 'autosave',
        'sidebar:highlight': 'onMarkerKey',
        'sidebar:delete-highlight': 'remove',
        'sidebar:bookmark': 'setBookmark',
        'sidebar:delete-bookmark': 'removeBookmark',
        'sidebar:note': 'addNote',
        'sidebar:save-changes': 'save',
        'sidebar:undo': 'undo',
        'sidebar:redo': 'redo',
        'sidebar:scroll-to-bookmark': 'scrollToBookmark',
        'scroll-to-bookmark': 'scrollToBookmark'
      }
    },
    selection: null,
    done: [],
    undone: [],
    bookmark: null,
    removedBookmark: null,
    idcount: 0,

    updateID: function updateID() {
      var entry = _store2.default.entry;

      if (entry.idcount) {
        this.idcount = entry.idcount;
      } else {
        var marks = (entry.marks || []).concat(entry.lost || []),
            d = marks.length,
            ids = [];
        if (d) {
          while (d--) {
            ids.push(marks[d].id);
          }
          this.idcount = Math.max.apply(null, ids);
        }
      }
    },
    resetID: function resetID() {
      this.idcount = 0;
    },
    mark: function mark(key, data) {
      this.undone.length = 0;

      return new _markItem2.default(this, key, data).create();
    },
    undo: function undo(noAutosave) {
      var done = this.done;

      if (done.length) {
        var mark = this.done.pop();
        var id = mark.id;

        this.undone.push(mark.undo());

        if (this.bookmark) this.undoBookmark();

        this.emit('removed:mark', id);
      }

      noAutosave || this.autosave();
    },
    redo: function redo(noAutosave) {
      var undone = this.undone;

      if (undone.length) {
        var mark = this.undone.pop();

        this.done.push(mark.redo());

        this.emit('restore:notes', [mark]);
      }

      noAutosave || this.autosave();
    },
    cutOut: function cutOut(i) {
      var marker = this,
          done = this.done,
          l = done.length,
          toBeRemoved = [i],
          indices = [i],
          mark = void 0,
          smallestID = void 0;

      function findIndicesOfAffectedMarks(j) {
        for (var x = j + 1; x < l; x++) {
          mark = done[x];

          if (marker.marksIntersect(done[j], mark)) {
            if (!toBeRemoved.includes(x)) toBeRemoved.push(x);
            indices.push(x);
          }
        }
        indices.sort();
        toBeRemoved.sort();
      }
      while (indices.length) {
        findIndicesOfAffectedMarks(indices.shift());
      }
      smallestID = Math.min.apply(null, toBeRemoved);

      while (toBeRemoved.length) {
        this.done.splice(toBeRemoved.pop(), 1)[0].undo();
        this.undone.pop();
      }

      return smallestID;
    },
    remove: function remove(id) {
      id = id ? id : _store2.default.tmid ? _store2.default.tmid : '';

      if (!id) return this.undo();

      var mark = this.getById(id.split('_')[0]),
          done = this.done,
          l = done.length,
          position = done.indexOf(mark),
          smallestID = void 0,
          i = void 0;

      if (position === l - 1) {
        this.undo();
        this.undone.pop();
      } else {
        if (!this.undone.length) {
          smallestID = this.cutOut(position);

          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });

          this.autosave();
        } else {
          i = this.undone.length;

          while (this.undone.length) {
            this.redo(true);
          }smallestID = this.cutOut(position);

          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });

          while (i--) {
            this.undo(true);
          }this.autosave();
        }
      }
      this.emit('removed:mark', id[0]);
    },
    save: function save() {
      var _this = this;

      var iframe = _store2.default.iframe;

      _store2.default.get('naming').then(function (naming) {
        if (_store2.default.isNew && naming === 'custom') {
          _this.request('name:entry?').then(function (granted) {
            if (granted) {
              var sub = iframe ? browser.i18n.getMessage('nm_message_iframe') : '';

              _store2.default.name = window.prompt(browser.i18n.getMessage('nm_message', sub));
              if (_store2.default.name) _this.retrieveEntry().then(function (entry) {
                return _this.emit('save:entry?', entry);
              });
            }
          });
        } else {
          if (_store2.default.isNew) {
            var confirmed = true;
            if (iframe) confirmed = window.confirm(browser.i18n.getMessage('nm_message_iframe'));
            if (confirmed) {
              _this.retrieveEntry().then(function (entry) {
                return _this.emit('save:entry?', entry);
              });
            }
          } else {
            _this.retrieveEntry().then(function (entry) {
              return _this.emit('update:entry?', entry);
            });
          }
        }
      });
    },
    autosave: function autosave() {
      var _this2 = this;

      _store2.default.get('autosave').then(function (autosave) {
        if (autosave) _this2.save();else _this2.emit('unsaved-changes');
      });
    },
    store: function store(mark, text, save) {
      this.done.push(mark);
      if (save !== false) this.autosave();
    },
    recreate: function recreate(selection, mark) {
      this.selection = selection;
      this.store(this.mark(mark.key, mark), selection.text, false);
    },
    onFinishedRestoration: function onFinishedRestoration() {
      this.emit('restore:notes', this.done);
      this.sortById();
      this.scrollToBookmark();
    },
    addNote: function addNote(id) {
      this.emit('add:note', this.findMark(id));
    },
    setBookmark: function setBookmark(m) {
      var bookmark = this.bookmark,
          mark = this.findMark(m);

      if (!mark) return false;

      if (bookmark) {
        bookmark.remove();
        this.emit('removed:bookmark');
      }

      this.bookmark = new _bookmark2.default().set(mark);

      this.emit('added:bookmark');
      this.autosave();
    },
    undoBookmark: function undoBookmark() {
      this.bookmark = null;
      this.emit('removed:bookmark');
    },
    removeBookmark: function removeBookmark() {
      var bookmark = this.bookmark;

      if (!bookmark) return false;

      bookmark.remove();
      this.bookmark = null;
      this.removedBookmark = bookmark;
      this.emit('removed:bookmark');
      this.autosave();
    },
    scrollToBookmark: function scrollToBookmark() {
      var bookmark = this.bookmark;

      if (bookmark) bookmark.scrollIntoView();
    },
    getById: function getById(id, pos) {
      var done = this.done,
          d = done.length,
          mark = void 0;

      while (d--) {
        mark = done[d];

        if (mark.keyData.id == id) return pos ? { mark: mark, position: d } : mark;
      }
      return pos ? { mark: null, position: null } : false;
    },
    findMark: function findMark(x) {
      x = x ? x : _store2.default.tmid ? _store2.default.tmid : '';

      var mark = !x ? this.done[this.done.length - 1] : typeof x === 'string' ? this.getById(x.split('_')[0]) : x;
      return mark;
    },
    sortById: function sortById() {
      this.done.sort(function (mark1, mark2) {
        var id1 = mark1.id;
        var id2 = mark2.id;
        if (id1 === id2) return 0;
        return id1 < id2 ? -1 : 1;
      });
    },
    marksIntersect: function marksIntersect(mark1, mark2) {
      var wrappers1 = mark1.wrappers,
          w1 = wrappers1.length,
          id1 = mark1.id,
          wrappers2 = mark2.wrappers,
          id2 = mark2.id,
          w2 = void 0,
          tms = void 0,
          l = void 0;

      while (w1--) {
        w2 = wrappers2.length;
        while (w2--) {
          tms = wrappers1[w1].querySelectorAll('[data-tm-id]');
          l = tms.length;
          while (l--) {
            if (tms[l].getAttribute('data-tm-id')[0] == id2) return true;
          }
        }
      }
      return false;
    },
    onMarkerKey: function onMarkerKey(e, key) {
      var _this3 = this;

      var selection = this.selection = new _selection2.default();

      if (!selection.nodes) return false;

      if (e) {
        if (typeof e === 'string') key = e;else this.preventDefault(e);
      } else {
        key = key || 'm';
      }

      _store2.default.get('markers').then(function (markers) {
        _this3.store(_this3.mark(key, { style: markers[key] }));
      });
    },
    onHotkey: function onHotkey(key) {
      var self = this;
      switch (key) {
        case 'z':
          self.undo();break;
        case 'y':
          self.redo();break;
        case 's':
          self.save();break;
        case 'b':
          self.setBookmark();break;
      }
    },
    preventDefault: function preventDefault(e) {
      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }
      return this;
    },
    retrieveEntry: function retrieveEntry() {
      var _this4 = this;

      var entry = _store2.default.entry || {};

      return this.collectMarks().then(function (marks) {
        entry.marks = marks;
        entry.last = new Date().getTime();
        entry.bookmarked = !!_this4.bookmark;
        //entry.url = bookmarked && _STORE.pdf ? this.bookmark.createURL() : window.document.URL;
        entry.title = window.document.title;
        entry.count = entry.marks.length;
        entry.idcount = _this4.idcount;
        if (_store2.default.isNew) {
          entry.name = _store2.default.name;
          entry.first = entry.last;
          entry.url = window.document.URL;
          entry.synced = _store2.default.area_history === 'sync';
        }
        return entry;
      });
    },
    collectMarks: function collectMarks() {
      var _this5 = this;

      return _store2.default.get('history').then(function (history) {
        var marks = [],
            ids = [],
            done = _this5.done,
            oldMarks = _store2.default.isNew ? null : history.entries[_store2.default.name] ? history.entries[_store2.default.name].marks : null,
            l = done.length,
            m = 0,
            kD = void 0;

        for (; m < l; m++) {
          kD = done[m].keyData;
          marks.push(kD);
          ids.push(kD.id);
        }
        if (_store2.default.pdf && oldMarks) {
          m = 0;
          l = oldMarks.length;

          for (; m < l; m++) {
            if (ids.indexOf(oldMarks[m].id) === -1) marks.push(oldMarks[m]);
          }
        }
        return marks;
      });
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _markItem = __webpack_require__(138);

var _markItem2 = _interopRequireDefault(_markItem);

var _bookmark = __webpack_require__(139);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _selection = __webpack_require__(63);

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _MARK = function () {
		function _MARK(marker, key, preSettings) {
				_classCallCheck(this, _MARK);

				var selection = void 0,
				    defaults = void 0;

				this.marker = marker;
				selection = this.selection = marker.selection;

				defaults = {
						style: '',
						bookmark: false,
						conds: null,
						text: selection.text,
						note: ''
				};
				for (var d in defaults) {
						if (!preSettings.hasOwnProperty(d)) {
								preSettings[d] = defaults[d];
						}
				}
				preSettings.id = preSettings.id || ++marker.idcount;
				this.id = preSettings.id;
				this.simple = selection.simple;

				var range = this.range = selection.range;

				this.startOffset = range.startOffset;
				this.endOffset = range.endOffset;

				this.wrappers = null;
				this.containers = [];

				this.anchorNodePosition = null;
				this.focusNodePosition = null;

				this.keyData = {
						id: preSettings.id,
						key: key,
						style: preSettings.style,
						conds: preSettings.conds,
						text: preSettings.text,
						bookmark: preSettings.bookmark,
						note: preSettings.note
				};
		}

		_createClass(_MARK, [{
				key: 'create',
				value: function create(range) {
						range = range || this.range;
						var selection = this.selection,
						    style = this.keyData.style,
						    nodes = selection.nodes,
						    n = nodes.length,
						    wrappers = this.wrappers = this.wrappers || this.createWrappers(style, n),
						    i = 0,
						    lastIndex = n - 1,
						    node = void 0;

						for (; i < n; i++) {
								node = nodes[i];
								range.selectNodeContents(node);
								if (!i) range.setStart(node, this.startOffset);

								if (i === lastIndex) range.setEnd(node, this.endOffset);

								range.surroundContents(wrappers[i]);
								this.containers.push(wrappers[i].parentNode);

								node.parentNode.normalize();
						}

						this.definePosition(lastIndex);

						if (this.keyData.bookmark) this.marker.setBookmark(this);

						if (!this.keyData.conds) this.describe();

						this.registerClickListeners();

						return this;
				}
		}, {
				key: 'registerClickListeners',
				value: function registerClickListeners() {
						var _this = this;

						var wrappers = this.wrappers;
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
								for (var _iterator = wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var wrapper = _step.value;

										wrapper.addEventListener('click', function (e) {
												_store2.default.tmid = e.target.getAttribute('data-tm-id');
												_this.marker.emit('clicked:mark', {
														bookmark: !!_this.keyData.bookmark,
														note: !!_this.keyData.note
												});
										}, false);
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
		}, {
				key: 'definePosition',
				value: function definePosition(n, includingOffsets) {
						var wrappers = this.wrappers;
						n = typeof n === 'number' ? n : wrappers.length - 1;
						var firstWrapper = wrappers[0],
						    lastWrapper = wrappers[n];

						this.anchorNodePosition = this.whichChild(firstWrapper.parentNode, firstWrapper, true) - 1;
						this.focusNodePosition = this.whichChild(lastWrapper.parentNode, lastWrapper, true);

						if (!lastWrapper.previousSibling || lastWrapper.previousSibling.nodeType === 3) this.focusNodePosition -= 1;

						if (this.anchorNodePosition < 0) this.anchorNodePosition = 0;
						if (this.focusNodePosition < 0) this.focusNodePosition = 0;

						if (includingOffsets) {
								this.startOffset = firstWrapper.previousSibling && firstWrapper.previousSibling.data ? firstWrapper.previousSibling.data.length : 0;
								this.endOffset = this.simple ? this.startOffset + this.keyData.text.length : this.endOffset;
						}
						return this;
				}
		}, {
				key: 'resume',
				value: function resume() {
						this.definePosition(undefined, true).describe();

						return this;
				}
		}, {
				key: 'undo',
				value: function undo() {
						var containers = this.containers,
						    wrappers = this.wrappers,
						    w = wrappers.length,
						    container = void 0,
						    wrapper = void 0;

						while (w--) {
								container = containers[w];
								wrapper = wrappers[w];
								container.replaceChild(wrapper.firstChild, wrapper);
								container.normalize();
						}
						return this;
				}
		}, {
				key: 'redo',
				value: function redo() {
						var containers = this.containers,
						    selection = this.selection.self,
						    range = this.range;

						range.setStart(containers[0].childNodes[this.anchorNodePosition], this.startOffset);
						range.setEnd(containers[containers.length - 1].childNodes[this.focusNodePosition], this.endOffset);

						selection.removeAllRanges();
						selection.addRange(range);

						this.selection.collectNodes();
						selection.collapseToStart();

						return this.create();
				}
		}, {
				key: 'whichChild',
				value: function whichChild(parent, child, includingTextNodes) {
						if (!parent || !child) {
								return null;
						}
						var children = includingTextNodes || child.nodeType === 3 ? parent.childNodes : parent.children,
						    c = children.length,
						    i = 0;

						for (; i < c; i++) {
								if (children[i] === child) return i;
						}
				}
		}, {
				key: 'createWrappers',
				value: function createWrappers(style, number) {
						var wrappers = [],
						    hasNote = this.keyData.note,
						    i = 0,
						    wrapper = void 0;

						for (; i < number; i++) {
								wrapper = window.document.createElement('span');
								wrapper.classList.add('textmarker-highlight');
								wrapper.setAttribute('style', style);
								wrapper.setAttribute('data-tm-id', this.id + '_' + i);
								if (hasNote) wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
								//wrapper.setAttribute('contextmenu', 'textmarker-ctm');
								wrappers.push(wrapper);
						}
						return wrappers;
				}
		}, {
				key: 'describe',
				value: function describe() {
						if (_store2.default.pdf) return this._describe_PDF();

						this._describe();
				}
		}, {
				key: '_describe',
				value: function _describe() {
						var range = this.range,
						    selection = this.selection,
						    start = range.startContainer,
						    end = range.endContainer,
						    singleNode = this.simple,

						//parent = this.containers ? this.containers[0] : start.parentNode,
						parent = this.wrappers[0].parentNode,
						    parentIsTM = parent.hasAttribute('data-tm-id'),
						    grampa = parent.parentNode,
						    grandgrampa = grampa.parentNode || 0,
						    fTNP = this.anchorNodePosition;

						this.keyData.conds = {
								o: this.startOffset,
								n1: parentIsTM ? 'TM' : parent.nodeName,
								p1: fTNP,
								n2: grampa.nodeName,
								p2: this.whichChild(grampa, parent),
								p3: grandgrampa ? this.whichChild(grandgrampa, grampa) : undefined,
								p4: grandgrampa && grandgrampa.parentNode ? this.whichChild(grandgrampa.parentNode, grandgrampa) : undefined
						};
						return this.keyData.conds;
				}
		}, {
				key: '_describe_PDF',
				value: function _describe_PDF() {
						var M = this,
						    rg = this.range,
						    start = this.wrappers[0],
						    end = this.wrappers[this.wrappers.length - 1],
						    singleNode = this.simple,
						    extremes = singleNode ? [start] : [start, end],
						    startOffset = this.startOffset,
						    endOffset = this.endOffset,
						    nodes = [this.anchorNodePosition, this.focusNodePosition],
						    offsets = [startOffset, endOffset],
						    containers = [],
						    pages = [],
						    parent = void 0,
						    className = void 0,
						    isText = void 0;

						extremes.forEach(function (node, i) {
								parent = node.parentNode;

								if (parent.hasAttribute('data-tm-id')) containers[i] = parent.getAttribute('data-tm-id');else {
										parent = parent.parentNode;
										node = node.parentNode;
										containers[i] = M.whichChild(parent, node, 'DIV');
								}

								while (pages[i] === undefined && parent.parentNode) {
										if ((className = parent.className) && className === 'page') pages[i] = parent.getAttribute('data-page-number') * 1;else parent = parent.parentNode;
								}
								if (pages[i] === undefined) pages[i] = containers[i] = offsets[i] = i * -1;

								if (containers[i] === undefined) containers[i] = i * -1;

								pages[i] = pages[i] || 1;
						});

						this.keyData.conds = {
								pageIntersection: !singleNode && pages[0] !== pages[1],
								offsets: offsets,
								containers: containers,
								nodes: nodes,
								pages: pages
						};

						return this.keyData.conds;
				}
		}]);

		return _MARK;
}();

exports.default = _MARK;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _BOOKMARK = function () {
    function _BOOKMARK() {
        _classCallCheck(this, _BOOKMARK);

        this.mark = null;
        this.anchor = null;
    }

    _createClass(_BOOKMARK, [{
        key: 'set',
        value: function set(mark) {
            mark = mark || this.mark;

            var wrappers = mark.wrappers,
                w = wrappers.length,
                anchor = wrappers[0];

            mark.keyData.bookmark = true;
            anchor.id = 'textmarker-bookmark-anchor';

            while (w--) {
                wrappers[w].classList.add('textmarker-bookmark');
            }this.mark = mark;
            this.anchor = anchor;

            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            var mark = this.mark,
                anchor = this.anchor,
                wrappers = mark.wrappers,
                w = wrappers.length;

            anchor.id = '';
            mark.keyData.bookmark = false;

            while (w--) {
                wrappers[w].classList.remove('textmarker-bookmark');
            }
        }
    }, {
        key: 'scrollIntoView',
        value: function scrollIntoView(bm) {
            if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor'))) bm.scrollIntoView();
        }
    }]);

    return _BOOKMARK;
}();

exports.default = _BOOKMARK;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return [new Restorer({
    events: {
      ENV: {
        'restore:marks': 'init'
      }
    },
    queue: [],
    cache: [],
    lost: [],
    restored: [],
    area: 'sync',
    phase: 1,

    init: function init(entry) {
      if (_store2.default.pdf) return false;

      _store2.default.name = entry.name;
      _store2.default.entry = entry;

      var now = [],
          postponed = [],
          marks = entry.marks,
          l = marks.length,
          i = 0,
          mark = void 0;

      this.area = entry.synced ? 'sync' : 'local';

      for (; i < l; i++) {
        mark = marks[i];

        this.convertDescription(mark).createTempObject(mark);

        if (mark.conds.n1 === 'TM') postponed.push(mark);else now.push(mark);
      }

      this.queue.push(now);

      for (i = 0, l = postponed.length; i < l; i++) {
        this.queue.push([postponed[i]]);
      }this.restore().report();
    },
    convertDescription: function convertDescription(mark) {
      if (typeof mark.conds.o === 'undefined') {
        var conds = mark.conds,
            convertedConds = {
          o: conds.startOffset,
          n1: conds.firstNodeName,
          n2: conds.firstParentNodeName,
          p1: conds.firstTextNodePosition,
          p2: conds.firstNodePosition,
          p3: conds.firstParentNodePosition,
          p4: conds.firstGrampaNodePosition
        };
        delete mark.conds;
        mark.conds = convertedConds;
      }
      return this;
    },
    createTempObject: function createTempObject(mark) {
      var trimmedText = this.squeeze(mark.text);

      mark.temp = {
        trimmedText: trimmedText,
        trimmedTextLength: trimmedText.length,
        possiblePositions: [],
        possibleStartNodes: [],
        possibleEnds: {},
        possibleFocusOffsets: []
      };
    },
    restore: function restore() {
      if (this.phase === 2) this.sortQueueById();

      var marks = this.marks = this.queue.shift(),
          length = marks ? marks.length : 0;

      this.length = length;

      if (length) {
        this.setBodySelection(window.document.body).getTextPositions(marks, length);

        if (this.phase === 1 && length > 1) this.postponeOverlappings();

        this.findPossibleExtrema().ruleOutMultiples().recreateMarks();
      }

      this.phase++;

      if (this.queue.length) this.restore();

      return this;
    },
    sortQueueById: function sortQueueById() {
      var marks = this.queue,
          l = marks ? marks.length : 0,
          temp = [],
          res = [],
          i = 0,
          mark = void 0,
          t = void 0;

      while (l--) {
        if (!marks[l].length) continue;
        mark = marks[l][0];
        temp[mark.id] = mark;
      }
      this.queue = [];

      for (t = temp.length; i < t; i++) {
        if (temp[i]) this.queue.push([temp[i]]);
      }
      return this;
    },
    getTextPositions: function getTextPositions(marks, l) {
      var trimmedSelectionText = this.trimmedSelectionText,
          allPossibleStartPositions = this.allPossibleStartPositions = [],
          endPositions = [],
          mark = void 0,
          markTemp = void 0,
          trimmedText = void 0,
          trimmedTextLength = void 0,
          p = void 0,
          endPosition = void 0;

      while (l--) {
        p = undefined;
        mark = marks[l];
        markTemp = mark.temp;

        if (!markTemp) {
          marks.splice(l, 1);
          continue;
        }

        trimmedText = markTemp.trimmedText;
        trimmedTextLength = markTemp.trimmedTextLength;

        while (p !== -1) {
          if (p === undefined) p = -1;
          p = trimmedSelectionText.indexOf(trimmedText, p + 1);
          endPosition = p + trimmedTextLength;
          markTemp.possiblePositions.push(p);
          allPossibleStartPositions.push([p, endPosition, mark]);
          endPositions.push(endPosition);
        }

        markTemp.possiblePositions.pop();
        allPossibleStartPositions.pop();
        endPositions.pop();

        if (!markTemp.possiblePositions.length) this.lost.push(mark);
      }
      this.sortPossibleStartPositions(allPossibleStartPositions);
      this.maxPosition = Math.max.apply(null, endPositions);

      return this;
    },
    sortPossibleStartPositions: function sortPossibleStartPositions(positions) {
      var l = positions.length,
          temp = [],
          i = 0,
          pos = void 0,
          start = void 0,
          t = void 0;

      while (l--) {
        pos = positions[l];
        start = pos[0];

        if (temp[start]) temp.splice(start + 1, 0, pos);else temp[start] = pos;
      }
      t = temp.length;
      this.allPossibleStartPositions = [];

      for (; i < t; i++) {
        if (temp[i]) this.allPossibleStartPositions.push(temp[i]);
      }
    },
    postponeOverlappings: function postponeOverlappings() {
      var positions = this.allPossibleStartPositions,
          p = positions.length,
          postponed = [],
          pos1 = void 0,
          pos2 = void 0,
          i = void 0,
          m1 = void 0,
          m2 = void 0,
          id = void 0;

      if (p > 1) {
        while (p-- > 1) {
          pos1 = positions[p - 1];
          pos2 = positions[p];

          if (pos1[1] > pos2[0] && pos1[0] < pos2[1]) {
            m1 = pos1[2];
            m2 = pos2[2];

            if (m1.id < m2.id) {
              id = m2.id;

              if (!postponed.includes(id)) {
                this.postpone(m2);
                postponed.push(id);
              }
            } else {
              id = m1.id;

              if (!postponed.includes(id)) {
                this.postpone(m1);
                postponed.push(id);
              }
            }
          }
        }
        p = postponed.length;

        for (i = 0; i < p; i++) {
          this.cutOutFor(postponed[i]);
        }
      }
      return this;
    },
    cutOutFor: function cutOutFor(id) {
      var positions = this.allPossibleStartPositions,
          p = positions.length;

      while (p--) {
        if (positions[p][2].id === id) this.allPossibleStartPositions.splice(p, 1);
      }
    },
    postpone: function postpone(mark) {
      var queue = this.queue,
          l = queue.length,
          alreadyIncluded = false;

      while (l--) {
        if (queue[l][0] === mark) {
          alreadyIncluded = true;
          break;
        }
      }
      if (!alreadyIncluded) this.queue.push([mark]);
    },
    findPossibleExtrema: function findPossibleExtrema() {
      var selection = this.selection,
          range = this.range,
          nodes = this.bodyTextNodes,
          n = nodes.length,
          indices = this.allPossibleStartPositions,
          phase = this.phase,
          cache = this.cache = [],
          satisfied = [],
          i = 0,
          chars = 0,
          nextStartFound = void 0,
          endingsInThisNode = void 0,
          node = void 0,
          nodesText = void 0,
          nodesTextLength = void 0,
          mark = void 0,
          diff = void 0,
          l = void 0,
          startPosition = void 0,
          endPosition = void 0,
          e = void 0,
          f = void 0,
          id = void 0,
          p = void 0,
          q = void 0,
          x = void 0,
          m = void 0,
          possibleFocusOffset = void 0,
          startFoundFor = void 0,
          postponed = void 0,
          hasEndingsInThisNode = void 0;

      for (; i < n; i++) {
        node = nodes[i];
        nodesText = this.squeeze(node.data);
        nodesTextLength = nodesText.length;
        chars += nodesTextLength;
        l = indices.length;
        startFoundFor = [];
        postponed = [];
        hasEndingsInThisNode = null;

        while (l--) {
          startPosition = indices[l][0];
          endPosition = indices[l][1];
          mark = indices[l][2];
          id = mark.id;

          mark.temp.startFoundFor = mark.temp.startFoundFor || [];
          mark.temp.endFoundFor = mark.temp.endFoundFor || [];

          if (!mark.temp.startFoundFor.includes(startPosition) && chars > startPosition && mark.temp.possibleStartNodes.length < mark.temp.possiblePositions.length) {
            if (hasEndingsInThisNode && hasEndingsInThisNode.id < mark.id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }
              indices.splice(l, 1);

              continue;
            } else {
              if (!this.satisfiesDescription(mark, node)) {
                if (phase === 1 && id !== 1) {
                  this.postpone(mark);
                  postponed.push(id);
                }
                indices.splice(l, 1);

                continue;
              } else {
                mark.temp.possibleStartNodes.push(node);
                mark.temp.startFoundFor.push(startPosition);
                startFoundFor.push(id);
              }
            }
          }
          if (mark.temp.startFoundFor.includes(startPosition) && !mark.temp.endFoundFor.includes(endPosition) && chars - endPosition >= 0) {
            if (Math.min.apply(null, startFoundFor) < id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }
              indices.splice(l, 1);
            } else {
              possibleFocusOffset = this.findFocusOffset(mark, node, endPosition - (chars - nodesTextLength));
              mark.temp.possibleFocusOffsets.push(possibleFocusOffset);
              mark.temp.endFoundFor.push(endPosition);
              mark.temp.possibleEnds[startPosition] = {
                node: node,
                offset: possibleFocusOffset
              };
              if (!satisfied.includes(id)) {
                cache.push(mark);
                satisfied.push(id);
              }

              hasEndingsInThisNode = mark;
              indices.splice(l, 1);
            }
          }
        }
        p = postponed.length;

        if (p) for (x = 0; x < p; x++) {
          this.cutOutFor(postponed[x]);
        }if (chars > this.maxPosition) break;
      }
      if (phase !== 1) {
        for (m in this.marks) {
          if (!satisfied.includes(this.marks[m].id)) this.lost.push(mark);
        }
      }
      return this;
    },
    ruleOutMultiples: function ruleOutMultiples() {
      var cache = this.cache,
          i = cache.length,
          mark = void 0,
          possibleStartNodes = void 0,
          p = void 0,
          parent = void 0,
          grampa = void 0,
          grandgrampa = void 0,
          matches = void 0,
          failed = void 0,
          q = void 0;

      while (i--) {
        mark = cache[i];
        matches = [];
        failed = false;
        possibleStartNodes = mark.temp.possibleStartNodes;
        p = possibleStartNodes.length;

        if (p > 1) {
          while (p--) {
            parent = possibleStartNodes[p].parentNode.parentNode;
            grampa = parent.parentNode || 0;

            if (!grampa || mark.conds.p3 === this.whichChild(grampa, parent)) matches.push(p);
          }
          if (!matches.length) p = 0;else {
            if (matches.length === 1) p = matches[0];else {
              p = undefined;

              while (matches.length) {
                q = matches.pop();
                parent = possibleStartNodes[q].parentNode;
                grampa = parent.parentNode || 0;
                grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0;

                if (!grandgrampa || mark.conds.p4 === this.whichChild(grandgrampa, grampa)) {
                  p = q;
                  break;
                }
              }
              if (!p) p = 0;
            }
          }
        } else p = 0;

        p = p || 0;

        mark.temp.startNode = mark.temp.possibleStartNodes[p];

        this.setMatchingEnd(mark, p);
      }
      return this;
    },
    setMatchingEnd: function setMatchingEnd(mark, p) {
      var startPosition = mark.temp.startFoundFor[p],
          end = mark.temp.possibleEnds[startPosition];

      mark.temp.endNode = end.node;
      mark.temp.focusOffset = end.offset;
    },
    satisfiesDescription: function satisfiesDescription(mark, node) {
      var description = mark.conds,
          parentNode = node.parentNode,
          grampa = parentNode.parentNode,
          grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0,
          startOffset = description.o,
          relevantNodeText = node.data.substring(startOffset).trim(),
          l = relevantNodeText.length,
          markText = mark.text.trim(),
          m = markText.length,
          textsMatch = void 0;

      if (m <= l) textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;else textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;

      return textsMatch && (parentNode.nodeName === description.n1 || description.n1 === 'TM' && parentNode.hasAttribute('data-tm-id')) && (!grampa || grampa.nodeName === description.n2) && this.whichChild(parentNode, node) === description.p1;
    },
    findFocusOffset: function findFocusOffset(mark, node, n) {
      var nodeText = node.data,
          l = nodeText.length,
          i = 0,
          counter = 0;

      for (; i < l; i++) {
        if (this.squeeze(nodeText[i])) counter++;

        if (counter === n) return (/\s$/.test(mark.text) ? i + 2 : i + 1
        );
      }
    },
    recreateMarks: function recreateMarks() {
      var range = this.range,
          selection = this.selection,
          marks = this.cache,
          i = marks.length,
          mark = void 0,
          markTemp = void 0,
          start = void 0,
          end = void 0,
          focusOffset = void 0;

      while (i--) {
        mark = marks[i];
        markTemp = mark.temp;
        start = markTemp.startNode;
        end = markTemp.endNode;
        focusOffset = markTemp.focusOffset;

        if (!start || !end || !(typeof focusOffset === 'number')) this.lost.push(mark);else {
          try {
            range.setStart(start, mark.conds.o);
            range.setEnd(end, focusOffset);
            selection.resume(range);
            this.emit('restored:range', selection, mark);
            this.restored.push(mark);
          } catch (e) {
            this.lost.push(mark);
          }
          delete mark.temp;
        }
      }
    }
  }), new Restorer({
    events: {
      ENV: {
        'restore:marks': 'init'
      }
    },
    sel: null,
    trimmedText: '',
    lost: [],
    restored: [],

    init: function init(entry) {
      if (!_store2.default.pdf) return false;

      _store2.default.name = entry.name;
      _store2.default.entry = entry;

      this.area = entry.synced ? 'sync' : 'local';

      this.restore(entry.marks, entry.count);
    },
    restore: function restore(marks, idCount) {
      //Mark.prototype.count = idCount;
      var m = marks.length,
          R = this,
          selection = this.selection,
          pageContainers = window.document.getElementsByClassName('page'),
          pages = {},
          markedPages = [],
          currPage = void 0,
          currContainer = void 0,
          mark = void 0,
          conds = void 0,
          startPage = void 0,
          endPage = void 0,
          p = void 0,
          i = void 0;

      for (i = 0; i < m; i++) {
        mark = marks[i];
        conds = mark.conds;
        startPage = conds.pages[0];
        markedPages.push(startPage);
        pages[startPage] = pages[startPage] || [];
        pages[startPage].push(mark);

        if (conds.pageIntersection) {
          endPage = conds.pages[1];

          do {
            pages[endPage] = pages[endPage] || [];
            pages[endPage].push(mark);
            markedPages.push(endPage);
          } while (--endPage > startPage);
        }
      }
      markedPages = unique(markedPages.sort(function (a, b) {
        return a - b;
      }));

      function unique(arr) {
        var len = arr.length,
            res = [],
            i = 0;

        for (; i < len; i++) {
          if (i === len - 1 || arr[i] !== arr[i + 1]) res.push(arr[i]);
        }return res;
      }

      function process(mark) {
        var text = mark.text,

        //currContainer = window.document.getElementById('pageContainer' + currPage),
        selection = void 0,
            range = void 0;

        R.setBodySelection(currContainer);
        selection = R.selection;
        range = R.range;

        if (!R.textExistsOnPage(currContainer, text)) {
          delete mark.conds;
          R.lost.push(mark);

          return true;
        }
        var conds = mark.conds,
            start = conds.containers[0],
            end = conds.containers[1],
            extremes = end === undefined ? [start, start] : [start, end],
            offsets = conds.offsets,
            divsOnPage = void 0,
            d = void 0,
            last = void 0;

        if (conds.pageIntersection) {
          if (conds.pages[0] === currPage) {
            extremes[1] = -1;
            offsets[1] = -1;
          } else {
            extremes[0] = 0;
            offsets[0] = 0;
          }
        }
        extremes.forEach(function (pos, i) {
          if (typeof pos === 'string') {
            extremes[i] = currContainer.querySelector('span[data-tm-id="' + pos + '"]');
          } else {
            divsOnPage = divsOnPage || currContainer.getElementsByClassName('textLayer')[0].querySelectorAll('div');
            d = d || divsOnPage.length;

            if (pos < 0) {
              last = extremes[1] = divsOnPage[d - 1];
              offsets[1] = last.lastChild.data.length;
            } else {
              extremes[i] = divsOnPage[pos];
            }
          }
        });

        extremes[1] = extremes[1] || extremes[0];

        try {
          range.setStart(extremes[0].childNodes[conds.nodes[0]], offsets[0]);
          range.setEnd(extremes[1].childNodes[conds.nodes[1]], offsets[1]);

          selection.resume(range);

          R.emit('restored:range', selection, mark);

          R.restored.push(mark);
        } catch (e) {
          delete mark.conds;
          R.lost.push(mark);
        }

        return true;
      }

      var monitorLoadingProcess = window.setInterval(function () {
        var l = markedPages.length,
            idx = void 0,
            k = void 0,
            box = void 0,
            textBoxes = void 0,
            t = void 0;

        pageContainers = window.document.getElementsByClassName('page');

        if (!l) {
          window.clearInterval(monitorLoadingProcess);
          return false;
        }

        while (l--) {
          k = markedPages[l] - 1;

          if ((box = pageContainers[k]) && box.hasAttribute('data-loaded') && (textBoxes = box.querySelectorAll('.textLayer div')) && (t = textBoxes.length) && textBoxes[t - 2].firstChild && textBoxes[t - 2].firstChild.data.length) {
            currPage = markedPages.splice(l, 1)[0];
            currContainer = box;

            R.processPeuAPeu(pages[currPage], process, R.proxy(R, R.report));
          }
        }
      }, 100);
    },
    textExistsOnPage: function textExistsOnPage(page, text) {
      var pageText = this.trimmedSelectionText;

      text = this.trimmedText = this.squeeze(text);

      return pageText.indexOf(text) !== -1;
    }
  })];
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _selection = __webpack_require__(63);

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Restorer = function (_MODULE2) {
  _inherits(Restorer, _MODULE2);

  function Restorer(obj) {
    _classCallCheck(this, Restorer);

    return _possibleConstructorReturn(this, (Restorer.__proto__ || Object.getPrototypeOf(Restorer)).call(this, obj));
  }

  _createClass(Restorer, [{
    key: 'processPeuAPeu',
    value: function processPeuAPeu(data, func, cb) {
      var d = Array.prototype.slice.call(data),
          done = void 0,
          time0 = void 0;

      (function rec() {
        var max = +new Date() + 500;
        do {
          done = func(d[0]);
          if (done) d.shift();
        } while (d.length > 0 && max > +new Date());

        if (d.length > 0) window.setTimeout(function () {
          return rec();
        }, 25);else cb();
      })();
    }
  }, {
    key: 'setBodySelection',
    value: function setBodySelection(el) {
      var selection = this.selection = new _selection2.default(el);

      this.trimmedSelectionText = this.squeeze(selection.text);

      this.bodyTextNodes = selection.nodes;
      this.range = selection.range;

      return this;
    }
  }, {
    key: 'squeeze',
    value: function squeeze(text) {
      return text.replace(/\t|\s|\n|\r/g, '');
    }
  }, {
    key: 'whichChild',
    value: function whichChild(parent, child, context) {
      if (!parent || !child) return null;

      var children = child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          pos = 0,
          i = 0,
          currentChild = void 0;

      for (; i < c; i++) {
        currentChild = children[i];

        if (currentChild === child) return pos;

        if (context) {
          if (currentChild.nodeName === context) pos++;
        } else {
          if (!(currentChild.nodeType === 3 && !currentChild.data)) pos++;
        }
      }
    }
  }, {
    key: 'report',
    value: function report() {
      var ll = this.lost.length;
      if (ll) {
        while (ll--) {
          delete this.lost[ll].temp;
        }
        this.emit('failed:restoration');
      } else {
        this.emit('succeeded:restoration');
      }
      this.emit('finished:restoration', _store2.default.name, this.restored, this.lost, this.area);
    }
  }]);

  return Restorer;
}(_utils._MODULE);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var DOC = window.document;

  return new _utils._MODULE({
    events: {
      ENV: {
        'add:note': 'addAndShow',
        'removed:note': 'removeNoteStorage',
        'restore:notes': 'restore',
        'removed:mark': 'removeNote',
        'toggle:notes': 'toggleAll',
        'sidebar:toggle-notes': 'toggleAll'
      }
    },
    notes: {},
    toggle: null,
    add: function add(mark) {
      return this.notes[mark.id] = new _note2.default(mark);
    },
    restore: function restore(marks) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mark = _step.value;

          if (mark.keyData.note) this.add(mark);
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

      this.emit('added:note');
    },
    addAndShow: function addAndShow(mark) {
      this.add(mark).show();
      this.emit('added:note');
    },
    removeNoteStorage: function removeNoteStorage(id) {
      delete this.notes[id];
      if (this.isEmpty(this.notes)) this.emit('removed:last-note');
    },
    removeNote: function removeNote(id) {
      if (this.notes[id]) this.notes[id].remove();
    },
    toggleAll: function toggleAll() {
      if (!this.notes) return;
      var notes = this.notes;
      var meth = DOC.getElementsByTagName('tmnote').length ? 'hide' : 'show',
          condition = meth === 'hide' ? true : false,
          note = void 0;
      for (var n in notes) {
        note = notes[n];
        if (note.visible === condition) {
          note[meth]();
        }
      }
    },
    isEmpty: function isEmpty(obj) {
      return !Object.keys(obj).length;
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

var _note = __webpack_require__(142);

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mark) {

  var BODY = window.document.body;

  return new _utils._DOMMODULE({
    events: {
      DOM: {
        click: {
          'tmnotedelete': '_delete',
          'tmnoteminimize': 'hide',
          'textarea': 'bringUpFront'
        },
        keyup: {
          'textarea': 'attemptUpdate'
        }
      }
    },
    addListenersManually: true,
    el: null,
    mark: mark,
    markClickHandler: null,
    text: '',
    visible: false,
    recentlyUpdated: false,

    autoinit: function autoinit() {
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },
    createNoteElement: function createNoteElement() {
      var _this = this;

      var note = this.el = document.createElement('tmnote');
      var del = this.del = document.createElement('tmnotedelete');
      var min = this.min = document.createElement('tmnoteminimize');
      var p = this.textElement = document.createElement('textarea');
      var text = this.mark.keyData.note || '';
      var delText = document.createTextNode(String.fromCharCode(10005));
      var minText = document.createTextNode(String.fromCharCode(0x2013));

      p.setAttribute('data-tm-note', true);
      del.appendChild(delText);
      min.appendChild(minText);
      note.appendChild(del);
      note.appendChild(min);
      note.appendChild(p);
      if (text) p.value = text;

      p.addEventListener('blur', function (e) {
        return _this.attemptUpdate(e, e.target, true);
      }, false);
    },
    _delete: function _delete() {
      this.remove();
      this.mark.keyData.note = '';
    },
    remove: function remove() {
      this.hide();
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    attemptUpdate: function attemptUpdate(e, el, force) {
      var _this2 = this;

      if (force) {
        this.update(el);
      } else if (!this.recentlyUpdated) {
        this.recentlyUpdated = true;
        window.setTimeout(function () {
          return _this2.update(el);
        }, 3000);
      }
    },
    update: function update(el) {
      this.mark.keyData.note = el.value;
      this.emit('updated:note');
      this.recentlyUpdated = false;
    },
    show: function show() {
      var el = this.el;
      var pos = this.getPosition();
      var innerWindowWidth = window.innerWidth;
      var left = pos.left;
      if (left + 340 > innerWindowWidth) {
        left = innerWindowWidth - 340;
      }
      BODY.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + (pos.top + pos.offset) + 'px;left:' + left + 'px;');
      this.visible = true;
    },
    bringUpFront: function bringUpFront() {
      var _this3 = this;

      Array.from(BODY.getElementsByTagName('tmnote')).forEach(function (note) {
        if (note === _this3.el) note.style.zIndex = 2147483647;else note.style.zIndex = 2147483646;
      });
    },
    hide: function hide() {
      BODY.removeChild(this.el);
      this.visible = false;
    },
    addMarkListeners: function addMarkListeners() {
      var _this4 = this;

      _store2.default.get('noteonclick').then(function (noteonclick) {
        if (noteonclick) {
          var handler = _this4.markClickHandler = function () {
            return _this4.show();
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this4.mark.wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var wrapper = _step.value;

              wrapper.addEventListener('click', handler, false);
              wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
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
      });
    },
    removeMarkListeners: function removeMarkListeners() {
      if (!this.markClickHandler) return;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mark.wrappers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var wrapper = _step2.value;

          wrapper.removeEventListener('click', this.markClickHandler, false);
          wrapper.removeAttribute('title');
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
    },
    getPosition: function getPosition() {
      var rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset - BODY.clientTop,
        left: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mark) {

  var DOC = window.document;

  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:misc-settings': 'updatePosition',
        'added:note': 'onNoteAdded',
        'added:bookmark': 'onBookmarkAdded',
        'removed:last-note': 'onLastNoteRemoved',
        'removed:bookmark': 'onBookmarkRemoved'
      },
      DOM: {
        click: {
          'tmnotestoggle': 'toggleNotes',
          'tmbm': 'scrollToBookmark'
        }
      }
    },
    addListenersManually: true,
    el: null,
    notesBtn: null,
    bmBtn: null,
    notesBtnActive: false,
    bmBtnActive: false,
    bookmark: false,
    notes: false,

    autoinit: function autoinit() {
      this.createEl();
      this.createBtns();
      this.addListeners();
    },
    createEl: function createEl() {
      var el = this.el = DOC.createElement('tmui');
      DOC.body.appendChild(el);
      this.updatePosition();
    },
    createBtns: function createBtns() {
      var notesBtn = this.notesBtn = DOC.createElement('tmnotestoggle');
      var bmBtn = this.bmBtn = DOC.createElement('tmbm');
      notesBtn.title = browser.i18n.getMessage('toggle_notes');
      bmBtn.title = browser.i18n.getMessage('bm_scroll');
      if (_store2.default.pdf) bm.className = 'textmarker-bookmark-control';
    },
    addBtn: function addBtn(btn) {
      this.el.appendChild(btn);
      this.el.classList.add('active');
    },
    removeBtn: function removeBtn(btn) {
      this.el.removeChild(btn);
      if (!this.el.children.length) {
        this.el.classList.remove('active');
      }
    },
    updatePosition: function updatePosition() {
      var _this = this;

      _store2.default.get('tmuipos').then(function (pos) {
        return _this.el.setAttribute('style', pos.split('-').map(function (p) {
          return p + ':1px;';
        }).join(' '));
      });
    },
    onNoteAdded: function onNoteAdded() {
      var _this2 = this;

      this.notes = true;
      if (!this.notesBtnActive) {
        _store2.default.get('noteicon').then(function (noteicon) {
          if (noteicon) {
            _this2.addBtn(_this2.notesBtn);
            _this2.notesBtnActive = true;
          }
        });
      }
    },
    onLastNoteRemoved: function onLastNoteRemoved() {
      this.notes = false;
      if (this.notesBtnActive) {
        this.removeBtn(this.notesBtn);
        this.notesBtnActive = false;
      }
    },
    onBookmarkAdded: function onBookmarkAdded() {
      var _this3 = this;

      this.bookmark = true;
      if (!this.bmBtnActive) {
        _store2.default.get('bmicon').then(function (bmicon) {
          if (bmicon) {
            _this3.addBtn(_this3.bmBtn);
            _this3.bmBtnActive = true;
          }
        });
      }
    },
    onBookmarkRemoved: function onBookmarkRemoved() {
      this.bookmark = false;
      if (this.bmBtnActive) {
        this.removeBtn(this.bmBtn);
        this.bmBtnActive = false;
      }
    },
    toggleNotes: function toggleNotes() {
      this.emit('toggle:notes');
    },
    scrollToBookmark: function scrollToBookmark() {
      this.emit('scroll-to-bookmark');
    }
  });
};

var _utils = __webpack_require__(0);

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 15:
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOMMODULE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(1);

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

/***/ 17:
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

exports.default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_entry: 'sync',

  pdf: false,
  iframe: false,
  name: undefined,
  isNew: true,
  entry: null,
  tmid: '',

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
  _get_bmicon: function _get_bmicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.bmicon;
    });
  },
  _get_noteicon: function _get_noteicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteicon;
    });
  },
  _get_noteonclick: function _get_noteonclick() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteonclick;
    });
  },
  _get_tmuipos: function _get_tmuipos() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.tmuipos;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
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
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_naming: function _get_naming() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  }
});

/***/ }),

/***/ 5:
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

/***/ 6:
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(4);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _SELECTION = function () {
    function _SELECTION(node) {
        _classCallCheck(this, _SELECTION);

        var selection = this.self = window.getSelection();

        if (selection.rangeCount) this.range = selection.getRangeAt(0);

        if (node || !selection.isCollapsed) {
            if (node) {
                this.defined = node;

                this.create(node).reduceToOneRange().update().collectNodes(true).retrieveText();
            } else {
                if (_store2.default.pdf) this.adjust_PDF();

                this.collectNodes().reduceToOneRange().update().adjust().update().retrieveText();
            }
            selection.collapseToStart();
        }
    }

    _createClass(_SELECTION, [{
        key: 'create',
        value: function create(node) {
            this.self.selectAllChildren(node);

            return this;
        }
    }, {
        key: 'resume',
        value: function resume(range) {
            var selection = this.self;

            selection.removeAllRanges();
            selection.addRange(range);
            this.reduceToOneRange().update().collectNodes().retrieveText();
            selection.collapseToStart();
        }
    }, {
        key: 'update',
        value: function update(selection) {
            if (selection) this.self = selection;else selection = this.self;

            var props = ['focusNode', 'anchorNode', 'focusOffset', 'anchorOffset'],
                i = props.length;

            while (i--) {
                this[props[i]] = selection[props[i]];
            }this.range = selection.getRangeAt(0);
            this.simple = this.isSimple();

            return this;
        }
    }, {
        key: 'adjust',
        value: function adjust() {
            var selection = this.self,
                anchor = this.anchorNode,
                focus = this.focusNode;

            if (this.isBackwards(anchor, focus)) this.reverse(anchor, focus);else this.normalize(anchor, focus);

            return this;
        }
    }, {
        key: 'adjust_PDF',
        value: function adjust_PDF() {
            var selection = this.self,
                range = this.range,
                anchor = range.startContainer;

            while (anchor = anchor.parentNode) {
                if (anchor.id && anchor.id === 'viewer') return this;
            }

            try {
                anchor = window.document.getElementsByClassName('textLayer')[0].children[0].children[0];
            } finally {
                try {
                    anchor = window.document.getElementsByClassName('textLayer')[0].children[0];
                } finally {
                    anchor = window.document.getElementsByClassName('textLayer')[0];
                }
            }

            selection.getRangeAt(0).setStart(anchor, 0);

            return this;
        }
    }, {
        key: 'normalize',
        value: function normalize(anchor, focus) {
            var selection = this.self,
                range = this.range,
                firstTextNode = this.nodes[0],
                lastTextNode = this.nodes[this.nodes.length - 1];

            if (firstTextNode !== anchor) range.setStart(firstTextNode, firstTextNode.data.length - firstTextNode.data.trimLeft().length);

            if (lastTextNode !== focus) range.setEnd(lastTextNode, lastTextNode.data.length - (lastTextNode.data.length - lastTextNode.data.trimRight().length));
        }
    }, {
        key: 'collectNodes',
        value: function collectNodes(wholeDocument) {
            var self = this,
                selection = this.self,
                range = this.range,
                container = wholeDocument ? window.document.body : this.getCommonAncestorContainer(),
                iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
                acceptNode: function acceptNode(node) {
                    var parent = node.parentNode;
                    return selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(parent);
                }
            }, false),
                tempRange = document.createRange(),
                nodes = [],
                parentNodes = [],
                textNode,
                parent,
                firstNode,
                lastNode;

            while (textNode = iterator.nextNode()) {
                nodes.push(textNode);
            }
            this.nodes = this.getReducedNodeCollection(nodes);
            this.parentNodes = this.collectParentNodes(this.nodes);

            return this;
        }
    }, {
        key: 'getReducedNodeCollection',
        value: function getReducedNodeCollection(nodes) {
            var selection = this.self;
            var firstNode = void 0,
                lastNode = void 0;

            if (nodes.length > 1) {
                firstNode = nodes[0];
                if (selection.anchorNode === firstNode && firstNode.data.trimRight().length <= selection.anchorOffset) {
                    nodes.shift();
                }
                lastNode = nodes[nodes.length - 1];
                if (selection.focusNode === lastNode && this.isBlank(lastNode.data.substr(0, selection.focusOffset))) {
                    nodes.pop();
                }
            }
            return nodes;
        }
    }, {
        key: 'collectParentNodes',
        value: function collectParentNodes(nodes) {
            var l = nodes.length,
                parents = [],
                i = 0;

            for (; i < l; i++) {
                parents.push(nodes[i].parentNode);
            }return parents;
        }
    }, {
        key: 'retrieveText',
        value: function retrieveText() {
            var range = this.range,
                nodes = this.nodes,
                l = nodes.length,
                i = 0,
                nodeTexts = [],
                text = void 0;

            for (; i < l; i++) {
                nodeTexts.push(nodes[i].data);
            }l -= 1;

            if (this.simple)
                //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
                nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);else {
                //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
                //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
                nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
                nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : range.endOffset);
            }

            text = this.text = nodeTexts.join('');

            return this;
        }
    }, {
        key: 'getCommonAncestorContainer',
        value: function getCommonAncestorContainer() {
            var selection = this.self,
                node1 = selection.anchorNode,
                node2 = selection.focusNode;

            while (node1 = node1.parentNode) {
                if ((node1.compareDocumentPosition(node2) & 0x10) === 0x10) return node1;
            }
            return window.document.body;
        }
    }, {
        key: 'reverse',
        value: function reverse(anchor, focus) {
            var range = window.document.createRange(),
                selection = this.self;

            range.setStart(focus, selection.focusOffset);
            range.setEnd(anchor, selection.anchorOffset);

            selection.removeAllRanges();
            selection.addRange(range);

            this.update(selection).adjust(selection.anchorNode, selection.focusNode);
        }
    }, {
        key: 'reduceToOneRange',
        value: function reduceToOneRange() {
            var selection = this.self,
                rangeCount = selection.rangeCount,
                range0 = this.range,
                lastRange = void 0;

            if (rangeCount < 2) return this;

            lastRange = selection.getRangeAt(rangeCount - 1);

            range0.setStart(range0.startContainer, range0.startOffset);
            range0.setEnd(lastRange.endContainer, lastRange.endOffset);

            selection.removeAllRanges();
            selection.addRange(range0);

            return this;
        }
    }, {
        key: 'hasNormalParent',
        value: function hasNormalParent(node) {
            var tag = node.tagName.toUpperCase();

            return tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' && tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' && tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' && tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' && tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' && tag !== 'MATH' && tag !== 'OBJECT' && !this.isInsideSVG(node);
        }
    }, {
        key: 'isInsideSVG',
        value: function isInsideSVG(node) {
            while (node) {
                if (node.nodeName === 'svg') return true;
                node = node.parentNode;
            }
            return false;
        }
    }, {
        key: 'isBlank',
        value: function isBlank(node) {
            var text = void 0;
            if (typeof node === 'string') text = node;else {
                if (node && typeof node.data === 'string') text = node.data;else text = this.text;
            }
            return text.search(/[^\s\n\r\t]/g) === -1;
        }
    }, {
        key: 'isBackwards',
        value: function isBackwards(anchor, focus) {
            var selection = this.self,
                position = anchor.compareDocumentPosition(focus);

            return position === 2 || position === 10 || !position && selection.anchorOffset > selection.focusOffset;
        }
    }, {
        key: 'isSimple',
        value: function isSimple() {
            var selection = this.self,
                anchorNode = selection.anchorNode,
                focusNode = selection.focusNode;

            return anchorNode === focusNode && anchorNode.nodeType === 3 && (!anchorNode.nextSibling || anchorNode.nextSibling.compareDocumentPosition(focusNode) !== 4);
        }
    }]);

    return _SELECTION;
}();

exports.default = _SELECTION;

/***/ }),

/***/ 7:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PORT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(1);

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

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(1);

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

/***/ })

/******/ });