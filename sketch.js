
var still;
var moving;


function setup() {
  createCanvas(800,400);
  moving = createSprite(400,200,50,50);
  moving.shapeColor="red";
  still = createSprite(200,200,50,100);
  still.shapeColor="red";
  moving.debug=true;
  still.debug=true;
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;
if(moving.x-still.x<moving.width/2 + still.width/2 
  && still.x-moving.x<moving.width/2 + still.width/2 
  && still.y-moving.y<moving.height/2 + still.height/2 
  && moving.y-still.y<moving.height/2 + still.height/2 ){
  moving. shapeColor = "green";
still.shapeColor = "green";
}
else{moving. shapeColor = "red";
still.shapeColor = "red";
}



drawSprites();
}