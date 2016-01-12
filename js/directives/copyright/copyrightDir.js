angular.module('shareDraw')
  .directive('copyrightDir', function() {
    //  logging and testing this directive
    // console.log('copyrightDir logging inside of Dir function');
    return{
      restrict: 'E',
      templateUrl: './js/directives/copyright/copyrightTmpl.html',
      controller: 'copyrightCtrl',
    };
  });

  // the directive injects HTML as a pane from a template file into the DOM of my main window
  // restrict:
    // 'E'(elements) allows you to use empty<name-of-your-directive-in-snake-case></name-of-your-directive-in-snake-case>
    // 'A'(attributes)
    // 'C'(class)
