// 7 kyu - Make Class  [ ID: 5d774cfde98179002a7cb3c8  (make-class) ]
// URL: https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
// *****************************************************************************
function makeClass(...keys) {
  return function (...values) {
    keys.forEach((key, i) => {
      this[key] = values[i]
    })
  }
}
