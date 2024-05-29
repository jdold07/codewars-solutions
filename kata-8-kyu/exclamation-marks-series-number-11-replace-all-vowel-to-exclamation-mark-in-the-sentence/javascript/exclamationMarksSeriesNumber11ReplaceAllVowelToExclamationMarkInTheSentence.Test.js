//+ ====================================================================================================================
//+
//+ 8 kyu - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence  [ ID: 57fb09ef2b5314a8a90001ed ] (exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence)
//+ URL: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { replace } = require("./exclamationMarksSeriesNumber11ReplaceAllVowelToExclamationMarkInTheSentence")

function an(s) {
  return s.replace(/[aeiou]/gi, "!")
}
function rndcl() {
  let allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
function rndch() {
  let allc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}
function rndss(n) {
  let len = n || rand(3, 7)
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rand(0, 1000) % 2 ? rndcl() : rndch()
  }
  return rs.join("")
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndmark() {
  let len = rand(1, 8),
    r = []
  for (let i = 0; i < len; i++) {
    r[i] = "!".repeat(Math.max(0, rand(-5, 1))) + rndss() + "!".repeat(Math.max(0, rand(-5, 1)))
  }
  return r.join(" ")
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    assert.deepEqual(replace("Hi!"), "H!!")
    assert.deepEqual(replace("!Hi! Hi!"), "!H!! H!!")
    assert.deepEqual(replace("aeiou"), "!!!!!")
    assert.deepEqual(replace("ABCDE"), "!BCD!")
  })
})
describe("100 Random Tests", function () {
  it("It should works for random tests too", function () {
    for (let iii = 0; iii < 100; iii++) {
      let lll = rndmark(),
        ans = an(lll)
      console.log(
        "<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>" +
          's = "' +
          lll +
          "</font>",
        ""
      )
      let useran = replace(lll)
      assert.deepEqual(useran, ans)
    }
  })
})

/*describe("Congratulations！ You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
