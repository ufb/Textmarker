import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _SETTINGS from './../../../data/global-settings'

new _DOMMODULE({
  el: document.getElementById('tab--marks'),
  events: {
    ENV: {
      'entry:ordered-marks': 'setMarkIDs',
      'stored:entry': 'render',
      'updated:stored-entry' : 'render'
    },
    DOM: {
      click: {
        '.mark__text': 'activate',
        '.mark__note-btn': 'toggleNote',
        '.action-button--nav': 'nav',
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
  toggleMap: { '1': [false, false], '2': [true, false], '3': [false, true], '4': [true, true] },

  render() {
    const entry = this.entry = _STORE.entry;
    if (entry) {
      this.setMarks();
      if (!this.setFilters) this.renderSVGFilters();
      this.renderList();
    }
  },
  setMarks() {
    const marks = this.entry.marks;
    const markIDs = this.markIDs;
    this.length = marks.length;
    this.marks = markIDs ? marks.sort((m1, m2) => markIDs.indexOf(m1.id) < markIDs.indexOf(m2.id)) : marks;
  },
  setMarkIDs(ids) {
    this.markIDs = ids.reverse();
  },
  renderSVGFilters() {
    const body = document.body;
    const tmpl = document.getElementById('filter-template');
    const colors = {};
    let i, c;
    for (i in _SETTINGS.NOTE_COLORS) {
       c = _SETTINGS.NOTE_COLORS[i];
      colors[i.toLowerCase()] = '0 0 0 0 ' + this.convertHex(c.substr(1,2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(3,2)) + ' 0 0 0 0 ' + this.convertHex(c.substr(5,2)) + ' 0 0 0 1 0';
    }
    let filter;
    for (i in colors) {
      filter = tmpl.cloneNode(true);
      filter.getElementsByTagName('filter')[0].id = 'filter--' + i;
      filter.getElementsByTagName('feColorMatrix')[0].setAttribute('values', colors[i]);
      body.appendChild(filter)
    }
    this.setFilters = true;
  },
  convertHex(hex) {
    return ((16 * Number('0x' + hex[0])) + Number('0x' + hex[1])) / 255;
  },
  renderList() {
    const markTmpl = document.getElementById('mark-template');
    const fragment = document.createDocumentFragment();
    const marksContainer = document.getElementById('marks');
    let markContainer;

    marksContainer.innerText = '';

    this.marks.forEach((mark, i) => {

      markContainer = markTmpl.cloneNode(true);
      markContainer.id = '';
      markContainer.classList.remove('u-display--none');
      markContainer.setAttribute('data-id', i);

      const textNode = markContainer.getElementsByClassName('mark__text')[0];
      const textContent = document.createTextNode(mark.text);
      let color = mark.style.indexOf('background-color');
      let note = mark.note;
      color = color === -1 ? 'transparent' : mark.style.substr(color + 17, 7);
      let noteColor = note ? note.color : '';
      let noteBtn, noteNode;

      textNode.style.borderColor = color;
      textNode.appendChild(textContent);

      if (note) {
        markContainer.classList.add('mark--note');
        noteBtn = markContainer.getElementsByClassName('mark__note-btn')[0];
        noteBtn.classList.remove('u-display--none');
        noteBtn.classList.add('mark__note-btn--' + noteColor);
        noteNode = markContainer.getElementsByClassName('mark__note')[0];
        noteNode.appendChild(document.createTextNode(note.text));
        noteNode.classList.remove('u-display--none');
        noteNode.classList.add('mark__note--' + noteColor);
      }
      fragment.appendChild(markContainer);
    });
    marksContainer.appendChild(fragment);
  },
  nav(e, el) {
    const dir = 1 * el.getAttribute('data-value');
    this.current += dir;
    if (this.current >= this.length) this.current = 0;
    else if (this.current < 0) this.current = this.length - 1;
    this.activateListItem();
  },
  activateListItem(id) {
    if (typeof id === 'number') this.current = id;
    const currentItem = this.el.getElementsByClassName('mark--active')[0];
    if (currentItem) currentItem.classList.remove('mark--active');
    document.querySelector('div[data-id="' + [this.current] + '"]').classList.add('mark--active');
    this.emit('sidebar:next-mark', this.current, { tab: 'active' });
  },
  activate(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.classList.toggle('unfolded');
    this.activateListItem(1*el.parentNode.parentNode.getAttribute('data-id'));
  },
  foldList(e, el) {
    const val = el.value;
    if (val != 0) {
      const marks = document.getElementById('marks');
      const toggleSettings = this.toggleMap[val];

      this.toggle('text', toggleSettings[0]);
      this.toggle('note', toggleSettings[1]);
    }
  },
  toggleNote(e, el) {
    document.getElementById('fold-marks').value = 0;
    el.parentNode.getElementsByClassName('mark__note')[0].classList.toggle('unfolded');
  },
  toggle(type, show) {
    const meth = show ? 'add' : 'remove';
    Array.from(this.el.getElementsByClassName('mark__' + type))
      .forEach(el => el.classList[meth]('unfolded'));
  }
});
