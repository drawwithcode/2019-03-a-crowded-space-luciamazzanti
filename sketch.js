var allMyBalls = [];
var amountOfBalls = 20;

function preload() {}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < amountOfBalls; i++) {
    //an instance of myBalls
    var tempx = random() * windowWidth;
    var tempy = random() * windowHeight;
    var diameter = 60;

    var tempBall = new Ball(tempx, tempy, diameter);

    allMyBalls.push(tempBall);
  }
}

function draw() {
  //basketball court
  background('#FF9505');
  push();
  noFill();
  stroke('#1F1300');
  strokeWeight(5);
  ellipse(0, windowHeight / 2, 300, 300);
  ellipse(windowWidth, windowHeight / 2, 300, 300);
  push();
  translate(windowWidth / 2, windowHeight / 2);
  ellipse(0, 0, 100, 100);
  pop();
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  pop();

  for (var i = 0; i < allMyBalls.length; i++) {

    var tempBall = allMyBalls[i];
    tempBall.move();
    tempBall.display();

  }
}

function Ball(_x, _y, _diameter) {
  //inner Properties
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.speed = 2;
  this.color = "#CC5803";

  var xIncrease = 1;
  var yIncrease = 1;


  this.move = function() {

    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;

    //vertical bouncing
    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }

    //horizontal bouncing
    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }

  this.display = function() {
    fill(this.color);

    push();
    //basket ball
    translate(this.x, this.y);
    ellipse(0, 0, this.size);

    //black lines of the basket balls
    noFill();
    arc(-this.size / 2, 0, 40, 40, -62, 68);
    arc(this.size / 2, 0, 40, 40, 116, 246);
    line(0, -this.size / 2, 0, this.size / 2);
    line(-this.size / 2, 0, this.size / 2, 0);
    pop();
  }
}
