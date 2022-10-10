//+ ====================================================================================================================
//+
//+ 8 kyu - ASCII Total  [ ID: 572b6b2772a38bc1e700007a ] (ascii-total)
//+ URL: https://www.codewars.com/kata/572b6b2772a38bc1e700007a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { uniTotal } = require("./asciiTotal")

function doTest(string, expected) {
  const actual = uniTotal(string)
  assert.strictEqual(actual, expected, `for string "${string}":\n`)
}

it("sample tests", () => {
  doTest("", 0)
  doTest("a", 97)
  doTest("b", 98)
  doTest("c", 99)
  doTest("d", 100)
  doTest("e", 101)
  doTest("aaa", 291)
  doTest("Mary Had A Little Lamb", 1873)
})

it("random tests", () => {
  const chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"

  const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
  const sample = (xs) => xs[randInt(0, xs.length - 1)]
  const solution = (string) => [...string].reduce((sum, char) => sum + char.codePointAt(0), 0)

  for (let i = 0; i < 100; i++) {
    const string = Array.from({ length: randInt(0, 30) }, () => sample(chars)).join("")
    doTest(string, solution(string))
  }
})
