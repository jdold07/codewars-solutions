// [object Object] - Twice as old  [ ID: 5b853229cfde412a470000d0  (twice-as-old) ]
// URL: https://www.codewars.com/kata/5b853229cfde412a470000d0
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", function(){
  it("Testing for dad's age: 36 and son's age: 7", function(){
    assert.strictEqual(twiceAsOld(36,7) , 22);
  });  
  it("Testing for dad's age: 55 and son's age: 30", function(){
    assert.strictEqual(twiceAsOld(55,30) , 5);
  });
  it("Testing for dad's age: 42 and son's age: 21", function(){
    assert.strictEqual(twiceAsOld(42,21) , 0);
  });
  it("Testing for dad's age: 22 and son's age: 1", function(){
    assert.strictEqual(twiceAsOld(22,1) , 20);
  });
  it("Testing for dad's age: 29 and son's age: 0", function(){
    assert.strictEqual(twiceAsOld(29,0) , 29);
  });
});

describe("Random tests", function(){
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function twiceAsOldSolution(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }  
  for (let i = 0;  i < 50; i++) {
    let dad = randInt(18, 100);
    let son = Math.max(0, dad - randInt(18, 40));
    it("Testing for dad's age: " + dad + " and son's age: " + son, function(){
      assert.strictEqual(twiceAsOld(dad, son), twiceAsOldSolution(dad, son));
    });  
  }
});
