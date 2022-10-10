/* eslint-disable regexp/no-super-linear-backtracking */
//+ ====================================================================================================================
//+
//+ 6 kyu - Salesman's Travel  [ ID: 56af1a20509ce5b9b000001e ] (salesmans-travel)
//+ URL: https://www.codewars.com/kata/56af1a20509ce5b9b000001e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const travel = (r, zip) =>
  [...r.matchAll(/(\d+)\s+([\w\s.]+)\s+([A-Z]{2}\s\d{5})/g)]
    .reduce((a, [, num, st, zipC]) => (zipC === zip ? [a[0].concat(st), a[1].concat(num)] : [...a]), [[], []])
    .reduce((st, num) => `${zip}:${st.join(",")}/${num.join(",")}`)

// =====================================================================================================================
// =====================================================================================================================

const travel2 = (r, pCode) =>
  Array.from(r.matchAll(/(?<num>\d+)\s+(?<st>[\w\s\-.]+)\s(?<zip>[A-Z]{2}\s\d{5})/g))
    .reduce((a, [, num, st, zip]) => (zip === pCode ? [a[0].concat(st), a[1].concat(num)] : [...a]), [[], []])
    .reduce((st, num) => `${pCode}:${st.join(",") || ""}/${num.join(",") || ""}`)

module.exports = { travel, travel2 }
