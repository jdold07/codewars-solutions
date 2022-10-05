// 8 kyu - Cat years, Dog years  [ ID: 5a6663e9fd56cb5ab800008b  (cat-years-dog-years) ]
// URL: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
let humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15]
  if (humanYears === 2) return [2, 24, 24]
  let arr = []
  arr.push(humanYears)
  arr.push((humanYears - 2) * 4 + 24)
  arr.push((humanYears - 2) * 5 + 24)
  return arr
}
