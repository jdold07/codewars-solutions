// 8 kyu - Character Frequency  [ ID: 548ef5b7f33a646ea50000b2  (character-frequency-2) ]
// URL: https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
function cf(message) {
  let result = {}
  message.split("").forEach(function (letter) {
    result[letter] = result[letter] ? result[letter] + 1 : 1
  })
  return result
}

describe("Basic tests", function () {
  let basicTests = [
    "How can mirrors be real when our eyes aren't real?",
    "Everybody dance now!",
    "Can I haz cheezburger?",
    "Everybody do the flop!",
    "Io sono giovanni rana!",
    "It's-a me, Mario!",
    "The End ( of the line ) "
  ]
  basicTests.forEach(function (str) {
    console.info("Testing: ", str)
    Test.assertDeepEquals(charFreq(str), cf(str))
  })
  Test.expect(true)
})

describe("Random tests", function () {
  let str
  for (let i = 0; i < 100; i++) {
    str = Test.randomToken() + " " + Test.randomToken()
    console.info("Testing: ", str)
    Test.assertDeepEquals(charFreq(str), cf(str))
  }
})
