var ball = createSprite(200,200,20,20);
ball.shapeColor=('yellow');
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);

if(keyIsDown(RIGHT_ARROW)){
  background('orange');
}

if(keyIsDown(LEFT_ARROW)){
  background('red');
}

if(keyIsDown(UP_ARROW)){
  background('green');
}

if(keyIsDown(DOWN_ARROW)){
  background('purple');
}

drawSprites();
}




