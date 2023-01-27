class Card {
    constructor(faceValue, suit, rank){
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }

}

class Players {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}
    let player1 = new Players('Maurice');
    let player2 = new Players('Kristina');


class Deck {
    constructor(){
        this.deck = [];
    }
    createDeck() {
    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    let suits = ["♥️", "♠️", "♦️", "♣️"];
    // needs 52 cards
    for(let i = 0; i < cards.length; i++){
        for(let addSuits = 0; addSuits < suits.length; addSuits++){
            this.deck.push(new Card(cards[i] , suits[addSuits], (i + 2)));
            } 
        }
        //console.log(this.deck);
        //console.log(this.deck[0].suit)
    } 
    shuffleDeck() {
        for(let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            //console.log(i , j);
        }
    }
    dealCards() { //deal the cards to each player
        //console.log(this.deck);
        player1.hand = this.deck.slice(0, 26);
        player2.hand = this.deck.slice(26, 52);
        console.log(player1, player2); //checking what is in each object
    }
}
let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealCards();


let playerOnePoints = 0;
let playerTwoPoints = 0;

class Game {
    
    compareValue(){//compare the values of each card to determine points
       // console.log(player1.hand[0]); //checking if I can access player one's first card
        
        for (let i = 0; i < player1.hand.length; i++){
            // console.log(player2.hand[i].rank);
            if (player1.hand[i].rank > player2.hand[i].rank){
                playerOnePoints += 1;
                console.log(`${player1.name}'s card ${player1.hand[i].suit} ${player1.hand[i].rank}, ${player2.name}'s card ${player2.hand[i].suit} ${player2.hand[i].rank}`);
                console.log(`${player1.name}'s Points ${playerOnePoints}, ${player2.name}'s Points ${playerTwoPoints}`);
                console.log('======================================');
                
            } else if (player1.hand[i].rank < player2.hand[i].rank){
                playerTwoPoints += 1;
                console.log(`${player1.name}'s card ${player1.hand[i].suit} ${player1.hand[i].rank}, ${player2.name}'s card ${player2.hand[i].suit} ${player2.hand[i].rank}`);
                console.log(`${player1.name}'s Points ${playerOnePoints}, ${player2.name}'s Points ${playerTwoPoints}`);
                console.log('======================================');
            } else {
                console.log(`${player1.name}'s card ${player1.hand[i].suit} ${player1.hand[i].rank}, ${player2.name}'s card ${player2.hand[i].suit} ${player2.hand[i].rank}`);
                console.log ('Tie! No points awarded');
                console.log('======================================');
            }
        }
            
    }
    winner(){//determine winner
        if(playerOnePoints > playerTwoPoints) {
            console.log(`🎉🎉 ${player1.name} WINS! 🎉🎉`);
        } else if (playerOnePoints < playerTwoPoints) {
          console.log(`🥳🥳 ${player2.name} WINS! 🥳🥳`);
        } else {
          console.log('Score is tied! You both lose! \n😿😿😿');
        }
    }
    
}
let game1 = new Game();
game1.compareValue();
game1.winner();