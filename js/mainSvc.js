angular.module('shareDraw')
  .service('mainSvc', function($firebaseObject, $firebaseArray, $firebaseAuth) {
    // declare firebase url and dom context.
    var baseUrl = 'https://blazing-inferno-1647.firebaseio.com//';
    //testing connectivity
    // var self = this; //self. will be put on the outer scope
    //this only references the service, not the controllers
    //this references the object output by the constructor functions
    //var references the constructor function itself, it is not output
    // by doing that, you can have functions call other functions within the service

    console.log('mainSvc is logging from: mainSvc.');
    this.getMainSvc = function() { // a method in a constructor function that will become an object
      var mainSvc = 'mainSvc is loading';
      return mainSvc;
    };
    // service is a constructor function
    // Technically when creating a service, you create an objec that passes into a controller
    this.getCursorStatus = function() {
      //self.ref = ....; gives it scope ouside of the function.
      var ref = new Firebase(baseUrl + '/game-board/cursor-status');
      var fbo = $firebaseObject(ref); // allows us to write to a firebase object
      fbo.on("value", function(data) { //event handler for firebase, everytime they get new info they send it out to listeners
        var exx = data.val().cursorStatus.x;
        var why = data.val().cursorStatus.y;
        var color = data.val().cursorStatus.color;
        console.log('retrieved from firebase: ' + ',x: ' + exx + ',y: ' + why + ',color: ' + color);

      });
    };
    // new creates a new object based off of the input
    //the outter scope this.
    //this keyword is a pointer that points to the scope that I define it in
    //it's assigned to the service scope.

  });

// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.
