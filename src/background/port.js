import { _PORT } from './utils'

new _PORT({
  name: 'background',
  type: 'background',
  postponeConnection: true,
  events: {
    ONEOFF: [
      'started:app',
      'toggled:addon',
      'toggled:sync',
      'toggled:sync-settings',
      'synced:entry',
      'updated:settings',
      'updated:history',
      'updated:history-on-restoration',
      'updated:logs',
      'updated:ctm-settings',
      'updated:misc-settings',
      'updated:bg-color-settings',
      'updated:custom-search-settings',
      'saved:entry',
      'deleted:entry',
      'deleted:entries',
      'imported:settings',
      'imported:history',
      'ctx:m',
      'ctx:d',
      'ctx:b',
      'ctx:-b'
    ],
    CONNECTION: [
      'started:app',
      'updated:settings',
      'toggled:sync-settings'
    ]
  }
});
