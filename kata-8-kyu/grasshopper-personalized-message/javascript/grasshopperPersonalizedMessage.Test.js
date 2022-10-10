//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Personalized Message  [ ID: 5772da22b89313a4d50012f7 ] (grasshopper-personalized-message)
//+ URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { greet } = require("./grasshopperPersonalizedMessage")

describe("greeting", () => {
  it("fixed tests", () => {
    assert.strictEqual(greet("Daniel", "Daniel"), "Hello boss")
    assert.strictEqual(greet("Greg", "Daniel"), "Hello guest")
  })
  it("random tests", () => {
    for (let i = 0; i < 10; i++) {
      let first = randomToken()
      let second = randomToken()
      Math.floor(Math.random() * 2)
        ? assert.strictEqual(greet(first, first), "Hello boss")
        : assert.strictEqual(greet(first, second), "Hello guest")
    }
  })
})
