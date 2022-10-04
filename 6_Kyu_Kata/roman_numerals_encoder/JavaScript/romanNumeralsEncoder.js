// 6 kyu - Roman Numerals Encoder  [ ID: 51b62bf6a9c58071c600001b  (roman-numerals-encoder) ]
// URL: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
// Category: undefined  |  Tags: ALGORITHMS
// *****************************************************************************
function solution(num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let str = ""

  for (let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i])
    num -= q * roman[i]
    str += i.repeat(q)
  }
  return str
}
