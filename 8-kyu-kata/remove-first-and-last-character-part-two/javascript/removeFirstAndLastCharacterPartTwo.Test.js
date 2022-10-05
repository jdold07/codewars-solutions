// 8 kyu - Remove First and Last Character Part Two  [ ID: 570597e258b58f6edc00230d  (remove-first-and-last-character-part-two) ]
// URL: https://www.codewars.com/kata/570597e258b58f6edc00230d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
// *****************************************************************************
describe("Tests", function () {
  Test.assertEquals(array(""), null)
  Test.assertEquals(array("1"), null)
  Test.assertEquals(array("1, 3"), null)
  Test.assertEquals(array("1,2,3"), "2")
  Test.assertEquals(array("1,2,3,4"), "2 3")
})

const R = (a, b) => a + ~~(Math.random() * (b - a + 1))

function solution(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null
}

describe("Random Tests", function () {
  for (let i = 0; i < 200; i++) {
    let a = []
    for (let j = R(1, 10); j; j--) {
      let s = ""
      for (let k = R(1, 3); k; k--) s += "abcdef123456"[R(0, 11)]
      a.push(s)
    }
    let text = a.join(",")
    Test.assertEquals(array(text), solution(text))
  }
})
