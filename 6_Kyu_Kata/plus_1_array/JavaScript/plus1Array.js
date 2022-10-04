// 6 kyu - +1 Array  [ ID: 5514e5b77e6b2f38e0000ca9  (plus-1-array) ]
// URL: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
// Category: undefined  |  Tags: FUNDAMENTALS | ARRAYS | ALGORITHMS
// *****************************************************************************
function upArray(arr) {
  if (arr.reduce((a, b) => a + b, 0) <= 0 || arr.find((test) => test < 0 || test > 9 || !Number.isInteger(test))) {
    return null
  } else {
    let i = 1
    let n = 1
    arr.unshift(0)
    while (i === 1) {
      if (arr[arr.length - n] < 9) {
        i--
        arr[arr.length - n] = arr[arr.length - n] + 1
      } else {
        arr.splice(arr.length - n, 1, 0)
        n++
      }
    }
    if (arr[0] == 0) {
      arr.shift()
    }
    return arr
  }
}
