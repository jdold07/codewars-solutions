// 8 kyu - Filling an array (part 1)  [ ID: 571d42206414b103dc0006a1  (filling-an-array-part-1) ]
// URL: https://www.codewars.com/kata/571d42206414b103dc0006a1
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("#arr creates a new array with the numbers 0 to N-1", () => {
  it("should return an array", (_) => Test.expect(arr() instanceof Array))
  it("should return a blank array when called with no argument", (_) => Test.assertSimilar(arr(), []))
  it("should return 0 to 9 when called with 10", (_) => Test.assertSimilar(arr(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
  it("should return 0 to N-1 where N is a random number", () => {
    const _arr = (N) => [
      ...(function* () {
        let i = 0
        while (i < N) yield i++
      })()
    ]
    let N = Math.round(Math.random() * 10) + 5
    Test.assertSimilar(arr(N), _arr(N))
  })
})
