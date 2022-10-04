// 8 kyu - Abbreviate a Two Word Name  [ ID: 57eadb7ecd143f4c9c0000a3  (abbreviate-a-two-word-name) ]
// URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// Category: undefined  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const abbrevName = name => name.split(" ").map(el => el[0].toUpperCase()).join(".")
