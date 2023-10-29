let planets = [];

function setup() {
  createCanvas(600, 600);
  let sun = new Planet(100, 0, createVector(300, 300), color(255, 255, 0));
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







