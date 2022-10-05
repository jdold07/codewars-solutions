// [object Object] - Your order,  please  [ ID: 55c45be3b2079eccff00010f  (your-order-please) ]
// URL: https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const order = words => words
          .split(" ")
          .sort((a,b) => a.match(/\d/) - b.match(/\d/))
          .join(" ")
