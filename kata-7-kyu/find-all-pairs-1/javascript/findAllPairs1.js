//+ ====================================================================================================================
//+
//+ 7 kyu - Find all pairs  [ ID: 5c55ad8c9d76d41a62b4ede3 ] (find-all-pairs-1)
//+ URL: https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

function duplicates(array) {
  return ((array.sort((a, b) => a - b).join(",") + ",").match(/(\d+,)\1/g) || []).length
}

//+ ====================================================================================================================
//+ ====================================================================================================================

function duplicates2(array) {
  return [...new Set(array)]
    .map((v) => array.filter((v2) => v2 === v).length)
    .reduce((a, c) => a + (c > 1 ? Math.floor(c / 2) : 0), 0)
}

module.exports = { duplicates, duplicates2 }
