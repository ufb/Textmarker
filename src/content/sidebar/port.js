import { _PRIVPORT } from './../_shared/utils'

export default new _PRIVPORT({
  name: 'sidebar',
  type: 'privileged',
  id: Math.random().toString().slice(2, 16),
  events: {
    CONNECTION: [
      'change:bg-setting',
      'error:browser-console',
      'sidebar:highlight',
      'sidebar:delete-highlight',
      'sidebar:bookmark',
      'sidebar:delete-bookmark',
      'sidebar:note',
      'sidebar:immut',
      'sidebar:save-changes',
      'sidebar:retry-restoration',
      'sidebar:delete-entry',
      'sidebar:undo',
      'sidebar:redo',
      'sidebar:copy',
      'sidebar:scroll-to-bookmark',
      'sidebar:toggle-notes',
      'sidebar:next-mark',
      'remove:tag',
      'add:tag',
      'open:addon-page(sb)',
      'opened:sidebar',
      'updated:page-note',
      'toggled:sidebar-tab',
      'sidebar:selected-marker',
      'changed:sidebar-theme'
    ]
  }
})
