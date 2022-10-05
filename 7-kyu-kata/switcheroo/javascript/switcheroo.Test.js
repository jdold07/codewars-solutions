// 7 kyu - Switcheroo  [ ID: 57f759bb664021a30300007d  (switcheroo) ]
// URL: https://www.codewars.com/kata/57f759bb664021a30300007d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Switcheroo", () => {
  it("Fixed tests", () => {
    assert.strictEqual(switcheroo("abc"), "bac")
    assert.strictEqual(switcheroo("aaabcccbaaa"), "bbbacccabbb")
    assert.strictEqual(switcheroo("ccccc"), "ccccc")
    assert.strictEqual(switcheroo("abababababababab"), "babababababababa")
    assert.strictEqual(switcheroo("aaaaa"), "bbbbb")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    function myswitcheroo(x) {
      return x.replace(/b/g, ".").replace(/a/g, "b").replace(/\./g, "a")
    }
    let names = ["a", "b", "c"]

    for (let i = 0; i < 100; i++) {
      let x = [],
        len = randint(1, 30)
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)])
      x = x.join("")
      assert.strictEqual(switcheroo(x), myswitcheroo(x), `Testing for ${JSON.stringify(x)}`)
    }
  })
})
