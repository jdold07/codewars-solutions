// [object Object] - I Will  Take the Biggest One and Nothing Else.  [ ID: 631082840289bf000e95a334  (i-will-take-the-biggest-one-and-nothing-else) ]
// URL: https://www.codewars.com/kata/631082840289bf000e95a334
// Category: REFERENCE  |  Tags: MATHEMATICS
// *****************************************************************************
const maxIntChain = (n) => n < 5 ? -1 : Math.floor(n / 2 + 1) * (n - Math.floor(n / 2 + 1))
