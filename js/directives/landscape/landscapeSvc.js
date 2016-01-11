angular.module('shareDraw')
  .service('canvasSvc', function() {

    this.testCanvasSvc = function(){
      var canvasSvcIsLoading = 'canvasSvc is loading';
      console.log('canvasSvc is logging');
      return canvasSvcIsLoading;
    };

  });
  // connect to firebase initially

  
  // most functions are stored from the service, similar to a model/view structure
  // the service is injected(passed) as a dependancy into the controller
  // the functions are called/initialized by the controller object
  // the controller injects them into the DOM using $scope.
