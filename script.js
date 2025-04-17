function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

let deck = [];
let number = 127137;
excludeCards = [127151, 127152, 127167, 127168, 127184 ]

for (let i  = number; i < number + 52; i++) {
    if (excludeCards.includes(i)) {
        continue;
    }
    deck.push(`&#${i};`);
    }



console.log(deck);

shuffle(deck);

let gameCards = [];
let cardChoice = deck.slice(0, 10);
for (let card of cardChoice) {
    gameCards.push(card);
    gameCards.push(card);
}

shuffle(gameCards);


for (let card of cardChoice) {
    let cardDiv = document.createElement("div");
    let cardBack = document.createElement("div");
    let cardFront = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = card;
    cardBack.className = "back";
    cardFront.className = "front";
    cardDiv.appendChild(cardBack);
    cardDiv.appendChild(cardFront);
    
    document.getElementById('cardGrid').appendChild(cardDiv);


}
