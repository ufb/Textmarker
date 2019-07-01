const _HASHLESS = function(url) {
  if (!url) return '';
  const h = url.lastIndexOf('#');
  if (h === -1) return url;
  else return url.substr(0, h);
}

export { _HASHLESS }
