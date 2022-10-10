//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Terminal Game #1  [ ID: 55e8aba23d399a59500000ce ] (grasshopper-terminal-game-number-1)
//+ URL: https://www.codewars.com/kata/55e8aba23d399a59500000ce
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function Hero(name = "Hero") {
  this.name = name
  this.position = "00"
  this.health = 100
  this.damage = 5
  this.experience = 0
}

module.exports = { Hero }
