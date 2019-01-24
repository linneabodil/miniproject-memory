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
    var cardInner = document.createElement("div");
    cardInner.setAttribute("class", "inner");
    var backOfCard = document.createElement("img");
    backOfCard.setAttribute("class", "back")
    backOfCard.src = memoryCards[i].back;

    var frontOfCard = document.createElement("div");
    frontOfCard.setAttribute("class", "front")
    var cardTitle = document.createElement("h2");
    cardTitle.innerHTML = memoryCards[i].name;
    cardTitle.setAttribute("class", memoryCards[i].name)
    frontOfCard.appendChild(cardTitle)
    card.setAttribute("id", memoryCards[i].id);

    cardInner.appendChild(frontOfCard);
    cardInner.appendChild(backOfCard);
    card.appendChild(cardInner);
    cardsList.appendChild(card);
  }
}

function summary() {
  cardsList.setAttribute("class", "hidden");
  gameSummary.setAttribute("class", "");
  document.getElementById("score-counter").setAttribute("class", "hidden")
}

export { hideCards, turnDownCards, createCards, summary }
