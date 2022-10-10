//+ ====================================================================================================================
//+
//+ 7 kyu - Even or Odd - Which is Greater?  [ ID: 57f7b8271e3d9283300000b4 ] (even-or-odd-which-is-greater)
//+ URL: https://www.codewars.com/kata/57f7b8271e3d9283300000b4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { evenOrOdd } = require("./evenOrOddWhichIsGreater")

describe("Even or Odd - Which is Greater?", () => {
  it("Fixed tests", () => {
    assert.strictEqual(evenOrOdd("12"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("123"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("112"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("1213896664"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("12399124677"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("7768"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("999988888444"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("11111111112"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("5578843"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("44590258866"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("91867"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("7247756662"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("834"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("964279"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("989899686"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("124326546547649683563465"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("23646531353253475361352437562453"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("663333"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("87536234"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("9998378356372"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("88188777752"), "Even and Odd are the same")
    assert.strictEqual(evenOrOdd("46575888345254788864"), "Even is greater than Odd")
    assert.strictEqual(evenOrOdd("35345679867564"), "Odd is greater than Even")
    assert.strictEqual(evenOrOdd("3222111"), "Even and Odd are the same")
  })

  it("Testing for 100 random tests", () => {
    function f(str) {
      let even = str.split("").reduce((sum, x) => sum + (x % 2 === 0 ? +x : 0), 0)
      let odd = str.split("").reduce((sum, x) => sum + (x % 2 ? +x : 0), 0)
      return even > odd ? "Even is greater than Odd" : odd > even ? "Odd is greater than Even" : "Even and Odd are the same"
    }

    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for (let i = 0; i < 100; i++) {
      let word = Array.from({ length: randint(3, 30) }, () => randint(0, 9)).join``
      let expected = f(word)
      assert.strictEqual(
        evenOrOdd(word),
        expected,
        `solution(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`
      )
    }
  })
})
