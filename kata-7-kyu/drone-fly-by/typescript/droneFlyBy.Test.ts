//+ ====================================================================================================================
//+
//+ 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5 ] (drone-fly-by)
//+ URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { flyBy } from "./droneFlyBy"

describe("Example Tests", function () {
  it("Basic Tests", function () {
    assert.strictEqual(flyBy("xxxxxx", "====T"), "ooooox")
    assert.strictEqual(flyBy("xxxxxxxxx", "==T"), "oooxxxxxx")
    assert.strictEqual(flyBy("xxxxxxxxxxxxxxx", "=========T"), "ooooooooooxxxxx")
  })
})

const myFlyBy = (lamps: string, drone: string): string => {
  return [...lamps].fill("o", 0, drone.length).join("")
}

const randInt = (min = 0, max: number = min): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

describe("Random Tests", function () {
  const [lampOffChar, droneChar] = ["x", "T"]
  for (let i = 0; i < 100; i++) {
    const numberOfLamps: number = randInt(1, 30)
    const lamps: string = Array(numberOfLamps).fill(lampOffChar).join("")
    const lampsPassed: number = randInt(0, numberOfLamps)
    const dronePath: string = Array(lampsPassed)
      .fill(lampsPassed)
      .fill(droneChar, numberOfLamps - 1)
      .join("")

    it(`Testing for ${lamps} and ${dronePath}`, function () {
      assert.strictEqual(flyBy(lamps, dronePath), myFlyBy(lamps, dronePath), "It should work for random inputs too")
    })
  }
})
