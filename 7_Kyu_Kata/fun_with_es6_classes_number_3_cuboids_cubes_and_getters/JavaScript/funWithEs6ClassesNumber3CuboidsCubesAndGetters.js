// 7 kyu - Fun with ES6 Classes #3 - Cuboids, Cubes and Getters  [ ID: 56fbdda707cff41b68000de2  (fun-with-es6-classes-number-3-cuboids-cubes-and-getters) ]
// URL: https://www.codewars.com/kata/56fbdda707cff41b68000de2
// Category: undefined  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }
  get surfaceArea() {
    return (this.length * this.width + this.length * this.height + this.width * this.height) * 2
  }
  get volume() {
    return this.length * this.width * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}
