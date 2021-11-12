class Game {
  constructor(canvas, gameOver) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.player = new Player(canvas);
      this.enemy = [new Enemy (canvas)];
      this.bullets = [];
      this.gameOver = gameOver;
    }
    _clear() {
      this.ctx.clearRect(0, 0, 800, 600);
    }
    
    _controls() {
      document.addEventListener("keydown", (event) => {
        switch (event.code) {
          case "ArrowUp":
            if ( this.player.posY > 0 ) {
              this.player.up();
            }
            break;
          case "ArrowDown":
            if ( this.player.posY < 550 ) {
              this.player.down();
            }
            break;
          case "Space":
            event.preventDefault();
            this.bullets.push(new Bullet(this.canvas, (this.player.posY)+21))
            break;
          default:
            break;
        }
      });
    }

    _actualize() {
      this._clear();
      this.player.draw();
      this.enemy = this.enemy.filter(enemy => enemy.isDead === false);
      this.enemy.forEach((enemy) => {
        enemy.advance();
        this.bullets.forEach(bullet => {
          enemy.checkCollideWithBullet(bullet)
        });
        if(enemy.posX <= 70) {
          this.gameOver();
        }
        enemy.draw();
      })

      this.bullets.forEach((bullet) => {
        bullet.advance();
        bullet.draw();
      })

      window.requestAnimationFrame(this._actualize.bind(this));
    }
    
  start() {
    this._controls();
    window.requestAnimationFrame(this._actualize.bind(this));
  }

}



