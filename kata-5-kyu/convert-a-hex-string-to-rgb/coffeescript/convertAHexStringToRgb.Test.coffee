#+ =====================================================================================================================
#+
#+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
#+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
#+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
#+
#+ =====================================================================================================================

{ assert } = require "chai"
{ hexStringToRGB } = require "./convertAHexStringToRgb"

describe "Fixed Tests", ->
  it "Fixed Test Cases", ->
    assert.deepEqual hexStringToRGB("#FF9933"), r: 255, g: 153, b: 51
    assert.deepEqual hexStringToRGB("#beaded"), r: 190, g: 173, b: 237
    assert.deepEqual hexStringToRGB("#000000"), r: 0, g: 0, b: 0
    assert.deepEqual hexStringToRGB("#111111"), r: 17, g: 17, b: 17
    assert.deepEqual hexStringToRGB("#Fa3456"), r: 250, g: 52, b: 86

describe "Random Tests", ->
  reference = (hexString) ->
    hex = parseInt hexString.replace(/#/, ""), 16
    r: (hex >>> 16) & 255, g: (hex >>> 8) & 255, b: hex & 255

  getRandomString = ->
    s = "#"
    letters = "0123456789abcdefABCDEF"
    for x in [0...6]
      s += letters[Math.floor Math.random() * letters.length]
    return s

  it "Random Test Cases", ->
    for x in [0...100]
      s = getRandomString()
      assert.deepEqual hexStringToRGB(s), reference s
