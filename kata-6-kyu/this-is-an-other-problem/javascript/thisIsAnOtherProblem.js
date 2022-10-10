/* eslint-disable no-setter-return */
//+ ====================================================================================================================
//+
//+ 6 kyu - "this" is an other problem  [ ID: 547f1a8d4a437abdf800055c ] (this-is-an-other-problem)
//+ URL: https://www.codewars.com/kata/547f1a8d4a437abdf800055c
//+ Category: BUG_FIXES  |  Tags: OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES
//+
//+ ====================================================================================================================

class NamedOne {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    this.fullName = `${first} ${last}`
  }
  set firstName(first = this._firstName) {
    if (!first) return this._firstName
    this._firstName = first
    this._fullName = `${first} ${this._lastName}`
  }
  set lastName(last = this._lastName) {
    if (!last) return this._lastName
    this._lastName = last
    this._fullName = `${this._firstName} ${last}`
  }
  set fullName(full = this._fullName) {
    if (!/^\w* \w*$/.test(full)) return this._fullName
    this._firstName = full.replace(/(^\w*) (\w*$)/, "$1")
    this._lastName = full.replace(/(^\w*) (\w*$)/, "$2")
    this._fullName = `${this._firstName} ${this._lastName}`
  }
  get firstName() {
    return this._firstName
  }
  get lastName() {
    return this._lastName
  }
  get fullName() {
    return this._fullName
  }
}

module.exports = { NamedOne }
