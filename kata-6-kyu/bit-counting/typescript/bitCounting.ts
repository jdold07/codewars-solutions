//+ ====================================================================================================================
//+
//+ 6 kyu - Bit Counting  [ ID: 526571aae218b8ee490006f4 ] (bit-counting)
//+ URL: https://www.codewars.com/kata/526571aae218b8ee490006f4
//+ Category: ALGORITHMS  |  Tags: BITS | ALGORITHMS
//+
//+ ====================================================================================================================

function countBits(n: number): number {
  return (n.toString(2).match(/1/g) || []).length
}

export { countBits }
