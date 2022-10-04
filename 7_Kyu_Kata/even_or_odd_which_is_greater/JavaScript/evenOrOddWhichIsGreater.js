// 7 kyu - Even or Odd - Which is Greater?  [ ID: 57f7b8271e3d9283300000b4  (even-or-odd-which-is-greater) ]
// URL: https://www.codewars.com/kata/57f7b8271e3d9283300000b4
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const sum = (nums) => (!nums || nums == -1 ? 0 : nums.reduce((a, c) => a + +c, 0))
  const evenOrOdd = (str) => sum(str.match(/[13579]/g)) - sum(str.match(/[2468]/g)) == 0
    ? "Even and Odd are the same"
    : sum(str.match(/[13579]/g)) - sum(str.match(/[2468]/g)) < 0
    ? "Even is greater than Odd"
    : "Odd is greater than Even"
