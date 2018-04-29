import Controller from '@ember/controller';
import $ from 'jquery';
import {
  inject
} from '@ember/service';

export default Controller.extend({

  session: inject(),

  actions: {
    logoutPerson: function () {
      $.ajax({
        url: 'http://localhost:3030/users/logout',
        type: 'GET',
        success: () => {
          this.get('session').logout();
          this.transitionToRoute('login');
          // this.get('notifications').success('Logout was successful!', {
          //   autoClear: true,
          //   clearDuration: 3000
          // });
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
