// 8 kyu - Sum Arrays  [ ID: 53dc54212259ed3d4f00071c  (sum-arrays) ]
// URL: https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const sum = (n) => (!n || n.length == 0 ? 0 : n.reduce((a, b) => a + b, 0))
