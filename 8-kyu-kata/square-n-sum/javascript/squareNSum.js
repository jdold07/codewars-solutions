// 8 kyu - Square(n) Sum  [ ID: 515e271a311df0350d00000f  (square-n-sum) ]
// URL: https://www.codewars.com/kata/515e271a311df0350d00000f
// Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
// *****************************************************************************
const squareSum = numbers => numbers.reduce((a,b) => a + b ** 2, 0)
// *****************************************************************************
// *****************************************************************************
const squareSum = numbers => numbers.map(el => el ** 2).reduce((a,b) => a+b,0)

