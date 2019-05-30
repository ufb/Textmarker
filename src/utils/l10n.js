/*
* Translates a HTMl page in the web l10n style from the Add-on SDK with WebExtensions strings.
* Modified by underflyingbirches
*
* @author Martin Giger
* @see {@link https://gist.github.com/freaktechnik/4a72bc0711d9bc82cf3b075bcc292953}
* @license MPL-2.0
*/
function translateDocument() {
  let el, data, dataset;
  // Set the language attribute of the document.
  document.documentElement.setAttribute('lang', browser.i18n.getUILanguage().replace('_', '-'));
  // Get all elements that are marked as being translateable.
  const textElements = document.querySelectorAll('*[data-l10n-id]');
  const attrElements = document.querySelectorAll('*[data-l10n-attr]');

  for(el of textElements) {
    dataset = el.dataset;
    const l10nId = dataset.l10nId;

    if (l10nId) {
      data = browser.i18n.getMessage(l10nId, '');

      if(data && data != '??') {
        el.textContent = data;
      }
    }
  }
  for(el of attrElements) {
    dataset = el.dataset;

    ['Title', 'Placeholder'].forEach(attr => {
      const l10nAttr = dataset['l10n' + attr];

      if (l10nAttr) {
        data = browser.i18n.getMessage(l10nAttr);

        if (data && data != '??') {
          el.setAttribute(attr.toLowerCase(), data);
        }
      }
    });
  }
}

export default function() {
  document.addEventListener('DOMContentLoaded', () => translateDocument(), {
    capture: false,
    passive: true,
    once: true
  });
}
