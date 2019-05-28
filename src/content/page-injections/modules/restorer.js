import { _MODULE } from './../../_shared/utils'
import _STORE from '../_store'
import _SELECTION from './selection'

class RestorerBase extends _MODULE {

  constructor(entry) {
    super(entry)

    this.entry = entry;
    this.lost = [];
    this.failureReport = {};
    this.restored = [];
    this.area = entry.synced ? 'sync' : 'local';

    this.emit('started:restoration', entry.marks.length);
  }

  processInChunks(data, proc, cb) {
    proc = proc.bind(this);
    cb = cb.bind(this);

		(function rec() {
			let expire = +new Date() + 500;

			do {
				try {
          proc(data.shift());
        } catch(e) {
          setTimeout(() => this.emit('failed:restore-range', e.toString()), 0);
        }

			} while (data.length > 0 && expire > +new Date());

			if (data.length > 0) window.setTimeout(() => rec(), 0);
			else cb();
		})();
	}
  report() {
    let ll = this.lost.length;
    if (ll) {
      while(ll--) {
        delete this.lost[ll].temp;
      }
      this.emit('lost:marks', this.failureReport);
    }
    this.emit('finished:restoration', this.entry.name, this.restored, this.lost, this.area);
  }
}

class Restorer extends RestorerBase {

  constructor(entry) {
    super(entry)

    this.queue = [];
    this.cache = [];
    this.phase = 1;
    this.selectionTrial = 0;
    this.chunkDuration = 500;
    this._timer = +new Date() + this.chunkDuration;
    this.oom = entry.marks.length === 1 && entry.marks[0].id == 1;

    this.init();
  }

