import { _PORT } from './../../utils'

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
      'error:browser-console'
    ]
  }
});
