//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #6:  Basic data types--Boolean  and conditional statements if..else  [ ID: 571f832f07363d295d001ba8 ] (training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else)
//+ URL: https://www.codewars.com/kata/571f832f07363d295d001ba8
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { trueOrFalse } = require("./trainingJsNumber6BasicDataTypesBooleanAndConditionalStatementsIfDotElse")

function an(val) {
  if (val) return "true"
  else return "false"
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(8 * Math.random()) + 1
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndc()
  }
  return rs.join("")
}
function rndtf() {
  const values = [true, 123, "123", ["123"], "false", false, 0, "", null, undefined]
  const jl = ~~(100 * Math.random()) % 6
  let rs
  if (jl == 0) {
    rs = ~~(100 * Math.random())
  } else if (jl == 1) {
    rs = rnds()
  } else {
    rs = values[~~(10 * Math.random())]
  }
  return rs
}

describe("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  it("test for equations and inequalities", () => {
    let a = 1,
      b = 2,
      c = 1
    assert.deepEqual(trueOrFalse(a > b), "false")
    assert.deepEqual(trueOrFalse(a === b), "false")
    assert.deepEqual(trueOrFalse(a < b), "true")
    assert.deepEqual(trueOrFalse(a !== b), "true")
    assert.deepEqual(trueOrFalse(b > c), "true")
    assert.deepEqual(trueOrFalse(b === c), "false")
    assert.deepEqual(trueOrFalse(b < c), "false")
    assert.deepEqual(trueOrFalse(b !== c), "true")
    assert.deepEqual(trueOrFalse(a === c), "true")
    assert.deepEqual(trueOrFalse(a !== c), "false")
  })

  it("test for logical operators and bitwise operators", () => {
    let t = true,
      f = false
    assert.deepEqual(trueOrFalse(t && f), "false")
    assert.deepEqual(trueOrFalse(f && f), "false")
    assert.deepEqual(trueOrFalse(t && t), "true")
    assert.deepEqual(trueOrFalse(t || f), "true")
    assert.deepEqual(trueOrFalse(t || t), "true")
    assert.deepEqual(trueOrFalse(f || f), "false")
    assert.deepEqual(trueOrFalse(t & f), "false")
    assert.deepEqual(trueOrFalse(t & t), "true")
    assert.deepEqual(trueOrFalse(f & f), "false")
    assert.deepEqual(trueOrFalse(t | f), "true")
    assert.deepEqual(trueOrFalse(t | t), "true")
    assert.deepEqual(trueOrFalse(f | f), "false")
    assert.deepEqual(trueOrFalse(!t), "false")
    assert.deepEqual(trueOrFalse(!f), "true")
    assert.deepEqual(trueOrFalse(t ^ f), "true")
    assert.deepEqual(trueOrFalse(t ^ t), "false")
    assert.deepEqual(trueOrFalse(f ^ f), "false")
  })

  it("test for implicit conversion", () => {
    assert.deepEqual(trueOrFalse(true), "true")
    assert.deepEqual(trueOrFalse(123), "true")
    assert.deepEqual(trueOrFalse("123"), "true")
    assert.deepEqual(trueOrFalse(["123"]), "true")
    assert.deepEqual(trueOrFalse("false"), "true")
    assert.deepEqual(trueOrFalse(false), "false")
    assert.deepEqual(trueOrFalse(0), "false")
    assert.deepEqual(trueOrFalse(""), "false")
    assert.deepEqual(trueOrFalse(null), "false")
    assert.deepEqual(trueOrFalse([].length), "false")
    assert.deepEqual(trueOrFalse(undefined), "false")
  })
})

describe("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    const tt = rndtf()
    const answer = an(tt)
    it(`Test for: val = ${tt}`, () => {
      assert.deepEqual(trueOrFalse(tt), answer)
    })
  }
})
