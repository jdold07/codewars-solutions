//+ ====================================================================================================================
//+
//+ 8 kyu - If you can't sleep, just count sheep!!  [ ID: 5b077ebdaf15be5c7f000077 ] (if-you-cant-sleep-just-count-sheep)
//+ URL: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { countSheep } from "./ifYouCantSleepJustCountSheep"

describe("Sample Test Cases", function () {
  it("Should return a string", function () {
    assert.equal(countSheep(0), "")
    assert.equal(countSheep(1), "1 sheep...")
    assert.equal(countSheep(2), "1 sheep...2 sheep...")
    assert.equal(countSheep(3), "1 sheep...2 sheep...3 sheep...")
  })

  it("Random Test Cases", function () {
    function example(num: number): string {
      let result = ""
      for (let i = 1; i <= num; i++) {
        result += i + " sheep..."
      }
      return result
    }

    for (let i = 0; i < 20; i++) {
      const x = Math.floor(Math.random() * 20) + 1
      assert.equal(countSheep(x), example(x), `Testing for num = ${x}`)
    }
  })
})
