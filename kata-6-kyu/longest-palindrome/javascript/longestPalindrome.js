//+ ====================================================================================================================
//+
//+ 6 kyu - longest_palindrome  [ ID: 54bb6f887e5a80180900046b ] (longest-palindrome)
//+ URL: https://www.codewars.com/kata/54bb6f887e5a80180900046b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const longestPalindrome = (s) => {
  const checkIt = (i, j = s.length + 1) =>
    s.slice(i, j) === [...s.slice(i, j)].reverse().join("") ? s.slice(i, j).length : checkIt(i, --j) || ""
  return (s && Math.max(...[...s].map((_, i) => checkIt(i)))) || 0
}

module.exports = { longestPalindrome }
