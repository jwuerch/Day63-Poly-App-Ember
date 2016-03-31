import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveImage() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        caption: this.get('caption') ? this.get('caption') : "",
        url: this.get('url') ? this.get('url') : ""
      }
      this.sendAction('saveImage', params);
    }
  }
});
