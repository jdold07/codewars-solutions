// 7 kyu - Highest and Lowest  [ ID: 554b4ac871d6813a03000035  (highest-and-lowest) ]
// URL: https://www.codewars.com/kata/554b4ac871d6813a03000035
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
function highAndLow(numbers) {
  let newNumbers = numbers.split(" ").map(Number)
  return `${Math.max(...newNumbers)} ${Math.min(...newNumbers)}`
}
