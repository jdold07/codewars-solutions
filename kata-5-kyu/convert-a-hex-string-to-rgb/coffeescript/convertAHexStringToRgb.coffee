#+ =====================================================================================================================
#+
#+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
#+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
#+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
#+
#+ =====================================================================================================================

hexStringToRGB = (hexString) ->
  res = r: parseInt(hexString.slice(1, 3), 16), g: parseInt(hexString.slice(3, 5), 16), b: parseInt hexString.slice(5), 16

module.exports = { hexStringToRGB }
