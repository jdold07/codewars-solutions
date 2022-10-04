// 6 kyu - Take a Number And Sum  Its Digits Raised To The Consecutive Powers And ....¡Eureka!!  [ ID: 5626b561280a42ecc50000d1  (take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka) ]
// URL: https://www.codewars.com/kata/5626b561280a42ecc50000d1
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
function sumDigPow(a, b) {
  eurekaArray = []
  function isEureka(num) {
    if (num > 0 && num < 10) return true
    test = (num + "").split("")
    for (let j = 0; j < test.length; j++) {
      test.splice(j, 1, parseInt(test[j], 10) ** (j + 1))
    }
    if (test.reduce((a, b) => a + b, 0) === num) return true
    return false
  }
  for (i = a; i <= b; i++) {
    if (isEureka(i)) eurekaArray.push(i)
  }
  return eurekaArray
}
