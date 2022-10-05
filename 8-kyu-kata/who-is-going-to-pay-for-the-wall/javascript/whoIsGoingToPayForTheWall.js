// 8 kyu - Who is going to pay for the wall?  [ ID: 58bf9bd943fadb2a980000a7  (who-is-going-to-pay-for-the-wall) ]
// URL: https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const whoIsPaying = (name) => [name].concat(name.length < 3 ? [] : name.slice(0, 2))
