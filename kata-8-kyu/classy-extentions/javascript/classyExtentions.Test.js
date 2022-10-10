//+ ====================================================================================================================
//+
//+ 8 kyu - Classy Extentions  [ ID: 55a14aa4817efe41c20000bc ] (classy-extentions)
//+ URL: https://www.codewars.com/kata/55a14aa4817efe41c20000bc
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Cat, Animal } = require("./classyExtentions")

it("Fixed Tests", () => {
  let cat = new Cat("Mr Whiskers")
  assert.strictEqual(cat.speak(), "Mr Whiskers meows.")
  cat = new Cat("Lamp")
  assert.strictEqual(cat.speak(), "Lamp meows.")
  cat = new Cat("$$Money Bags$$")
  assert.strictEqual(cat.speak(), "$$Money Bags$$ meows.")
})

let names = [
  "Mr Whiskers",
  "Lamp",
  "$$Money Bags$$",
  "meowmeow",
  "mirou",
  "milo",
  "spots",
  "dog",
  "llama",
  "code",
  "wars",
  "stripes",
  "dug",
  "barf"
]
it("Random Tests", () => {
  for (let i = 0; i < 50; i++) {
    let name = names[Math.floor(Math.random() * names.length)]
    const cat = new Cat(name)
    assert.strictEqual(cat.speak(), `${name} meows.`)
  }
})

it("Animal Test", () => {
  const animal = new Animal("noise")
  assert.strictEqual(animal.speak(), "noise makes a noise.")
})
