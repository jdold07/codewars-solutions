// [object Object] - Nth Smallest Element (Array Series  #4)   [ ID: 5a512f6a80eba857280000fc  (nth-smallest-element-array-series-number-4) ]
// URL: https://www.codewars.com/kata/5a512f6a80eba857280000fc
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1]
