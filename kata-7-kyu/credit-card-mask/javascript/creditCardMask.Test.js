//+ ====================================================================================================================
//+
//+ 7 kyu - Credit Card Mask  [ ID: 5412509bd436bd33920011bc ] (credit-card-mask)
//+ URL: https://www.codewars.com/kata/5412509bd436bd33920011bc
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { maskify } = require("./creditCardMask")

describe("maskify", function () {
  it("should work for some examples", function () {
    assert.strictEqual(maskify("4556364607935616"), "############5616")
    assert.strictEqual(maskify("1"), "1")
    assert.strictEqual(maskify("11111"), "#1111")
  })
  it("should work for random examples", function () {
    let i,
      t,
      solution = function (cc) {
        return cc
          .split("")
          .reduce(function (p, c, i) {
            return p.push(i < cc.length - 4 ? "#" : c), p
          }, [])
          .join("")
      }
    for (i = 0; i < 100; ++i) {
      t = randomToken() + randomToken() + randomToken() + randomToken()
      t = t.substr(0, 1 + (randomNumber() % t.length))
      assert.strictEqual(maskify(t), solution(t))
    }
  })
})
