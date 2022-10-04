// 7 kyu - Sort Out The Men  From Boys   [ ID: 5af15a37de4c7f223e00012d  (sort-out-the-men-from-boys-1) ]
// URL: https://www.codewars.com/kata/5af15a37de4c7f223e00012d
// Category: undefined  |  Tags: FUNDAMENTALS | ALGORITHMS | SORTING
// *****************************************************************************
const menFromBoys = (arr) => [...new Set(arr)]
    .filter(el => !(el % 2))
    .sort((a,b) => a - b)
    .concat([...new Set(arr)]
      .filter(el => el % 2)
      .sort((a,b) => b - a)
    )
