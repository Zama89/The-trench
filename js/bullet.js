class Bullet {
    constructor(canvas, posY) {
      this.size = 8;
      this.ctx = canvas.getContext('2d');
      this.posX = 50;
      this.posY = posY;
      this.speed = 10;
    }
  
    draw() {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.posX, this.posY, this.size*2, this.size);
    }
  
    advance() {
      this.posX = this.posX + this.speed;
    }
  }