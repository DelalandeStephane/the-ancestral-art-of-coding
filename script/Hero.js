
const player = document.getElementById('hero');
const gameArea = document.getElementById('game-area');
var stateMoveLeft;
var stateMoveRight;

player.style.bottom = '81px';
const Hero = {
    positionX : player.offsetLeft,
    positionY : parseInt(player.style.bottom),
    height : player.clientHeight,
    width : player.clientWidth,
    speed : 20,
    stop: true,
    sensJump : true,
    jumpAction : false,
    heightJump : 450,
    positionXOnScreen : 0,
    playerSprite: document.getElementById('hero-sprite'),
    spriteMotion: 0,
    hurt:false,
    killPower : false,
    move : function(sens){   
        if(this.stop === false){
            if (sens === "right") {
                clearInterval(stateMoveRight);
                stateMoveRight = setInterval(() => {

                    bonus.bonusCollision();

                    if(parseInt(this.positionX) >= (window.innerWidth/2)-600 ){
                        this.positionXOnScreen+= -this.speed;
                        gameArea.style.left = this.positionXOnScreen + 'px';
                    }

                    // Boss contact
                    if(this.positionX >= 14000 && boss.destination === 14900 ){
                         clearInterval(stateMoveRight);
                         boss.enigma(1);
                    }
                    if(this.positionX >= 26600 && boss.destination === 27500 ){
                        clearInterval(stateMoveRight);
                        boss.enigma(2);
                   }
                   if(this.positionX >= 40700 && boss.destination === 41600 ){
                    clearInterval(stateMoveRight);
                    boss.endGame();
                    }

                    // fin

                    if(this.positionX >= 41000 ){
                        document.querySelector('body').style.opacity= 0;
                        setTimeout(function(){
                            document.location.href="cv.html";

                        },1000);

                    }

                    this.positionX+= this.speed;
                    player.style.left = this.positionX  + 'px';
                },1 * gamePlay.vTime);
            }
            else if ( sens === "left"){
                stateMoveLeft = setInterval(() => {

                    bonus.bonusCollision();

                    if(parseInt(hero.style.left) > (window.innerWidth/2)-300){
                        this.positionXOnScreen+= this.speed;
                        gameArea.style.left = this.positionXOnScreen + 'px'
                    }
                    else {
                        this.positionXOnScreen= 0;
                        gameArea.style.left = this.positionXOnScreen + 'px'
                    }
    
                    if(parseInt(player.style.left) > 0){
                        this.positionX+= -this.speed;
                        player.style.left = this.positionX  + 'px';
                    }
                },1 * gamePlay.vTime);
            }
            Hero.moveAnimation(sens);
        }
    },
    moveAnimation : function(sens){
        clearInterval(this.moveInterval);
        if(sens === 'right'){
            this.playerSprite.style.top = '0px';
            this.moveInterval = setInterval(() => {
                this.spriteMotion = this.spriteMotion -190;
                this.playerSprite.style.left= this.spriteMotion+"px";
      
              if( this.spriteMotion  <= -2280){
                this.spriteMotion = 0;
              this.playerSprite.style.left= this.spriteMotion+'px';
              }
      
            },70);
        }
       else if(sens === 'left'){
           this.playerSprite.style.top = '-227px';
            this.moveInterval = setInterval(() => {
                this.spriteMotion = this.spriteMotion -190;
                this.playerSprite.style.left= this.spriteMotion+"px";
      
              if( this.spriteMotion  <= -2280){
                this.spriteMotion = 0;
              this.playerSprite.style.left= this.spriteMotion+'px';
              }
      
            },70);
        }
    },
    jump : function(interval){
        bonus.bonusCollision();
        if(this.stop === false){
            if(this.positionY >=  this.heightJump) {
                this.sensJump = false;
            }
            else if(this.positionY <= gamePlay.floor){
                this.sensJump = true;
            }
            if(this.sensJump === true) {
                this.jumpAction = true;
                this.positionY+= this.speed;
                player.style.bottom = this.positionY+'px';
            }
            else if (this.sensJump === false) {
                this.positionY+= -this.speed;
                player.style.bottom = this.positionY+'px';
            }
            if(this.positionY <= gamePlay.floor) {
                this.jumpAction = false;
                clearInterval(interval);
                }
        } 
    },
    kill : function(monster){
        if(monster.classList.contains('monster') && this.killPower === true){
            gamePlay.score += 50;
            gamePlay.scoreBox.textContent = gamePlay.score;
            monster.classList.add('hurt');
            setTimeout(function(){
                monster.style.display="none";
            },700);
        }
    }   
}

