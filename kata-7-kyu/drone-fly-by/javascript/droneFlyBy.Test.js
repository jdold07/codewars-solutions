//+ ====================================================================================================================
//+
//+ 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5 ] (drone-fly-by)
//+ URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { flyBy } = require("./droneFlyBy")

describe("Drone Fly-By", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(flyBy("xxxxxx", "====T"), "ooooox")
    assert.strictEqual(flyBy("xxxxxxxxx", "==T"), "oooxxxxxx")
    assert.strictEqual(flyBy("xxxxxxxxxxxxxxx", "=========T"), "ooooooooooxxxxx")
  })

  it("Random tests", () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a

    function myflyBy(lamps, drone) {
      let len = lamps.length
      lamps = lamps.slice(drone.length)
      while (lamps.length < len) lamps = "o" + lamps
      return lamps
    }

    let lamp = "x"
    let dron = "="
    for (let i = 0; i < 100; i++) {
      let lamps = [],
        len = randint(1, 30),
        drone = []
      for (let k = 0; k < len; k++) lamps.push(lamp)
      lamps = lamps.join("")
      let len2 = randint(0, lamps.length)
      for (let j = 0; j < len2; j++) drone.push(dron)
      drone.push("T")
      drone = drone.join("")
      assert.strictEqual(
        flyBy(lamps, drone),
        myflyBy(lamps, drone),
        `Testing for ${JSON.stringify(lamps)} and ${JSON.stringify(drone)}`
      )
    }
  })
})
