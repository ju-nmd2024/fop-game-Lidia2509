// variables for graphics

let x = 200;
let y = 50;
let bushX = 280;
let bushY = 340;
let platformX = 0; 
let platformY = 420;

//GRAPHICS 

function setup() {
  createCanvas(600, 600);
}

function cloud(x, y) {
  noStroke();
  fill(255, 255, 255);
  rect(x - 50, y + 180, 100, 30);
  ellipse(x, y + 180, 55);
  ellipse(x - 30, y + 180, 35);
  ellipse(x + 30, y + 180, 35);
  ellipse(x - 50, y + 195, 30);
  ellipse(x + 50, y + 195, 30);
}

function sky() {
  cloud(20, 150);
  cloud(150, 30);
  cloud(400, 80);
  cloud(250, 200);
  cloud(400, -100);
  cloud(20, -120);
  cloud(500, 220);
  cloud(520, 0);
  cloud(100, 280);
  cloud(350, 350);
}

function fire(x, y) {
  push();

  translate(x, y);
  scale(1.5);
  translate(-x, -y);

  noStroke();

  fill(255, 0, 0, 200);
  ellipse(x - 20, y, 30, 50);
  ellipse(x + 20, y, 30, 50);
  ellipse(x, y - 20, 50, 70);

  fill(255, 165, 0, 200);
  ellipse(x - 15, y + 5, 25, 40);
  ellipse(x + 15, y + 5, 25, 40);
  ellipse(x, y - 15, 40, 60);

  fill(255, 255, 0, 200);
  ellipse(x, y - 15, 20, 30);
  ellipse(x - 8, y + 5, 20, 30);
  ellipse(x + 8, y + 5, 20, 30);

  pop();
}

function character(x, y) {
  push();
  translate(x, y);
  scale(0.6);
  rotate(0);
  translate(-x, -y);

  //base
  stroke(0, 0, 0);
  strokeWeight(5);
  line(x + 50, y + 100, x + 50, y + 120);
  line(x + 170, y + 100, x + 170, y + 120);

  line(x + 70, y + 100, x + 70, y + 110);
  line(x + 190, y + 100, x + 190, y + 110);

  noFill();
  arc(x + 110, y + 120, 150, 10, 0, PI);
  arc(x + 130, y + 110, 150, 10, 0, PI);

  //propellers
  noStroke();
  fill(205, 35, 0);
  rect(x + 70, y - 10, 70, 20, 3);
  rect(x + 95, y - 18, 20, 10, 3);
  rect(x + 103, y - 30, 5, 15);

  stroke(0, 0, 0);
  strokeWeight(5);
  line(x - 100, y - 35, x + 100, y - 30);
  line(x + 100, y - 30, x + 300, y - 40);

  line(x - 70, y - 5, x + 100, y - 30);
  line(x + 105, y - 30, x + 280, y - 0);

  noStroke();
  ellipse(x + 105.5, y - 30, 15);

  //tail
  stroke(0, 0, 0);
  strokeWeight(5);
  line(x - 165, y - 36, x - 140, y - 40);
  line(x - 190, y - 20, x - 165, y - 36);

  noStroke();
  fill(255, 90, 0);
  triangle(x - 170, y - 5, x + 20, y + 50, x + 40, y + 2);
  triangle(x - 135, y, x - 170, y - 5, x - 170, y - 35);

  fill(140, 25, 5);
  ellipse(x - 168, y - 35, 25);

  fill(205, 35, 0);
  ellipse(x - 168, y - 35, 13);

  stroke(255, 90, 0);
  strokeWeight(8);
  line(x - 150, y - 10, x - 120, y + 5);

  //body
  noStroke();
  fill(255, 140, 5);
  rect(x, y, 200, 100, 60);
  rect(x + 140, y + 40, 60, 60, 15);

  stroke(255, 255, 255);
  strokeWeight(3);
  line(x + 16, y + 84, x + 199, y + 84);
  line(x + 23, y + 90, x + 198, y + 90);

  //window
  noStroke();
  fill(5, 200, 190);

  rect(x + 150, y + 40, 50, 35);
  rect(x + 105, y, 95, 75, 70);

  fill(255, 140, 5);
  rect(x + 100, y, 45, 80);

  fill(5, 200, 190);
  rect(x + 100, y + 10, 30, 40, 10);
  rect(x + 60, y + 10, 30, 40, 10);

  pop();
}

function platform(platformX, platformY) {
  noStroke();
  fill(45, 170, 15);
  rect(platformX, platformY + 100, width, 100);

  noStroke();
  fill(10, 45, 150);
  rect(platformX + 200, platformY + 90, 200, 25);
  ellipse(platformX + 300, platformY + 115, 200, 25);

  fill(10, 55, 190);
  ellipse(platformX + 300, platformY + 90, 200, 25);
}

