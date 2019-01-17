var backPic = "img/background-pattern.jpg"

var memoryCards = [
  { back: backPic, name: "Amatic SC", id: 1 },
  { back: backPic, name: "Amatic SC", id: 1 },
  { back: backPic, name: "Montserrat", id: 2 },
  { back: backPic, name: "Montserrat", id: 2 },
  { back: backPic, name: "Helvetica", id: 3 },
  { back: backPic, name: "Helvetica", id: 3 },
  { back: backPic, name: "Cinzel", id: 4 },
  { back: backPic, name: "Cinzel", id: 4 },
  { back: backPic, name: "Oswald", id: 5 },
  { back: backPic, name: "Oswald", id: 5 },
  { back: backPic, name: "Lobster", id: 6 },
  { back: backPic, name: "Lobster", id: 6}
]


var start = document.getElementById("start-game").addEventListener("click", function(e) {
  e.preventDefault();
  // hide the landing page
  var startDiv = document.getElementById("start-div")
  startDiv.setAttribute("class", "hidden");
  // show the score counting div
  document.getElementById("score-counter").setAttribute("class", "")
  // show the cards on the board
  createCards();

  // the cards with the frontpage visible
  var choosenCards = [];
  var foundPairs = [];
  var cards = document.getElementsByTagName("li");
  for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", function(e) {
      e.preventDefault();
      // show the front of the card when it is clicked
      if (this.className == "") {
        this.setAttribute("class", "active")
      }
      choosenCards += this.id;
      if (choosenCards.length == 2) {
        if (choosenCards[0] == choosenCards[1]) {
          var x = memoryCards.findIndex(x => x.id == choosenCards[0])
          memoryCards.splice(x, 2)
          foundPairs += memoryCards[x] + memoryCards[x+1];
          console.log(foundPairs)
          console.log(memoryCards)
        }
        // wait two seconds before turning the cards back around
        setTimeout(function triggerCardTurn() {
          turnDownCards()
        }, 2000);
        choosenCards = [];
        
        // shows the back of the cards again, if there is no match
        function turnDownCards() {
          var cardsToTurn = document.getElementsByClassName("active");
          for (var i = 0; i < cardsToTurn.length; i + 2) {
            cardsToTurn[i].setAttribute("class", "")
          }
        }
      }
    });
  }
})




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
    card.setAttribute("id", memoryCards[i].id)

    card.appendChild(cardTitle);
    card.appendChild(backOfCard);
    cardsList.appendChild(card)
  }
}
