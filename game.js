function setup() {
  createCanvas(580, 600);
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

let platformX = 0;
let platformY = 400;

function platform(platformX, platformY) {
  noStroke();
  fill(95, 110, 110);
  rect(platformX, platformY + 100, width, 100);

  noStroke();
  fill(10, 45, 150);
  rect(platformX + 180, platformY + 90, 200, 25);
  ellipse(platformX + 280, platformY + 115, 200, 25);

  fill(10, 55, 190);
  ellipse(platformX + 280, platformY + 90, 200, 25);
}

function character(x, y) {
  push();
  translate(x, y);
  scale(0.7);
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

let x = 200;
let y = 50;
let direction = "down";
let helicopterY = 150;
let speed = 5;

function draw() {
  //visuals
  background(110, 250, 250);

  cloud(20, 150);
  cloud(150, 30);
  cloud(400, 80);
  cloud(250, 200);
  cloud(400, -100);
  cloud(20, -120);
  cloud(500, 220);
  cloud(520, 0);

  platform(platformX, platformY);

  character(x, y);

   //mechanics
  if (direction === "down") {
    if (y < 410) {
      y = y + 8;
    } else {
      direction = "up";
    }
  } else if (direction === "up") {
    if (y > 50) {
      y = y - 3;
    } else {
      direction = "down";
    }
  } 

      /*remember to change y to helicopterY 
      when using this in character values
     */
  /* //  mechanics opt2
      helicopterY = helicopterY + speed * -1;
      if (helicopterY > 300 || helicopterY < 50) { 
      speed = speed * -1;
      console.log("boom");
      }
    } */

}
