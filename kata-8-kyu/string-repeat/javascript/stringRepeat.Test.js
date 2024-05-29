//+ ====================================================================================================================
//+
//+ 8 kyu - String repeat  [ ID: 57a0e5c372292dd76d000d7e ] (string-repeat)
//+ URL: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================


const { randomNumber, randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { repeatStr } = require("./stringRepeat")

const solution = (n, s) => Array.from({ length: n + 1 }).join(s)

describe("Tests", function () {
  it("Basic tests", function () {
    assert.deepEqual(repeatStr(3, "*"), "***")
    assert.deepEqual(repeatStr(5, "#"), "#####")
    assert.deepEqual(repeatStr(2, "ha "), "ha ha ")
    assert.deepEqual(repeatStr(5, ">"), ">>>>>")
    assert.deepEqual(repeatStr(10, "!"), "!!!!!!!!!!")
    assert.deepEqual(repeatStr(3, "hello "), "hello hello hello ")
    assert.deepEqual(repeatStr(3, "$"), "$$$")
    assert.deepEqual(repeatStr(5, "a"), "aaaaa")
    assert.deepEqual(repeatStr(6, "A"), "AAAAAA")
    assert.deepEqual(repeatStr(7, "aA"), "aAaAaAaAaAaAaA")
  })
  it("Random tests", function () {
    for (let i = 0; i < 10; i++) {
      let num = randomNumber()
      let s = randomToken()[0]
      assert.deepEqual(repeatStr(num, s), solution(num, s))
    }
  })
})


