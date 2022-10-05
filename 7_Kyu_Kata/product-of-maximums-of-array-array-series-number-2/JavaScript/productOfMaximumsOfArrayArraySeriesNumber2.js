// [object Object] - Product Of Maximums Of Array (Array Series #2)   [ ID: 5a63948acadebff56f000018  (product-of-maximums-of-array-array-series-number-2) ]
// URL: https://www.codewars.com/kata/5a63948acadebff56f000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const maxProduct = (nums, k) => nums.sort((a, b) => b - a).slice(0, k).reduce((a, c) => a * c)
