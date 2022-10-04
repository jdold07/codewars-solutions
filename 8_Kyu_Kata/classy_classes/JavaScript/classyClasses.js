// 8 kyu - Classy Classes  [ ID: 55a144eff5124e546400005a  (classy-classes) ]
// URL: https://www.codewars.com/kata/55a144eff5124e546400005a
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
class Person {
    constructor(name, age) {
      this.name = name
      this.age = age  
    }
    get info() {
      return this.sentance()
    }
    sentance() {
      return `${this.name}s age is ${this.age}`
    }
  }
