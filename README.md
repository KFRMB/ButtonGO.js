# ButtonGO.js
Javascript framework for optimizing button interaction.

<b> Bringing movement to your elements </b>

With this easy-to-use Framework you can make buttons do some crazy ****

I created this framework because there was little movement in buttons, whether you're filling in a form for a driving license or completing your login form, how do you know you are at step 2? Just tell its step 2? Dude.. Thats lame, step up your game, add some movement in that button! For instance, make the button move right when the user clicks on next step. The user gets a better feeling, sees his or her progress better and the website has more interaction with the user making it more unique. An other instence for using my framework is for download buttons, just click and download... yeaaaaah hell no. lets take it up a notch, in my framework the download button moves out of your screen taking your download up like a rocket and landing on your pc! These kind of animations are the small change to making a website more interactive and amusing.

<b> Using jQuery </b>

In order to make my page load faster and avoid lagg in my animations i used jQuery. 
This library also gives me the option to make DOM manipulation easier.
In order to use jQuery add the following line to your index.html:

> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

<b>How to use</b>

In order to make buttons do something you must give them the right ID.
These are the following ID's you can currently use:

<b>id='buttonGOrandom'</b>

this button moves to a random position within the given canvas when the mouse hovers over it.

this is the class ButtonMoveRandomValues, in this class you have the current position of the button (left and top) and the values of the canvas in which the button can move (canvasleft canvastop) in order to make the button work perfectly you should make the button obsolute in your css file. This will prevent elements from jumping away when the mouse hovers over the button.

> var BMRV = function(){

> this.BMRVpositionleft = 0;

> this.BMRVpositiontop = 0;

> this.BMRVcanvasleft = 300;

> this.BMRVcanvastop = 300;

> }

<b>id='buttonGOupANDdown'</b>

this button will go up and down for unlimited time and starts when the page is loaded.

this is the class ButtonGoUpAndDown, in this class you have the amount of pixels the button wil go down and up. (positiondown and positionup) in order to make the button go up and down faster (timedown and timeup). Also, give this button position obsolute as well if you like it to work better.

> var BGUAD = function(){

> this.positiondown = 10;

> this.positionup = 10;

> this.timedown = 1000;

> this.timeup = 1000;

> } 

<b>id='buttonGOupANDdownHOVER'</b>

this button will go up and down when the user hovers over the button and stops when the mouse leaves and the animation is finished.

this is the class ButtonGoUpAndDownHover, in this class you can set the position to go up and down (positiondown and positionup) in amount of px. You can also set the time of the animation up and down (timedown and timeup) in ms. if you want to make the button move better you can use position absolute.

> var BGUADH = function(){

> this.positiondown = 10;

> this.positionup = 10;

> this.timedown = 1000;

> this.timeup = 1000;

> }

<b>id="buttonGOdown"</b>

this button wil go down when clicked on. it will continue going down for ever (no limit has yet been set).

this is the class ButtonGoDown, in this class you can set the time it takes to go down 1 time (timedown in ms) and the amount of px it will go down (positiondown in px). if you want to make the button move better you can use position absolute.

//values for button go down
> var BGD = function(){

> this.positiondown = 20;

> this.timedown = 100;

> }

<b>id="buttonGOup"</b>

this button will go up when clicked on. it will continue going up for ever (no limit has yet been set).

this is the class ButtonGoUp, in this class you can set the time it takes to go up 1 time (timeup in ms) and the amount of px it will go up (positionup in px). if you want to make the button move better you can use position absolute.


//values for button go up
> var BGU = function(){

> this.positionup = 20;

> this.timeup = 100;

> }

<b>id="buttonGOleft"</b>

this button will go left when clicked on. it will continue going up for ever (it is planned to move like the button go right (this button only moves 4 times in an array)). if you want to make the button move better you can use position absolute.

this is the class ButtonGoLeft, in this class you can set the time it takes to go left 1 time (timeleft in ms) and the amount of px it will go left (positionleft in px). if you want to make the button move better you can use position absolute.

> var BGL = function(){

> this.positionleft = 20;

> this.timeleft = 100;

> }

<b>id="buttonGOright"</b>

this button will go right when clicked on. The text will change everytime it is clicked and you can only click it for 4 times.

this is the class ButtonGoRight, in this class you can set the position left (positionleft in px) and the time the animation wil take to go right (timeright in ms), there is also an buttonchecklist you can change this if you want the array to start on a diffrent text but it is recomended you keep it at 0. the changetext is an array where you can put your own text in, as the button is clicked the text will change in the order in the array (right 1 first right 2 second etc...). it is recomended you put the button on position obsolute.

> var BGR = function(){

> this.positionleft = 20;

> this.timeright = 100;

> this.buttonchecklist = 0;

> this.changetext = ["Right1", "Right2", "Right3", "Right4"];

> }

<b>id='buttonGOfly'</b>

this button wil fly away when you click on it.

this is the class ButtonGoRcanvas, in this class you can set the x and y location (left and top) where the button will go to. you can set the amount of frames the button will have and the speed in which the button will fly form one place to the next. it is recomended you use position absolute and overflow hidden.

> var BGRcanvas = function(){

> this.x = -100;

> this.y = 100; 

> this.count = 20,

> this.delay = 10;

> }



<b> Kevin Frambach - Fontys FHICT Tilburg <b>

