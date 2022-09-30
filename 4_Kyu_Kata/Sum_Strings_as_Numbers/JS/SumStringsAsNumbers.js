//* What you think would do it, but the numbers in tests are larger than MAX_SAFE_INT ... so it won't work!
// const sumStrings = (a, b) => `${+a + +b}`

//* Could simply use BigInt, but I don't feel like that is inline with the spirit of the Kata
// const sumStrings = (a, b) => `${BigInt(a) + BigInt(b)}`

//* Kata says it will only include characters the 10 numerals from 0-9, implies no negative numbers
//* The method below (I think, without having written it yet) will not work for negative numbers
//* My submitted solution...

/* const divMod = (int) => [Math.floor(int / 10), int % 10]

function sumStrings(a, b) {
  let x = [...a].reverse()
  let y = [...b].reverse()
  let carry = 0,
    res = []

  if (x.length < y.length) [x, y] = [y, x]

  for (let i = 0; i < x.length; i++) {
    let [tens, ones] = divMod(+x[i] + (+y[i] || 0) + carry)
    carry = tens
    res.push(ones)
    if (i === x.length - 1 && tens > 0) {
      x.push("0")
      y.push("0")
    }
  }
  if (carry) x.push(carry)

  return res
    .reverse()
    .join("")
    .replace(/^0*(?!$)/, "")
} */

//* My submitted idea / algo, tweaked a little on review after submission
const divMod = (int) => [Math.floor(int / 10), int % 10]

function sumStrings(a, b) {
  let x = [...a],
    y = [...b],
    carry = 0,
    res = []

  while (x.length || y.length || carry) {
    let [tens, ones] = divMod((+x.pop() || 0) + (+y.pop() || 0) + carry)
    carry = tens
    res.push(ones)
  }

  return res
    .reverse()
    .join("")
    .replace(/^0*(?!$)/, "")
}

exports = module.exports = sumStrings

//* Solution from test cases for reference
// const BigNumber = require("bignumber.js")

// function sumStringsSol(a, b) {
//   if (!a) a = "0"
//   if (!b) b = "0"
//   return new BigNumber(a)
//     .plus(new BigNumber(b))
//     .toFixed(0)
// }

//* Log tests prior to submission
// console.log(sumStrings("0", "0") === "0")
// console.log(sumStrings("1", "9") === "10")
// console.log(sumStrings("123", "456") === "579")
// console.log(sumStrings("321", "654") === "975")
// console.log(sumStrings("9999", "000000999") === "10998")
// console.log(sumStrings("9999", "0") === "9999")
// console.log(
//   sumStrings(
//     "99999999999999999999999999999999999999999999999999999999999999999999999999999999",
//     "99999999999999999999999999999999999999999999999999999999999999999999999999999999"
//   )
// )
