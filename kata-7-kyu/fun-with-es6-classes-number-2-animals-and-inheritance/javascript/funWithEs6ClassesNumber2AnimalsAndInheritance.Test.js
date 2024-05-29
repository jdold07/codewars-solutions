//+ ====================================================================================================================
//+
//+ 7 kyu - Fun with ES6 Classes #2 - Animals and Inheritance  [ ID: 56f935002e6c0d55fa000d92 ] (fun-with-es6-classes-number-2-animals-and-inheritance)
//+ URL: https://www.codewars.com/kata/56f935002e6c0d55fa000d92
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { Shark, Cat, Dog } = require("./funWithEs6ClassesNumber2AnimalsAndInheritance")

describe("The Animal class", () => {
  it("should still function as expected (anti-cheat test)", () => {
    let chicken = new Animal("Bob", 1, 2, "chicken", "alive")
    assert.strictEqual(chicken.name, "Bob")
    assert.strictEqual(chicken.age, 1)
    assert.strictEqual(chicken.legs, 2)
    assert.strictEqual(chicken.species, "chicken")
    assert.strictEqual(chicken.status, "alive")
    assert.strictEqual(chicken.introduce(), `Hello, my name is Bob and I am 1 years old.`)
    let dino = new Animal("Barney", 5, 2, "dinosaur", "Alive and Happy")
    assert.strictEqual(dino.name, "Barney")
    assert.strictEqual(dino.age, 5)
    assert.strictEqual(dino.legs, 2)
    assert.strictEqual(dino.species, "dinosaur")
    assert.strictEqual(dino.status, "Alive and Happy")
    assert.strictEqual(dino.introduce(), `Hello, my name is Barney and I am 5 years old.`)
  })
})

describe("The Shark class", () => {
  it("should construct an object properly", () => {
    let billy = new Shark("Billy", 3, "Alive and well")
    assert.strictEqual(billy.name, "Billy")
    assert.strictEqual(billy.age, 3)
    assert.strictEqual(billy.legs, 0)
    assert.strictEqual(billy.species, "shark")
    assert.strictEqual(billy.status, "Alive and well")
    assert.strictEqual(billy.introduce(), `Hello, my name is Billy and I am 3 years old.`)
    let charles = new Shark("Charles", 8, "Finding a mate")
    assert.strictEqual(charles.name, "Charles")
    assert.strictEqual(charles.age, 8)
    assert.strictEqual(charles.legs, 0)
    assert.strictEqual(charles.species, "shark")
    assert.strictEqual(charles.status, "Finding a mate")
    assert.strictEqual(charles.introduce(), `Hello, my name is Charles and I am 8 years old.`)
  })
  it("should work for random tests as well", () => {
    class Solution extends Animal {
      constructor(name, age, status) {
        super(name, age, 0, "shark", status)
      }
    }
    let a, b, c
    for (let i = 0; i < 10; i++) {
      a = randomToken()
      b = randomNumber()
      c = randomToken()
      assert.strictEqual(new Shark(a, b, c).name, a)
      assert.strictEqual(new Shark(a, b, c).age, b)
      assert.strictEqual(new Shark(a, b, c).legs, 0)
      assert.strictEqual(new Shark(a, b, c).species, "shark")
      assert.strictEqual(new Shark(a, b, c).status, c)
      assert.strictEqual(new Shark(a, b, c).introduce(), new Solution(a, b, c).introduce())
    }
  })
})

describe("The Cat class", () => {
  it("should construct an object properly", () => {
    let cathy = new Cat("Cathy", 7, "Playing with a ball of yarn")
    assert.strictEqual(cathy.name, "Cathy")
    assert.strictEqual(cathy.age, 7)
    assert.strictEqual(cathy.legs, 4)
    assert.strictEqual(cathy.species, "cat")
    assert.strictEqual(cathy.status, "Playing with a ball of yarn")
    assert.strictEqual(cathy.introduce(), "Hello, my name is Cathy and I am 7 years old.  Meow meow!")
    let spitsy = new Cat("Spitsy", 6, "sleeping")
    assert.strictEqual(spitsy.name, "Spitsy")
    assert.strictEqual(spitsy.age, 6)
    assert.strictEqual(spitsy.legs, 4)
    assert.strictEqual(spitsy.species, "cat")
    assert.strictEqual(spitsy.status, "sleeping")
    assert.strictEqual(spitsy.introduce(), "Hello, my name is Spitsy and I am 6 years old.  Meow meow!")
  })
  it("should work for random tests as well", () => {
    class Solution extends Animal {
      constructor(name, age, status) {
        super(name, age, 4, "cat", status)
      }
      introduce() {
        return super.introduce() + "  Meow meow!"
      }
    }
    let a, b, c
    for (let i = 0; i < 10; i++) {
      a = randomToken()
      b = randomNumber()
      c = randomToken()
      assert.strictEqual(new Cat(a, b, c).name, a)
      assert.strictEqual(new Cat(a, b, c).age, b)
      assert.strictEqual(new Cat(a, b, c).legs, 4)
      assert.strictEqual(new Cat(a, b, c).species, "cat")
      assert.strictEqual(new Cat(a, b, c).status, c)
      assert.strictEqual(new Cat(a, b, c).introduce(), new Solution(a, b, c).introduce())
    }
  })
})

describe("The Dog class", () => {
  it("should construct an object properly", () => {
    let doug = new Dog("Doug", 12, "Serving his master", "Eliza")
    assert.strictEqual(doug.name, "Doug")
    assert.strictEqual(doug.age, 12)
    assert.strictEqual(doug.legs, 4)
    assert.strictEqual(doug.species, "dog")
    assert.strictEqual(doug.status, "Serving his master")
    assert.strictEqual(doug.introduce(), "Hello, my name is Doug and I am 12 years old.")
    assert.strictEqual(doug.greetMaster(), "Hello Eliza")
  })
  it("should work for random tests as well", () => {
    class Solution extends Animal {
      constructor(name, age, status, master) {
        super(name, age, 4, "dog", status)
        this.master = master
      }
      greetMaster() {
        return `Hello ${this.master}`
      }
    }
    let a, b, c, d, dog, solution
    for (let i = 0; i < 6; i++) {
      a = randomToken()
      b = randomNumber()
      c = randomToken()
      d = randomToken()
      dog = new Dog(a, b, c, d)
      solution = new Solution(a, b, c, d)
      assert.strictEqual(dog.name, solution.name)
      assert.strictEqual(dog.age, solution.age)
      assert.strictEqual(dog.legs, solution.legs)
      assert.strictEqual(dog.species, solution.species)
      assert.strictEqual(dog.status, solution.status)
      assert.strictEqual(dog.introduce(), solution.introduce())
      assert.strictEqual(dog.greetMaster(), solution.greetMaster())
    }
  })
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name
    this.age = age
    this.legs = legs
    this.species = species
    this.status = status
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
