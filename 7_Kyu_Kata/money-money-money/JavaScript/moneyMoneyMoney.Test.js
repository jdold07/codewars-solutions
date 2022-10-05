// [object Object] - Money, Money, Money  [ ID: 563f037412e5ada593000114  (money-money-money) ]
// URL: https://www.codewars.com/kata/563f037412e5ada593000114
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("calculateYears", () => {
  it("Basic tests", () => {
    assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
    assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)
    assert.strictEqual(calculateYears(1000,0.05,0.18,1000), 0)
  })
})

describe("Random tests", () => {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
     
    function calculateYearsSol99(principal, interest, tax, desired) {
        let prev = principal, i = 0;
        while (desired > prev) {
            prev = prev * (1 + interest - interest * tax);
            i++;
        }
        return i;
    }

    it("Testing for 100 random tests ", () => {
      for (let i = 0; i < 100; i++) {
        let principal = randint(100000,15000000);
        let interest  = randint(1,8) / 100.0;
        let desired = principal + randint(10000,1500000);
        let tax  = randint(5,20) / 100.0;
        let ans = calculateYearsSol99(principal, interest, tax, desired);
        assert.strictEqual(calculateYears(principal, interest, tax, desired), ans, `Testing for ${principal}, ${interest}, ${tax}, ${desired}`);
      }
    })
})
