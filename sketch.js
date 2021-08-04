var path;
var path_image;
var boy
var boy_running
var invisible_left
var invisible_right
function preload()
{ 
  //pre-load images
  path_image = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,100,100);
  path.addImage(path_image);
  path.scale = 1.2;

  boy = createSprite(300,345,10,10);
  boy.addAnimation("runningBoy",boy_running);
  boy.scale = 0.07;

  invisible_right = createSprite(390,200,20,400);
  invisible_right.visible = false;

  invisible_left = createSprite(15,200,20,400);
  invisible_left.visible = false
}

function draw() 
{
  background(0);
  path.velocityY = 4;

  if(path.y > 400)
  {
    path.y = height/2;
  }

  boy.x = World.mouseX;
  boy.collide(invisible_right);
  boy.collide(invisible_left);
  drawSprites();
}
