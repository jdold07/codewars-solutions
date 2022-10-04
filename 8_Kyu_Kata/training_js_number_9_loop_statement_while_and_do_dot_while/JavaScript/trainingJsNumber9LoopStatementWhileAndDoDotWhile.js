// 8 kyu - Training JS #9: loop statement --while and do..while  [ ID: 57216d4bcdd71175d6000560  (training-js-number-9-loop-statement-while-and-do-dot-while) ]
// URL: https://www.codewars.com/kata/57216d4bcdd71175d6000560
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const padIt = (str, n) => {
  while (true) {
    return `${"*".repeat(Math.ceil(n / 2))}${str}${"*".repeat(Math.floor(n / 2))}`
  }
}
