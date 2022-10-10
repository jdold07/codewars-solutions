//+ ====================================================================================================================
//+
//+ 7 kyu - Bitty Words  [ ID: 5ace908a4d9fd1ed74000099 ] (bitty-words)
//+ URL: https://www.codewars.com/kata/5ace908a4d9fd1ed74000099
//+ Category: GAMES  |  Tags: STRINGS | BINARY | ALGORITHMS | CIPHERS | CRYPTOGRAPHY
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { bittyWords } = require("./bittyWords")

it("Long live the king", () => {
  assert.strictEqual(bittyWords("Long live the king", 11), "Long the king")
  assert.strictEqual(bittyWords("Long live the king", 0), "")
  assert.strictEqual(bittyWords("Long live the king", 0b1111), "Long live the king")
})

it("So long", () => {
  assert.strictEqual(bittyWords("So long and thanks for all the fish", 42), "and for the")
  assert.strictEqual(bittyWords("So long and thanks for all the fish", 1), "fish")
  assert.strictEqual(bittyWords("So long and thanks for all the fish", 0b10000000), "So")
})

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const maxLength = 31
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(Math.pow(2, maxLength)))
}

function myBittyWords(words, bits) {
  const list = words.split(" ")
  const result = []
  const bitChecker = 1 << (list.length - 1)

  while (bits) {
    const word = list.shift()
    if (bits & bitChecker) {
      result.push(word)
    }
    bits = bits << 1
  }
  return result.join(" ")
}

it("53", () => {
  const words = Array.from(Array(maxLength)).map((_, i) => "" + i)
  Array.from(Array(20)).forEach(() => {
    const testWords = shuffle(words)
    const number = getRandomInt()
    assert.strictEqual(bittyWords(testWords.join(" "), number), myBittyWords(testWords.join(" "), number))
  })
})
