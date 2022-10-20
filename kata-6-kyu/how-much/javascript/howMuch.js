//+ ====================================================================================================================
//+
//+ 6 kyu - How Much?  [ ID: 55b4d87a3766d9873a0000d4 ] (how-much)
//+ URL: https://www.codewars.com/kata/55b4d87a3766d9873a0000d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function howMuch(m, n) {
  const arr = []
  for (let i = 5; i * 7 + 2 <= Math.max(m, n); i += 9) {
    if (i * 7 + 2 >= Math.min(m, n)) {
      arr.push([`M: ${7 * i + 2}`, `B: ${i}`, `C: ${((i - 5) / 9) * 7 + 4}`])
    }
  }
  return arr
}

module.exports = { howMuch }