  get timer() {
    const timer = this._timer;
    this._timer = +new Date() + this.chunkDuration;
    return timer;
  }
  init() {
    let entry = this.entry,
        now = [], postponed = [],
        marks = entry.marks,
        l = marks.length,
        i = 0, mark;

    for (; i < l; i++) {
      mark = marks[i];

      this.convertDescription(mark).createTempObject(mark);

      if (mark.conds.n1 === 'TM') postponed.push(mark);
      else now.push(mark);
    }

    this.queue.push(now);

    for (i = 0, l = postponed.length; i < l; i++) {
      this.queue.push([postponed[i]]);
    }

    this.restore();
  }
  convertDescription(mark) {
    if (typeof mark.conds.o === 'undefined') {
      let conds = mark.conds,
          convertedConds = {
            o: conds.startOffset,
            n1: conds.firstNodeName,
            n2: conds.firstParentNodeName,
            p1: conds.firstTextNodePosition,
            p2: conds.firstNodePosition,
            p3: conds.firstParentNodePosition,
            p4: conds.firstGrampaNodePosition
          };
      delete mark.conds;
      mark.conds = convertedConds;
    }
    return this;
  }
  createTempObject(mark) {
    let text = mark.text,
        trimmedText = text.trim(),
        squeezedText = this.squeeze(mark.text);

    mark.temp = {
      textLength: text.length,
      trimmedText: trimmedText,
      trimmedTextLength: trimmedText.length,
      squeezedText: squeezedText,
      squeezedTextLength: squeezedText.length,
      possiblePositions: [],
      possibleEndPositions: [],
      possibleStartNodes: [],
      possibleEnds: {},
      possibleFocusOffsets: []
    };

    mark.synced = this.entry.synced;
  }
  restore() {
    if (this.phase === 2) this.sortQueueById();

    let marks = this.marks = this.queue.shift(),
        length = marks ? marks.length : 0;

    this.length = length;

    if (length) {
      this.setBodySelection(window.document.body)
          .getTextPositions(marks, length);

      if (this.phase === 1 && length > 1)
          this.postponeOverlappings();

      this.findPossibleExtrema()
          .ruleOutMultiples()
          .restoreRanges();

      this.phase++;

      if (this.queue.length) {
        if (this.timer < +new Date()) setTimeout(() => this.restore(), 0);
        else this.restore();
      }
      else this.report();
    }
    else this.report();
  }
  sortQueueById() {
    let marks = this.queue,
        l = marks ? marks.length : 0,
        temp = [],
        res = [],
        i = 0,
        mark, t;

    while (l--) {
      if (!marks[l].length) continue;
      mark = marks[l][0];
      temp[mark.id] = mark;
    }
    this.queue = [];

    for (t = temp.length; i < t; i++) {
      if (temp[i]) this.queue.push([temp[i]]);
    }
    return this;
  }
  getTextPositions(marks, l) {
    let trimmedSelectionText = this.trimmedSelectionText,
        allPossibleStartPositions = this.allPossibleStartPositions = [],
        endPositions = [],
        mark, markTemp, squeezedText, squeezedTextLength, p, endPosition;

    while (l--) {
      p = undefined;
      mark = marks[l];
      markTemp = mark.temp;

      if (!markTemp) {
        marks.splice(l, 1);
        continue;
      }

      if (markTemp.possiblePositions.length) {

        allPossibleStartPositions = allPossibleStartPositions.concat(markTemp.possiblePositions);
        endPositions = endPositions.concat(markTemp.possibleEndPositions);

      } else {

        squeezedText = markTemp.squeezedText;
        squeezedTextLength = markTemp.squeezedTextLength;

        while (p !== -1) {
          if (p === undefined) p = -1;
          p = trimmedSelectionText.indexOf(squeezedText, p + 1);
          endPosition = p + squeezedTextLength;
          markTemp.possiblePositions.push([p, endPosition, mark]);
          markTemp.possibleEndPositions.push(endPosition);
          allPossibleStartPositions.push([p, endPosition, mark]);
          endPositions.push(endPosition);
        }

        markTemp.possiblePositions.pop();
        allPossibleStartPositions.pop();
        endPositions.pop();

        if (!markTemp.possiblePositions.length) {
          this.lost.push(mark);
          this.failureReport[mark.id] = { text: mark.text, reason: browser.i18n.getMessage('note_restoration_failure_reason_1') };
        }
      }
    }
    this.sortPossibleStartPositions(allPossibleStartPositions);
    this.maxPosition = Math.max.apply(null, endPositions);

    return this;
  }
  sortPossibleStartPositions(positions) {
    let l = positions.length,
        temp = [],
        i = 0,
        pos, start, t;

    while (l--) {
      pos = positions[l];
      start = pos[0];

      if (temp[start]) temp.splice(start + 1, 0, pos);
      else temp[start] = pos;
    }
    t = temp.length;
    this.allPossibleStartPositions = [];

    for (; i < t; i++)
      if (temp[i]) this.allPossibleStartPositions.push(temp[i]);
  }
  postponeOverlappings() {
    let positions = this.allPossibleStartPositions,
        p = positions.length,
        postponed = [],
        pos1, pos2, i, m1, m2, id1, id2, id;

    if (p > 1) {
      while (p-- > 1) {
        pos1 = positions[p - 1];
        pos2 = positions[p];
        m1 = pos1[2];
        m2 = pos2[2];
        id1 = m1.id;
        id2 = m2.id;

        if (id1 === id2) continue;

        if (pos1[1] > pos2[0] && pos1[0] < pos2[1]) {

          if (id1 < id2) {
            id = id2;

            if (!postponed.includes(id)) {
              this.postpone(m2);
              postponed.push(id);
            }
          }
          else {
            id = id1;

            if (!postponed.includes(id)) {
              this.postpone(m1);
              postponed.push(id);
            }
          }
        }
      }
      p = postponed.length;

      for (i = 0; i < p; i++)
        this.cutOutFor(postponed[i]);
    }
    return this;
  }
  cutOutFor(id) {
    let positions = this.allPossibleStartPositions,
        p = positions.length;

    while(p--) {
      if (positions[p][2].id === id)
        this.allPossibleStartPositions.splice(p, 1);
    }
  }
  postpone(mark) {
    let queue = this.queue,
        l = queue.length,
        alreadyIncluded = false;

    while (l--) {
      if (queue[l][0] === mark) {
        alreadyIncluded = true;
        break;
      }
    }
    if (!alreadyIncluded)
      this.queue.push([mark]);
  }
  findPossibleExtrema() {
    let nodes = this.bodyTextNodes,
        n = nodes ? nodes.length : 0,
        indices = this.allPossibleStartPositions,
        phase = this.phase,
        cache = this.cache = [],
        satisfied = [],
        i = 0, chars = 0,
        nextStartFound, endingsInThisNode,
        node, nodesText, nodesTextLength,
        mark, diff, l, startPosition, endPosition, e, f, id, p, q, x, m,
        possibleFocusOffset, startFoundFor, postponed, hasEndingsInThisNode;

    for (; i < n; i++) {
      node = nodes[i];
      nodesText = this.squeeze(node.data);
      nodesTextLength = nodesText.length;
      chars += nodesTextLength;
      l = indices.length;
      startFoundFor = [];
      postponed = [];
      hasEndingsInThisNode = null;

      while (l--) {
        startPosition = indices[l][0];
        endPosition = indices[l][1];
        mark = indices[l][2];
        id = mark.id;

        mark.temp.startFoundFor = mark.temp.startFoundFor || [];
        mark.temp.endFoundFor = mark.temp.endFoundFor || [];

        if (
          !mark.temp.startFoundFor.includes(startPosition) &&
          chars > startPosition &&
          mark.temp.possibleStartNodes.length < mark.temp.possiblePositions.length
        ) {
          if (hasEndingsInThisNode && hasEndingsInThisNode.id < mark.id) {
            if (phase === 1) {
              this.postpone(mark);
              postponed.push(id);
            }
            indices.splice(l, 1);

            continue;
          } else {
            if (!this.satisfiesDescription(mark, node)) {
              if (phase === 1 && id !== 1) {
                this.postpone(mark);
                postponed.push(id);
              }
              indices.splice(l, 1);

              continue;
            }
            else {
              mark.temp.possibleStartNodes.push({ node: node, pos: i });
              mark.temp.startFoundFor.push(startPosition);
              startFoundFor.push(id);
            }
          }
        }
        if (
          mark.temp.startFoundFor.includes(startPosition) &&
          !mark.temp.endFoundFor.includes(endPosition) &&
          (chars - endPosition) >= 0
        ) {
          if (Math.min.apply(null, startFoundFor) < id) {
            if (phase === 1) {
              this.postpone(mark);
              postponed.push(id);
            }
            indices.splice(l, 1);
          } else {
            possibleFocusOffset = this.findFocusOffset(mark, node, endPosition - (chars - nodesTextLength));
            mark.temp.possibleFocusOffsets.push(possibleFocusOffset);
            mark.temp.endFoundFor.push(endPosition);
            mark.temp.possibleEnds[startPosition] = {
              node: node,
              offset: possibleFocusOffset,
              pos: i
            };
            if (!satisfied.includes(id)) {
              cache.push(mark);
              satisfied.push(id);
            }

            hasEndingsInThisNode = mark;
            indices.splice(l, 1);
          }
        }
      }
      p = postponed.length;

      if (p) for (x = 0; x < p; x++) this.cutOutFor(postponed[x]);

      if (chars > this.maxPosition) break;
    }
    if (phase !== 1 || this.oom) {
      for (let i = 0; i < this.marks.length; i++) {
        let mark = this.marks[i];
        if (!satisfied.includes(mark.id)) {
          this.lost.push(mark);
          this.failureReport[mark.id] = { text: mark.text, reason: browser.i18n.getMessage('note_restoration_failure_reason_2') };
        }
      }
    }
    return this;
  }
  ruleOutMultiples() {
    let cache = this.cache,
        i = cache.length,
        mark, possibleStartNodes, p, node, parent, grampa, grandgrampa, grandgrandgrampa, matches, failed, q,
        possibleEnds, startFoundFor, conds, startOffset, temp, textLength, start;

    while (i--) {
      mark = cache[i];
      matches = [];
      failed = false;
      temp = mark.temp;
      possibleStartNodes = temp.possibleStartNodes;
      possibleEnds = temp.possibleEnds;
      startFoundFor = temp.startFoundFor
      p = possibleStartNodes.length;
      conds = mark.conds;
      startOffset = conds.o;
      textLength = temp.textLength;

      if (p > 1) {
        while (p--) {
          node = possibleStartNodes[p].node;
          parent = node.parentNode.parentNode;
          grampa = parent.parentNode || 0;

          if (!grampa || conds.p3 === this.whichChild(grampa, parent)) {
            matches.push(p);
          }
        }

        if (!matches.length) p = 0;
        else {
          if (matches.length === 1) p = matches[0];
          else {
            p = undefined;

            while (matches.length) {
              q = matches.pop();
              parent = possibleStartNodes[q].node.parentNode;
              grampa = parent.parentNode || 0;
              grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0;
              grandgrandgrampa = grandgrampa && grandgrampa.parentNode ? grandgrampa.parentNode : 0;

              if (
                  (!grandgrandgrampa || conds.p4 === this.whichChild(grandgrandgrampa, grandgrampa)) &&
                  (possibleEnds[startFoundFor[q]].offset - startOffset) === textLength
                ) {
                  p = q;
                  break;
              }
            }

            if (!p) p = 0;
          }
        }
      } else p = 0;

      p = p || 0;

      start = mark.temp.possibleStartNodes[p];
      mark.temp.startNode = start.node;
      mark.temp.startNodePosition = start.pos;

      this.setMatchingEnd(mark, p);
    }
    return this;
  }
  setMatchingEnd(mark, p) {
    let startPosition = mark.temp.startFoundFor[p],
        end = mark.temp.possibleEnds[startPosition];

    mark.temp.endNode = end.node;
    mark.temp.endNodePosition = end.pos;
    mark.temp.focusOffset = end.offset;
  }
  satisfiesDescription(mark, node) {
    let description = mark.conds,
        parentNode = node.parentNode,
        grampa = parentNode.parentNode,
        grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0,
        startOffset = description.o,
        relevantNodeText = node.data.substring(startOffset).trim(),
        l = relevantNodeText.length,
        markText = mark.temp.trimmedText,
        m = mark.temp.trimmedTextLength,
        textsMatch;

    if (m <= l) {
      textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;
    } else {
      textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;
    }

    return (
      textsMatch &&
      (parentNode.nodeName === description.n1 || (description.n1 === 'TM' && parentNode.hasAttribute('data-tm-id'))) &&
      (!grampa || grampa.nodeName === description.n2) &&
      this.whichChild(parentNode, node) === description.p1
    );
  }
  findFocusOffset(mark, node, n) {
    let nodeText = node.data,
        l = nodeText.length,
        i = 0, counter = 0;

    for (; i < l; i++) {
      if (this.squeeze(nodeText[i])) counter++;

      if (counter === n) return (/\s$/.test(mark.text) ? i + 2 : i + 1);
    }
  }
  restoreRanges() {
    let range = document.createRange(),
        selection = this.selection,
        marks = this.cache,
        i = marks.length,
        mark, markTemp, start, end, focusOffset;

    while (i--) {
      mark = marks[i];
      markTemp = mark.temp;
      start = markTemp.startNode;
      end = markTemp.endNode;
      focusOffset = markTemp.focusOffset;

      if (!start || !end || !(typeof focusOffset === 'number')) {
        this.lost.push(mark);
        this.failureReport[mark.id] = { text: mark.text, reason: browser.i18n.getMessage('note_restoration_failure_reason_3') };
      } else {
        try {
          range.setStart(start, mark.conds.o);
          range.setEnd(end, focusOffset);
          selection.self.removeAllRanges();
          selection.self.addRange(range);
          //selection.resume(range);
          this.emit('restored:range', mark);
          delete mark.synced;
          this.restored.push(mark);
          selection.recollectNodes(mark);
        } catch(e) {
          this.lost.push(mark);
          setTimeout(() => this.emit('failed:restore-range', e.toString()), 0);
        }
        delete mark.temp;
      }
    }
  }

