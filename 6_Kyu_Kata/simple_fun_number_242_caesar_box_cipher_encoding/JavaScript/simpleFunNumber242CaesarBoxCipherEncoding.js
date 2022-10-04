// 6 kyu - Simple Fun #242: Caesar Box Cipher Encoding  [ ID: 590a853a093675b283000008  (simple-fun-number-242-caesar-box-cipher-encoding) ]
// URL: https://www.codewars.com/kata/590a853a093675b283000008
// Category: undefined  |  Tags: PUZZLES
// *****************************************************************************
const caesarBoxCipherEncoding = (message) =>
    Array.from({ length: message.length - 2 }, (_, i) => i + 2)
      .reduce((a, n) =>
        !(message.length % n) &&
        Array.from({ length: n }, (_, i2) =>
          [...Array.from({ length: n }, (_, i1) => [...message].filter((_, mI) => mI % n === i1).join("")).join("")]
            .filter((_, mI) => mI % n === i2)
            .join("")
        ).join("") === message ? [...a, "yepp!"] : a, []
      ).length
