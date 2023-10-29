let movers = [];

// Liquid
let liquid;

function setup() {
  createCanvas(640, 240);
  reset();
  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.25);
}

function draw() {
  background(255);

  // Draw liquid
  liquid.show();

  for (let i = 0; i < movers.length; i++) {
    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    let gravity = createVector(0, 0.1 * movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < 8; i++) {
    movers[i] = new Mover(55 + i * 75, 0, random(0.3, 4.5));
  }
}
