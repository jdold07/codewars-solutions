// 8 kyu - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009  (sum-mixed-array) ]
// URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
export function sumMix(x: any[]): number {
  return x.reduce((a, c) => a + +c, 0)
}
