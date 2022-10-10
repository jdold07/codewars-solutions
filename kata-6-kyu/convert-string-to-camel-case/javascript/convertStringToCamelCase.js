//+ ====================================================================================================================
//+
//+ 6 kyu - Convert string to camel case  [ ID: 517abf86da9663f1d2000003 ] (convert-string-to-camel-case)
//+ URL: https://www.codewars.com/kata/517abf86da9663f1d2000003
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS | STRINGS
//+
//+ ====================================================================================================================

function toCamelCase(str) {
  let arr = str.replace(/[-_]/g, " ").split(" ")
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
  }
  return arr.join("")
}

module.exports = { toCamelCase }
