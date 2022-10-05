// 7 kyu - Initialize my name  [ ID: 5768a693a3205e1cc100071f  (initialize-my-name) ]
// URL: https://www.codewars.com/kata/5768a693a3205e1cc100071f
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const initializeNames = (name) =>
  (x = name.split(" ")).length > 2 ? x.map((v, i) => (i > 0 && i < x.length - 1 ? `${v[0]}.` : v)).join(" ") : name
