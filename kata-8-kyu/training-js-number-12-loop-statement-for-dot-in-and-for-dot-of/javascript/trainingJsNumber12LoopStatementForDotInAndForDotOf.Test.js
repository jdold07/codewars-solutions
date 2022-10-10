//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #12: loop statement --for..in and for..of  [ ID: 5722b3f0bd5583cf44001000 ] (training-js-number-12-loop-statement-for-dot-in-and-for-dot-of)
//+ URL: https://www.codewars.com/kata/5722b3f0bd5583cf44001000
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { giveMeFive } = require("./trainingJsNumber12LoopStatementForDotInAndForDotOf")

function an(obj) {
  let five = []
  for (let key in obj) {
    if (key.length == 5) five.push(key)
    if (obj[key].length == 5) five.push(obj[key])
  }
  return five
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(6 * Math.random()) + 2
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndc()
  }
  return rs.join("")
}
function rndobj() {
  let len = ~~(10 * Math.random()) + 3,
    rs = {}
  for (let i = 0; i < len; i++) rs[rnds()] = rnds()
  return rs
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  console.log("")

  assert.deepEqual(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), ["earth", "world"])
  assert.deepEqual(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }), ["Ihave", "money", "model"])
  assert.deepEqual(giveMeFive({ Pears: "than", apple: "sweet" }), ["Pears", "apple", "sweet"])
})

it("<br><font size=4><b>---should coding with 'for in'---</b></font>", () => {
  console.log("")
  let code = giveMeFive + ""
  //console.log(code)
  let passswitch = /for *\(.* in .*\)/.test(code) ? "Passed" : 'Your solution should contains keyword "for in"'
  assert.deepEqual(passswitch, "Passed")
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  console.log("")

  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let oo = rndobj(),
      answer = an(oo)
    console.log("<font color='#CD7F32'>Test for: obj=" + JSON.stringify(oo) + "</font>", "")
    assert.deepEqual(giveMeFive(oo), answer)
  }
})
