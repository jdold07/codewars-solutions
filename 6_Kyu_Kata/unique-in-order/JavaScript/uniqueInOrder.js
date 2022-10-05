// [object Object] - Unique In Order  [ ID: 54e6533c92449cc251001667  (unique-in-order) ]
// URL: https://www.codewars.com/kata/54e6533c92449cc251001667
// Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
const uniqueInOrder = iterable => {
      if (typeof iterable !== "string") {
          iterable = iterable.join("")
      }
      iterable = iterable
          .replace(/(.)\1+/g, "$1")
          .split("")
      if (iterable.length === 0 || iterable[0].match(/\D/)) return iterable
      return iterable.map(Number)
  }
