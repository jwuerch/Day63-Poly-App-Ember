import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    saveImage(params) {
      var newImage = this.store.createRecord('image', params);
      var user = params.user;
      user.get('images').addObject(newImage);
      newImage.save().then(function() {
        return user.save();
      });
      var ref = new Firebase("https://poly-match-me.firebaseio.com");
      ref.on("value", function(snapshot) {
        console.log(snapshot.val().images);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      console.log(user.id)
      console.log(user.images)
    }
  }
});
