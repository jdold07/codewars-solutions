//+ ====================================================================================================================
//+
//+ 8 kyu - Remove String Spaces  [ ID: 57eae20f5500ad98e50002c5 ] (remove-string-spaces)
//+ URL: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { noSpace } from "./removeStringSpaces"

describe("noSpace", function () {
  it("Basic tests", () => {
    assert.equal(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB")
    assert.equal(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"), "88Bifk8hB8BB8BBBB888chl8BhBfd")
    assert.equal(noSpace("8aaaaa dddd r     "), "8aaaaaddddr")
    assert.equal(noSpace("jfBm  gk lf8hg  88lbe8 "), "jfBmgklf8hg88lbe8")
    assert.equal(noSpace("8j aam"), "8jaam")
    assert.equal(noSpace(""), "")
  })

  it("Random tests", () => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[...Array(100)].forEach(() => {
      const randint = (a: number, b: number) => Math.floor(Math.random() * b + a)
      const mynoSpace = (x: string) => {
        const arr = x.split(" ")
        return arr.join("")
      }
      const chars: string[] = "abcdefghijklmnopqrstuvwxyz 0123456789     ".split("")
      const x: string[] = []
      for (let k = 0; k < randint(1, 30); k++) {
        x.push(chars[randint(0, chars.length - 1)])
      }
      const y: string = x.join("")
      assert.equal(noSpace(y), mynoSpace(y))
    })
  })
})
