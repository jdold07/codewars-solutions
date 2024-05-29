//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #2:  Basic data types--Number  [ ID: 571edd157e8954bab500032d ] (training-js-number-2-basic-data-types-number)
//+ URL: https://www.codewars.com/kata/571edd157e8954bab500032d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { equal1, equal2, equal3, equal4, equal5 } = require("./trainingJsNumber2BasicDataTypesNumber")
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250

function an21() {
  let a = v3 //set number value to a
  let b = v1 //set number value to b
  return a - b
}
function an22() {
  let a = v4 //set number value to a
  let b = v2 //set number value to b
  return a - b
}
function an23() {
  let a = v6 //set number value to a
  let b = v3 //set number value to b
  return a - b
}
function an3() {
  let a = v1 //set number value to a
  let b = v5 //set number value to b
  return a * b
}
function an4() {
  let a = v4 //set number value to a
  let b = v5 //set number value to b
  return a / b
}
function an51() {
  let a = v6 //set number value to a
  let b = v3 //set number value to b
  return a % b
}
function an52() {
  let a = v2 //set number value to a
  let b = v3 //set number value to b
  return a % b
}
function an53() {
  let a = v2 //set number value to a
  let b = v4 //set number value to b
  return a % b
}
function an54() {
  let a = v2 //set number value to a
  let b = v6 //set number value to b
  return a % b
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.strictEqual(equal1(), 100)
  assert.strictEqual(equal2(), 100)
  assert.strictEqual(equal3(), 100)
  assert.strictEqual(equal4(), 100)
  assert.strictEqual(equal5(), 100)
})

describe("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  it("<br><font size=4><b>When v1-v6 values is changed, function's return value should be changed too</b></font>", () => {
    for (let myjinxini = 0; myjinxini < 25; myjinxini++) {
      v1 = ~~(100 * Math.random()) + 1
      v2 = ~~(100 * Math.random()) + 1
      v3 = ~~(100 * Math.random()) + 1
      v4 = ~~(100 * Math.random()) + 1
      v5 = ~~(100 * Math.random()) + 1
      v6 = ~~(100 * Math.random()) + 1
      let ans21 = an21(),
        ans22 = an22(),
        ans23 = an23(),
        ans3 = an3(),
        ans4 = an4(),
        ans51 = an51(),
        ans52 = an52(),
        ans53 = an53(),
        ans54 = an54()
      if (equal2() == ans21 || equal2() == ans22 || equal2() == ans23) {
        assert.equal("Random Test" + (myjinxini * 4 + 1) + " Passed!", "Random Test" + (myjinxini * 4 + 1) + " Passed!")
        // } else {
        // assert.equal("Your function equal2 got a wrong answer, you should solve kata by use v1-v6", "Test Passed")
      }
      if (equal3() == ans3) {
        assert.equal("Random Test" + (myjinxini * 4 + 2) + " Passed!", "Random Test" + (myjinxini * 4 + 2) + " Passed!")
        // } else {
        // assert.equal("Your function equal3 got a wrong answer, you should solve kata by use v1-v6", "Test Passed")
      }
      if (equal4() == ans4) {
        assert.equal("Random Test" + (myjinxini * 4 + 3) + " Passed!", "Random Test" + (myjinxini * 4 + 3) + " Passed!")
        // } else {
        // assert.equal("Your function equal4 got a wrong answer, you should solve kata by use v1-v6", "Test Passed")
      }
      if (equal5() == ans51 || equal5() == ans52 || equal5() == ans53 || equal5() == ans54) {
        assert.equal("Random Test" + (myjinxini * 4 + 4) + " Passed!", "Random Test" + (myjinxini * 4 + 4) + " Passed!")
        // } else {
        // assert.equal("Your function equal5 got a wrong answer, you should solve kata by use v1-v6", "Test Passed")
      }
    }
  })
})
