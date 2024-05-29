//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Create the rooms  [ ID: 56a29b237e9e997ff2000048 ] (grasshopper-create-the-rooms)
//+ URL: https://www.codewars.com/kata/56a29b237e9e997ff2000048
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { rooms } = require("./grasshopperCreateTheRooms")

describe("room creation", () => {
  const keys = Object.keys(rooms)
  it("should have at least three rooms", () => {
    assert.strictEqual(keys.length >= 3, true)
  })
  it("each room should be an object", () => {
    keys.forEach((name) => {
      expect(typeof rooms[name] === "object", `${name} should be an object`)
    })
  })
  it("should contain at least three properties per room", () => {
    keys.forEach((name) => {
      let numKeys = Object.keys(rooms[name]).length
      expect(numKeys >= 3, `not enough properties for room: ${name}`)
    })
  })
})
