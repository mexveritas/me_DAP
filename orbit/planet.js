class Planet {
    constructor(radius, speed, distance, col) {
      this.radius = radius;
      this.angle = 0;
      this.speed = speed;
      this.distance = distance;
      this.col = col;
    }
  
    orbit() {
      this.angle += this.speed * 0.02; // 속도에 따른 각도 변화
    }
  
    show() {
      let x = this.distance.x + cos(this.angle) * this.distance.y; 
      let y = this.distance.y + sin(this.angle) * this.distance.y; 
  
      fill(this.col);
      ellipse(x, y, this.radius, this.radius);
    }
  }