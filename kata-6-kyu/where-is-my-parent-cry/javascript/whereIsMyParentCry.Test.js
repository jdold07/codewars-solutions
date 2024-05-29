//+ ====================================================================================================================
//+
//+ 6 kyu - Where is my parent!?(cry)  [ ID: 58539230879867a8cd00011c ] (where-is-my-parent-cry)
//+ URL: https://www.codewars.com/kata/58539230879867a8cd00011c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findChildren } = require("./whereIsMyParentCry")

function doTest(input, expected) {
  const actual = findChildren(input)
  assert.strictEqual(actual, expected, `for "${input}"\n`)
}

describe("tests suite", function () {
  it("Some tests", function () {
    doTest("beeeEBb", "BbbEeee")
    doTest("uwwWUueEe", "EeeUuuWww")
    doTest("abBA", "AaBb")
    doTest("AaaaaZazzz", "AaaaaaZzzz")
    doTest("CbcBcbaA", "AaBbbCcc")
    doTest("xXfuUuuF", "FfUuuuXx")
  })

  it("Random tests", function () {
    let parents = new Array(26)
      .fill(".")
      .map((_, i) => String.fromCharCode(i + 65))

    for (let i = 0; i < 100; i++) {
      let shuffleParents = shuffleValues(parents)
      let amountOfParents = Math.ceil(Math.random() * 8)
      let randomParents = shuffleParents.slice(0, amountOfParents)
      let randomChildren = []
      for (let j = 0; j < randomParents.length; j++) {
        let childrenAmount = Math.ceil(Math.random() * 8)
        let child = randomParents[j].toLowerCase()
        randomChildren = randomChildren.concat(charXtimes(child, childrenAmount))
      }

      let mix = shuffleValues(randomParents.concat(randomChildren)).join("")

      doTest(mix, solution(mix))
    }
  })
})

function shuffleValues(array) {
  array = Array.from(array)
  let shuffeledArray = []

  while (array.length > 0) {
    let r = Math.round(Math.random() * (array.length - 1))

    shuffeledArray.push(array[r])
    array[r] = false

    array = array.filter((v) => v)
  }

  return shuffeledArray
}
function charXtimes(char, x) {
  return new Array(x).fill(char)
}

function solution(mix) {
  mix = mix
    .split("")
    .sort()
    .map(function (person, i, mix) {
      if (person == person.toUpperCase()) {
        let child = person.toLowerCase()

        return person.concat(mix.filter((p) => p == child).join(""))
      }
      return ""
    })
    .join("")

  return mix
}
