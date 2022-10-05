// 8 kyu - Function 1 - hello world  [ ID: 523b4ff7adca849afe000035  (function-1-hello-world) ]
// URL: https://www.codewars.com/kata/523b4ff7adca849afe000035
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const assert = require("chai").assert

describe("Testing function", function () {
  it("Is it a function?", function () {
    assert.strictEqual(typeof greet, "function", "greet should be a function")
  })
  it("Correct return-value?", function () {
    assert.strictEqual(greet(), "hello world!")
  })
})
