//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #8: Conditional statement--switch  [ ID: 572059afc2f4612825000d8a ] (training-js-number-8-conditional-statement-switch)
//+ URL: https://www.codewars.com/kata/572059afc2f4612825000d8a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { howManydays } = require("./trainingJsNumber8ConditionalStatementSwitch")

function an(month) {
  let days
  switch (month) {
    case 2:
      days = 28
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    default:
      days = 31
  }
  return days
}

describe("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  it("test for equations and inequalities", () => {
    assert.deepEqual(howManydays(1), 31)
    assert.deepEqual(howManydays(2), 28)
    assert.deepEqual(howManydays(3), 31)
    assert.deepEqual(howManydays(4), 30)
    assert.deepEqual(howManydays(12), 31)
  })

  it("<br><font size=4><b>---should coding with switch---</b></font>", () => {
    let code = howManydays + ""
    let passswitch = code.indexOf("switch") > -1 ? "Passed" : 'Your solution should contains keyword "switch"'
    assert.deepEqual(passswitch, "Passed")
  })
})

describe("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let mm = ~~(12 * Math.random()) + 1,
      answer = an(mm)
    it(`Test for: month = ${mm}`, () => {
      assert.deepEqual(howManydays(mm), answer)
    })
  }
})
