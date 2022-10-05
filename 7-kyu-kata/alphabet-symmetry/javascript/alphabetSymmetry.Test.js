// 7 kyu - Alphabet symmetry  [ ID: 59d9ff9f7905dfeed50000b0  (alphabet-symmetry) ]
// URL: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Basic tests", function () {
  Test.assertDeepEquals(solve(["abode", "ABc", "xyzD"]), [4, 3, 1])
  Test.assertDeepEquals(solve(["abide", "ABc", "xyz"]), [4, 3, 0])
  Test.assertDeepEquals(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), [6, 5, 7])
  Test.assertDeepEquals(solve(["encode", "abc", "xyzD", "ABmD"]), [1, 3, 1, 3])
})

describe("Random tests", function () {
  let low = "abcdefghijklmnopqrstuvwxyz"
  let high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < 100; i++) {
    //100
    arr = []
    r = Math.floor(Math.random() * 100 + 100) // 1000) + 500);
    for (let j = 2; j < r; j++) {
      r0 = Math.floor(Math.random() * 10)
      r1 = Math.floor(Math.random() * 10)
      r2 = Math.floor(Math.random() * 26)
      s = low.slice(0, r0)
      a = high.slice(0, r1)
      b = low.slice(a.length + s.length, r2)
      s1 = a + s + b
      arr.push(s1)
    }
    let exp = solverMX51Js(arr)
    Test.assertDeepEquals(solve(arr), exp, "It should work for random inputs too")
  }
})

function solverMX51Js(arr) {
  let l = "abcdefghijklmnopqrstuvwxyz"
  res = []
  for (let i = 0; i < arr.length; i++) {
    st = ""
    for (let j = 0; j < arr[i].length; j++) {
      st += arr[i].charAt(j).toLowerCase()
    }
    let c = 0
    for (let k = 0; k < st.length; k++) {
      if (l.indexOf(st[k]) == k) c++
    }
    res.push(c)
  }
  return res
}
