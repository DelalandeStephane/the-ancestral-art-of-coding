const enemy = {
    monsters : document.getElementsByClassName('monster'),
    monsterSprite : document.getElementById('monster-test'),
    monsterList: [],
     MonsterFactory : function (element,speed,sprite){
        this.element = element;
        this.x = element.offsetLeft;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        this.sens = true;
        this.limitLeft = this.x - 800;
        this.limitRight = this.x + 800;
        this.speed = speed;
        this.monsterMotion = 0;
        this.spriteSens = false;
        this.sprite = sprite;
    },
    //Récupere un tableau d'objet représentant les monstres
     getMonsters : function() {
        for (const monster of this.monsters) { 
            if( monster.classList.contains('lv-1')){
                 var speed = Math.floor(Math.random() * (4 - 2 +1)) + 2;
            } else if(monster.classList.contains('lv-2')) {
                var speed = Math.floor(Math.random() * (6 - 5 +1)) + 5;
            }
            const monsterData = new this.MonsterFactory(monster,speed,monster.querySelector('img'));
            this.monsterList.push(monsterData);
        }
    },
    colisionMonster : function(){
        for (const monster of this.monsterList) {
             setInterval(function(){
                    if(monster.x >= monster.limitRight){
                        monster.sens = false;
                    }
                    if (monster.x <= monster.limitLeft){
                        monster.sens = true;
                    }
                    if(monster.sens === true){
                        monster.sprite.style.top = '0px';
                        monster.x+=monster.speed;
                        monster.element.style.left = monster.x + 'px';
                    }
                    else if(monster.sens === false){
                        monster.sprite.style.top = '-210px';
                        monster.x-=monster.speed;
                        monster.element.style.left = monster.x + 'px';
                    }
                },1* gamePlay.vTime);             
                setInterval(() =>{
                    // vérifie si il y a contact
                    this.hurt(monster);
                },100);
                enemy.animation(monster); // animation pour chaque monstre
        }
    },
    hurt : function(monster){
        if(monster.element.style.display != 'none'){
            if(Hero.positionX >= monster.x  && Hero.positionX < monster.x + 160 && Hero.positionY <= monster.height){
                if(Hero.hurt === false) {
                    player.classList.add('hurt');
                    setTimeout(function(){
                       player.classList.remove('hurt');
                    },700);
                    gamePlay.score -=50,
                    gamePlay.scoreLimit();
                    gamePlay.scoreBox.textContent = gamePlay.score;
                    Hero.hurt = true;
                    setTimeout(()=> {
                        Hero.hurt = false;
                    },500)
                }
            }
        }
    },
    animation : function(monster){
       setInterval(() => {    
            if(monster.monsterMotion <= -3400){
                monster.spriteSens = true;
            }
            else if(monster.monsterMotion >= -180){
                monster.spriteSens = false;
            }
            if(monster.spriteSens === true){

                monster.monsterMotion = monster.monsterMotion +180;
            
                monster.sprite.style.left= monster.monsterMotion+"px";
            }
            else if(monster.spriteSens === false){
                monster.monsterMotion = monster.monsterMotion -180;
                monster.sprite.style.left= monster.monsterMotion+"px";
            }
        },20);
    }
}
