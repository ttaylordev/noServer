angular.module('shareDraw')
.service('mainSvc', function() {

  // declare firebase url and dom context.
  var baseUrl = 'https://blazing-inferno-1647.firebaseio.com//';

  this.getCursorStatus = function(){
    var ref = new Firebase(baseUrl + '/game-board/cursor-status');
    var fbo = $firebaseObject(ref); // allows us to write to a firebase object

    return
  };

  //retrieves data from fire base, x, y values as well as color choice
  ref.on("value", function(data) { //event handler for firebase, everytime they get new info they send it out to listeners
    var exx = data.val().cursorStatus.x;
    var why = data.val().cursorStatus.y;
    var color = data.val().cursorStatus.color;
    console.log('retrieved from firebase: ' + ',x: ' + exx + ',y: ' + why + ',color: ' + color);
  });



  //testing connectivity
  this.getMainSvc = function() {
    var mainSvc = 'mainSvc is loading';
    console.log('mainSvc is logging');
    return mainSvc;

  };

});

// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.
