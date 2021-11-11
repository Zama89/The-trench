class Player {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  shoot() {
        this.posX++;
    }

  //mirar keycode para movimientos//
  up() {
    this.posY -= 50;
  }

  down() {
    this.posY += 50;
  }
}