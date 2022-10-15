//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of positive  [ ID: 5715eaedb436cf5606000381 ] (sum-of-positive)
//+ URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function positiveSum(arr: number[]): number {
  return arr.reduce((a, c) => a + (c > 0 ? c : 0), 0)
}

export { positiveSum }
