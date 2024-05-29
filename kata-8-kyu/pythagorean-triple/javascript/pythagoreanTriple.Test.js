//+ ====================================================================================================================
//+
//+ 8 kyu - Pythagorean Triple  [ ID: 5951d30ce99cf2467e000013 ] (pythagorean-triple)
//+ URL: https://www.codewars.com/kata/5951d30ce99cf2467e000013
//+ Category: REFERENCE  |  Tags: ALGEBRA | MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { isPythagoreanTriple } = require("./pythagoreanTriple")

function referenceSol(integers) {
  let [a, b, c] = [...integers].sort((x, y) => x - y)
  let result = a ** 2 + b ** 2 === c ** 2
  return {
    result,
    description: `[${integers.join(", ")}] is${result ? "" : " not"} a Pythagorean triple`
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const testCases = [
  [3, 4, 5],
  [5, 12, 13],
  [6, 8, 10],
  [7, 24, 25],
  [8, 15, 17],
  [9, 12, 15],
  [9, 40, 41],
  [10, 24, 26],
  [12, 16, 20],
  [12, 16, 20],
  [14, 48, 50],
  [15, 20, 25],
  [15, 36, 39],
  [16, 30, 34],
  [18, 24, 30],
  [20, 21, 29],
  [21, 28, 35],
  [24, 32, 40],
  [27, 36, 45],
  [30, 40, 50],
  [70, 18, 8],
  [50, 19, 19],
  [44, 17, 15],
  [4, 54, 5],
  [33, 11, 24],
  [69, 11, 15],
  [77, 12, 27],
  [35, 39, 13],
  [90, 44, 18],
  [31, 8, 22],
  [22, 30, 7],
  [94, 16, 25],
  [84, 37, 18],
  [84, 19, 23],
  [9, 45, 21],
  [61, 18, 9],
  [93, 50, 25],
  [10, 21, 17],
  [65, 26, 3],
  [39, 31, 6],
  [72, 78, 30]
]

describe("Fixed test cases", function () {
  testCases.forEach((testCase) => {
    it(`Testing for [${testCase.join(", ")}]`, function () {
      let expected = referenceSol(testCase)
      assert.strictEqual(isPythagoreanTriple(testCase), expected.result, expected.description)
    })
  })
})

describe("Random test cases", function () {
  let randomTests = [].concat(
    ...testCases.map((test) => {
      return [
        ...Array.from({ length: 2 }, () => {
          const offset = randomNumber(1, 1001)
          return test.map((num) => num * offset).sort(() => Math.random() - 0.5)
        }),
        ...Array.from({ length: 2 }, () => {
          const offset = randomNumber(1, 1001)
          return test
            .map((num) => {
              let result = num * offset + randomNumber(-5, 6)
              result = result >= 0 ? result : 0
              return result
            })
            .sort(() => Math.random() - 0.5)
        })
      ]
    })
  )

  randomTests.sort(() => Math.random() - 0.5)

  randomTests.forEach((testCase) => {
    it(`Testing for [${testCase.join(", ")}]`, function () {
      let expected = referenceSol(testCase)
      assert.strictEqual(isPythagoreanTriple(testCase), expected.result, expected.description)
    })
  })
})
