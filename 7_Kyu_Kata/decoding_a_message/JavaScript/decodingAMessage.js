// 7 kyu - Decoding a message  [ ID: 565b9d6f8139573819000056  (decoding-a-message) ]
// URL: https://www.codewars.com/kata/565b9d6f8139573819000056
// Category: undefined  |  Tags: PUZZLES | ALGORITHMS | CRYPTOGRAPHY | SECURITY | GAMES
// *****************************************************************************
const alpha = " abcdefghijklmnopqrstuvwxyz "
const ahpla = alpha.split("").reverse()
// const cypher = Object.fromEntries(alpha.split("").map((_, i) => [alpha[i], ahpla[i]]))
const cypher = Object.assign(...alpha.split("").map((k, i) => ({ [k]: ahpla[i] })))
const decode = (message) =>
  message
    .split("")
    .map((el) => cypher[el])
    .join("")
