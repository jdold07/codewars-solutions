// 7 kyu - Simple remove duplicates  [ ID: 5ba38ba180824a86850000f7  (simple-remove-duplicates) ]
// URL: https://www.codewars.com/kata/5ba38ba180824a86850000f7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const solve = (arr) => arr.filter((el, i) => !arr.slice(i + 1).some((e) => e === el))
