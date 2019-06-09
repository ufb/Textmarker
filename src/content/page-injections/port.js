import { _PORT } from '../_shared/utils'

export default new _PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: [
      'copy:marks',
      'save:entry?',
      'update:entry?',
      'lookup:word',
      'error:browser-console',
      'changed:selection',
      'unsaved-changes',
      'clicked:mark',
      'activated:mark',
      'added:bookmark',
      'removed:bookmark',
      'added:note',
      'removed:last-note',
      'page-state',
      'notes-state',
      'visually-ordered:marks',
      'fetch:entries',

      // @RESTORER
      'finished:restoration',
  		'failed:restoration',
      'succeeded:restoration',
      'failed:restore-range',
      'canceled:save-after-canceled-restoration'
    ]
  }
});
