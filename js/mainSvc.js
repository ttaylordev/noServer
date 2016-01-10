angular.module('sappyAppy')
.service('mainSvc', function() {

  this.getMainSvc = function() {
    var mainSvc = 'mainSvc is loading';
    console.log('mainSvc is logging');
    return mainSvc;
  };
});

// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.
