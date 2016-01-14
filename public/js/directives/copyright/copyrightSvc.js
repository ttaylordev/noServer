angular.module('shareDraw')
  .service('copyrightSvc', function() {

    this.testCopyrightSvc = function() {
      var copyrightSvcIsLoading = 'copyrightsvc is loading';
      // console.log('testCopyrightSvc is logging');
      return copyrightSvcIsLoading;
    };

    this.yearFunc = function() {
      var getYear = new Date().getFullYear().toString();
      // console.log('getDate' + getYear);
      return getYear;
    };
  });

// if in the controller it said, copyrightSvc.newFunc(),
// I could use this.newFunc(); it would run.

// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.
