import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

new _DOMMODULE({
  el: document.getElementById('tab--tags'),
  events: {
    ENV: {
      'stored:entry': 'render'
    },
    DOM: {
      click: {
        '.tags__remove': 'removeTag',
        '#add-tag': 'addTag'
      }
    }
  },

  render(entry) {
    if (entry) {
      const tags = entry.tag ? entry.tag.split(' ') : [];
      document.getElementById('tags').innerText = '';
      tags.forEach(tag => this.renderTag(tag));
    }
  },
  renderTag(tag) {
    const container = document.getElementById('tags');
    const el = document.createElement('div');
    const del = document.createElement('span');
    const x = document.createTextNode(String.fromCharCode(10005));
    el.className = 'tags__item u-overflow--ellipsis';
    del.className = 'tags__remove';
    del.setAttribute('data-tag', tag);
    el.innerText = tag;
    del.appendChild(x);
    el.appendChild(del);
    container.appendChild(el);
  },
  addTag() {
    const inp = document.getElementById('new-tag');
    const tag = inp.value;
    this.emit('add:tag', tag, _STORE.entry);
    inp.value = '';
    this.renderTag(tag);
  },
  removeTag(e, el) {
    this.emit('remove:tag', el.getAttribute('data-tag'), _STORE.entry);
    el.parentNode.parentNode.removeChild(el.parentNode);
  }
});
