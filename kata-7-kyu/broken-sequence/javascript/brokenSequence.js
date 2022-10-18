//+ ====================================================================================================================
//+
//+ 7 kyu - Broken sequence  [ ID: 5512e5662b34d88e44000060 ] (broken-sequence)
//+ URL: https://www.codewars.com/kata/5512e5662b34d88e44000060
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function findMissingNumber(sequence) {
  const sqnce = sequence.split(" ").sort((a, b) => +a - +b)
  if (sqnce.filter((v) => +v == v).length !== sqnce.length) return 1
  if (sqnce[0] === "" || sqnce.every((v, i) => +v === i + 1)) return 0
  return sqnce.findIndex((v, i) => +v !== i + 1) + 1
}

module.exports = { findMissingNumber }
