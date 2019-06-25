import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('troubleshooting'),
    events: {
      DOM: {
        click: {
          'option': 'toggleTopic',
          '.trouble__answer--btn': 'showArticle',
          '.trouble__answer--sub': 'showArticle',
          '.trouble__cancel': 'cancel',
          '.trouble__answer--no-entries': 'scanHistory'
        }
      }
    },

    currentTrouble: null,

    autoinit() {

    },

    toggleTopic(e, el) {
      if (this.currentTrouble) this.currentTrouble.classList.remove('open');
      const newTrouble = this.currentTrouble = document.getElementById(el.getAttribute('data-target'));
      newTrouble.classList.add('open');
    },
    showArticle(e, el) {
      el = el.nodeName === 'BUTTON' ? el : el.parentNode;
      const boxClassList = el.parentNode.parentNode.classList;
      boxClassList.add('answered');
      boxClassList.add(`answered--${el.getAttribute('data-value')}`);
    },
    cancel() {
      Array.from(document.getElementsByClassName('answered')).forEach(el => {
        el.classList.remove('answered');
        el.classList.remove('answered--no');
        el.classList.remove('answered--yes');
      });
    },
    scanHistory() {

      const articles = [
        document.getElementById('history-scan__error'),
        document.getElementById('history-scan__empty'),
        document.getElementById('history-scan__nonempty'),
        document.getElementById('history-scan__nomarks')
      ];
      const [errEl, emptyEl, nonemptyEl, nomarksEl] = articles;

      articles.forEach(a => a.classList.add('u-display--none'));

      _STORE.get('history').then(history => {
        if (!history || !history.entries) {
          errEl.classList.remove('u-display--none');
        } else {
          const len = history.entries ? Object.keys(history.entries).length : 0;

          if (len) {
            nonemptyEl.classList.remove('u-display--none');
            let nomarks = true, entry;
            for (let e in history.entries) {
              entry = history.entries[e];
              if (entry.marks && entry.marks.length) {
                document.getElementById('history-scan__count').innerText = len;
                nomarks = false;
                break;
              }
            }
            if (nomarks) {
              nomarksEl.classList.remove('u-display--none');
            }
          } else {
            emptyEl.classList.remove('u-display--none');
          }
        }
      })
        .catch(e => {
          errEl.classList.remove('u-display--none');
          document.getElementById('history-scan__errormsg1').innerText = e.toString();
        })
        .then(() => {
          const articleClasses = document.getElementById('trouble--3').classList;

          articleClasses.add('answered');
          articleClasses.add('answered--yes');
        });
    }
  });
}
