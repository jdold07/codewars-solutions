//+ ====================================================================================================================
//+
//+ 7 kyu - Count the divisors of a number  [ ID: 542c0f198e077084c0000c2e ] (count-the-divisors-of-a-number)
//+ URL: https://www.codewars.com/kata/542c0f198e077084c0000c2e
//+ Category: REFERENCE  |  Tags: NUMBER THEORY | MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function divisors(n: number, c = 0) {
  for (let i = 1; i < n ** 0.5; n % 2 ? (i += 2) : i++) {
    if (!(n % i)) {
      c += 1
    }
  }
  return n > 1 ? c * 2 + (n ** 0.5 % 1 ? 0 : 1) : 1
}

export { divisors }
