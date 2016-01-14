angular.module('shareDraw', ['firebase', 'ui.router'])
  // inject 'firebase' into the empty array
  // .constant('fburl', 'https://blazing-inferno-1647.firebaseio.com/')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing');
    // console.log('from app.config: app.js is logging');
    //might have a constant to inject into services
    $stateProvider
    // lobby state and nested views
      .state('landing', {
        url: '/landing',
        templateUrl: './js/views/landing/landingTmpl.html',
        controller: 'landingCtrl',
        // link: function(scope, element, attributes) {
        //   //make sure it does this before it loads up that state
        // }
      })
      // lobby state and nested views
      .state('auth', {
        url: '/auth',
        templateUrl: './js/views/auth/authTmpl.html',
        controller: 'authCtrl',
        // link: function(scope, element, attributes) {
        //   //make sure it does this before it loads up that state
        // }
      })

    // lobby state and nested views
    .state('lobby', {
        url: '/lobby',
        templateUrl: './js/views/lobby/lobbyTmpl.html',
        controller: 'lobbyCtrl',
        // link: function(scope, element, attributes) {
        //
        // }
      })
      // game-board state and nested panes/views
      .state('gameboard', {
        url: '/gameboard',
        templateUrl: './js/views/gameboard/gameboardTmpl.html',
        controller: 'gameBoardCtrl',
        // link: function(scope, element, attributes) {
        //
        //   } // we'll get to this in a bit
      });


    //[] calls angular dependencies like bower, or cdn's,
    //
    //ui-router, switches between views
    //states go in here as part of routing
    //set up constants within .config, if it's a separate file, name it router.js not config.js
    //
  });

angular.module('shareDraw')
.filter('reverseItAnyway', function() {
  return function(theIt) {
    if(typeof theIt === 'undefined') { return; }
    return angular.isArray(theIt) ?
      theIt.slice().reverse() :
      (theIt + '').split('').reverse().join('');
  };
});