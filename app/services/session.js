import Service from '@ember/service';


export default Service.extend({
  currentUser: null,
  login(user,result) {
    this.set('currentUser', user)
    localStorage.setItem('username' , user)
    localStorage.setItem('token' ,result.token)

  },
  logout() {
    this.set('currentUser', null)
     localStorage.removeItem('username')
     localStorage.setItem('token', '')
  }

});
