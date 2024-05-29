//+ ====================================================================================================================
//+
//+ 7 kyu - Selective fear of numbers  [ ID: 55b1fd84a24ad00b32000075 ] (selective-fear-of-numbers)
//+ URL: https://www.codewars.com/kata/55b1fd84a24ad00b32000075
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
import { amIAfraid } from "./selectiveFearOfNumbers"




describe("Arithmophobia", () => {
  it("Monday", () => {
    assert.equal(amIAfraid("Monday", 13), false)
    assert.equal(amIAfraid("Monday", 12), true)
  })
  it("Tuesday", () => {
    assert.equal(amIAfraid("Tuesday", 0), false)
    assert.equal(amIAfraid("Tuesday", 100), true)
    assert.equal(amIAfraid("Tuesday", 95), false)
  })
  it("Wednesday", () => {
    assert.equal(amIAfraid("Wednesday", 35), false)
    assert.equal(amIAfraid("Wednesday", 34), true)
  })
  it("Thursday", () => {
    assert.equal(amIAfraid("Thursday", 2), false)
    assert.equal(amIAfraid("Thursday", 0), true)
  })
  it("Friday", () => {
    assert.equal(amIAfraid("Friday", 5), false)
    assert.equal(amIAfraid("Friday", 4), true)
  })
  it("Saturday", () => {
    assert.equal(amIAfraid("Saturday", 55), false)
    assert.equal(amIAfraid("Saturday", 56), true)
  })
  it("Sunday", () => {
    assert.equal(amIAfraid("Sunday", 55), false)
    assert.equal(amIAfraid("Sunday", 666), true)
    assert.equal(amIAfraid("Sunday", -666), true)
  })
  it("Random tests", () => {
    const randomInt = (min: number, max: number): number => ~~(Math.random() * (max - min + 1) + min)
    const solution = (day: string, num: number): boolean => {
      switch (day) {
        case "Monday":
          return 12 == num
        case "Tuesday":
          return 95 < num
        case "Wednesday":
          return 34 == num
        case "Thursday":
          return 0 == num
        case "Friday":
          return 0 == num % 2
        case "Saturday":
          return 56 == num
        case "Sunday":
          return Math.abs(num) == 666
      }
      return false
    }
    for (let trial = 1; trial <= 100; trial++) {
      let num: number,
        day: string = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][randomInt(0, 6)]
      switch (day) {
        case "Monday":
        case "Wednesday":
        case "Thursday":
        case "Saturday":
        case "Sunday":
          num = [0, 12, 34, 56, 666, -666][randomInt(0, 5)]
          break
        default:
        case "Tuesday":
        case "Friday":
          num = randomInt(1, 190)
          break
      }
      assert.equal(amIAfraid(day, num), solution(day, num), `amIAfraid("${day}", ${num})`)
    }
  })
})


