angular.module('shareDraw')
  .controller('mainCtrl', function($firebaseObject, $firebaseAuth,$state, mainSvc, $scope) {
    // console.log(mainSvc);
    // adding/logging tests for mainCtrl to the DOM
    // $scope.testMainCtrl = 'mainCtrl is working';
    // consstole.log('MainCtrl is logging');
    // adding tests for mainSvc to the DOM
    // $scope.testMainSvc = mainSvc.getMainSvc();
    var firebaseRoot = "https://blazing-inferno-1647.firebaseio.com/";
    var ref = new Firebase(firebaseRoot);
    var authObj = $firebaseAuth(ref);


    $scope.login = function(user) {
      authObj.$authWithPassword(user).then(function(authData) {
        console.log('login authData', authData);
        $scope.user = user;
        $scope.authData= authData;
        console.log($scope.user);
        $state.go('lobby');
      }, function(error) {
        alert(error);
      });
    };
    $scope.register = function(user) {
      authObj.$createUser(user).then(function(userData) {
        console.log('register userData', userData);
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
