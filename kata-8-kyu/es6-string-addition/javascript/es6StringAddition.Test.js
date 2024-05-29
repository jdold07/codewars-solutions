//+ ====================================================================================================================
//+
//+ 8 kyu - ES6 string addition  [ ID: 582e4c3406e37fcc770001ad ] (es6-string-addition)
//+ URL: https://www.codewars.com/kata/582e4c3406e37fcc770001ad
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { joinStrings } = require("./es6StringAddition")

describe("add", () => {
  it("should work for fixed tests", () => {
    assert.strictEqual(joinStrings("string1", "string2"), "string1 string2")
    assert.strictEqual(joinStrings("testing", "testing"), "testing testing")
    assert.strictEqual(joinStrings(134, 234), "134 234")
    assert.strictEqual(joinStrings("a,", "b"), "a, b")
  })
  it("should work for random tests as well", () => {
    function joinStrings2(string1, string2) {
      return `${string1} ${string2}`
    }
    for (let i = 0; i < 100; i++) {
      let randomNum = Math.floor(Math.random() * (Math.random() * 1000))
      let testOptions = [
        "string1",
        "string2",
        "string3",
        "string4",
        "string5",
        "string6",
        "string7",
        randomNum,
        randomNum,
        "STRING11",
        "5tring"
      ]
      let string1 = testOptions[Math.floor(Math.random() * 11)]
      let string2 = testOptions[Math.floor(Math.random() * 11)]
      assert.strictEqual(joinStrings(string1, string2), joinStrings2(string1, string2))
    }
  })
  it("Testing that the '+' operator, String.concat and Array.join() are not used", () => {
    const fs = require("fs")
    const usercode = fs
      .readFileSync("kata-8-kyu/es6-string-addition/javascript/es6StringAddition.js", "utf8")
      .replace(/^\/\/.*$/gm, "")
    assert.strictEqual(joinStrings.toString().includes("+"), false, "You cannot use the '+' operator")
    assert.strictEqual(joinStrings.toString().includes("concat"), false, "You cannot use the String.concat() method ")
    assert.strictEqual(joinStrings.toString().includes("join("), false, "You cannot use the Array.join() method ")

    assert.strictEqual(
      usercode.toString().includes("+"),
      false,
      "You cannot use the '+' operator, even outside of the joinString function!"
    )
    assert.strictEqual(
      usercode.toString().includes("concat"),
      false,
      "You cannot use the String.concat() method, even outside of the joinString function!"
    )
    assert.strictEqual(
      usercode.toString().includes("join("),
      false,
      "You cannot use the Array.join() method, even outside of the joinString function!"
    )
    assert.strictEqual(usercode.toString().includes("lodash"), false, "No cheating! You cannot use lodash!!")
  })
})
