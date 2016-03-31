import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  caption: DS.attr(),
  url: DS.attr(),
  user: DS.belongsTo('user', { async: true })
});
