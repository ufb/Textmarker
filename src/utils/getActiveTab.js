const _GET_ACTIVE_TAB = function() {

  return browser.tabs.query({ currentWindow: true, active: true }).then(tabs => tabs[0]);
}

export { _GET_ACTIVE_TAB }
