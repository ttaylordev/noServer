angular.module('shareDraw')
  .controller('mainCtrl', function($scope, $firebaseObject, mainSvc) {
    console.log(mainSvc);
    // adding/logging tests for mainCtrl to the DOM
    $scope.testMainCtrl = 'mainCtrl is working';
    console.log('MainCtrl is logging');
    // adding tests for mainSvc to the DOM
    $scope.testMainSvc = mainSvc.getMainSvc();
    // $scope.fbo = mainSvc.getCursorStatus();
  });

// inject dependancies, $scope, and service objects
/* the controller is where data is stored to variables
    to be accessed on the DOM.
    $scope. is the required prefix for DOM passing
    */
/* the controller also is responsible for running the
    funtions stored elswhere in the object/filestructure
    by assigning it to the $scope. It is a lazy manager,
    who keeps track of work being performed, issues
    commands and readies responses to be delivered to
    the DOM*/
