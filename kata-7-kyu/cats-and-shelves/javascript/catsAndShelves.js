//+ ====================================================================================================================
//+
//+ 7 kyu - Cats and shelves  [ ID: 62c93765cef6f10030dfa92b ] (cats-and-shelves)
//+ URL: https://www.codewars.com/kata/62c93765cef6f10030dfa92b
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function solution(start, finish) {
  return Math.floor((finish - start) / 3) + ((finish - start) % 3)
}

module.exports = { solution }
