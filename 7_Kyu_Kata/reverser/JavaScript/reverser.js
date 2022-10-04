// 7 kyu - Reverser  [ ID: 58069e4cf3c13ef3a6000168  (reverser) ]
// URL: https://www.codewars.com/kata/58069e4cf3c13ef3a6000168
// Category: undefined  |  Tags: RECURSION | FUNDAMENTALS
// *****************************************************************************
function reverse(n){
      let count, answer = 0
      for (i = n; i >= 1; i = i / 10 | 0) {
          count = i % 10
          answer = answer * 10 + count
      }
      return answer
  }
