import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    logoutPerson: function () {
      $.ajax({
        url: 'http://localhost:3030/users/logout',
        type: 'GET',
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
 
