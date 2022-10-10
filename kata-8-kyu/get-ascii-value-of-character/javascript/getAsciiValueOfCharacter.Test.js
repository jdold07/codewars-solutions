//+ ====================================================================================================================
//+
//+ 8 kyu - get ascii value of character  [ ID: 55acfc59c3c23d230f00006d ] (get-ascii-value-of-character)
//+ URL: https://www.codewars.com/kata/55acfc59c3c23d230f00006d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { getASCII } = require("./getAsciiValueOfCharacter")

it("Should work from <kbd>' '</kbd> to <kb>'~'</kbd>", function () {
  let tsts = []
  for (let t = 32; t < 127; t++) tsts.push([String.fromCharCode(t), t])
  randomize(tsts).forEach((tst) => {
    let [inp, exp] = tst,
      msg = `should work for ${inp}`
    assert.strictEqual(getASCII(inp), exp, msg)
  })
})
