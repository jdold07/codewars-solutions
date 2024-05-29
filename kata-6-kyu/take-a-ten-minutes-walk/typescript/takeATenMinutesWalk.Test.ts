//+ ====================================================================================================================
//+
//+ 6 kyu - Take a Ten Minutes Walk  [ ID: 54da539698b8a2ad76000228 ] (take-a-ten-minutes-walk)
//+ URL: https://www.codewars.com/kata/54da539698b8a2ad76000228
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { isValidWalk } from "./takeATenMinutesWalk"

const fail = [
  ["n"],
  ["n", "s"],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s", "e", "w", "n", "s", "e", "w"],
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"],
  ["e", "e", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "e", "n", "e", "n", "e", "n", "e", "n", "e"],
  ["n", "w", "n", "w", "n", "w", "n", "w", "n", "w"],
  ["e", "s", "e", "s", "e", "s", "e", "s", "e", "s"],
  ["w", "s", "w", "s", "w", "s", "w", "s", "w", "s"],
  ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s", "e", "w", "n", "s", "e", "w", "n", "s", "e", "w"]
]

const pass = [
  ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"],
  ["e", "w", "e", "w", "n", "s", "n", "s", "e", "w"],
  ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"]
]

describe("Walk Validator", function () {
  it("should return false if walk is too short", function () {
    assert.equal(isValidWalk(fail[0]), false)
    assert.equal(isValidWalk(fail[1]), false)
  })
  it("should return false if walk is too long", function () {
    assert.equal(isValidWalk(fail[2]), false)
    assert.equal(isValidWalk(fail[3]), false)
    assert.equal(isValidWalk(fail[10]), false)
  })
  it("should return false if walk does not bring you back to start", function () {
    assert.equal(isValidWalk(fail[4]), false)
    assert.equal(isValidWalk(fail[5]), false)
    assert.equal(isValidWalk(fail[6]), false)
    assert.equal(isValidWalk(fail[7]), false)
    assert.equal(isValidWalk(fail[8]), false)
    assert.equal(isValidWalk(fail[9]), false)
  })
  it("should return true for a valid walk", function () {
    assert.equal(isValidWalk(pass[0]), true)
    assert.equal(isValidWalk(pass[1]), true)
    assert.equal(isValidWalk(pass[2]), true)
  })
  it("should work for random tests", function () {
    function validate(walk: string[]): boolean {
      if (walk.length !== 10) {
        return false
      }
      let ns = 0,
        ew = 0
      for (const block of walk) {
        switch (block) {
          case "n":
            ns++
            break
          case "s":
            ns--
            break
          case "e":
            ew++
            break
          case "w":
            ew--
            break
        }
      }
      return ns === 0 && ew === 0
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function testcase(): any {
      const result = []
      const passes = Math.random() > 0.5
      if (passes) {
        const arr = Array.from(pass[Math.floor(Math.random() * pass.length)])
        for (let i = 10; i--; ) {
          if (Math.random() > 0.5) {
            result.push(arr.pop())
          } else {
            result.push(arr.shift())
          }
        }
      } else {
        for (let i = 10; i--; ) {
          result.push("news"[Math.floor(Math.random() * 4)])
        }
        if (validate(result)) result.push("news"[Math.floor(Math.random() * 4)])
      }
      return [result, passes]
    }
    for (let i = 100; i--; ) {
      const test = testcase()
      assert.equal(isValidWalk(test[0]), test[1])
    }
  })
})
