//+ ====================================================================================================================
//+
//+ 8 kyu - Did she say hallo?  [ ID: 56a4addbfd4a55694100001f ] (did-she-say-hallo)
//+ URL: https://www.codewars.com/kata/56a4addbfd4a55694100001f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { validateHello } = require("./didSheSayHallo")

it("Basic tests", () => {
  assert.strictEqual(validateHello("hello"), true)
  assert.strictEqual(validateHello("ciao"), true)
  assert.strictEqual(validateHello("salut"), true)
  assert.strictEqual(validateHello("hallo"), true)
  assert.strictEqual(validateHello("hola"), true)
  assert.strictEqual(validateHello("ahoj"), true)
  assert.strictEqual(validateHello("czesc"), true)
  assert.strictEqual(validateHello("meh"), false)
  assert.strictEqual(validateHello("Ahoj"), true)
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const validate_sol = (greetings) =>
    ((greetings) =>
      ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
        .map((a) => greetings.indexOf(a) != -1)
        .reduce((a, b) => a || b, false))(greetings.toLowerCase())
  const greetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
  const other = [
    "tschuss",
    "hombre",
    "hasta",
    "la",
    "vista",
    "que",
    "pasa",
    "wie",
    "tres",
    "bien",
    "how",
    "are",
    "you",
    "doing"
  ]
  const punctuation = ["", "", "", "", "", ",", ".", "?", ":", ";", "!"]

  for (let qu = 0; qu < 40; qu++) {
    let greeting = [],
      len = randint(3, 30)
    for (let q = 0; q < len; q++) {
      greeting.push(
        (randint(0, 10) == 0 ? greetings[randint(0, greetings.length - 1)] : other[randint(0, other.length - 1)]) +
          punctuation[randint(0, punctuation.length - 1)]
      )
    }
    greeting = greeting.join(" ")
    greeting = greeting
      .split("")
      .map((x) => (randint(0, 1) == 0 ? x : x.toUpperCase()))
      .join("")
    it(`Testing for "${greeting}"`, () => {
      assert.strictEqual(validateHello(greeting), validate_sol(greeting), "It should work for random inputs too")
    })
  }
})
