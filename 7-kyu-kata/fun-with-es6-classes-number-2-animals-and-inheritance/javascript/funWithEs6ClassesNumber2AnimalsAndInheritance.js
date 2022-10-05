// 7 kyu - Fun with ES6 Classes #2 - Animals and Inheritance  [ ID: 56f935002e6c0d55fa000d92  (fun-with-es6-classes-number-2-animals-and-inheritance) ]
// URL: https://www.codewars.com/kata/56f935002e6c0d55fa000d92
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status)
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status)
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status)
    this.master = master
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}
