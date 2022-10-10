//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #14: Methods of Number object--toString() and toLocaleString()  [ ID: 57238ceaef9008adc7000603 ] (training-js-number-14-methods-of-number-object-tostring-and-tolocalestring)
//+ URL: https://www.codewars.com/kata/57238ceaef9008adc7000603
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { colorOf } = require("./trainingJsNumber14MethodsOfNumberObjectTostringAndTolocalestring")

function an(r, g, b) {
  let cv = function (n) {
    let s = n.toString(16)
    return s.length == 2 ? s : "0" + s
  }
  return "#" + cv(r) + cv(g) + cv(b)
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  console.log("")

  assert.deepEqual(colorOf(255, 0, 0), "#ff0000")
  assert.deepEqual(colorOf(0, 111, 0), "#006f00")
  assert.deepEqual(colorOf(1, 2, 3), "#010203")
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  console.log("")

  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let rr = ~~(256 * Math.random()),
      gg = ~~(256 * Math.random()),
      bb = ~~(256 * Math.random()),
      answer = an(rr, gg, bb)
    console.log("<font color='" + answer + "'>Test for: r=" + rr + "  g=" + gg + "  b=" + bb + "</font>", "")
    let useran = colorOf(rr, gg, bb)
    assert.deepEqual(useran, answer)
    console.log("<font color='" + useran + "'>Your color code is \"" + useran + '"</font>', "")
  }
})
