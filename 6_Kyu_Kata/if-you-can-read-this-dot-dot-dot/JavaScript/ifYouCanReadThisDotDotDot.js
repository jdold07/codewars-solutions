// [object Object] - If you can read this...  [ ID: 586538146b56991861000293  (if-you-can-read-this-dot-dot-dot) ]
// URL: https://www.codewars.com/kata/586538146b56991861000293
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const to_nato = (words) => {
    return words
      .split(" ")
      .join("")
      .split("")
      .map((el) => (el.toLowerCase() in NATO ? NATO[el.toLowerCase()] : el))
      .join(" ")
  }
