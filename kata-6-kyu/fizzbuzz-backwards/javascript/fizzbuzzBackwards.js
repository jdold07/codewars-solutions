//+ ====================================================================================================================
//+
//+ 6 kyu - FizzBuzz Backwards  [ ID: 59ad13d5589d2a1d84000020 ] (fizzbuzz-backwards)
//+ URL: https://www.codewars.com/kata/59ad13d5589d2a1d84000020
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function reverseFizzBuzz(array) {
  const arr = [...Array(101).keys()].slice(1)
  for (let n = 1; n < 51; n++) {
    for (let m = 1; m < 51; m++) {
      if (
        RegExp(array.join(",")).test(
          arr.map((v) => (!(v % n) && !(v % m) ? "FizzBuzz" : !(v % n) ? "Fizz" : !(v % m) ? "Buzz" : v)).join(",")
        )
      )
        return [n, m]
    }
  }
}

module.exports = { reverseFizzBuzz }
