//+ ====================================================================================================================
//+
//+ 6 kyu - Playing with digits  [ ID: 5552101f47fc5178b1000050 ] (playing-with-digits)
//+ URL: https://www.codewars.com/kata/5552101f47fc5178b1000050
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { digPow } = require("./playingWithDigits")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(digPow(89, 1), 1)
    assert.strictEqual(digPow(92, 1), -1)
    assert.strictEqual(digPow(46288, 3), 51)
    assert.strictEqual(digPow(114, 3), 9)
    assert.strictEqual(digPow(46288, 5), -1)
    assert.strictEqual(digPow(135, 1), 1)
    assert.strictEqual(digPow(175, 1), 1)
    assert.strictEqual(digPow(518, 1), 1)
    assert.strictEqual(digPow(598, 1), 1)
    assert.strictEqual(digPow(1306, 1), 1)
    assert.strictEqual(digPow(2427, 1), 1)
    assert.strictEqual(digPow(2646798, 1), 1)
    assert.strictEqual(digPow(3456789, 1), -1)
    assert.strictEqual(digPow(3456789, 5), -1)
    assert.strictEqual(digPow(198, 1), 3)
    assert.strictEqual(digPow(249, 1), 3)
    assert.strictEqual(digPow(1377, 1), 2)
    assert.strictEqual(digPow(1676, 1), 1)
    assert.strictEqual(digPow(695, 2), 2)
    assert.strictEqual(digPow(1878, 2), 19)
    assert.strictEqual(digPow(7388, 2), 5)
    assert.strictEqual(digPow(47016, 2), 1)
    assert.strictEqual(digPow(542186, 2), 1)
    assert.strictEqual(digPow(261, 3), 5)
    assert.strictEqual(digPow(1385, 3), 35)
    assert.strictEqual(digPow(2697, 3), 66)
    assert.strictEqual(digPow(6376, 3), 10)
    assert.strictEqual(digPow(6714, 3), 1)
    assert.strictEqual(digPow(63760, 3), 1)
    assert.strictEqual(digPow(63761, 3), 1)
    assert.strictEqual(digPow(132921, 3), 4)
    assert.strictEqual(digPow(10383, 6), 12933)
  })
})
