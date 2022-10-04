// 7 kyu - Parts of a list  [ ID: 56f3a1e899b386da78000732  (parts-of-a-list) ]
// URL: https://www.codewars.com/kata/56f3a1e899b386da78000732
// Category: undefined  |  Tags: ARRAYS | LISTS | DATA STRUCTURES | ALGORITHMS
// *****************************************************************************
const partlist = (arr) =>
    Array.from({ length: arr.length - 1 }, (_, i) => [arr.slice(0, ++i).join(" "), arr.slice(i).join(" ")])
// *****************************************************************************
// *****************************************************************************
const partlist = (arr) =>
    Array.from({ length: arr.length - 1 }, (_, i) => [arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")])

