import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8180',

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Accept': 'application/json',
    });
  }
});
