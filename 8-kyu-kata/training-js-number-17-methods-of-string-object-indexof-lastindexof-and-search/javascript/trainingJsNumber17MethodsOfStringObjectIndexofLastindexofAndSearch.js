// 8 kyu - Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()  [ ID: 57277a31e5e51450a4000010  (training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search) ]
// URL: https://www.codewars.com/kata/57277a31e5e51450a4000010
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const firstToLast = (str, c) => ((x = str.lastIndexOf(c)) !== -1 ? x - str.indexOf(c) : -1)
