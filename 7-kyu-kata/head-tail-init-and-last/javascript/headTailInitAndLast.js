// 7 kyu - Head, Tail, Init and Last  [ ID: 54592a5052756d5c5d0009c3  (head-tail-init-and-last) ]
// URL: https://www.codewars.com/kata/54592a5052756d5c5d0009c3
// Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
// *****************************************************************************
const head = (prop) => prop[0]
const tail = (prop) => prop.slice(1)
const init = (prop) => prop.slice(0, -1)
const last = (prop) => prop[prop.length - 1]
