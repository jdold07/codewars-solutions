/* eslint-disable no-constant-condition */
//+ ====================================================================================================================
//+
//+ 6 kyu - Ball Upwards  [ ID: 566be96bb3174e155300001b ] (ball-upwards)
//+ URL: https://www.codewars.com/kata/566be96bb3174e155300001b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { maxBall } = require("./ballUpwards")

describe("maxBall", function () {
  it("Basic tests", function () {
    assert.strictEqual(maxBall(37), 10)
    assert.strictEqual(maxBall(45), 13)
    assert.strictEqual(maxBall(99), 28)
    assert.strictEqual(maxBall(85), 24)
    assert.strictEqual(maxBall(136), 39)
    assert.strictEqual(maxBall(52), 15)
    assert.strictEqual(maxBall(16), 5)
    assert.strictEqual(maxBall(127), 36)
    assert.strictEqual(maxBall(137), 39)
    assert.strictEqual(maxBall(14), 4)
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  //................
  function maxBallSol1209(v0) {
    let g = 9.81,
      mx = -1,
      t = 0,
      t1 = 0,
      v = (v0 * 1000) / 3600.0
    while (true) {
      let h = v * t - 0.5 * g * t * t
      if (h > mx) {
        mx = h
        t1 = t
      } else break
      t += 0.1
    }
    return Math.round(t1 * 10)
    // function could have directly returned : round(v0 / 3.5316)
  }
  //................

  for (let i = 0; i < 100; i++) {
    let n = randint(2, 250)
    it("Testing maxBall: ", function () {
      assert.strictEqual(maxBall(n), maxBallSol1209(n))
    })
  }
})
