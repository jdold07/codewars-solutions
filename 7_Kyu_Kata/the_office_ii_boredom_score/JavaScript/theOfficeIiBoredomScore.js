// 7 kyu - The Office II - Boredom Score  [ ID: 57ed4cef7b45ef8774000014  (the-office-ii-boredom-score) ]
// URL: https://www.codewars.com/kata/57ed4cef7b45ef8774000014
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const boredom = (staff) =>
  (x = [...Object.entries(staff)].reduce((a, [_, c]) => a + DEPT[c], 0)) <= 80
    ? "kill me now"
    : x < 100
    ? "i can handle this"
    : "party time!!"
const DEPT = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25
}
