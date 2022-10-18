//+ ====================================================================================================================
//+
//+ 7 kyu - Find min and max  [ ID: 57a1ae8c7cb1f31e4e000130 ] (find-min-and-max)
//+ URL: https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}

module.exports = { getMinMax }
