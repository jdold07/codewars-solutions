/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Make Class  [ ID: 5d774cfde98179002a7cb3c8 ] (make-class)
//+ URL: https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
//+ Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
//+
//+ ====================================================================================================================

import { describe } from "node:test"
import { assert } from "vitest"
const { makeClass } = require("./makeClass")

function solution(...keys) {
  return function (...values) {
    keys.forEach((key, i) => {
      this[key] = values[i]
    })
  }
}

function Animal(name, species, age, health, weight, color) {
  this.name = name
  this.species = species
  this.age = age
  this.health = health
  this.weight = weight
  this.color = color
}
const Animel = makeClass("name", "species", "age", "health", "weight", "color")

describe("Basic Tests", function () {
  const dog1 = new Animal("Bob", "Dog", "5", "good", "50lb", "brown")
  const dog2 = new Animel("Bob", "Dog", "5", "good", "50lb", "brown")
  it("check for object similarity", function () {
    assert.strictEqual(Object.keys(dog1).join`,`, Object.keys(dog2).join`,`)
    assert.strictEqual(Object.values(dog1).join`,`, Object.values(dog2).join`,`)
  })
  it("anti-cheat", function () {
    assert.strictEqual(
      dog2 instanceof Animel,
      true,
      '"instances" of your class need to be instances of your class.',
    )
    assert.strictEqual(dog2.constructor === Animel, true, "what are you doing")
  })
})

describe("Random Tests", function () {
  function Obj(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
  const ObjClass = makeClass("x", "y", "z")

  it("Some random Tests", function () {
    for (let i = 0; i < 50; i++) {
      const [a, b] = [Math.random() * 1000, Math.random() * 1000]
      const o = new Obj(a, b, (a, b) => a + b)
      const p = new ObjClass(a, b, (a, b) => a + b)
      assert.strictEqual(
        JSON.stringify(o),
        JSON.stringify(p),
        "JSON representation of object instances must be the same",
      )
      assert.strictEqual(p.z(p.x, p.y), o.z(o.x, o.y))
    }
  })

  it("Some more random Tests", function () {
    for (let i = 0; i < 20; i++) {
      const parameters = Array.from(
        new Set([...Array(26)].map(() => String.fromCharCode((Math.random() * 25 + 65) | 0))),
      )

      function MyClass(...parameters) {
        parameters.reduce((a, p) => a + p, "")
      }

      // const MyClass = solution(...parameters)
      const YourClass = makeClass(...parameters)

      assert.strictEqual(JSON.stringify(MyClass), JSON.stringify(YourClass))
      for (let i = 0; i < 20; i++) {
        const randomArguments = [...("" + ((Math.random() * Number.MAX_SAFE_INTEGER) | 0))]
        const myInstance = new MyClass(...randomArguments)
        const yourInstance = new YourClass(...randomArguments)
        assert.strictEqual(
          JSON.stringify(myInstance),
          JSON.stringify(yourInstance),
          "JSON representation of object instances must be the same",
        )
      }
    }
  })
})
