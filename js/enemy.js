class Enemy {
  constructor(canvas) {
    this.size = 50;
    this.ctx = canvas.getContext('2d');
    this.posX = canvas.width;
    this.posY = Math.random() * 550;
    this.speed = 5;
    this.isDead = false;
  }

  draw() {
    this.ctx.fillStyle = "brown";
    this.ctx.fillRect(this.posX, this.posY, 50, 50);
  }

  advance() {
    this.posX = this.posX - this.speed;
  }

  checkCollideWithBullet(bullet) {
    if(bullet.posY >= this.posY && bullet.posY <= this.posY + 50  && this.posX <= bullet.posX ){
      this.isDead = true;
    }
  }
}