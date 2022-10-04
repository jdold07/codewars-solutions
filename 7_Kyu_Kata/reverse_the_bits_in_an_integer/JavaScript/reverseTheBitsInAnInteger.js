// 7 kyu - Reverse the bits in an integer  [ ID: 5959ec605595565f5c00002b  (reverse-the-bits-in-an-integer) ]
// URL: https://www.codewars.com/kata/5959ec605595565f5c00002b
// Category: undefined  |  Tags: BITS | FUNDAMENTALS
// *****************************************************************************
const reverseBits = (n) => parseInt([...n.toString(2)].reverse().join(""), 2)
