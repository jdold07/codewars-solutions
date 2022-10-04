// 7 kyu - Disarium Number (Special Numbers Series  #3)  [ ID: 5a53a17bfd56cb9c14000003  (disarium-number-special-numbers-series-number-3) ]
// URL: https://www.codewars.com/kata/5a53a17bfd56cb9c14000003
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const disariumNumber = (n) => ([...("" + n)].reduce((a, c, i) => a + c ** (i + 1), 0) === n ? "Disarium !!" : "Not !!")
  
