//+ ====================================================================================================================
//+
//+ 6 kyu - Consecutive strings  [ ID: 56a5d994ac971f1ac500003e ] (consecutive-strings)
//+ URL: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { longestConsec } = require("./consecutiveStrings")

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

describe("longestConsec", function () {
  it("Basic tests", function () {
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(
      longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1),
      "oocccffuucccjjjkkkjyyyeehh"
    )
    testing(longestConsec([], 3), "")
    testing(
      longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2),
      "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
    )
    testing(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  })
})

it("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function longestConsecSOL71(strarr, k) {
    let n = strarr.length
    if (n == 0 || k > n || k <= 0) return ""
    let arr = strarr.map(function (u) {
      return u.length
    })
    let sm = 0
    for (let i = 0; i < k; i++) sm += arr[i]
    let mx_sm = sm,
      mx_nd = k - 1
    for (let u = k; u < n; u++) {
      sm = sm + arr[u] - arr[u - k]
      if (sm > mx_sm) {
        mx_sm = sm
        mx_nd = u
      }
    }
    let start = mx_nd - k + 1
    return strarr.slice(start, mx_nd + 1).join("")
  }
  function doEx(k) {
    let a1 = [],
      i = 0
    while (i < k) {
      let res = ""
      let j = 0
      while (j < randint(6, 25)) {
        let n = randint(97, 122)
        res += String.fromCharCode(n)
        j += 1
      }
      a1.push(res)
      i += 1
    }
    return a1
  }

  for (let i = 0; i < 200; i++) {
    const s1 = doEx(randint(100, 200))
    const k = randint(0, s1.length + 2)
    const r = longestConsecSOL71(s1, k)
    testing(longestConsec(s1, k), r)
  }
})
