class Game {
  constructor(canvas, gameOver) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(canvas);
    this.enemy = [];
    this.bullets = [];
    this.movements = [];
    this.gameOver = gameOver;
  }
  _clear() {
    this.ctx.clearRect(0, 0, 800, 600);
  }

  removeKey(event) {
    this.movements.splice(this.movements.indexOf(event.keyCode), 1);
  }

  addKey(event) {
    event.preventDefault();
    if (
      !this.movements.includes(event.keyCode) &&
      [38, 40, 32].includes(event.keyCode)
    ) {
      this.movements.push(event.keyCode);
    }
  }

  _actualize() {
    const controls = {
      38: () => {
        if (this.player.posY > 0) {
          this.player.up();
        }
      },
      40: () => {
        if (this.player.posY < 550) {
          this.player.down();
        }
      },
      32: () => {
        this.bullets.push(new Bullet(this.canvas, this.player.posY + 21));
        let audio = document.getElementById("shootSound");
        audio.play();
      },
    };

    this._clear();

    this.player.draw();
    this.enemy = this.enemy.flatMap((enemy) => {
      if (!enemy.isDead) {
        enemy.advance();
        this.bullets.forEach((bullet) => {
          enemy.checkCollideWithBullet(bullet);
          bullet.checkLostBullet(bullet);
          let audio = document.getElementById("deathSound");
          audio.play();
        });

        if (enemy.posX <= 70) {
          this.gameOver();
        
        }
        enemy.draw();
        return enemy;
      } else {
        return [];
      }
    });
    this.bullets = this.bullets.flatMap((bullet) => {
      if (!bullet.isLost) {
        bullet.advance();
        bullet.draw();
        return bullet;
      }
      return [];
    });
    
    if (Math.random() <= 0.006) {
      this.enemy.push(new Enemy(this.canvas));
    }
    
    this.movements.forEach((code) => {
      controls[code]();
    });

    window.requestAnimationFrame(this._actualize.bind(this));
  }

  start() {
    document.addEventListener("keyup", this.removeKey.bind(this));
    document.addEventListener("keydown", this.addKey.bind(this));
    window.requestAnimationFrame(this._actualize.bind(this));
  }
}
