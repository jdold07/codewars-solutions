// 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d  (the-feast-of-many-beasts) ]
// URL: https://www.codewars.com/kata/5aa736a455f906981800360d
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(feast("great blue heron", "garlic naan"), true)
    Test.assertEquals(feast("chickadee", "chocolate cake"), true)
    Test.assertEquals(feast("brown bear", "bear claw"), false)
    Test.assertEquals(feast("marmot", "mulberry tart"), true)
    Test.assertEquals(feast("porcupine", "pie"), true)
    Test.assertEquals(feast("cat", "yogurt"), false)
    Test.assertEquals(feast("electric eel", "lasagna"), false)
    Test.assertEquals(feast("slow loris", "salsas"), true)
    Test.assertEquals(feast("ox", "orange lox"), true)
    Test.assertEquals(feast("blue-footed booby", "blueberry"), true)

    //random tests
    function makeString(min, max) {
      let array = []
      let possible = "abcdefghijklmnopqrstuvwxyz"
      let length = Math.ceil(Math.random() * max + min)
      if (max < min) return "Maximum argument should be greater than minimum!"
      for (let i = 0; i < length; i++) {
        array.push(possible[Math.floor(Math.random() * possible.length)])
      }
      return array.join("")
    }

    function authorSolution(a, b) {
      return a.charAt(0) === b.charAt(0) && a.charAt(a.length - 1) === b.charAt(b.length - 1)
    }
    for (let i = 0; i < 91; i++) {
      let a = makeString(2, 40)
      let b = makeString(2, 40)
      if (Math.random() < 0.5) {
        b = a[0] + b + a.slice(-1)
      }
      console.log("input a was:", a, ", input b was:", b)
      Test.assertEquals(feast(a, b), authorSolution(a, b))
    }
  })
})
