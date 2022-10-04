// 6 kyu - Count characters in your string  [ ID: 52efefcbcdf57161d4000091  (count-characters-in-your-string) ]
// URL: https://www.codewars.com/kata/52efefcbcdf57161d4000091
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const count = (string) =>
  string.split("").reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1
    return obj
  }, {})
