// [object Object] - Are You Playing Banjo?  [ ID: 53af2b8861023f1d88000832  (are-you-playing-banjo) ]
// URL: https://www.codewars.com/kata/53af2b8861023f1d88000832
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })

describe("Random tests", () => {  
  
  const lst = ["Adam", "Bob", "chelsea", "daniel", "Ethan", "fanny", "george", "harry", 
               "Ignatious", "Kyle", "Lavender", "michelle", "peter", "Ragu", "Ryle", "Reaven", 
               "royce", "richard", "rubi", "Reanor", "resh", "Samantha", "trishan", "valde"]
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let word = lst[randint(0, lst.length - 1)]
    let expected = word.toLowerCase()[0] == 'r'? `${word} plays banjo`: `${word} does not play banjo`
    it(`areYouPlayingBanjo(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(areYouPlayingBanjo(word), expected);
    });
  }
})

