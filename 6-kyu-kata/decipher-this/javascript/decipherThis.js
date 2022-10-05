// 6 kyu - Decipher this!   [ ID: 581e014b55f2c52bb00000f8  (decipher-this) ]
// URL: https://www.codewars.com/kata/581e014b55f2c52bb00000f8
// Category: REFERENCE  |  Tags: STRINGS | ARRAYS | CIPHERS | FUNDAMENTALS
// *****************************************************************************
function decipherThis(str) {
      word = str.replace(/\b(\d+)/g, (a) => String.fromCharCode(a))
      return word.replace(/\b(\w?)(\w?)(\w*?)(\w?)\b/g, `$1$4$3$2`)
  }
