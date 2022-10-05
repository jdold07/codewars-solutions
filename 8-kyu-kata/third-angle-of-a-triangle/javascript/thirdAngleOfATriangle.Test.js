// 8 kyu - Third Angle of a Triangle  [ ID: 5a023c426975981341000014  (third-angle-of-a-triangle) ]
// URL: https://www.codewars.com/kata/5a023c426975981341000014
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});

describe("random test", function() {
  let a_, b_, c_;
  
  it("Testing for 20 random tests", () => {
    for (let i = 0; i <= 20; i++) {
      a_ = 1 + ~~(Math.random() * 175);
      b_ = 1 + ~~(Math.random() * (180 - a_));
      c_ = 180 - a_ - b_;
      assert.strictEqual(otherAngle(a_, b_), c_, "Testing: " + a_ + ", " + b_ + "; Expecting: " + c_);
    }
  });
});
