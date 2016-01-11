angular.module('shareDraw')
  .controller('copyrightCtrl', function($scope, copyrightSvc) { // inject dependancies, $scope and Svc's
    //logging and testing
    console.log('copyrightCtrl is logging inside');
    $scope.testCopyrightCtrl = 'copyrightCtrl is working';
    $scope.copyrightSvcIsLoading = copyrightSvc.testCopyrightSvc();
    //calls the service object.then the funciton method on that object.
    $scope.getYear = copyrightSvc.yearFunc();
  });

  //logging and testing
console.log('copyrightCtrl is logging outside');


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
