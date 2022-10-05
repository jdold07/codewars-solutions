// [object Object] - Define a card suit  [ ID: 5a360620f28b82a711000047  (define-a-card-suit) ]
// URL: https://www.codewars.com/kata/5a360620f28b82a711000047
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
function defineSuit(card) {
    const DECK = {"♣":"clubs", "♦":"diamonds", "♥":"hearts", "♠":"spades"}
    return DECK[card.slice(-1)]
  }
