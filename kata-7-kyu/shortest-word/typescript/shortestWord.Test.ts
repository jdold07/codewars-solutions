//+ ====================================================================================================================
//+
//+ 7 kyu - Shortest Word  [ ID: 57cebe1dc6fdc20c57000ac9 ] (shortest-word)
//+ URL: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { findShort } from "./shortestWord"

describe("Test Cases", function () {
  it("Should work for Sample Test Cases", function () {
    assert.equal(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
    assert.equal(findShort("turns out random test cases are easier than writing out basic ones"), 3)
    assert.equal(findShort("lets talk about javascript the best language"), 3)
    assert.equal(findShort("i want to travel the world writing code one day"), 1)
    assert.equal(findShort("Lets all go on holiday somewhere very cold"), 2)
    assert.equal(findShort("Let's travel abroad shall we"), 2)
  })

  it("Should work for Random Test Cases", function () {
    function example(s: string): number {
      return Math.min(...s.split(" ").map((w) => w.length))
    }

    function makeWord(min: number, max: number): string {
      const array: string[] = []
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      const l: number = Math.ceil(Math.random() * max + min)

      for (let i = 0; i < l; i++) {
        array.push(possible[Math.floor(Math.random() * possible.length)])
      }
      return array.join("")
    }

    function makeStr(): string {
      const arrLen: number = Math.floor(Math.random() * 9) + 2
      const testArr: string[] = []
      for (let j = 0; j < arrLen; j++) {
        testArr.push(makeWord(5, 10))
      }
      return testArr.join(" ")
    }

    for (let i = 0; i < 20; i++) {
      const testStr: string = makeStr()
      assert.equal(findShort(testStr), example(testStr), `Testing for s = ${JSON.stringify(testStr)}`)
    }
  })
})
