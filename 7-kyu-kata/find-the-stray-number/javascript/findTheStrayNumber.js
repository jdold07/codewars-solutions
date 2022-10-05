// 7 kyu - Find the stray number  [ ID: 57f609022f4d534f05000024  (find-the-stray-number) ]
// URL: https://www.codewars.com/kata/57f609022f4d534f05000024
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
function stray(numbers) {
    for (i = 0; i < numbers.length; i++){
      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
          return (numbers[i])
      }
  }
  }
