var expect = chai.expect;
describe('dealCards', function(){
    it('Should Deal 26 cards to each player', function(){
        var x = new Deck();
        x.createDeck();
        x.shuffleDeck();
        x.dealCards();
        expect(player1.hand.length).to.equal(26);
        expect(player2.hand.length).to.equal(26);
    });
    it('should throw an error if player1 or player2 hand is not a number', function(){
        expect(function(){
            const x = new Deck();
            x.createDeck();
            x.shuffleDeck();
            x.dealCards();
            x.player1.hand != 'number' || x.player2.hand != 'number';
        }).to.throw(Error);
    })
});