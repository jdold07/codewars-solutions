//+ ====================================================================================================================
//+
//+ 6 kyu - Build Tower  [ ID: 576757b1df89ecf5bd00073b ] (build-tower)
//+ URL: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
//+ Category: REFERENCE  |  Tags: STRINGS | ASCII ART | FUNDAMENTALS
//+
//+ ====================================================================================================================

function towerBuilder(nFloors) {
  const lineLength = nFloors * 2 - 1
  let arr = []
  for (let i = 1; i <= lineLength; i += 2) {
    arr.push(" ".repeat((lineLength - i) / 2) + "*".repeat(i) + " ".repeat((lineLength - i) / 2))
  }
  return arr
}

module.exports = { towerBuilder }
