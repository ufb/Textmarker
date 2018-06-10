import { _PORT } from './../../utils'

export default new _PORT({
  name: 'addon-page',
  type: 'content',
  events: {
    ONEOFF: [
      'change:style-setting',
      'toggle:shortcut-setting',
      'change:shortcut-setting',
      'toggle:ctm-setting',
      'change:saveopt-setting',
      'change:namingopt-setting',
      'change:sort-setting',
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
      'sync:entry',
      'sync:history',
      'sync:settings',
      'import:storage',
      'toggle:sync',
      'change:sync-type',
      'change:webdav-credentials',
      'change:custom-search-setting',
      'changed:per-page-count',
      'error:browser-console',
      'clear:logs',
'set-webdav',
'get-webdav'
    ]
  }
})
