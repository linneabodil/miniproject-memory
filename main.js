var backPic = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/319874/1160/772/m1/fpnw/wm1/greeny__patt_21_m-.jpg?1422254781&s=8c6c678c002018019754a4ff28d5766b"

var memoryCards = [
  { back: backPic,
    name: "Amatic SC"
  },
  { back: backPic,
    name: "Amatic SC"
  },
  { back: backPic,
    name: "Montserrat"
  },
  { back: backPic,
    name: "Montserrat"
  },
  { back: backPic,
    name: "Helvetica"
  },
  { back: backPic,
    name: "Helvetica"
  },
  { back: backPic,
    name: "Cinzel"
  },
  { back: backPic,
    name: "Cinzel"
  },
  { back: backPic,
    name: "Oswald"
  },
  { back: backPic,
    name: "Oswald"
  },
  { back: backPic,
    name: "Lobster"
  },
  { back: backPic,
    name: "Lobster"
  }
]

createCards();

var cards = document.getElementsByTagName("li");
for (var j = 0; j < cards.length; j++) {
  cards[j].addEventListener("click", function(e) {
    e.preventDefault();

    console.log(this)
    this.lastChild.style.visibility = "hidden";

  })
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
