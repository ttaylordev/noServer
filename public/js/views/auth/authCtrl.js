angular.module('shareDraw')
  .controller('authCtrl', function($scope, mainSvc) { // inject dependancies, $scope and Svc's
    //logging and testing
    console.log('authCtrl is logging inside');
    $scope.testauthCtrl = 'authCtrl is working';

    // $scope.login = function() {
    //   mainSvc.login($scope.user);
    // };
    //
    // $scope.register = function() {
    //   mainSvc.register($scope.user);
    // };
   //takes data in and passes it to the service if possible
      // dom stuff has to be on the controller

    // controller gets input from html, passes to the service
    // service sends to fbo, fbo sends back, service...
    //passes back to the controller to tell me treu/false


  });




//logging and testing
// console.log('authCtrl is logging outside');

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
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// input type of email
//   input type of password 8+chars, caps,
//     sign in buttons
//       if registered user let em inspect
//         else register them, using the info they just typed
//           log in automatically


// doublecheck past project;
