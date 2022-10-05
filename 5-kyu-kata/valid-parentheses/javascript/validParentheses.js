// 5 kyu - Valid Parentheses  [ ID: 52774a314c2333f0a7000688  (valid-parentheses) ]
// URL: https://www.codewars.com/kata/52774a314c2333f0a7000688
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
function validParentheses(parens) {
  if (parens.length % 2 !== 0) return false
  while (/\(\)/g.test(parens)) parens = parens.replace(/\(\)/g, "")
  return parens.length == 0
}
