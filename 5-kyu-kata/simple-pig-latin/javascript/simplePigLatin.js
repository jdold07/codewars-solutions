// 5 kyu - Simple Pig Latin  [ ID: 520b9d2ad5c005041100000f  (simple-pig-latin) ]
// URL: https://www.codewars.com/kata/520b9d2ad5c005041100000f
// Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
// *****************************************************************************
function pigIt(str){
    return str.replace(/\b([A-z])([A-z]*)\b/g, "$2$1ay")
  }
