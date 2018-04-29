import Service from '@ember/service';


export default Service.extend({
  currentUser: null,
  login(user) {
    this.set('currentUser', user)
    // TODO: Fix this cookie stuff...Cookies arn't defined.
     // Cookies.set('username' , user)
  },
  logout() {
    this.set('currentUser', null)
    // Cookies.remove('username');
  }

});
