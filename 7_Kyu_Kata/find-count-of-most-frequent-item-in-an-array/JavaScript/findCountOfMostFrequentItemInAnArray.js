// [object Object] - Find Count of Most Frequent Item in an Array  [ ID: 56582133c932d8239900002e  (find-count-of-most-frequent-item-in-an-array) ]
// URL: https://www.codewars.com/kata/56582133c932d8239900002e
// Category: REFERENCE  |  Tags: DATA STRUCTURES | FUNDAMENTALS
// *****************************************************************************
const mostFrequentItemCount = (arr) =>
    !arr.length ? 0 : Math.max(...Object.values(arr.reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {})))
