angular.module('sappyAppy')
  .directive('copyrightDir', function() {
    console.log('copyrightDir logging inside of Dir function');
    return{
      restrict: 'E', //figure out what this does later
      templateUrl: 'js/views/copyrightTmpl.html',
      controller: 'copyrightCtrl'
    };
  });
  console.log('copyrightDir logging outside of Dir function');


// angular.module('sappyAppy')
//     .directive('copyrightDir', function () {
//         return {
//             restrict: 'E',
//             templateUrl: 'js/views/copyrightTmpl.html',
//             controller: function ($scope) {
//                 console.log("CopyrightDirCtrl Running");
//                 var currentDate = new Date().getFullYear();
//                 $scope.date = currentDate.toString();
//                 console.log($scope.date);
//             }
//         };
//     });
