//+ ====================================================================================================================
//+
//+ 7 kyu - Can you count loop's execution?  [ ID: 633bbba75882f6004f9dae4c ] (can-you-count-loops-execution)
//+ URL: https://www.codewars.com/kata/633bbba75882f6004f9dae4c
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { countLoopIterations } = require("./canYouCountLoopsExecution")

describe("Can you count loop's iteration?", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      countLoopIterations([
        [4n, true],
        [5n, false],
        [3n, true]
      ]),
      [6n, 30n, 125n]
    )
    assert.deepEqual(
      countLoopIterations([
        [16n, false],
        [11n, false],
        [1n, true],
        [3n, false],
        [8n, true],
        [10n, true],
        [9n, false],
        [11n, true],
        [20n, true],
        [3n, false],
        [7n, false]
      ]),
      [17n, 192n, 528n, 1408n, 10560n, 114048n, 1045440n, 12231648n, 248396544n, 948423168n, 5690539008n]
    )
    assert.deepEqual(countLoopIterations([]), [])
    assert.deepEqual(countLoopIterations([[20n, false]]), [21n])
  })

  it("Random tests", () => {
    function format(arr) {
      return `[${arr.map(([n, b]) => `[${n}n, ${b}]`).join(", ")}]`
    }

    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function sol(arr) {
      return arr.map(
        ([v1, inc1], i) =>
          arr.slice(0, i).reduce((a, [v2, inc2]) => a * (v2 + (inc2 ? 1n : 0n)), 1n) * (v1 + (inc1 ? 1n : 0n) + 1n)
      )
    }

    for (let i = 0; i < 100; i++) {
      let arr = Array.from({ length: randint(0, 20) }, (_, i) => [BigInt(randint(1, 20)), randint(0, 1) ? true : false])
      let expected = sol(arr)
      assert.deepEqual(countLoopIterations(arr), expected, `Testing for arr = ${format(arr)}`)
    }
  })
})
