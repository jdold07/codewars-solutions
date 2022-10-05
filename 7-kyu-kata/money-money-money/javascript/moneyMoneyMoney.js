// 7 kyu - Money, Money, Money  [ ID: 563f037412e5ada593000114  (money-money-money) ]
// URL: https://www.codewars.com/kata/563f037412e5ada593000114
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired) {
      principal += principal * interest - (principal * interest * tax)
      years++
    }
    return years
  }
