// [object Object] - Grasshopper - Bug Squashing  [ ID: 56214b6864fe8813f1000019  (grasshopper-bug-squashing) ]
// URL: https://www.codewars.com/kata/56214b6864fe8813f1000019
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
var health = 100
  var position = 0
  var coins = 0
  
  function main () {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
  }
