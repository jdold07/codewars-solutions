// 7 kyu - Basic Sequence Practice  [ ID: 5436f26c4e3d6c40e5000282  (basic-sequence-practice) ]
// URL: https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const sumOfN = (n) => Array.from({ length: Math.abs(n) + 1 }, (_, i) => (i === 0 ? 0 : ((i * (i + 1)) / 2) * Math.sign(n)))
