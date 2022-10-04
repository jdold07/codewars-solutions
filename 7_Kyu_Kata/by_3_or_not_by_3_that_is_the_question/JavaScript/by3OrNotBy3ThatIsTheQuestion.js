// 7 kyu - By 3, or not by 3?  That is the question . . .  [ ID: 59f7fc109f0e86d705000043  (by-3-or-not-by-3-that-is-the-question) ]
// URL: https://www.codewars.com/kata/59f7fc109f0e86d705000043
// Category: undefined  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
// *****************************************************************************
const divisibleByThree = (str) => (+str <= Number.MAX_SAFE_INTEGER ? !(str % 3) : !(eval(str.split("").join("+")) % 3))
// ~10% slower ** const divisibleByThree = (str) => !(eval(str.split("").join("+")) % 3)
// ~30% slower ** const divisibleByThree = (str) => +str <= Number.MAX_SAFE_INTEGER ? !(str % 3) : !([...str].reduce((a, c) => a + +c, 0) % 3)
// ~34% slower ** const divisibleByThree = (str) => !([...str].reduce((a, c) => a + +c, 0) % 3)
// ~41% slower ** const divisibleByThree = (str) => !(eval(str.match(/(.)/g).join("+")) % 3)
// ~80% slower ** const divisibleByThree = (str) => !(eval(str.replace(/(.)/g, "$1+").slice(0, -1)) % 3)

/* Tested on
  divisibleByThree("92329239744007574483128433869965431813058543224305674297058659965615141691498257583604")
  divisibleByThree("123")
  divisibleByThree("19254")
  divisibleByThree("88")
  divisibleByThree("1")
  divisibleByThree("123456789012345678901234567890")
  divisibleByThree("1234567890123456789009876543210987654321")
  divisibleByThree("12345678901234567890098765432109876543211234567890123456789009876543210987654321")
  divisibleByThree("1000002")
  divisibleByThree("1000000002")
  */
// Obviously results will vary the more the tests get skewed toward numbers exceeding Max Safe Integer
