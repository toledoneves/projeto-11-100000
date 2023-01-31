var ship;
var sea;
function preload(){
sea1 = loadAnimation ("sea.png");
ship1 = loadAnimation ("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200);
  ship = createSpite(210,200,30,20);
  sea.addImage ("sea.png", sea1)
  sea.addAnimation ("ship-1.png","ship-2.png", ship1)
}

function draw() {
  background("blue");
  if(sea.x < 0){
sea.x = sea.width/2;
ship.scale = 0.5;
  }



 drawSprites();
  

 
}