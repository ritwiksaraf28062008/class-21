var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
   rect1 = createSprite(100,200,30,30);
   rect2 = createSprite(700,200,50,50);
   rect1.velocityX = 3;
   rect2.velocityX = -3;
}

function draw() {
  background(0,0,0);  

  
bounceoff(movingRect,fixedRect);
bounceoff(rect1,rect2);


  drawSprites();
}

