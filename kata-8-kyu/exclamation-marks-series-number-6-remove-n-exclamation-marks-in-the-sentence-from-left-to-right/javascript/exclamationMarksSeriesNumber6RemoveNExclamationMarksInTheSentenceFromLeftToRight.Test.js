//+ ====================================================================================================================
//+
//+ 8 kyu - Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right  [ ID: 57faf7275c991027af000679 ] (exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right)
//+ URL: https://www.codewars.com/kata/57faf7275c991027af000679
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { remove } = require("./exclamationMarksSeriesNumber6RemoveNExclamationMarksInTheSentenceFromLeftToRight")

function an(s, n) {
  let r = ""
  for (let i = 0; i < s.length; i++) {
    r += s[i] != "!" ? s[i] : n-- > 0 ? "" : "!"
  }
  return r
}
function rndcl() {
  let allc = "abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length * Math.random())]
}
function rnds(n) {
  let len = n || rand(3, 7)
  const rs = []
  for (let i = 0; i < len; i++) {
    rs[i] = rndcl()
  }
  return rs.join("")
}
function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}
function rndmark() {
  let len = rand(1, 6),
    r = []
  for (let i = 0; i < len; i++) r[i] = "!".repeat(Math.max(0, rand(-2, 3))) + rnds() + "!".repeat(Math.max(0, rand(-2, 3)))
  return r.join(" ")
}

describe("Basic Tests", function () {
  it("It should works for basic tests", function () {
    assert.deepEqual(remove("Hi!", 1), "Hi")
    assert.deepEqual(remove("Hi!", 100), "Hi")
    assert.deepEqual(remove("Hi!!!", 1), "Hi!!")
    assert.deepEqual(remove("Hi!!!", 100), "Hi")
    assert.deepEqual(remove("!Hi", 1), "Hi")
    assert.deepEqual(remove("!Hi!", 1), "Hi!")
    assert.deepEqual(remove("!Hi!", 100), "Hi")
    assert.deepEqual(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi")
    assert.deepEqual(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi")
    assert.deepEqual(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi")
    assert.deepEqual(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi")
  })
})
describe("100 Random Tests", function () {
  it("It should works for random tests too", function () {
    for (let iii = 0; iii < 100; iii++) {
      let lll = rndmark(),
        nnn = rand(1, lll.split("!").length + 1),
        ans = an(lll, nnn)
      console.log(
        "<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>" +
          's = "' +
          lll +
          '"  n = ' +
          nnn +
          "</font>",
        ""
      )
      let useran = remove(lll, nnn)
      assert.deepEqual(useran, ans)
    }
  })
})

/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
