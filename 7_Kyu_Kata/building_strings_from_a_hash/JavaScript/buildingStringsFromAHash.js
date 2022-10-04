// 7 kyu - Building Strings From a Hash  [ ID: 51c7d8268a35b6b8b40002f2  (building-strings-from-a-hash) ]
// URL: https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const solution = (pairs) => [...Object.entries(pairs)].map(([k, v]) => (`${k} = ${v}`)).join(",")
