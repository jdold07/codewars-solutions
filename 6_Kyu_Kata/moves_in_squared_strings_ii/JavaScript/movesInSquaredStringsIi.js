// 6 kyu - Moves in squared strings (II)  [ ID: 56dbe7f113c2f63570000b86  (moves-in-squared-strings-ii) ]
// URL: https://www.codewars.com/kata/56dbe7f113c2f63570000b86
// Category: undefined  |  Tags: ALGORITHMS | STRINGS
// *****************************************************************************
const rot = (s) => s.reverse().map((v) => [...v].reverse().join(""))

const selfieAndRot = (s) => (x = s.map((v) => v + ".".repeat(v.length))).concat(rot([...x]))

const oper = (f, s) => f(s.split("\n")).join("\n")
