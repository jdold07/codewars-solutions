//+ ====================================================================================================================
//+
//+ 6 kyu - CamelCase Method  [ ID: 587731fda577b3d1b0001196 ] (camelcase-method)
//+ URL: https://www.codewars.com/kata/587731fda577b3d1b0001196
//+ Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./camelcaseMethod")

it("Basic tests", () => {
  assert.strictEqual("test case".camelCase(), "TestCase")
  assert.strictEqual("camel case method".camelCase(), "CamelCaseMethod")
  assert.strictEqual("say hello ".camelCase(), "SayHello")
  assert.strictEqual(" camel case word".camelCase(), "CamelCaseWord")
  assert.strictEqual("".camelCase(), "")
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (s) =>
    s
      .split(" ")
      .map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase())
      .join("")
  const base = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < 40; i++) {
    const s = Array.from({ length: randint(1, 15) }, () =>
      Array.from({ length: randint(3, 15) }, () => base[randint(0, base.length - 1)]).join("")
    ).join(" ")
    it(`Testing for ${s}`, () => {
      const expected = sol(s)
      assert.strictEqual(s.camelCase(), expected, "It should work for random inputs too")
    })
  }
})
