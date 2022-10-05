// 6 kyu - Roman Numerals Decoder  [ ID: 51b6249c4612257ac0000005  (roman-numerals-decoder) ]
// URL: https://www.codewars.com/kata/51b6249c4612257ac0000005
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
function solution(romanString) {
  const roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
  let num = 0

  for (let i = 0; i < romanString.length; i++) {
    let current = roman[romanString[i]]
    let next = roman[romanString[i + 1]]
    current < next ? (num -= current) : (num += current)
  }
  return num
}
