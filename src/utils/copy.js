const _COPY = function(original, clone) {
  clone = clone || {};

  for (let i in original) {
    if (original.hasOwnProperty(i)) {
      if (typeof original[i] === 'object') {
        clone[i] = Array.isArray(original[i]) ? [] : {};
        _COPY(original[i], clone[i]);
      } else {
        clone[i] = original[i];
      }
    }
  }
  return clone;
}

export { _COPY }