  setBodySelection(el) {
    this.selectionTrial++;

    if (this.phase === 1) {
      this.selection = new _SELECTION(el);
      if (!this.selection.text) {
        if (this.selectionTrial < 4) {
          return this.setBodySelection(el);
        } else {
          this.trimmedSelectionText = ' ';
          this.bodyTextNodes = [];
          return this;
        }
      }
      this.trimmedSelectionText = this.squeeze(this.selection.text);
    }

    this.bodyTextNodes = this.selection.nodes ? this.selection.nodes.slice() : [];

    return this;
  }
  squeeze(text) {
    return (typeof text === 'string') ? text.replace(/\t|\s|\n|\r/g, '') : undefined;
  }
  whichChild(parent, child, context) {
		if (!parent || !child) return null;

		let children = child.nodeType === 3 ? parent.childNodes : parent.children,
		    c = children.length,
		    pos = 0, i = 0, currentChild;

    for ( ; i < c; i++) {
      currentChild = children[i];

			if (currentChild === child) return pos;

			if (context) {
				if (currentChild.nodeName === context) pos++;

			} else {
        if (!(currentChild.nodeType === 3 && !currentChild.data)) pos++;
      }
		}
	}
}

class ImmutRestorer extends RestorerBase {

  constructor(entry) {
    super(entry)

    this.selection = window.getSelection();
    this.range = document.createRange();
    const marks = this.marks = [...entry.marks.sort((m1, m2) => m1.id - m2.id)];

    this.processInChunks(marks, this.restoreRange, this.report);
  }

