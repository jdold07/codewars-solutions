// 7 kyu - Consecutive items  [ ID: 5f6d533e1475f30001e47514  (consecutive-items) ]
// URL: https://www.codewars.com/kata/5f6d533e1475f30001e47514
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const consecutive = (arr, a, b) => arr.filter((v, i) => a === v && (b === arr[i - 1] || b === arr[i + 1])).length > 0
