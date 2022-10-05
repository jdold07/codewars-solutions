// 7 kyu - Bitty Words  [ ID: 5ace908a4d9fd1ed74000099  (bitty-words) ]
// URL: https://www.codewars.com/kata/5ace908a4d9fd1ed74000099
// Category: GAMES  |  Tags: STRINGS | BINARY | ALGORITHMS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const bittyWords = (words, bits) =>
    words
      .split(" ")
      .slice(-(x = bits.toString(2)).length)
      .filter((_, i) => +x[i])
      .join(" ")
