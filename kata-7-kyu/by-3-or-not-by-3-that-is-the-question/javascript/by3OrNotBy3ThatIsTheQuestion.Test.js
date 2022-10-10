//+ ====================================================================================================================
//+
//+ 7 kyu - By 3, or not by 3?  That is the question . . .  [ ID: 59f7fc109f0e86d705000043 ] (by-3-or-not-by-3-that-is-the-question)
//+ URL: https://www.codewars.com/kata/59f7fc109f0e86d705000043
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { divisibleByThree } = require("./by3OrNotBy3ThatIsTheQuestion")

describe("By 3, or not by 3?  That is the question . . .", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(divisibleByThree("123"), true, "Should return true if the sum of the given digits is divisible by 3.")
    assert.strictEqual(
      divisibleByThree("19254"),
      true,
      "Should return true if the sum of the given digits is divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("1"),
      false,
      "Should return false if the sum of the given digits is not divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("963210456"),
      true,
      "Should return true if the sum of the given digits is  divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("010110101011"),
      false,
      "Should return false if the sum of the given digits is not divisible by 3."
    )
    assert.strictEqual(divisibleByThree("9"), true, "Should return true if the sum of the given digits is  divisible by 3.")
    assert.strictEqual(
      divisibleByThree("6363"),
      true,
      "Should return true if the sum of the given digits is  divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("10987654321"),
      false,
      "Should return false if the sum of the given digits is not divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("9876543211234567890009"),
      true,
      "Should return true if the sum of the given digits is  divisible by 3."
    )
    assert.strictEqual(
      divisibleByThree("9876543211234567890002"),
      false,
      "Should return false if the sum of the given digits is not divisible by 3."
    )
  })

  it("Random Tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    const sol = (n) => !(n.split("").reduce((a, b) => a + +b, 0) % 3)

    for (let i = 0; i < 40; i++) {
      const n = Array.from({ length: randint(1, 100) }, () => randint(0, 9)).join("")
      assert.strictEqual(divisibleByThree(n), sol(n), `Testing for '${n}'`)
    }
  })
})
