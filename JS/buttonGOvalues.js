//values for buttonGOrandom
var BMRV = function(){
this.BMRVpositionleft = 0;
this.BMRVpositiontop = 0;
this.BMRVcanvasleft = 300;
this.BMRVcanvastop = 300;
}
//values for button GO up and down
var BGUAD = function(){
this.positiondown = 10;
this.positionup = 10;
this.timedown = 1000;
this.timeup = 1000;
} 
//values for button hover
var BGUADH = function(){
this.positiondown = 10;
this.positionup = 10;
this.timedown = 1000;
this.timeup = 1000;
}
//values for button go down
var BGD = function(){
this.positiondown = 20;
this.timedown = 100;
}
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
var BGRcanvas = function(){
this.x = -100;
this.y = 100; 
//set the amount of frames
this.count = 20,
//set the speed of the movement
this.delay = 10;
}