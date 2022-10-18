//+ ====================================================================================================================
//+
//+ 6 kyu - Array Deep Count  [ ID: 596f72bbe7cd7296d1000029 ] (array-deep-count)
//+ URL: https://www.codewars.com/kata/596f72bbe7cd7296d1000029
//+ Category: REFERENCE  |  Tags: ARRAYS | RECURSION | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { cloneDeep } = require("lodash")

function deepCount(a) {
  let elements = a.length
  let arr = cloneDeep(a)
  while (arr.some((v) => Array.isArray(v))) {
    arr = arr.filter((v) => Array.isArray(v))
    arr.forEach((v) => {
      elements += v.length
    })
    arr = arr.reduce((a, c) => [...a].concat(c), [])
  }
  return elements
}

module.exports = { deepCount }
