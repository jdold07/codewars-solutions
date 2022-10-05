// [object Object] - Basic Math (Add or Subtract)  [ ID: 5809b62808ad92e31b000031  (basic-math-add-or-subtract) ]
// URL: https://www.codewars.com/kata/5809b62808ad92e31b000031
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const calculate = (str) => `${eval(str.replace(/plus|minus/g, (x) => (x === "plus" ? "+" : "-")))}`
