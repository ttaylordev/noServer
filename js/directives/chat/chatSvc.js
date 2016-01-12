angular.module('shareDraw')
  .service('chatSvc', function($firebaseObject, $firebaseArray, $firebaseAuth, mainSvc) {
    var baseUrl = 'https://blazing-inferno-1647.firebaseio.com//';

    this.testchatSvc = function() {
      var chatSvcIsLoading = 'chatSvc is loading';
      console.log('From: chatSvc via chatCtrl: chatSvc is logging');
      return chatSvcIsLoading;
    };

    this.getMessages = function(location) {
      var messagesRef = new Firebase(baseUrl + "/chat-message/"+location);
      var messages = $firebaseArray(messagesRef);
      return messages;
    };

    //
    // this.removeMessage = function(message) {
    //   messages.$remove(message);
    // };

  });
