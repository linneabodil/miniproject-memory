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
  var startDiv = document.getElementById("start-div")
  startDiv.setAttribute("class", "hidden");

  createCards();
  chooseCards();


})


// show the front of the card when it is clicked
function chooseCards() {
  var openCards = 0;
  var cards = document.getElementsByTagName("li");
  for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", function(e) {
      e.preventDefault();
      openCards++;
      if (this.className == "") {
        this.setAttribute("class", "active")
      }
      else {
        this.setAttribute("class", "")
      }
    });
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

    card.appendChild(cardTitle);
    card.appendChild(backOfCard);
    cardsList.appendChild(card)
  }
}
