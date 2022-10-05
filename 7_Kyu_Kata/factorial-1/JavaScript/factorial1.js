// [object Object] - Factorial  [ ID: 57a049e253ba33ac5e000212  (factorial-1) ]
// URL: https://www.codewars.com/kata/57a049e253ba33ac5e000212
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const factorial = (n) => [...Array(n + 1).keys()].slice(1).reduce((a,b) => a * b, 1)
