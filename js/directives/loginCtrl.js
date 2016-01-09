angular.module('app').controller('loginCtrl', function($scope, loginSvc) {
  $scope.newFunc = function() {};
  $scope.testLoginCtrl = 'loginCtrl is working';
  $scope.loginSvc = loginSvc.getLoginSvc();
  console.log('loginCtrl is logging');
  $scope.testThis = 'passing to directive';
  $scope.working = 'objects on the loginCtrl are displaying through the loginTmpl.html';

});
