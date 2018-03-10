import { _PORT } from './../../utils'

export default new _PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: [
      'change:bg-setting',
      'open:addon-page'
    ]
  }
})