  restoreRange(mark) {
    const conds = mark.conds;
    const start = conds.s;
    const end = conds.e;
    const selection = this.selection;
    const range = this.range;

    try {
      range.setStart(this.getNode(start.p), start.o);
      range.setEnd(this.getNode(end.p), end.o);
      selection.removeAllRanges();
      selection.addRange(range);
      this.emit('restored:range', mark);
      delete mark.synced;
      this.restored.push(mark);
    } catch(e) {
      this.lost.push(mark);
      setTimeout(() => this.emit('failed:restore-range', e.toString()), 0);
    }
  }
  getNode(position) {
    const textNodePosition = position[0];
    let node = document.body,
        l = position.length;

    while(l-- > 1) {
      node = node.children[position[l]];
    }
    return node.childNodes[textNodePosition];
  }
}

export default function() {

	return new _MODULE({
    events: {
      ENV: {
        'restore:marks': 'restore',
        'lost:marks': 'onFailure',
        'finished:restoration': 'onFinishedRestoration',
        'resumed:markers': 'retry'
      }
    },

    entries: null,
    count: 0,
    restored: 0,
    failed: 0,
    failureReport: {},

    restore(entries) {
      if (!entries) return;
      if (!Array.isArray(entries)) entries = [entries];

      this.entries = entries;
      this.count = entries.length;

      this.emit('started:restorations');
      _STORE.restoring = true;

      entries.forEach(entry => {
        if (entry.immut) new ImmutRestorer(entry);
        else new Restorer(entry);
      });
    },
    resume() {
      this.restored = 0;
      this.failed = 0;
      this.failureReport = {};
    },
    retry(entry) {
      entry = entry ? [entry] : this.entries;
      this.resume();
      this.restore(entry);
    },
    onFailure(report) {
      this.failed++;
      for (let i in report) this.failureReport[i] = report[i];
    },
    onFinishedRestoration() {
      if (++this.restored === this.count) {
        this.emit('finished:all-restorations');
        _STORE.restoring = false;
        if (this.failed) this.emit('failed:restoration', this.getReport());
        else this.emit('succeeded:restoration');
      }
    },
    getReport() {
      const report = this.failureReport;
      let msg = '';
      for (let i in report) {
        msg += `${report[i].reason} : ${report[i].text}\n`;
      }
      return msg;
    }
  });
}
