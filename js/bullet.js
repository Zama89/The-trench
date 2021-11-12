class Bullet {
  constructor(canvas, posY) {
    this.canvas = canvas;
    this.size = 8;
    this.ctx = canvas.getContext('2d');
    this.posX = 50;
    this.posY = posY;
    this.speed = 10;
    this.isLost = false;
  }

  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.size*2, this.size);
  }

  advance() {
    this.posX = this.posX + this.speed;
  }

  checkLostBullet() {
    if(this.posX >= this.canvas.width){
      this.isLost = true;
    }
  }
}