angular.module('sappyAppy')
  .controller('copyrightCtrl', function($scope, copyrightSvc) {

      $scope.getDate = copyrightSvc.newFunc(); //calls the service object.then the funciton method on that object.
    // setTimout(function(){
      // $scope.newFunc();
    // },1000);
  });
console.log('controller is being loaded');
