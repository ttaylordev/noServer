angular.module('sappyAppy')
  .controller('mainCtrl', function($scope, $firebaseObject, mainSvc) {
    $scope.testMainCtrl = 'mainCtrl is working';
    $scope.mainSvc = mainSvc.getMainSvc();
    console.log('MainCtrl is logging');


    $scope.canvas = document.getElementById('canvas');
    $scope.context = $scope.canvas.getContext('2d');
    // I can do stuff!
    var baseUrl = 'https://carfiredevmountaintt.firebaseio.com/';
    // console.log('1. ' + baseUrl);
    var ref = new Firebase(baseUrl + '/pic');
    var fbo = $firebaseObject(ref);
    // console.log('2. ',  $scope.context);
    fbo.thingy = $scope.context.getImageData(0, 0, 50, 50);
    fbo.value = "This is a test";
    fbo.$save();
    // console.log('3. ', fbo);

    function randomColor() {
      var rInt = Math.floor((Math.random() * 250)); // floor, ceil, and round
      var gInt = Math.floor((Math.random() * 250));
      var bInt = Math.floor((Math.random() * 250));
      return 'rgb(' + rInt + ',' + gInt + ',' + bInt + ')';
    }

    function drawSquares() {
      $scope.context.fillStyle = randomColor();
      $scope.context.fillRect(Math.random() * 500, Math.random() * 500, Math.random() * 50, Math.random() * 50);
      // console.log('4. ' + 'button is working');
    }

    function drawStuff() {
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
    $scope.drawSquares = drawSquares;
    // console.log('5. ' + 'where is number 4?');
    //pass just the definition, not the result of the funciton


  });
