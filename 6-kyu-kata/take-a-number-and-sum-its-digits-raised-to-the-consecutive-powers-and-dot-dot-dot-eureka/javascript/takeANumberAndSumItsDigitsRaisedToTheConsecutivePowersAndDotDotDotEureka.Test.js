// 6 kyu - Take a Number And Sum  Its Digits Raised To The Consecutive Powers And ....¡Eureka!!  [ ID: 5626b561280a42ecc50000d1  (take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka) ]
// URL: https://www.codewars.com/kata/5626b561280a42ecc50000d1
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;

function dotest(a, b, expected) {
  
  assert.deepEqual(sumDigPow(a, b), expected, `Test failed with a = ${a}, b = ${b}`)
}
describe("Tests", function() {
  it("Fixed tests", function() {
      dotest(1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9])
      dotest(1, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
      dotest(10, 100,  [89])
      dotest(90, 100, [])
      dotest(90, 150, [135])
      dotest(50, 150, [89, 135])
      dotest(10, 150, [89, 135])
  });
  it("Random tests", function() {
      function filterFuncMine(n) {
        return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
      }

      function *range(a, b) {
        for (let i = a; i <= b; ++i) yield i;
      }

      function sumDigPowMine(a, b) {
        return Array.from(range(a, b)).filter(filterFuncMine);
      }

      function randint(a, b) {
        return ~~(Math.random() * (b-a+1)) + a;
      }

      for (let i = 0; i < 40; ++i) {
        const a = randint(100, 500),
              b = randint(2000, 3000),
              result = sumDigPowMine(a, b);
        dotest(a, b, result);
      }

      for (let i = 0; i < 20; ++i) {
        const a = randint(10, 1999),
              b = randint(2000, 3000),
              result = sumDigPowMine(a, b);
        dotest(a, b, result);
      }

      for (let i = 0; i < 15; ++i) {
        const a = randint(2620000, 2640000),
              b = randint(2647000, 2648000),
              result = sumDigPowMine(a, b);
        dotest(a, b, result);
      }
    });
});

