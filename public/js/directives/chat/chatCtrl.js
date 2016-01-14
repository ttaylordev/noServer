angular.module('shareDraw')
  .controller('chatCtrl', ['$scope', 'chatSvc', function($scope, chatSvc) { // inject dependancies, $scope, and service objects
    // if you want to do uglification, it messes up $scope,
    // adding/logging tests for chatCtrl to the DOM
    // $scope.testchatCtrl = 'chatCtrl is working';
    // console.log('chatCtrl is logging');
    // // $scope.messages = chatSvc.getMessages();
    // $scope.viewableMessage = chatSvc.getMessages();
    // $scope.useless = "fart";
    // var messages = ['one', 'two', 'three'];
    // console.log(messages);

    console.log($scope);
    console.log($scope.$parent);

    $scope.sendMessage = function() {
      $scope.messages.$add({
        userId: $scope.$parent.user.email,
        time: Firebase.ServerValue.TIMESTAMP,
        text: $scope.typeMessage
      });

    };
  }]);
