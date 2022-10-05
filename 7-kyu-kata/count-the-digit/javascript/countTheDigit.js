// 7 kyu - Count the Digit  [ ID: 566fc12495810954b1000030  (count-the-digit) ]
// URL: https://www.codewars.com/kata/566fc12495810954b1000030
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function nbDig(n, d) {
      let ans = Array(n + 1)
      .fill()
      .map((_,index) => index ** 2)
      .join("")
      .replace(new RegExp(`[^${d}]`,"g"), "")
      return ans.length
  }
