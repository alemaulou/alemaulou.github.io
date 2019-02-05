var n = 0;
var c = 2;
var cv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cv.position(x,y);
}

function setup() {
  cv = createCanvas(800, 800);
  centerCanvas();
  angleMode(DEGREES);
  background("black");
}

function windowResized() {
  centerCanvas();
}

function draw() {

  // a = angle
  var a = n * 137.5;

  // r = radius
  var r = c * sqrt(n);


  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

  var x2 = r * cos(a) + width/3;
  var y2 = r * sin(a) + height/3;

  var x3 = r * cos(a) + width/4;
  var y3 = r * sin(a) + height/4;

  fill((a-r) % 255, 255, 255, 255);
  noStroke();
  ellipse(x,y, 3, 3);
  ellipse(x2, y2, 3, 3);
  ellipse(x3, y3, 3, 3);
  n++;
}
