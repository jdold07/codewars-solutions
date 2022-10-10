//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of numbers from 0 to N  [ ID: 56e9e4f516bcaa8d4f001763 ] (sum-of-numbers-from-0-to-n)
//+ URL: https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    return count === 0
      ? "0=0"
      : count < 0
      ? `${count}<0`
      : Array.from(Array(count + 1).keys()).join("+") + ` = ${(count * (count + 1)) / 2}`
  }

  return SequenceSum
})()

module.exports = SequenceSum
