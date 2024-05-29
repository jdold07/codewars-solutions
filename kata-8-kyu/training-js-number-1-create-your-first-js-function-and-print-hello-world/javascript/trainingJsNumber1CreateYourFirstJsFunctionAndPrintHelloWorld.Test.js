//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #1: create your first JS function and print "Hello World!"  [ ID: 571ec274b1c8d4a61c0000c8 ] (training-js-number-1-create-your-first-js-function-and-print-hello-world)
//+ URL: https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { helloWorld } = require("./trainingJsNumber1CreateYourFirstJsFunctionAndPrintHelloWorld")

it("Fuck Me!  What an unnecessary mess!", () => {
  console.log("<br><font size=4><b>Test for mission 1: should create a function helloWorld</b></font>")
  console.log("")
  expect(helloWorld, "helloWorld is not defined")
  console.log("<br><font size=4><b>Test for mission 2: should defined a variable str and set value</b></font>")
  let code = helloWorld + ""
  let varstr = /(?:var|let|const) +str/.test(code) ? "variable str is defined" : "variable str is not defined"
  assert.equal(varstr, "variable str is defined")
  console.log("<br><font size=4><b>Test for mission 3: should use method console.log() to print Hello World!</b></font>")
  helloWorld()
  let recsave = rec
  let typelog = /console\.log/.test(code) ? "console.log() found in function" : "console.log() is not found"
  assert.equal(typelog, "console.log() found in function")

  assert.equal(
    'print value is "' + recsave + '"',
    'print value is "Hello World!"',
    'you did not print "Hello World!" to the screen'
  )
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================
var da = "Function,Array,String,String,String".split(","),
  db = "toString,filter,slice,indexOf,replace".split(",")
var consolelog = console.log,
  rec = ""
console.log = function (s) {
  rec = s
  consolelog(s)
}
for (var i = 0; i < da.length; i++) {
  eval("Object.defineProperty(" + da[i] + '.prototype, "' + db[i] + '", { writable: false });')
  eval("Object.defineProperty(" + da[i] + '.prototype, "' + db[i] + '", { configurable: false });')
}
var bak = process.reallyExit
process.reallyExit = function () {
  it("Wow", () => {
    assert.equal("cheater?", "trainer", "Hmmmm..... ;-)")
  })
}
process.reallyExit = bak

//+ ====================================================================================================================
