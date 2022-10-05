// [object Object] - Bit Counting  [ ID: 526571aae218b8ee490006f4  (bit-counting) ]
// URL: https://www.codewars.com/kata/526571aae218b8ee490006f4
// Category: ALGORITHMS  |  Tags: BITS | ALGORITHMS
// *****************************************************************************
const countBits = n => n
      .toString(2)
      .split("")
      .reduce((a,b) => +a + +b, 0)
