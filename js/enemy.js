class Enemy {
  constructor(canvas) {
    this.size = 50;
    this.ctx = canvas.getContext('2d');
    this.posX = canvas.width;
    this.posY = Math.random() * 550;
    this.speed = 3;
    this.isDead = false;
  }

  draw() {
    let img = new Image();
    img.src = '/images-game/axis.png';
    this.ctx.drawImage(img, this.posX, this.posY);
  }

  advance() {
    this.posX = this.posX - this.speed;
  }

  checkCollideWithBullet(bullet) {
    if(bullet.posY >= this.posY && bullet.posY <= this.posY + 80  && this.posX <= bullet.posX ){
      this.isDead = true;
    }
  }
}