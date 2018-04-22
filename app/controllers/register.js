import Controller from '@ember/controller';
import $ from 'jquery';


export default Controller.extend({
  actions: {
    registerPerson: function () {
      let formData = {
        email: this.get('email'),
        password: this.get('password')
      }

      $.ajax({
        url: 'http://localhost:3030/users/signup',
        type: 'POST',
        contentType: 'application/json',
        data: formData,
        success: function () {
          this.transitionToRoute('welcome');
        },
        error: function () {
          alert('Seems like the interwebs is broken. Try Again');
        }
      });
    }
  }
});
