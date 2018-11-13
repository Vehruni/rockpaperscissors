// *************************** YOUR CODE BELOW *******************************

$("#shoot").click(function() {
  userChoice = $("input").val()
  var randomNumber = Math.random()
    $("#userChoice").text(userChoice)
    
    if(randomNumber> .80) {
        $("#computerChoice").text("Rock"); 
    }
    
       else if(randomNumber <.80 && randomNumber>.50) {
        $("#computerChoice").text("Paper"); 
    }
    
       else{
        $("#computerChoice").text("Scissor"); 
    }
    
    
    
    
    
    
});





//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


var userChoice = " "

var computerChoice =""

var winner = " "



// DOCUMENT READY FUNCTION BELOW

