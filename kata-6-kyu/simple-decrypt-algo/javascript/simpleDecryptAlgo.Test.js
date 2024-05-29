//+ ====================================================================================================================
//+
//+ 6 kyu - Simple decrypt algo  [ ID: 58693136b98de0e4910001ab ] (simple-decrypt-algo)
//+ URL: https://www.codewars.com/kata/58693136b98de0e4910001ab
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { decrypt } = require("./simpleDecryptAlgo")

function generateRandomEncryption() {
  const length = 300

  const getRandomChar = randomCharGenerator()
  return Array.from({ length }, () => getRandomChar.next().value).join("")
}

describe("Solution", function () {
  it("should pass fixed tests", function () {
    assert.strictEqual(decrypt("$aaaa#bbb*ccfff!z"), "43200300000000000000000001")
    assert.strictEqual(decrypt("z$aaa#ccc%eee123456789"), "30303000000000000000000001")
  })

  it("should pass random tests", function () {
    const RND_TESTS = 100
    for (let i = 0; i < RND_TESTS; i++) {
      const randEncryption = generateRandomEncryption()
      assert.strictEqual(decrypt(randEncryption), solution(randEncryption))
    }
  })
})

function solution(encryption) {
  return [...encryption]
    .filter((c) => /[a-z]/.test(c))
    .map((c) => c.charCodeAt() - 97)
    .reduce(
      (acc, n) => {
        acc[n] += 1
        return acc
      },
      Array.from({ length: 26 }, () => 0)
    )
    .join("")
}

function* randomCharGenerator() {
  const lowercaseCount = {}

  while (true) {
    const randomChar = String.fromCharCode(Math.floor(Math.random() * (125 - 34)) + 33)
    if (/[a-z]/.test(randomChar) && lowercaseCount[randomChar] === 9) continue

    lowercaseCount[randomChar] = lowercaseCount[randomChar] + 1 || 1
    yield randomChar
  }
}
