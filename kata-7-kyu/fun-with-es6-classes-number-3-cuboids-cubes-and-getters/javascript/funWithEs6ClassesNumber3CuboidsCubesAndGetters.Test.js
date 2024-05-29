//+ ====================================================================================================================
//+
//+ 7 kyu - Fun with ES6 Classes #3 - Cuboids, Cubes and Getters  [ ID: 56fbdda707cff41b68000de2 ] (fun-with-es6-classes-number-3-cuboids-cubes-and-getters)
//+ URL: https://www.codewars.com/kata/56fbdda707cff41b68000de2
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { Cuboid, Cube } = require("./funWithEs6ClassesNumber3CuboidsCubesAndGetters")

describe("class Cuboid", () => {
  it("should initialize properly and have working getters", () => {
    let cuboid = new Cuboid(1, 2, 3)
    assert.strictEqual(cuboid.length, 1)
    assert.strictEqual(cuboid.width, 2)
    assert.strictEqual(cuboid.height, 3)
    assert.strictEqual(cuboid.volume, 6)
    assert.strictEqual(cuboid.surfaceArea, 22)
    cuboid.length = 4
    assert.strictEqual(cuboid.volume, 24)
    assert.strictEqual(cuboid.surfaceArea, 52)
    cuboid.width = 5
    assert.strictEqual(cuboid.volume, 60)
    assert.strictEqual(cuboid.surfaceArea, 94)
    cuboid.height = 6
    assert.strictEqual(cuboid.volume, 120)
    assert.strictEqual(cuboid.surfaceArea, 148)
    ;[cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9]
    assert.strictEqual(cuboid.volume, 504)
    assert.strictEqual(cuboid.surfaceArea, 382)
  })
  it("should work for random tests", () => {
    let length, width, height, cuboid
    for (let i = 0; i < 6; i++) {
      length = randomNumber()
      width = randomNumber()
      height = randomNumber()
      cuboid = new Cuboid(length, width, height)
      assert.strictEqual(cuboid.length, length)
      assert.strictEqual(cuboid.width, width)
      assert.strictEqual(cuboid.height, height)
      assert.strictEqual(cuboid.volume, length * width * height)
      assert.strictEqual(cuboid.surfaceArea, 2 * (length * width + width * height + height * length))
      cuboid.length = randomNumber()
      cuboid.width = randomNumber()
      cuboid.height = randomNumber()
      assert.strictEqual(cuboid.volume, cuboid.length * cuboid.width * cuboid.height)
      assert.strictEqual(
        cuboid.surfaceArea,
        2 * (cuboid.length * cuboid.width + cuboid.width * cuboid.height + cuboid.height * cuboid.length)
      )
    }
  })
})

describe("class Cube extends Cuboid", () => {
  it("should initialize properly and have the same getters as the parent class", () => {
    let cube = new Cube(1)
    assert.strictEqual(cube.length, 1)
    assert.strictEqual(cube.width, 1)
    assert.strictEqual(cube.height, 1)
    assert.strictEqual(cube.volume, 1)
    assert.strictEqual(cube.surfaceArea, 6)
    cube.length = cube.width = cube.height = 2
    assert.strictEqual(cube.volume, 8)
    assert.strictEqual(cube.surfaceArea, 24)
    cube.length = cube.width = cube.height = 3
    assert.strictEqual(cube.volume, 27)
    assert.strictEqual(cube.surfaceArea, 54)
    cube.length = cube.width = cube.height = 5
    assert.strictEqual(cube.volume, 125)
    assert.strictEqual(cube.surfaceArea, 150)
    cube.length = cube.width = cube.height = 10
    assert.strictEqual(cube.volume, 1000)
    assert.strictEqual(cube.surfaceArea, 600)
  })
  it("should work for random tests", () => {
    let length, cube
    for (let i = 0; i < 6; i++) {
      length = randomNumber()
      cube = new Cube(length)
      assert.strictEqual(cube.length, length)
      assert.strictEqual(cube.width, length)
      assert.strictEqual(cube.height, length)
      assert.strictEqual(cube.volume, length ** 3)
      assert.strictEqual(cube.surfaceArea, 6 * length ** 2)
      cube.length = cube.width = cube.height = randomNumber()
      assert.strictEqual(cube.volume, cube.length ** 3)
      assert.strictEqual(cube.surfaceArea, 6 * cube.length ** 2)
    }
  })
})
