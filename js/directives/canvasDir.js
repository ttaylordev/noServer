angular.module('sappyAppy')
  .directive('canvasDirective', function() {
    console.log('canvasDir logging inside of Dir function');

    return {
      restrict: 'E', // restrict E is only as an element, A is attributes.it becomes the only way that you can call on that directive
      templateUrl: 'js/directives/canvasTmpl.html',
      controller: 'canvasCtrl',
    };
  });
console.log('canvasDir is logging outside of Dir function');
