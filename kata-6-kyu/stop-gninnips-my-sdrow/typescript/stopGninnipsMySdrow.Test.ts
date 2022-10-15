//+ ====================================================================================================================
//+
//+ 6 kyu - Stop gninnipS My sdroW!  [ ID: 5264d2b162488dc400000001 ] (stop-gninnips-my-sdrow)
//+ URL: https://www.codewars.com/kata/5264d2b162488dc400000001
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { spinWords } from "./stopGninnipsMySdrow"

describe("spinWords", () => {
  it("should pass some fixed tests", () => {
    assert.strictEqual(spinWords("Raw Danger is best PS2 game"), "Raw regnaD is best PS2 game")
    assert.strictEqual(spinWords("Welcome"), "emocleW")
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
    assert.strictEqual(spinWords("This is a test"), "This is a test")
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test")
    assert.strictEqual(spinWords("This sentence is a sentence"), "This ecnetnes is a ecnetnes")
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test")
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more")
    assert.strictEqual(
      spinWords("Oh wait shoot there are still the random tests sorry for misleading you"),
      "Oh wait toohs ereht are llits the modnar stset yrros for gnidaelsim you"
    )
  })

  it("should pass some random tests", () => {
    const generateWord = (): string =>
      [...Array(~~(Math.random() * 11))].map(() => String.fromCharCode(~~(Math.random() * 26) + 97)).join("")

    for (let i = 0; i < 100; ++i) {
      const words: string = [...Array(~~(Math.random() * 20) + 2)]
        .map(() => generateWord())
        .filter((v) => v.length !== 0)
        .join(" ")

      const actual: string = spinWords(words)
      const expected: string = words
        .split(" ")
        .map((v) => (v.length >= 5 ? v.split("").reverse().join("") : v))
        .join(" ")
      assert.strictEqual(actual, expected, `Testing for words = ${JSON.stringify(words)}`)
    }
  })
})
