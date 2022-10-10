//+ ====================================================================================================================
//+
//+ 6 kyu - Convert string to camel case  [ ID: 517abf86da9663f1d2000003 ] (convert-string-to-camel-case)
//+ URL: https://www.codewars.com/kata/517abf86da9663f1d2000003
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { toCamelCase } = require("./convertStringToCamelCase")

describe("toCamelCase", function () {
  it("should handle empty values", function () {
    assert.strictEqual(toCamelCase(""), "", "An empty string was provided but not returned")
  })

  it("should remove underscores and convert first letter of word to upper case", function () {
    assert.strictEqual(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    )
    assert.strictEqual(
      toCamelCase("The_stealth_warrior"),
      "TheStealthWarrior",
      "toCamelCase('The_stealth_warrior') did not return correct value"
    )
  })

  it("should remove hyphens and convert first letter of word to upper case", function () {
    assert.strictEqual(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    )
    assert.strictEqual(
      toCamelCase("the-Stealth-Warrior"),
      "theStealthWarrior",
      "toCamelCase('the-Stealth-Warrior') did not return correct value"
    )
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    assert.strictEqual(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
    assert.strictEqual(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
  })
})
