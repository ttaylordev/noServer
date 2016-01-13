requirements:
  3 routes
  2 directives
    templateURL counts as one
      Must use js in the directive.

<!-- configure canvas
  Canvas board directive

  receive x,y
    see if firebase can receive and serve them along with a brush and a userID

    on MouseDown & mouseOver -->
       If cursor is within canvas borders
          X, y
          MouseDown bool

chat, send as current user
  no response to trigger on signup
    no send
  no response to trigger on login
    no send, no redirect

  can't highlight in link
  can't chat  
    fbo email updates for odd reasons
  auth
  fix chat
  set/send/recieve user permissions, we can use this for our "case.states"
  propper landing
    get getAuth function that retrieves current user and
      get's the email
one user tied to boxes,
  auth funciton isn't working as it should


UI


-----canvas resize-----
  chat input lengthened
  ------colors, shadows, radii-----
  background images
-----color pallette-----
  export .png
  export. gif
  solo room
  private room
  rocket ships and fireworks on scroll down if winner

ease away navbar, make it on hover

  buttons
    clearScreen
    clearAllScreens
      toggle alert
clear chat upon last user exit

------navBar for buttons------
color scheme themes
  randomized, or selected

highscores etc,

drawsomething cool on load


randomSquares
  randomOther shapes
    transmit those across firebase
      as a set of coords for loc and an array of coords for drawPaths
    confetti winning screen easing into an arc, then falling, waving, streaming towards the ground
        squares could roll and tumble
          thinner quads rotate faster, and spiral down
        larger and more equilateral squares feather down like paper                            sheets
        shimmer and glitter effects based on face angularfire
          like a light is shinning on them from some corner
          lights dimm
          disco ball

    requests between computers
      store a booleaan on the server, event listeners hook it in each users own scope.

  mouse leaving canvas, draw off, do mouseup events, entering the
    canvas with mouse down, should do mouse down functions
  canvas clear button
    origin.clear
  solo button
  team maker
nested canvases for multiple users
  can be created within a directive as many times as I nested
store an array of paths, for resync to call, and drawPath()
  perhaps, the drawPath method could become my renderer


  find a particle effect for cole's HP bars
    <!-- multiple different artists drawing at one time -->


random word

register users

chat
  auth
  input
    on button do something
    clear field afterwards


team alignment

scoreboard

Timer directive

_________________________________________

Directives
   Emojis mode
   Tanji mode
   Draw mode
   Scorecard
   Chat
   Landscapes
   Emojis selector
   Tangy selector
   Brush and color selector
   Pre-game Lobby
   Mobile scrolling


Chat rights based on activeTeam
  switch chat rights at timeout, delay for 15 seconds for users to type guesses


Trim data to send. To firebase
   Brush selected
      UserId
      Color
      Emojis
      Tangy
      Landscape selected

   Noun drawn
   Scorecard shared between all users
      Invalid scores are disregarded
   activeTeam
   Updating
      Timer
      Chat MSG
      TurnStatus
   WinningTeam


play with random color and settimeout
  try to get rainbow fading, leaving the trail behind it
    might use shadows for this effect
    color pallette buttons and options
    rainbow options





    Pictionary with firebase like http://www.pinturillo2.com . It could have a timer, a scorekeeper, and chat box, etc.
    ?    difficulty learning canvas, or building a drawing platform
        chat with firebase
      scoreboard, teams, users and auth
        facebook integration would be nice to post party results for self-promotion
        technical feasability, figure out how to get that content object to firebase, draw a line and the other person sees it in real time
            may not be possible using firebase
        might be really damn cool




put the bulk of your code in the service
if you're going to run a funciton, write it in the service
controllers should be thin and light and faster
service stores the functions
