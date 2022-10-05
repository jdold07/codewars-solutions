// [object Object] - Greet Me  [ ID: 535474308bb336c9980006f2  (greet-me) ]
// URL: https://www.codewars.com/kata/535474308bb336c9980006f2
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const greet = name => `Hello ${name.charAt(0).toUpperCase()}${name.substr(1).toLowerCase()}!`
// *****************************************************************************
// *****************************************************************************
var greet = (name) => `Hello ${name.replace(/\w\S*/g, (nameStr) => nameStr.charAt(0).toUpperCase() + nameStr.substr(1).toLowerCase())}!`

