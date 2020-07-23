var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(10, 10, 90, 60);
  fixedRect.shapeColor  = "pink";
  movingRect.shapeColor = "pink";
  fixedRect.debug  = true;
  movingRect.debug = true;
}

function draw() {
  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    ) {
      movingRect.shapeColor = "yellow";
      fixedRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor  = "pink";
    movingRect.shapeColor = "pink";
  }

  drawSprites();
}