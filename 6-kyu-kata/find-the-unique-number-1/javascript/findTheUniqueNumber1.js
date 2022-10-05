// 6 kyu - Find the unique number  [ ID: 585d7d5adb20cf33cb000235  (find-the-unique-number-1) ]
// URL: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | ARRAYS
// *****************************************************************************
function findUniq(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i]
    }
  }
}
