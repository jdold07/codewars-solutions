//+ ====================================================================================================================
//+
//+ 8 kyu - Will there be enough space?  [ ID: 5875b200d520904a04000003 ] (will-there-be-enough-space)
//+ URL: https://www.codewars.com/kata/5875b200d520904a04000003
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
const { enough } = require("./willThereBeEnoughSpace")





describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0)
    assert.strictEqual(enough(100, 60, 50), 10)
    assert.strictEqual(enough(20, 5, 5), 0)
  })
})

describe("Random Tests", function () {
  function control(cap, on, wait) {
    if (on + wait <= cap) {
      return 0
    } else {
      return on + wait - cap
    }
  }

  function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  it("Testing for 20 random tests", () => {
    for (let i = 0; i < 20; i++) {
      let a = rand(50, 100)
      let b = Math.min(rand(0, 80), a)
      let c = rand(0, 80)
      assert.strictEqual(enough(a, b, c), control(a, b, c), `Testing for cap = ${a}, on = ${b}, wait = ${c}`)
    }
  })
})


