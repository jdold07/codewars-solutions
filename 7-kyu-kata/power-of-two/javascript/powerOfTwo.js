// 7 kyu - Power of two  [ ID: 534d0a229345375d520006a0  (power-of-two) ]
// URL: https://www.codewars.com/kata/534d0a229345375d520006a0
// Category: REFERENCE  |  Tags: MATHEMATICS | ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
const isPowerOfTwo = (n) => (n < 1 ? false : n === 2 || n === 1 ? true : isPowerOfTwo(n / 2))
// *****************************************************************************
// *****************************************************************************
const isPowerOfTwo = (n) => (n === 0 ? false : n === 1 ? true : isPowerOfTwo(n / 2))
