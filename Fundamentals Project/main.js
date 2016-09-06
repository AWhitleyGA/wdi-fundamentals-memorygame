var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

// if (cardOne === cardThree) {
//   alert("You found a match");
// } else {
//   alert("Sorry, try again");
// }

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', showFace);
    newCard.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newCard);
  }
}

var button = document.getElementById('button');
button.addEventListener('click', createBoard);

var isMatch = function () {
 if (cardsInPlay[0] === cardsInPlay[1]) {
   alert ('You found a match!');
 } else {
   alert ('Sorry, try again!');
 }
 for (var i = 0; i < cards.length; i++) {
   document.querySelectorAll('.card')[i].innerHTML = '';
 }
}

var isTwoCards = function () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

var showFace = function () {
  if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img src="images/QueenOfSpades.png">';
  } else {
    this.innerHTML = '<img src="images/KingOfSpades.png">';
  }
}
