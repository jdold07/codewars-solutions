// 5 kyu - Moving Zeros To The End  [ ID: 52597aa56021e91c93000cb0  (moving-zeros-to-the-end) ]
// URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Category: ALGORITHMS  |  Tags: ARRAYS | SORTING | ALGORITHMS
// *****************************************************************************
function moveZeros(arr) {
  const arrLength = arr.length
  arr = arr.filter((value) => value !== 0)
  while (arr.length !== arrLength) arr.push(0)
  return arr
}
