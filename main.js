import { memoryCards, backPic } from './modules/card-info.js';
import { hideCards, turnDownCards, createCards, summary } from './modules/functions.js';

window.onload = function() {

  // show the score counting div
  document.getElementById("score-counter").setAttribute("class", "")

  // timer
  var timer = 0;
  var timeCounter = document.getElementById("timer");
  timeCounter.innerHTML = timer;
  var gameCounter = setInterval(function counter() {
    timer++;
    timeCounter.innerHTML = timer;
  }, 1000);

  // count the number of clicks the player
  var clicks = 0;
  var clickCounter = document.getElementById("clicks");
  clickCounter.innerHTML = clicks;

  shuffle(memoryCards);
  // show the cards on the board
  createCards();

  // the upturned cards
  var choosenCards = [];
  var cards = document.getElementsByTagName("li");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(e) {
      e.preventDefault();
      if (choosenCards.length < 2) {
        clicks++;
        clickCounter.innerHTML = clicks;

        // show the front of the card when it is clicked
        if (this.className == "") {
          this.classList.add("active", "disabled")
        }
        choosenCards += this.id;
        if (choosenCards.length == 2) {
          if (choosenCards[0] == choosenCards[1]) {
            var n = memoryCards.findIndex(x => x.id == choosenCards[0])
            memoryCards.splice(n, 1);
            var m = memoryCards.findIndex(x => x.id == choosenCards[1])
            memoryCards.splice(m, 1);
            setTimeout(function triggerHideCards() {
              hideCards()
            }, 1000)
          }
          // wait before turning the cards back around
          setTimeout(function triggerCardTurn() {
            turnDownCards()
            choosenCards = [];
          }, 1000);
        }
        if (memoryCards.length == 0) {
          clearInterval(gameCounter);
          console.log(timer)
          console.log(clicks)
          document.getElementById("final-score").innerHTML += timer + " seconds and used " + clicks + " clicks. Well done!";
          setTimeout(function triggerSummary() {
            summary();
          }, 1500);
        }
      }
    });
  }
}

// shuffle the cards
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
