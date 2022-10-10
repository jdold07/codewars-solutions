//+ ====================================================================================================================
//+
//+ 8 kyu - SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes  [ ID: 56ff9b53140fcca90b000530 ] (speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes)
//+ URL: https://www.codewars.com/kata/56ff9b53140fcca90b000530
//+ Category: GAMES  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING | PUZZLES
//+
//+ ====================================================================================================================
//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name
    this.age = age
    this.gender = gender
    this.species = species
    this.legs = 4
    this.size = size
    this.master = master
    this.loyal = loyal
  }
}

//+ ====================================================================================================================

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true)
  }
}

module.exports = { Labrador, Dog }
