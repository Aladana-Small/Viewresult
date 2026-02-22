let calculation = JSON.parse(localStorage.getItem('result'))  ;
    
  	function calculateInput(value){
  		
  		calculation += value ;
  		localStorage.setItem('result', JSON.stringify(calculation)) ;
  		
  		displayResult(value) ;
  	} ;
  	
  	function clearCalculation(){
  	  calculation = localStorage.removeItem('result') || 0 ;
      
      displayResult() ;
  	} ;
  	
  	function displayResult(value){
  	  document.querySelector('.js-show-calculation').innerHTML = calculation || value || 0 ;
  	} ;
  	