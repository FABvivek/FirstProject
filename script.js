let score =  JSON.parse(localStorage.getItem('score')) 
            ||  {
                    wins:0,
                    losses:0,
                    Ties:0
                };

                updateScoreElement();
            
        


            function playgame(playermove){
                const computerMove = pickcomputermove();

                let result = '';
                if(playermove == 'scissors'){
                        if(computerMove == 'rock'){
                        result = 'You lose.';
                    }
                    else if(computerMove === 'paper'){
                        result = 'You win.';
                    }
                    else if(computerMove == 'scissors'){
                         result = 'Tie';
                     }
                }


                else if(playermove == 'paper'){
                        if(computerMove == 'rock'){
                        result = 'You win.';
                        }
                        else if(computerMove === 'paper'){
                            result = 'Tie';
                        }
                        else if(computerMove == 'scissors'){
                            result = 'You lose.';
                        }
                    }

                    
                else if(playermove == 'rock'){
                    if(computerMove == 'rock'){
                        result = 'Tie';
                    }
                    else if(computerMove === 'paper'){
                        result = 'You lose.';
                    }
                    else if(computerMove == 'scissors'){
                        result = 'You win.';
                    }
                }

                if(result == 'You win.'){
                    score.wins ++;
                }
                else if(result == 'You lose.'){
                    score.losses ++;
                }
                else if(result == 'Tie'){
                    score.Ties ++;
                }

                localStorage.setItem('score' , JSON.stringify(score));
                updateScoreElement();

                document.querySelector('.js-result').innerHTML = result;

                document.querySelector('.js-move').innerHTML = 
                `You 
            <img src="images/${playermove}-emoji.png" class="move-icon">
            <img src="images/${computerMove}-emoji.png " class="move-icon" >
            computer`;
               
                 
            }

            function updateScoreElement(){
                document.querySelector('.js-score')
                 .innerHTML= `wins:${score.wins}, losses:${score.losses}, Ties:${score.Ties}
                 `;
            }
         
            function pickcomputermove(){

                    
                    const randomNumber = Math.random();
                    let computerMove = '';

                    if(randomNumber >=0 && randomNumber<1/3){
                        computerMove = 'rock';
                    }
                    else if(randomNumber>=1/3 && randomNumber <2/3 ){
                        computerMove = 'paper';
                    }
                    else if(randomNumber >=2/3 && randomNumber < 1){
                    computerMove = 'scissors';
                    }  
                    return computerMove; 
            }