//+ ====================================================================================================================
//+
//+ 8 kyu - Type of sum  [ ID: 5a2e9ae2b6cfd7692a0000ba ] (type-of-sum)
//+ URL: https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { typeOfSum } = require("./typeOfSum")

it("Basic tests", () => {
  assert.strictEqual(typeOfSum(12, 1), "number")
  assert.strictEqual(typeOfSum("d", 1), "string")
  assert.strictEqual(typeOfSum(1, "a"), "string")
  assert.strictEqual(typeOfSum("dd", ""), "string")
  assert.strictEqual(typeOfSum(true, 1), "number")
  assert.strictEqual(typeOfSum("s", false), "string")
  assert.strictEqual(typeOfSum(null, 1), "number")
  assert.strictEqual(typeOfSum("s", null), "string")
  assert.strictEqual(typeOfSum(null, undefined), "number")
  assert.strictEqual(typeOfSum(undefined, "re"), "string")
  assert.strictEqual(typeOfSum(undefined, true), "number")
  assert.strictEqual(typeOfSum(null, false), "number")
})

describe("Random Tests", () => {
  const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (a, b) => typeof (a + b)
  const answers = [0, 1, "a", "b", null, undefined, true, false]

  for (let i = 1; i <= 88; i++) {
    const index1 = randomInteger(0, 7)
    const index2 = randomInteger(0, 7)

    const a = answers[index1]
    const b = answers[index2]

    it(`Testing №${i} for typeOfSum(${a}, ${b})`, () => {
      assert.strictEqual(typeOfSum(a, b), check(a, b), `It should work for random tests too`)
    })
  }
})
