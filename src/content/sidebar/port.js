import { _PORT } from './../_shared/utils'

export default new _PORT({
  name: 'sidebar',
  type: 'privileged',
  events: {
    CONNECTION: [
      'change:bg-setting',
      'error:browser-console',
      'sidebar:highlight',
      'sidebar:delete-highlight',
      'sidebar:bookmark',
      'sidebar:delete-bookmark',
      'sidebar:note',
      'sidebar:save-changes',
      'sidebar:retry-restoration',
      'sidebar:undo',
      'sidebar:redo',
      'sidebar:scroll-to-bookmark',
      'sidebar:toggle-notes',
      'sidebar:next-mark',
      'remove:tag',
      'add:tag',
      'open:addon-page',
      'opened:sidebar',
      'updated:page-note',
      'toggled:sidebar-tab'
    ]
  }
})
