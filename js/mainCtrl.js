angular.module('sappyAppy')
  .controller('mainCtrl', function($scope, $firebaseObject, mainSvc) {  // inject dependancies, $scope, and service objects
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
    var baseUrl = 'https://carfiredevmountaintt.firebaseio.com/';
    console.log('1. MainCtrl. ' + baseUrl);
    //
    var ref = new Firebase(baseUrl + '/pic');
    var fbo = $firebaseObject(ref);
    console.log('2. MainCtrl. ',  $scope.context);
    fbo.thingy = $scope.context.getImageData(0, 0, 50, 50);
    fbo.value = "This is a test";
    fbo.$save();
    console.log('3. MainCtrl. ', fbo);


        // calling drawing functions
        $scope.drawSquares = drawSquares();

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

    function drawWithCursor() {
      function strokeThat() {
        $scope.context.strokeStyle = "white";
        $scope.context.lineWidth = 10;
      }

      function drawLine() {
        $scope.context.beginPath = "white";
        $scope.context.moveTo = (100, 100);
        $scope.context.lineTo(200, 200);
        $scope.context.stroke();
      }
    }
    // store a var with an onclick listener, an array, add this to the firebase array.
    // on the user side, listen for changes from firebase
    // console.log('5. ' + 'where is number 4?');
    // pass just the definition, not the result of the funciton


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
