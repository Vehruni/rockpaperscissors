// *************************** YOUR CODE BELOW *******************************

$("#shoot").click(function() {
  userChoice = $("input").val()
  var randomNumber = Math.random()
  var computerChoice = ""
  var wins;
  
    $("#userChoice").text(userChoice)
    
    if(randomNumber> .80) {
        computerChoice="Rock"
        $("#computerChoice").text("Rock"); 
    }
    
       else if(randomNumber <.80 && randomNumber>.50) {
           computerChoice="Paper"
        $("#computerChoice").text("Paper"); 
    }
    
       else{
        $("#computerChoice").text("Scissor");
        computerChoice="Scissor"
    }
    
    if (userChoice==="scissor" && computerChoice==="Rock") {  
    
        wins=" Computer Wins"
    }
    
    if (userChoice==="paper" && computerChoice==="Scissor"){
        
         wins="Computer Wins"
    }
    
    if (userChoice==="paper" && computerChoice==="Rock"){
        
         wins="User Wins"
        
    }
    
    if (userChoice==="rock" && computerChoice==="Scissor"){
        
         wins="User Wins"
    }
    
    if (userChoice==="rock" && computerChoice==="Paper"){
        
         wins="Computer Wins"
    }
    
    if (userChoice==="scissor" && computerChoice==="Paper"){
        
         wins=" User Wins"
    }
    
    if (userChoice==="rock" && computerChoice==="Rock"){
        
         wins="Try Again"
    }
    
    if (userChoice==="scissor" && computerChoice==="Scissor"){
        
         wins="Try Again"
    }
    
    if (userChoice==="paper" && computerChoice==="Paper"){
        
         wins="Try Again"
    }
    
    $("#result").text(wins);
    
    $("#input").text()
    
    
    
});





//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


var userChoice = " "

var computerChoice =""

var winner = " "



// DOCUMENT READY FUNCTION BELOW

