//+ ====================================================================================================================
//+
//+ 6 kyu - Count the smiley faces!  [ ID: 583203e6eb35d7980400002a ] (count-the-smiley-faces)
//+ URL: https://www.codewars.com/kata/583203e6eb35d7980400002a
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { countSmileys } = require("./countTheSmileyFaces")

describe("Testing", function () {
  it("Basic tests", () => {
    assert.strictEqual(countSmileys([]), 0)
    assert.strictEqual(countSmileys([":)", ";(", ";}", ":-D"]), 2)
    assert.strictEqual(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1)
    assert.strictEqual(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2)
    assert.strictEqual(countSmileys([":-)", ";~D", ":-D", ":_D"]), 3)
    assert.strictEqual(countSmileys([":---)", "))", ";~~D", ";D"]), 1)
    assert.strictEqual(countSmileys([";~)", ":)", ":-)", ":--)"]), 3)
    assert.strictEqual(countSmileys([":o)", ":--D", ";-~)"]), 0)
  })
  it("Should work for random tests", () => {
    function smileOrSad() {
      let t = Math.random() < 0.5
      return (
        ":;"[Math.round(Math.random())] +
        (t ? "-~o"[Math.round(Math.random() * 2)] : "") +
        "D)>("[Math.round(Math.random() * 3)]
      )
    }
    function getArr() {
      return Array.from(Array(7)).map(() => smileOrSad())
    }
    function solution(s) {
      return s.map((a) => (/^[:;][-~]?[)D]$/.test(a) ? 1 : 0)).reduce((a, b) => a + b, 0)
    }
    for (let i = 0; i < 100; i++) {
      let arr = getArr()
      console.log("Testing for: " + arr.join(" , "))
      assert.strictEqual(countSmileys([...arr]), solution(arr))
    }
  })
  console.log("<font size='5'>Great work!</font>")
})
