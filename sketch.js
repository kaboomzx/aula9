var image;

function setup() {
  createCanvas(800,800);
  image = createSprite(400,400,50,50);
}

function draw() 
{
  background(30);
if(keyDown("LEFT")){
image.x = image.x -5

}
if(keyDown("RIGHT")){

image.x = image.x +5
}
if(keyDown("UP")){

image.y = image.y-5
}
if(keyDown("down")){

  image.y = image.y+5
}
  drawSprites();

}




