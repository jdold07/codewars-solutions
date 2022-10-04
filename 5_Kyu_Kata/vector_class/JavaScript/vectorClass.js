// 5 kyu - Vector class  [ ID: 526dad7f8c0eb5c4640000a4  (vector-class) ]
// URL: https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS | LINEAR ALGEBRA
// *****************************************************************************
class Vector {
  constructor(props) {
    this.val = props
  }
  _validate(other) {
    if (!(this.val.length === other.val.length)) throw new Error("Incompatible Vectors!")
  }
  add(other) {
    this._validate(other)
    return new Vector(this.val.map((v, i) => v + other.val[i]))
  }
  subtract(other) {
    this._validate(other)
    return new Vector(this.val.map((v, i) => v - other.val[i]))
  }
  dot(other) {
    this._validate(other)
    return this.val.reduce((a, c, i) => a + c * other.val[i], 0)
  }
  norm() {
    return this.val.reduce((a, c) => a + c ** 2, 0) ** 0.5
  }
  toString() {
    return `(${this.val.join(",")})`
  }
  equals(other) {
    return JSON.stringify(this) === JSON.stringify(other)
  }
}
