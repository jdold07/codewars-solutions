// 7 kyu - Sum of Odd Cubed Numbers  [ ID: 580dda86c40fa6c45f00028a  (sum-of-odd-cubed-numbers) ]
// URL: https://www.codewars.com/kata/580dda86c40fa6c45f00028a
// Category: undefined  |  Tags: FUNDAMENTALS | FUNCTIONAL PROGRAMMING | ARRAYS
// *****************************************************************************
const cubeOdd = (arr) =>
  arr.filter((el) => (el == 0 ? true : parseInt(el))).length === arr.length
    ? arr.filter((el) => el % 2).reduce((a, b) => a + b ** 3, 0)
    : undefined
