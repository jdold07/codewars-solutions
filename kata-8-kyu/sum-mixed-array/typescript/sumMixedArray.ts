//+ ====================================================================================================================
//+
//+ 8 kyu - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009 ] (sum-mixed-array)
//+ URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sumMix(x: any[]): number {
  return x.reduce((a, c) => a + +c, 0)
}

export { sumMix }
