angular.module('shareDraw')
  .controller('chatCtrl', function($scope, $firebaseArray, $firebaseObject, $firebaseAuth, chatSvc, mainSvc) { // inject dependancies, $scope, and service objects
    // adding/logging tests for chatCtrl to the DOM
    $scope.testchatCtrl = 'chatCtrl is working';
    console.log('chatCtrl is logging');
    $scope.messages = messages;
    /*
     * Auth
     */
    // Creating auth object using root firebase and new Firebase
    $scope.viewableMessage = chatSvc.getMessages();
    $scope.useless = "fart";
    var firebaseRoot = "https://blazing-inferno-1647.firebaseio.com//",
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
          if (user.birthday) {
            $scope.birthday = new Date(user.birthday);
          }
        });
      }
    });
    $scope.login = function(user) {
      authObj.$authWithPassword(user).then(function(authData) {
        console.log('login authData', authData);
      }, function(error) {
        alert(error);
      });
    };
    $scope.register = function(user) {
      authObj.$createUser(user).then(function(userData) {
        console.log('login userData', userData);
        $scope.login(user);
      }, function(error) {
        alert(error);
      });
    };
    $scope.reset = function(user) {
      authObj.$resetPassword({
        email: user.email
      }).then(function() {
        alert('Success! Password reset email sent.');
      }, function(error) {
        alert('Error! ' + JSON.stringify(error));
      });
    };
    $scope.changePassword = function(email, oldPassword, newPassword, newPasswordConfirmed) {
      if (newPassword !== newPasswordConfirmed) {
        alert('Passwords do not match!');
      } else {
        authObj.$changePassword({
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword
        }).then(function() {
          alert('success!');
        }, function(error) {
          alert('Failure! ' + JSON.stringify(error));
        });
      }
    };
    $scope.googlePlus = function() {
      authObj.$authWithOAuthPopup('google');
    };
    /*
     * Users
     */
    var usersRef = new Firebase(firebaseRoot + "/users");
    var users = $firebaseArray(usersRef);
    $scope.users = users;
    $scope.addUser = function(user) {
      users.$add(user);
    };
    $scope.setBirthday = function(birthday) {
      if ($scope.user) {
        if (birthday) {
          $scope.user.birthday = birthday.toString();
        } else {
          delete $scope.birthday;
        }
      }
    };
    /*
     * Messages
     */



  });
