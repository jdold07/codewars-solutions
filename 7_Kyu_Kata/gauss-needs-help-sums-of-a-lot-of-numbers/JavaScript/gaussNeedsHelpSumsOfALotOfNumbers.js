// [object Object] - Gauß needs help! (Sums  of a lot of numbers).  [ ID: 54df2067ecaa226eca000229  (gauss-needs-help-sums-of-a-lot-of-numbers) ]
// URL: https://www.codewars.com/kata/54df2067ecaa226eca000229
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | PERFORMANCE
// *****************************************************************************
const f = (n) => (parseInt(n) !== n || n < 1 ? false : (n * (n + 1)) / 2)
// *****************************************************************************
// *****************************************************************************
const f = (n) => (n % 1 || n < 1 ? false : isNaN(n) ? false : (n * (n + 1)) / 2)
  

