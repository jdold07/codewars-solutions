//+ ====================================================================================================================
//+
//+ 7 kyu - All Star Code Challenge #3  [ ID: 58640340b3a675d9a70000b9 ] (all-star-code-challenge-number-3)
//+ URL: https://www.codewars.com/kata/58640340b3a675d9a70000b9
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { removeVowels } = require("./allStarCodeChallengeNumber3")

let mySol = function (str) {
  let vowels = ["a", "e", "i", "o", "u"]

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1
    })
    .join("")
}

let random = function (num) {
  //returns a random integer from 0 - num
  return Math.floor(Math.random() * num)
}

let randWord = function () {
  //returns a string of randomly generated letters of random length
  let output = ""
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]
  let length = random(9) + 1
  while (length > 0) {
    output = output + letters[random(letters.length)]
    length--
  }
  return output
}

let randSentence = function () {
  //returns a string of randomly generated words of a random length
  let output = []
  let length = random(9) + 1
  while (length > 0) {
    output.push(randWord())
    length--
  }
  return output.join(" ")
}

describe("testing removeVowels()", function () {
  it("should handle example test cases", function () {
    assert.strictEqual(removeVowels("drake"), "drk")
    assert.strictEqual(removeVowels("aeiou"), "")
  })

  it("should properly handle random cases", function () {
    let input, answer, output
    let counter = 30
    while (counter > 0) {
      input = randSentence()
      answer = mySol(input)
      output = removeVowels(input)
      counter--
      assert.strictEqual(output, answer, "did not properly remove vowels")
    }
  })
})
