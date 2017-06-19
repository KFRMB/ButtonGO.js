window.onload=function(){
//=============================================================================
 
//button moves to a random spot inside of the given area
var bmrv = new BMRV();

$(function(){
    $("#buttonGOrandom").on({
        mouseover:function(){
            $(this).css({
            //the given area is described and a random position is given.
            //if you want to move your box more to the right add a +100 -or the amount you want it to go right- in front of the math.random function. Same goes for top position.
                left:bmrv.BMRVpositionleft + (Math.random()*bmrv.BMRVcanvasleft)+"px",
                top:bmrv.BMRVpositiontop + (Math.random()*bmrv.BMRVcanvastop)+"px",
            //the left and top position of the CSS changes
            //want to change text as well?
            });
        }
    });
});
 
//=============================================================================
 
//button goes up and down unlimited time
//button goes up and down unlimited time
  var bguad = new BGUAD();
  
   var buttonGOupANDdown = $('#buttonGOupANDdown');
   function runbuttonGOupANDdown() {
   	//go down
       buttonGOupANDdown.animate({top: + bguad.positionup}, bguad.timedown);
       //go up
       buttonGOupANDdown.animate({top: - bguad.positiondown}, bguad.timeup, runbuttonGOupANDdown);
   }
   runbuttonGOupANDdown(); 

//=============================================================================
 
//button goes down 1 time when mouse hovers over it
  var bguadh = new BGUADH();
  
document.getElementById('buttonGOupANDdownHOVER').onmouseover = function() {

   var buttonGOupANDdownHOVER = $('#buttonGOupANDdownHOVER');
   function runbuttonGOupANDdownHOVER() {
   	//go down
       buttonGOupANDdownHOVER.animate({top:'+='+ bguadh.positiondown}, bguadh.timedown);
       //go up
       buttonGOupANDdownHOVER.animate({top:'-='+ bguadh.positionup}, bguadh.timeup);
       
   }
   runbuttonGOupANDdownHOVER();
   };

//=============================================================================

//button goes down 1 time
  var bgd = new BGD();
  
document.getElementById('buttonGOdown').onclick = function() {

   var buttonGOdown = $('#buttonGOdown');
   function runbuttonGOdown() {
   	//go down
       buttonGOdown.animate({top: '+=' + bgd.positiondown}, bgd.timedown);
   }

   runbuttonGOdown();

   };
 
//=============================================================================
    
//button goes up 1 time
   var bgu = new BGU();
  
   document.getElementById('buttonGOup').onclick = function() {

   var buttonGOup = $('#buttonGOup');
   function runbuttonGOup() {
   	//go up
       buttonGOup.animate({top: '-=' + bgu.positionup}, bgu.timeup);
   }

   runbuttonGOup();

   };

//=============================================================================

//button goes left 1 time
document.getElementById('buttonGOleft').onclick = function() {

   var buttonGOleft = $('#buttonGOleft');
   function runbuttonGOleft() {
   	//go down
       buttonGOleft.animate({left:'-=20'}, 1000);
   }

   runbuttonGOleft();

   };
 
//=============================================================================
      
//button goes right 1 time
var bgr = new BGR();
    
document.getElementById('buttonGOright').onclick = function() {
   var buttonGOright = $('#buttonGOright');
   function runbuttonGOright() {
   	//go down
       buttonGOright.animate({left:'+=' + bgr.positionleft}, bgr.timeright,);
       bgr.buttonchecklist ++;
   }
   if(bgr.buttonchecklist <4){
   runbuttonGOright();
   }
      if(bgr.buttonchecklist == 1){
   document.getElementById("buttonGOright").innerHTML = bgr.changetext[0];
   }
      if(bgr.buttonchecklist == 2){
   document.getElementById("buttonGOright").innerHTML = bgr.changetext[1];
   }
      if(bgr.buttonchecklist == 3){
   document.getElementById("buttonGOright").innerHTML = bgr.changetext[2];
   }
      if(bgr.buttonchecklist == 4){
   document.getElementById("buttonGOright").innerHTML = bgr.changetext[3];
   }
 
   }

//=============================================================================

//button flys through space -only flys to 1 position !not multiple!-
var bgrcanvas = new BGRcanvas();
    
var buttonGOfly = document.getElementById( 'buttonGOfly' );

function translate( elem ) {
    var left = parseInt( css( elem, 'left' ), 10 ),
        top = parseInt( css( elem, 'top' ), 10 ),
        dx = left - bgrcanvas.x,
        dy = top - bgrcanvas.y,
        i = 1;
    
    function loop() {
        if ( i >= bgrcanvas.count ) { return; }
        i += 1;
        elem.style.left = ( left - ( dx * i / bgrcanvas.count ) ).toFixed( 0 ) + 'px';
        elem.style.top = ( top - ( dy * i / bgrcanvas.count ) ).toFixed( 0 ) + 'px';
        setTimeout( loop, bgrcanvas.delay );
    }
    
    loop();
}

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

window.onclick = function ( a ) {
    var array;
    
    if ( a.target.id === 'buttonGOfly' ) {
        array = a.target.title.split( ' ' );
        translate( buttonGOfly, +array[0], +array[1] );        
    }
};
    
//=============================================================================

}