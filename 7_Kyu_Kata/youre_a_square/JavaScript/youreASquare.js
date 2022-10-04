// 7 kyu - You're a square!  [ ID: 54c27a33fb7da0db0100040e  (youre-a-square) ]
// URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const isSquare = (n) => (n >= 0 ? !(n ** 0.5 % 1) : false)
// *****************************************************************************
// *****************************************************************************
const isSquare = (n) => Math.sqrt(n) % 1 === 0
