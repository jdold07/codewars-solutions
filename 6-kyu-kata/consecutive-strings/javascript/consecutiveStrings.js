// 6 kyu - Consecutive strings  [ ID: 56a5d994ac971f1ac500003e  (consecutive-strings) ]
// URL: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function longestConsec(strarr, k) {
      let previousAnswer = 0
      let answer
      k <= 0 || k > strarr.length ? answer :
          strarr.map((_, i) => (strarr.slice(i,i+k).join(""))).filter((value) => {
              if (value.length > previousAnswer) {
                  previousAnswer = value.length
                  answer = value
              }
          })
      return answer ? answer : ""
  }
