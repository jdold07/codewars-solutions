//+ ====================================================================================================================
//+
//+ 8 kyu - Object Oriented Piracy   [ ID: 54fe05c4762e2e3047000add ] (object-oriented-piracy)
//+ URL: https://www.codewars.com/kata/54fe05c4762e2e3047000add
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew

  this.isWorthIt = () => this.draft - this.crew * 1.5 > 20
}

module.exports = { Ship }
