//+ ====================================================================================================================
//+
//+ 8 kyu - Reversed Words  [ ID: 51c8991dee245d7ddf00000e ] (reversed-words)
//+ URL: https://www.codewars.com/kata/51c8991dee245d7ddf00000e
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

function reverseWords(str) {
  return str.split(" ").reverse().join(" ")
}


module.exports = { reverseWords }
