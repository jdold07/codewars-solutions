//+ ====================================================================================================================
//+
//+ 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001 ] (rgb-to-hex-conversion)
//+ URL: https://www.codewars.com/kata/513e08acc600c94f01000001
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { rgb } = require("./rgbToHexConversion")

describe("Tests", () => {
  it("Basic Tests", () => {
    assert.strictEqual(rgb(0, 0, 0), "000000")
    assert.strictEqual(rgb(0, 0, -20), "000000")
    assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
    assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
  })

  function rgbReference(r, g, b) {
    function hex(n) {
      n = parseInt(n, 10)
      if (isNaN(n)) return "00"
      n = Math.max(0, Math.min(n, 255))
      let chars = "0123456789ABCDEF"
      return chars.charAt((n - (n % 16)) / 16) + chars.charAt(n % 16)
    }

    return hex(r) + hex(g) + hex(b)
  }

  // function elevatorReference(left, right, call) {
  //   return Math.abs(right - call) <= Math.abs(left - call) ? "right" : "left"
  // }

  function generator() {
    let a = randInt(-5, 300)
    let b = randInt(-5, 300)
    let c = randInt(-5, 300)
    return [a, b, c]
  }

  function randInt(a, b) {
    return (Math.random() * (b - a + 1) + a) | 0
  }

  function randomAssertSimilar(generator, userSolution, referenceSolution, tests) {
    tests = tests || 100
    let user, reference, values
    while (tests-- > 0) {
      values = generator()
      reference = referenceSolution.apply(this, values)
      user = userSolution.apply(this, values)
      assert.strictEqual(user, reference, "didn't work on the following argument array: " + values)
    }
  }

  it("Random Tests", function () {
    randomAssertSimilar(generator, rgb, rgbReference)
  })
})
