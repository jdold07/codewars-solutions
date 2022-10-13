//+ ====================================================================================================================
//+
//+ 7 kyu - Limit string length - 1  [ ID: 5208fc3cb613bc725f000142 ] (limit-string-length-1)
//+ URL: https://www.codewars.com/kata/5208fc3cb613bc725f000142
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function solution(string, limit) {
  return string.replace(RegExp(`(?<=.{${limit}})(?=.+).*`), "...")
}

//+ ====================================================================================================================
//+ ====================================================================================================================

function solution2(string, limit) {
  return string.length === limit ? string : string.replace(RegExp(`(?<=.{${limit}}).*`), "...")
}

module.exports = { solution, solution2 }
