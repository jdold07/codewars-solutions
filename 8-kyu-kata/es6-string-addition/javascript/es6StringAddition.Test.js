// 8 kyu - ES6 string addition  [ ID: 582e4c3406e37fcc770001ad  (es6-string-addition) ]
// URL: https://www.codewars.com/kata/582e4c3406e37fcc770001ad
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("add", () => {
  it("should work for fixed tests", () => {
    Test.assertEquals(joinStrings("string1", "string2"), "string1 string2")
    Test.assertEquals(joinStrings("testing", "testing"), "testing testing")
    Test.assertEquals(joinStrings(134, 234), "134 234")
    Test.assertEquals(joinStrings("a,", "b"), "a, b")
  })
  it("should work for random tests as well", () => {
    function joinStrings2(string1, string2) {
      return `${string1} ${string2}`
    }
    for (let i = 0; i < 100; i++) {
      var randomNum = Math.floor(Math.random() * (Math.random() * 1000))
      var testOptions = [
        "string1",
        "string2",
        "string3",
        "string4",
        "string5",
        "string6",
        "string7",
        randomNum,
        randomNum,
        "STRING11",
        "5tring"
      ]
      var string1 = testOptions[Math.floor(Math.random() * 11)]
      var string2 = testOptions[Math.floor(Math.random() * 11)]
      Test.assertEquals(joinStrings(string1, string2), joinStrings2(string1, string2))
    }
  })
  it("Testing that the '+' operator, String.concat and Array.join() are not used", () => {
    const fs = require("fs")
    const usercode = fs.readFileSync("/home/codewarrior/solution.txt", "utf8")
    Test.assertEquals(joinStrings.toString().includes("+"), false, "You cannot use the '+' operator")
    Test.assertEquals(joinStrings.toString().includes("concat"), false, "You cannot use the String.concat() method ")
    Test.assertEquals(joinStrings.toString().includes("join("), false, "You cannot use the Array.join() method ")

    Test.assertEquals(
      usercode.toString().includes("+"),
      false,
      "You cannot use the '+' operator, even outside of the joinString function!"
    )
    Test.assertEquals(
      usercode.toString().includes("concat"),
      false,
      "You cannot use the String.concat() method, even outside of the joinString function!"
    )
    Test.assertEquals(
      usercode.toString().includes("join("),
      false,
      "You cannot use the Array.join() method, even outside of the joinString function!"
    )
    Test.assertEquals(usercode.toString().includes("lodash"), false, "No cheating! You cannot use lodash!!")
  })
})
