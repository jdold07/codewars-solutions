// 6 kyu - Reverse every other word in the string  [ ID: 58d76854024c72c3e20000de  (reverse-every-other-word-in-the-string) ]
// URL: https://www.codewars.com/kata/58d76854024c72c3e20000de
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const reverse = (str) =>
    str
      .split(" ")
      .reduce((a, c, i) => a + (i % 2 ? `${c.split("").reverse().join("")} ` : `${c} `), "")
      .trim()
