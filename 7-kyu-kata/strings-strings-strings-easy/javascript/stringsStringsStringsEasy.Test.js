// 7 kyu - Strings, strings, strings (Easy)  [ ID: 56d6b921c9ae3fd926000601  (strings-strings-strings-easy) ]
// URL: https://www.codewars.com/kata/56d6b921c9ae3fd926000601
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
describe("Anti-Cheating Tests", () => {
  it("Math.random() should work properly", () => {
    var antiCheat1 = rng()
    var antiCheat2 = rng()
    var antiCheat3 = rng()
    Test.assertNotEquals(antiCheat1, antiCheat2, "You may not disable Math.random()")
    Test.assertNotEquals(antiCheat2, antiCheat3, "You may not disable Math.random()")
    Test.assertNotEquals(antiCheat3, antiCheat1, "You may not disable Math.random()")
  })
  it("Math.round(x) should work properly", () => {
    var antiCheat1 = rnd(1000 * rng())
    var antiCheat2 = rnd(1000 * rng())
    var antiCheat3 = rnd(1000 * rng())
    Test.assertNotEquals(antiCheat1, antiCheat2, "You may not disable Math.round(x)")
    Test.assertNotEquals(antiCheat2, antiCheat3, "You may not disable Math.round(x)")
    Test.assertNotEquals(antiCheat3, antiCheat1, "You may not disable Math.round(x)")
  })
  it("Math.floor(x) should work properly", () => {
    var antiCheat1 = floor(1000 * rng())
    var antiCheat2 = floor(1000 * rng())
    var antiCheat3 = floor(1000 * rng())
    Test.assertNotEquals(antiCheat1, antiCheat2, "You may not disable Math.floor(x)")
    Test.assertNotEquals(antiCheat2, antiCheat3, "You may not disable Math.floor(x)")
    Test.assertNotEquals(antiCheat3, antiCheat1, "You may not disable Math.floor(x)")
  })
  it("Math.ceil(x) should work properly", () => {
    var antiCheat1 = ceil(1000 * rng())
    var antiCheat2 = ceil(1000 * rng())
    var antiCheat3 = ceil(1000 * rng())
    Test.assertNotEquals(antiCheat1, antiCheat2, "You may not disable Math.ceil(x)")
    Test.assertNotEquals(antiCheat2, antiCheat3, "You may not disable Math.ceil(x)")
    Test.assertNotEquals(antiCheat3, antiCheat1, "You may not disable Math.ceil(x)")
  })
})

describe("toString() for booleans", () => {
  it("should work for basic tests", () => {
    Test.assertEquals(true.toString(), "true")
    Test.assertEquals(false.toString(), "false")
    Test.assertEquals(true.toString(), "true")
    Test.assertEquals(false.toString(), "false")
    Test.assertEquals(true.toString(), "true")
    Test.assertEquals(false.toString(), "false")
  })
  it("should not mutate original value", () => {
    var bool = true
    Test.assertEquals(bool.toString(), "true")
    Test.assertNotEquals(bool, "true")
    bool = false
    Test.assertEquals(bool.toString(), "false")
    Test.assertNotEquals(bool, "false")
    bool = true
    Test.assertEquals(bool.toString(), "true")
    Test.assertNotEquals(bool, "true")
    bool = false
    Test.assertEquals(bool.toString(), "false")
    Test.assertNotEquals(bool, "false")
    bool = true
    Test.assertEquals(bool.toString(), "true")
    Test.assertNotEquals(bool, "true")
    Test.assertEquals(bool, true)
    bool = false
    Test.assertEquals(bool.toString(), "false")
    Test.assertNotEquals(bool, "false")
    Test.assertEquals(bool, false)
  })
  it("should work for random tests", () => {
    function boolToStr(b) {
      return b + ""
    }
    for (let i = 0; i < 25; i++) {
      var randBool = rng() < 0.5
      Test.assertEquals(randBool.toString(), boolToStr(randBool))
    }
  })
})

