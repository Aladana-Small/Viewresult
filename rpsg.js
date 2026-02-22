    
    let score = JSON.parse(localStorage.getItem('score')) || 
    {
      win : 0,
      draw : 0,
      lose : 0,
    } ;
    
    function gamePlay(playerMove){
      const computerMove = Math.random() ;
      let computerPick = '' ;
      let result = ''
     
  
  if (playerMove === 'rock'){
    if(computerMove >= 0 && computerMove < 1/3) {
      
      computerPick = 'rock' ;
      result = 'You draw' ;
      score.draw += 1 ;
      
      
    } else if(computerMove >= 1/3 && computerMove < 2/3){ 
      
      computerPick = 'paper' ;
      result = 'You lose' ;
      score.lose += 1
    } else if(computerMove >= 2/3 && computerMove <= 1){
      
      computerPick = 'scissors' ;
      result = 'You win' ;
      score.win += 1
    }
    
    
  } else if (playerMove === 'paper'){
    if(computerMove >= 0 && computerMove < 1/3) {
      
      computerPick = 'rock' ;
      result = 'You win'
      score.win += 1 ;
    } else if(computerMove >= 1/3 && computerMove < 2/3){ 
      
      computerPick = 'paper' ;
      result = 'You draw'
      score.draw += 1
    } else if(computerMove >= 2/3 && computerMove <= 1){
      
      computerPick = 'scissors' ;
      result = 'You lose' ;
      score.lose += 1
    }
    
    
  }  else if (playerMove === 'scissors'){
    if(computerMove >= 0 && computerMove < 1/3) {
      
      computerPick = 'rock' ;
      result = 'You win'
      score.lose += 1 ;
    } else if(computerMove >= 1/3 && computerMove < 2/3){ 
      
      computerPick = 'paper' ;
      result = 'You lose'
      score.win += 1
    } else if(computerMove >= 2/3 && computerMove <= 1){
      
      computerPick = 'scissors' ;
      result = 'You draw'
      score.draw += 1
    }
     
  }
  
  localStorage.setItem('score', JSON.stringify(score)) ;
  
  document.querySelector('.js-show-move').innerHTML = `You picked ${playerMove}, Computer picked ${computerPick},\n ${result}`
    
  
  document.querySelector('.js-show-result').innerText = `Score : wins: ${score.win}, draws: ${score.draw}, loses: ${score.lose}` ;
  
    } ;
    
    
  function resetScore(){
      score = localStorage.removeItem('score') || {
      win : 0,
      draw : 0,
      lose : 0,
    } ;
    
    document.querySelector('.js-show-move').innerText = 'Score reset successfully !'
    
    
    document.querySelector('.js-show-result').innerHTML = `Score : wins: ${score.win}, draws: ${score.draw}, loses: ${score.lose}` ;
    
    } ;
    