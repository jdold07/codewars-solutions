// 6 kyu - Salesman's Travel  [ ID: 56af1a20509ce5b9b000001e  (salesmans-travel) ]
// URL: https://www.codewars.com/kata/56af1a20509ce5b9b000001e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const travel = (r, zip) =>
  [...r.matchAll(/(\d+)\s+([\w\s.]+)\s+([A-Z]{2}\s\d{5})/g)]
    .reduce((a, [_, num, st, zipC, ...__]) => (zipC === zip ? [a[0].concat(st), a[1].concat(num)] : [...a]), [[], []])
    .reduce((st, num) => `${zip}:${st.join(",")}/${num.join(",")}`)
// *****************************************************************************
// *****************************************************************************
const travel = (r, pCode) =>
  Array.from(r.matchAll(/(?<num>[\d]+)\s+(?<st>[\w\s\-.]+)\s(?<zip>[A-Z]{2}\s[\d]{5})/g))
    .reduce((a, [_, num, st, zip, ...__]) => (zip === pCode ? [a[0].concat(st), a[1].concat(num)] : [...a]), [[], []])
    .reduce((st, num) => `${pCode}:${st.join(",") || ""}/${num.join(",") || ""}`)
