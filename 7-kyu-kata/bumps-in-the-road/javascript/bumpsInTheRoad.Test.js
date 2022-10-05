// 7 kyu - Bumps in the Road  [ ID: 57ed30dde7728215300005fa  (bumps-in-the-road) ]
// URL: https://www.codewars.com/kata/57ed30dde7728215300005fa
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Bumps in the Road", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(bump("n"), "Woohoo!")
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!")
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!")
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
    assert.strictEqual(bump("______n___n_"), "Woohoo!")
    assert.strictEqual(bump("nnnnnnnnnnnnnnnnnnnnn"), "Car Dead")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    function mybump(x) {
      return x.replace(/[^n]/g, "").length > 15 ? "Car Dead" : "Woohoo!"
    }
    let names = ["n", "_"]

    for (let i = 0; i < 100; i++) {
      let x = [],
        len = randint(1, 35)
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)])
      x = x.join("")
      assert.strictEqual(bump(x), mybump(x), `Testing for ${JSON.stringify(x)}`)
    }
  })
})