function helicopterOnFire() {
  background(110, 250, 250);

  sky();

  platform(platformX, platformY);

  character(x + 30, platformY + 15);

  fire(x + 90, platformY + 30);
}

function resultScreenFail() {
  background(110, 250, 250);

  sky();

  fill(255, 0, 0);
  textStyle(BOLD);
  textSize(50);
  text("YOU", 235, 220, 50);
  text("LOSE!", 225, 280, 50);

  fill(235, 225, 20);
  rect(170, 350, 240, 80, 30);
  fill(0);
  textStyle(BOLD);
  textSize(20);
  text("PLAY AGAIN", 230, 385, 200);
}

function resultScreenSuccess() {
  background(110, 250, 250);

  sky();

  fill(5, 105, 0);
  textStyle(BOLD);
  textSize(50);
  text("YOU WIN!", 235, 220, 50);

  fill(235, 225, 20);
  rect(170, 350, 240, 80, 30);
  fill(0);
  textStyle(BOLD);
  textSize(20);
  text("PLAY AGAIN", 230, 385, 200);
}

function startScreen(x, y) {
  background(110, 250, 250);

  sky();

  push();
  translate(bushX, bushY);
  scale(0.8);
  translate(-bushX, -bushY);
  fill(45, 170, 15);
  ellipse(bushX - 150, bushY + 250, 80);
  ellipse(bushX - 200, bushY + 200, 70);
  ellipse(bushX - 250, bushY + 200, 80);
  ellipse(bushX - 310, bushY + 280, 220);
  ellipse(bushX - 210, bushY + 285, 130);
  ellipse(bushX - 310, bushY + 180, 90, 80);
  ellipse(bushX - 130, bushY + 310, 110, 100);
  ellipse(bushX - 370, bushY + 200, 110, 100);

  ellipse(bushX + 150, bushY + 250, 80);
  ellipse(bushX + 200, bushY + 200, 70);
  ellipse(bushX + 250, bushY + 200, 80);
  ellipse(bushX + 310, bushY + 280, 220);
  ellipse(bushX + 210, bushY + 285, 130);
  ellipse(bushX + 310, bushY + 180, 90, 80);
  ellipse(bushX + 130, bushY + 310, 110, 100);
  ellipse(bushX + 370, bushY + 200, 110, 100);

  pop();

  fill(0, 55, 150);
  rect(170, 240, 240, 130, 35);
  fill(255);
  textStyle(BOLD);
  textSize(50);
  text("START", 210, 325);

  fill(215, 120, 10);
  textStyle(BOLD);
  textSize(15);
  text("**Press the Space key to control the helicopter", 120, 415);
  text("and land safely on the platform**", 180, 440);

  textSize(80);
  fill(230, 170, 0);
  text("LAND", 130, 140);
  fill(20, 120, 0);
  text("IT!", 375, 140);
}

// variables for logics

let velocityY = 0.2;
let hasLanded = false;
let maxSpeed = 10;
let state = "start";
let gameTimer = 0;
let maxDown = 440;

//LOGICS

//main game
function helicopterGame() {
  background(110, 250, 250);

  sky();

  platform(platformX, platformY);

  character(x + 30, y);

  //helicopter mechanics
  if (hasLanded === false) {
    velocityY = velocityY + 0.2;

    if (keyIsDown(32)) {
      velocityY = velocityY - 0.7;
    }

    y = y + velocityY;

    //check landing & win/lose states
    if (y > maxDown) {
      hasLanded = true;
      if (velocityY <= maxSpeed) {
        state = "success";
      } else {
        state = "fire";
      }
    }
  }
}

//start and play again button
function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 170 &&
    mouseX <= 170 + 240 &&
    mouseY >= 230 &&
    mouseY <= 230 + 150
  ) {
    state = "game";
  } else if (
    (state === "fail" || state === "success") &&
    mouseX >= 170 &&
    mouseX <= 170 + 240 &&
    mouseY >= 350 &&
    mouseY <= 350 + 80
  ) {
    state = "game";
    resetGame();
  }
}

//screens
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    helicopterGame();
  } else if (state === "fire") {
    helicopterOnFire();
    if (gameTimer < 60) {
      gameTimer = gameTimer + 1;
    } else {
      state = "fail";
    }
  } else if (state === "fail") {
    resultScreenFail();
  } else if (state === "success") {
    resultScreenSuccess();
  }
}

//reset game variables
function resetGame() {
  x = 200;
  y = 50;
  velocityY = 0.2;
  hasLanded = false;
  gameTimer = 0;
}
 