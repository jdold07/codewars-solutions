//+ ====================================================================================================================
//+
//+ 8 kyu - Name on billboard  [ ID: 570e8ec4127ad143660001fd ] (name-on-billboard)
//+ URL: https://www.codewars.com/kata/570e8ec4127ad143660001fd
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { billboard } = require("./nameOnBillboard")

describe("Basic tests", () => {
  assert.strictEqual((billboard + "").indexOf("*"), -1, "You are not allowed to use multiplier '*' operator")
  assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600)
  assert.strictEqual(billboard("Abishai Charalampos"), 570)
  assert.strictEqual(billboard("Idwal Augustin"), 420)
  assert.strictEqual(billboard("Hadufuns John", 20), 260)
  assert.strictEqual(billboard("Zoroaster Donnchadh"), 570)
  assert.strictEqual(billboard("Claude Miljenko"), 450)
  assert.strictEqual(billboard("Werner Vígi", 15), 165)
  assert.strictEqual(billboard("Anani Fridumar"), 420)
  assert.strictEqual(billboard("Paolo Oli"), 270)
  assert.strictEqual(billboard("Hjalmar Liupold", 40), 600)
  assert.strictEqual(billboard("Simon Eadwulf"), 390)
})

describe("Random tests", () => {
  function randomString() {
    const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)
    let text = []
    let len = randint(0, 99)
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "

    for (let i = 0; i < len; i++) {
      text.push(possible[randint(0, possible.length - 1)])
    }
    return text.join("")
  }
  for (let i = 0; i < 40; i++) {
    let s = randomString(),
      p = Math.floor(Math.random() * 10 + 1) * 5
    it(`Testing for '${s}' and ${p}`, () => {
      assert.strictEqual(billboard(s, p), s.length * p)
    })
  }
})
