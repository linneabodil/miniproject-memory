import { memoryCards, backPic } from './card-info.js';

// list-container
var cardsList = document.getElementById("cards-list");
var gameSummary = document.getElementById("game-summary");

// hide the cards that has been matched
function hideCards() {
  var cardsToHide = document.getElementsByClassName("active");
  for (var i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].style.visibility = "hidden"
  }
}

// shows the back of the cards again, if there is no match
function turnDownCards() {
  var cardsToTurn = document.getElementsByClassName("active");
  for (var i = 0; i < cardsToTurn.length; i + 2) {
    cardsToTurn[i].setAttribute("class", "")
  }
}

// set the back, title and etc. of the cards
function createCards() {
  for (var i = 0; i < memoryCards.length; i++) {
    var card = document.createElement("li");
    var backOfCard = document.createElement("img");
    backOfCard.src = memoryCards[i].back;
    var cardTitle = document.createElement("h2");
    cardTitle.innerHTML = memoryCards[i].name;
    cardTitle.setAttribute("class", memoryCards[i].name)
    card.setAttribute("id", memoryCards[i].id);

    card.appendChild(cardTitle);
    card.appendChild(backOfCard);
    cardsList.appendChild(card)
  }
}

function summary() {
  cardsList.setAttribute("class", "hidden");
  gameSummary.setAttribute("class", "");
  document.getElementById("score-counter").setAttribute("class", "hidden")
}

export { hideCards, turnDownCards, createCards, summary }
