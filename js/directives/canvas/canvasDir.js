angular.module('shareDraw')
  .directive('canvasDir', function(mainSvc) { // inject dependancies, $scope, and service objects
    return {
      restrict: 'E',
      templateUrl: './js/directives/canvas/canvasTmpl.html',
      controller: 'canvasCtrl',
      // link: function(scope, element, attributes){
      //
      // }
    };
});
