// $compile
//---------RUBBERDUCK METHOD---------
// SAY IT OU LOUD, IF YOU CAN'T FIGURE SOMETHING out
// PPL WILL ACTUALLY keep a rubberduck ontheir desk

if (mouseDown){
  beginPath();
}
// var mouseDown = false;
  //listener for mouse down as a functions {
  // beginPath(); begins a brand new fresh path
  // stores mouseLoc to a variables
  // moveTo specified pos
  // sets mouseDown to true
// }
// on mousedown, begin fresh path, and move to x-1,y-1
// set mousDown to true;

//cole's hp bars
// divs
// css transitions
// red background
// purple = green w/ faster transitions
// yellow = green full, with delay
// green  = green full hp

// detect a new path and send it to fb
// listen for a new path from fb
// begin a new path when listener fires

beginPath(); //begins the a path for a line not knowing where to start from
moveTo(x, y); //spevifies a location to perform an action
lineTo(x, y); //creates a line from last position to new coordinates
closePath(); //closes the path;
stroke(); //prints the stroke to the canvas
fill(); //fills in the area, paintbucket style
arcTo(x, y); // arcs to the point specified

fillStyle = "white"; //seems to precede most commands, allows you to specify styling
font = "px Helvetica";
fillText("Hello", 200, 200); //string to pring, followed by x,y coords.

/*Arcs and Circles*/ //good for circles, pie charts etc.
beginPath();
arc(200, 340, 50, 0, math.PI * 2, false); //start at x, y cord, radius, starting point(radians), ending point of arc(radians), boolean determining clockwise or counter for which direction to draw it in.
fill(); //fills the area

//animation draw bez curves, draw pixel at a time
var nameAvarX = 0; //you need a variable outside the function to store stuff
// you may add a second variable for a Y coordinate.
setInterval(function() {
  nameAvar += 1;

  /* you can add if statements to cause the particle to change direction as it reaches specific points*/
  if (nameAvarx > 200) {
    namAvarY += 3; // you could string these if statements to have things bouncing all over the place.
  }
  /*these two instructions, preceding the movment and shape commands, clear the canvas, and prepare it for the next drawing frame*/
  fillStyle = "black"; // you can use an alpha on an rgba color to cause a fading trail behind the moving animation.
  fillRect(0, 0, canvas.width, canvas.height);
  /*using only the below code, sort of slowly paints the object acrossed the screen leaving a permenant trail behind it*/
  fillStyle = 'red'; //sets the draw color to red
  beginPath(); //begins the path
  arc(nameAvar, 340, 50, 0, math.PI * 2, false); //describes the shape of the object, and sets the x coordinate equal to an incrementing variable, causing it to slide across the screen
  fill(); //paints the object the fillStyle color previously set
}, 30); //performs the inner function every 30 milli-seconds.

// First path
$scope.context.beginPath();
$scope.context.strokeStyle = 'blue';
$scope.context.moveTo(20, 20);
$scope.context.lineTo(200, 20);
$scope.context.stroke();




function renderTime() {
  var now = new Date();

}


// setTimout(function(){
// $scope.newFunc();
// },1000);

/* The $http service is a core Angular service
that facilitates communication with the remote HTTP
servers via the browser's XMLHttpRequest object or
via JSONP.*/





// angular.module('shareDraw')
//     .directive('copyrightDir', function () {
//         return {
//             restrict: 'E',
//             templateUrl: 'js/views/copyrightTmpl.html',
//             controller: function ($scope) {
//                 console.log("CopyrightDirCtrl Running");
//                 var currentDate = new Date().getFullYear();
//                 $scope.date = currentDate.toString();
//                 console.log($scope.date);
//             }
//         };
//     });




this.canvasDeclare = function() {
  return canvas;
};

this.contextDeclare = function(canvasDeclare) {
  return context;
};


this.getCursorLoc = function() {
  var storeLoc;




};




