angular.module('sappyAppy')
  .controller('canvasCtrl', function($scope, canvasSvc) {
    $scope.newFunc = function() {};
    $scope.testCanvasCtrl = 'canvasCtrl is working';
    $scope.canvasSvc = canvasSvc.getCanvasSvc();
    $scope.testThis = 'passing to directive';
    $scope.working = 'objects on the canvasCtrl are displaying through the loginTmpl.html';
    console.log('canvasCtrl is logging');
    console.log('testCanvasCtrl');

  });
