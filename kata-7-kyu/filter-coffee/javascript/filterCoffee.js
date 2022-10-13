//+ ====================================================================================================================
//+
//+ 7 kyu - Filter Coffee  [ ID: 56069d0c4af7f633910000d3 ] (filter-coffee)
//+ URL: https://www.codewars.com/kata/56069d0c4af7f633910000d3
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function search(budget, prices) {
  return prices
    .filter((v) => v <= budget)
    .sort((a, b) => a - b)
    .join(",")
}

module.exports = { search }
