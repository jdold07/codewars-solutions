// 7 kyu - max diff - easy  [ ID: 588a3c3ef0fbc9c8e1000095  (max-diff-easy-1) ]
// URL: https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
// Category: undefined  |  Tags: MATHEMATICS | LISTS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const maxDiff = (list) => (list.length < 2 ? 0 : list.sort((a, b) => a - b).pop() - list[0])
