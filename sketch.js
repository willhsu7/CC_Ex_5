var thefont = new Array(4);
var fphases = new Array(4);
var testphase = 0;
var speed = 0.01;

var fsize = 42;
var insideColor = 0;
var fontCount = 0;
var img;

function preload() {
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf');
  }
  img = loadImage("./images/galaxy.jpg");
}

function setup() {
  createCanvas(1000, 600);

  fill(255, 72, 5);
  noStroke();
  textFont(thefont[0], fsize);
  image(img, -70, -80);

  /*for (var i = 0; i < fphases.length; i++) {
    fphases[i] = random(0.0, TWO_PI);
  }*/

}

function draw() {

  //background(2, 46, 102);
  var thex = 80;
  var they = height / 2;

  speed = mouseX / width * 0.03;
  testphase = (testphase + speed) % TWO_PI;
  var h = map(sin(testphase), -1.0, 1.0, height, 0);
  //ellipse(width / 2, h, 20, 20);

  var s;

  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(thefont[0], s);
  text('Please Tell Me', thex, they);
  thex += textWidth('Please Tell Me ');
  //fphases[0] = (fphases[0] + speed) % TWO_PI;

  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(thefont[1], s);
  text('You Are', thex, they);
  thex += textWidth(' You Are ');
  //fphases[1] = (fphases[1] + speed) % TWO_PI;

  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(thefont[2], s);
  text('Seeing', thex, they);
  thex += textWidth(' Seeing');

  //fphases[2] = (fphases[2] + speed) % TWO_PI;

  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(thefont[3], s);
  text('This Too', thex, they);
  thex += textWidth(' This Too');
  //fphases[3] = (fphases[3] + speed) % TWO_PI;
  //image("galaxy.jpg"); 
}