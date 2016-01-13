angular.module('shareDraw')
  .controller('canvasCtrl', function($scope, $firebaseObject, canvasSvc, mainSvc, $interval) { // inject dependancies, $scope, and service objects
    // adding/logging tests for canvasCtrl to the DOM
    // $scope.testCanvasCtrl = 'canvasCtrl is working';
    // console.log('canvasCtrl is logging');
    // adding tests for canvasSvc to the DOM
    // this.testCanvasSvc = canvasSvc.testCanvasSvc();
    // assign/declare canvas element and context
    $scope.canvas = document.getElementById('canvas');
    $scope.context = $scope.canvas.getContext('2d');

    var el = document.getElementById('#canvas');


    //  declaring global variables
    var cursorStatus = mainSvc.getCursorStatus();
    var activeColor;

    // var globalPos;
    // var fboMouseDown = false; // gets userMouseDown from firebase
    var mouseDown = false;
    var activeArtist = false;
    var runOnceVar = true;

    //tracks state of mouse button and begins fresh path
    $scope.canvas.addEventListener('mousedown', function(evt) { //snake case because it's an html thing.
      var pos = mouseLoc(canvas, evt);
      activeArtist = true;
      activeColor = randomColor();
      cursorStatus.color = activeColor;
      $scope.context.beginPath();
      $scope.context.moveTo(pos.x - 1, pos.y - 1); // these homies could be passed to the FBO and used,
      console.log(pos.x + ',' + pos.y);
      mouseDown = true;
      cursorStatus.userMouseDown = true;
      // console.log(cursorStatus.userMouseDown);
      cursorStatus.$save();
    }, false);

    $scope.canvas.addEventListener('mouseup', function(evt) { //snake case because it's an html thing.
      activeArtist = false;
      mouseDown = false;
      cursorStatus.userMouseDown = false;
      // console.log(cursorStatus.userMouseDown);
      cursorStatus.$save();
      $scope.context.beginPath();
    }, false);

    //receives firebase data and draws line path from data received
    cursorStatus.$ref().on('value', function(data) {
      $scope.context.strokeStyle = data.val().color;
      $scope.context.lineCap = 'round';
      $scope.context.lineWidth = 10;
      if (cursorStatus.userMouseDown === true && runOnceVar === true && activeArtist === false) {
        // console.log('1st if is true');
        $scope.context.beginPath();
        $scope.context.moveTo(data.val().x - 1, data.val().y - 1);
        $scope.context.lineTo(data.val().x, data.val().y);
        $scope.context.stroke();
        runOnceVar = false;
      } else if (cursorStatus.userMouseDown === true && activeArtist === false && runOnceVar === false) {
        // console.log('2nd if is true');
        $scope.context.lineTo(data.val().x, data.val().y);
        $scope.context.stroke();
      } else if (cursorStatus.userMouseDown === false) {
        $scope.context.beginPath();
        runOnceVar = true;
        // console.log('3rd is true');
      }
    });

    // gets the mouse position, and sends it to Firebase while lineDraw 'ing under the mouse cursor
    $scope.canvas.addEventListener('mousemove', function(evt) {
      var mousePos = mouseLoc($scope.canvas, evt);
      var mousePosX = mousePos.x;
      var mousePosY = mousePos.y;
      globalPos = mousePos;
      if (mouseDown && activeArtist === true) {
        lineDraw(mousePos.x, mousePos.y, activeColor);
        cursorStatus.x = mousePosX;
        cursorStatus.y = mousePosY;
        cursorStatus.$save(); //method to send.
      }
    }, false);


    //draws lines
    function lineDraw(x, y, color, userMouseDown) {
      $scope.context.strokeStyle = color;
      $scope.context.lineCap = 'round';
      $scope.context.lineWidth = 10;
      $scope.context.lineTo(x, y);
      $scope.context.stroke();
    }

    //return mouse location
    function mouseLoc(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
      };
    }

    // randomColor generator
    function randomColor() {
      var rInt = Math.floor((Math.random() * 250)); // floor, ceil, and round
      var gInt = Math.floor((Math.random() * 250));
      var bInt = Math.floor((Math.random() * 250));
      return 'rgb(' + rInt + ',' + gInt + ',' + bInt + ')';
    }

    // draws random squares
    function drawSquares() {
      $scope.context.fillStyle = randomColor();
      $scope.context.fillRect(Math.random() * 500, Math.random() * 500, Math.random() * 50, Math.random() * 50);
    }
    $scope.drawSquares = drawSquares;

  });

/* Marker effect
    if ((x1 + x2)/(y1 + y2) > 30){ // turning a sharp corner will sometimes make the brush fade a bit like a white board marker
    or... //TODO randomly on it's own while moving horizontally or near horizontally.
      if (randomNumber*10 > 7){ // 30% chance to have the following effect
      //TODO brush size dimmineshes in a for loop until it reaches 0px, then increments until hitting original
      //TODO give the brush a streaky ,inconsistant gradient
      //TODO fade into that gradient over a timer
  }
  */

// TODO: experiment with paths, drawing lines from code
// TODO: add users, and a switch statement to change the functionality of drawing with mouse, vs drawing from fbo data retrieved.


//intereting note:it's not initialized as a function, this happens later on a button click event


/* the controller is where data is stored to variables
    to be accessed on the DOM.
    #scope. is the required prefix for DOM passing
    */
/* the controller also is responsible for running the
    funtions stored elswhere in the object/filestructure
    by assigning it to the $scope. It is a lazy manager,
    who keeps track of work being performed, issues
    commands and readies responses to be delivered to
    the DOM*/
