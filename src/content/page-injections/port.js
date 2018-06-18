import { _PORT } from './../utils'

export default new _PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: [
      'finished:restoration',
			'failed:restoration',
      'succeeded:restoration',
      'copy:marks',
      'save:entry?',
      'update:entry?',
      'lookup:word',
      'error:browser-console',
      'changed:selection',
      'unsaved-changes',
      'clicked:mark',
      'added:bookmark',
      'removed:bookmark',
      'added:note',
      'removed:last-note'
    ]
  }
});
