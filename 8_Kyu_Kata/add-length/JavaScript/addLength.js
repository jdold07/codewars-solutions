// [object Object] - Add Length  [ ID: 559d2284b5bb6799e9000047  (add-length) ]
// URL: https://www.codewars.com/kata/559d2284b5bb6799e9000047
// Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
// *****************************************************************************
const addLength = str => str.split(" ").map(word => `${word} ${word.length}`)
