window.addEventListener('DOMContentLoaded', function(){
console.log(window.innerWidth);
    if(window.innerWidth >= 1050){
        'use strict';
        var allowed;
    
        // start action
        bonus.getBonus();
        enemy.getMonsters();
        enemy.colisionMonster();
        boss.animation();
        boss.firstInteraction();
        
        //Event action
        window.addEventListener('keydown', (e) => {
            if (e.repeat != undefined) {
                allowed = !e.repeat;
            }
            if (!allowed) return;
            allowed = false;
    
            switch(e.code){
                case "ArrowRight" :
                        Hero.move('right');          
                break;
                case "ArrowLeft" :
                        Hero.move('left');
                break;
    
                case "ArrowUp" :
                    var jumpInterval = setInterval(() => {
                        Hero.jump(jumpInterval);
                    },1.2 * gamePlay.vTime);
                break;
            };
    
        });
        window.addEventListener('keyup',function(e){
            //Remmet le perssonage  en mode "statique"
            Hero.spriteMotion = 0;
            Hero.playerSprite.style.left= Hero.spriteMotion+'px';
    
            if(e.code === "ArrowRight"){
                clearInterval(stateMoveRight);
                clearInterval(Hero.moveInterval);
              
            }
            if(e.code === "ArrowLeft"){
                clearInterval(stateMoveLeft);
                clearInterval(Hero.moveInterval);
            }
        })
    
        window.addEventListener('click', function(e){
            if(e.target.parentNode){
                Hero.kill(e.target.parentNode);
            }
        })
    }
});
