// [object Object] - I Will  Take the Biggest One and Nothing Else.  [ ID: 631082840289bf000e95a334  (i-will-take-the-biggest-one-and-nothing-else) ]
// URL: https://www.codewars.com/kata/631082840289bf000e95a334
// Category: REFERENCE  |  Tags: MATHEMATICS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", function() {
  it("Example Test Cases", function() {
    assert.strictEqual(maxIntChain(6), 8, "Incorrect Result")
    assert.strictEqual(maxIntChain(10), 24, "Incorrect Result")
    assert.strictEqual(maxIntChain(26), 168, "Incorrect Result")
    assert.strictEqual(maxIntChain(32), 255, "Incorrect Result")
    assert.strictEqual(maxIntChain(36), 323, "Incorrect Result")
    assert.strictEqual(maxIntChain(39), 380, "Incorrect Result")
  });
  it("Prime Integers", function() {
    assert.strictEqual(maxIntChain(5), 6, "Incorrect Result")
    assert.strictEqual(maxIntChain(7), 12, "Incorrect Result")
    assert.strictEqual(maxIntChain(11), 30, "Incorrect Result")
    assert.strictEqual(maxIntChain(13), 42, "Incorrect Result")
    assert.strictEqual(maxIntChain(17), 72, "Incorrect Result")
  });
  it("Starting integer less than 5", function() {
    assert.strictEqual(maxIntChain(1), -1, "Incorrect Result")
    assert.strictEqual(maxIntChain(2), -1, "Incorrect Result")
    assert.strictEqual(maxIntChain(3), -1, "Incorrect Result")
    assert.strictEqual(maxIntChain(4), -1, "Incorrect Result")
  });
});

describe("Random Test", function() {
  
  function reference(n) {
    return n < 5 ? -1 : (Math.ceil(n / 2) - 1) * (Math.floor(n / 2) + 1)
  }
  
  
  function doTest(a, b) {
    const n = Math.floor(Math.random() * (b - a) + a);
    assert.strictEqual(maxIntChain(n), reference(n), "Input was " + n);
  }
  
  it("Random Test Cases", function() {
    [...Array(100)].forEach(_=>doTest(20, 1000));
    [...Array(100)].forEach(_=>doTest(1000,100000));
    [...Array(100)].forEach(_=>doTest(100000,94906265));
  });
});

