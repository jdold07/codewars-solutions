// 7 kyu - Recursion #1 - Factorial  [ ID: 5694cb0ec554589633000036  (recursion-number-1-factorial) ]
// URL: https://www.codewars.com/kata/5694cb0ec554589633000036
// Category: undefined  |  Tags: FUNDAMENTALS | RECURSION | MATHEMATICS
// *****************************************************************************
const factorial = (n) => (n < 2 ? 1 : n * factorial(n - 1))
  
