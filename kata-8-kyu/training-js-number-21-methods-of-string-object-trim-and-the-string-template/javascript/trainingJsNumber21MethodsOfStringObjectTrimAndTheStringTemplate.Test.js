//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #21: Methods of String object--trim() and the string template  [ ID: 5729b103dd8bac11a900119e ] (training-js-number-21-methods-of-string-object-trim-and-the-string-template)
//+ URL: https://www.codewars.com/kata/5729b103dd8bac11a900119e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { fiveLine } = require("./trainingJsNumber21MethodsOfStringObjectTrimAndTheStringTemplate")

function an(s) {
  let a = s.trim()
  return `${a}\n${a + a}\n${a + a + a}\n${a + a + a + a}\n${a + a + a + a + a}`
}

function rndc() {
  let allc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length * Math.random())]
}

function rndtrim() {
  let ws = [" ", "\n", "\t", "\r"],
    l = [],
    r = [],
    m = [],
    len
  len = ~~(5 * Math.random()) + 3
  for (let i = 0; i < len; i++) l[i] = ws[~~(4 * Math.random())]
  len = ~~(5 * Math.random()) + 3
  for (let i = 0; i < len; i++) r[i] = ws[~~(4 * Math.random())]
  len = ~~(8 * Math.random()) + 1
  for (let i = 0; i < len; i++) m[i] = rndc()
  return l.join("") + m.join("") + r.join("")
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa")
  assert.deepEqual(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy")
  assert.deepEqual(fiveLine("           Ok               "), "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk")
})

it("<br><font size=4><b>--------100 Random Test--------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let tt = rndtrim(),
      ans = "\n" + an(tt)
    console.log("<font color='#CD7F32'>Test for: s=" + tt + "</font>", "")
    let useran = "\n" + fiveLine(tt)
    assert.deepEqual(useran, ans)
  }
})
