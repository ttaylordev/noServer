angular.module('shareDraw')
  .controller('mainCtrl', function($firebaseObject, $firebaseAuth, mainSvc, $scope) {
    // console.log(mainSvc);
    // adding/logging tests for mainCtrl to the DOM
    // $scope.testMainCtrl = 'mainCtrl is working';
    // console.log('MainCtrl is logging');
    // adding tests for mainSvc to the DOM
    // $scope.testMainSvc = mainSvc.getMainSvc();
    var firebaseRoot = "https://blazing-inferno-1647.firebaseio.com/",
      ref = new Firebase(firebaseRoot),
      authObj = $firebaseAuth(ref);
    // Assign authObj to scope for inline calls in the view
    $scope.authObj = authObj;
    // Use $onAuth listener to keep $scope.authData synced. Also sync scope.user.
    authObj.$onAuth(function(authData) {
      $scope.authData = authData;
      if (authData) { // Set up user object if authData present
        var userRef = new Firebase(firebaseRoot + '/users/' + authData.uid),
          user = $firebaseObject(userRef);
        user.$loaded().then(function(user) { // Wait for user to be loaded before setting user details
          user.lastLogin = new Date().toString();
          user.$save();
          user.$bindTo($scope, 'user');
        });
      }
    });
    $scope.login = function(user) {
      authObj.$authWithPassword(user).then(function(authData) {
        // console.log('login authData', authData);
      }, function(error) {
        alert(error);
      });
    };
    $scope.register = function(user) {
      authObj.$createUser(user).then(function(userData) {
        // console.log('register userData', userData);
        $scope.login(user);
      }, function(error) {
        alert(error);
      });
    };
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
