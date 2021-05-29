var bg
function preload(){
   bg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  if(frameCount%100===0){
    snow=new Snow(50,750)
  }
}

function draw() {
  background(bg);  
  drawSprites();
  snow.display()
}

