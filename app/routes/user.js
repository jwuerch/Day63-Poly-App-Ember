import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  saveImage(params) {
    var newImage = this.store.createRecord('image', params);
    var user = params.user;
    user.get('images').addObject(newImage);
    newImage.save().then(function() {
      return user.save();
    });
  }
});
