// 8 kyu - Is it a number?  [ ID: 57126304cdbf63c6770012bd  (is-it-a-number) ]
// URL: https://www.codewars.com/kata/57126304cdbf63c6770012bd
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const isDigit = (s) => {
    console.log(s)
    return parseInt(s.trim()) === 0 ? true : Number(s.trim()) ? true : false
  }
