export default {
  version: browser.runtime.getManifest().version,
  settings:{
    shortcuts:{
      z: ['ctrlKey-altKey', true],
      y: ['ctrlKey-altKey', true],
      s: ['ctrlKey-altKey', true],
      c: ['ctrlKey-altKey', false],
      b: ['ctrlKey-altKey', true, true],
      d: ['', '', true],
      '-b': ['', '', true],
      m: ['', true, true],
      w: ['', true, true],
      n: ['', '', true],
      '2': ['', true],
      '3': ['', true]
    },
    markers: {
      '2': 'background-color:#cc0000;color:#ffffff;',
      '3': 'background-color:#ffc500;',
      m: 'background-color:#ffee66;'
    },
    history: {
      autosave: true,
      naming: 'title',
      download: 'text',
      copy: 'text',
      saveNote: true,
      sorted: 'date-last',
      pp: 10
    },
    addon: {
      active: true
    },
    misc: {
      bmicon: true,
      noteicon: true,
      noteonclick: true,
      overwrite: false,
      failureNote: true,
      successNote: true,
      pbmNote: true,
      changedNote: false,
      errorNote: true,
      customSearch: false,
      tmuipos: 'top-right'
    }
  },
  history: {
    entries: {},
    order: []
  },
  sync: {
    settings: false,
    history: false,
    type: 'default'
  }
};
