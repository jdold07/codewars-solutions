// 7 kyu - Name That Number!  [ ID: 579ba41ce298a73aaa000255  (name-that-number) ]
// URL: https://www.codewars.com/kata/579ba41ce298a73aaa000255
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const nameThatNumber = (n) => {
  const word = (!unique?.[n] ? `${tens[Math.floor(n / 10)]} ${ones[n % 10]}` : unique?.[n]).trim()
  return word.startsWith("teen") ? word.split(" ").reverse().join("") : !word.length ? "zero" : word
}

const ones = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 0: "" }
const tens = {
  1: "teen",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
  0: ""
}
const unique = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 15: "fifteen", 18: "eighteen" }
