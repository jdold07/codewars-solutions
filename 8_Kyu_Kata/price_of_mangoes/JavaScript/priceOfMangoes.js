// 8 kyu - Price of Mangoes  [ ID: 57a77726bb9944d000000b06  (price-of-mangoes) ]
// URL: https://www.codewars.com/kata/57a77726bb9944d000000b06
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const mango = (qty, price) => !(qty % 3) ? qty / 3 * 2 * price : (Math.floor(qty / 3) * 2 + qty % 3) * price
