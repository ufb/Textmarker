import { _DOMMODULE } from './../../_shared/utils'

export default function() {

  const DOC = window.document;

  return new _DOMMODULE({
		events: {
      ENV: {
        'started:restoration': 'start',
        'restored:range': 'progress',
        'failed:restore-range': 'progress',
        'finished:restoration': 'stop'
      }
		},
    el: null,
    steps: 0,
    totalWidth: 413,
    currentWidth: 0,
    stepLength: 0,
    cancelHandler: null,

    autoinit() {
      this.create();
    },

    create() {
      const modal = this.el = DOC.createElement('tmprogressmodal');

      [{
        type: 'tmprogressheader',
        text: 'Restoring highlights...'
      }, {
        type: 'tmprogressbar',
        child: {
          type: 'tmprogress'
        }
      }, {
        type: 'tmprogresscancel',
        text: 'Cancel'
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
      this.resume(len);
      const handler = this.cancelHandler = this.cancel.bind(this);
      DOC.body.appendChild(this.el);
      this.tmprogresscancel.addEventListener('click', handler, false);
    },
    progress() {
      const width = this.currentWidth += this.stepLength;
      this.tmprogress.style.width = width + 'px';
    },
    stop() {
      this.tmprogresscancel.removeEventListener('click', this.cancelHandler, false);
      DOC.body.removeChild(this.el);
    },
    cancel() {
      this.stop();
      this.emit('canceled:restoration');
    }
	});
}
