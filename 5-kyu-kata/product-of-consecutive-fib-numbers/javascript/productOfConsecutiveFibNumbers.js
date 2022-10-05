// 5 kyu - Product of consecutive Fib numbers  [ ID: 5541f58a944b85ce6d00006a  (product-of-consecutive-fib-numbers) ]
// URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a
// Category: REFERENCE  |  Tags: ALGORITHMS | MATHEMATICS
// *****************************************************************************
function productFib(prod) {
  let fN1 = 0
  let fN2 = 1
  while (fN1 * fN2 < prod) {
    let sum = fN1 + fN2
    fN1 = fN2
    fN2 = sum
  }
  return [fN1, fN2, fN1 * fN2 === prod]
}
