//+ ====================================================================================================================
//+
//+ 7 kyu - Strings, strings, strings (Easy)  [ ID: 56d6b921c9ae3fd926000601 ] (strings-strings-strings-easy)
//+ URL: https://www.codewars.com/kata/56d6b921c9ae3fd926000601
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./stringsStringsStringsEasy")

describe("Anti-Cheating Tests", () => {
  it("Math.random() should work properly", () => {
    let antiCheat1 = Math.random()
    let antiCheat2 = Math.random()
    let antiCheat3 = Math.random()
    assert.notStrictEqual(antiCheat1, antiCheat2, "You may not disable Math.random()")
    assert.notStrictEqual(antiCheat2, antiCheat3, "You may not disable Math.random()")
    assert.notStrictEqual(antiCheat3, antiCheat1, "You may not disable Math.random()")
  })
  it("Math.round(x) should work properly", () => {
    let antiCheat1 = Math.round(1000 * Math.random())
    let antiCheat2 = Math.round(1000 * Math.random())
    let antiCheat3 = Math.round(1000 * Math.random())
    assert.notStrictEqual(antiCheat1, antiCheat2, "You may not disable Math.round(x)")
    assert.notStrictEqual(antiCheat2, antiCheat3, "You may not disable Math.round(x)")
    assert.notStrictEqual(antiCheat3, antiCheat1, "You may not disable Math.round(x)")
  })
  it("Math.floor(x) should work properly", () => {
    let antiCheat1 = Math.floor(1000 * Math.random())
    let antiCheat2 = Math.floor(1000 * Math.random())
    let antiCheat3 = Math.floor(1000 * Math.random())
    assert.notStrictEqual(antiCheat1, antiCheat2, "You may not disable Math.floor(x)")
    assert.notStrictEqual(antiCheat2, antiCheat3, "You may not disable Math.floor(x)")
    assert.notStrictEqual(antiCheat3, antiCheat1, "You may not disable Math.floor(x)")
  })
  it("Math.ceil(x) should work properly", () => {
    let antiCheat1 = Math.ceil(1000 * Math.random())
    let antiCheat2 = Math.ceil(1000 * Math.random())
    let antiCheat3 = Math.ceil(1000 * Math.random())
    assert.notStrictEqual(antiCheat1, antiCheat2, "You may not disable Math.ceil(x)")
    assert.notStrictEqual(antiCheat2, antiCheat3, "You may not disable Math.ceil(x)")
    assert.notStrictEqual(antiCheat3, antiCheat1, "You may not disable Math.ceil(x)")
  })
})

describe("toString() for booleans", () => {
  it("should work for basic tests", () => {
    assert.strictEqual(true.toString(), "true")
    assert.strictEqual(false.toString(), "false")
    assert.strictEqual(true.toString(), "true")
    assert.strictEqual(false.toString(), "false")
    assert.strictEqual(true.toString(), "true")
    assert.strictEqual(false.toString(), "false")
  })
  it("should not mutate original value", () => {
    let bool = true
    assert.strictEqual(bool.toString(), "true")
    assert.notStrictEqual(bool, "true")
    bool = false
    assert.strictEqual(bool.toString(), "false")
    assert.notStrictEqual(bool, "false")
    bool = true
    assert.strictEqual(bool.toString(), "true")
    assert.notStrictEqual(bool, "true")
    bool = false
    assert.strictEqual(bool.toString(), "false")
    assert.notStrictEqual(bool, "false")
    bool = true
    assert.strictEqual(bool.toString(), "true")
    assert.notStrictEqual(bool, "true")
    assert.strictEqual(bool, true)
    bool = false
    assert.strictEqual(bool.toString(), "false")
    assert.notStrictEqual(bool, "false")
    assert.strictEqual(bool, false)
  })
  it("should work for random tests", () => {
    function boolToStr(b) {
      return b + ""
    }
    for (let i = 0; i < 25; i++) {
      let randBool = Math.random() < 0.5
      assert.strictEqual(randBool.toString(), boolToStr(randBool))
    }
  })
})

