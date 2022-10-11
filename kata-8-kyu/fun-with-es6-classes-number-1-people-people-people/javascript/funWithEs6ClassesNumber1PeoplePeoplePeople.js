//+ ====================================================================================================================
//+
//+ 8 kyu - Fun with ES6 Classes #1 - People, people, people  [ ID: 56f7f8215d7c12c0e7000b19 ] (fun-with-es6-classes-number-1-people-people-people)
//+ URL: https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

module.exports = { Person }
