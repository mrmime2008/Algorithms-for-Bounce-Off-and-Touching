var fixed_rect,moving_rect;
var game_object_1,game_object_2,game_object_3,game_object_4;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite(400,100,50,80);
  fixed_rect.shapeColor = "blue";
  moving_rect = createSprite(400,800,80,30);
  moving_rect.shapeColor = "blue";
  game_object_1 = createSprite(100,100,50,50);
  game_object_1.shapeColor = "orange";
  game_object_2 = createSprite(200,100,50,50);
  game_object_2.shapeColor = "orange";
  game_object_3 = createSprite(300,100,50,50);
  game_object_3.shapeColor = "orange";
  game_object_4 = createSprite(400,100,50,50);
  game_object_4.shapeColor = "orange";
  moving_rect.velocityX = -5;
  fixed_rect.velocityX = +5;
}



function draw() {
  background(0,0,0); 

  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;
  
  if(isTouching(moving_rect,game_object_3)){
    moving_rect.shapeColor = "blue";
    game_object_3.shapeColor = "blue";
  }else {
    moving_rect.shapeColor = "red";
    game_object_3.shapeColor = "red";
    
  }
  
  bounceOff(moving_rect,fixed_rect);
  
  drawSprites();
}

