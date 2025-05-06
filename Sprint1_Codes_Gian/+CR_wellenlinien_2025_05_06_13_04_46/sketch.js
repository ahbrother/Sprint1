function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  let noiseLevel = 300;
  let noiseScale = 0.01;
  let x = frameCount; //x Position
  let nx = noiseScale * x;
 
  let r = random(0, 255);
  let g = random(0, 20);
  let b = random(0, 50);

  for (let i = 0; i < 5; i++) {
     let y = noiseLevel * noise(nx,i/10) + 150; //sets the position of the line on the canvas
  let yOffset = map(noise(x * noiseScale), 0, 1, 0, 25);
    let yLine = y + yOffset + i * 30; //needed to draw 5 lines at a different height
    stroke(r, g, b);
    //strokeWeight(4);
    line(x, yLine, x, yLine + 10);
    yLine = yOffset + 600; //mirrors it to the top, whyever
  }
}
function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("Sprint1_Waves", "jpg"); //AHFORFUCKSAKEJETZTCHUMINÜMMDRUS
  }
}
