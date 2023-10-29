let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);
  
  
  if (keyIsDown(RIGHT_ARROW)) {
    let wind = createVector(0.1, 0);
    ball.addForce(wind);
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    let wind = createVector(-0.1, 0);
    ball.addForce(wind);
  }
  

  ball.update();
  ball.show();
}

