//+ ====================================================================================================================
//+
//+ 7 kyu - Broken sequence  [ ID: 5512e5662b34d88e44000060 ] (broken-sequence)
//+ URL: https://www.codewars.com/kata/5512e5662b34d88e44000060
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { findMissingNumber } = require("./brokenSequence")

describe("Basic tests", function () {
  assert.strictEqual(findMissingNumber("1 2 3 5"), 4, "It must work for missing middle terms")
  assert.strictEqual(findMissingNumber("1 3"), 2, "It must work for missing middle terms")
  assert.strictEqual(findMissingNumber("1 5"), 2, "It must work for missing more than one number")
  assert.strictEqual(findMissingNumber(""), 0, "It must return 0 for an empty sequence")
  assert.strictEqual(findMissingNumber("1 2 3 4 5"), 0, "It must return 0 if no number is missing")
  assert.strictEqual(
    findMissingNumber("2 3 4 5"),
    1,
    "It must return 1 for a sequence missing the first element"
  )
  assert.strictEqual(findMissingNumber("2 6 4 5 3"), 1, "It must work for a shuffled input")
  assert.strictEqual(findMissingNumber("_______"), 1, "It must return 1 for an invalid sequence")
  assert.strictEqual(findMissingNumber("2 1 4 3 a"), 1, "It must return 1 for an invalid sequence")
  assert.strictEqual(
    findMissingNumber("2 4 3 5"),
    1,
    "It must return 1 because the first number is missing"
  )
  assert.strictEqual(
    findMissingNumber(
      "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99 100 101 102"
    ),
    90,
    "It must return 90"
  )
})

describe("Random Tests", function () {
  function shuffle(o) {
    for (
      let j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o
  }
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
  function sol(sequence) {
    if (sequence != sequence.replace(/[^\d ]/, "")) return 1
    if (sequence == "") return 0
    sequence = sequence
      .split(" ")
      .map(function (n) {
        return parseInt(n, 10)
      })
      .sort(function (a, b) {
        return a - b
      })
    for (let i in sequence) {
      if (sequence[i] != +i + 1) return +i + 1
    }
    return 0
  }
  for (let _ = 0; _ < 40; _++) {
    const rangelen = randint(3, 30)
    let testarray = []
    for (let index = 1; index < rangelen; index++)
      testarray.push(index % 2 === 0 ? index : randint(index, 2) % 2 === 0 ? index : "a")
    testarray.splice(randint(0, rangelen - 1), 1)
    shuffle(testarray)
    it("Testing for [" + testarray + "]", function () {
      testarray = testarray.join(" ")
      assert.strictEqual(
        findMissingNumber(testarray),
        sol(testarray),
        "It should work for random tests too"
      )
    })
  }
})
