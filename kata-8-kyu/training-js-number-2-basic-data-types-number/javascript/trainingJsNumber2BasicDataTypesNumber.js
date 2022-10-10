/* eslint-disable no-unused-vars */
//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #2:  Basic data types--Number  [ ID: 571edd157e8954bab500032d ] (training-js-number-2-basic-data-types-number)
//+ URL: https://www.codewars.com/kata/571edd157e8954bab500032d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250
function equal1() {
  let a = v1
  let b = v1
  return a + b
}
//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3 //set number value to a
  let b = v1 //set number value to b
  return a - b
}
function equal3() {
  let a = v5 //set number value to a
  let b = v1 //set number value to b
  return a * b
}
function equal4() {
  let a = v4 //set number value to a
  let b = v5 //set number value to b
  return a / b
}
function equal5() {
  let a = v2 //set number value to a
  let b = v4 //set number value to b
  return a % b
}

module.exports = { equal1, equal2, equal3, equal4, equal5 }
