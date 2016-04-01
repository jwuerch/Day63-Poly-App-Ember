import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveImage() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        caption: this.get('caption') ? this.get('caption') : "",
        url: this.get('url') ? this.get('url') : "",
        user: this.get('user') ? this.get('user') : "",
        main: this.get('main') ? this.get('main') : false
      };
      this.sendAction('saveImage', params);
    }
  }
});
