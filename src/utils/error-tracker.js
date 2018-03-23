import { _MODULE } from './module'

const _ERRORTRACKER = new _MODULE({
  autoinit() {
    window.addEventListener('error', error => {
      this.emit('error:browser-console', {
        message: error.message,
        location: error.filename.split('/').pop().split('.').shift() + ':' + error.lineno + ':' + error.colno,
        time: (new Date()).getTime()
      });
    }, false);
  }
});

export default _ERRORTRACKER;
