import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'

export default function() {

  const DOC = window.document;

  return new _DOMMODULE({
		events: {
      ENV: {
        'started:restoration': 'start',
        'restored:range': 'progress',
        'failed:restore-range': 'progress',
        'finished:restoration': 'stop',
        'updated:misc-settings': 'activate'
      }
		},
    el: null,
    active: true,
    steps: 0,
    totalWidth: 413,
    currentWidth: 0,
    stepLength: 0,
    cancelHandler: null,

    autoinit() {
      this.activate().then(() => this.create());
    },

    create() {
      const modal = this.el = DOC.createElement('tmprogressmodal');

      [{
        type: 'tmprogressheader',
        text: browser.i18n.getMessage('restoring')
      }, {
        type: 'tmprogressclose',
        text: String.fromCharCode(10005)
      }, {
        type: 'tmprogressbar',
        child: {
          type: 'tmprogress'
        }
      }, {
        type: 'tmprogresscancel',
        text: browser.i18n.getMessage('cancel')
      }]
        .forEach(obj => {
          const el = DOC.createElement(obj.type);
          modal.appendChild(el);
          this[obj.type] = el;
          if (obj.text) el.textContent = obj.text;
          if (obj.child) {
            const child = DOC.createElement(obj.child.type);
            el.appendChild(child);
            this[obj.child.type] = child;
          }
        });
    },

    resume(len) {
      this.steps = len;
      this.stepLength = this.totalWidth / len;
      this.currentWidth = 0;
      this.tmprogress.style.width = 0;
    },
    start(len) {
      if (!len || !this.active) return;
      this.resume(len);
      const cancelHandler = this.cancelHandler = this.cancel.bind(this);
      const closeHandler = this.closeHandler = this.stop.bind(this);
      DOC.body.appendChild(this.el);
      this.tmprogresscancel.addEventListener('click', cancelHandler, false);
      this.tmprogressclose.addEventListener('click', closeHandler, false);
    },
    progress() {
      const width = this.currentWidth += this.stepLength;
      this.tmprogress.style.width = width + 'px';
    },
    stop() {
      try {
        DOC.body.removeChild(this.el);
        this.tmprogresscancel.removeEventListener('click', this.cancelHandler, false);
        this.tmprogressclose.removeEventListener('click', this.closeHandler, false);
      } catch(e) {}
    },
    cancel() {
      this.stop();
      this.emit('canceled:restoration');
    },
    activate() {
      return _STORE.get('progressbar').then(progressbar => this.active = progressbar);
    }
	});
}
