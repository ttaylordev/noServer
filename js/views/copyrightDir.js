// angular.module('sappyAppy')
//   .directive('copyrightDir', function() {
//     return{
//       restrict: 'E', //figure out what this does later
//       templateUrl: 'js/views/copyrightTmpl.html',
//       controller: 'copyrightCtrl'
//     };
//   });

angular.module('sappyAppy')
    .directive('copyrightDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/views/copyrightTmpl.html',
            controller: function ($scope) {
                console.log("CopyrightDirCtrl Running");
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
                console.log($scope.date);
            }
        };
    });
