//+ ====================================================================================================================
//+
//+ 6 kyu - -Convert it, quickly!  [ ID: 59b261a35220ab5ea70000c3 ] (convert-it-quickly)
//+ URL: https://www.codewars.com/kata/59b261a35220ab5ea70000c3
//+ Category: REFERENCE  |  Tags: RESTRICTED | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { weirdHexToDec } = require("./convertItQuickly")

describe("Basic tests", function () {
  it("Should return 1", function () {
    var res = weirdHexToDec("1")
    assert.strictEqual(res, 1, "Values must be equal")
  })
  it("Should return 16", function () {
    var res2 = weirdHexToDec("10")
    assert.strictEqual(res2, 16, "Values must be equal")
  })
  it("Should return 11259375", function () {
    var res3 = weirdHexToDec("ABCDEF")
    assert.strictEqual(res3, 11259375, "Values must be equal")
  })
})

const chars = "ABCDEF0123456789"
const rndInput = () => Array.from({ length: f(r() * 50 + 1) }, () => chars[(r() * chars.length) ^ 0]).join("")

it("Random tests", function () {
  for (let i = 0; i < 50; i++) {
    let n = rndInput()
    console.log(`Testing for: ${n}`)
    let expected = parseInt(n, 16)
    let actual = weirdHexToDec(n)
    assert.strictEqual(actual, expected)
  }
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const limit = 26
// const code = require('fs').readFileSync('/workspace/solution.txt', 'utf8');
const codelen = 26
console.log(`Your code length is: ${codelen}`)

const r = Math.random
const f = Math.floor

describe("Code length test", function () {
  it("Code length should less or equal to 26 characters.", function () {
    if (codelen > limit) {
      assert.strictEqual("code length > " + limit, "code length <= " + limit, "your code length = " + codelen)
    } else {
      assert.strictEqual(
        "code length = " + codelen + ", code length check passed!",
        "code length = " + codelen + ", code length check passed!"
      )
    }
    if (codelen <= 15) {
      assert.strictEqual(
        "cheater?",
        "trainer",
        "Your code length is smaller than the human being limit, so I guess you are Superman, or you are a cheater.;-)"
      )
    }
  })
})
