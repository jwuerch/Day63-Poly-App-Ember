import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('welcome');
    }
  },
  addNewUser: false,
  actions: {
    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    };
  }
});
