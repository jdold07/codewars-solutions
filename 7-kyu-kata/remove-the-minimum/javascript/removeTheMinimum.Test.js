// 7 kyu - Remove the minimum  [ ID: 563cf89eb4747c5fb100001b  (remove-the-minimum) ]
// URL: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Category: REFERENCE  |  Tags: LISTS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("removeSmallest", function () {
  it("works for the examples", function () {
    Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]")
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]")
    Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]")
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []")
  })

  it("returns [] if the list has only one element", function () {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400)
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`)
    }
  })

  function randomArray(length) {
    return Array.from({ length: length }, () => ~~(Math.random() * 400))
  }

  it("returns a list that misses only one element", function () {
    for (let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1)
      if (Math.random() < 0.5) arr[~~(Math.random() * arr.length)] = Math.min(...arr)
      let l = arr.length
      Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`)
    }
  })

  it("check for mutations to original array/list", function () {
    let a = randomArray(~~(Math.random() * 18) + 2) // generates the array
    let b = a.slice() // makes a swallow copy
    removeSmallest(a) // uses the original array with the function
    Test.assertDeepEquals(
      a,
      b,
      "You've mutated input array/list (expectation assertion is on value of input array, not output of method)"
    ) // test the arrays match
  })

  it("works for random lists", function () {
    function solution(numbers) {
      numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
      return numbers
    }

    for (let i = 0; i < 20; ++i) {
      let arr = randomArray(~~(Math.random() * 20))
      Test.assertSimilar(removeSmallest(arr.slice()), solution(arr.slice()), `Wrong result for ${arr}`)
    }
  })
})
