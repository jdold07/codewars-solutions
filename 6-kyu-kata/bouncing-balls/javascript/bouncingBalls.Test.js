// 6 kyu - Bouncing Balls  [ ID: 5544c7a5cb454edb3c000047  (bouncing-balls) ]
// URL: https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// Category: REFERENCE  |  Tags: PUZZLES | ALGORITHMS | MATHEMATICS
// *****************************************************************************
const assert = require("chai").assert
describe("Fixed tests", () => {
  const testcases = [
    [[2.0, 0.5, 1], 1],
    [[3.0, 0.66, 1.5], 3],
    [[30.0, 0.66, 1.5], 15],
    [[30, 0.75, 1.5], 21],
    [[30, 0.4, 10], 3],
    [[40, 0.4, 10], 3],
    [[10, 0.6, 10], -1],
    [[40, 1, 10], -1],
    [[-5, 0.66, 1.5], -1],
    [[5, -1, 1.5], -1],
    [[4.0, 0.25, 1], 1]
  ]
  for (const [[h, b, w], expected] of testcases) {
    it(`h = ${h}, bounce = ${b}, window = ${w}`, () => {
      assert.strictEqual(bouncingBall(h, b, w), expected)
    })
  }
})

describe("Random tests", () => {
  function bouncingBallTest(h, bounce, window) {
    if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) return -1
    let seen = -1
    while (h > window) {
      seen += 2
      h = h * bounce
    }
    return seen
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  const someheights = [
    12,
    10.5,
    144,
    233,
    15.25,
    61,
    98,
    15.9,
    25.8,
    41.8,
    67,
    109,
    17,
    28,
    46,
    7.5,
    12.2,
    19,
    3,
    5,
    83,
    13,
    21,
    35.5,
    57,
    92,
    14,
    24,
    39,
    6.5
  ]
  const someBounces = [
    0.6,
    0.6,
    0.6,
    0.6,
    0.6,
    1.1,
    9,
    1,
    0.6,
    0.6,
    0.6,
    0.75,
    0.75,
    0.75,
    0.75,
    0.75,
    12.2,
    0.75,
    0.75,
    0.83,
    0.13,
    0.21,
    0.35,
    0.57,
    0.9,
    0.14,
    0.24,
    0.39,
    0.65,
    0.65
  ]
  const somewin = [
    1.5,
    1.5,
    1.44,
    2.33,
    1,
    6.1,
    9.8,
    1.9,
    2.8,
    4.8,
    3,
    1.09,
    1.7,
    2.8,
    46,
    7.5,
    12.2,
    1.9,
    3,
    5,
    0.83,
    1.3,
    2.1,
    3.5,
    0.57,
    0.92,
    1.4,
    2.4,
    3.9,
    6.5
  ]
  it("random selected 10 tests", () => {
    for (let k = 0; k < 10; k++) {
      let rn = getRandomInt(29)

      let f1 = someheights[rn]
      let f2 = someBounces[rn]
      let f3 = somewin[rn]
      assert.strictEqual(bouncingBall(f1, f2, f3), bouncingBallTest(f1, f2, f3), `h = ${f1}, bounce = ${f2}, window = ${f3}`)
    }
  })
})
