//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Bug Squashing  [ ID: 56214b6864fe8813f1000019 ] (grasshopper-bug-squashing)
//+ URL: https://www.codewars.com/kata/56214b6864fe8813f1000019
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================
//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const log = []
const rollDice = () => log.push("rollDice")
const move = () => log.push("move")
const combat = () => log.push("combat")
const getCoins = () => log.push("getCoins")
const buyHealth = () => log.push("buyHealth")
const printStatus = () => log.push("printStatus")

//+ ====================================================================================================================

let health = 100
let position = 0
let coins = 0

function main() {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

module.exports = { main, health, position, coins, log }
