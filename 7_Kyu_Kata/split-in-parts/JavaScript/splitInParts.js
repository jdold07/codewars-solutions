// [object Object] - Split In Parts  [ ID: 5650ab06d11d675371000003  (split-in-parts) ]
// URL: https://www.codewars.com/kata/5650ab06d11d675371000003
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const splitInParts = (s, partLength) => {
    const re = new RegExp("(\\S{" + partLength + "})", "g")
    return s.replace(re, "$1 ").trim()
  }
