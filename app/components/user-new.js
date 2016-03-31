import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUser() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        password: this.get('password') ? this.get('password') : "",
        birthday: this.get('birthday') ? this.get('birthday') : "",
        zip_code: this.get('zip_code') ? this.get('zip_code') : "",
        country: this.get('country') ? this.get('country') : "",
        ethnicity: this.get('ethnicity') ? this.get('ethnicity') : "",
        status: this.get('status') ? this.get('status') : "",
        height: this.get('height') ? this.get('height') : "",
        body_type: this.get('body_type') ? this.get('body_type') : "",
        diet: this.get('diet') ? this.get('diet') : "",
        smoking: this.get('smoking') ? this.get('smoking') : "",
        drinking: this.get('drinking') ? this.get('drinking') : "",
        drugs: this.get('drugs') ? this.get('drugs') : "",
        spirituality: this.get('spirituality') ? this.get('spirituality') : "",
        education: this.get('education') ? this.get('education') : "",
        kids: this.get('kids') ? this.get('kids') : "",
        kink_friendly: this.get('kink_friendly') ? this.get('kink_friendly') : "",
        pets: this.get('pets') ? this.get('pets') : "",
        languages: this.get('languages') ? this.get('languages') : "",
        preferred_gender: this.get('preferred_gender') ? this.get('preferred_gender') : "",
        preferred_age: this.get('preferred_age') ? this.get('preferred_age') : "",
        preferred_relationship_type: this.get('preferred_relationship_type') ? this.get('preferred_relationship_type') : "",
        preferred_relationship_status: this.get('preferred_relationship_status') ? this.get('preferred_relationship_status') : "",
        preferred_distance: this.get('preferred_distance') ? this.get('preferred_distance') : "",
        about_me: this.get('about_me') ? this.get('about_me') : "",
        interests: this.get('interests') ? this.get('interests') : "",
        favorites: this.get('favorites') ? this.get('favorites') : "",
        island: this.get('island') ? this.get('island') : "",
        free_time: this.get('free_time') ? this.get('free_time') : "",
        images: this.get('images') ? this.get('images') : ""
      }
      this.sendAction('saveUser', params);
    }
  }
});
