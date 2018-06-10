import createClient from 'webdav'
import _STORAGE from './../storage'
import _DEFAULT_STORAGE from './../../data/default-storage'
import { _MODULE } from './../utils'

new _MODULE({
  events: {
    ENV: {
      'set-webdav': 'set',
      'get-webdav': 'get'
    }
  },

  autoinit() {
    createClient.setFetchMethod(window.fetch);
  },
  createClient() {
    return browser.storage.local.get().then(storage => {
      const sync = storage.sync;
      return createClient(sync.server, sync.user, sync.pw);
    });
  },

  set() {
    this.createClient()
      .then(client => client.putFileContents('/textmarker.txt', /*storage as string,*/ { format: "text" }))
      .then(() => console.log('success'))
      .catch(e => console.log('error', e));
  },
  get() {
    this.createClient()
      .then(client => client.getFileContents('/textmarker.txt', { format:'text' }))
      .then(text => console.log(JSON.parse(text)))
      .catch(e => console.log('error', e));
  }
})
