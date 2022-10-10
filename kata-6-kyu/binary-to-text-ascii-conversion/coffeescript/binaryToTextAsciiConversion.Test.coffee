#+ =====================================================================================================================
#+
#+ 6 kyu - Binary to Text (ASCII) Conversion  [ ID: 5583d268479559400d000064 ] (binary-to-text-ascii-conversion)
#+ URL: https://www.codewars.com/kata/5583d268479559400d000064
#+ Category: REFERENCE  |  Tags: BINARY | STRINGS | FUNDAMENTALS
#+
#+ =====================================================================================================================

{ assert } = require "chai"
{ binaryToString } = require "./binaryToTextAsciiConversion"

assert.strictEqual binaryToString(""), "", "Must handle empty string"
assert.strictEqual binaryToString("0100100001100101011011000110110001101111"), "Hello", "Must handle basic works"
assert.strictEqual binaryToString("00110001001100000011000100110001"), "1011", "Must handle numeric characters"
assert.strictEqual(
  binaryToString(
    "0101001101110000011000010111001001101011011100110010000001100110011011000110010101110111001011100010111000100000011001010110110101101111011101000110100101101111011011100111001100100000011100100110000101101110001000000110100001101001011001110110100000100001"
  )
  "Sparks flew.. emotions ran high!"
  "Must handle special charaters"
)
assert.strictEqual(
  binaryToString(
    "0010000101000000001000110010010000100101010111100010011000101010001010000010100101010001010101110100010101110010011101000111100101010101010010010100111101001100011001000110011001100111011000100110001001101000011011100110110101001001010010110100001001001010010010110100100001001001010101010100111100101000001111110011111000111111001111000111111001111110011111100111111001111110001010010010100000101010001001100010010101011110001110010011100000110111001100010011001100101111001011010010111100101010001011010010101000101111"
  )
  "!@#$%^&*()QWErtyUIOLdfgbbhnmIKBJKHIUO(?>?<~~~~~)(*&%^98713/-/*-*/"
  "Must handle special charaters"
)

randomString = Math.random().toString 36
randomStringBinary = ""
i = 0
while i < randomString.length
  bin = randomString[i].charCodeAt(0).toString 2
  randomStringBinary += "00000000".slice(bin.length) + bin
  i++

assert.strictEqual binaryToString(randomStringBinary), randomString, "Must handle random string"
