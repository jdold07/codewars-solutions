//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()  [ ID: 57277a31e5e51450a4000010 ] (training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search)
//+ URL: https://www.codewars.com/kata/57277a31e5e51450a4000010
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { firstToLast } = require("./trainingJsNumber17MethodsOfStringObjectIndexofLastindexofAndSearch")

function an(str, c) {
  return str.indexOf(c) == -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}
function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rndstr() {
  let len = ~~(50 * Math.random()) + 10
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndc()
  }
  return rs.join("")
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(firstToLast("ababc", "a"), 2)
  assert.deepEqual(firstToLast("ababc", "c"), 0)
  assert.deepEqual(firstToLast("ababc", "d"), -1)
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let ss = rndstr(),
      cc = rndc(),
      answer = an(ss, cc)
    console.log("<font color='#CD7F32'>Test for: str=\"" + ss + '"  c="' + cc + '"</font>', "")
    let useran = firstToLast(ss, cc)
    assert.deepEqual(useran, answer)
  }
})
