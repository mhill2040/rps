/*Basic Objectives:
User selects rock, paper, or scissors
Computer randomly chooses
hint: have your choices in an array and randomly choose
Display the user and computers choice on the screen
Display the winner */


var user;
var computer;
var winner;

function startGame(e) {
  user = e.target.id
  computerChoice();
  checkWin();
  displayResults();
}

function computerChoice() {
  var choices = ['rock', 'paper', 'scissors']
  var index = Math.floor(Math.random() * 3)
  computer = choices[index]
}

function checkWin() {
  //nested if statements
  if (user === 'rock') {
    if (computer === 'paper')
    
  } else if ( user === 'paper' ) {

  } else {

  }
}

function displayResults() {
  console.log('displaying results')
}

var choices = document.getElementsByClassName('choice')

for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
