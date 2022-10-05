// 7 kyu - Exes and Ohs  [ ID: 55908aad6620c066bc00002a  (exes-and-ohs) ]
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const XO = (str) => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length
// *****************************************************************************
// *****************************************************************************
function XO(str) {
      let lowerXO = str.toLowerCase()
      let xCount = (lowerXO.match(/x/g) || []).length
      let oCount = (lowerXO.match(/o/g) || []).length
      return xCount === oCount
  }

