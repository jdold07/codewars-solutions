// 7 kyu - Tidy Number (Special Numbers Series  #9)  [ ID: 5a87449ab1710171300000fd  (tidy-number-special-numbers-series-number-9) ]
// URL: https://www.codewars.com/kata/5a87449ab1710171300000fd
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
// *****************************************************************************
const tidyNumber = (n) => n == [...(""+n)].sort((a,b) => a - b).join("")
