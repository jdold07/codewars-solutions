// 7 kyu - Reverse Factorials  [ ID: 58067088c27998b119000451  (reverse-factorials) ]
// URL: https://www.codewars.com/kata/58067088c27998b119000451
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function reverseFactorial(num) {
      let factorial = 1
      while (num > 1 && num % 1 === 0) { 
          factorial += 1
          num = num / factorial
      }
      if (num === 1) {
          return `${factorial}!`
      }
      else {
          return "None"
      }
  }
