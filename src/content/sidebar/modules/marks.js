import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _SETTINGS from './../../../data/global-settings'

new _DOMMODULE({
  el: document.getElementById('tab--marks'),
  events: {
    ENV: {
      'entry:ordered-marks': 'setMarkIDs',
      'stored:entry': 'render'
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
    if (id) this.current = id;console.log('activating', this.current);
    const currentItem = this.el.getElementsByClassName('mark--active')[0];
    if (currentItem) currentItem.classList.remove('mark--active');
    document.querySelector('div[data-id="' + [this.current] + '"]').classList.add('mark--active');
    this.emit('sidebar:next-mark', this.current, { tab: 'active' });
  },
  activate(e, el) {
    el.classList.toggle('unfolded');
    this.activateListItem(1*el.parentNode.parentNode.getAttribute('data-id'));
  },
  foldList(e, el) {
    document.getElementById('marks').setAttribute('data-folded', el.value);
  },
  toggleNote(e, el) {
    el.parentNode.getElementsByClassName('mark__note')[0].classList.toggle('u-display--none');
  }
});
