angular.module('sappyAppy')
  .controller('canvasCtrl', function($scope, canvasSvc) {
    $scope.newFunc = function() {};
    $scope.testCanvasCtrl = 'canvasCtrl is working';
    $scope.canvasSvcIsLoading = canvasSvc.testCanvasSvc();
    $scope.working = 'objects on the canvasCtrl are displaying through the loginTmpl.html';
    console.log('canvasCtrl is logging');
    console.log('testCanvasCtrl');

  });


  /* the controller is where data is stored to variables
      to be accessed on the DOM.
      #scope. is the required prefix for DOM passing
      */
  /* the controller also is responsible for running the
      funtions stored elswhere in the object/filestructure
      by assigning it to the $scope. It is a lazy manager,
      who keeps track of work being performed, issues
      commands and readies responses to be delivered to
      the DOM*/
