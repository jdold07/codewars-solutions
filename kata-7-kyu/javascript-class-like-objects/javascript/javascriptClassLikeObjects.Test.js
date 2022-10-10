//+ ====================================================================================================================
//+
//+ 7 kyu - JavaScript class-like objects  [ ID: 513e1e47c600c93cef000001 ] (javascript-class-like-objects)
//+ URL: https://www.codewars.com/kata/513e1e47c600c93cef000001
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { expect } = require("chai")
const { Animal } = require("./javascriptClassLikeObjects")

describe("Tests", () => {
  it("test", () => {
    let cat = new Animal("Sam", "cat")
    expect(cat.name == "Sam", "animal.name does not return correct value")
    expect(cat.type == "cat", "animal.type does not return correct value")
    expect(cat.toString() == "Sam is a cat", "animal.toString() does not return correct value")
    cat.name = "Max"
    expect(cat.toString() == "Max is a cat", "animal.toString() does not return correct value")
  })
})
