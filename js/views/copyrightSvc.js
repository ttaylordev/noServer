angular.module('sappyAppy')
  .service('copyrightSvc', function() {
    this.getCopyrightSvc = function() {
      var copyrightSvc = 'copyrightSvc is also working';
      console.log('copyrightSvc is logging');
      return copyrightSvc;
    };
  });
