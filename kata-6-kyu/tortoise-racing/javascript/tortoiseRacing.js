//+ ====================================================================================================================
//+
//+ 6 kyu - Tortoise racing  [ ID: 55e2adece53b4cdcb900006c ] (tortoise-racing)
//+ URL: https://www.codewars.com/kata/55e2adece53b4cdcb900006c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null
  } else {
    let answer = []
    let timeToCatch = g / (v2 - v1)
    answer.push(Math.floor(timeToCatch))
    answer.push(Math.floor((timeToCatch * 60) % 60))
    answer.push(Math.floor((timeToCatch * 3600) % 60))
    return answer
  }
}

module.exports = { race }
