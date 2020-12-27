
var x = 0;
var y = 200;
var targetX = 300;
var targetY = 200;

var knife;

function setup(){
  createCanvas(600, 400);

   knife = createSprite(x, y, 30, 30);
} 

function draw(){
  
  x = lerp(x, targetX, 0.2);
  y = lerp(y, targetY, 0.2);

  background(51);

  knife.position.x = x;
  knife.position.y = y;

  drawSprites();

}

function mousePressed(){
  targetX = mouseX;
  targetY = mouseY;
  console.log("wow");
}