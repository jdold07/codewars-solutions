// 8 kyu - Sort and Star  [ ID: 57cfdf34902f6ba3d300001e  (sort-and-star) ]
// URL: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
function twoSort(s) {
    return s.sort().shift().split("").join("***")
  }
