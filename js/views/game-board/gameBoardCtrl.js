angular.module('shareDraw')
  .controller('gameBoardCtrl', function($scope, mainSvc) { // inject dependancies, $scope, and service objects
    $scope.testGameBoardCtrl = 'gameBoardCtrl is working';
    console.log('gameBoardCtrl: gameBoardCtrl is linking up');
});
