// 7 kyu - Thinkful - Object Drills: Quarks  [ ID: 5882b052bdeafec15e0000e6  (thinkful-object-drills-quarks) ]
// URL: https://www.codewars.com/kata/5882b052bdeafec15e0000e6
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
class Quark {
  #baryonNumber = 1 / 3
  constructor(color, flavor) {
    this.color = color
    this.flavor = flavor
  }
  set color(color) {
    if (!["red", "blue", "green"].includes(color)) {
      throw "Invalid Colour!"
    }
    this._color = color
  }
  set flavor(flavor) {
    if (!["up", "down", "strange", "charm", "top", "bottom"].includes(flavor)) {
      throw "Invalid Flavour!"
    }
    this._flavor = flavor
  }
  get color() {
    return this._color
  }
  get flavor() {
    return this._flavor
  }
  get baryon_number() {
    return this.#baryonNumber
  }
  interact(other) {
    return ([this.color, other.color] = [other.color, this.color])
  }
}
