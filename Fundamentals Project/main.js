var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

// if (cardOne === cardThree) {
//   alert("You found a match");
// } else {
//   alert("Sorry, try again");
// }

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
  for (i = 0; i <= 3; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
}

var button = document.getElementById('button');
button.addEventListener('click', createBoard);
