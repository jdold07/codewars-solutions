//+ ====================================================================================================================
//+
//+ 6 kyu - RoboScript #1 - Implement Syntax Highlighting  [ ID: 58708934a44cfccca60000c4 ] (roboscript-number-1-implement-syntax-highlighting)
//+ URL: https://www.codewars.com/kata/58708934a44cfccca60000c4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { highlight } = require("./roboscriptNumber1ImplementSyntaxHighlighting")

describe("Your Syntax Highlighter", function () {
  it("should work for the examples provided in the description", function () {
    console.log("Code without syntax highlighting: F3RF5LF7")
    console.log("Your code with syntax highlighting: " + highlight("F3RF5LF7"))
    console.log(
      'Expected syntax highlighting: <span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>'
    )
    assert.strictEqual(
      highlight("F3RF5LF7"),
      '<span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>'
    )
    console.log("Code without syntax highlighting: FFFR345F2LL")
    console.log("Your code with syntax highlighting: " + highlight("FFFR345F2LL"))
    console.log(
      'Expected syntax highlighting: <span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
    )
    assert.strictEqual(
      highlight("FFFR345F2LL"),
      '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
    )
  })
  it("should work for some fixed tests", function () {
    assert.strictEqual(
      highlight("RRRRRF45L3F2"),
      '<span style="color: green">RRRRR</span><span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span><span style="color: pink">F</span><span style="color: orange">2</span>'
    )
    assert.strictEqual(
      highlight("RRRRR(F45L3)F2"),
      '<span style="color: green">RRRRR</span>(<span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span>)<span style="color: pink">F</span><span style="color: orange">2</span>'
    )
    assert.strictEqual(
      highlight("FF(LF6(RF3)2)3"),
      '<span style="color: pink">FF</span>(<span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">6</span>(<span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">3</span>)<span style="color: orange">2</span>)<span style="color: orange">3</span>'
    )
  })
  it("should work for random test cases", function () {
    function solution(code) {
      return code
        .replace(/(F+)/g, '<span style="color: pink">$1</span>')
        .replace(/(L+)/g, '<span style="color: red">$1</span>')
        .replace(/(R+)/g, '<span style="color: green">$1</span>')
        .replace(/(\d+)/g, '<span style="color: orange">$1</span>')
    }
    function randomCode() {
      return Array(10 + ~~(Math.random() * 91))
        .fill(0)
        .map(() => "FRL0123456789()"[~~(Math.random() * 15)])
        .join("")
    }
    for (let i = 0; i < 10; i++) {
      let input = randomCode()
      let expected = solution(input)
      let actual = highlight(input)
      assert.strictEqual(actual, expected)
    }
  })
})
