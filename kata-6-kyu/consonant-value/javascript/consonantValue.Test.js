//+ ====================================================================================================================
//+
//+ 6 kyu - Consonant value  [ ID: 59c633e7dcc4053512000073 ] (consonant-value)
//+ URL: https://www.codewars.com/kata/59c633e7dcc4053512000073
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { solve } = require("./consonantValue")

const _ = require("lodash")

it("Basic tests", function () {
  assert.strictEqual(solve("zodiac"), 26)
  assert.strictEqual(solve("chruschtschov"), 80)
  assert.strictEqual(solve("khrushchev"), 38)
  assert.strictEqual(solve("strength"), 57)
  assert.strictEqual(solve("catchphrase"), 73)
  assert.strictEqual(solve("twelfthstreet"), 103)
  assert.strictEqual(solve("mischtschenkoana"), 80)
  assert.strictEqual(solve("az"), 26)
})

it("Random tests", function () {
  for (let i = 0; i < 100; i++) {
    let r = _.random(300, 1000)
    let s = randomWord(r)
    assert.strictEqual(solve(s), solve51_YxM(s), "It should work for random inputs too")
  }
})

function solve51_YxM(s) {
  return Math.max(
    ...s
      .split(/[aeiou]+/)
      .filter((e) => e != "")
      .map((e) => e.split(""))
      .map((x) => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0))
  )
}

function randomWord(r) {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  let vowels = "aeiou",
    v = "",
    abc = ""
  for (let i = 0; i <= r; i++) {
    v += vowels[_.random(0, vowels.length - 1)]
    abc += letters[_.random(0, letters.length - 1)]
  }
  return (v + abc)
    .split("")
    .sort(function () {
      return 0.5 - Math.random()
    })
    .join("")
}
