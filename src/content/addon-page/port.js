import { _PORT } from './../_shared/utils'

export default new _PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: [
      'change:style-setting',
      'change:autonote-setting',
      'change:mark-method-setting',
      'toggle:shortcut-setting',
      'change:shortcut-setting',
      'toggle:ctm-setting',
      'change:saveopt-setting',
      'toggle:priv-setting',
      'change:namingopt-setting',
      'change:sort-setting',
      'change:view-setting',
      'toggle:noteopt-setting',
      'toggle:quickbuttonopt-setting',
      'toggle:notification-setting',
      'toggle:misc-setting',
      'change:misc-setting',
      'add:custom-marker',
      'remove:custom-marker',
      'delete:entries',
      'clean:entries',
      'open:entries',
      'view:entry',
      'sync:entry',
      'sync:history',
      'sync:settings',
      'import:storage',
      'toggle:sync',
      'change:custom-search-setting',
      'changed:per-page-count',
      'error:browser-console',
      'clear:logs',
      'tag:entries'
    ]
  }
})
