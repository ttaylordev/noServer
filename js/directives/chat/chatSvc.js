angular.module('shareDraw')
  .service('chatSvc', function($firebaseObject, $firebaseArray, $firebaseAuth, mainSvc) {
    var baseUrl = 'https://blazing-inferno-1647.firebaseio.com//';

    this.testchatSvc = function() {
      var chatSvcIsLoading = 'chatSvc is loading';
      console.log('From: chatSvc via chatCtrl: chatSvc is logging');
      return chatSvcIsLoading;
    };

    this.getMessages = function() {
      var messagesRef = new Firebase(baseUrl);
      var messages = $firebaseArray(messagesRef);
      var memFbo = messages.$watch(function(data) { //event handler for firebase, everytime they get new info they send it out to listeners
      });
      return memFbo;
    };

    this.addMessage = function(text, username) {
      messages.$add({
        text: text,
        username: username
      });
    };

    this.removeMessage = function(message) {
      messages.$remove(message);
    };

  });