describe("toString() for numbers", () => {
  it("should work for basic tests", () => {
    Test.assertEquals((3).toString(), "3")
    Test.assertNotEquals((3).toString(), " 3")
    Test.assertNotEquals((3).toString(), "3 ")
    Test.assertNotEquals((3).toString(), 3)
    Test.assertEquals((633.58).toString(), "633.58")
    Test.assertNotEquals((633.58).toString(), " 633.58")
    Test.assertNotEquals((633.58).toString(), "633.58 ")
    Test.assertNotEquals((633.58).toString(), 633.58)
    Test.assertEquals(Math.PI.toString(), "3.141592653589793")
    Test.assertNotEquals(Math.PI.toString(), " 3.141592653589793")
    Test.assertNotEquals(Math.PI.toString(), "3.141592653589793 ")
    Test.assertNotEquals(Math.PI.toString(), 3.141592653589793)
  })
  it("should not modify the original value passed in", () => {
    var number = 100
    Test.assertEquals(number.toString(), "100")
    Test.assertEquals(number, 100)
    number = 2.72
    Test.assertEquals(number.toString(), "2.72")
    Test.assertEquals(number, 2.72)
    number = 123
    Test.assertEquals(number.toString(), "123")
    Test.assertEquals(number, 123)
    number = 666
    Test.assertEquals(number.toString(), "666")
    Test.assertEquals(number, 666)
  })
  it("should work for random tests", () => {
    function extToStr(n) {
      return n + ""
    }
    for (let i = 0; i < 25; i++) {
      var randNumber = rng()
      Test.assertEquals(randNumber.toString(), extToStr(randNumber))
    }
  })
})

describe("toString() for numerical arrays", () => {
  function stripwhitespace(input) {
    return input.replace(/\s/g, "")
  }
  it("should work for basic tests", () => {
    var arr = []
    Test.assertEquals(stripwhitespace(arr.toString()), "[]")
    arr = [3.14]
    Test.assertEquals(stripwhitespace(arr.toString()), "[3.14]")
    arr = [1, 4]
    Test.assertEquals(stripwhitespace(arr.toString()), "[1,4]")
    arr = [1, 4, 36, 16, 25, 49, 9]
    Test.assertEquals(stripwhitespace(arr.toString()), "[1,4,36,16,25,49,9]")
  })
  it("should not modify the original value", () => {
    var arr = []
    Test.assertEquals(stripwhitespace(arr.toString()), "[]")
    Test.assertSimilar(arr, [])
    arr = [2.72]
    Test.assertEquals(stripwhitespace(arr.toString()), "[2.72]")
    Test.assertSimilar(arr, [2.72])
    arr = [3, 11]
    Test.assertEquals(stripwhitespace(arr.toString()), "[3,11]")
    Test.assertSimilar(arr, [3, 11])
    arr = [216, 27, 8, 125, 64, 1]
    Test.assertEquals(stripwhitespace(arr.toString()), "[216,27,8,125,64,1]")
    Test.assertSimilar(arr, [216, 27, 8, 125, 64, 1])
  })
  it("should work for random tests", () => {
    function extToStr(a) {
      if (a.length === 0) {
        return "[]"
      } else if (a.length === 1) {
        return `[${a[0]}]`
      } else {
        var res = "["
        res += a[0]
        for (let i = 1; i < a.length; i++) {
          res += "," + a[i]
        }
        res += "]"
        return res
      }
    }
    for (let i = 0; i < 50; i++) {
      var randArr = []
      randArr[0] = rng()
      randArr[1] = rng()
      randArr[2] = rng()
      randArr[3] = rng()
      randArr[4] = rng()
      randArr[5] = rng()
      randArr[6] = rng()
      randArr[7] = rng()
      randArr[8] = rng()
      randArr[9] = rng()
      Test.assertEquals(stripwhitespace(randArr.toString()), stripwhitespace(extToStr(randArr)))
    }
  })
})
