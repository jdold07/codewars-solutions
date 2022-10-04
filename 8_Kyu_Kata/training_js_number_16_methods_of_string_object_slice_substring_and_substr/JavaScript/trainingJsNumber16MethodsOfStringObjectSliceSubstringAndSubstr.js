// 8 kyu - Training JS #16: Methods of String object--slice(), substring() and substr()  [ ID: 57274562c8dcebe77e001012  (training-js-number-16-methods-of-string-object-slice-substring-and-substr) ]
// URL: https://www.codewars.com/kata/57274562c8dcebe77e001012
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const cutIt = (arr) =>
  arr.map((v) =>
    v.slice(
      0,
      arr.reduce((a, c) => (c.length < a ? (a = c.length) : a), Infinity)
    )
  )
