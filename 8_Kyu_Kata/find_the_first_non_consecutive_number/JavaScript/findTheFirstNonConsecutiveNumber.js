// 8 kyu - Find the first non-consecutive number  [ ID: 58f8a3a27a5c28d92e000144  (find-the-first-non-consecutive-number) ]
// URL: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function firstNonConsecutive(arr) {
  return !arr || arr.filter((el, i) => el !== arr[i - 1] + 1).length < 2
    ? null
    : arr
        .filter((el, i) => el !== arr[i - 1] + 1)
        .slice(1, 2)
        .pop()
}
