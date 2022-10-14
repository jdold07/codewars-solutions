//+ ====================================================================================================================
//+
//+ 7 kyu - Last  [ ID: 541629460b198da04e000bb9 ] (last)
//+ URL: https://www.codewars.com/kata/541629460b198da04e000bb9
//+ Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function last(...list) {
  return list.length > 1 ? list.pop() : list[0][list[0].length - 1] || list[0]
}

module.exports = { last }
