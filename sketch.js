var fighterplane,asteroid,space,fighterplaneimage,asteroidimage,spaceimage;
function preload(){
spaceimage = loadImage("space.png");
fighterplaneimage = loadImage("plane.png");
asteroidimage = loadImage("asteroid.png");
}
function setup() {
  createCanvas(800,400);
  space=createSprite(0,0,800,400);
  space.addImage(spaceimage);
  space.scale=1.5;
  //space.x=backgr.width/2;
  //space.velocityX=-4;
  fighterplane=createSprite(100,200);
  fighterplane.addImage(fighterplaneimage);
  fighterplane.scale=0.5;
  
  asteroid=createSprite(600,200);
  asteroid.addImage(asteroidimage);
  asteroid.scale=0.5;
}
function draw() { 
  drawSprites();
}