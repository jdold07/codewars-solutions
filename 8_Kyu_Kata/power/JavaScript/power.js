// 8 kyu - Power  [ ID: 562926c855ca9fdc4800005b  (power) ]
// URL: https://www.codewars.com/kata/562926c855ca9fdc4800005b
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const numberToPower = (num, pow, res = num) => (pow === 0 ? 1 : pow === 1 ? res : numberToPower(num, --pow, num * res))
  
