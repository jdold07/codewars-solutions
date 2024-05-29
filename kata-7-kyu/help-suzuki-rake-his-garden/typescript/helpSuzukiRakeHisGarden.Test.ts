//+ ====================================================================================================================
//+
//+ 7 kyu - Help Suzuki rake his garden!  [ ID: 571c1e847beb0a8f8900153d ] (help-suzuki-rake-his-garden)
//+ URL: https://www.codewars.com/kata/571c1e847beb0a8f8900153d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
import { rakeGarden } from "./helpSuzukiRakeHisGarden"




describe("rakeGarden", function () {
  it("should work for sample (fixed) tests", function () {
    let garden1: string = "slug spider rock gravel gravel gravel gravel gravel gravel gravel"
    assert.strictEqual(rakeGarden(garden1), "gravel gravel rock gravel gravel gravel gravel gravel gravel gravel")
    let garden2: string =
      "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel"
    assert.strictEqual(
      rakeGarden(garden2),
      "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel"
    )
  })
  it("should work for corner cases (advanced fixed tests)", function () {
    assert.strictEqual(
      rakeGarden(
        "gravel rock gravel gravel gravel rockstar gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock rock rockstar rock gravel gravel"
      ),
      "gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock rock gravel rock gravel gravel"
    )
    assert.strictEqual(
      rakeGarden(
        "notgravel gravel notgravel gravel notgravel gravel notgravel gravel notgravel gravel rock rockstar notrock rock rock notrock gravel"
      ),
      "gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock rock gravel gravel"
    )
  })
  it("should work for random tests", function () {
    function sool(g: string): string {
      return g
        .split(" ")
        .map((i) => (i == "gravel" || i == "rock" ? i : "gravel"))
        .join(" ")
    }
    let possibleItems = [
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "gravel",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "rock",
      "slug",
      "ant",
      "moss",
      "snail",
      "spider",
      "rockstar",
      "notrock",
      "notgravel"
    ]
    for (let i = 0; i < 100; i++) {
      let randGarden: string
      let temparr = []
      for (let k = 0; k < 20; k++) {
        temparr.push(possibleItems[Math.floor(Math.random() * possibleItems.length)])
      }
      randGarden = temparr.join(" ")
      let expected = sool(randGarden)
      let actual = rakeGarden(randGarden)
      assert.strictEqual(actual, expected)
    }
  })
})


