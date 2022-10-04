// 8 kyu - Name on billboard  [ ID: 570e8ec4127ad143660001fd  (name-on-billboard) ]
// URL: https://www.codewars.com/kata/570e8ec4127ad143660001fd
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const billboard = (name, price = 30) => name.split("").map((el) => price).reduce((a, b) => a + b)
