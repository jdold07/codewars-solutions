//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of differences in array  [ ID: 5b73fe9fb3d9776fbf00009e ] (sum-of-differences-in-array)
//+ URL: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function sumOfDifferences(arr: number[]): number {
  const arr2 = arr.sort((a, b) => b - a)
  return arr2.slice(1, -1).reduce((a, c, i) => a + (c - arr2[i + 2]), arr2[0] - arr2[1]) || 0
}

export { sumOfDifferences }
