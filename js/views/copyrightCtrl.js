angular.module('sappyAppy')
  .controller('copyrightCtrl', function($scope) {
    $scope.test = function() {
      console.log("copyrightCtrl is logging");
      var currentDate = new Date().getFullYear();
      $scope.getDate = currentDate.toString();
      console.log($scope.date);
      $scope.testThis = 'passing to directive';

    };
  });
console.log('controller is being loaded');
