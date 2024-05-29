//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #4:  Basic data types--Array  [ ID: 571effabb625ed9b0600107a ] (training-js-number-4-basic-data-types-array)
//+ URL: https://www.codewars.com/kata/571effabb625ed9b0600107a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { getLength, getFirst, getLast, pushElement, popElement } = require("./trainingJsNumber4BasicDataTypesArray")

function an1(arr) {
  return arr.length
}
function an2(arr) {
  return arr[0]
}
function an3(arr) {
  return arr[arr.length - 1]
}
function an4(arr) {
  arr.push(1)
  return arr
}
function an5(arr) {
  arr.pop()
  return arr
}
function rndarr() {
  let len = ~~(20 * Math.random()) + 3
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = ~~(20 * Math.random())
  }
  return rs
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(getLength([1, 2, 3]), 3)
  assert.deepEqual(getFirst([1, 2, 3]), 1)
  assert.deepEqual(getLast([1, 2, 3]), 3)
  assert.deepEqual(pushElement([1, 2, 3]).length, 4)
  assert.deepEqual(popElement([1, 2, 3]), [1, 2])
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 20; myjinxini++) {
    let aa = rndarr(),
      answer1 = an1(aa.slice()),
      answer2 = an2(aa.slice()),
      answer3 = an3(aa.slice()),
      answer4 = an4(aa.slice()),
      answer5 = an5(aa.slice())
    console.log("<font color='#CD7F32'>Test for: arr=[" + aa + "]</font>", "")
    assert.deepEqual(getLength(aa.slice()), answer1)
    assert.deepEqual(getFirst(aa.slice()), answer2)
    assert.deepEqual(getLast(aa.slice()), answer3)
    assert.deepEqual(pushElement(aa.slice()).length, answer4.length)
    assert.deepEqual(popElement(aa.slice()), answer5)
  }
})
