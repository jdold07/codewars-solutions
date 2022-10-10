//+ ====================================================================================================================
//+
//+ 7 kyu - Get the Middle Character  [ ID: 56747fd5cb988479af000028 ] (get-the-middle-character)
//+ URL: https://www.codewars.com/kata/56747fd5cb988479af000028
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { getMiddle } = require("./getTheMiddleCharacter")

describe("GetMiddle", function () {
  it("Tests", function () {
    assert.strictEqual(getMiddle("test"), "es")
    assert.strictEqual(getMiddle("testing"), "t")
    assert.strictEqual(getMiddle("middle"), "dd")
    assert.strictEqual(getMiddle("A"), "A")
  })
})

describe("50 Random tests", function () {
  //----------------
  function randint(a, b) {
    //return Math.floor(Math.random() * (b - a + 1) + a);
    return Math.floor(Math.random() * (b - a) + a) //b shouldn't be equal to 52
  }
  function GetMiddleT(s) {
    let middle = Math.floor(s.length / 2)
    if (s.length % 2 == 0) return s[middle - 1] + s[middle]
    else return s[middle]
  }
  //----------------
  for (let i = 0; i < 50; i++) {
    let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let rando = randint(1, 1000)
    let randStr = ""
    for (let j = 0; j < rando; j++) {
      let x = randint(0, alph.length)
      randStr += alph[x]
    }
    it("Random Testing", function () {
      assert.strictEqual(getMiddle(randStr), GetMiddleT(randStr))
    })
  }
})
