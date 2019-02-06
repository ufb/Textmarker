const _COPY = function(src) {
  const target = Array.isArray(src) ? [] : {};
  let val;
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      val = src[prop];
      if (val !== null && typeof val === 'object') {
        target[prop] = _COPY(val);
      } else
        target[prop] = val;
    }
  }
  return target;
}

export { _COPY }
