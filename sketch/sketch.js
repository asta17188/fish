function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 191, 0);
  ellipse(200, 200, 100, 50)
  beginShape();
    vertex(120,180);
    vertex(120, 223);
    vertex(180, 205);
  endShape(CLOSE);
  fill(255, 255, 255);
  ellipse(230, 190, 15, 15);
  fill(0, 0, 0);
  ellipse(230, 190, 5, 5);

}
