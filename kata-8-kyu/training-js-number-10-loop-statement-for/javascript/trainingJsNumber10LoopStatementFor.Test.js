//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #10: loop statement --for  [ ID: 5721a78c283129e416000999 ] (training-js-number-10-loop-statement-for)
//+ URL: https://www.codewars.com/kata/5721a78c283129e416000999
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { pickIt } = require("./trainingJsNumber10LoopStatementFor")

function an(arr) {
  const odd = [],
    even = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) odd.push(arr[i])
    else even.push(arr[i])
  }
  return [odd, even]
}

function rndarr() {
  let len = ~~(20 * Math.random()) + 1,
    rs = []
  for (let i = 0; i < len; i++) rs[i] = ~~(100 * Math.random()) + 1
  return rs
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

describe("-------- Basic Test --------", () => {
  //test for equations and inequalities
  it("test for equations and inequalities", () => {
    assert.deepEqual(pickIt([1, 2]), [[1], [2]])
    assert.deepEqual(pickIt([1, 2, 3]), [[1, 3], [2]])
    assert.deepEqual(pickIt([3, 2, 1]), [[3, 1], [2]])
    assert.deepEqual(pickIt([10, 20, 30]), [[], [10, 20, 30]])
    assert.deepEqual(pickIt([11, 21, 31]), [[11, 21, 31], []])
    assert.deepEqual(pickIt([8, 1, 5, 4, 6, 1, 1]), [
      [1, 5, 1, 1],
      [8, 4, 6]
    ])
  })
  it("---should coding with 'for'---", () => {
    console.log("<br><font size=4><b>---should coding with 'for'---</b></font>")
    console.log("")
    let code = pickIt + ""
    //console.log(code)
    let passswitch = /for *\(/.test(code) ? "Passed" : 'Your solution should contains keyword "for"'
    assert.deepEqual(passswitch, "Passed")
  })
})
describe("--------100 Random Test --------", () => {
  console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
  console.log("")

  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let ar = rndarr(),
      answer = an(ar)
    console.log("<font color='#CD7F32'>Test for: arr=[" + ar + "]</font>", "")
    it(`Test for: arr = [${ar}]`, () => {
      assert.deepEqual(pickIt(ar), answer)
    })
  }
})
console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
console.log(
  "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
  ""
)