describe("toString() for numbers", () => {
  it("should work for basic tests", () => {
    assert.strictEqual((3).toString(), "3")
    assert.notStrictEqual((3).toString(), " 3")
    assert.notStrictEqual((3).toString(), "3 ")
    assert.notStrictEqual((3).toString(), 3)
    assert.strictEqual((633.58).toString(), "633.58")
    assert.notStrictEqual((633.58).toString(), " 633.58")
    assert.notStrictEqual((633.58).toString(), "633.58 ")
    assert.notStrictEqual((633.58).toString(), 633.58)
    assert.strictEqual(Math.PI.toString(), "3.141592653589793")
    assert.notStrictEqual(Math.PI.toString(), " 3.141592653589793")
    assert.notStrictEqual(Math.PI.toString(), "3.141592653589793 ")
    assert.notStrictEqual(Math.PI.toString(), 3.141592653589793)
  })
  it("should not modify the original value passed in", () => {
    let number = 100
    assert.strictEqual(number.toString(), "100")
    assert.strictEqual(number, 100)
    number = 2.72
    assert.strictEqual(number.toString(), "2.72")
    assert.strictEqual(number, 2.72)
    number = 123
    assert.strictEqual(number.toString(), "123")
    assert.strictEqual(number, 123)
    number = 666
    assert.strictEqual(number.toString(), "666")
    assert.strictEqual(number, 666)
  })
  it("should work for random tests", () => {
    function extToStr(n) {
      return n + ""
    }
    for (let i = 0; i < 25; i++) {
      let randNumber = Math.random()
      assert.strictEqual(randNumber.toString(), extToStr(randNumber))
    }
  })
})

describe("toString() for numerical arrays", () => {
  function stripwhitespace(input) {
    return input.replace(/\s/g, "")
  }
  it("should work for basic tests", () => {
    let arr = []
    assert.strictEqual(stripwhitespace(arr.toString()), "[]")
    arr = [3.14]
    assert.strictEqual(stripwhitespace(arr.toString()), "[3.14]")
    arr = [1, 4]
    assert.strictEqual(stripwhitespace(arr.toString()), "[1,4]")
    arr = [1, 4, 36, 16, 25, 49, 9]
    assert.strictEqual(stripwhitespace(arr.toString()), "[1,4,36,16,25,49,9]")
  })
  it("should not modify the original value", () => {
    let arr = []
    assert.strictEqual(stripwhitespace(arr.toString()), "[]")
    assert.deepEqual(arr, [])
    arr = [2.72]
    assert.strictEqual(stripwhitespace(arr.toString()), "[2.72]")
    assert.deepEqual(arr, [2.72])
    arr = [3, 11]
    assert.strictEqual(stripwhitespace(arr.toString()), "[3,11]")
    assert.deepEqual(arr, [3, 11])
    arr = [216, 27, 8, 125, 64, 1]
    assert.strictEqual(stripwhitespace(arr.toString()), "[216,27,8,125,64,1]")
    assert.deepEqual(arr, [216, 27, 8, 125, 64, 1])
  })
  it("should work for random tests", () => {
    function extToStr(a) {
      if (a.length === 0) {
        return "[]"
      } else if (a.length === 1) {
        return `[${a[0]}]`
      } else {
        let res = "["
        res += a[0]
        for (let i = 1; i < a.length; i++) {
          res += "," + a[i]
        }
        res += "]"
        return res
      }
    }
    for (let i = 0; i < 50; i++) {
      let randArr = []
      randArr[0] = Math.random()
      randArr[1] = Math.random()
      randArr[2] = Math.random()
      randArr[3] = Math.random()
      randArr[4] = Math.random()
      randArr[5] = Math.random()
      randArr[6] = Math.random()
      randArr[7] = Math.random()
      randArr[8] = Math.random()
      randArr[9] = Math.random()
      assert.strictEqual(stripwhitespace(randArr.toString()), stripwhitespace(extToStr(randArr)))
    }
  })
})
