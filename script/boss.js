const boss = {
    position: document.getElementById('sage'),
    sageSprite : document.getElementById('sage-sprite'),
    messageBox: document.getElementById('message-box'),
    answerBox: document.getElementById('answer-box'),
    canBeClose: false,
    spriteMotion : 0,
    reverseAnimation : false,
    destination:0,
    firstInteraction : function(){
        this.messageBox.textContent = "Hey toi! Tu veux apprendre l'art ancestral du code? Si tu acceptes tu vivras une aventure où tu apprendras comment te servir des pouvoirs du code! Sinon ... bah c'est dommage mais je te donnerai accès au CV d'un mec qui s'y connait! Alors tu fais quoi ?";
        this.messageBox.style.display='flex';
        let answerYes = document.createElement('button');
        answerYes.textContent = "Oui";
            this.answerBox.appendChild(answerYes);
        let answerNo = document.createElement('button');
        answerNo.textContent = "Non";
            this.answerBox.appendChild(answerNo);
            answerYes.addEventListener('click', () => {
                //Game start
                this.enigma(0);
            })
            answerNo.addEventListener('click', () => {
                this.answerBox.innerHTML = '';
                this.messageBox.style.display='none';
                this.messageBox.innerHTML='';
                document.location.href="cv.html";
            })
    },
    enigma : function(level) {
        if(level === 0){
            var questionText = "Tu es courageux... c'est bien ! Pour commencer montre moi comment afficher le Titre de cette page ?";
            var answerText1 = "<h1>The ancestral art of coding</h1>";
            var answerText2 = '<h1 title = "The ancestral art of coding">';
            var answerText3 = "<header>The ancestral art of coding</header>";
            var goodAnswer = "answer1";
            var succesText = "Bravo tu as trouvé ! mais ce n'est que le début de ton aventure. ";
            var loseText =  "Non c'est pas ça, tu as encore beaucoup à apprendre. Je vais le faire pour toi.";
            var endText = " Rejoins moi plus loin. Tu peux te déplacer avec les touches directionnelles et sauter en appuyant sur la touche du haut. Attention en chemin... il y a des monstres! et n'essaye pas de les attaquer, esquive les plutôt.";
            this.destination = 14900;
             var action = function(){
                document.querySelector('nav').classList.add('show-nav');
             }
        }
        if(level === 1){
            Hero.stop = true;
            var questionText = "Tu vas apprendre à changer ton environnement grâce à CSS. Je veux que tu changes la couleur du ciel. J'en ai marre de cette pénombre.";
            var answerText1 = "color : blue-sky";
            var answerText2 = 'background-color = blue-sky';
            var answerText3 = "background-color : blue-sky";
            var goodAnswer = "answer3";
            var succesText = "Tu as réussi ! Tu te rends compte de toutes les possibilités?";
            var loseText =  "Au moins tu as essayé... attention les yeux je m'en occupe!";
            var endText = " Bon tu connais la chanson rejoins moi plus loin pour la suite de ton apprentissage";
            this.destination = 27500;
             var action = function(){
               document.querySelector('.night-sky').style.opacity = 0;
             }
        }
        if(level === 2){
            Hero.stop = true;
            var questionText = "Le Javascript te donnera le pouvoir d'interagir avec ton environnement ! C'est pas cool ça ? Peux-tu me dire comment attribuer une action au clic de la souris?";
            var answerText1 = "clickOnMouse()";
            var answerText2 = "addEventListener('click', function(){})";
            var answerText3 = "whenUserClick()";
            var goodAnswer = "answer2";
            var succesText = "Tu as réussi ! Tu te rends compte de toutes les possibilités?";
            var loseText =  " Au moins tu as essayé... attention les yeux je m'en occupe!";
            var endText = "Je pense que tu es prêt pour la dernière épreuve, Javascript te donne le pouvoir de tuer tes ennemis en leurs cliquant dessus (entre autres ...). Rejoins-moi au bout du chemin pour accéder au sésame !";
            this.destination = 41600;
             var action = function(){
                    Hero.killPower = true;
             }
        }

        this.messageBox.style.display = 'block';
        this.answerBox.innerHTML = '';
        this.messageBox.innerHTML= questionText;

        let answer1 = document.createElement('button');
        answer1.textContent = answerText1;
        answer1.id ="answer1";
        answer1.classList.add('answer');
        this.answerBox.appendChild(answer1);

        let answer2 = document.createElement('button');
        answer2.textContent = answerText2;
        answer2.id ="answer2";
        answer2.classList.add('answer');
        this.answerBox.appendChild(answer2);

        let answer3 = document.createElement('button');
        answer3.textContent = answerText3;
        answer3.id ="answer3";
        answer3.classList.add('answer');
        this.answerBox.appendChild(answer3);

        this.answerBox.addEventListener('click', (e)=> {
            this.canBeClose = true;

            if(e.target.classList.contains('answer')){
                this.answerBox.innerHTML = '';
                if(e.target.id === goodAnswer){
                    gamePlay.score+= 500;
                    gamePlay.scoreBox.textContent = gamePlay.score;
                    this.messageBox.innerHTML= succesText;
                }
                else{
                    this.messageBox.innerHTML= loseText;
                }

                this.messageBox.innerHTML+= endText;

                const confirm = document.createElement('div');
                    confirm.textContent="Appuyez sur entrée pour continuer";
                    confirm.classList.add('confirm');
                this.messageBox.appendChild(confirm);
                window.addEventListener('keydown',(e) => {
                    if( e.keyCode === 13 && this.canBeClose === true){
                        this.messageBox.innerHTML = '';
                        this.messageBox.style.display = 'none';
                        Hero.stop = false;
                        this.canBeClose = false;
                        this.position.style.left = this.destination+'px';
                    }
                })
                action();
            }
        })
    },
    endGame : function(){
        Hero.stop = true;
        this.messageBox.textContent = "Bravo, tu as réussi toutes les épreuves avec un  score de "+gamePlay.score+" points ! Comme promis tu peux accéder à ta récompense ! Elle se trouve juste derrière moi";
        this.messageBox.style.display='block';
        const confirm = document.createElement('div');
        confirm.textContent="Appuyez sur entrée pour continuer";
        confirm.classList.add('confirm');
        this.messageBox.appendChild(confirm);
        window.addEventListener('keydown',(e) => {
           if(e.keyCode === 13) {
                this.destination = 49000;
                this.messageBox.innerHTML = '';
                this.messageBox.style.display = 'none';
                Hero.stop = false;
                this.canBeClose = false;
                this.position.style.left = this.destination+'px';
           }
        });
    },
    animation : function(){
            setInterval(() => {    
                if(this.spriteMotion  < -7047){
                    this.reverseAnimation = true;
                }
                else if (this.spriteMotion > -441){
                    this.reverseAnimation= false;
                }
                if(this.reverseAnimation === true){
                    this.spriteMotion = this.spriteMotion +441;
                    this.sageSprite.style.left= this.spriteMotion+"px";
                }
                else if(this.reverseAnimation === false){
                    this.spriteMotion = this.spriteMotion -441;
                    this.sageSprite.style.left= this.spriteMotion+"px";
                }
            },60);
    },
}
