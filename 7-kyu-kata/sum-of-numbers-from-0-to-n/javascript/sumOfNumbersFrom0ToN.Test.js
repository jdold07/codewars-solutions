// 7 kyu - Sum of numbers from 0 to N  [ ID: 56e9e4f516bcaa8d4f001763  (sum-of-numbers-from-0-to-n) ]
// URL: https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21");
    assert.strictEqual(SequenceSum.showSequence(7), "0+1+2+3+4+5+6+7 = 28");
  });

  it("Negative and zero tests", function() {
    assert.strictEqual(SequenceSum.showSequence(0), "0=0");
    assert.strictEqual(SequenceSum.showSequence(-1), "-1<0");
    assert.strictEqual(SequenceSum.showSequence(-10), "-10<0");
  });

  class Sool{
    static showSequence(count) {
      let returnedString;
      if (count > 0) {
        returnedString = [...Array(count).keys()].join('+')+"+"+count+" = "+(count * (count + 1) / 2);
      } else if (count < 0) {
        returnedString = count + "<0";
      } else {
        returnedString = "0=0";
      }
      return returnedString;
    }
  }

  it("Random tests", () => {
  
    for(let i=0;i<4+~~(1+Math.random()*25);i++){
      let rn=10+~~(Math.random()*25);
      let totest=SequenceSum.showSequence(rn);
      let rndF=Sool.showSequence(rn);
      assert.strictEqual(totest ,rndF, `Testing for SequenceSum.showSequence(${rn})`);
    }
  });
})
