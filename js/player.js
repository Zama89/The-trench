class Player {
  constructor(canvas) {
    this.posX = 20;
    this.size = 50;
    this.posY = canvas.height / 2;
    this.ctx = canvas.getContext('2d');
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.posX, this.posY, this.size, this.size);
  }

  up() {
    this.posY -= 25;
  }

  down() {
    this.posY += 25;
  }
}