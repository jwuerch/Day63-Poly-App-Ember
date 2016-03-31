import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  }
});
