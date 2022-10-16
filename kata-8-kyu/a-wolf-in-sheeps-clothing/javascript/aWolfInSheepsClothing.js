//+ ====================================================================================================================
//+
//+ 8 kyu - A wolf in sheep's clothing  [ ID: 5c8bfa44b9d1192e1ebd3d15 ] (a-wolf-in-sheeps-clothing)
//+ URL: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

function warnTheSheep(queue) {
  const sheep = queue.reverse().indexOf("wolf")
  return !sheep
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
}

module.exports = { warnTheSheep }
