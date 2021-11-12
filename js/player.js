class Player {
  constructor(canvas) {
    this.posX = 20;
    this.size = 50;
    this.posY = canvas.height / 2;
    this.ctx = canvas.getContext('2d');
  }

  draw() {
    let img = new Image();
    img.src = '/images-game/ally.png';
    this.ctx.drawImage(img, this.posX, this.posY);
  }

  up() {
    this.posY -= 5;
  }

  down() {
    this.posY += 5;
  }
}