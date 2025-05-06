let y = 5;
let w;
let h;
let noiseLevel = 50;
let noiseScale = 0.5;

function setup() {
  createCanvas(400, 400);
  background(220);

  strokeWeight(5);
  for (let i = 0; i < height; i++) {
    line(0, y, width, y);
    y = y + 10;
  }
}

function draw() {
  let w = noise(noiseScale, noiseLevel) * 50;
  let h = noise(noiseLevel, noiseScale) * 100;
  stroke(255);
  //blendMode(DIFFERENCE);
  fill(0);

  strokeWeight(0.5);
  ellipse(mouseX, mouseY, w, h);
  noiseLevel = noiseLevel + 0.03;
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("Sprint1", "jpg");
  }
}
