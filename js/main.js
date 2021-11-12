window.addEventListener("load", () => { 
  function splashScreen() {
    function gameOver() {
      const gameover = document.querySelector ("#gameover");
      const gameScreen = document.querySelector("#game-screen");
      const gameoverButton = document.querySelector ("#game-over-button");
      gameScreen.classList.add("hide");
      gameoverButton.classList.add("hide");
      gameover.classList.remove("hide");
      }
        
      const playButton = document.querySelector("#play");
      playButton.addEventListener("click", () => {
              const splashScreen = document.querySelector("#splash-screen");
              const gameScreen = document.querySelector("#game-screen");

              splashScreen.classList.add("hide");
              gameScreen.classList.remove("hide");
              
              });

      const fightButton = document.querySelector("#fight");
      fightButton.addEventListener("click", ()  => {
        const canvas = document.querySelector('#my_canvas');
        const trenchGame = new Game(canvas, ()=> {gameOver()});
        trenchGame.start()
        });
      
      const gameoverButton = document.querySelector ("#game-over-button");
      gameoverButton.addEventListener("click", () => {
        gameOver();
      });

      };

  splashScreen ();
  console.log("load")
  
});





