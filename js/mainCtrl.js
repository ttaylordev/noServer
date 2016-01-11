angular.module('sappyAppy')
  .controller('mainCtrl', function($scope, $firebaseObject, mainSvc) { // inject dependancies, $scope, and service objects
    // adding/logging tests for mainCtrl to the DOM
    $scope.testMainCtrl = 'mainCtrl is working';
    console.log('MainCtrl is logging');
    // adding tests for mainSvc to the DOM
    $scope.testMainSvc = mainSvc.getMainSvc();

    //assign/declare canvas element and context
    $scope.canvas = document.getElementById('canvas');
    $scope.context = $scope.canvas.getContext('2d');

    // declare firebase url and dom context.
    // includes logging for testing purposes.
    var baseUrl = 'https://blazing-inferno-1647.firebaseio.com//';
    var ref = new Firebase(baseUrl + '/game-board');
    var fbo = $firebaseObject(ref); // allows us to write to a firebase object

    // gets the mouse position, and sends it to Firebase
    $scope.canvas.addEventListener('mousemove', function(evt) { //snake case because it's an html thing.
      if (mouseDown) {
        var colorFlag = '#f34456';
        var mousePos = mouseLoc($scope.canvas, evt);
        console.log('!!!mouseX: ' + mousePos.x + ', mouseY: ' + mousePos.y);
        // drawWithCursor(mousePos.x, mousePos.y);
        freeDraw(mousePos.x, mousePos.y);
        fbo.cursorStatus = {
          x: mousePos.x,
          y: mousePos.y,
          color: colorFlag
        };
        fbo.$save(); //method to send.
      }
    }, false);

    //retrieves data from fire base, x, y values as well as color choice
    ref.on("value", function(data) { //event handler for firebase, everytime they get new info they send it out to listeners
      var exx = data.val().cursorStatus.x;
      var why = data.val().cursorStatus.y;
      var color = data.val().cursorStatus.color;
      console.log('retrieved from firebase: ' + ',x: ' + exx + ',y: ' + why + ',color: ' + color);
    });
    // TODO: add users, and a switch statement to change the functionality of drawing with mouse, vs drawing from fbo data retrieved.
    //tracks state of mouse button
    var mouseDown = false;
    $scope.canvas.addEventListener('mousedown', function(evt) { //snake case because it's an html thing.
      mouseDown = true;
    }, false);
    $scope.canvas.addEventListener('mouseup', function(evt) { //snake case because it's an html thing.
      mouseDown = false;
    }, false);


    // console.log('2. MainCtrl. ', $scope.context);

    // fbo.thingy = $scope.context.getImageData(0,0,50,50);
    // fbo.value = "This is a test";
    // fbo.$save(); //method to send.
    //
    // console.log('3. MainCtrl. ', fbo);

    //return mouse location
    function mouseLoc(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
      };
    }

    //freedrawing
    function freeDraw(x, y) {
      $scope.context.fillStyle = randomColor();
      $scope.context.fillRect(x, y, 5, 5);
      console.log(x);
      console.log(y);
      console.log('freeDraw is logging');
    } //return typis is void, because there's no return statement

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

    //draws by dragging cursor
    //isnt working
    function drawWithCursor() {
      function strokeThat() {
        $scope.context.strokeStyle = '#f34456';
        $scope.context.lineWidth = 10;
        console.log('strokin it');
      }
      strokeThat();
    }
    //draws lines
    function drawLine() {
      $scope.context.beginPath = "white";
      $scope.context.moveTo = (100, 100);
      $scope.context.lineTo(200, 200);
      $scope.context.stroke();
    }

    // store a var with an onclick listener, an array, add this to the firebase array.
    // on the user side, listen for changes from firebase
    // console.log('5. ' + 'where is number 4?');
    // pass just the definition, not the result of the funciton

    // gives drawing functions access to the $scope
    //intereting note:it's not initialized as a function, this happens later on a button click event
    $scope.drawSquares = drawSquares;

  });

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
