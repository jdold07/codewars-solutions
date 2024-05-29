//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()  [ ID: 57256064856584bc47000611 ] (training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision)
//+ URL: https://www.codewars.com/kata/57256064856584bc47000611
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { howManySmaller } = require("./trainingJsNumber15MethodsOfNumberObjectTofixedToexponentialAndToprecision")

function an(arr, n) {
  let rs = 0
  for (let i = 0; i < arr.length; i++) {
    rs += n > +arr[i].toFixed(2)
  }
  return rs
}

function rndarn() {
  let nn = (~~(100000 * Math.random()) + (~~(9 * Math.random()) + 1) * 100000) / 100000
  //console.log("nn=",nn)
  let js = (nn + "").substr(0, 4)
  //console.log("js=",js)
  let len = ~~(16 * Math.random()) + 4
  const rs = []
  for (let i = 0; i < len; i++) {
    let t = js
    for (let j = 0; j < 6; j++) t += ~~(10 * Math.random())
    rs[i] = +t
  }
  return [rs, nn]
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(howManySmaller([1.234, 1.235, 1.228], 1.24), 2)
  assert.deepEqual(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1)
  assert.deepEqual(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2)
})

it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let arn = rndarn(),
      answer = an(arn[0].slice(), arn[1])
    console.log("<font color='#CD7F32'>Test for: arr=[" + arn[0] + "]  n=" + arn[1] + "</font>", "")
    let useran = howManySmaller(arn[0], arn[1])
    assert.deepEqual(useran, answer)
  }
})
