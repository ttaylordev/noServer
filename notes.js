beginPath(); //begins the a path for a line not knowing where to start from
moveTo(x,y); //spevifies a location to perform an action
lineTo(x,y); //creates a line from last position to new coordinates
closePath(); //closes the path;
stroke(); //prints the stroke to the canvas
fill(); //fills in the area, paintbucket style

fillStyle = "white"; //seems to precede most commands, allows you to specify styling
font = "px Helvetica";
fillText("Hello", 200, 200);  //string to pring, followed by x,y coords.

/*Arcs and Circles*/  //good for circles, pie charts etc.
beginPath();
arc(200, 340, 50, 0, math.PI*2, false); //start at x, y cord, radius, starting point(radians), ending point of arc(radians), boolean determining clockwise or counter for which direction to draw it in.
fill(); //fills the area

//animation draw bez curves, draw pixel at a time
var nameAvarX = 0; //you need a variable outside the function to store stuff
                  // you may add a second variable for a Y coordinate.
setInterval(function(){
  nameAvar +=1;

  /* you can add if statements to cause the particle to change direction as it reaches specific points*/
  if (nameAvarx > 200){
    namAvarY +=3; // you could string these if statements to have things bouncing all over the place.
  }
  /*these two instructions, preceding the movment and shape commands, clear the canvas, and prepare it for the next drawing frame*/
  fillStyle = "black"; // you can use an alpha on an rgba color to cause a fading trail behind the moving animation.
  fillRect(0,0, canvas.width, canvas.height);
  /*using only the below code, sort of slowly paints the object acrossed the screen leaving a permenant trail behind it*/
  fillStyle = 'white'; //sets the draw color to white
  beginPath(); //begins the path
  arc(nameAvar, 340, 50, 0, math.PI*2, false); //describes the shape of the object, and sets the x coordinate equal to an incrementing variable, causing it to slide across the screen
  fill(); //paints the object the fillStyle color previously set
}, 30); //performs the inner function every 30 milli-seconds.




function renderTime(){
  var now = new Date();
  
}
