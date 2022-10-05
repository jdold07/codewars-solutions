// [object Object] - Palindrome chain length  [ ID: 525f039017c7cd0e1a000a26  (palindrome-chain-length) ]
// URL: https://www.codewars.com/kata/525f039017c7cd0e1a000a26
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
const palindromeChainLength = (n, c = 0) =>
    n == [...n.toString()].reverse().join("") ? c : palindromeChainLength(n + +[...n.toString()].reverse().join(""), ++c)
