
var fixedRect, MovingRect;
var rect1, rect2;
var rect3;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 70);
  fixedRect.shapeColor = "Yellow"

  MovingRect = createSprite(400, 200, 50, 50);
  MovingRect.shapeColor = "Blue"

  rect1= createSprite(100,100,50,50);
  rect1.shapeColor= "pink";
  rect1.velocityX=2;

  rect2= createSprite(400,100,50,50);
  rect2.shapeColor= "purple";

  rect3= createSprite(300,100,50,50);
  rect3.shapeColor= "black";

}

function draw() {
  background(220,255,255);  
  drawSprites();

  MovingRect.x = mouseX;
  MovingRect.y = mouseY;
 
  console.log (" Distance  " + (MovingRect.x-fixedRect.x))

  console.log (" Width  " + (MovingRect.width+fixedRect.width)/2)

  bounceoff(rect1, rect3)

  if(isTouching(MovingRect, fixedRect))
  {
    fixedRect.shapeColor = "Red"
  }
  else{
    fixedRect.shapeColor = "Yellow"
  }

  if(isTouching(MovingRect, rect2)){
     rect2.x= rect2.x +10;
  }
 
}