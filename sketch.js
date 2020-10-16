
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(330, 235, 30, 40);
  createSprite(360, 235, 30, 40);
  createSprite(390, 235, 30, 40);
  createSprite(420, 235, 30, 40);
  createSprite(450, 235, 30, 40);

  createSprite(360, 195, 30, 40);
  createSprite(390, 195, 30, 40);
  createSprite(420, 195, 30, 40);

  createSprite(390, 155, 30, 40);

   createSprite(200,200,30,40);
   createSprite(200,140,5,100);
  
   createSprite(150,200,10,400);
   createSprite(380,395,450,10);
   createSprite(600,200,10,400);
   createSprite(380,5,450,10);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}