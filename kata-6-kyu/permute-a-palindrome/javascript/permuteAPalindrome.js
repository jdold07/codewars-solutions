//+ ====================================================================================================================
//+
//+ 6 kyu - Permute a Palindrome  [ ID: 58ae6ae22c3aaafc58000079 ] (permute-a-palindrome)
//+ URL: https://www.codewars.com/kata/58ae6ae22c3aaafc58000079
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function permuteAPalindrome(input) {
  return (
    [...input]
      .sort()
      .join("")
      .replace(/(\w)\1/g, "").length < 2
  )
}

module.exports = { permuteAPalindrome }
