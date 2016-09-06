var cards = ['queen', 'jack', 'queen', 'king', 'ace', 'king', 'jack', 'ace'];

var cardsInPlay = [];

var cardsShowing = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
  if (document.querySelectorAll('.card').length < 8) {
    for (var i = 0; i < cards.length; i++) {
      var newCard = document.createElement('div');
      newCard.className = 'card';
      newCard.setAttribute('data-card', cards[i]);
      newCard.addEventListener('click', isTwoCards);
      newCard.addEventListener('click', showFace);
      gameBoard.appendChild(newCard);
    }
  }
}

var showFace = function () {
  if (cardsShowing.length === 2) {
    for (var i = 0; i < cards.length; i++) {
      document.querySelectorAll('.card')[i].innerHTML = '';
    };
    cardsShowing = [];
  };
  if (this.getAttribute('data-card') === 'ace') {
    this.innerHTML = '<img src="images/AceOfSpades.png">';
  } else if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="images/KingOfSpades.png">';
  }
  else if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img src="images/QueenOfSpades.png">';
  }
  else if (this.getAttribute('data-card') === 'jack') {
    this.innerHTML = '<img src="images/JackOfSpades.png">';
  };
  cardsShowing.push(this.getAttribute('data-card'));
}

var button = document.getElementById('button');
button.addEventListener('click', createBoard);

var isMatch = function () {
 if (cardsInPlay[0] === cardsInPlay[1]) {
   alert ('You found a match!');
 } else {
   alert ('Sorry, try again!');
 };
}

var isTwoCards = function () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
