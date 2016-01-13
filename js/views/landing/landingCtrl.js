angular.module('shareDraw')
  .controller('landingCtrl', function($scope) { // inject dependancies, $scope and Svc's
    //logging and testing
    // console.log('landingCtrl is logging inside');
    $scope.testLandingCtrl = 'landingCtrl is working';
  });

  //logging and testing
// console.log('landingCtrl is logging outside');

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
