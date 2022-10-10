//+ ====================================================================================================================
//+
//+ 6 kyu - "this" is an other solution  [ ID: 54834b3559e638b39d0009a2 ] (this-is-an-other-solution)
//+ URL: https://www.codewars.com/kata/54834b3559e638b39d0009a2
//+ Category: BUG_FIXES  |  Tags: OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES
//+
//+ ====================================================================================================================

class OnceNamedOne {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
    this.fullName = `${first} ${last}`
    Object.freeze(this)
  }
}

module.exports = { OnceNamedOne }
