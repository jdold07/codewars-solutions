// 6 kyu - Split Strings  [ ID: 515de9ae9dcfc28eb6000001  (split-strings) ]
// URL: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | STRINGS | ALGORITHMS
// *****************************************************************************
function solution(str) {
  if (str.length % 2 !== 0) str += "_"
  return str.match(/.{2}/g) || []
}
// *****************************************************************************
// *****************************************************************************
function solution(str) {
  let ans = []
  if (str.length % 2 !== 0) str += "_"
  for (i = 0; i < str.length; i += 2) ans.push(str.substr(i, 2))
  return ans
}
