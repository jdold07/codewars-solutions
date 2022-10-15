//+ ====================================================================================================================
//+
//+ 8 kyu - Do something "n.times" (Simplifying "for" loops)  [ ID: 56e6a330715e7221d9000a3b ] (do-something-n-dot-times-simplifying-for-loops)
//+ URL: https://www.codewars.com/kata/56e6a330715e7221d9000a3b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

Number.prototype.times = function (f) {
  let i = 0
  do {
    f(i)
    i++
  } while (i < this)
}

module.exports = Number.prototype
