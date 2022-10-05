// 8 kyu - Remove String Spaces  [ ID: 57eae20f5500ad98e50002c5  (remove-string-spaces) ]
// URL: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
import solution = require("./solution")
import { assert } from "chai"

describe("noSpace", function () {
  it("Basic tests", () => {
    assert.equal(solution.noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB")
    assert.equal(solution.noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"), "88Bifk8hB8BB8BBBB888chl8BhBfd")
    assert.equal(solution.noSpace("8aaaaa dddd r     "), "8aaaaaddddr")
    assert.equal(solution.noSpace("jfBm  gk lf8hg  88lbe8 "), "jfBmgklf8hg88lbe8")
    assert.equal(solution.noSpace("8j aam"), "8jaam")
    assert.equal(solution.noSpace(""), "")
  })

  it("Random tests", () => {
    ;[...Array(100)].forEach((e) => {
      const randint = (a: number, b: number) => Math.floor(Math.random() * b + a)
      const mynoSpace = (x: string) => {
        let arr = x.split(" ")
        return arr.join("")
      }
      let chars: string[] = "abcdefghijklmnopqrstuvwxyz 0123456789     ".split("")
      let x: string[] = []
      for (let k: number = 0; k < randint(1, 30); k++) {
        x.push(chars[randint(0, chars.length - 1)])
      }
      let y: string = x.join("")
      assert.equal(solution.noSpace(y), mynoSpace(y))
    })
  })
})
