// 7 kyu - Refactored Greeting  [ ID: 5121303128ef4b495f000001  (refactored-greeting) ]
// URL: https://www.codewars.com/kata/5121303128ef4b495f000001
// Category: REFACTORING  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING
// *****************************************************************************
class Person {
  constructor(name) {
    this.name = name
  }
  greet(name) {
    return `Hello ${name}, my name is ${this.name}`
  }
}
