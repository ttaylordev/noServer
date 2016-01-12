angular.module('shareDraw')
  .directive('chatDir', function(mainSvc, chatSvc) { // inject dependancies, $scope, and service objects
    return {
      restrict: 'E',
      templateUrl: './js/directives/chat/chatTmpl.html',
      controller: 'chatCtrl',
      link: function(scope, element, attributes){
        // console.log(attributes);
        scope.messages = chatSvc.getMessages(attributes.room);
      }
    };
});
