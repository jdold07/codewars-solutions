// 8 kyu - Grader  [ ID: 53d16bd82578b1fb5b00128c  (grader) ]
// URL: https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Solution", function () {
  it("should pass some fixed tests", function () {
    Test.assertEquals(grader(1), "A")
    Test.assertEquals(grader(1.01), "F")
    Test.assertEquals(grader(0.2), "F")
    Test.assertEquals(grader(0.7), "C")
    Test.assertEquals(grader(0.8), "B")
    Test.assertEquals(grader(0.9), "A")
    Test.assertEquals(grader(0.6), "D")
    Test.assertEquals(grader(0.5), "F")
    Test.assertEquals(grader(0), "F")
  })

  it("should pass some random tets", function () {
    const tests = 100

    for (let i = 0; i < tests; ++i) {
      let test = Math.random() * 1.5
      Test.assertEquals(grader(test), solution(test))
    }
  })
})

function solution(score) {
  if (score <= 1) {
    if (score >= 0.9) {
      return "A"
    } else if (score >= 0.8) {
      return "B"
    } else if (score >= 0.7) {
      return "C"
    } else if (score >= 0.6) {
      return "D"
    } else if (score < 0.6) {
      return "F"
    }
  } else {
    return "F"
  }
}
