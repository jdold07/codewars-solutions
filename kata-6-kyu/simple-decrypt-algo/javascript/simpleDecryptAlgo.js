//+ ====================================================================================================================
//+
//+ 6 kyu - Simple decrypt algo  [ ID: 58693136b98de0e4910001ab ] (simple-decrypt-algo)
//+ URL: https://www.codewars.com/kata/58693136b98de0e4910001ab
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function decrypt(encryption) {
  return [..."abcdefghijklmnopqrstuvwxyz"]
    .map(
      (v) =>
        encryption
          .replace(/[^a-z]/g, "")
          .split("")
          .reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {})[v] || 0
    )
    .join("")
}

module.exports = { decrypt }
