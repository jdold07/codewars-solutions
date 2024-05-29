//+ ====================================================================================================================
//+
//+ 8 kyu - Coding 3min : Jumping Dutch act  [ ID: 570bcd9715944a2c8e000009 ] (coding-3min-jumping-dutch-act)
//+ URL: https://www.codewars.com/kata/570bcd9715944a2c8e000009
//+ Category: GAMES  |  Tags: PUZZLES | GAMES
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { sc } = require("./coding3minJumpingDutchAct")

describe("<br><font size=6><b>-------- Coding 3min : Jumping Dutch act --------</b></font>", () => {
  //anti-cheat and calc the code length
  it("<br><font size=4><b>--------Code length check --------</b></font>", () => {
    const fcode = function (str) {
      const isChar = function (a) {
        if (a) {
          let code = a.toLowerCase().charCodeAt(0)
          return code >= 97 && code <= 122
        }
        return false
      }
      return str
        .replace(/\r?\n|\r/g, "")
        .split("")
        .filter((a, i, x) => {
          return a === " " ? (isChar(x[i - 1]) && isChar(x[i + 1]) ? true : false) : true
        })
        .join("")
    }
    let limit = 90
    const fs = require("fs")
    const allcode = fs.readFileSync(
      "kata-8-kyu/coding-3min-jumping-dutch-act/javascript/coding3minJumpingDutchAct.js",
      "utf8"
    )
    let code = fcode(allcode.replace(/(?:\/\/|module).*\n/g, ""))
    let codelen = code.length
    if (codelen <= limit)
      assert.strictEqual(
        "code length<=" + limit,
        "code length>" + limit,
        "your code length = " +
          codelen +
          ", please try this code in challage version.\n the simple version only accept the solution which length>" +
          limit
      )
    else assert.strictEqual("PASS", "PASS", ";-)")
    //end of anti-cheat
  })
  it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
    assert.strictEqual(sc(2), "Aa~ Pa! Aa!", "good luck!")
    assert.strictEqual(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!")
    assert.strictEqual(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!")
    assert.strictEqual(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!")
    assert.strictEqual(sc(1), "", "good luck!")
    assert.strictEqual(sc(-1), "", "good luck!")
  })
  it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
    function an(floor) {
      //130
      if (floor < 2) return ""
      if (floor < 7) return Array(floor).join("Aa~ ") + "Pa! Aa!"
      return Array(floor).join("Aa~ ") + "Pa!"
    }
    for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
      let ff = ~~(40 * Math.random()) - 5,
        answer = an(ff)
      assert.strictEqual(sc(ff), answer, "Test: floor=" + ff)
    }
  })
})
