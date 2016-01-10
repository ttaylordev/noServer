angular.module('sappyAppy')
  .service('copyrightSvc', function() {
    
      this.newFunc = function(){
        var getDate = new Date().getFullYear().toString();
        console.log('getDate' + getDate);
        return getDate;
      };

  });

//this is doing something weird
//if in the controller it said, copyrightSvc.newFunc(), I could use this.newFunc(); it would run.
// majority of funcitons should reside in the service
