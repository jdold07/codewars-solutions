// 7 kyu - Testing 1-2-3  [ ID: 54bf85e3d5b56c7a05000cf9  (testing-1-2-3) ]
// URL: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const number = function (array) {
  if (array == 0) return []
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1 + ": " + array[i]
  }
  return array
}
