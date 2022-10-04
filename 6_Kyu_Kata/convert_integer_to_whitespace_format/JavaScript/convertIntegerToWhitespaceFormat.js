// 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032  (convert-integer-to-whitespace-format) ]
// URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
// Category: undefined  |  Tags: BINARY | FUNDAMENTALS
// *****************************************************************************
const whitespaceNumber = (n) => `${n <= 0 ? "" : " "}${n.toString(2).replace(/./g, (v) => (v == "0" ? " " : "\t"))}\n`
