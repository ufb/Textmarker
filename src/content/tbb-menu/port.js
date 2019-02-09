import { _PORT } from './../_shared/utils'

export default new _PORT({
  name: 'tbb-menu',
  type: 'privileged',
  events: {
    CONNECTION: [
      'toggle:addon',
      'open:addon-page(tbb)',
      'error:browser-console'
    ]
  }
})
