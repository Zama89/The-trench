window.addEventListener("load", () => { 
  function splashScreen() {
        const playButton = document.querySelector("#play");
        playButton.addEventListener("click", () => {
              const splashScreen = document.querySelector("#splash-screen");
              const gameScreen = document.querySelector("#game-screen");

              splashScreen.classList.add("hide");
              gameScreen.classList.remove("hide");
              
        });

      const fightButton = document.querySelector("#fight");
      fightButton.addEventListener("click", ()  => {
        console.log ("start")
        const canvas = document.querySelector('#my_canvas');
        const ctx = canvas.getContext('2d');
        const trenchGame = new Game (
          {
            ctx: ctx,
            cw: canvas.width / 10,
            ch: canvas.height / 10,
            player: new Player ( 20, canvas.height / 2, 50, 50 ),
          },
        );
        trenchGame.start()
      });

      const gameoverButton = document.querySelector ("#game-over-button");
      gameoverButton.addEventListener("click", () => {
          const gameover = document.querySelector ("#gameover")
          gameoverButton.classList.add("hide");
          gameover.classList.remove("hide");

      });

      
    };

  splashScreen ();
  console.log("load")
  
});