/*landing
lobby
game

u.router is in the dependancies of the app

routing in config brings in $statepProvider, $Urlrouter provider
	object
	with state
	buttons for state switching with sref




directive
	link function --can often be fairly large
		access the canvas elements from html
		create elements in the dom
		add specific event listeners
		color picker buttons etc

postgame

services -- will likely be fairly small, since i'm using firebase
	holds the configuratino for the firebase server
		drawing oard service
		chat service
		user service
	# of services should be somewhat independant of directives and controllers
	should be more dependant on the ammount of collections or data sets

	great for ecommercem users, products etc, the data is stored on firebase
	the service is the shippping and recieving department
	*/

/* directive -      if you're pointing to it from a dir to html
		directives are the queen of the chess board
	dir
	ctrl
	tmpl

views	-	 if you're pointing to it from router
	tmpls
	ctrls


.config
	routing


      //freedrawing
      function freeDraw(x, y) {
        $scope.context.fillStyle = randomColor();
        $scope.context.fillRect(x, y, 7, 7);
      } //return type is void, because there's no return statement


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





a view will define each separate routing
	landing
	game
	lobby



calling link, scope, elemtnt, attr

isolated scope - google that shiz

build greedy directivesm they shoudl take up as much space as they possibly can
	they can be scaled down to size later, size theym huge in css
	100% of it's parent's width or height etc.
	let their parent containers pad them down


	put it inside of a parent div temporarily while youstyle it
	but odds are
*/


/*
<hr> {{testMainCtrl}}, from: mainCtrl
<hr> {{testMainSvc}}, from: mainCtrl
<hr> {{testCopyrightCtrl}}
<hr> {{copyrightSvcIsLoading}}
<hr> {{getYear}}
<hr> {{testCanvasCtrl}}
<hr> {{canvasSvcIsLoading}}

*/


          /*
  *//*Custom Buttons*//*
          */
  //
  // Font Size: 27px bold italic;
  // Size
  // Vertical Size:
  // 24px
  // Horizontal Size:
  // 20px
  // Border
  // Border Radius:
  // 19px
  // Border Size:
  // 1px
  //   Box Shadow   /   inset
  // Vertical Position:
  // 0px
  // Horizontal Position:
  // 0px
  // Blur Radius:
  // 0px
  // Spread Radius:
  // 0px
  //   Text Shadow
  // Vertical Position:
  // 2px
  // Horizontal Position:
  // -1px
  // Blur Radius:
  // 40px

  //
  // create a function that returns the results of calling requets into the
  //  <input type="text" class="ciu-search__input" name="feat_search" autocomplete="off" autofocus="" value="">
  //  of caniuse.com;
    // or tap into their server/api



/* offset-x | offset-y | blur-radius | spread-radius | color */

//
// // 1. Create the button
// var button = document.createElement("button");
// button.innerHTML = "Do Something";
//
// // 2. Append somewhere
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);
//
// // 3. Add event handler
// button.addEventListener ("click", function() {
//   alert("did something");
// });
//

//
// .group:before,
// .group:after {
//   content:"";
//   display:table;
// }
// .group:after {
//   clear:both;
// }
// .group {
//   zoom:1; /* For IE 6/7 (trigger hasLayout) */
// }
//

//
// #star-six {
//   width: 0;
//   height: 0;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-bottom: 100px solid red;
//   position: relative;
// }
// #star-six:after {
//   width: 0;
//   height: 0;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-top: 100px solid red;
//   position: absolute;
//   content: "";
//   top: 30px;
//   left: -50px;
// }
//

// "float:center".... pseudo elements FTW
// #l:before, #r:before {
//   content: "";
//   width: 125px;
//   height: 250px;
// }
// #l:before {
//   float: right;
// }
// #r:before {
//   float: left;
// }
//



//takes data in and passes it to the service if possible
  // dom stuff has to be on the controller

// controller gets input from html, passes to the service
// service sends to fbo, fbo sends back, service...
//passes back to the controller to tell me treu/false




//logging and testing
// console.log('landingCtrl is logging outside');

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





  // the <copyright-directive> element tag in
  //   index.html is requesting an action
  //   from copyrightDirective, which is returning
  //   the contents of copyrightTempl.html
  //   it then loads that onto the DOM
  //   at the tags location-->


  // <!-- landing -->
  // <!-- uses the name/value of directive node of the angular.module object-->
