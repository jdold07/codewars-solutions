//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #16: Methods of String object--slice(), substring() and substr()  [ ID: 57274562c8dcebe77e001012 ] (training-js-number-16-methods-of-string-object-slice-substring-and-substr)
//+ URL: https://www.codewars.com/kata/57274562c8dcebe77e001012
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { cutIt } = require("./trainingJsNumber16MethodsOfStringObjectSliceSubstringAndSubstr")

function an(arr) {
  let min = Infinity,
    rs = []
  for (let i = 0; i < arr.length; i++) if (arr[i].length < min) min = arr[i].length
  for (let i = 0; i < arr.length; i++) rs[i] = arr[i].slice(0, min)
  return rs
}
function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(16 * Math.random()) + 4
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndc()
  }
  return rs.join("")
}
function rndarr() {
  let len = ~~(11 * Math.random()) + 4
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rnds()
  }
  return rs
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"])
  assert.deepEqual(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"])
  assert.deepEqual(cutIt(["codewars", "javascript", "java"]), ["code", "java", "java"])
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let ar = rndarr(),
      answer = an(ar)
    console.log("<font color='#CD7F32'>Test for: arr=[" + ar + "]</font>", "")
    let useran = cutIt(ar)
    assert.deepEqual(useran, answer)
  }
})
