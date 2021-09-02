var bow, arrow;
var background;
var bowImage;
var green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage;
var backgroundImage;
var score;
var arrow_fly, arrow_explode;
var arrowGroup;
var ballonGroup;

function preload() {

  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  arrow_fly = loadAnimation("arrow0.png");
  arrow_explode = loadAnimation("explosion1.png", "explosion2.png", "explosion3.png");
}



function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  //create Arrow and Ballon Groups
  arrowGroup = createGroup();
  ballonGroup = createGroup();

  score = 0;
}

function draw() {
  background(0);
  // moving ground
  scene.velocityX = -3

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  //moving bow
  bow.y = World.mouseY

  //creating continous balloons
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % (Math.round(1000/(score+50))+1) == 0) {
    switch (select_balloon) {
      case 1: redBalloon();
        break;
      case 2: blueBalloon();
        break;
      case 3: greenBalloon();
        break;
      case 4: pinkBalloon();
        break;
      default: break;
    }
  }

  arrowGroup.overlap(ballonGroup, explode);

  drawSprites();

  textFont('Arial');
  textSize(26);
  fill(255, 255, 255);
  stroke('red');
  strokeWeight(4);
  text("Score: " + score, 50, 50);

}

function explode(arrow, ballon) {
  arrow.changeAnimation("arrow explode", arrow_explode);
  arrow.lifetime = 10;
  ballon.remove();
  score += 1;
}

// release arrow when mouse left button is pressed
function mouseClicked() {
  createArrow();
}

// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addAnimation("arrow fly", arrow_fly);
  arrow.addAnimation("arrow explode", arrow_explode);
  arrow.changeAnimation("arrow fly", arrow_fly);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  ballonGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  ballonGroup.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  ballonGroup.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  ballonGroup.add(pink);
}
