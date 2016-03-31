import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      images: this.store.findAll('image')
    });
  },
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  actions: {
    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    }
  }
});
