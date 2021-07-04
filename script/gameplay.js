const gamePlay = {
    gameArea : document.getElementById('game-area'),
    positionScreen : 0,
    floor: 90,
    score:0,
    scoreBox : document.querySelector('#score span'),
    scoreLimit : function(){
        if(this.score < 0){
            this.score = 0;
        }
    }
};

if(window.navigator.userAgent ===   "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0") {
    // Si le navigateur n'est pas firefox alors je multiplie le nb de millisecondes par 10
    // Contourne le problème de vitesse entre navagiteur
    gamePlay.vTime = 1;
  }

  else {
    // Si le navigateur n'est pas firefox alors je multiplie le nb de millisecondes par 10
    // Contourne le problème de vitesse entre navagiteur
    gamePlay.vTime = 10;
  }