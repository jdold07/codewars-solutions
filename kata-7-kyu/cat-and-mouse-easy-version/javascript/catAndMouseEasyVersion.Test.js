//+ ====================================================================================================================
//+
//+ 7 kyu - Cat and Mouse - Easy Version  [ ID: 57ee24e17b45eff6d6000164 ] (cat-and-mouse-easy-version)
//+ URL: https://www.codewars.com/kata/57ee24e17b45eff6d6000164
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { catMouse } = require("./catAndMouseEasyVersion")

describe("Cat and Mouse - Easy Version", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(catMouse("C....m"), "Escaped!")
    assert.strictEqual(catMouse("C..m"), "Caught!")
    assert.strictEqual(catMouse("C.....m"), "Escaped!")
    assert.strictEqual(catMouse("C.m"), "Caught!")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    function mycatMouse(x) {
      return x.length < 6 ? "Caught!" : "Escaped!"
    }

    for (let i = 0; i < 200; i++) {
      let x = ["C"],
        len = randint(0, 8)
      for (let k = 0; k < len; k++) x.push(".")
      x.push("m")
      x = x.join("")
      assert.strictEqual(catMouse(x), mycatMouse(x), `Testing for ${JSON.stringify(x)}`)
    }
  })
})
