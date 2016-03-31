import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUser() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        birthday: this.get('birth_month') ? this.get('birth_month') : "",
        zip_code: this.get('zip_code') ? this.get('zip_code') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.sendAction('saveUser', params);
    }
  }
});
