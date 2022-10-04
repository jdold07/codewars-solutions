// 7 kyu - Interview Question (easy)  [ ID: 5b358a1e228d316283001892  (interview-question-easy) ]
// URL: https://www.codewars.com/kata/5b358a1e228d316283001892
// Category: undefined  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const getStrings = (city) =>
    Object.entries([...city.toLowerCase().replace(/[^a-z]/g, "")].reduce((a, c) => ({ ...a, [c]: a[c] + 1 || 1 }), {}))
      .map(([k, v]) => `${k}:${"*".repeat(v)}`)
      .join(",")
