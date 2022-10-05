// 6 kyu - Are they the "same"?  [ ID: 550498447451fbbd7600041c  (are-they-the-same) ]
// URL: https://www.codewars.com/kata/550498447451fbbd7600041c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const comp = (array1, array2) =>
  !!array1 &&
  !!array2 &&
  array1
    .map((value) => value * value)
    .sort()
    .join() === array2.sort().join()
// *****************************************************************************
// *****************************************************************************
const comp = (array1, array2) =>
  array1 === null || array2 === null
    ? false
    : array1.length > 0 && array2.length > 0
    ? array2.map((value) => Math.sqrt(value)).reduce((a, b) => a + b) === array1.reduce((a, b) => a + b)
    : array1.length === 0 && array2.length === 0
    ? true
    : false
