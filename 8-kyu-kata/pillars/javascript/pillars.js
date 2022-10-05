// 8 kyu - Pillars  [ ID: 5bb0c58f484fcd170700063d  (pillars) ]
// URL: https://www.codewars.com/kata/5bb0c58f484fcd170700063d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const pillars = (numPill, dist, width) => dist * 100 * (numPill - 1) + width * (numPill > 1 ? numPill - 2 : 0)
