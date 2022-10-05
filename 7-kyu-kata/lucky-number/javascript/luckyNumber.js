// 7 kyu - lucky number  [ ID: 55afed09237df73343000042  (lucky-number) ]
// URL: https://www.codewars.com/kata/55afed09237df73343000042
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const isLucky = (n) => !n || !([...`${n}`].reduce((a,c)=>a + +c, 0) % 9)
