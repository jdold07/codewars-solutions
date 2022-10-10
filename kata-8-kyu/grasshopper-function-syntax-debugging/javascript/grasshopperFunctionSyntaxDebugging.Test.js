//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Function syntax debugging  [ ID: 56dae9dc54c0acd29d00109a ] (grasshopper-function-syntax-debugging)
//+ URL: https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { main } = require("./grasshopperFunctionSyntaxDebugging")

describe("Your function", () => {
  it("should be defined", () => {
    assert.doesNotThrow(main)
  })
  it("should work for sample tests", () => {
    assert.strictEqual(main("take ", "item"), "take item")
    assert.strictEqual(main("use ", "sword"), "use sword")
  })
  it("should work for fixed tests", () => {
    assert.strictEqual(main("eat ", "food"), "eat food")
    assert.strictEqual(main("drink ", "water"), "drink water")
    assert.strictEqual(main("open ", "door"), "open door")
    assert.strictEqual(main("close ", "window"), "close window")
    assert.strictEqual(main("author ", "kata"), "author kata")
    assert.strictEqual(main("approve ", "kata"), "approve kata")
  })
  it("should work for random tests", () => {
    for (let i = 0; i < 100; i++) {
      let verb = `${randomToken()} `,
        noun = randomToken()
      assert.strictEqual(main(verb, noun), verb + noun)
    }
  })
})
