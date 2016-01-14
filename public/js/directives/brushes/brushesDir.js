angular.module('shareDraw')
  .directive('canvasDirective', function() {
    //  logging and testing this directive
    console.log('canvasDir logging inside of Dir function');

    return {
      // restricts the way in which you inject templates into your html
      restrict: 'E',
      templateUrl: 'js/directives/brushesTmpl.html',
      controller: 'canvasCtrl',
    };
  });
console.log('canvasDir is logging outside of Dir function');

// the directive injects HTML as a pane from a template file into the DOM of my main window
// restrict:
  // 'E'(elements) allows you to use empty<name-of-your-directive-in-snake-case></name-of-your-directive-in-snake-case>
  // 'A'(attributes)
  // 'C'(class)
