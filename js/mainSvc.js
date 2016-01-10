angular.module('sappyAppy')
  .service('mainSvc', function() {

    this.getMainSvc = function() {
      var mainSvc = 'mainSvc is loading';
      console.log('mainSvc is logging');
      return mainSvc;
    };
    // // randomColor generator
    // this.randomColor = function() {
    //   var rInt = Math.floor((Math.random() * 250)); // floor, ceil, and round
    //   var gInt = Math.floor((Math.random() * 250));
    //   var bInt = Math.floor((Math.random() * 250));
    //   return 'rgb(' + rInt + ',' + gInt + ',' + bInt + ')';
    // };
    //
    // // draws random squares
    // this.drawSquares = function() {
    //   return {
    //   $scope.context.fillStyle = randomColor();
    //   $scope.context.fillRect(Math.random() * 500, Math.random() * 500, Math.random() * 50, Math.random() * 50);
    // };
    // }
    //
    // //draws by dragging cursor nested functions
    // this.drawWithCursor = function() {
    //   function strokeThat() {
    //     $scope.context.strokeStyle = "white";
    //     $scope.context.lineWidth = 10;
    //   }
    //   //draws lines
    //   function drawLine() {
    //     $scope.context.beginPath = "white";
    //     $scope.context.moveTo = (100, 100);
    //     $scope.context.lineTo(200, 200);
    //     $scope.context.stroke();
    //   }
    // };


    // store a var with an onclick listener, an array, add this to the firebase array.
    // on the user side, listen for changes from firebase
    // console.log('5. ' + 'where is number 4?');
    // pass just the definition, not the result of the funciton


  });

// most functions are stored from the service, similar to a model/view structure
// the service is injected(passed) as a dependancy into the controller
// the functions are called/initialized by the controller object
// the controller injects them into the DOM using $scope.
