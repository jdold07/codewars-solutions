// 8 kyu - Training JS #8: Conditional statement--switch  [ ID: 572059afc2f4612825000d8a  (training-js-number-8-conditional-statement-switch) ]
// URL: https://www.codewars.com/kata/572059afc2f4612825000d8a
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
function howManydays(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    case 2:
      return 28
    default:
      return "What you talking?  That's not a month!"
  }
}
