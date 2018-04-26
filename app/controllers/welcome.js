import Controller from '@ember/controller';
import $ from 'jquery';
import {
  inject
} from '@ember/controller';

export default Controller.extend({

  login: inject(),

  actions: {
    logoutPerson: function () {
      $.ajax({
        url: 'http://localhost:3030/users/logout',
        type: 'GET',
        success: () => {
          this.transitionToRoute('login');
          this.get('notifications').success('Logout was successful!', {
            autoClear: true,
            clearDuration: 3000
          });
        },
        error: () => {
          this.get('notifications').error('Logout error try again.', {
            autoClear: true,
            clearDuration: 3000
          });
        }
      });
    }
  }
});
