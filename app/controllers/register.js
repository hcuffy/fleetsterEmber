import Controller from '@ember/controller';
import $ from 'jquery';

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
  actions: {
    registerPerson: function () {
      let formData = {
        username: this.get('email'),
        password: this.get('password')
      }
      if (!validation(formData.username, formData.password)) {
        alert("Please enter a valid email address.\nThe password must be greater than five characters.")
        return;
      }
      $.ajax({
        url: 'http://localhost:3030/users/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: () => {
          this.transitionToRoute('login');
        },
        error: function () {
          alert('Seems like the interwebs is broken. Try again please!');
        }
      });
    }
  }
});
