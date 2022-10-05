// 7 kyu - Balanced Number (Special Numbers Series #1 )   [ ID: 5a4e3782880385ba68000018  (balanced-number-special-numbers-series-number-1) ]
// URL: https://www.codewars.com/kata/5a4e3782880385ba68000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const balancedNum = (number) => {
  if (number < 100) return "Balanced"
  const numArr = number
    .toString()
    .split("")
    .map((el) => Number(el))
  const centre = numArr.length % 2 ? Math.floor(numArr.length / 2) : Math.floor(numArr.length / 2) - 1
  return numArr.slice(0, centre).reduce((a, b) => a + b) -
    numArr.slice(numArr.length % 2 ? centre + 1 : centre + 2).reduce((a, b) => a + b) ===
    0
    ? "Balanced"
    : "Not Balanced"
}
