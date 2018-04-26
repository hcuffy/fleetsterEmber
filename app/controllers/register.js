import Controller from '@ember/controller';
import $ from 'jquery';
import {
  inject
} from '@ember/service';

function validation(email, password) {
  let emailRegx = /(.+)@(.+){2,}\.(.+){2,}/;
  let passRegx = /[a-zA-Z0-9_-]{6,}$/;

  if (emailRegx.test(email) && passRegx.test(password)) {
    return true;
  } else {
    return false;
  }
}

export default Controller.extend({

  notifications: inject('notification-messages'),

  actions: {
    registerPerson: function () {

      let formData = {
        username: this.get('email'),
        password: this.get('password')
      }
      if (!validation(formData.username, formData.password)) {
        this.get('notifications').error('Enter a valid email. Password must be greater than five characters.', {
          autoClear: true,
          clearDuration: 3000

        });
        return;
      }
      $.ajax({
        url: 'http://localhost:3030/users/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: () => {
          this.transitionToRoute('login');
          this.get('notifications').success('Registration was successful!', {
            autoClear: true,
            clearDuration: 3000
          });
        },
        error: () => {
          this.get('notifications').error('This email already exists.', {
            autoClear: true,
            clearDuration: 3000
          });
        }
      });
    }
  }
});
