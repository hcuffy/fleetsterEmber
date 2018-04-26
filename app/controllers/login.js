import Controller from '@ember/controller';
import $ from 'jquery';
import {
  inject
} from '@ember/service';


export default Controller.extend({
  notifications: inject('notification-messages'),

  actions: {
    loginPerson: function () {
      let formData = {
        username: this.get('email'),
        password: this.get('password')
      }

      $.ajax({
        url: 'http://localhost:3030/users/signin',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: (result) => {
          alert(result);
          this.set('email', '');
          this.set('password', '');
          localStorage.token = result.token;
          sessionStorage.token = result.token;  
          // TODO: add service save server response
          this.transitionToRoute('welcome');
          this.get('notifications').success('Login was successful!', {
            autoClear: true,
            clearDuration: 3000
          });
        },
        error: () => {
          this.get('notifications').error('Your email/password was incorrect.', {
            autoClear: true,
            clearDuration: 3000
          });
        }
      });
    }
  }

});
