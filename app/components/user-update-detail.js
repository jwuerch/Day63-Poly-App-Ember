import Ember from 'ember';

export default Ember.Component.extend({
  updateUserForm: false,
  actions: {
    showUpdateUserForm() {
      this.set('updateUserForm', true);
    },
    updateUserDetails(user) {
      var params = {
        preferred_relationship_type: this.get('preferred_relationship_type'),
        ethnicity: this.get('ethnicity'),
        status: this.get('status'),
        preferred_relationship_status: this.get('preferred_relationship_status'),
        height: this.get('height'),
        body_type: this.get('body_type'),
        diet: this.get('diet'),
        smoking: this.get('smoking'),
        drinking: this.get('drinking'),
        drugs: this.get('drugs'),
        spirituality: this.get('spirituality'),
        education: this.get('education'),
        kids: this.get('kids'),
        pets: this.get('pets'),
        languages: this.get('languages')
      }
      this.set('updateUserForm', false);
      this.sendAction('updateUserDetails', user, params);
    }


  }
});
