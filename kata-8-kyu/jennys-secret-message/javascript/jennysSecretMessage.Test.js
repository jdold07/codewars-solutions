//+ ====================================================================================================================
//+
//+ 8 kyu - Jenny's secret message  [ ID: 55225023e1be1ec8bc000390 ] (jennys-secret-message)
//+ URL: https://www.codewars.com/kata/55225023e1be1ec8bc000390
//+ Category: BUG_FIXES  |  Tags: DEBUGGING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { greet } = require("./jennysSecretMessage")

describe("Jenny's greeting function", function () {
  it("should greet some people normally", function () {
    assert.strictEqual(greet("Jim"), "Hello, Jim!")
    assert.strictEqual(greet("Jane"), "Hello, Jane!")
    assert.strictEqual(greet("Simon"), "Hello, Simon!")
  })
  it("should greet Johnny a little bit more special", function () {
    assert.strictEqual(greet("Johnny"), "Hello, my love!")
  })
})
