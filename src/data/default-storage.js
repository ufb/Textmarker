export default {
  version: browser.runtime.getManifest().version,
  settings:{
    shortcuts: {
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false],
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
      sb: ['', '', true]
    },
    markers: {
      '2': 'background-color:#ffcc00;',
      '3': 'background-color:#00ff66;',
      m: 'background-color:#ffee00;'
    },
    history: {
      autosave: true,
      saveInPriv: false,
      naming: 'title',
      download: 'text',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      view: 'list',
      pp: 10
    },
    addon: {
      active: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      notetransp: false,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      customSearch: false,
      tmuipos: 'top-right'
    },
    sb: {
      tabs: {
        meta: { unfolded: false },
        tags: { unfolded: false },
        notes: { unfolded: false },
        markers: { unfolded: true },
        actions: { unfolded: true },
        marks: { unfolded: false },
        links: { unfolded: false }
      }
    }
  },
  history: {
    entries: {}
  },
  sync: {
    settings: false,
    history: false
  }
};
