// 8 kyu - Find Nearest square number  [ ID: 5a805d8cafa10f8b930005ba  (find-nearest-square-number) ]
// URL: https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const nearestSq = (n, y = 1) =>
    !(n ** 0.5 % 1) 
    ? n 
    : !((n - y) ** 0.5 % 1) 
    ? n - y 
    : !((n + y) ** 0.5 % 1) 
    ? n + y 
    : nearestSq(n, y + 1)
