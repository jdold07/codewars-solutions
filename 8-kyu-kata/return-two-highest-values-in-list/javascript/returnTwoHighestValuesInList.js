// 8 kyu - Return Two Highest Values in List  [ ID: 57ab3c09bb994429df000a4a  (return-two-highest-values-in-list) ]
// URL: https://www.codewars.com/kata/57ab3c09bb994429df000a4a
// Category: REFERENCE  |  Tags: FUNDAMENTALS | LISTS
// *****************************************************************************
const twoHighest = (arr) => [...new Set(arr)].sort((a, c) => c - a).slice(0, 2)
