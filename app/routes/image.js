import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveImage(params) {
      var newImage = this.store.createRecord('image', params);
      newImage.save();
      this.transitionTo('/');
    }
  }
});
