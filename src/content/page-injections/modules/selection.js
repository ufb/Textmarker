import _STORE from './../_store'

export default class _SELECTION {

  constructor(node) {

    let selection = this.self = window.getSelection();

    if (selection.rangeCount) this.range = selection.getRangeAt(0);

    if (node || !selection.isCollapsed) {
      if (node) {
        this.defined = node;

        this.create(node)
            .reduceToOneRange()
            .update()
            .collectNodes(true)
            .retrieveText();
      } else {
        this.collectNodes()
            .reduceToOneRange()
            .update()
            .adjust()
            .update()
            .retrieveText();
      }
      selection.collapseToStart();
    }
  }

  create(node) {
    this.self.selectAllChildren(node);

    return this;
  }
  update(selection) {
    if (selection) this.self = selection;
    else selection = this.self;

    let props = ['focusNode', 'anchorNode', 'focusOffset', 'anchorOffset'],
        i = props.length;

    while (i--) this[props[i]] = selection[props[i]];

    this.range = selection.getRangeAt(0);
    this.simple = this.isSimple();

    return this;
  }
  adjust() {
    let selection = this.self,
        anchor = this.anchorNode,
        focus = this.focusNode;

    if (this.isBackwards(anchor, focus)) this.reverse(anchor, focus);
    else this.normalize(anchor, focus);

    return this;
  }
  normalize(anchor, focus) {
    let selection = this.self,
        range = this.range,

        firstTextNode = this.nodes[0],
        lastTextNode = this.nodes[this.nodes.length - 1];

    if (firstTextNode !== anchor)
      range.setStart(firstTextNode, firstTextNode.data.length - firstTextNode.data.trimLeft().length);

    if (lastTextNode !== focus)
      range.setEnd(lastTextNode, lastTextNode.data.length - (lastTextNode.data.length - lastTextNode.data.trimRight().length));
  }
  collectNodes(wholeDocument) {
    var self = this,
        selection = this.self,
        range = this.range,
        container = wholeDocument ? window.document.body : this.getCommonAncestorContainer(),
        filter = wholeDocument ?
          (node) => (self.isSelectable(node) && !self.isBlank(node) && self.hasNormalParent(node)) :
          (node) => (selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(node)),

        iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            return filter(node);
          }
        }, false),

        tempRange = document.createRange(),
        nodes = [], parentNodes = [],
        textNode, parent, firstNode, lastNode;

    while(textNode = iterator.nextNode()) {
      nodes.push(textNode);
    }
    this.nodes = this.getReducedNodeCollection(nodes);
    this.parentNodes = this.collectParentNodes(this.nodes);

    return this;
  }
  recollectNodes(mark) {
    const markWrappers = Array.from(document.querySelectorAll('[data-tm-id^="' + mark.id + '_"]'));
    const m = markWrappers.length;
    const newSegment = markWrappers.map(el => el.firstChild);

    const prev = markWrappers[0].previousSibling;
    const next = markWrappers[m-1].nextSibling;

    const start = mark.temp.startNodePosition;
    const end = mark.temp.endNodePosition;

    if (prev && prev.nodeType === 3) {
      newSegment.unshift(prev);
    }
    if (next && next.nodeType === 3) {
      newSegment.push(next);
    }

    this.nodes.splice(start, end - start + 1, ...newSegment);
  }
  getReducedNodeCollection(nodes) {
    const selection = this.self;
    let firstNode, lastNode;

    if (nodes.length > 1) {
      firstNode = nodes[0];
      if (selection.anchorNode === firstNode && firstNode.data.trimRight().length <= selection.anchorOffset) {
        nodes.shift();
      }
      lastNode = nodes[nodes.length - 1];
      if (selection.focusNode === lastNode && this.isBlank(lastNode.data.substr(0, selection.focusOffset))) {
        nodes.pop();
      }
    }
    return nodes;
  }
  collectParentNodes(nodes) {
    let l = nodes.length,
        parents = [], i = 0;

    for (; i < l; i++) parents.push(nodes[i].parentNode);

    return parents;
  }
  retrieveText() {
    let range = this.range,
        nodes = this.nodes,
        l = nodes.length,
        i = 0,
        nodeTexts = [],
        text;

    for (; i < l; i++) nodeTexts.push(nodes[i].data);

    l -= 1;

    if (nodeTexts.length) {
      if (this.simple) {
        //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
        nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);
      } else {
        //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
        //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
        nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
        nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : range.endOffset);
      }
      text = this.text = nodeTexts.join('');
    }
    return this;
  }
  getCommonAncestorContainer() {
    let selection = this.self,
        node1 = selection.anchorNode,
        node2 = selection.focusNode;

    while (node1 = node1.parentNode) {
        if ((node1.compareDocumentPosition(node2) & 0x10) === 0x10)
          return node1;
    }
    return window.document.body;
  }
  reverse(anchor, focus) {
    let range = window.document.createRange(),
        selection = this.self;

    range.setStart(focus, selection.focusOffset);
    range.setEnd(anchor, selection.anchorOffset);

    selection.removeAllRanges();
    selection.addRange(range);

    this.update(selection).adjust(selection.anchorNode, selection.focusNode);
  }
  reduceToOneRange() {
    let selection = this.self,
        rangeCount = selection.rangeCount,
        range0 = this.range,
        lastRange;

    if (rangeCount < 2) return this;

    lastRange = selection.getRangeAt(rangeCount - 1);

    range0.setStart(range0.startContainer, range0.startOffset);
    range0.setEnd(lastRange.endContainer, lastRange.endOffset);

    selection.removeAllRanges();
    selection.addRange(range0);

    return this;
  }
  hasNormalParent(node) {
    const parent = node.parentNode;
    const tag = parent.tagName.toUpperCase();

    return (
      tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' &&
      tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' &&
      tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' &&
      tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' &&
      tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' &&
      tag !== 'MATH' && tag !== 'OBJECT' &&
      !this.isChildOf(parent, 'svg') //&&
      //!this.isChildOf(parent, 'math')
    );
  }
  isChildOf(node, nodeType) {
    while (node) {
      if (node.nodeName === nodeType) return true;
      node = node.parentNode;
    }
    return false;
  }
  isBlank(node) {
    let text;
    if (typeof node === 'string') text = node;
    else {
      if (node && typeof node.data === 'string') text = node.data;
      else text = this.text;
    }
    return text.search(/[^\s\n\r\t]/g) === -1;
  }
  isBackwards(anchor, focus) {
    let selection = this.self,
        position = anchor.compareDocumentPosition(focus);

    return (
      position === 2 ||
      position === 10 ||
      (!position && selection.anchorOffset > selection.focusOffset));
  }
  isSimple() {
    let selection = this.self,
        anchorNode = selection.anchorNode,
        focusNode = selection.focusNode;

    return (
      anchorNode === focusNode &&
      anchorNode.nodeType === 3 &&
      (!anchorNode.nextSibling || (anchorNode.nextSibling.compareDocumentPosition(focusNode) !== 4)));
  }
  isSelectable(node) {
    this.range.selectNode(node);
    return !!this.self.toString();
  }
}
