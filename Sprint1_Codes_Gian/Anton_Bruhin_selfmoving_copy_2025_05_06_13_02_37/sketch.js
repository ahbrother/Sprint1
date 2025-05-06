let posX2 = 0;
let circleRadius = 50;

let bufferGraphics;

let imagePosX = 100;
let imagePosY = 100;
let imageXspeed = 3;
let imageYSpeed = 2;

let buffer;
let x = 5;
let y = 5;
let w;
let h;
let noiseLevel = 40;
let noiseScale = 0.5;

let norden = 0;
let nordosten = 1;
let osten = 2;
let suedosten = 3;
let sueden = 4;
let suedwesten = 5;
let westen = 6;
let nordwesten = 7;

let direction;

let step = 4;
let diameter = 1;

let posX;
let posY;

let counter = 0;
//let drawMode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX2 = width / 2 - circleRadius;
  bufferGraphics = createGraphics(2 * circleRadius, 2 * circleRadius);

  strokeWeight(5);
  background(220);
  posX = width / 2;
  posY = height / 2;
  frameRate(30);

  //Background
  for (let i = 0; i < height; i++) {
    line(0, y, width, y);
    y = y + 10;
  }
}

function draw() {
  for (let i = 0; i < 1; i++) {
    let w = noise(noiseScale, noiseLevel) * 50;
    let h = noise(noiseLevel, noiseScale) * 50;

    counter++;

    if (counter % 2 == 0) {
      stroke(0);
      //fill(255,20);
    } else {
      stroke(255);
      //fill(0, 50);
    }

    direction = int(random(0, 8));

    if (direction == norden) {
      posY = posY - step;
    } else if (direction == nordosten) {
      posX = posX + step;
      posY = posY - step;
    } else if (direction == osten) {
      posX += step;
    } else if (direction == suedosten) {
      posX += step;
      posY += step;
    } else if (direction == sueden) {
      posY += step;
    } else if (direction == suedwesten) {
      posX -= step;
      posY += step;
    } else if (direction == westen) {
      posX -= step;
    } else if (direction == nordwesten) {
      //console.log('nordwesten')
      posX -= step;
      posY -= step;
    }

    //stroke(255);
    blendMode(DIFFERENCE);
    //fill(0,30);

    strokeWeight(5);
    fill(0)
    ellipse(posX, posY, w * 4, h * 4);

    noiseLevel = noiseLevel + 0.03;
     //Background
  /*for (let i = 0; i < height; i++) {
    line(0, y, width, y);
    y = y + 10;
  }*/
  }
  
 

  if (posX > width) {
    posX = posX * -1;
  }
  if (posX < width) {
    posX = posX * 1;
  }
  if (posY > height) {
    posY = posY * -1;
  }
  if (posY < height) {
    posY = posY * 1;
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("Sprint1_Wurm", "jpg");
  }
}
