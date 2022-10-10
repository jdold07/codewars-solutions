//+ ====================================================================================================================
//+
//+ 7 kyu - Name That Number!  [ ID: 579ba41ce298a73aaa000255 ] (name-that-number)
//+ URL: https://www.codewars.com/kata/579ba41ce298a73aaa000255
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { nameThatNumber } = require("./nameThatNumber")

const words = [
  [90, "ninety"],
  [80, "eighty"],
  [70, "seventy"],
  [60, "sixty"],
  [50, "fifty"],
  [40, "forty"],
  [30, "thirty"],
  [20, "twenty"],
  [19, "nineteen"],
  [18, "eighteen"],
  [17, "seventeen"],
  [16, "sixteen"],
  [15, "fifteen"],
  [14, "fourteen"],
  [13, "thirteen"],
  [12, "twelve"],
  [11, "eleven"],
  [10, "ten"],
  [9, "nine"],
  [8, "eight"],
  [7, "seven"],
  [6, "six"],
  [5, "five"],
  [4, "four"],
  [3, "three"],
  [2, "two"],
  [1, "one"]
]

function solution(num) {
  let current = null
  let quo = null
  let wordValue = null
  let result = []
  for (let i = 0; i < words.length; i++) {
    current = words[i]
    wordValue = current[0]
    quo = Math.floor(num / wordValue)
    num %= wordValue
    if (quo) result.push(current[1])
  }
  return result.join(" ") || "zero"
}

describe("Basic Tests", function () {
  it("1", function () {
    assert.strictEqual(nameThatNumber(1), "one")
  })
  it("52", function () {
    assert.strictEqual(nameThatNumber(52), "fifty two")
  })
  it("21", function () {
    assert.strictEqual(nameThatNumber(21), "twenty one")
  })
  it("99", function () {
    assert.strictEqual(nameThatNumber(99), "ninety nine")
  })
  it("0", function () {
    assert.strictEqual(nameThatNumber(0), "zero")
  })
  it("53", function () {
    assert.strictEqual(nameThatNumber(53), "fifty three")
  })
  it("23", function () {
    assert.strictEqual(nameThatNumber(23), "twenty three")
  })
  it("76", function () {
    assert.strictEqual(nameThatNumber(76), "seventy six")
  })
})

describe("Random Tests", function () {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  const arr = [...Array(100).keys()]

  shuffleArray(arr)

  for (let i of arr) {
    it(`${i}`, function () {
      assert.strictEqual(nameThatNumber(i), solution(i))
    })
  }
})
