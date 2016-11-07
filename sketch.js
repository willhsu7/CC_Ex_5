var thefont = new Array(4);
var gap = 50;
var font;

var sky;
var skyback;
var pointillize = 50;

var colorballoon;
var thex, they;
var v; //velocity
var t; //angle
var pwidth = 100;
var letter = 'A';

function preload() {
  sky = loadImage("sky1.jpg");
  skyback = loadImage("sky2.jpg");
  colorballoon = loadImage("color_balloon.png")
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf');
  }
}

function setup() {
  createCanvas(1200, 800);
  background(245);
  image(skyback, 0, 0);
  smooth();
  frameRate(2);
  initialize();
  //font = loadFont('data/font2.otf');
  //textFont(thefont[i], fsize);
}

function draw() {
  background(245);
  image(skyback,0,0);
  //the pixel background 

  var x = floor(random(sky.width));
  var y = floor(random(sky.height));

  sky.loadPixels(); // load pixels of the image
  var loc = (x + y * sky.width) * 4;
  var r = sky.pixels[loc];
  var g = sky.pixels[loc + 1];
  var b = sky.pixels[loc + 2];

  push();
  noStroke();
  fill(r, g, b);
  rectMode(CENTER);
  rect(x, y, pointillize, pointillize);
  pop();
  
  //flying color balloon 
  hitdetect();
  image(colorballoon, thex, they, 400, 300);
  thex = thex + v * cos(t);
  they = they + v * sin(t);

  if (thex > width) t = PI - t;
  if (thex < 0) t = PI - t;
  if (they > height) t = TWO_PI - t;
  if (they < 0) t = TWO_PI - t;


  noStroke();
  //random flying texts
  for (var i = 0; i < width; i = i + 100) {
    for (var j = 0; j < height; j = j + 100) {
      fill(6, 73, 164, random(100));
      textFont(thefont[2], abs(random(i - 150)));
      text(letter, i, random(j));
    }
  }
}

function initialize() {
  thex = random(0, width);
  they = random(0, height);
  v = random(5, 10);
  t = random(0, TWO_PI); // random angle
}

function hitdetect() {
  var r = pwidth / 2;

  if (thex > mouseX - r && thex < mouseX + r && they > mouseY - r && they < mouseY + r) {
    if (thex < mouseX) t = PI - t;
    if (thex > mouseX) t = PI - t;
    if (they < mouseY) t = TWO_PI - t;
    if (they < mouseY) t = TWO_PI - t;
    v = v * 1.5;
  }
}


function keyPressed() {
  if (key == 'B' || key == 'b') {
    letter = 'B'
  }
  if (key == 'C' || key == 'c') {
    letter = 'C'
  }
  if (key == 'D' || key == 'd') {
    letter = 'D'
  }
  if (key == 'E' || key == 'e') {
    letter = 'E'
  }
  if (key == 'F' || key == 'f') {
    letter = 'F'
  }
  if (key == 'G' || key == 'g') {
    letter = 'G'
  }
  if (key == 'H' || key == 'h') {
    letter = 'H'
  }
  if (key == 'I' || key == 'i') {
    letter = 'I'
  }
  if (key == 'J' || key == 'j') {
    letter = 'J'
  }
  if (key == 'K' || key == 'k') {
    letter = 'K'
  }
  if (key == 'L' || key == 'l') {
    letter = 'L'
  }
  if (key == 'M' || key == 'm') {
    letter = 'M'
  }
  if (key == 'N' || key == 'n') {
    letter = 'N'
  }
  if (key == 'O' || key == 'o') {
    letter = 'O'
  }
  if (key == 'P' || key == 'p') {
    letter = 'P'
  }
  if (key == 'Q' || key == 'q') {
    letter = 'Q'
  }
  if (key == 'R' || key == 'r') {
    letter = 'R'
  }
  if (key == 'S' || key == 's') {
    letter = 'S'
  }
  if (key == 'T' || key == 't') {
    letter = 'T'
  }
  if (key == 'U' || key == 'u') {
    letter = 'U'
  }
  if (key == 'V' || key == 'v') {
    letter = 'V'
  }
  if (key == 'W' || key == 'w') {
    letter = 'W'
  }
  if (key == 'X' || key == 'x') {
    letter = 'X'
  }
  if (key == 'Y' || key == 'y') {
    letter = 'Y'
  }
  if (key == 'Z' || key == 'z') {
    letter = 'Z'
  }
}