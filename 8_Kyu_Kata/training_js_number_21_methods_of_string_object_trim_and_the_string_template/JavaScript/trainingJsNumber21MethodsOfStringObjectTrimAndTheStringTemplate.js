// 8 kyu - Training JS #21: Methods of String object--trim() and the string template  [ ID: 5729b103dd8bac11a900119e  (training-js-number-21-methods-of-string-object-trim-and-the-string-template) ]
// URL: https://www.codewars.com/kata/5729b103dd8bac11a900119e
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const arrowFL = (s) => [...Array(5)].map((_, i) => s.trim().repeat(++i)).join("\n")

const forFL = (s) => {
  let res = ""
  for (i = 1; i < 6; i++) {
    res += `${s.trim().repeat(i)}\n`
  }
  return res.slice(0, -1)
}

const fiveLine = (s) => (Math.floor(Math.random() * 2) ? arrowFL(s) : forFL(s))
