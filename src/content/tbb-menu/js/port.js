import { _PORT } from './../../utils'

export default new _PORT({
  name: 'tbb-menu',
  type: 'privileged',
  events: {
    CONNECTION: [
      'toggle:addon',
      'open:addon-page'
    ]
  }
})
