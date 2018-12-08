import _STORE from './../_store'

export default class _MARK {

  constructor(marker, key, preSettings) {
    let selection, defaults;

		this.marker = marker;
		selection = this.selection = marker.selection;

    defaults = {
      style: '',
      bookmark: false,
      conds: null,
      text: selection.text,
      note: null
    };
    for (let d in defaults) {
      if (!preSettings.hasOwnProperty(d)) {
        preSettings[d] = defaults[d];
      }
    }
    preSettings.id = preSettings.id || ++marker.idcount;
		this.id = preSettings.id;
		this.simple = selection.simple;

		let range = this.range = selection.range;

		this.startOffset = range.startOffset;
		this.endOffset = range.endOffset;

		this.wrappers = null;
    this.containers = [];

		this.anchorNodePosition = null;
		this.focusNodePosition = null;

		this.keyData = {
			id: preSettings.id,
			key: key,
			style: preSettings.style,
			conds: preSettings.conds,
			text: preSettings.text,
			bookmark: preSettings.bookmark,
      note: preSettings.note
		};
  }

	create(range) {
    range = range || this.range;
    let selection = this.selection,
        style = this.keyData.style,
        nodes = selection.nodes,
        n = nodes.length,
        wrappers = this.wrappers = this.wrappers || this.createWrappers(style, n),
        i = 0,
        lastIndex = n - 1,
        node;

    for (; i < n; i++) {
      node = nodes[i];
      range.selectNodeContents(node);
      if (!i) range.setStart(node, this.startOffset);

      if (i === lastIndex)
        range.setEnd(node, this.endOffset);

      range.surroundContents(wrappers[i]);
      this.containers.push(wrappers[i].parentNode);

      node.parentNode.normalize();
    }

    this.definePosition(lastIndex);

    if (this.keyData.bookmark) this.marker.setBookmark(this, false);

    if (!this.keyData.conds) this.describe();

		this.registerClickListeners();

		return this;
	}
  registerClickListeners() {
    const wrappers = this.wrappers;
    for (let wrapper of wrappers) {
      wrapper.addEventListener('click', this.marker.proxy(this, this.onClick), false);
    }
  }
  onClick(e) {
    let event;
    if (e.target) {
      e.stopPropagation();
      _STORE.tmid = e.target.getAttribute('data-tm-id');
      event = 'clicked:mark';
    } else {
      _STORE.tmid = e + '_0';
      event = 'activated:mark';
    }
    this.marker.emit(event, {
      id: this.id,
      bookmark: !!this.keyData.bookmark,
      note: !!this.keyData.note
    });
  }
  definePosition(n, includingOffsets) {
    let wrappers = this.wrappers;
    n = typeof n === 'number' ? n : wrappers.length - 1;
    let firstWrapper = wrappers[0],
        lastWrapper = wrappers[n],
        anchorPrev, focusPrev;

    this.anchorNodePosition = this.whichChild(firstWrapper.parentNode, firstWrapper, true) - 1;
    this.focusNodePosition = this.whichChild(lastWrapper.parentNode, lastWrapper, true);

    anchorPrev = firstWrapper.previousSibling;
    focusPrev = lastWrapper.previousSibling;

    if (anchorPrev && anchorPrev.nodeType === 1) this.anchorNodePosition += 1;
    if (!focusPrev || focusPrev.nodeType === 3) this.focusNodePosition -= 1;

    if (this.anchorNodePosition < 0) this.anchorNodePosition = 0;
    if (this.focusNodePosition < 0) this.focusNodePosition = 0;

    if (includingOffsets) {
      this.startOffset = anchorPrev && anchorPrev.data ? anchorPrev.data.length : 0;
      this.endOffset = this.simple ? this.startOffset + this.keyData.text.length : this.endOffset;
    }
    return this;
  }
  resume() {
    this.definePosition(undefined, true)
        .describe();

    return this;
  }
	undo() {
		let containers = this.containers,
				wrappers = this.wrappers,
				w = wrappers.length,
				container, wrapper;

		while (w--) {
			container = containers[w];
			wrapper = wrappers[w];
			container.replaceChild(wrapper.firstChild, wrapper);
			container.normalize();
		}
		return this;
	}
	redo() {
    let containers = this.containers,
        selection = this.selection.self,
        range = this.range;

    range.setStart(containers[0].childNodes[this.anchorNodePosition], this.startOffset);
    range.setEnd(containers[containers.length - 1].childNodes[this.focusNodePosition], this.endOffset);

    selection.removeAllRanges();
    selection.addRange(range);

    this.selection.collectNodes();
    selection.collapseToStart();

    return this.create();
	}
	whichChild(parent, child, includingTextNodes) {
		if (!parent || !child) { return null; }
		let children = includingTextNodes || child.nodeType === 3 ? parent.childNodes : parent.children,
				c = children.length,
				i = 0;

    for ( ; i < c; i++) {
      if (children[i] === child) {
        return i;
      }
    }
	}
	createWrappers(style, number) {
		let wrappers = [],
        i = 0,
        wrapper;

		for ( ; i < number; i++) {
			wrapper = window.document.createElement('span');
      wrapper.classList.add('textmarker-highlight');
			wrapper.setAttribute('style', style.replace(/;/g, '!important;'));
			wrapper.setAttribute('data-tm-id', this.id + '_' + i);
      //wrapper.setAttribute('contextmenu', 'textmarker-ctm');
			wrappers.push(wrapper);
		}
		return wrappers;
	}
  describe() {
		let range = this.range,
      selection = this.selection,
			start = range.startContainer,
			end = range.endContainer,
			singleNode = this.simple,
			//parent = this.containers ? this.containers[0] : start.parentNode,
      parent = this.wrappers[0].parentNode,
      parentIsTM = parent.hasAttribute('data-tm-id'),
			grampa = parent.parentNode,
      grandgrampa = grampa.parentNode || 0,
			fTNP = this.anchorNodePosition;

		this.keyData.conds = {
			o: this.startOffset,
			n1: parentIsTM ? 'TM' : parent.nodeName,
			p1: fTNP,
			n2: grampa.nodeName,
			p2: this.whichChild(grampa, parent),
			p3: grandgrampa ? this.whichChild(grandgrampa, grampa) : undefined,
			p4: grandgrampa && grandgrampa.parentNode ? this.whichChild(grandgrampa.parentNode, grandgrampa) : undefined
		};
    return this.keyData.conds;
	}
}
