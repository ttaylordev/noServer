angular.module('app')
  .service('loginSvc', function() {
    this.getLoginSvc = function() {
      var loginSvc = 'loginSvc is also working';
      console.log('loginSvc is logging');
      return loginSvc;
    };
  });
