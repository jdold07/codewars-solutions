// 6 kyu - Write Number in Expanded Form  [ ID: 5842df8ccbd22792a4000245  (write-number-in-expanded-form) ]
// URL: https://www.codewars.com/kata/5842df8ccbd22792a4000245
// Category: undefined  |  Tags: STRINGS | MATHEMATICS | ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
function expandedForm(num) {
  let arr = []
  num = num.toString()
  for (let i = num.length - 1, factor = 1; i >= 0; i--, factor *= 10) {
    if (num[i] * factor !== 0) arr.unshift(num[i] * factor)
  }
  return arr.join(" + ")
}
