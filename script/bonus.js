const bonus = {
    bonusSelector : document.querySelectorAll('.paper'),
    bonusList : [],
     bonusFactory: function (element){
        this.element = element;
        this.x = this.element.offsetLeft;
        this.y = parseInt(window.getComputedStyle(this.element, null).getPropertyValue("bottom"));
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.touch = false;
    },
    getBonus : function(){
        for (const bonus of this.bonusSelector) {
            const bonusData = new this.bonusFactory(bonus);
            this.bonusList.push(bonusData);
        }
    },
    bonusCollision : function(){
        for (const bonus of this.bonusList) {
            if(bonus.element.style.display != "none"){
                if(Hero.positionX >= bonus.x - bonus.width
                && Hero.positionX < bonus.x + bonus.width 
                && Hero.positionY + Hero.height >= bonus.y
                && Hero.positionY  <= bonus.y 
                ){
                    bonus.element.style.display = 'none';
                    bonus.touch = true;
                    gamePlay.score += 200;
                    gamePlay.scoreBox.textContent= gamePlay.score;
                }
            }
        }
    },

}