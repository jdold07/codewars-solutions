// 7 kyu - Simple consecutive pairs  [ ID: 5a3e1319b6486ac96f000049  (simple-consecutive-pairs) ]
// URL: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const pairs = (ar, count = 0) => ar.length > 1 
    ? Math.abs(ar.shift() - ar.shift()) === 1 
      ? pairs(ar, count + 1) 
      : pairs(ar, count)
    : count
