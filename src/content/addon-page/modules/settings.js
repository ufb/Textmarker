import { _DOMMODULE } from './../../_shared/utils'
import _STORE from './../_store'
import _MARKER from './marker'

export default function() {
  return new _DOMMODULE({
    el: document.getElementById('settings'),
    events: {
      ENV: {
        'imported:settings': 'update',
        'updated:bg-color-settings': 'update',
        'updated:saveopt-settings': 'update',
        'updated:custom-search-settings': 'showCustomSearchSettingSuccess',
        'toggled:sync-settings': 'update'
      },
      DOM: {
        change: {
          '.css': 'changeStyle',
          '#customized-key': 'updateMarker',
          '#add-key': 'addMarker',
          '#remove-key': 'removeMarker',
          '.sc-cb': 'toggleShortcut',
          '.shortcut-select': 'changeShortcut',
          '.save-opt': 'changeSaveOpt',
          '.naming-opt': 'changeNamingOpt',
          '#notes-new': 'toggleSaveNoteOpt',
          '.customize-quickbuttons': 'changeQuickbuttonOpt',
          '.ctm-cb': 'toggleCtm',
          '.notes-cb': 'toggleNotes',
          '.misc-cb': 'toggleMisc',
          '.tmuipos': 'changeTmuiPositionOpt',
          '#private-save': 'togglePrivSave',
          '#auto-note': 'toggleAutoNoteOpt',
          '#autonote-color': 'changeAutoNoteOpt'
        },
        click: {
          '#custom-search': 'changeCustomSearch',
          '.custom-search-input': 'hideCustomSearchSettingSuccess'
        }
      }
    },
    allowedKeys: 'a b c d e f g h i j k l n o p q r s t u v x y z 0 1 4 5 6 7 8 9 enter - +'.split(' '),
    allowedShortcuts: ['', 'ctrlKey', 'shiftKey', 'altKey', 'ctrlKey-shiftKey', 'ctrlKey-altKey', 'shiftKey-altKey', 'metaKey', 'metaKey-shiftKey', 'metaKey-altKey'],
    allowedQuickbuttonOpts: ['title', 'url', 'text', 'text +meta', 'text +notes', 'text +lost', 'text m', 'text 2', 'text 3', 'text c', 'text lost'],
    markerKeys: ['m', '2', '3'],
    customMarkerKeys: [],
    marker: null,
    customSearch: browser.i18n.getMessage('lng') + '.wikipedia.org/wiki/',

    autoinit() {
      this.init();
    },
    init() {
      _STORE.get('settings').then(settings => {
        let markers = settings.markers,
            markerKeys = this.markerKeys,
            customMarkerKeys = this.customMarkerKeys,
            i, key;

        for (key in markers) {
          i = key.toLowerCase();
          if (!markerKeys.includes(i) && !customMarkerKeys.includes(i))
            this.customMarkerKeys.push(i);
        }

        this.renderMarkerSelectOptions()
            .updateMarker('m')
            .injectSettings(settings);
      });
    },
    resume() {
      Array.prototype.slice.call(document.getElementsByClassName('custom-key')).forEach(el => el.remove());
      Array.prototype.slice.call(document.getElementsByClassName('custom-marker-option')).forEach(el => el.remove());
      this.customMarkerKeys = [];
      return this;
    },
    update() {
      this.resume().init();
    },
    updateMarker(e, el, customBgColor) {
      let key = el ? el.value : e ? e : this.marker ? this.marker.key : 'm';

      this.marker = new _MARKER(key, customBgColor);

      return this;
    },
    renderMarkerSelectOptions() {
      let keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          removeKeySelect = document.getElementById('remove-key'),

          allowedKeys = this.allowedKeys,
          customMarkerKeys = this.customMarkerKeys,

          a = allowedKeys.length,
          c = customMarkerKeys.length,
          i = 0,

          fragment1 = document.createDocumentFragment(),
          fragment2 = document.createDocumentFragment(),
          fragment3 = document.createDocumentFragment(),
          fragment4 = document.createDocumentFragment(),

          option, icon, val, Val;

      for (; i < c; i++) {
        val = customMarkerKeys[i];
        Val = val.toUpperCase();
        Val = Val === 'ENTER' ? String.fromCharCode(0x21B5) : Val;
        option = document.createElement('option');
        fragment1.appendChild(option);
        option.value = val;
        option.innerText = val.toUpperCase();
        option.className = 'custom-marker-option custom-marker-option-' + val;

        fragment3.appendChild(option.cloneNode(true));

        icon = document.createElement('div');
        fragment2.appendChild(icon);
        icon.className = 'key custom-key';
        icon.id = 'custom-key-' + val;
        icon.innerText = Val;
      }

      keySelect.appendChild(fragment1);
      keyIcons.appendChild(fragment2);
      removeKeySelect.appendChild(fragment3);

      for (i = 0; i < a; i++) {
        val = allowedKeys[i].toLowerCase();

        if (customMarkerKeys.includes(val))
            continue

        Val = val.toUpperCase();
        option = document.createElement('option');
        fragment4.appendChild(option);
        option.value = val;
        option.innerText = Val;
        option.className = 'custom-marker-option custom-marker-option-' + val;
      }

      addKeySelect.appendChild(fragment4);

      return this;
    },
    injectSettings(settings) {
      let shortcuts = settings.shortcuts,
          i, scCheckbox, scSelect, cmCheckbox, sc;

      for (i in shortcuts) {
        sc = shortcuts[i];
        scCheckbox = document.getElementById('sc-' + i);
        scSelect = document.getElementById('shortcut-select-' + i);
        cmCheckbox = document.getElementById('cm-' + i);

        if (scCheckbox) scCheckbox.checked = sc[1];
        if (scSelect) scSelect.value = sc[0];
        if (cmCheckbox) cmCheckbox.checked = sc[2];
      }

      let historySettings = settings.history,
          saveOpts = document.getElementsByName('save-opt');

      if (historySettings.autosave) saveOpts[0].checked = true;
      else saveOpts[1].checked = true;

      document.getElementById('name-' + historySettings.naming).checked = true;
      document.getElementById('private-save').checked = historySettings.saveInPriv;
      document.getElementById('notes-new').checked = historySettings.saveNote;
      document.getElementById('quickbutton-download-select').value = historySettings.download;

      let miscSettings = settings.misc;

      document.getElementById('misc-bm').checked = miscSettings.bmicon;
      document.getElementById('misc-noteicon').checked = miscSettings.noteicon;
      document.getElementById('misc-noteonclick').checked = miscSettings.noteonclick;
      document.getElementById('misc-notetransp').checked = miscSettings.notetransp;
      document.getElementById('notes-restoration-failure').checked = miscSettings.failureNote;
      document.getElementById('notes-restoration-success').checked = miscSettings.successNote;
      document.getElementById('notes-pbm').checked = miscSettings.pbmNote;
      document.getElementById('notes-changed').checked = miscSettings.changedNote;
      document.getElementById('notes-error').checked = miscSettings.errorNote;
      document.getElementById('custom-search--start').value = miscSettings.customSearch ? miscSettings.customSearch[0] : this.customSearch;
      document.getElementById('custom-search--end').value = miscSettings.customSearch ? miscSettings.customSearch[1] : '';
      document.getElementById('tmuipos--noteicon').value = miscSettings.tmuipos;
      document.getElementById('tmuipos--bmicon').value = miscSettings.tmuipos;
    },
    showCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.remove('u-display--none');
    },
    hideCustomSearchSettingSuccess() {
      document.getElementById('custom-search--submitted').classList.add('u-display--none');
    },
    changeStyle(e, el) {
      const marker = this.marker.update(el);

      this.emit('change:style-setting', marker.key, marker.style);
    },
    toggleAutoNoteOpt(e, el) {
      const val = el.checked ? document.getElementById('autonote-color').value : false;
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    changeAutoNoteOpt(e, el) {
      const val = document.getElementById('auto-note').checked ? el.value : false;console.log('val', val);
      this.emit('change:autonote-setting', this.marker.key, val);
    },
    addMarker(e, el) {
      let key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          removeKeySelect = document.getElementById('remove-key'),
          option = el.children[el.selectedIndex],
          clone = option.cloneNode(true),
          icon = document.createElement('div'),
          bgColor = this.getRandomLightColor();

      if (!key || removeKeySelect.children.length >= 12 || this.allowedKeys.indexOf(key) === -1) return false;

      removeKeySelect.appendChild(option);
      removeKeySelect.selectedIndex = 0;
      keySelect.appendChild(clone);
      clone.selected = true;
      icon.className = 'key custom-key';
      icon.id = 'custom-key-' + key;
      keyIcons.appendChild(icon);
      icon.innerText = key === 'enter' ? String.fromCharCode(0x21B5) : key.toUpperCase();

      this.updateMarker(key, null, bgColor);

      this.emit('add:custom-marker', key, 'background-color:' + bgColor + ';');
    },
    removeMarker(e, el) {
      let key = el.value,
          keySelect = document.getElementById('customized-key'),
          keyIcons = document.getElementById('custom-keys'),
          addKeySelect = document.getElementById('add-key'),
          option;

      if (!key || this.allowedKeys.indexOf(key) === -1) return false;

      option = el.children[el.selectedIndex];
      addKeySelect.appendChild(option);//lieber an richtige stelle im alphabet setzen (alternativ an anfang)
      addKeySelect.selectedIndex = 0;
      el.selectedIndex = 0;

      keySelect.getElementsByClassName('custom-marker-option-' + key)[0].remove();
      document.getElementById('custom-key-' + key).remove();
      keySelect.selectedIndex = 0;

      this.updateMarker('m');

      this.emit('remove:custom-marker', key);
    },
    toggleShortcut(e, el) {
      this.emit('toggle:shortcut-setting', el.name, el.checked);
    },
    changeShortcut(e, el) {
      if (!this.allowedShortcuts.includes(el.value)) return false;

      this.emit('change:shortcut-setting', el.name, el.value);
    },
    toggleCtm(e, el) {
      this.emit('toggle:ctm-setting', el.name, el.checked);
    },
    changeSaveOpt(e, el) {
      this.emit('change:saveopt-setting', !!el.getAttribute('data-id'));
    },
    togglePrivSave(e, el) {
      this.emit('toggle:priv-setting', el.checked);
    },
    changeNamingOpt(e, el) {
      this.emit('change:namingopt-setting', el.getAttribute('data-id'));
    },
    toggleSaveNoteOpt(e, el) {
      this.emit('toggle:noteopt-setting', el.checked);
    },
    changeQuickbuttonOpt(e, el) {
      if (!this.allowedQuickbuttonOpts.includes(el.value)) return false;

      this.emit('toggle:quickbuttonopt-setting', el.name, el.value);
    },
    toggleNotes(e, el) {
      this.emit('toggle:notification-setting', el.name, el.checked);
    },
    toggleMisc(e, el) {
      this.emit('toggle:misc-setting', el.name, el.checked);
    },
    changeTmuiPositionOpt(e, el) {
      this.emit('change:misc-setting', el.name, el.value);
      Array.from(this.el.getElementsByClassName('tmuipos')).forEach(select => select.value = el.value);
    },
    changeCustomSearch(e, el) {
      this.hideCustomSearchSettingSuccess();
      const inp1 = document.getElementById('custom-search--start');
      const inp2 = document.getElementById('custom-search--end');
      const part1 = inp1.value;
      const part2 = inp2.value;
      if (!part1 && !part2) {
        inp1.value = this.customSearch;
        inp2.value = '';
        this.emit('change:custom-search-setting', false);
      } else {
        this.emit('change:custom-search-setting', [part1, part2]);
      }
    },
    getRandomLightColor() {
      return '#' + Math.floor((0.8 + Math.random() * 0.175) * 16777215).toString(16);
    }
  });
}
