import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  birthday: DS.attr(),
  zip_code: DS.attr(),
  country: DS.attr()
});
