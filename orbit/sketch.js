let planets = [];

function setup() {
  createCanvas(600, 600);
  let sun = new Planet(50, 0, createVector(width / 2, height / 2), color(255, 255, 0));
  let mercury = new Planet(5, 1.607, createVector(100, 100), color(192, 192, 192));
  let venus = new Planet(10, 1.174, createVector(150, 150), color(255, 165, 0));
  let earth = new Planet(10, 1, createVector(200, 200), color(65, 105, 225));
  let mars = new Planet(7, 0.802, createVector(250, 250), color(178, 34, 34));
  
  planets.push(sun, mercury, venus, earth, mars);
}

function draw() {
  background(0);
  
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    planet.orbit();
    planet.show();
  }
}

class Planet {
  constructor(radius, speed, distance, col) {
    this.radius = radius;
    this.angle = 0;
    this.speed = speed;
    this.distance = distance;
    this.col = col;
  }

  orbit() {
    this.angle += this.speed * 0.01; // 속도에 따른 각도 변화
  }

  show() {
    let x = this.distance.x + cos(this.angle) * this.distance.y; 
    let y = this.distance.y + sin(this.angle) * this.distance.y; 

    fill(this.col);
    ellipse(x, y, this.radius, this.radius);
  }
}





