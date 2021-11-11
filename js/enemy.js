class Enemy {
    constructor(posX = 0, posY = 0, speed = 50) {
      this.posX = posX;
      this.posY = posY;
      this.speed = speed;
      this.startMove();
    }
  
    advance() {
      this.posX = this.posX - this.speed;
    }
    startMove() {
        setInterval(() => {
            this.advance()
           }, 900)
    }
  }