// 6 kyu - Multiples of 3 or 5  [ ID: 514b92a657cdc65150000006  (multiples-of-3-or-5) ]
// URL: https://www.codewars.com/kata/514b92a657cdc65150000006
// Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
export class Challenge {
    static solution(n: number) {
      return n > 0 ? [...Array(n).keys()].reduce((a, c, i) => a + (!(i % 3) || !(i % 5) ? c : 0), 0) : 0
    }
  }
