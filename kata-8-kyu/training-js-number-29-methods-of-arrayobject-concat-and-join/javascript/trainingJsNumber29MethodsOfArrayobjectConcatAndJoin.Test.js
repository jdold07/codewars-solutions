//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #29: methods of arrayObject---concat() and join()  [ ID: 5731861d05d14d6f50000626 ] (training-js-number-29-methods-of-arrayobject-concat-and-join)
//+ URL: https://www.codewars.com/kata/5731861d05d14d6f50000626
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { bigToSmall } = require("./trainingJsNumber29MethodsOfArrayobjectConcatAndJoin")

function an(arr) {
  let r = []
  for (let i = 0; i < arr.length; i++) r = r.concat(arr[i])
  r.sort((a, b) => b - a)
  return r.join(">")
}

function rndarr() {
  let len = ~~(8 * Math.random()) + 3
  const rs = []
  for (let i = 0; i < len; i++) {
    let l = ~~(6 * Math.random()) + 1
    rs[i] = []
    for (let j = 0; j < l; j++) rs[i][j] = ~~(50 * Math.random())
  }
  return rs
}

it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
  assert.deepEqual(
    bigToSmall([
      [1, 2],
      [3, 4],
      [5, 6]
    ]),
    "6>5>4>3>2>1"
  )
  assert.deepEqual(
    bigToSmall([
      [1, 3, 5],
      [2, 4, 6]
    ]),
    "6>5>4>3>2>1"
  )
  assert.deepEqual(bigToSmall([[1, 1], [1], [1, 1]]), "1>1>1>1>1")
})

it("<br><font size=4><b>--------100 Random Test--------</b></font>", () => {
  for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
    let ar = rndarr(),
      ans = an(ar)
    console.log("<font color='#CD7F32'>Test for: arr=" + JSON.stringify(ar) + "</font>", "")
    let useran = bigToSmall(ar)
    assert.deepEqual(useran, ans)
  }
})
