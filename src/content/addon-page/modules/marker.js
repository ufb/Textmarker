import _STORE from './../_store'

export default class _MARKER {

  constructor(key, customBgColor) {
    this.key = key;

    this.styles = {
      'background-color': customBgColor,
      'color': undefined,
      'border-bottom': undefined,
      'font-size': undefined,
      'font-family': undefined,
      'font-weight': undefined,
      'font-style': undefined,
      'text-decoration': undefined,
      'text-shadow': undefined
    };

    this.shadow = {
      x: '1px',
      y: '1px',
      blur: '1px',
      color: '#000000'
    };

    this.init().then(() => this.inject().preview());
  }

  init() {
    return _STORE.get('markers').then(markers => {
      const marker = markers[this.key];
      const existingStyle = marker.style;

      this.autonote = marker.autonote ? true : false;

      if (!existingStyle) this.setStyle();
      else this.style = existingStyle;

      let styles = this.style.split(';'),
          i = styles.length,
          style, styleSplit, textShadow;

      while (i--) {
        style = styles[i];
        if (style) {
          styleSplit = style.split(':');
          this.styles[styleSplit[0]] = styleSplit[1];
        }
      }

      if ((textShadow = this.styles['text-shadow']) && textShadow !== 'none') {
        let shadowSplit = textShadow.split(' ');
        this.shadow.x = shadowSplit[0];
        this.shadow.y = shadowSplit[1];
        this.shadow.blur = shadowSplit[2];
        this.shadow.color = shadowSplit[3];
      }
    });
  }
  inject() {
    let marker = this,
        styles = this.styles,
        bgInput = document.getElementById('bg-color'),
        colorInput = document.getElementById('text-color'),
        borderInput = document.getElementById('border-color'),
        autonoteInput = document.getElementById('autonote-color'),
        bg = styles['background-color'],
        color = styles['color'],
        border = styles['border-bottom'],
        autonoteColor = this.autonote || '',
        shadow, shadowSelect, i;

    document.getElementById('auto-note').checked = this.autonote;
    autonoteInput.value = autonoteColor || 'yellow';
    autonoteInput.disabled = !autonoteColor;
    document.getElementById('bg-color-checkbox').checked = !!bg;
    bgInput.value = bg || '#ffffff';
    bgInput.disabled = !bg;
    document.getElementById('text-color-checkbox').checked = !!color;
    colorInput.value = color || '#000000';
    colorInput.disabled = !color;
    document.getElementById('border-color-checkbox').checked = !!border;
    borderInput.value = border || '1px solid #ff0000';
    borderInput.disabled = !border;

    ['font-size', 'font-family', 'font-weight', 'font-style', 'text-decoration'].forEach(prop => {
      document.getElementById(prop).value = styles[prop] || 'default';
    });

    shadowSelect =  document.getElementById('text-shadow');
    shadow = styles['text-shadow'];
    i = !shadow ? 0 : shadow === 'none' ? 2 : 1;

    shadowSelect.selectedIndex = i;
    shadowSelect.children[i].click();

    ['x', 'y', 'blur', 'color'].forEach(prop => {
      document.getElementById('text-shadow-' + prop).value = marker.shadow[prop].replace('px', '');
    });

    return this;
  }
  preview() {
    document.getElementById('example').style = this.style;

    return this;
  }
  update(el) {
    let classes = el.classList,
        prop = el.name,
        val;

    if (classes.contains('css-color')) {
      if (el.checked) {
        val = document.getElementById(el.getAttribute('data-target')).value;

        if (!this.isValid(prop, val)) return false;

        this.styles[prop] = prop === 'border-bottom' ? '1px solid ' + val : val;
      } else {
        this.styles[prop] = undefined;
      }
    }
    else if (classes.contains('shadow')) {
      val = el.value;

      if (val === 'default' || !this.isValid(prop, val))
        this.styles[prop] = '';
      else {
        let marker = this;

        switch(val) {
          case 'none': marker.styles['text-shadow'] = 'none'; break;
          case 'default': marker.styles['text-shadow'] = undefined; break;
          case 'shadow': marker.setShadow(); break;
          default: return false;
        }
      }
    }
    else if (classes.contains('shadow-value')) {
      val = el.value;

      if (!this.isValid(prop, val))
        this.styles[prop] = '';
      else {
        if (classes.contains('shadow-px-value'))
          val += 'px';

        this.shadow[prop] = val;
        this.setShadow();
      }
    }
    else if (prop === 'border-bottom') {
      val = '1px solid ' + el.value;
      this.styles[prop] = val;
    }
    else {
      val = el.value;

      if (val === 'default' || !this.isValid(prop, val))
        this.styles[prop] = '';
      else
        this.styles[prop] = val;
    }

    return this.setStyle().preview();
  }
  isValid(prop, val) {
    let valid;

    switch(prop) {
      case 'background-color': valid = /^#[0-9A-F]{6}$/i.test(val); break;
      case 'color': valid = /^#[0-9A-F]{6}$/i.test(val); break;
      case 'border-bottom': valid = /^#[0-9A-F]{6}$/i.test(val); break;
      case 'font-size': valid = /^[0-9]{1,2}px$/.test(val); break;
      case 'font-family': valid = /^[a-z,\s-]{5,40}$/i.test(val); break;
      case 'font-weight': valid = /^[a-z]{4,7}$/i.test(val); break;
      case 'font-style': valid = /^[a-z]{4,7}$/i.test(val); break;
      case 'text-decoration': valid = /^[a-z-]{7,12}$/i.test(val); break;
      case 'text-shadow': valid = /^[a-z]{4,7}$/i.test(val); break;
      case 'x': valid = /^\d$/; break;
      case 'y': valid = /^\d$/; break;
      case 'blur': valid = /^\d$/; break;
      default: valid = false;
    }

    return valid;
  }
  setShadow() {
    this.styles['text-shadow'] = this.shadow.x + ' ' + this.shadow.y + ' ' + this.shadow.blur + ' ' + this.shadow.color;
  }
  setStyle() {
    let style = '', val;

    for (var i in this.styles) {
      val = this.styles[i];
      if (val) style += i + ':' + val + ';';
    }
    this.style = style;
    return this;
  }
}
