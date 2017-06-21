# ButtonGO.js
Javascript framework for optimizing button interaction.

<b> Bringing movement to your elements </b>

With this easy-to-use Framework you can make buttons do some crazy ****

<b> Using jQuery </b>

In order to make my page load faster and avoid lagg in my animations i used jQuery. 
This library also gives me the option to make DOM manipulation easier.
In order to use jQuery add the following line to your index.html:

> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

<b>How to use</b>

In order to make buttons do something you must give them the right ID.
These are the following ID's you can currently use:

id='buttonGOrandom'

this button moves to a random position within the given canvas when the mouse hovers over it.

this is the class ButtonMoveRandomValues, in this class you have the current position of the button (left and top) and the values of the canvas in which the button can move (canvasleft canvastop) in order to make the button work perfectly you should make the button obsolute in your css file. This will prevent elements from jumping away when the mouse hovers over the button.

> var BMRV = function(){

> this.BMRVpositionleft = 0;

> this.BMRVpositiontop = 0;

> this.BMRVcanvasleft = 300;

> this.BMRVcanvastop = 300;

> }

id='buttonGOupANDdown'

this button will go up and down for unlimited time and starts when the page is loaded.

this is the class ButtonGoUpAndDown, in this class you have the amount of pixels the button wil go down and up. (positiondown and positionup) in order to make the button go up and down faster (timedown and timeup). Also, give this button position obsolute as well if you like it to work better.

> var BGUAD = function(){

> this.positiondown = 10;

> this.positionup = 10;

> this.timedown = 1000;

> this.timeup = 1000;

> } 

id='buttonGOupANDdownHOVER'

this button will go up and down when the user hovers over the button and stops when the mouse leaves and the animation is finished.

This is the class ButtonGoUpAndDownHover, in this class you can set the position to go up and down (positiondown and positionup) in amount of px. You can also set the time of the animation up and down (timedown and timeup) in ms.

> var BGUADH = function(){

> this.positiondown = 10;

> this.positionup = 10;

> this.timedown = 1000;

> this.timeup = 1000;

> }

id="buttonGOdown"



//values for button go down
> var BGD = function(){

> this.positiondown = 20;

> this.timedown = 100;

> }

id="buttonGOup"

id="buttonGOleft"

id="buttonGOright"

id='buttonGOfly'





//values for button go up
var BGU = function(){
this.positionup = 20;
this.timeup = 100;
}
//values for button go left
var BGL = function(){
this.positionleft = 20;
this.timeleft = 100;
}
//values for button go right
var BGR = function(){
this.positionleft = 20;
this.timeright = 100;
this.buttonchecklist = 0;
this.changetext = ["Right1", "Right2", "Right3", "Right4"];
}
//define location for fly button
var BGRcanvas = function(){
this.x = -100;
this.y = 100; 
//set the amount of frames
this.count = 20,
//set the speed of the movement
this.delay = 10;
}

