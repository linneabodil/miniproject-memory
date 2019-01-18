import { memoryCards, backPic } from './modules/card-info.js';

var start = document.getElementById("start-game").addEventListener("click", function(e) {
  e.preventDefault();
  // hide the landing page
  var startDiv = document.getElementById("start-div")
  startDiv.setAttribute("class", "hidden");
  // show the score counting div
  document.getElementById("score-counter").setAttribute("class", "")
  // show the cards on the board
  createCards();

  // count the number of clicks the player
  var clicks = 0;
  var clickCounter = document.getElementById("clicks");
  clickCounter.innerHTML = clicks;


  // the upturned cards
  var choosenCards = [];
  var foundPairs = [];
  var cards = document.getElementsByTagName("li");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(e) {
      e.preventDefault();
      if (choosenCards.length < 2) {
        clicks++;
        clickCounter.innerHTML = clicks;

        console.log(clicks)
        // show the front of the card when it is clicked
        if (this.className == "") {
          this.classList.toggle("active")
        }
        choosenCards += this.id;
        if (choosenCards.length == 2) {
          if (choosenCards[0] == choosenCards[1]) {
            var x = memoryCards.findIndex(x => x.id == choosenCards[0])
            foundPairs.push(memoryCards[x],memoryCards[x+1]);
            memoryCards.splice(x, 2);
            console.log(foundPairs)
            console.log(memoryCards)
            setTimeout(function triggerHideCards() {
              hideCards()
            }, 1000)
          }
          // wait two seconds before turning the cards back around
          setTimeout(function triggerCardTurn() {
            turnDownCards()
            choosenCards = [];
          }, 2000);
          if (memoryCards.length == 0) {
            alert("game over")
          }
        }

      }
    });
  }
})

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
  var cardsList = document.getElementById("cards-list");
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
