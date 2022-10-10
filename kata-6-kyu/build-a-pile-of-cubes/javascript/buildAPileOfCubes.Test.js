//+ ====================================================================================================================
//+
//+ 6 kyu - Build a pile of Cubes  [ ID: 5592e3bd57b64d00f3000047 ] (build-a-pile-of-cubes)
//+ URL: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
//+ Category: REFERENCE  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { findNb } = require("./buildAPileOfCubes")

describe("Basic tests", function () {
  assert.strictEqual(findNb(4183059834009), 2022)
  assert.strictEqual(findNb(24723578342962), -1)
  assert.strictEqual(findNb(135440716410000), 4824)
  assert.strictEqual(findNb(40539911473216), 3568)
  assert.strictEqual(findNb(26825883955641), 3218)
  assert.strictEqual(findNb(41364076483082), -1)

  assert.strictEqual(findNb(9541025211025), 2485)
  assert.strictEqual(findNb(112668204662785), -1)
  assert.strictEqual(findNb(79172108332642), -1)
  assert.strictEqual(findNb(1788719004901), -1)

  assert.strictEqual(findNb(20864367469009), 3022)
  assert.strictEqual(findNb(20864367469010), -1)

  assert.strictEqual(findNb(16), -1)
  assert.strictEqual(findNb(4), -1)
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function solution(m) {
    let limit = ~~(Math.sqrt(2) * Math.pow(m, 0.25) + 1)
    for (let i = 0; i <= limit; i++) {
      if (i * i * (i + 1) * (i + 1) == 4 * m) return i
    }
    return -1
  }
  for (let i = 0; i < 50; i++) {
    let p = randint(1, 5500)
    let k = (p * p * (p + 1) * (p + 1)) / 4 + randint(0, 1)
    console.log("Number: " + +k)
    it("Testing for : " + k, function () {
      assert.strictEqual(findNb(k), solution(k), "It should work with random inputs")
    })
    k = randint(1, 1000)
    it("Testing for : " + k, function () {
      assert.strictEqual(findNb(k), solution(k), "It should work with random inputs")
    })
  }
})
