import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('welcome');
    }
  },
  registerOne: true,
  registerTwo: false,
  actions: {
    saveUser() {
      this.set('registerTwo', true);
      this.set('registerOne', false);
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    }
  }
});
