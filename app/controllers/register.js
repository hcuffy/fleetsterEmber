import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    registerPerson: function () {
      let formData = {
        username: this.get('email'),
        password: this.get('password')
      }

      $.ajax({
        url: 'http://localhost:3030/users/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( formData ),
        success: function () {
          this.transitionToRoute('login');
        },
        error: function () {
          alert('Seems like the interwebs is broken. Try again please!');
        }
      });
    }
  }
});
