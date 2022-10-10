//+ ====================================================================================================================
//+
//+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
//+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
//+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const hexStringToRGB = (hexString) =>
  ["r", "g", "b"].reduce((a, c, i) => ({ ...a, [c]: parseInt(hexString.match(/.(..)(..)(..)/)[++i], 16) }), {})

module.exports = { hexStringToRGB }
