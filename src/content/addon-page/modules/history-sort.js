export default {
  by: {
    date: {
      created(object) {
        return this._sort(object, 'first');
      },
      last(object) {
        return this._sort(object, 'last');
      },
      _sort(object, field) {
        return Object.keys(object).sort((a, b) => (new Date(object[b][field])) - (new Date(object[a][field])));
      }
    },
    name: {
      az(object) {
        return this._sort(object);
      },
      za(object) {
        return this._sort(object).reverse();
      },
      _sort(object) {
        return Object.keys(object).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      }
    }
  }
}
