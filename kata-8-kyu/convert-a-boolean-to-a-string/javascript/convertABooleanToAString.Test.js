//+ ====================================================================================================================
//+
//+ 8 kyu - Convert a Boolean to a String  [ ID: 551b4501ac0447318f0009cd ] (convert-a-boolean-to-a-string)
//+ URL: https://www.codewars.com/kata/551b4501ac0447318f0009cd
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { booleanToString } = require("./convertABooleanToAString")

describe("Solution", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output')
    assert.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output')
    assert.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output')
  })
  it("Random Tests", function () {
    Array(40)
      .fill(0)
      .forEach(() => {
        const val = Math.random() < 0.5,
          exp = val ? "true" : "false"
        assert.strictEqual(booleanToString(val), exp, `When we pass in ${exp}, we want the string "${exp}" as output`)
      })
  })
})
