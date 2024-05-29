//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #9: loop statement --while and do..while  [ ID: 57216d4bcdd71175d6000560 ] (training-js-number-9-loop-statement-while-and-do-dot-while)
//+ URL: https://www.codewars.com/kata/57216d4bcdd71175d6000560
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { padIt } = require("./trainingJsNumber9LoopStatementWhileAndDoDotWhile")

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(10 * Math.random()) + 1
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndc()
  }
  return rs.join("")
}
function an(str, n) {
  var times = 0
  while (times < n) {
    if (times % 2 == 0) {
      str = "*" + str
    } else {
      str = str + "*"
    }
    times++
  }
  return str
}

describe("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  it("test for equations and inequalities", () => {
    assert.strictEqual(padIt("a", 1), "*a")
    assert.strictEqual(padIt("a", 2), "*a*")
    assert.strictEqual(padIt("a", 3), "**a*")
    assert.strictEqual(padIt("a", 4), "**a**")
    assert.strictEqual(padIt("a", 5), "***a**")
  })

  it("<br><font size=4><b>---should coding with 'while'---</b></font>", () => {
    let code = padIt + ""
    let passswitch = code.indexOf("while") > -1 ? "Passed" : 'Your solution should contains keyword "while"'
    assert.strictEqual(passswitch, "Passed")
  })
})

describe("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let ss = rnds()
    const nn = ~~(30 * Math.random()) + 1
    const answer = an(ss, nn)
    it(`Test for: str = "${ss}", n = "${nn}"`, () => {
      assert.strictEqual(padIt(ss, nn), answer)
    })
  }
})
