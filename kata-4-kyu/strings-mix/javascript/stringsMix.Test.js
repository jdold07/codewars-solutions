//+ ====================================================================================================================
//+
//+ 4 kyu - Strings Mix  [ ID: 5629db57620258aa9d000014 ] (strings-mix)
//+ URL: https://www.codewars.com/kata/5629db57620258aa9d000014
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { mix } = require("./stringsMix")

describe("Mix", function () {
  it("Basic tests", function () {
    assert.strictEqual(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
    assert.strictEqual(
      mix("looping is fun but dangerous", "less dangerous than coding"),
      "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
    )
    assert.strictEqual(
      mix(" In many languages", " there's a pair of functions"),
      "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
    )
    assert.strictEqual(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
    assert.strictEqual(mix("codewars", "codewars"), "")
    assert.strictEqual(
      mix("A generation must confront the looming ", "codewarrs"),
      "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
    )
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  //................
  function compSol(a, b) {
    let r
    let cp = b.length - a.length
    if (cp === 0) {
      if (a < b) r = -1
      else r = 1
    } else {
      r = cp
    }
    return r
  }

  function mixSol(s1, s2) {
    let alpha_s1 = Array(27)
      .join(1)
      .split("")
      .map(function () {
        return 0
      })
    let alpha_s2 = Array(27)
      .join(1)
      .split("")
      .map(function () {
        return 0
      })
    let l1 = s1.length
    let l2 = s2.length
    let i
    let res = ""
    let c
    for (i = 0; i < l1; i++) {
      c = s1.charCodeAt(i)
      if (c >= 97 && c <= 122) alpha_s1[c - 97]++
    }
    for (i = 0; i < l2; i++) {
      c = s2.charCodeAt(i)
      if (c >= 97 && c <= 122) alpha_s2[c - 97]++
    }
    for (i = 0; i < 26; i++) {
      let sm = Math.max(alpha_s1[i], alpha_s2[i])
      if (sm > 1) {
        if (sm > alpha_s1[i]) {
          res += "2:" + Array(sm + 1).join(String.fromCharCode(i + 97)) + "/"
        } else {
          if (sm > alpha_s2[i]) {
            res += "1:" + Array(sm + 1).join(String.fromCharCode(i + 97)) + "/"
          } else {
            res += "=:" + Array(sm + 1).join(String.fromCharCode(i + 97)) + "/"
          }
        }
      }
    }
    if (res.Length === 0) return ""
    return res
      .substring(0, res.length - 1)
      .split("/")
      .sort(compSol)
      .join("/")
  }
  //................

  function doEx() {
    let i = 0
    let res = ""
    let n
    while (i < 30) {
      if (i % 5 === 0) {
        n = randint(35, 90)
      } else {
        n = randint(97, 122)
      }
      res += String.fromCharCode(n)
      i++
    }
    return res
  }

  for (let i = 0; i < 100; i++) {
    let s1 = doEx()
    let s2 = doEx()
    it("Testing Mixing: ", function () {
      assert.strictEqual(mix(s1, s2), mixSol(s1, s2), "It should work for random tests too")
    })
  }
})
