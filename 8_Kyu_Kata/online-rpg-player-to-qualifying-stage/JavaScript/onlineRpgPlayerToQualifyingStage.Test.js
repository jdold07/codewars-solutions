// [object Object] - Online RPG: player to qualifying stage?  [ ID: 55849d76acd73f6cc4000087  (online-rpg-player-to-qualifying-stage) ]
// URL: https://www.codewars.com/kata/55849d76acd73f6cc4000087
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const {assert} = require('chai')

describe("Solution", function() {
  const doTest = (points,expected,exp=expected ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false) =>
    assert.strictEqual(playerRankUp(points), exp)
  
  it("Fixed tests", function() {
    doTest( 25, false)
    doTest( 34, false)
    doTest( 45, false)
    doTest( 59, false)
    doTest( 64, false)
    doTest(100, true )
    doTest(105, true )
    doTest(111, true )
    doTest(118, true )
  });
  it("Random tests", function() {
    for (let trial = 1; trial <= 40; trial++) {
      const points = Math.floor(Math.random() * 199 + 1)
      doTest(points, points >= 100)
    }
  });
});

