// 6 kyu - CamelCase Method  [ ID: 587731fda577b3d1b0001196  (camelcase-method) ]
// URL: https://www.codewars.com/kata/587731fda577b3d1b0001196
// Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS | STRINGS
// *****************************************************************************
String.prototype.camelCase = function () {
  if (this == 0) return ""
  return this.trim()
    .split(" ")
    .map((element) => element.replace(element[0], element[0].toUpperCase()))
    .join("")
}
