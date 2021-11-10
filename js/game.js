class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.player = options.player;
    this.posX = options.posX;
    this.posY = options.posY;
    this.enemy = [];
    this.cb = callback;
  }
//
  _clear() {
    this.ctx.clearRect(0, 0, 800, 600);
  }

  //_printMap()

  _printPlayer() {
    this.ctx.fillStyle = "blue";
    console.log("printPlayer");
    this.ctx.fillRect(this.player.posX, this.player.posY, 50, 50); //centro de la trinchera, tamaño 50x50
  }

  _printEnemies() {
    this.enemy.forEach((enemy) => {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.enemy.posX * 10, this.enemy.posY * 10, 8, 8);
    })
  }

  _printBullet() {}

  _creatingEnemies () {
        this.enemy.push(new Enemy (780,250))  
      } 

  _moves() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowUp":
          this.player.up();
          console.log("Up");
          break;
        case "ArrowDown":
          console.log("Down");
          this.player.down();
          break;
      }
    });
  }

  _actualize() {
    this._clear();
    //this._printMap()
    this._printPlayer();
    this._printEnemies()
    this._creatingEnemies()

    window.requestAnimationFrame(this._actualize.bind(this));
  }

  start() {
    this._moves();
    window.requestAnimationFrame(this._actualize.bind(this));
  }

  //function initCanvas(){
  //let ctx = document.getElementById("my_canvas").getContext("2d");
  //ctx.fillStyle = "#FF0000";
  //ctx.fillRect(20, 20, 150, 100);

  //let backgroundImage = new Image();
  //let player1   = new Image();
  //let enemy  = new Image();

  //backgroundImage.src = "/images-game/fondo canvas project 1 (2).png"
  //player1.src = "/images-game/jugador.jpg"
  //enemy.src = "/images-game/soldado-enemigo.jpg"

  //Anchura y longitud del canvas (ya está definido en html)
  //let canvasWidth = ctx.canvas.width; // 800px
  //let canvasHeight = ctx.canvas.height; // 600px

  //Inicio el juego
  //function canvasTrench(){

  //}

  //Pinto el jugador (parte del initCanvas)
  //function pintarJugador(){
  //ctx.fillStyle = "green";
  //ctx.rect(5, 5, 30, 30); //esquina superior izquierda, tamaño 30x30

  //}

  //Pintar enemigo (parte del initCanvas)
  //function pintarEnemigo(){

  //}

  //Muevo el jugador (solo eje Y, mas disparo)

  /*moverJugador(event){
      if (event.key === "ArrowUp") {
          event.preventDefault()
          moveUp()
        } else if (event.key === "ArrowDown") {
          event.preventDefault()
          moveDown()
        } else if (event.key === "Space") {
          event.preventDefault()
          shootBullet()
        }  
    }
*/

  //buscar referencias codekeys (numerico por tecla) para los movimientos y disparo
  moveUp() {}

  //Muevo el enemigo (solo eje X)
  moverEnemigo() {}

  //Actualizo el contador de tiempo // optativa
  actualizarContador() {}

  //Actualizo puntuacion // optativa
  puntuacion() {}

  //Detecto llegada enemiga a trinchera (colision)
  colisionEnemiga() {}

  //Finalizo el juego
  finalizar(mensaje) {}

  //Reinicio el juego
  reiniciar() {}
}

