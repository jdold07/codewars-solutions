// 7 kyu - JavaScript class-like objects  [ ID: 513e1e47c600c93cef000001  (javascript-class-like-objects) ]
// URL: https://www.codewars.com/kata/513e1e47c600c93cef000001
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  toString() {
    return `${this.name} is a ${this.type}`
  }
}
