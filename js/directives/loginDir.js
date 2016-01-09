angular.module('app')
  .directive('loginDirective', function() {
    return {
      restrict: 'E', // restrict E is only as an element, A is attributes.it becomes the only way that you can call on that directive
      templateUrl: 'js/view/loginTmpl.html',
      controller: 'loginCtrl',
    };
  });
console.log('loginDir is logging outside of main function');
