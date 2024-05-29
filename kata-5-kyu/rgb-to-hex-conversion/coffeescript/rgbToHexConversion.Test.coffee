#+ =====================================================================================================================
#+
#+ 5 kyu - RGB To Hex Conversion  [ ID: 513e08acc600c94f01000001 ] (rgb-to-hex-conversion)
#+ URL: https://www.codewars.com/kata/513e08acc600c94f01000001
#+ Category: ALGORITHMS  |  Tags: ALGORITHMS
#+
#+ =====================================================================================================================

{ assert } = require "vitest"
{ rgb } = require "./rgbToHexConversion"

check = (values, expected) ->
  actual = rgb.apply null, values
  expect actual == expected, "Expected rgb(" + values + ") to return '" + expected + "' but instead got '" + actual + "'"

check [0, 0, 0], "000000"
check [0, 0, -20], "000000"
check [300, 255, 255], "FFFFFF"
check [173, 255, 47], "ADFF2F"
