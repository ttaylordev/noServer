requirements:
     3 routes
     2 directives
          templateURL counts as one
            Must use js in the directive.

configure canvas
  Canvas board directive

  receive x,y
    see if firebase can receive and serve them along with a brush and a userID

    on MouseDown & mouseOver
       If cursor is within canvas borders
          X, y
          MouseDown bool



random word

register users

chat

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







    Pictionary with firebase like http://www.pinturillo2.com . It could have a timer, a scorekeeper, and chat box, etc.
    ?    difficulty learning canvas, or building a drawing platform
        chat with firebase
      scoreboard, teams, users and auth
        facebook integration would be nice to post party results for self-promotion
        technical feasability, figure out how to get that content object to firebase, draw a line and the other person sees it in real time
            may not be possible using firebase
        might be really damn cool
