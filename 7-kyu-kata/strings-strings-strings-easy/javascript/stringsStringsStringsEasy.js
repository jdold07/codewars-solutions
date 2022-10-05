// 7 kyu - Strings, strings, strings (Easy)  [ ID: 56d6b921c9ae3fd926000601  (strings-strings-strings-easy) ]
// URL: https://www.codewars.com/kata/56d6b921c9ae3fd926000601
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
Boolean.prototype.toString = function () {
    return this + "" // `${this}`
  }
  Number.prototype.toString = function () {
    return this + "" // `${this}`
  }
  Object.prototype.toString = function () {
    return this + "" // `${this}`
  }
  Array.prototype.toString = function () {
    return "[" + this.join(",") + "]" // `${this}`
  }
