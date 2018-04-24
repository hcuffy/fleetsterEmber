import Controller from '@ember/controller';
import $ from 'jquery';
import { inject } from '@ember/controller'; 

export default Controller.extend({
	
   login : inject(),
	
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
 
