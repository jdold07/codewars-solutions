// 7 kyu - Find the nth Digit of a Number  [ ID: 577b9960df78c19bca00007e  (find-the-nth-digit-of-a-number) ]
// URL: https://www.codewars.com/kata/577b9960df78c19bca00007e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const findDigit = (num, nth) => (nth < 1 ? -1 : +(("" + Math.abs(num)).slice(-nth, -nth + 1) || 0))