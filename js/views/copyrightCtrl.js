angular.module('sappyAppy')
  .controller('copyrightCtrl', function($scope, copyrightSvc) {
    $scope.newFunc = function() {
      console.log("copyrightCtrl is logging");
      $scope.copyrightSvc = copyrightSvc.getCopyrightSvc();
      var currentDate = new date().getFullYear();
      $scope.getDate = currentDate.toString();
      console.log($scope.date);
      $scope.testThis = 'passing to directive';

    };
  });
console.log('controller is being loaded');
